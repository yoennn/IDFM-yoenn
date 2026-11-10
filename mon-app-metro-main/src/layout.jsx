// src/layout.jsx
import React, { useState, useMemo, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import MenuDeroulant from './MenuDeroulant.jsx';
import { lignesMetro, stationsData, getLineLogo } from './data.js'; 
import './layout.css';

// Normalisation tolérante aux accents, tirets et apostrophes pour une recherche sans erreur
const normalizeString = (str) => 
  String(str || '')
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[–—―‐-]/g, " ")
    .replace(/['’]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// Map de recherche d'ID de ligne insensible à la casse
const lineIdLookup = new Map(
  lignesMetro.map(l => [l.id.toLowerCase(), l.id])
);

export default function Layout() { 
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [rechercheOuvert, setRechercheOuvert] = useState(false);
  const [recherche, setRecherche] = useState('');
  const [filtreMode, setFiltreMode] = useState('metro');

  const matchedLineId = useMemo(() => {
    const raw = normalizeString(recherche);
    if (!raw) return null;
    const cleaned = raw
      .replace(/^(ligne|rer|transilien|train|tramway|tram|metro)\s+/i, '')
      .trim();
    if (lineIdLookup.has(cleaned)) {
      return lineIdLookup.get(cleaned);
    }
    if (lineIdLookup.has(`t${cleaned}`) && raw.startsWith('tram')) {
      return lineIdLookup.get(`t${cleaned}`);
    }
    return null;
  }, [recherche]);

  const filteredStations = useMemo(() => {
    const query = normalizeString(recherche);
    if (!query) return [];

    let stationsToShow = [];

    if (matchedLineId && query.length < 3) {
      stationsToShow = stationsData.filter(station => 
        station.lignes.includes(matchedLineId)
      );
    } else if (query.length >= 2) {
      const byName = stationsData.filter(station => 
        normalizeString(station.nom).includes(query)
      );
      if (matchedLineId) {
        const byLine = stationsData.filter(station =>
          station.lignes.includes(matchedLineId)
        );
        const seen = new Set(byName.map(s => s.nom));
        stationsToShow = [...byName, ...byLine.filter(s => !seen.has(s.nom))];
      } else {
        stationsToShow = byName;
      }
    }

    return stationsToShow
      .map(station => {
        const lignes = station.lignes;
        const materielNoms = (station.materiel && station.materiel.length > 0)
          ? station.materiel
          : lignes.flatMap(ligneId => {
              const ligneInfo = lignesMetro.find(l => l.id === ligneId);
              return (ligneInfo && ligneInfo.materiel) ? ligneInfo.materiel.map(m => m.nom) : [];
            });
        const uniqueRames = [...new Set(materielNoms)];
        return { ...station, rames: uniqueRames };
      })
      .sort((a, b) => {
        const aStarts = normalizeString(a.nom).startsWith(query) ? 0 : 1;
        const bStarts = normalizeString(b.nom).startsWith(query) ? 0 : 1;
        if (aStarts !== bStarts) return aStarts - bStarts;
        return a.nom.localeCompare(b.nom, 'fr');
      });
      
  }, [recherche, matchedLineId]);

  // Fonctions pour le MENU
  const closeMenu = () => setMenuOuvert(false);
  const toggleMenu = () => {
    setMenuOuvert(!menuOuvert);
    if (rechercheOuvert) closeRecherche(); 
  };

  // Fonctions pour la RECHERCHE
  const closeRecherche = () => {
    setRechercheOuvert(false);
    setRecherche(''); 
  };
  const toggleRecherche = () => {
    const newState = !rechercheOuvert;
    setRechercheOuvert(newState);
    if (menuOuvert) closeMenu(); 
    
    if (newState) {
      setTimeout(() => document.getElementById('header-search-input')?.focus(), 200);
    } else {
      setRecherche(''); 
    }
  };
  
  const closeAll = () => {
    closeMenu();
    closeRecherche();
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  const handleLinkClick = () => {
    closeRecherche();
  };

  return (
    <>
      {menuOuvert && (
        <div 
          className="menu-overlay"
          onClick={closeMenu}
        ></div>
      )}

      {/* --- HEADER UNIFIÉ [Logo RATP] | [Logo SNCF] --- */}
      <header className="global-header-container">
        
        {/* 1. Bouton Hamburger (Gauche) */}
        <button 
          className={`hamburger-btn ${menuOuvert ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOuvert}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* 2. Logos RATP | SNCF (Centre) */}
        <Link to="/" onClick={closeAll} className="global-logo-link">
          <div className="global-logos-wrapper">
            <img 
              src="/assets/ratp-grand.png" 
              alt="Logo RATP" 
              className="global-logo" 
            />
            <span className="header-logo-separator" aria-hidden="true"></span>
            <img 
              src="/assets/Logo_SNCF_2011.svg" 
              alt="Logo SNCF" 
              className="global-logo global-logo-sncf" 
            />
          </div>
        </Link>

        {/* 3. Conteneur de Recherche (Droite) */}
        <div className="header-search-wrapper">
          <input
            type="text"
            id="header-search-input"
            className={`header-search-input ${rechercheOuvert ? 'open' : ''}`}
            placeholder="Rechercher une station, une gare ou une ligne..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
          <button 
            className="header-search-toggle-btn"
            onClick={toggleRecherche}
            aria-label={rechercheOuvert ? "Fermer la recherche" : "Ouvrir la recherche"}
          >
            <img 
              src="/assets/loupe.png" 
              alt="Rechercher" 
              className={`search-icon-loupe ${rechercheOuvert ? 'hidden' : ''}`}
            />
            <span className={`search-toggle-text ${rechercheOuvert ? 'hidden' : ''}`}>
              Rechercher
            </span>
            <div className={`search-icon-close ${rechercheOuvert ? 'visible' : ''}`}>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </header>

      {/* --- RÉSULTATS DE RECHERCHE UNIVERSELLE --- */}
      <div className={`header-search-results-container ${rechercheOuvert ? 'open' : ''}`}>
        {recherche.length > 0 && filteredStations.length === 0 ? (
          <p className="search-no-results">Aucune station ou gare trouvée.</p>
        ) : recherche.length === 0 ? (
          <p className="search-prompt">Tapez un nom de station, de gare ou un indice de ligne (ex: La Défense, A, L, T2).</p>
        ) : (
          filteredStations.map(station => (
            <div key={station.nom} className="result-item"> 
              <Link 
                to={`/station/${encodeURIComponent(station.nom)}`} 
                onClick={handleLinkClick}
                className="result-item-titre-link"
              >
                <h4 className="result-item-titre">{station.nom}</h4>
              </Link>
              <div className="result-item-lignes">
                {station.lignes.map(id => (
                  <Link
                    key={id}
                    to={`/ligne/${id}`}
                    onClick={handleLinkClick}
                    className="result-item-logo-link"
                    title={`Ligne ${id}`}
                  >
                    <img 
                      src={getLineLogo(id)} 
                      alt={`Ligne ${id}`} 
                      className="result-item-logo"
                    />
                  </Link>
                ))}
              </div>
              <p className="result-item-rames-label">Rames possibles :</p>
              <div className="result-item-rames">
                {station.rames.map(nomRame => (
                  <Link key={nomRame} to={`/rame/${encodeURIComponent(nomRame)}`} className="result-item-rame-tag" onClick={handleLinkClick}>
                    {nomRame}
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="page-container" onClick={closeRecherche}>
        <main className="page-content">
          <Outlet context={{ filtreMode, setFiltreMode }} /> 
        </main>
      </div>

      <MenuDeroulant 
        estOuvert={menuOuvert} 
        onClose={closeMenu}
        filtreMode={filtreMode}
        onSelectMode={setFiltreMode}
      />
    </>
  );
}
