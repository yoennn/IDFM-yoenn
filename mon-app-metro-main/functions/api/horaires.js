// Cloudflare Pages Function (et handler partagé dev Vite) pour /api/horaires
// Proxy sécurisé vers l'API PRIM Île-de-France Mobilités (SIRI Lite StopMonitoring)

const DEFAULT_PRIM_API_KEY = "GPq23DCtJT4YYPtF2AzXfUSs8coqVbBL";
const PRIM_ENDPOINT = "https://prim.iledefrance-mobilites.fr/marketplace/stop-monitoring";

const IDFM_LINE_ID_TO_CODE = {
  C01371: "1",
  C01372: "2",
  C01373: "3",
  C01386: "3bis",
  C01374: "4",
  C01375: "5",
  C01376: "6",
  C01377: "7",
  C01387: "7bis",
  C01378: "8",
  C01379: "9",
  C01380: "10",
  C01381: "11",
  C01382: "12",
  C01383: "13",
  C01384: "14",
  C02874: "15",
  C02833: "18",
  C01742: "A",
  C01743: "B",
  C01727: "C",
  C01728: "D",
  C01729: "E",
  C01737: "H",
  C01739: "J",
  C01738: "K",
  C01740: "L",
  C01736: "N",
  C01730: "P",
  C01731: "R",
  C01741: "U",
  C02711: "V",
  C01389: "T1",
  C01390: "T2",
  C01391: "T3a",
  C01679: "T3b",
  C01843: "T4",
  C01684: "T5",
  C01794: "T6",
  C01774: "T7",
  C01795: "T8",
  C02317: "T9",
  C02528: "T10",
  C01999: "T11",
  C02529: "T12",
  C02344: "T13",
  C02732: "T14",
};

const CODE_TO_IDFM_LINE_ID = Object.fromEntries(
  Object.entries(IDFM_LINE_ID_TO_CODE).map(([id, code]) => [code.toLowerCase(), id])
);

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}

