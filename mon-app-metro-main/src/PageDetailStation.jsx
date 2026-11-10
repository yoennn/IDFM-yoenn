// src/PageDetailStation.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { stationsData, lignesMetro, dataRames, ligneColors, getLineLogo } from './data.js';
import './PageDetailStation.css';

export default function PageDetailStation() {
  const { nom } = useParams();
  const decodedNom = decodeURIComponent(nom || '');
  
  const station = stationsData.find(s => s.nom === decodedNom || s.nom === nom);

  if (!station) {
    return <h2>Station non trouvée : {decodedNom}</h2>;
  }

  // 1. Récupérer les données complètes des lignes
  const lignesPourStation = station.lignes
    .map(id => lignesMetro.find(l => l.id === id))
    .filter(Boolean);

  // 2. Récupérer les rames uniques
  const ramesUniques = [...new Set(station.materiel)];
  const ramesData = ramesUniques
    .map(nomRame => ({ nom: nomRame, data: dataRames[nomRame] }))
    .filter(item => item.data);

  return (
    <div className="station-detail-container">
      
      {/* --- HEADER --- */}
      <header className="station-detail-header">
        <h1>{station.nom}</h1>
        
        <div className="station-couleur-barre">
          {station.lignes.map(ligneId => (
            <span 
              key={ligneId} 
              className="couleur-segment" 
              style={{ backgroundColor: ligneColors[ligneId] || '#ccc' }}
              title={`Ligne ${ligneId}`}
            ></span>
          ))}
        </div>
      </header>

      {/* --- CONTENU 2 COLONNES --- */}
      <div className="station-detail-content">
        
        {/* --- COLONNE INFOBOX (gauche) --- */}
        <aside className="station-detail-infobox">
          <div className="infobox-section">
            <h3>Lignes en correspondance</h3>
            <div className="station-lignes-liste">
              {lignesPourStation.map(ligne => (
                <Link 
                  key={ligne.id} 
                  to={`/ligne/${ligne.id}`} 
                  className="ligne-logo-link"
                  title={ligne.nom}
                >
                  <img 
                    src={ligne.logo || getLineLogo(ligne.id)} 
                    alt={ligne.nom}
                    className="ligne-logo-station"
                  />
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* --- COLONNE PRINCIPALE (droite) --- */}
        <main className="station-detail-main">
          <h2>Matériel roulant à cette station</h2>
          <div className="station-rames-grille">
            {ramesData.map(item => (
              <Link key={item.nom} to={`/rame/${encodeURIComponent(item.nom)}`} className="rame-mini-carte">
                <div className="rame-mini-carte-img-wrapper">
                  <img 
                    src={`/assets/${item.data.image}`} 
                    alt={item.nom} 
                  />
                </div>
                <h4>{item.nom}</h4>
                <p>{item.data.nomComplet}</p>
              </Link>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}
