// src/MenuDeroulant.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { lignesMetro, getLineLogo, getModeLogo } from './data.js';
import './MenuDeroulant.css';

const SIDEBAR_MODES = [
  { id: 'metro', label: 'Métro', mode: 'metro' },
  { id: 'rer', label: 'RER', mode: 'rer' },
  { id: 'transilien', label: 'Transilien', mode: 'transilien' },
  { id: 'tram', label: 'Tramway', mode: 'tram' },
];

export default function MenuDeroulant({ estOuvert, onClose, filtreMode = 'metro', onSelectMode }) {
  const [ongletLocal, setOngletLocal] = useState('metro');
  const modeActif = (filtreMode && filtreMode !== 'tous') ? filtreMode : ongletLocal;

  const lignesActuelles = lignesMetro.filter(l => l.type === 'actuel');
  const lignesGPE = lignesMetro.filter(l => l.type === 'gpe');
  const lignesRER = lignesMetro.filter(l => l.type === 'rer');
  const lignesTransilien = lignesMetro.filter(l => l.type === 'transilien');
  const lignesTram = lignesMetro.filter(l => l.type === 'tram');

  const handleClose = () => {
    onClose();
  };

  const handleModeClick = (id) => {
    setOngletLocal(id);
    if (onSelectMode) {
      onSelectMode(id);
    }
  };

  const renderSection = (titre, liste) => (
    <div className="menu-section-block">
      <h2 className="menu-titre-section">{titre}</h2>
      <div className="menu-grille">
        {liste.map(ligne => (
          <Link key={ligne.id} to={`/ligne/${ligne.id}`} className="menu-item" onClick={handleClose}>
            <img 
              src={ligne.logo || getLineLogo(ligne.id)} 
              alt={`Ligne ${ligne.id}`} 
              className="menu-item-logo"
            />
            <span>Ligne {ligne.id}</span>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <aside className={`menu-deroulant ${estOuvert ? 'open' : ''}`} aria-label="Menu de navigation latéral">
      <div className="menu-content">
        
        {/* 1. Navigation rapide compacte */}
        <h2 className="menu-titre-section">Navigation</h2>
        <div className="menu-nav-grille">
          <Link to="/repertoire" className="menu-link-repertoire" onClick={handleClose}>
            Répertoire des Rames
          </Link>
          <Link to="/carte" className="menu-link-repertoire" onClick={handleClose}>
            Carte du Réseau
          </Link>
        </div>

        {/* 2. Filtres par mode (Métro, RER, Transilien, Tramway) */}
        <h2 className="menu-titre-section">Réseaux & Lignes</h2>
        <div className="menu-modes-tabs" role="tablist" aria-label="Choisir un mode de transport">
          {SIDEBAR_MODES.map(m => {
            const isActive = modeActif === m.id;
            return (
              <button
                key={m.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`menu-mode-tab ${isActive ? 'active' : ''}`}
                onClick={() => handleModeClick(m.id)}
              >
                <img
                  src={getModeLogo(m.mode, isActive)}
                  alt=""
                  className="menu-mode-tab-icon"
                />
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3. Grille compacte du mode sélectionné (sans défilement superflu) */}
        {modeActif === 'metro' && (
          <>
            {renderSection("Réseau Actuel (Métro)", lignesActuelles)}
            {renderSection("Grand Paris Express", lignesGPE)}
          </>
        )}
        {modeActif === 'rer' && renderSection("Réseau RER (A à E)", lignesRER)}
        {modeActif === 'transilien' && renderSection("Réseau Transilien (H à V)", lignesTransilien)}
        {modeActif === 'tram' && renderSection("Réseau Tramway (T1 à T14)", lignesTram)}
        
      </div>
    </aside>
  );
}
