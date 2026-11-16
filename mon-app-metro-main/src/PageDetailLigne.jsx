// src/PageDetailLigne.jsx
import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Search, ChevronDown, ChevronRight, X } from 'lucide-react';
import { lignesMetro, dataRames, ligneColors, stationsData, getLineLogo, getLinePlan } from './data.js';
import ProchainsPassages from './ProchainsPassages.jsx';
import './PageDetailLigne.css';

const normalizeText = (str) =>
  String(str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[–—―‐-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

function PageDetailLigne() {
  const { id } = useParams();
  const ligne = lignesMetro.find(l => l.id.toLowerCase() === String(id).toLowerCase()); 
  const [animatingRame, setAnimatingRame] = useState(null);
  const [selectedStationNom, setSelectedStationNom] = useState(null);
  const [stationFilter, setStationFilter] = useState('');
  const [listeOuverte, setListeOuverte] = useState(false);
  const passagesBoxRef = useRef(null);

  const stationsDeLaLigne = useMemo(() => {
    if (!ligne) return [];
    return stationsData.filter(s => Array.isArray(s.lignes) && s.lignes.includes(ligne.id));
  }, [ligne]);

  const filteredStations = useMemo(() => {
    const q = normalizeText(stationFilter);
    if (!q) return stationsDeLaLigne;
    return stationsDeLaLigne.filter(s => normalizeText(s.nom).includes(q));
  }, [stationsDeLaLigne, stationFilter]);

  const selectedStation = useMemo(() => {
    if (!selectedStationNom) return null;
    return stationsDeLaLigne.find(s => s.nom === selectedStationNom) || null;
  }, [stationsDeLaLigne, selectedStationNom]);

  const showStationsList = listeOuverte || stationFilter.trim().length > 0;

  const handleSelectStation = (stationNom) => {
    setSelectedStationNom(stationNom);
    setListeOuverte(false);
    setTimeout(() => {
      passagesBoxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

  /* --- Le hook ne bloque le scroll QUE sur PC --- */
  useEffect(() => {
    if (window.innerWidth > 768) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, []); 

  if (!ligne) {
    return <h2>Ligne non trouvée (ID: {id})</h2>;
  }
  
  const couleurLigne = ligneColors[ligne.id] || ligne.color || '#6c757d';
  const hex = couleurLigne.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16) || 0;
  const g = parseInt(hex.slice(2, 4), 16) || 0;
  const b = parseInt(hex.slice(4, 6), 16) || 0;
  const couleurTexteLigne = (r * 0.299 + g * 0.587 + b * 0.114) > 165 ? '#212529' : '#ffffff';

  const logoPath = ligne.logo || getLineLogo(ligne.id);
  const planPath = ligne.plan || getLinePlan(ligne.id);

  const getStatValue = (key) => {
    switch (key) {
      case 'stations': return ligne.stations;
      case 'longueur': return ligne.longueur;
      case 'ouverture': return ligne.ouverture;
      default: return 'N/A';
    }
  };

  return (
    <div 
      className="detail-container snap-parent" 
      style={{ '--couleur-ligne': couleurLigne, '--couleur-ligne-texte': couleurTexteLigne }}
    >
      
      {/* SECTION 1 : PLAN ET STATS */}
      <div className="snap-section plan-section">
        
        <header className="detail-header">
          <img src={logoPath} alt={`Logo ${ligne.nom}`} className="detail-logo" />
          <div className="detail-titres">
            <h1>{ligne.nom}</h1>
            <p className="detail-terminus">{ligne.terminus.join(' ↔ ')}</p>
          </div>
        </header>
        
        <div className="ligne-stats-box">
          <div className="stat-item">
            <span>Stations</span>
            <strong>{getStatValue('stations')}</strong>
          </div>
          <div className="stat-item">
            <span>Longueur</span>
            <strong>{getStatValue('longueur')}</strong>
          </div>
          <div className="stat-item">
            <span>Ouverture</span>
            <strong>{getStatValue('ouverture')}</strong>
          </div>
        </div>

        <div className="section-wrapper">
          <h2>Plan de la Ligne</h2>
          <div className="image-box"> 
            <img src={planPath} alt={`Plan ${ligne.nom}`} className="contenu-image" />
          </div>
        </div>
      </div>

      {/* SECTION 2 : SÉLECTEUR DE STATIONS STYLE BONJOUR RATP & PROCHAINS PASSAGES */}
      {stationsDeLaLigne.length > 0 && (
        <div className="snap-section ligne-stations-section">
          <div className="ligne-stations-header">
            <h2>Prochains passages par station</h2>
          </div>

          <div className="bonjour-selector-card">
            <div className="bonjour-search-bar">
              <Search size={17} className="bonjour-search-icon" aria-hidden="true" />
              <input
                type="text"
                value={stationFilter}
                onChange={(e) => setStationFilter(e.target.value)}
                placeholder="Rechercher une station..."
                aria-label="Rechercher une station sur cette ligne"
              />
              {stationFilter && (
                <button
                  type="button"
                  className="bonjour-search-clear"
                  onClick={() => setStationFilter('')}
                  aria-label="Effacer la recherche"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              )}
            </div>

            {!stationFilter.trim() && (
              <button
                type="button"
                className="bonjour-accordion-toggle"
                onClick={() => setListeOuverte((prev) => !prev)}
                aria-expanded={showStationsList}
              >
                <span>Toutes les stations de la ligne ({stationsDeLaLigne.length})</span>
                <ChevronDown
                  size={18}
                  className={`bonjour-accordion-chevron ${showStationsList ? 'open' : ''}`}
                  aria-hidden="true"
                />
              </button>
            )}

            {showStationsList && (
              <ul className="bonjour-stations-list" role="list">
                {filteredStations.map((st) => {
                  const isSelected = selectedStationNom === st.nom;
                  const otherLines = st.lignes.filter((l) => l !== ligne.id);
                  return (
                    <li key={st.nom} className="bonjour-station-li">
                      <button
                        type="button"
                        className={`bonjour-station-row ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleSelectStation(st.nom)}
                        aria-pressed={isSelected}
                      >
                        <span className="bonjour-station-name">{st.nom}</span>
                        <span className="bonjour-station-meta">
                          {otherLines.length > 0 && (
                            <span className="bonjour-corresp-icons">
                              {otherLines.slice(0, 6).map((clid) => (
                                <img
                                  key={clid}
                                  src={getLineLogo(clid)}
                                  alt={`Ligne ${clid}`}
                                  className="bonjour-corresp-logo"
                                />
                              ))}
                            </span>
                          )}
                          <ChevronRight size={16} className="bonjour-row-chevron" aria-hidden="true" />
                        </span>
                      </button>
                    </li>
                  );
                })}
                {filteredStations.length === 0 && (
                  <li className="bonjour-stations-empty">
                    Aucune station trouvée pour « {stationFilter} ».
                  </li>
                )}
              </ul>
            )}
          </div>

          {selectedStation && (
            <div ref={passagesBoxRef} className="ligne-selected-passages-box">
              <div className="ligne-selected-passages-top">
                <div className="ligne-selected-station-title">
                  <h3>{selectedStation.nom}</h3>
                  {selectedStation.lignes.length > 1 && (
                    <span className="ligne-selected-corresp">
                      Correspondances : {selectedStation.lignes.filter(l => l !== ligne.id).join(', ')}
                    </span>
                  )}
                </div>
                <Link
                  to={`/station/${encodeURIComponent(selectedStation.nom)}?ligne=${encodeURIComponent(ligne.id)}`}
                  className="ligne-station-fiche-link"
                >
                  <span>Fiche complète</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>

              <ProchainsPassages
                station={selectedStation}
                fixedLineId={ligne.id}
                compact
              />
            </div>
          )}
        </div>
      )}
      
      {/* SECTION 3 : RAME(S) */}
      {ligne.materiel && ligne.materiel.length > 0 && (
        <div className="snap-section rame-section-container"> 
          <h2>Matériel Roulant</h2>
          <div className="rame-list-scroller"> 
            
            {ligne.materiel.map((rame, index) => {
              const rameInfo = dataRames[rame.nom];
              if (!rameInfo) return null;

              return (
                <div 
                  key={index} 
                  className={`rame-content-wrapper ${animatingRame === index ? 'animate' : ''}`}
                >
                  <div 
                    className="rame-image-container"
                    onClick={() => {
                      if (animatingRame === null) setAnimatingRame(index);
                    }}
                    onAnimationEnd={() => setAnimatingRame(null)}
                  >
                    <img 
                      src={`/assets/${rameInfo.image}`} 
                      alt={rame.nom} 
                      className="rame-image"
                    />
                  </div>
                  <div className="rame-infos">
                    <h3>
                      <Link to={`/rame/${encodeURIComponent(rame.nom)}`}>{rame.nom}</Link>
                    </h3>
                    <p dangerouslySetInnerHTML={{ __html: rame.description }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default PageDetailLigne;
