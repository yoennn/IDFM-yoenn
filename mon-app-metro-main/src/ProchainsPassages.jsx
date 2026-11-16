// src/ProchainsPassages.jsx
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, Clock, AlertTriangle, Radio } from 'lucide-react';
import { lignesMetro, getLineLogo } from './data.js';
import { getIdfmLineId, getLineCodeFromRef } from './data/idfmMapping.js';
import { fetchHorairesForStation } from './services/horairesClient.js';
import './ProchainsPassages.css';

const FUTURE_GPE_LINES = new Set(['15', '16', '17', '18']);
const REFRESH_INTERVAL_MS = 30000;
const LINE_ORDER_INDEX = new Map(lignesMetro.map((l, idx) => [l.id, idx]));

function getLineInfo(lineCode) {
  return lignesMetro.find((l) => l.id === lineCode) || null;
}

function getBadgeLabel(ligneInfo, lineCode) {
  if (!ligneInfo) return `Ligne ${lineCode}`;
  if (ligneInfo.mode === 'rer') return `RER ${ligneInfo.id}`;
  if (ligneInfo.mode === 'transilien' || ligneInfo.mode === 'rail') return `Ligne ${ligneInfo.id}`;
  if (ligneInfo.mode === 'tram') return `Tram ${ligneInfo.id}`;
  return `Métro ${ligneInfo.id}`;
}

