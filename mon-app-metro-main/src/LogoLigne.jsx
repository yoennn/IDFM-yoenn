// src/LogoLigne.jsx
import React from 'react';
import { lignesMetro, getLineLogo, getModeLogo } from './data.js';
import './App.css';

export function LogoLigne({ id }) {
  const ligne = lignesMetro.find(l => l.id === String(id));
  const modeLogo = ligne ? (ligne.modeLogo || getModeLogo(ligne.mode)) : '/assets/metro-logo.png';
  const lineLogo = ligne ? (ligne.logo || getLineLogo(id)) : getLineLogo(id);

  return (
    <div className="logo-ligne-container">
      <img src={modeLogo} alt={ligne?.mode || "Mode"} className="logo-m" />
      <img src={lineLogo} alt={`Ligne ${id}`} className="logo-num" />
    </div>
  );
}
