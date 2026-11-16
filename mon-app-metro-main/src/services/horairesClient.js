// src/services/horairesClient.js
// Client hybride Web (/api/horaires) + Capacitor APK natif (PRIM direct via CapacitorHttp)

import { getIdfmLineId, getLineCodeFromRef } from '../data/idfmMapping.js';

const PRIM_ENDPOINT = 'https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring';
const DEFAULT_PRIM_API_KEY = 'GPq23DCtJT4YYPtF2AzXfUSs8coqVbBL';

function toStopAreaRef(raw) {
  const clean = String(raw || '').replace(/[^a-zA-Z0-9_-]/g, '');
  if (!clean) return null;
  return String(raw).startsWith('STIF:StopArea:SP:')
    ? (String(raw).endsWith(':') ? raw : `${raw}:`)
    : `STIF:StopArea:SP:${clean}:`;
}

function toStopPointRef(raw) {
  const clean = String(raw || '').replace(/[^a-zA-Z0-9_-]/g, '');
  if (!clean) return null;
  return String(raw).startsWith('STIF:StopPoint:Q:')
    ? (String(raw).endsWith(':') ? raw : `${raw}:`)
    : `STIF:StopPoint:Q:${clean}:`;
}

function resolveLineFilter(lineId) {
  if (!lineId) return { idfmLineId: null, lineRef: null, lineCode: null };
  const s = String(lineId).trim();
  const cMatch = s.match(/C\d{5}/i);
  if (cMatch) {
    const idfmLineId = cMatch[0].toUpperCase();
    return {
      idfmLineId,
      lineRef: `STIF:Line::${idfmLineId}:`,
      lineCode: getLineCodeFromRef(idfmLineId),
    };
  }
  const resolvedId = getIdfmLineId(s);
  if (resolvedId) {
    return {
      idfmLineId: resolvedId,
      lineRef: `STIF:Line::${resolvedId}:`,
      lineCode: s,
    };
  }
  return { idfmLineId: null, lineRef: null, lineCode: s };
}

