// src/MenuDeroulant.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { lignesMetro, getLineLogo } from './data.js';
import './MenuDeroulant.css';

export default function MenuDeroulant({ estOuvert, onClose }) {
  const lignesActuelles = lignesMetro.filter(l => l.type === 'actuel');
  const lignesGPE = lignesMetro.filter(l => l.type === 'gpe');
  const lignesRER = lignesMetro.filter(l => l.type === 'rer');
  const lignesTransilien = lignesMetro.filter(l => l.type === 'transilien');
  const lignesTram = lignesMetro.filter(l => l.type === 'tram');
  
  const handleClose = () => {
    onClose();
  };

  const renderSection = (titre, liste) => (
    <>
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
    </>
  );

  return (
    <div className={`menu-deroulant ${estOuvert ? 'open' : ''}`}>
      <div className="menu-content">
        
        {/* Navigation */}
        <h2 className="menu-titre-section">Navigation</h2>
        <Link to="/repertoire" className="menu-link-repertoire" onClick={handleClose}>
          Répertoire des Rames
        </Link>
        <Link to="/carte" className="menu-link-repertoire" onClick={handleClose}>
          Carte du Réseau
        </Link>

        {renderSection("Réseau Actuel (Métro)", lignesActuelles)}
        {renderSection("Grand Paris Express", lignesGPE)}
        {renderSection("Réseau RER", lignesRER)}
        {renderSection("Réseau Transilien", lignesTransilien)}
        {renderSection("Réseau Tramway", lignesTram)}
        
      </div>
    </div>
  );
}
