// src/PageRepertoire.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { lignesMetro, dataRames, ligneColors, getLineLogo } from './data.js';
import './PageRepertoire.css'; 

export default function PageRepertoire() {
  
  const ramesGPE_Noms = ["MRV", "MR3V", "MR6V"];
  
  const ramesTriees = Object.entries(dataRames)
    .filter(([nom]) => !ramesGPE_Noms.includes(nom))
    .sort(([nomA], [nomB]) => nomA.localeCompare(nomB));

  const trouverLignesPourRame = (nomRame) => {
    return lignesMetro
      .filter(ligne => ligne.materiel.some(m => m.nom === nomRame))
      .map(ligne => ligne.id);
  };

  const getLignesUniques = (noms) => {
    const lignes = noms.flatMap(trouverLignesPourRame);
    return [...new Set(lignes)];
  };

  const lignesGPE = getLignesUniques(ramesGPE_Noms);
  const imageGPE = dataRames["MRV"].image; 

  return (
    <div className="repertoire-container">
      <h1>Répertoire du Matériel Roulant</h1>
      <div className="repertoire-grille">
        
        {/* Rames classiques (Métro, RER, Transilien, Tramway) */}
        {ramesTriees.map(([nom, data]) => {
          const lignes = getLignesUniques([nom]);
          return (
            <div key={nom} className="rame-carte">
              <div className="rame-carte-image-container">
                <img 
                  src={`/assets/${data.image}`} 
                  alt={nom} 
                  className="rame-carte-image"
                />
              </div>
              <div className="rame-carte-infos">

                <div className="rame-carte-couleurs">
                  {lignes.map(ligneId => (
                    <span 
                      key={ligneId} 
                      className="couleur-segment" 
                      style={{ backgroundColor: ligneColors[ligneId] || '#ccc' }}
                      title={`Ligne ${ligneId}`}
                    ></span>
                  ))}
                </div>
                
                <h3>
                  <Link to={`/rame/${encodeURIComponent(nom)}`}>{nom}</Link>
                </h3>
                <p>Circule sur les lignes :</p>
                <div className="rame-lignes-liste">
                  {lignes.map(ligneId => (
                    <Link 
                      key={ligneId} 
                      to={`/ligne/${ligneId}`} 
                      className="ligne-logo-link"
                      title={`Ligne ${ligneId}`}
                    >
                      <img 
                        src={getLineLogo(ligneId)} 
                        alt={`Ligne ${ligneId}`}
                        className="ligne-logo-repertoire"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* Carte spéciale GPE */}
        <div key="gpe-group" className="rame-carte">
          <div className="rame-carte-image-container">
            <img 
              src={`/assets/${imageGPE}`} 
              alt="Matériel Grand Paris Express" 
              className="rame-carte-image"
            />
          </div>
          <div className="rame-carte-infos">

            <div className="rame-carte-couleurs">
              {lignesGPE.map(ligneId => (
                <span 
                  key={ligneId} 
                  className="couleur-segment" 
                  style={{ backgroundColor: ligneColors[ligneId] || '#ccc' }}
                  title={`Ligne ${ligneId}`}
                ></span>
              ))}
            </div>
            
            <h3>
              <Link to={`/rame/MR6V`}>MR6V</Link> / 
              <Link to={`/rame/MR3V`}>MR3V</Link> / 
              <Link to={`/rame/MRV`}>MRV</Link>
            </h3>
            
            <p>Circule sur les lignes :</p>
            <div className="rame-lignes-liste">
              {lignesGPE.map(ligneId => (
                <Link 
                  key={ligneId} 
                  to={`/ligne/${ligneId}`} 
                  className="ligne-logo-link"
                  title={`Ligne ${ligneId}`}
                >
                  <img 
                    src={getLineLogo(ligneId)} 
                    alt={`Ligne ${ligneId}`}
                    className="ligne-logo-repertoire"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