function normalizeStr(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[–—―‐-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const BRANCH_ORIENTATION_RULES = {
  A: {
    dir0Keywords: [
      'saint germain', 'st germain', 'cergy', 'poissy', 'vesinet', 'pecq',
      'rueil', 'nanterre', 'maisons laffitte', 'acheres', 'sartrouville',
      'houilles', 'chatou', 'la defense', 'etoile',
    ],
    dir0MissionPrefixes: ['Z', 'U', 'T', 'X', 'Y', 'B', 'J'],
    dir1Keywords: [
      'boissy', 'marne', 'chessy', 'torcy', 'noisy', 'vincennes',
      'fontenay', 'varenne', 'sucy', 'joinville', 'val d europe', 'bussy',
      'nation', 'lyon',
    ],
    dir1MissionPrefixes: ['N', 'Q', 'O', 'R', 'D', 'W'],
  },
  B: {
    dir0Keywords: [
      'gaulle', 'cdg', 'aeroport', 'mitry', 'aulnay', 'bourget',
      'plaine', 'gare du nord', 'villepinte', 'sevran', 'blanc mesnil',
    ],
    dir0MissionPrefixes: ['E', 'I', 'A', 'J', 'H'],
    dir1Keywords: [
      'robinson', 'remy', 'chevreuse', 'massy', 'palaiseau', 'orsay',
      'laplace', 'bourg la reine', 'denfert', 'cite', 'antony',
      'arcueil', 'cachan', 'lozere', 'gif',
    ],
    dir1MissionPrefixes: ['K', 'L', 'P', 'S', 'U', 'G'],
  },
  C: {
    dir0Keywords: [
      'pontoise', 'versailles', 'quentin', 'montigny', 'ermont', 'invalides',
      'orsay', 'champ de mars', 'javel', 'chaville', 'viroflay', 'meudon',
      'saint ouen', 'st ouen', 'gennevilliers', 'argenteuil',
    ],
    dir0MissionPrefixes: ['N', 'V', 'S', 'G', 'J', 'P', 'O'],
    dir1Keywords: [
      'massy', 'dourdan', 'etampes', 'martin', 'bretigny', 'juvisy',
      'bibliotheque', 'austerlitz', 'rungis', 'choisy', 'orly',
      'ivry', 'vitry', 'arpajon', 'chamarande',
    ],
    dir1MissionPrefixes: ['D', 'E', 'B', 'K', 'C', 'M', 'L', 'A', 'F'],
  },
  D: {
    dir0Keywords: [
      'creil', 'orry', 'goussainville', 'villiers le bel', 'stade de france',
      'saint denis', 'sarcelles', 'garges', 'louvres', 'survilliers',
      'chantilly', 'chatelet', 'gare du nord',
    ],
    dir0MissionPrefixes: ['L', 'S', 'F', 'V', 'U', 'D'],
    dir1Keywords: [
      'melun', 'corbeil', 'malesherbes', 'juvisy', 'villeneuve', 'combs',
      'evry', 'vigneux', 'viry', 'grigny', 'ris', 'lieusaint',
      'cesson', 'ferte',
    ],
    dir1MissionPrefixes: ['Z', 'R', 'B', 'N', 'J', 'M'],
  },
  E: {
    dir0Keywords: [
      'nanterre', 'haussmann', 'saint lazare', 'magenta', 'paris est',
      'gare de l est', 'rosa parks', 'porte maillot', 'defense',
    ],
    dir0MissionPrefixes: ['N', 'H'],
    dir1Keywords: [
      'chelles', 'gournay', 'tournan', 'villiers', 'plessis', 'noisy',
      'bondy', 'gagny', 'raincy', 'fontenay', 'nogent', 'roissy',
      'ozoir', 'gretz',
    ],
    dir1MissionPrefixes: ['C', 'T', 'V'],
  },
  '7': {
    dir0Keywords: ['courneuve', '1945'],
    dir1Keywords: ['ivry', 'villejuif', 'maison blanche', 'aragon'],
  },
  '13': {
    dir0Keywords: ['asnieres', 'gennevilliers', 'courtilles', 'saint denis', 'fourche'],
    dir1Keywords: ['chatillon', 'montrouge'],
  },
  '10': {
    dir0Keywords: ['boulogne', 'saint cloud', 'auteuil'],
    dir1Keywords: ['austerlitz'],
  },
  T4: {
    dir0Keywords: ['bondy'],
    dir1Keywords: ['aulnay', 'montfermeil', 'hopital', 'arboretum'],
  },
  T8: {
    dir0Keywords: ['porte de paris', 'saint denis'],
    dir1Keywords: ['epinay', 'villetaneuse', 'orgemont'],
  },
};

const PARIS_TERMINUS_KEYWORDS = [
  'paris', 'saint lazare', 'montparnasse', 'gare du nord', 'gare de l est',
  'gare de lyon', 'pont cardinet', 'haussmann', 'bercy',
];

const TRANSILIEN_PARIS_LINES = new Set(['H', 'J', 'K', 'L', 'N', 'P', 'R']);

/**
 * Détermine de façon déterministe l'index d'orientation (0 ou 1) pour garantir
 * au maximum 2 colonnes par ligne (Sens 1 vs Sens 2), même sur les lignes à branches.
 */
function getOrientationIndex(lineCode, passage, lineInfo) {
  const destNorm = normalizeStr(passage.destination);
  const miss = String(passage.missionCode || '').toUpperCase();
  const firstLetter = miss ? miss[0] : '';

  // 1. Lignes à branches avec table dédiée
  const rule = BRANCH_ORIENTATION_RULES[lineCode];
  if (rule) {
    if (rule.dir0Keywords?.some((kw) => destNorm.includes(kw))) return 0;
    if (rule.dir1Keywords?.some((kw) => destNorm.includes(kw))) return 1;
    if (firstLetter && rule.dir0MissionPrefixes?.includes(firstLetter)) return 0;
    if (firstLetter && rule.dir1MissionPrefixes?.includes(firstLetter)) return 1;
  }

  // 2. Transilien au départ de Paris (terminus[0] = gare parisienne, terminus[1] = banlieue)
  if (TRANSILIEN_PARIS_LINES.has(lineCode)) {
    if (PARIS_TERMINUS_KEYWORDS.some((kw) => destNorm.includes(kw))) return 0;
    if (firstLetter === 'P') return 0;
    return 1;
  }

  // 3. Correspondance directe avec les libellés des 2 terminus de la ligne
  const t0 = normalizeStr(lineInfo?.terminus?.[0] || '');
  const t1 = normalizeStr(lineInfo?.terminus?.[1] || '');
  if (t0 && destNorm) {
    const t0Tokens = t0.split(/\s+|\/+/).filter((w) => w.length >= 4);
    const t1Tokens = t1.split(/\s+|\/+/).filter((w) => w.length >= 4);
    const hit0 = t0Tokens.some((w) => destNorm.includes(w));
    const hit1 = t1Tokens.some((w) => destNorm.includes(w));
    if (hit0 && !hit1) return 0;
    if (hit1 && !hit0) return 1;
  }

  // 4. Repli SIRI DirectionRef
  const dref = String(passage.directionRef || '').toLowerCase();
  if (dref.includes('aller')) return 0;
  if (dref.includes('retour')) return 1;
  return 0;
}

export default function ProchainsPassages(props) {
  const key = `${props.station?.nom || ''}-${props.fixedLineId || ''}-${props.initialLineFilter || ''}`;
  return <ProchainsPassagesInner key={key} {...props} />;
}

function ProchainsPassagesInner({
  station,
  fixedLineId = null,
  initialLineFilter = null,
  compact = false,
}) {
  const [selectedLineFilter, setSelectedLineFilter] = useState(
    fixedLineId || initialLineFilter || 'ALL'
  );
  const [passages, setPassages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const hasLoadedRef = useRef(false);

  const stopAreaIds = useMemo(
    () => (station?.stopAreaIds || []).filter(Boolean),
    [station]
  );
  const stopPointIds = useMemo(
    () => (station?.stopPointIds || []).filter(Boolean),
    [station]
  );

  const activeLineIds = useMemo(() => {
    if (!station?.lignes) return [];
    if (fixedLineId) return [fixedLineId];
    return station.lignes;
  }, [station, fixedLineId]);

  const activeIdfmLines = useMemo(
    () => activeLineIds.filter((id) => !FUTURE_GPE_LINES.has(id) && Boolean(getIdfmLineId(id))),
    [activeLineIds]
  );

  const canQueryRealtime =
    (stopAreaIds.length > 0 || stopPointIds.length > 0) && activeIdfmLines.length > 0;

  const fetchHoraires = useCallback(
    async (isManualOrBackground = false, abortSignal = undefined) => {
      if (!canQueryRealtime) {
        setLoading(false);
        setRefreshing(false);
        return;
      }

      if (hasLoadedRef.current || isManualOrBackground) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      setError(null);

      try {
        const lineParam = fixedLineId ? (getIdfmLineId(fixedLineId) || fixedLineId) : null;
        const data = await fetchHorairesForStation({
          stopAreaIds,
          stopPointIds,
          lineId: lineParam,
          signal: abortSignal,
        });

        setPassages(Array.isArray(data.passages) ? data.passages : []);
        setMessages(Array.isArray(data.messages) ? data.messages : []);
        setLastUpdated(new Date());
        hasLoadedRef.current = true;
      } catch (err) {
        if (err?.name === 'AbortError') return;
        setError(err?.message || 'Impossible de récupérer les horaires temps réel.');
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [canQueryRealtime, stopAreaIds, stopPointIds, fixedLineId]
  );

  useEffect(() => {
    if (!canQueryRealtime) return undefined;

    const controller = new AbortController();
    fetchHoraires(false, controller.signal);

    const timer = setInterval(() => {
      fetchHoraires(true);
    }, REFRESH_INTERVAL_MS);

    return () => {
      controller.abort();
      clearInterval(timer);
    };
  }, [canQueryRealtime, fetchHoraires]);

  // Regroupement strict par Ligne -> maximum 2 Orientations (Sens 0 / Sens 1)
  const groupedByLine = useMemo(() => {
    const byLine = new Map();

    const targetLines =
      selectedLineFilter && selectedLineFilter !== 'ALL'
        ? activeLineIds.filter((id) => id === selectedLineFilter)
        : activeIdfmLines;

    for (const lid of targetLines) {
      if (FUTURE_GPE_LINES.has(lid)) continue;
      const info = getLineInfo(lid);
      byLine.set(lid, {
        lineCode: lid,
        info,
        orientations: [
          {
            idx: 0,
            label: info?.terminus?.[0] || 'Direction 1',
            items: [],
          },
          {
            idx: 1,
            label: info?.terminus?.[1] || 'Direction 2',
            items: [],
          },
        ],
      });
    }

    for (const p of passages) {
      const resolvedCode = p.lineCode || getLineCodeFromRef(p.lineRef || p.idfmLineId);
      if (!resolvedCode) continue;
      if (selectedLineFilter && selectedLineFilter !== 'ALL' && resolvedCode !== selectedLineFilter) {
        continue;
      }
      if (!byLine.has(resolvedCode)) {
        if (fixedLineId) continue;
        const info = getLineInfo(resolvedCode);
        if (!info) continue;
        byLine.set(resolvedCode, {
          lineCode: resolvedCode,
          info,
          orientations: [
            {
              idx: 0,
              label: info?.terminus?.[0] || 'Direction 1',
              items: [],
            },
            {
              idx: 1,
              label: info?.terminus?.[1] || 'Direction 2',
              items: [],
            },
          ],
        });
      }

      const lineGroup = byLine.get(resolvedCode);
      const orientIdx = getOrientationIndex(resolvedCode, p, lineGroup.info);
      lineGroup.orientations[orientIdx].items.push(p);
    }

    return Array.from(byLine.values())
      .map((entry) => {
        const orientations = entry.orientations
          .map((orient) => {
            const sorted = orient.items
              .slice()
              .sort((a, b) => a.expectedTimestamp - b.expectedTimestamp);
            // Déterminer si l'en-tête global peut être conservé tel quel
            return {
              ...orient,
              items: sorted.slice(0, 5),
            };
          })
          .filter((o) => o.items.length > 0);

        return {
          ...entry,
          orientations,
        };
      })
      .sort((a, b) => {
        const ra = LINE_ORDER_INDEX.get(a.lineCode) ?? 999;
        const rb = LINE_ORDER_INDEX.get(b.lineCode) ?? 999;
        return ra - rb;
      });
  }, [passages, selectedLineFilter, activeLineIds, activeIdfmLines, fixedLineId]);

  const formattedUpdateTime = useMemo(() => {
    if (!lastUpdated) return null;
    return lastUpdated.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }, [lastUpdated]);

  const onlyFutureLines =
    activeLineIds.length > 0 && activeLineIds.every((id) => FUTURE_GPE_LINES.has(id));

  return (
    <section
      className={`passages-section ${compact ? 'passages-section-compact' : ''}`}
      aria-label="Prochains passages en temps réel"
    >
      <div className="passages-header">
        <div className="passages-title-block">
          <h2 className="passages-heading">
            <Radio size={17} className="passages-live-dot" aria-hidden="true" />
            Prochains passages en temps réel
          </h2>
          {formattedUpdateTime && (
            <span className="passages-updated-meta">
              <Clock size={12} aria-hidden="true" />
              Actualisé à {formattedUpdateTime} • Auto 30s
            </span>
          )}
        </div>

        {canQueryRealtime && (
          <button
            type="button"
            className={`passages-refresh-btn ${refreshing || loading ? 'is-spinning' : ''}`}
            onClick={() => fetchHoraires(true)}
            disabled={refreshing || loading}
            aria-label="Actualiser les prochains passages"
          >
            <RefreshCw size={14} className="refresh-icon" aria-hidden="true" />
            <span>{refreshing ? 'Actualisation...' : 'Actualiser'}</span>
          </button>
        )}
      </div>

      {/* Filtres lignes sur les pôles multimodaux */}
      {!fixedLineId && activeIdfmLines.length > 1 && (
        <div className="passages-line-filters" role="tablist" aria-label="Filtrer par ligne">
          <button
            type="button"
            role="tab"
            aria-selected={selectedLineFilter === 'ALL'}
            className={`passages-filter-pill ${selectedLineFilter === 'ALL' ? 'active' : ''}`}
            onClick={() => setSelectedLineFilter('ALL')}
          >
            Toutes ({activeIdfmLines.length})
          </button>
          {activeIdfmLines.map((lid) => (
            <button
              key={lid}
              type="button"
              role="tab"
              aria-selected={selectedLineFilter === lid}
              className={`passages-filter-pill passages-filter-pill-icon ${
                selectedLineFilter === lid ? 'active' : ''
              }`}
              onClick={() => setSelectedLineFilter(lid)}
              title={getBadgeLabel(getLineInfo(lid), lid)}
            >
              <img
                src={getLineLogo(lid)}
                alt={`Ligne ${lid}`}
                className="passages-filter-logo"
              />
            </button>
          ))}
        </div>
      )}

      {/* Cas station future / sans arrêt IDFM actif */}
      {!canQueryRealtime && (
        <div className="passages-empty-card">
          <p>
            {onlyFutureLines
              ? "Cette station appartient à une future ligne du Grand Paris Express pas encore ouverte au trafic temps réel IDFM."
              : "Aucun identifiant d'arrêt temps réel IDFM actif n'est rattaché à cette station pour cette ligne."}
          </p>
        </div>
      )}

      {/* Messages trafic */}
      {messages.length > 0 && (
        <div className="passages-traffic-alert" role="status">
          <AlertTriangle size={15} aria-hidden="true" />
          <div className="passages-traffic-texts">
            {messages.slice(0, 2).map((msg, i) => (
              <p key={i}>{msg}</p>
            ))}
          </div>
        </div>
      )}

      {/* Erreur réseau */}
      {error && (
        <div className="passages-error-banner" role="alert">
          <AlertTriangle size={15} aria-hidden="true" />
          <span>{error}</span>
          <button
            type="button"
            className="passages-retry-btn"
            onClick={() => fetchHoraires(true)}
          >
            Réessayer
          </button>
        </div>
      )}

      {/* Chargement initial */}
      {canQueryRealtime && loading && passages.length === 0 && (
        <div className="passages-loading-grid" aria-live="polite">
          <div className="passages-skeleton-card" />
          <div className="passages-skeleton-card" />
        </div>
      )}

      {/* Liste des lignes regroupées en 2 orientations maximum */}
      {canQueryRealtime && !loading && (
        <div className="passages-lines-stack">
          {groupedByLine.map(({ lineCode, info, orientations }) => (
            <article key={lineCode} className="passages-line-card">
              <div className="passages-line-card-header">
                <Link
                  to={`/ligne/${lineCode}`}
                  className="passages-line-identity"
                  title={info?.nom || getBadgeLabel(info, lineCode)}
                >
                  <span className="passages-line-logo-box">
                    <img
                      src={info?.logo || getLineLogo(lineCode)}
                      alt={`Ligne ${lineCode}`}
                      className="passages-line-logo"
                    />
                  </span>
                  <div className="passages-line-titles">
                    <h3>{getBadgeLabel(info, lineCode)}</h3>
                    {info?.terminus?.length > 0 && (
                      <span className="passages-line-sub">{info.terminus.join(' ↔ ')}</span>
                    )}
                  </div>
                </Link>
              </div>

              {orientations.length === 0 ? (
                <p className="passages-no-service">
                  Aucun prochain passage annoncé pour le moment (fin de service ou trafic interrompu).
                </p>
              ) : (
                <div
                  className={`passages-orientations-grid ${
                    orientations.length === 1 ? 'single-orientation' : ''
                  }`}
                >
                  {orientations.map((orient) => (
                    <div key={orient.idx} className="passages-orientation-col">
                      <div className="passages-orientation-header">
                        <span className="passages-orientation-arrow" aria-hidden="true">
                          →
                        </span>
                        <span className="passages-orientation-label">
                          Vers {orient.label}
                        </span>
                      </div>

                      <ul className="passages-rows">
                        {orient.items.map((item) => (
                          <li key={item.id} className="passages-row">
                            <div className="passages-row-left">
                              {item.missionCode && (
                                <span
                                  className="passages-mission-badge"
                                  title={
                                    item.trainNumber
                                      ? `Mission ${item.missionCode} (Train ${item.trainNumber})`
                                      : `Mission ${item.missionCode}`
                                  }
                                >
                                  {item.missionCode}
                                </span>
                              )}
                              {!item.missionCode && item.trainNumber && (
                                <span className="passages-mission-badge">
                                  {item.trainNumber}
                                </span>
                              )}
                              <span className="passages-row-dest">{item.destination}</span>
                              {item.platform && (
                                <span className="passages-row-platform">
                                  Voie {item.platform}
                                </span>
                              )}
                              {item.status === 'delayed' && (
                                <span className="passages-row-delayed">Retardé</span>
                              )}
                            </div>

                            <div className="passages-row-right">
                              <span
                                className={`passages-wait-value state-${item.state}`}
                                title={`Heure prévue : ${item.formattedTime}`}
                              >
                                {item.displayWait}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