function formatParisHHMM(epochMs) {
  try {
    return new Intl.DateTimeFormat('fr-FR', {
      timeZone: 'Europe/Paris',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(epochMs));
  } catch {
    const d = new Date(epochMs);
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }
}

export function parseSiriDeliveries(siriJson, nowMs = Date.now()) {
  const passages = [];
  const messages = [];

  const serviceDelivery = siriJson?.Siri?.ServiceDelivery;
  const deliveries = serviceDelivery?.StopMonitoringDelivery || [];

  for (const delivery of deliveries) {
    if (delivery?.ErrorCondition?.Description) {
      messages.push(delivery.ErrorCondition.Description);
    }
    const visits = delivery?.MonitoredStopVisit || [];
    for (const visit of visits) {
      const mvj = visit?.MonitoredVehicleJourney || {};
      const mc = mvj?.MonitoredCall || {};

      const lineRefRaw = mvj?.LineRef?.value || '';
      const idfmMatch = String(lineRefRaw).match(/C\d{5}/i);
      const idfmLineId = idfmMatch ? idfmMatch[0].toUpperCase() : null;
      const lineCode = getLineCodeFromRef(lineRefRaw || idfmLineId);

      const hasDepartureTime = Boolean(mc.ExpectedDepartureTime || mc.AimedDepartureTime);
      const hasArrivalTime = Boolean(mc.ExpectedArrivalTime || mc.AimedArrivalTime);
      if (!hasDepartureTime && hasArrivalTime) {
        continue;
      }

      const expectedIso =
        mc.ExpectedDepartureTime ||
        mc.ExpectedArrivalTime ||
        mc.AimedDepartureTime ||
        mc.AimedArrivalTime ||
        null;
      const aimedIso = mc.AimedDepartureTime || mc.AimedArrivalTime || null;

      if (!expectedIso) continue;
      const expectedMs = Date.parse(expectedIso);
      if (Number.isNaN(expectedMs)) continue;

      const diffMs = expectedMs - nowMs;
      const diffSeconds = Math.round(diffMs / 1000);
      const isAtStop = Boolean(mc.VehicleAtStop);

      if (!isAtStop && diffSeconds < -45) {
        continue;
      }

      const waitMinutes = Math.max(0, Math.round(diffMs / 60000));
      const statusRaw = String(mc.DepartureStatus || mc.ArrivalStatus || '').toLowerCase();
      const callNote = (mc.CallNote || [])
        .map((c) => c?.value)
        .filter(Boolean)
        .join(' ');
      const callNoteLow = callNote.toLowerCase();

      const destination =
        mvj?.DestinationName?.[0]?.value ||
        mc?.DestinationDisplay?.[0]?.value ||
        mvj?.DirectionName?.[0]?.value ||
        'Terminus inconnu';

      const journeyNote = mvj?.JourneyNote?.[0]?.value || null;
      const vehicleJourneyName = mvj?.VehicleJourneyName?.[0]?.value || null;
      const missionCode =
        journeyNote ||
        (vehicleJourneyName && /^[A-Z]{4}/.test(vehicleJourneyName)
          ? vehicleJourneyName.slice(0, 4)
          : null);
      const trainNumber =
        vehicleJourneyName && vehicleJourneyName !== missionCode ? vehicleJourneyName : null;

      const platform = mc?.DeparturePlatformName?.value || mc?.ArrivalPlatformName?.value || null;

      let state = 'onTime';
      let displayWait = '';

      if (statusRaw === 'cancelled') {
        state = 'cancelled';
        displayWait = 'Supprimé';
      } else if (callNoteLow.includes('à quai') || isAtStop || diffSeconds <= 20) {
        state = statusRaw === 'delayed' ? 'delayed' : 'atStop';
        displayWait = 'À quai';
      } else if (callNoteLow.includes('approche') || diffSeconds <= 60) {
        state = statusRaw === 'delayed' ? 'delayed' : 'approaching';
        displayWait = "À l'approche";
      } else if (waitMinutes <= 60) {
        state = statusRaw === 'delayed' ? 'delayed' : 'onTime';
        displayWait = `${waitMinutes} min`;
      } else {
        state = statusRaw === 'delayed' ? 'delayed' : 'onTime';
        displayWait = formatParisHHMM(expectedMs);
      }

      const datedRef = mvj?.FramedVehicleJourneyRef?.DatedVehicleJourneyRef || '';
      passages.push({
        id:
          visit?.ItemIdentifier ||
          `${idfmLineId || 'line'}-${destination}-${expectedMs}-${missionCode || ''}`,
        idfmLineId,
        lineCode,
        lineRef: lineRefRaw,
        destination,
        directionRef: mvj?.DirectionRef?.value || null,
        stopPointName: mc?.StopPointName?.[0]?.value || null,
        expectedTime: expectedIso,
        aimedTime: aimedIso,
        expectedTimestamp: expectedMs,
        formattedTime: formatParisHHMM(expectedMs),
        waitMinutes,
        displayWait,
        state,
        status: statusRaw || 'onTime',
        isAtStop,
        callNote: callNote || null,
        missionCode,
        trainNumber,
        platform,
        datedVehicleJourneyRef: datedRef || null,
      });
    }
  }

  const gmDeliveries = serviceDelivery?.GeneralMessageDelivery || [];
  for (const gmd of gmDeliveries) {
    for (const msg of gmd?.InfoMessage || []) {
      const txt =
        msg?.Content?.Message?.[0]?.MessageText?.value ||
        msg?.Content?.LineSection?.MessageText?.value;
      if (txt && !messages.includes(txt)) {
        messages.push(txt);
      }
    }
  }

  return { passages, messages };
}

async function fetchDirectPrim({ stopAreaIds, stopPointIds, lineId, signal }) {
  const uniqueAreaRefs = [...new Set((stopAreaIds || []).map(toStopAreaRef).filter(Boolean))].slice(0, 10);
  const uniquePointRefs = [...new Set((stopPointIds || []).map(toStopPointRef).filter(Boolean))].slice(0, 8);
  const requestedLine = resolveLineFilter(lineId);
  const nowMs = Date.now();

  const allPassages = [];
  const allMessages = [];
  const queryErrors = [];
  const queriedRefs = [];

  async function querySingle(mref) {
    queriedRefs.push(mref);
    const url = new URL(PRIM_ENDPOINT);
    url.searchParams.set('MonitoringRef', mref);
    if (requestedLine.lineRef) {
      url.searchParams.set('LineRef', requestedLine.lineRef);
    }
    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        apikey: DEFAULT_PRIM_API_KEY,
        Accept: 'application/json',
      },
      signal,
    });
    if (!res.ok) {
      throw new Error(`PRIM HTTP ${res.status}`);
    }
    const json = await res.json();
    return parseSiriDeliveries(json, nowMs);
  }

  async function runBatch(refs) {
    const settled = await Promise.allSettled(refs.map((ref) => querySingle(ref)));
    for (const r of settled) {
      if (r.status === 'fulfilled') {
        allPassages.push(...r.value.passages);
        for (const msg of r.value.messages) {
          if (!allMessages.includes(msg)) allMessages.push(msg);
        }
      } else {
        queryErrors.push(r.reason?.message || 'Erreur PRIM');
      }
    }
  }

  if (uniqueAreaRefs.length > 0) {
    await runBatch(uniqueAreaRefs);
  }
  if (allPassages.length === 0 && uniquePointRefs.length > 0) {
    await runBatch(uniquePointRefs);
  }

  let filtered = allPassages;
  if (requestedLine.idfmLineId || requestedLine.lineCode) {
    filtered = allPassages.filter((p) => {
      if (requestedLine.idfmLineId && p.idfmLineId) {
        return p.idfmLineId === requestedLine.idfmLineId;
      }
      if (requestedLine.lineCode && p.lineCode) {
        return p.lineCode.toLowerCase() === requestedLine.lineCode.toLowerCase();
      }
      return true;
    });
  }

  const seen = new Set();
  const deduped = [];
  filtered.sort((a, b) => a.expectedTimestamp - b.expectedTimestamp);
  for (const p of filtered) {
    const key = `${p.idfmLineId || p.lineCode}|${p.destination}|${p.missionCode || p.trainNumber || ''}|${Math.round(p.expectedTimestamp / 15000)}`;
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(p);
    }
  }

  if (deduped.length === 0 && queryErrors.length > 0 && queryErrors.length >= queriedRefs.length) {
    throw new Error('Service temps réel PRIM temporairement indisponible.');
  }

  return {
    passages: deduped,
    messages: allMessages,
    fetchedAt: new Date(nowMs).toISOString(),
  };
}

export async function fetchHorairesForStation({ stopAreaIds, stopPointIds, lineId, signal }) {
  const isNative = Boolean(
    typeof window !== 'undefined' &&
    window.Capacitor &&
    typeof window.Capacitor.isNativePlatform === 'function' &&
    window.Capacitor.isNativePlatform()
  );

  if (isNative) {
    return fetchDirectPrim({ stopAreaIds, stopPointIds, lineId, signal });
  }

  const params = new URLSearchParams();
  if (stopAreaIds?.length > 0) {
    params.set('stopAreaIds', stopAreaIds.join(','));
  }
  if (stopPointIds?.length > 0) {
    params.set('stopPointIds', stopPointIds.slice(0, 8).join(','));
  }
  if (lineId) {
    params.set('lineId', lineId);
  }

  const res = await fetch(`/api/horaires?${params.toString()}`, {
    signal,
    headers: { Accept: 'application/json' },
  });
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.error || `Erreur serveur (${res.status})`);
  }

  return data;
}
