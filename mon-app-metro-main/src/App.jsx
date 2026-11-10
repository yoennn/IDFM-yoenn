// src/App.jsx
import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { lignesMetro, getLineLogo, getModeLogo } from './data.js';
import './App.css'; 

const FILTRES_MODES = [
  { id: 'metro', label: 'Métro', mode: 'metro' },
  { id: 'rer', label: 'RER', mode: 'rer' },
  { id: 'transilien', label: 'Transilien', mode: 'transilien' },
  { id: 'tram', label: 'Tramway', mode: 'tram' },
  { id: 'tous', label: 'Tous les réseaux', mode: null },
];

function CarteLigne({ ligne, extraClass = '' }) {
  const modeIconSrc = getModeLogo(ligne.mode, false);
  const lineIconSrc = ligne.logo || getLineLogo(ligne.id);

  return (
    <Link to={`/ligne/${ligne.id}`} className="ligne-carte-link">
      <div className={`ligne-carte ${extraClass}`.trim()}>
        <div className="carte-logo-container">
          <img src={modeIconSrc} alt={ligne.mode} className="logo-metro-m" />
          <img src={lineIconSrc} alt={ligne.nom} className="logo-ligne-numero" />
        </div>
        <div className="carte-info">
          <h3>{ligne.nom}</h3>
          {ligne.terminus && (
            <p>{ligne.terminus.join(' ↔ ')}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function App() {
  const outletCtx = useOutletContext();
  const [localFiltreMode, setLocalFiltreMode] = useState('metro');
  const filtreMode = outletCtx?.filtreMode || localFiltreMode;
  const setFiltreMode = outletCtx?.setFiltreMode || setLocalFiltreMode;

  const lignesActuelles = lignesMetro.filter(l => l.type === 'actuel');
  const lignesGPE = lignesMetro.filter(l => l.type === 'gpe');
  const lignesRER = lignesMetro.filter(l => l.type === 'rer');
  const lignesTransilien = lignesMetro.filter(l => l.type === 'transilien');
  const lignesTram = lignesMetro.filter(l => l.type === 'tram');

  const afficherMetro = filtreMode === 'tous' || filtreMode === 'metro';
  const afficherRER = filtreMode === 'tous' || filtreMode === 'rer';
  const afficherTransilien = filtreMode === 'tous' || filtreMode === 'transilien';
  const afficherTram = filtreMode === 'tous' || filtreMode === 'tram';

  return (
    <>
      {/* Barre de filtrage par mode de transport */}
      <nav className="mode-filter-bar" aria-label="Filtrer par mode de transport">
        {FILTRES_MODES.map(f => {
          const isActive = filtreMode === f.id;
          return (
            <button
              key={f.id}
              type="button"
              className={`mode-filter-btn ${isActive ? 'active' : ''}`}
              onClick={() => setFiltreMode(f.id)}
            >
              {f.mode && (
                <img
                  src={getModeLogo(f.mode, isActive)}
                  alt=""
                  className="mode-filter-icon"
                />
              )}
              <span>{f.label}</span>
            </button>
          );
        })}
      </nav>

      {/* 1. MÉTRO & GRAND PARIS EXPRESS */}
      {afficherMetro && (
        <div className="app-layout">
          <section className="main-reseau">
            <h2>Réseau Actuel</h2>
            <div className="lignes-grille">
              {lignesActuelles.map(ligne => (
                <CarteLigne key={ligne.id} ligne={ligne} />
              ))}
            </div>
          </section>

          <aside className="sidebar-gpe">
            <h2>Grand Paris Express</h2>
            <div className="gpe-grille">
              {lignesGPE.map(ligne => (
                <CarteLigne key={ligne.id} ligne={ligne} extraClass="gpe-carte" />
              ))}
            </div>
          </aside>
        </div>
      )}

      {/* 2. RÉSEAU RER */}
      {afficherRER && (
        <section className="reseau-mode-section">
          <h2>Réseau RER</h2>
          <div className="reseau-mode-grille">
            {lignesRER.map(ligne => (
              <CarteLigne key={ligne.id} ligne={ligne} />
            ))}
          </div>
        </section>
      )}

      {/* 3. RÉSEAU TRANSILIEN */}
      {afficherTransilien && (
        <section className="reseau-mode-section">
          <h2>Réseau Transilien</h2>
          <div className="reseau-mode-grille">
            {lignesTransilien.map(ligne => (
              <CarteLigne key={ligne.id} ligne={ligne} />
            ))}
          </div>
        </section>
      )}

      {/* 4. RÉSEAU TRAMWAY */}
      {afficherTram && (
        <section className="reseau-mode-section">
          <h2>Réseau Tramway</h2>
          <div className="reseau-mode-grille">
            {lignesTram.map(ligne => (
              <CarteLigne key={ligne.id} ligne={ligne} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