function parseIdList(raw) {
  if (!raw) return [];
  return String(raw)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function toStopAreaRef(raw) {
  if (raw.startsWith("STIF:StopArea:SP:")) {
    return raw.endsWith(":") ? raw : `${raw}:`;
  }
  const clean = raw.replace(/[^a-zA-Z0-9_-]/g, "");
  return clean ? `STIF:StopArea:SP:${clean}:` : null;
}

function toStopPointRef(raw) {
  if (raw.startsWith("STIF:StopPoint:Q:")) {
    return raw.endsWith(":") ? raw : `${raw}:`;
  }
  const clean = raw.replace(/[^a-zA-Z0-9_-]/g, "");
  return clean ? `STIF:StopPoint:Q:${clean}:` : null;
}

function resolveRequestedLine(rawLineId) {
  if (!rawLineId) return { idfmLineId: null, lineRef: null, lineCode: null };
  const s = String(rawLineId).trim();
  const cMatch = s.match(/C\d{5}/i);
  if (cMatch) {
    const idfmLineId = cMatch[0].toUpperCase();
    return {
      idfmLineId,
      lineRef: `STIF:Line::${idfmLineId}:`,
      lineCode: IDFM_LINE_ID_TO_CODE[idfmLineId] || null,
    };
  }
  const byCode = CODE_TO_IDFM_LINE_ID[s.toLowerCase()];
  if (byCode) {
    return {
      idfmLineId: byCode,
      lineRef: `STIF:Line::${byCode}:`,
      lineCode: IDFM_LINE_ID_TO_CODE[byCode],
    };
  }
  return { idfmLineId: null, lineRef: null, lineCode: s };
}

function extractIdfmLineId(lineRefValue) {
  if (!lineRefValue) return null;
  const str = String(lineRefValue).trim();
  const m = str.match(/C\d{5}/i);
  if (m) return m[0].toUpperCase();
  const inner = str.replace(/^STIF:Line::|:$/g, "");
  return inner || null;
}

function formatParisHHMM(epochMs) {
  try {
    return new Intl.DateTimeFormat("fr-FR", {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(epochMs));
  } catch {
    const d = new Date(epochMs);
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  }
}

async function fetchPrimStopMonitoring(monitoringRef, lineRef, apiKey) {
  const url = new URL(PRIM_ENDPOINT);
  url.searchParams.set("MonitoringRef", monitoringRef);
  if (lineRef) {
    url.searchParams.set("LineRef", lineRef);
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);

  try {
    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        apikey: apiKey,
        Accept: "application/json",
        "User-Agent": "ratpmetro-idfm-realtime/1.0",
      },
      signal: controller.signal,
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      throw new Error(`PRIM HTTP ${res.status}${errText ? `: ${errText.slice(0, 180)}` : ""}`);
    }

    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

function parseSiriDeliveries(siriJson, nowMs) {
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

      const lineRefRaw = mvj?.LineRef?.value || "";
      const idfmLineId = extractIdfmLineId(lineRefRaw);
      const lineCode = idfmLineId ? IDFM_LINE_ID_TO_CODE[idfmLineId] || null : null;

      // Exclure uniquement les arrivées pures sans horaire de départ (terminus SNCF)
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

      // Ignorer les trains fantômes déjà partis depuis plus de 45s (sauf s'ils sont encore marqués à quai)
      if (!isAtStop && diffSeconds < -45) {
        continue;
      }

      const waitMinutes = Math.max(0, Math.round(diffMs / 60000));
      const statusRaw = String(mc.DepartureStatus || mc.ArrivalStatus || "").toLowerCase();
      const callNote = (mc.CallNote || [])
        .map((c) => c?.value)
        .filter(Boolean)
        .join(" ");
      const callNoteLow = callNote.toLowerCase();

      const destination =
        mvj?.DestinationName?.[0]?.value ||
        mc?.DestinationDisplay?.[0]?.value ||
        mvj?.DirectionName?.[0]?.value ||
        "Terminus inconnu";

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

      let state = "onTime";
      let displayWait = "";

      if (statusRaw === "cancelled") {
        state = "cancelled";
        displayWait = "Supprimé";
      } else if (callNoteLow.includes("à quai") || isAtStop || diffSeconds <= 20) {
        state = statusRaw === "delayed" ? "delayed" : "atStop";
        displayWait = "À quai";
      } else if (callNoteLow.includes("approche") || diffSeconds <= 60) {
        state = statusRaw === "delayed" ? "delayed" : "approaching";
        displayWait = "À l'approche";
      } else if (waitMinutes <= 60) {
        state = statusRaw === "delayed" ? "delayed" : "onTime";
        displayWait = `${waitMinutes} min`;
      } else {
        state = statusRaw === "delayed" ? "delayed" : "onTime";
        displayWait = formatParisHHMM(expectedMs);
      }

      const datedRef = mvj?.FramedVehicleJourneyRef?.DatedVehicleJourneyRef || "";
      passages.push({
        id:
          visit?.ItemIdentifier ||
          `${idfmLineId || "line"}-${destination}-${expectedMs}-${missionCode || ""}`,
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
        status: statusRaw || "onTime",
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

export async function onRequest(context) {
  const request = context.request;
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204 });
  }
  if (request.method !== "GET") {
    return jsonResponse({ error: "Méthode non autorisée" }, 405);
  }

  const url = new URL(request.url);
  const stopAreaParams = [
    ...parseIdList(url.searchParams.get("stopAreaId")),
    ...parseIdList(url.searchParams.get("stopAreaIds")),
  ];
  const stopPointParams = [
    ...parseIdList(url.searchParams.get("stopPointId")),
    ...parseIdList(url.searchParams.get("stopPointIds")),
  ];
  const rawLineParam = url.searchParams.get("lineId") || url.searchParams.get("lineCode") || "";

  const uniqueAreaRefs = [...new Set(stopAreaParams.map(toStopAreaRef).filter(Boolean))].slice(0, 10);
  const uniquePointRefs = [...new Set(stopPointParams.map(toStopPointRef).filter(Boolean))].slice(0, 8);

  if (uniqueAreaRefs.length === 0 && uniquePointRefs.length === 0) {
    return jsonResponse(
      { error: "Paramètre stopAreaId(s) ou stopPointIds manquant.", passages: [] },
      400
    );
  }

  const requestedLine = resolveRequestedLine(rawLineParam);
  const apiKey =
    context?.env?.PRIM_API_KEY ||
    (typeof process !== "undefined" ? process.env?.PRIM_API_KEY : null) ||
    DEFAULT_PRIM_API_KEY;

  const nowMs = Date.now();
  const allPassages = [];
  const allMessages = [];
  const queryErrors = [];
  const queriedRefs = [];

  async function runBatch(refs) {
    const results = await Promise.allSettled(
      refs.map(async (mref) => {
        queriedRefs.push(mref);
        const siriJson = await fetchPrimStopMonitoring(mref, requestedLine.lineRef, apiKey);
        return parseSiriDeliveries(siriJson, nowMs);
      })
    );
    for (const r of results) {
      if (r.status === "fulfilled") {
        allPassages.push(...r.value.passages);
        for (const msg of r.value.messages) {
          if (!allMessages.includes(msg)) allMessages.push(msg);
        }
      } else {
        queryErrors.push(r.reason?.message || "Erreur PRIM inconnue");
      }
    }
  }

  // Interrogation principale par StopArea (STIF:StopArea:SP:<id>:)
  if (uniqueAreaRefs.length > 0) {
    await runBatch(uniqueAreaRefs);
  }

  // Bascule / complément sur StopPoint (STIF:StopPoint:Q:<id>:) si aucun passage obtenu via StopArea
  if (allPassages.length === 0 && uniquePointRefs.length > 0) {
    await runBatch(uniquePointRefs);
  }

  // Filtrage strict par ligne si lineId / lineCode était fourni
  let filteredPassages = allPassages;
  if (requestedLine.idfmLineId || requestedLine.lineCode) {
    filteredPassages = allPassages.filter((p) => {
      if (requestedLine.idfmLineId && p.idfmLineId) {
        return p.idfmLineId === requestedLine.idfmLineId;
      }
      if (requestedLine.lineCode && p.lineCode) {
        return p.lineCode.toLowerCase() === requestedLine.lineCode.toLowerCase();
      }
      return true;
    });
  }

  // Dédoublonnage + tri chronologique
  const seen = new Set();
  const dedupedPassages = [];
  filteredPassages.sort((a, b) => a.expectedTimestamp - b.expectedTimestamp);
  for (const p of filteredPassages) {
    const key = `${p.idfmLineId || p.lineCode}|${p.destination}|${p.missionCode || p.trainNumber || ""}|${Math.round(p.expectedTimestamp / 15000)}`;
    if (!seen.has(key)) {
      seen.add(key);
      dedupedPassages.push(p);
    }
  }

  // Si toutes les requêtes ont échoué sans aucun résultat, retourner 502 proprement
  if (dedupedPassages.length === 0 && queryErrors.length > 0 && queryErrors.length >= queriedRefs.length) {
    return jsonResponse(
      {
        error: "Service temps réel PRIM temporairement indisponible.",
        details: queryErrors[0],
        passages: [],
        fetchedAt: new Date(nowMs).toISOString(),
        monitoringRefs: queriedRefs,
      },
      502
    );
  }

  return jsonResponse({
    passages: dedupedPassages,
    messages: allMessages,
    warnings: queryErrors.length > 0 ? queryErrors : undefined,
    fetchedAt: new Date(nowMs).toISOString(),
    monitoringRefs: queriedRefs,
    requestedLine: requestedLine.lineCode || requestedLine.idfmLineId || null,
  });
}
