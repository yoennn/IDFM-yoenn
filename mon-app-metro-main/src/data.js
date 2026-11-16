// src/data.js — Généré automatiquement par prepare_data_and_assets.py
// Données unifiées : Métro (1 à 18) + RER (A à E) + Transilien (H à V) + Tramway (T1 à T14)

export const dataRames = {
  "MP 89 CC": {
    "nomComplet": "Matériel Pneu 1989 (Conduite Conducteur)",
    "image": "mp89cc.png",
    "constructeur": "GEC Alsthom",
    "miseEnService": "1997",
    "vitesseMax": "80 km/h",
    "composition": "5 voitures (réduites)",
    "capacite": "~600 voyageurs",
    "descriptionLongue": "Version à Conduite Conducteur (CC) du MP 89. Ces rames ont équipé la Ligne 1 jusqu'à son automatisation en 2011. Elles ont ensuite été transférées sur la Ligne 4. Avec l'automatisation de la 4, les rames ont été raccourcies de 6 à 5 voitures et sont progressivement transférées sur la Ligne 6 pour remplacer les MP 73."
  },
  "MP 05": {
    "nomComplet": "Matériel Pneu 2005",
    "image": "mp05.png",
    "constructeur": "Alstom",
    "miseEnService": "2008",
    "vitesseMax": "70 km/h",
    "composition": "6 voitures (automatiques)",
    "capacite": "~550 voyageurs",
    "descriptionLongue": "Le MP 05 (Matériel Pneu 2005) est un matériel sur pneus entièrement automatique (CA) commandé par la RATP pour équiper la Ligne 1 lors de son automatisation intégrale. Techniquement, il est une évolution directe du MP 89 CA de la Ligne 14, avec une nouvelle face avant et une livrée modernisée. L'automatisation de la Ligne 1, une première mondiale sur une ligne aussi ancienne et fréquentée sans interruption de trafic, a nécessité le déploiement de ces rames."
  },
  "MP 05 IDFM": {
    "nomComplet": "Matériel Pneu 2005 (IDFM)",
    "image": "mp05idfm.png",
    "constructeur": "Alstom",
    "miseEnService": "2008 (Rénové IDFM ~2020)",
    "vitesseMax": "70 km/h",
    "composition": "6 voitures (automatiques)",
    "capacite": "~550 voyageurs",
    "descriptionLongue": "Ces rames sont techniquement identiques aux MP 05 de la Ligne 1. Elles proviennent du parc de cette ligne, libérées suite à l'arrivée des nouvelles rames MP 14. Dans le cadre de l'automatisation de la Ligne 4, ces rames ont été rénovées avec la livrée grise et bleue d'Île-de-France Mobilités (IDFM) et transférées progressivement sur la 4. Elles y circulent aux côtés des MP 89 CA et des MP 14 CA."
  },
  "MF 01": {
    "nomComplet": "Matériel Fer 2001 (MF 2000)",
    "image": "mf01.png",
    "constructeur": "Alstom, Bombardier, Technic-Ateliers",
    "miseEnService": "2007",
    "vitesseMax": "70 km/h",
    "composition": "5 voitures (boa)",
    "capacite": "~540 voyageurs",
    "descriptionLongue": "Le MF 01 (Matériel Fer 2001), aussi connu sous le nom de MF 2000, est le matériel fer moderne qui remplace les vieux MF 67 sur les lignes 2, 5 et 9. Conçu par Alstom et Bombardier, il introduit l'intercirculation intégrale (type boa), la ventilation réfrigérée et une consommation d'énergie réduite de 30% grâce au freinage à récupération. Il offre des couloirs larges et des baies vitrées plus grandes pour un meilleur confort voyageur."
  },
  "MF 67": {
    "nomComplet": "Matériel Fer 1967",
    "image": "mf67.png",
    "constructeur": "Brissonneau et Lotz, CIMT",
    "miseEnService": "1967",
    "vitesseMax": "70 km/h",
    "composition": "5 voitures (ou 3 sur 3bis)",
    "capacite": "~515 voyageurs (5v)",
    "descriptionLongue": "Série la plus nombreuse jamais construite pour le métro parisien, le MF 67 (Matériel Fer 1967) est en service depuis 1967. Ayant équipé la majorité des lignes sur fer, il est le matériel le plus ancien du réseau (suite à la réforme des MP 59) et circule encore sur les lignes 3, 3bis, 10 et 12. Il a existé en de nombreuses sous-séries (A, B, D, E, F) avec différentes configurations. Il sera progressivement remplacé d'ici 2031 par le nouveau MF 19."
  },
  "MP 89 CA": {
    "nomComplet": "Matériel Pneu 1989 (Conduite Automatique)",
    "image": "mp89ca.png",
    "constructeur": "GEC Alsthom",
    "miseEnService": "1997",
    "vitesseMax": "80 km/h",
    "composition": "6 voitures (automatiques)",
    "capacite": "~720 voyageurs",
    "descriptionLongue": "Premier matériel roulant entièrement automatique du métro parisien, le MP 89 CA (Conduite Automatique) a été conçu pour la Ligne 14 (Météor), inaugurée en 1998. Il est célèbre pour son design (par Roger Tallon), son intercirculation intégrale boa et l'absence de loge de conduite, offrant une vue panoramique. Avec l'arrivée des rames MP 14 à 8 voitures sur la 14, tout le parc de MP 89 CA a été transféré sur la Ligne 4 pour son automatisation."
  },
  "MP 73": {
    "nomComplet": "Matériel Pneu 1973",
    "image": "mp73.png",
    "constructeur": "Alstom, ANF, CEM",
    "miseEnService": "1974",
    "vitesseMax": "70 km/h",
    "composition": "5 voitures",
    "capacite": "~400 voyageurs",
    "descriptionLongue": "Conçu spécifiquement pour la Ligne 6 en 1974, le MP 73 (Matériel Pneu 1973) est reconnaissable à son adaptation unique à cette ligne majoritairement aérienne. Il est équipé de bogies spéciaux pour mieux s'adapter aux virages serrés du viaduc et réduire le bruit. Malgré son âge, il a été rénové et reste indissociable de l'image de la ligne 6, remplaçant à l'époque les anciens MP 55."
  },
  "MF 77": {
    "nomComplet": "Matériel Fer 1977",
    "image": "mf77.png",
    "constructeur": "Alsthom, ANF, Creusot-Loire",
    "miseEnService": "1978",
    "vitesseMax": "70 km/h",
    "composition": "5 voitures",
    "capacite": "~570 voyageurs",
    "descriptionLongue": "Surnommé 'le requin' ou 'double Gothique' pour son design galbé novateur, le MF 77 (Matériel Fer 1977) a été conçu pour les lignes longues et à grande affluence avec des prolongements en banlieue (lignes 7, 8 et 13). Sa vitesse théorique de 100 km/h (limitée à 70) était une prouesse pour l'époque. Les rames de la Ligne 13 ont été lourdement rénovées pour accueillir le système de pilotage automatique OURAGAN."
  },
  "MF 88": {
    "nomComplet": "Matériel Fer 1988",
    "image": "mf88.png",
    "constructeur": "Bombardier (ANF)",
    "miseEnService": "1993",
    "vitesseMax": "70 km/h",
    "composition": "3 voitures",
    "capacite": "~190 voyageurs",
    "descriptionLongue": "Série expérimentale unique (9 rames) conçue pour la Ligne 7bis, le MF 88 (Matériel Fer 1988) a servi de laboratoire pour des technologies issues du prototype BOA. Sa principale innovation était ses essieux orientables, conçus pour réduire le bruit et l'usure dans les courbes très serrées de la ligne. Cette technologie s'est avérée fragile et coûteuse en entretien, menant à l'abandon du projet pour une production en grande série. Il sera remplacé par le MF 19."
  },
  "MP 14 CC": {
    "nomComplet": "Matériel Pneu 2014 (Conduite Conducteur)",
    "image": "mp14cc.png",
    "constructeur": "Alstom",
    "miseEnService": "2023",
    "vitesseMax": "80 km/h",
    "composition": "5 voitures (boa)",
    "capacite": "~580 voyageurs",
    "descriptionLongue": "Version à Conduite Conducteur (CC) du nouveau matériel sur pneus MP 14. Déployée en 2023, cette version à 5 voitures avec intercirculation boa a été commandée pour la Ligne 11, afin de remplacer les historiques MP 59 (les plus anciens du réseau à ce moment-là) et d'accompagner le prolongement de la ligne à l'Est."
  },
  "MP 14 CA": {
    "nomComplet": "Matériel Pneu 2014 (Conduite Automatique)",
    "image": "mp14ca.png",
    "constructeur": "Alstom",
    "miseEnService": "2019",
    "vitesseMax": "80 km/h",
    "composition": "6 ou 8 voitures (boa, auto)",
    "capacite": "+1000 voyageurs (8v)",
    "descriptionLongue": "Version à Conduite Automatique (CA) du MP 14. Ce matériel moderne sans cabine de conduite existe en deux longueurs : en version 8 voitures (les plus longues rames du réseau) pour la Ligne 14 afin d'accompagner ses prolongements et son trafic élevé, et en version 6 voitures pour la Ligne 4, où il complète le parc automatique aux côtés des MP 89 et MP 05."
  },
  "MF 19 CC": {
    "nomComplet": "Matériel Fer 2019 (Conduite Conducteur)",
    "image": "mf19cc.png",
    "constructeur": "Alstom, Bombardier",
    "miseEnService": "2025",
    "vitesseMax": "85 km/h",
    "composition": "5 voitures (boa)",
    "capacite": "~550 voyageurs",
    "descriptionLongue": "Le MF 19 (Matériel Fer 2019) est le tout nouveau matériel sur fer destiné à remplacer les rames MF 67, MF 77 et MF 88 sur 8 lignes du réseau (3, 3bis, 7, 7bis, 8, 10, 12, 13). Le déploiement a commencé sur la Ligne 10 en 2025. Cette version 'CC' (Conduite Conducteur) est un train boa (intercirculation) et sera déclinée en différentes longueurs pour s'adapter à chaque ligne."
  },
  "MR6V": {
    "nomComplet": "Matériel Roulant 6 Voitures (GPE)",
    "image": "mf19ca.png",
    "constructeur": "Alstom",
    "miseEnService": "Prévu pour 2026",
    "vitesseMax": "110 km/h",
    "composition": "6 voitures (boa, auto)",
    "capacite": "~1000 voyageurs",
    "descriptionLongue": "Le MR6V (Matériel Roulant 6 Voitures) est le matériel automatique conçu par Alstom pour la Ligne 15 du Grand Paris Express. Il s'agit d'un métro lourd sur fer, alimenté par caténaire (1500V), mesurant 108 mètres de long et pouvant accueillir environ 1000 voyageurs."
  },
  "MR3V": {
    "nomComplet": "Matériel Roulant 3 Voitures (GPE)",
    "image": "mf19ca.png",
    "constructeur": "Alstom",
    "miseEnService": "Prévu pour 2026",
    "vitesseMax": "110 km/h",
    "composition": "3 voitures (boa, auto)",
    "capacite": "~500 voyageurs",
    "descriptionLongue": "Le MR3V (Matériel Roulant 3 Voitures) est la version courte du matériel automatique du Grand Paris Express. Basé sur la même plateforme Alstom que le MR6V, il mesure 54 mètres de long pour une capacité d'environ 500 voyageurs. Il est destiné aux lignes 16 et 17 du GPE."
  },
  "MRV": {
    "nomComplet": "Matériel Roulant Vitesse (GPE)",
    "image": "mf19ca.png",
    "constructeur": "Alstom",
    "miseEnService": "Prévu pour 2027",
    "vitesseMax": "120 km/h",
    "composition": "3 voitures (auto)",
    "capacite": "~350 voyageurs",
    "descriptionLongue": "Le MRV (Matériel Roulant Vitesse) est le matériel automatique spécifique à la Ligne 18 du Grand Paris Express. Contrairement aux MR6V/3V, il s'agit d'un métro léger alimenté par 3ème rail, conçu pour de hautes vitesses (jusqu'à 120 km/h) sur le plateau de Saclay."
  },
  "MI 2N Altéo": {
    "nomComplet": "Matériel d'Interconnexion à 2 Niveaux (Z 1500)",
    "image": "mi2n-alteo.jpg",
    "constructeur": "GEC Alsthom, Bombardier (ANF)",
    "miseEnService": "1997",
    "vitesseMax": "120 km/h",
    "composition": "5 voitures à 2 niveaux (3 portes/face)",
    "capacite": "~2 600 voyageurs (UM2)",
    "descriptionLongue": "Premier matériel à deux niveaux du RER A (Z 1500), le MI 2N Altéo a été conçu pour absorber la très forte affluence du tronçon central grâce à ses trois larges portes par voiture et par face permettant des échanges rapides en station."
  },
  "MI 09": {
    "nomComplet": "Matériel d'Interconnexion 2009 (Z 1600)",
    "image": "mi09.jpg",
    "constructeur": "Alstom, Bombardier",
    "miseEnService": "2011",
    "vitesseMax": "120 km/h",
    "composition": "5 voitures à 2 niveaux",
    "capacite": "~2 600 voyageurs (UM2)",
    "descriptionLongue": "Évolution modernisée du MI 2N Altéo, le MI 09 équipe majoritairement le RER A où il a remplacé les historiques MS 61 et MI 84. Doté de la ventilation réfrigérée et d'écrans d'information voyageurs, il forme l'épine dorsale de la ligne la plus fréquentée d'Europe."
  },
  "MI 79": {
    "nomComplet": "Matériel d'Interconnexion 1979 (Z 8100)",
    "image": "mi79.jpg",
    "constructeur": "Alsthom, ANF, Franco-Belge",
    "miseEnService": "1980",
    "vitesseMax": "120 km/h",
    "composition": "4 voitures (UM2 = 8 voitures)",
    "capacite": "~1 700 voyageurs (UM2)",
    "descriptionLongue": "Matériel bicourant historique du RER B conçu pour l'interconnexion Nord-Sud entre les réseaux RATP (1,5 kV continu) et SNCF (25 kV alternatif). L'ensemble du parc a bénéficié d'une rénovation lourde avec climatisation et livrée grise/bleue."
  },
  "MI 84": {
    "nomComplet": "Matériel d'Interconnexion 1984 (Z 8400)",
    "image": "mi84.jpg",
    "constructeur": "Alsthom, ANF",
    "miseEnService": "1985",
    "vitesseMax": "120 km/h",
    "composition": "4 voitures",
    "capacite": "~1 700 voyageurs (UM2)",
    "descriptionLongue": "Dérivé direct du MI 79 initialement déployé sur le RER A avant d'être transféré sur le RER B pour renforcer l'offre aux côtés des MI 79 dans l'attente des futures rames MI 20."
  },
  "Z 20500": {
    "nomComplet": "Automotrice à 2 Niveaux Z 20500 (Z 2N)",
    "image": "z20500.jpg",
    "constructeur": "GEC Alsthom, ANF, CIMT",
    "miseEnService": "1988",
    "vitesseMax": "140 km/h",
    "composition": "4 ou 5 voitures à 2 niveaux",
    "capacite": "~1 500 à 2 600 voyageurs",
    "descriptionLongue": "Pilier du réseau RER et Transilien à deux niveaux depuis la fin des années 1980, la série Z 20500 circule sur les lignes C et D du RER ainsi que sur les lignes P et V du Transilien."
  },
  "Z 20900": {
    "nomComplet": "Automotrice à 2 Niveaux Z 20900 (Z 2N NG)",
    "image": "z20900.jpg",
    "constructeur": "Alstom, Bombardier",
    "miseEnService": "2001",
    "vitesseMax": "140 km/h",
    "composition": "4 voitures à 2 niveaux (climatisées)",
    "capacite": "~1 500 voyageurs (UM2)",
    "descriptionLongue": "Ultime évolution de la famille des Z 2N, les Z 20900 se distinguent par leur climatisation, leur intercirculation entre voitures d'une même demi-rame et leur chaîne de traction asynchrone. Elles équipent le RER C et la ligne V."
  },
  "Z 8800": {
    "nomComplet": "Automotrice Bicourant à 2 Niveaux Z 8800",
    "image": "z8800.jpg",
    "constructeur": "Alsthom, ANF, CIMT",
    "miseEnService": "1985",
    "vitesseMax": "140 km/h",
    "composition": "4 voitures à 2 niveaux",
    "capacite": "~1 500 voyageurs (UM2)",
    "descriptionLongue": "Première série bicourant de la famille Z 2N, conçue pour permettre la desserte de la branche Pontoise du RER C ainsi que les lignes U et V du Transilien."
  },
  "Z 5600": {
    "nomComplet": "Automotrice Monocourant à 2 Niveaux Z 5600",
    "image": "z5600.jpg",
    "constructeur": "ANF, CIMT, TCO",
    "miseEnService": "1982",
    "vitesseMax": "140 km/h",
    "composition": "4 ou 6 voitures à 2 niveaux",
    "capacite": "~1 500 voyageurs",
    "descriptionLongue": "Première génération des automotrices à deux niveaux Z 2N, alimentée en 1,5 kV continu et engagée sur le RER C ainsi que la ligne V."
  },
  "RER NG": {
    "nomComplet": "RER Nouvelle Génération (Z 58000 / Z 58500)",
    "image": "rer-ng.jpg",
    "constructeur": "Alstom, Bombardier (X'Trapolis Cityduplex)",
    "miseEnService": "2023",
    "vitesseMax": "140 km/h",
    "composition": "6 ou 7 voitures (boa, 1 et 2 niveaux)",
    "capacite": "~1 560 à 1 860 voyageurs",
    "descriptionLongue": "Conçu spécifiquement pour les lignes E et D du RER, le RER NG combine des voitures d'extrémité à un niveau pour fluidifier les flux et des voitures centrales à deux niveaux pour maximiser la capacité, avec intercirculation intégrale."
  },
  "MI 2N Eole": {
    "nomComplet": "Matériel à 2 Niveaux Eole (Z 22500)",
    "image": "mi2n-eole.jpg",
    "constructeur": "GEC Alsthom, ANF",
    "miseEnService": "1996",
    "vitesseMax": "140 km/h",
    "composition": "5 voitures à 2 niveaux (3 portes/face)",
    "capacite": "~2 500 voyageurs (UM2)",
    "descriptionLongue": "Version SNCF monocourant 25 kV du MI 2N, commandée pour l'ouverture du RER E (Eole) en 1999. Ses trois portes par face assurent des échanges rapides dans les gares souterraines parisiennes."
  },
  "Z 50000 Francilien": {
    "nomComplet": "Automotrice Z 50000 « Francilien » (NAT)",
    "image": "z50000.jpg",
    "constructeur": "Bombardier (Alstom)",
    "miseEnService": "2009",
    "vitesseMax": "140 km/h",
    "composition": "7 ou 8 voitures (boa, 1 niveau)",
    "capacite": "~800 à 1 000 voyageurs",
    "descriptionLongue": "Train boa à un seul niveau ultra-large, climatisé et doté d'un plancher bas, le Francilien (Z 50000) a modernisé les lignes H, J, K, L et P du Transilien ainsi qu'une partie du RER E."
  },
  "Regio 2N": {
    "nomComplet": "Automotrice à 2 Niveaux Z 57000 (Omneo / Regio 2N)",
    "image": "regio2n.jpg",
    "constructeur": "Bombardier (Alstom)",
    "miseEnService": "2017",
    "vitesseMax": "160 km/h",
    "composition": "8 caisses (alternance 1 et 2 niveaux)",
    "capacite": "~1 050 voyageurs (US)",
    "descriptionLongue": "Version Île-de-France Mobilités du Regio 2N (Z 57000), déployée sur les lignes N et R du Transilien ainsi que sur les branches sud du RER D. Elle offre climatisation, prises électriques et larges plateformes d'accès."
  },
  "AGC BiBi": {
    "nomComplet": "Autorail Grande Capacité Bimode-Bicourant (B 82500)",
    "image": "agc-bibi.jpg",
    "constructeur": "Bombardier",
    "miseEnService": "2007",
    "vitesseMax": "160 km/h",
    "composition": "4 caisses articulées",
    "capacite": "~300 voyageurs (US)",
    "descriptionLongue": "Rame bimode (électrique et thermique) et bicourant utilisée sur la branche non électrifiée Paris-Est ↔ Provins de la ligne P du Transilien."
  },
  "TFS": {
    "nomComplet": "Tramway Français Standard (Alsthom TFS)",
    "image": "tfs.jpg",
    "constructeur": "GEC Alsthom, Francorail",
    "miseEnService": "1992",
    "vitesseMax": "70 km/h",
    "composition": "3 caisses à plancher bas partiel",
    "capacite": "~178 voyageurs",
    "descriptionLongue": "Matériel historique du renouveau du tramway en Île-de-France, inauguré sur la ligne T1 en 1992 puis engagé sur le T2 avant d'être regroupé sur le T1 où il est progressivement remplacé par le Citadis 305 (TW20)."
  },
  "Citadis 305": {
    "nomComplet": "Alstom Citadis 305 (TW20)",
    "image": "citadis305.jpg",
    "constructeur": "Alstom",
    "miseEnService": "2024",
    "vitesseMax": "70 km/h",
    "composition": "5 modules (33 m, plancher bas intégral)",
    "capacite": "~200 voyageurs",
    "descriptionLongue": "Nouveau tramway de la gamme Citadis X05 commandé sous le nom de projet TW20 pour renouveler le parc des TFS de la ligne T1 et accompagner son prolongement vers l'Est."
  },
  "Citadis 302": {
    "nomComplet": "Alstom Citadis 302",
    "image": "citadis302.jpg",
    "constructeur": "Alstom",
    "miseEnService": "2002",
    "vitesseMax": "70 km/h",
    "composition": "5 modules (32 m, couplables en UM2 sur T2)",
    "capacite": "~213 voyageurs (440 en UM2 sur T2)",
    "descriptionLongue": "Tramway à plancher bas intégral de 32 mètres circulant en unités multiples (65 m) sur la ligne T2 et en unité simple sur les lignes T7 et T8."
  },
  "Citadis 402": {
    "nomComplet": "Alstom Citadis 402",
    "image": "citadis402.jpg",
    "constructeur": "Alstom",
    "miseEnService": "2006",
    "vitesseMax": "70 km/h",
    "composition": "7 modules (43,7 m, grand gabarit 2,65 m)",
    "capacite": "~304 voyageurs",
    "descriptionLongue": "Tramway de grande capacité (44 mètres de long et 2,65 mètres de large) conçu spécialement pour le tramway des Maréchaux (lignes T3a et T3b) entourant Paris."
  },
  "Citadis 405": {
    "nomComplet": "Alstom Citadis 405 « Lumière »",
    "image": "citadis405.jpg",
    "constructeur": "Alstom",
    "miseEnService": "2021",
    "vitesseMax": "70 km/h",
    "composition": "7 modules (45 m)",
    "capacite": "~314 voyageurs",
    "descriptionLongue": "Tramway de dernière génération doté d'une signature lumineuse distinctive (design « Lumière »), de doubles portes aux extrémités et de la climatisation, déployé sur les lignes T9 et T10."
  },
  "Citadis Dualis": {
    "nomComplet": "Alstom Citadis Dualis (U 53600 / U 53700 / U 53800)",
    "image": "citadis-dualis.jpg",
    "constructeur": "Alstom",
    "miseEnService": "2017",
    "vitesseMax": "100 km/h",
    "composition": "4 modules (42 m, tram-train)",
    "capacite": "~250 voyageurs (US)",
    "descriptionLongue": "Matériel tram-train apte à circuler aussi bien sur le réseau ferré national que sur des voies urbaines de tramway. Il équipe les lignes express T4, T11, T12, T13 et T14."
  },
  "Avanto": {
    "nomComplet": "Siemens Avanto S70 (U 25500)",
    "image": "avanto.jpg",
    "constructeur": "Siemens",
    "miseEnService": "2006",
    "vitesseMax": "100 km/h",
    "composition": "5 modules (37 m, tram-train)",
    "capacite": "~242 voyageurs",
    "descriptionLongue": "Premier matériel tram-train mis en service en France lors de la transformation de la ligne des Coquetiers en ligne T4 entre Bondy et Aulnay-sous-Bois en 2006."
  },
  "Translohr STE3": {
    "nomComplet": "Translohr STE3 (Tramway sur pneumatiques)",
    "image": "translohr-ste3.jpg",
    "constructeur": "Lohr Industrie / NTL",
    "miseEnService": "2013",
    "vitesseMax": "70 km/h",
    "composition": "3 caisses sur pneus guidées par rail central (25 m)",
    "capacite": "~127 voyageurs",
    "descriptionLongue": "Tramway sur pneumatiques guidé par un rail central unique, en version courte à 3 modules adaptée au profil et au gabarit de la ligne T5 entre Saint-Denis et Garges–Sarcelles."
  },
  "Translohr STE6": {
    "nomComplet": "Translohr STE6 (Tramway sur pneumatiques)",
    "image": "translohr-ste6.jpg",
    "constructeur": "Lohr Industrie / NTL",
    "miseEnService": "2014",
    "vitesseMax": "70 km/h",
    "composition": "6 caisses sur pneus guidées par rail central (46 m)",
    "capacite": "~255 voyageurs",
    "descriptionLongue": "Version longue (46 mètres, 6 modules) du tramway sur pneus Translohr, choisie pour la ligne T6 afin de franchir les fortes pentes (jusqu'à 10 %) entre Châtillon et Viroflay, dont une section souterraine."
  }
};

export const lignesMetro = [
  {
    "id": "1",
    "nom": "Ligne 1",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "La Défense",
      "Château de Vincennes"
    ],
    "ouverture": "1900",
    "stations": 25,
    "longueur": "16,6 km",
    "logo": "/assets/1-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/1-plan.png",
    "materiel": [
      {
        "nom": "MP 05",
        "description": "<strong>Rame automatique (CA) à 6 voitures.</strong><br>Déployées lors de l'automatisation intégrale de la ligne (2008-2011), elles remplacent les anciennes rames MP 89 CC (à conduite manuelle)."
      }
    ],
    "correspondances": [
      "2",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "11",
      "12",
      "13",
      "14",
      "15",
      "A",
      "C",
      "D",
      "E",
      "L",
      "R",
      "U",
      "T2",
      "T3a",
      "T3b"
    ],
    "color": "#ffbe00",
    "idfmLineId": "C01371"
  },
  {
    "id": "2",
    "nom": "Ligne 2",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "Porte Dauphine",
      "Nation"
    ],
    "ouverture": "1900",
    "stations": 25,
    "longueur": "12,4 km",
    "logo": "/assets/2-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/2-plan.png",
    "materiel": [
      {
        "nom": "MF 01",
        "description": "<strong>Rame boa climatisée à 5 voitures.</strong><br>Ces rames modernes (aussi appelées MF 2000) ont remplacé les MF 67 vieillissants, apportant plus de confort, la climatisation et l'intercirculation."
      }
    ],
    "correspondances": [
      "1",
      "3",
      "4",
      "5",
      "6",
      "7",
      "7bis",
      "9",
      "11",
      "12",
      "13",
      "A"
    ],
    "color": "#0055c8",
    "idfmLineId": "C01372"
  },
  {
    "id": "3",
    "nom": "Ligne 3",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "Pont de Levallois",
      "Gallieni"
    ],
    "ouverture": "1904",
    "stations": 25,
    "longueur": "11,7 km",
    "logo": "/assets/3-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/3-plan.png",
    "materiel": [
      {
        "nom": "MF 67",
        "description": "<strong>Rame historique à 5 voitures.</strong><br>Matériel emblématique du réseau, il est en service sur la 3 depuis les années 70. Il est en cours de remplacement progressif par le nouveau MF 19."
      }
    ],
    "correspondances": [
      "2",
      "3bis",
      "4",
      "5",
      "7",
      "8",
      "9",
      "11",
      "12",
      "13",
      "14",
      "D",
      "J",
      "L",
      "T3b"
    ],
    "color": "#6e6e00",
    "idfmLineId": "C01373"
  },
  {
    "id": "3bis",
    "nom": "Ligne 3bis",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "Gambetta",
      "Porte des Lilas"
    ],
    "ouverture": "1921 (1971 en 3bis)",
    "stations": 4,
    "longueur": "1,3 km",
    "logo": "/assets/3bis-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/3bis-plan.png",
    "materiel": [
      {
        "nom": "MF 67",
        "description": "<strong>Rame courte à 3 voitures.</strong><br>Ces rames spécifiques proviennent de la Ligne 9 et ont été adaptées à la très faible fréquentation de la plus petite ligne du réseau."
      }
    ],
    "correspondances": [
      "3",
      "11",
      "D",
      "T3b"
    ],
    "color": "#82c8e6",
    "idfmLineId": "C01386"
  },
  {
    "id": "4",
    "nom": "Ligne 4",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "Porte de Clignancourt",
      "Bagneux–Lucie Aubrac"
    ],
    "ouverture": "1908",
    "stations": 29,
    "longueur": "14 km",
    "logo": "/assets/4-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/4-plan.png",
    "materiel": [
      {
        "nom": "MP 14 CA",
        "description": "<strong>Rame automatique (CA) neuve à 6 voitures.</strong><br>Déployées pour finaliser l'automatisation et augmenter la capacité de la ligne."
      },
      {
        "nom": "MP 05 IDFM",
        "description": "<strong>Rame automatique (CA) rénovée à 6 voitures.</strong><br>Provenant de la Ligne 1, elles ont été transférées et rénovées pour l'automatisation de la 4."
      },
      {
        "nom": "MP 89 CA",
        "description": "<strong>Rame automatique (CA) à 6 voitures.</strong><br>Historiques de la Ligne 14, elles ont été transférées sur la 4 après l'arrivée des MP 14 (8 voitures) sur la 14."
      }
    ],
    "correspondances": [
      "1",
      "2",
      "3",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "B",
      "D",
      "H",
      "K",
      "N",
      "P",
      "T3a",
      "T3b"
    ],
    "color": "#a0006e",
    "idfmLineId": "C01374"
  },
  {
    "id": "5",
    "nom": "Ligne 5",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "Bobigny–Pablo Picasso",
      "Place d'Italie"
    ],
    "ouverture": "1906",
    "stations": 22,
    "longueur": "14,6 km",
    "logo": "/assets/5-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/5-plan.png",
    "materiel": [
      {
        "nom": "MF 01",
        "description": "<strong>Rame boa climatisée à 5 voitures.</strong><br>Tout comme la Ligne 2, la 5 a été équipée de ce matériel moderne pour remplacer les anciens MF 67."
      }
    ],
    "correspondances": [
      "1",
      "2",
      "3",
      "4",
      "6",
      "7",
      "7bis",
      "8",
      "9",
      "10",
      "11",
      "15",
      "B",
      "C",
      "D",
      "H",
      "K",
      "P",
      "T1"
    ],
    "color": "#ff5a00",
    "idfmLineId": "C01375"
  },
  {
    "id": "6",
    "nom": "Ligne 6",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "Charles de Gaulle–Étoile",
      "Nation"
    ],
    "ouverture": "1909",
    "stations": 28,
    "longueur": "13,7 km",
    "logo": "/assets/6-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/6-plan.png",
    "materiel": [
      {
        "nom": "MP 73",
        "description": "<strong>Rame sur pneus à 5 voitures.</strong><br>Ce matériel a été conçu spécifiquement pour la Ligne 6 et ses nombreux viaducs. Ses bogies sont adaptés aux virages serrés."
      },
      {
        "nom": "MP 89 CC",
        "description": "<strong>Rame boa à 5 voitures (ex-Ligne 4).</strong><br>Transférées après l'automatisation de la Ligne 4, ces rames sont raccourcies à 5 voitures."
      }
    ],
    "correspondances": [
      "1",
      "2",
      "4",
      "5",
      "7",
      "8",
      "9",
      "10",
      "12",
      "13",
      "14",
      "A",
      "B",
      "N",
      "R"
    ],
    "color": "#82dc73",
    "idfmLineId": "C01376"
  },
  {
    "id": "7",
    "nom": "Ligne 7",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "La Courneuve–8 Mai 1945",
      "Mairie d'Ivry / Villejuif"
    ],
    "ouverture": "1910",
    "stations": 38,
    "longueur": "22,5 km",
    "logo": "/assets/7-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/7-plan.png",
    "materiel": [
      {
        "nom": "MF 77",
        "description": "<strong>Rame à 5 voitures (design 'requin').</strong><br>Conçues pour les lignes longues avec des branches, elles sont en service sur la 7 depuis 1979 et sont actuellement en cours de rénovation."
      }
    ],
    "correspondances": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7bis",
      "8",
      "9",
      "10",
      "11",
      "14",
      "15",
      "P",
      "T1",
      "T3a",
      "T7",
      "T9"
    ],
    "color": "#ff82b4",
    "idfmLineId": "C01377"
  },
  {
    "id": "7bis",
    "nom": "Ligne 7bis",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "Louis Blanc",
      "Pré-Saint-Gervais"
    ],
    "ouverture": "1911 (1967 en 7bis)",
    "stations": 8,
    "longueur": "3,1 km",
    "logo": "/assets/7bis-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/7bis-plan.png",
    "materiel": [
      {
        "nom": "MF 88",
        "description": "<strong>Rame expérimentale à 3 voitures.</strong><br>Prototype unique à 9 exemplaires, il testait des essieux orientables pour les virages serrés de la ligne. Il sera remplacé par le MF 19."
      }
    ],
    "correspondances": [
      "2",
      "5",
      "7",
      "11"
    ],
    "color": "#82dc73",
    "idfmLineId": "C01387"
  },
  {
    "id": "8",
    "nom": "Ligne 8",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "Balard",
      "Pointe du Lac"
    ],
    "ouverture": "1913",
    "stations": 38,
    "longueur": "23,4 km",
    "logo": "/assets/8-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/8-plan.png",
    "materiel": [
      {
        "nom": "MF 77",
        "description": "<strong>Rame à 5 voitures (design 'requin').</strong><br>Matériel historique de la ligne, conçu pour les longs trajets de banlieue à banlieue."
      }
    ],
    "correspondances": [
      "1",
      "3",
      "4",
      "5",
      "6",
      "7",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "C",
      "T3a"
    ],
    "color": "#d282be",
    "idfmLineId": "C01378"
  },
  {
    "id": "9",
    "nom": "Ligne 9",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "Pont de Sèvres",
      "Mairie de Montreuil"
    ],
    "ouverture": "1922",
    "stations": 37,
    "longueur": "19,6 km",
    "logo": "/assets/9-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/9-plan.png",
    "materiel": [
      {
        "nom": "MF 01",
        "description": "<strong>Rame boa climatisée à 5 voitures.</strong><br>Le déploiement de ces rames s'est achevé en 2016, remplaçant les MF 67 et modernisant cette ligne très fréquentée."
      }
    ],
    "correspondances": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "10",
      "11",
      "13",
      "15",
      "A",
      "T3b"
    ],
    "color": "#d2d200",
    "idfmLineId": "C01379"
  },
  {
    "id": "10",
    "nom": "Ligne 10",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "Boulogne–Pont de St-Cloud",
      "Gare d'Austerlitz"
    ],
    "ouverture": "1913",
    "stations": 23,
    "longueur": "11,7 km",
    "logo": "/assets/10-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/10-plan.png",
    "materiel": [
      {
        "nom": "MF 67",
        "description": "<strong>Rame historique à 5 voitures.</strong><br>C'est l'une des dernières lignes à être entièrement équipée de ce matériel fiable mais vieillissant."
      },
      {
        "nom": "MF 19 CC",
        "description": "<strong>Nouveau matériel (Conduite Conducteur).</strong><br>La Ligne 10 est la première ligne équipée de la nouvelle rame MF 19 remplaçant les MF 67."
      }
    ],
    "correspondances": [
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "12",
      "13",
      "C"
    ],
    "color": "#dc9600",
    "idfmLineId": "C01380"
  },
  {
    "id": "11",
    "nom": "Ligne 11",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "Châtelet",
      "Rosny–Bois-Perrier"
    ],
    "ouverture": "1935",
    "stations": 19,
    "longueur": "11,7 km",
    "logo": "/assets/11-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/11-plan.png",
    "materiel": [
      {
        "nom": "MP 14 CC",
        "description": "<strong>Rame sur pneus neuve à 5 voitures (Conduite Conducteur).</strong><br>Déployées en 2023 pour le prolongement de la ligne et le remplacement des très anciens MP 59."
      }
    ],
    "correspondances": [
      "1",
      "2",
      "3",
      "3bis",
      "4",
      "5",
      "7",
      "7bis",
      "8",
      "9",
      "14",
      "15",
      "E",
      "T3b"
    ],
    "color": "#6e491e",
    "idfmLineId": "C01381"
  },
  {
    "id": "12",
    "nom": "Ligne 12",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "Mairie d'Aubervilliers",
      "Mairie d'Issy"
    ],
    "ouverture": "1910",
    "stations": 29,
    "longueur": "17,2 km",
    "logo": "/assets/12-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/12-plan.png",
    "materiel": [
      {
        "nom": "MF 67",
        "description": "<strong>Rame historique à 5 voitures.</strong><br>Identifiable à sa livrée spécifique, ce matériel équipe la ligne depuis les années 70 et sera remplacé par le MF 19."
      }
    ],
    "correspondances": [
      "1",
      "2",
      "3",
      "4",
      "6",
      "8",
      "10",
      "13",
      "14",
      "J",
      "L",
      "N",
      "T2",
      "T3a",
      "T3b"
    ],
    "color": "#00643c",
    "idfmLineId": "C01382"
  },
  {
    "id": "13",
    "nom": "Ligne 13",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "Asnières–Gennevilliers / St-Denis",
      "Châtillon–Montrouge"
    ],
    "ouverture": "1911",
    "stations": 32,
    "longueur": "24,4 km",
    "logo": "/assets/13-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/13-plan.png",
    "materiel": [
      {
        "nom": "MF 77",
        "description": "<strong>Rame à 5 voitures (rénovée IDFM).</strong><br>Ces rames ont été rénovées (livrée IDFM) et équipées du pilotage automatique OURAGAN pour gérer la saturation de la ligne."
      }
    ],
    "correspondances": [
      "1",
      "2",
      "3",
      "4",
      "6",
      "8",
      "9",
      "10",
      "12",
      "14",
      "15",
      "C",
      "J",
      "L",
      "N",
      "T1",
      "T3a",
      "T3b",
      "T6",
      "T8"
    ],
    "color": "#82c8e6",
    "idfmLineId": "C01383"
  },
  {
    "id": "14",
    "nom": "Ligne 14",
    "type": "actuel",
    "mode": "metro",
    "terminus": [
      "Saint-Denis Pleyel",
      "Aéroport d'Orly"
    ],
    "ouverture": "1998",
    "stations": 20,
    "longueur": "27,8 km",
    "logo": "/assets/14-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/14-plan.png",
    "materiel": [
      {
        "nom": "MP 14 CA",
        "description": "<strong>Rame automatique (CA) longue à 8 voitures.</strong><br>Ce sont les rames les plus longues (120m) et les plus récentes du réseau, déployées pour les prolongements Nord et Sud."
      }
    ],
    "correspondances": [
      "1",
      "3",
      "4",
      "6",
      "7",
      "8",
      "11",
      "12",
      "13",
      "15",
      "16",
      "17",
      "18",
      "A",
      "C",
      "D",
      "J",
      "L",
      "R",
      "T3b",
      "T7"
    ],
    "color": "#640082",
    "idfmLineId": "C01384"
  },
  {
    "id": "15",
    "nom": "Ligne 15",
    "type": "gpe",
    "mode": "metro",
    "terminus": [
      "Pont de Sèvres",
      "Noisy–Champs"
    ],
    "ouverture": "Prévue 2026",
    "stations": 36,
    "longueur": "33 km",
    "logo": "/assets/15-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/15-plan.png",
    "materiel": [
      {
        "nom": "MR6V",
        "description": "<strong>Rame automatique à 6 voitures (108m).</strong><br>Futur matériel lourd sur fer, à grand gabarit, conçu pour la haute capacité de la rocade GPE."
      }
    ],
    "correspondances": [
      "1",
      "4",
      "5",
      "7",
      "8",
      "9",
      "11",
      "13",
      "14",
      "16",
      "17",
      "A",
      "B",
      "C",
      "D",
      "E",
      "J",
      "L",
      "N",
      "U",
      "T1",
      "T2",
      "T4",
      "T6",
      "T7",
      "T9"
    ],
    "color": "#aaaaaa",
    "idfmLineId": "C02874"
  },
  {
    "id": "16",
    "nom": "Ligne 16",
    "type": "gpe",
    "mode": "metro",
    "terminus": [
      "Saint-Denis Pleyel",
      "Noisy–Champs"
    ],
    "ouverture": "Prévue 2026",
    "stations": 10,
    "longueur": "29 km",
    "logo": "/assets/16-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/16-plan.png",
    "materiel": [
      {
        "nom": "MR3V",
        "description": "<strong>Rame automatique à 3 voitures (54m).</strong><br>Version plus courte du matériel GPE, adaptée à un trafic moins dense que la ligne 15."
      }
    ],
    "correspondances": [
      "14",
      "15",
      "17",
      "A",
      "B",
      "E",
      "P",
      "T1",
      "T4"
    ],
    "color": "#F1B19B"
  },
  {
    "id": "17",
    "nom": "Ligne 17",
    "type": "gpe",
    "mode": "metro",
    "terminus": [
      "Saint-Denis Pleyel",
      "Le Mesnil-Amelot"
    ],
    "ouverture": "Prévue 2026",
    "stations": 9,
    "longueur": "26,5 km",
    "logo": "/assets/17-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/17-plan.png",
    "materiel": [
      {
        "nom": "MR3V",
        "description": "<strong>Rame automatique à 3 voitures (54m).</strong><br>Même matériel que la ligne 16, destiné à desservir les aéroports du Bourget et de Roissy."
      }
    ],
    "correspondances": [
      "14",
      "15",
      "16",
      "B",
      "T1"
    ],
    "color": "#944D9B"
  },
  {
    "id": "18",
    "nom": "Ligne 18",
    "type": "gpe",
    "mode": "metro",
    "terminus": [
      "Aéroport d'Orly",
      "Versailles Chantiers"
    ],
    "ouverture": "Prévue 2027",
    "stations": 10,
    "longueur": "35 km",
    "logo": "/assets/18-logo.png",
    "modeLogo": "/assets/logo-metro-noir.svg",
    "plan": "/assets/18-plan.png",
    "materiel": [
      {
        "nom": "MRV",
        "description": "<strong>Rame automatique rapide (Métro léger).</strong><br>Matériel spécifique alimenté par 3e rail, conçu pour de hautes vitesses (120 km/h) sur le plateau de Saclay."
      }
    ],
    "correspondances": [
      "14",
      "B",
      "C",
      "N",
      "U",
      "V",
      "T7",
      "T12"
    ],
    "color": "#00a092",
    "idfmLineId": "C02833"
  },
  {
    "id": "A",
    "nom": "Ligne A",
    "type": "rer",
    "mode": "rer",
    "terminus": [
      "Saint-Germain-en-Laye / Cergy / Poissy",
      "Boissy-Saint-Léger / Marne-la-Vallée–Chessy"
    ],
    "ouverture": "1969",
    "stations": 46,
    "longueur": "108 km",
    "logo": "/assets/Paris_transit_icons_-_RER_A.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_RER.svg",
    "plan": "/assets/A-plan.svg",
    "materiel": [
      {
        "nom": "MI 09",
        "description": "<strong>Rame à 2 niveaux (Z 1600) à 5 voitures.</strong><br>Déployées à partir de 2011 pour remplacer les MS 61 et MI 84, ces rames à grande capacité assurent l'essentiel du service sur le RER A."
      },
      {
        "nom": "MI 2N Altéo",
        "description": "<strong>Rame à 2 niveaux (Z 1500) à 3 portes par face.</strong><br>Premier matériel à deux niveaux du RER A (1997), conçu pour accélérer les échanges voyageurs dans le tronçon central."
      }
    ],
    "correspondances": [
      "1",
      "2",
      "6",
      "9",
      "14",
      "15",
      "16",
      "B",
      "D",
      "E",
      "J",
      "L",
      "R",
      "U",
      "T2",
      "T13"
    ],
    "color": "#eb2132",
    "idfmLineId": "C01742"
  },
  {
    "id": "B",
    "nom": "Ligne B",
    "type": "rer",
    "mode": "rer",
    "terminus": [
      "Aéroport CDG 2 / Mitry–Claye",
      "Robinson / Saint-Rémy-lès-Chevreuse"
    ],
    "ouverture": "1977",
    "stations": 47,
    "longueur": "80 km",
    "logo": "/assets/Paris_transit_icons_-_RER_B.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_RER.svg",
    "plan": "/assets/B-plan.svg",
    "materiel": [
      {
        "nom": "MI 79",
        "description": "<strong>Rame bicourant rénovée à 4 voitures (Z 8100).</strong><br>Matériel historique de l'interconnexion Nord-Sud RATP/SNCF du RER B, intégralement rénové et climatisé."
      },
      {
        "nom": "MI 84",
        "description": "<strong>Rame bicourant à 4 voitures (Z 8400).</strong><br>Évolution du MI 79 transférée depuis le RER A pour renforcer la fréquence sur l'axe Nord-Sud."
      }
    ],
    "correspondances": [
      "4",
      "5",
      "6",
      "15",
      "16",
      "17",
      "18",
      "A",
      "C",
      "D",
      "H",
      "K",
      "V",
      "T3a",
      "T4",
      "T10",
      "T11",
      "T12"
    ],
    "color": "#5091cb",
    "idfmLineId": "C01743"
  },
  {
    "id": "C",
    "nom": "Ligne C",
    "type": "rer",
    "mode": "rer",
    "terminus": [
      "Pontoise / Versailles-Château / St-Quentin",
      "Massy–Palaiseau / Dourdan / St-Martin-d'Étampes"
    ],
    "ouverture": "1979",
    "stations": 84,
    "longueur": "187 km",
    "logo": "/assets/Paris_transit_icons_-_RER_C.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_RER.svg",
    "plan": "/assets/C-plan.svg",
    "materiel": [
      {
        "nom": "Z 20900",
        "description": "<strong>Automotrice à 2 niveaux climatisée (4 voitures).</strong><br>Dernière génération de Z 2N engagée sur le RER C, offrant intercirculation et climatisation."
      },
      {
        "nom": "Z 20500",
        "description": "<strong>Automotrice bicourant à 2 niveaux (4 voitures).</strong><br>Matériel polyvalent assurant les missions transversales du RER C."
      },
      {
        "nom": "Z 8800",
        "description": "<strong>Automotrice bicourant à 2 niveaux (4 voitures).</strong><br>Déployée en 1985 pour l'ouverture de la branche Vallée de Montmorency (Pontoise)."
      },
      {
        "nom": "Z 5600",
        "description": "<strong>Automotrice monocourant à 2 niveaux (4 ou 6 voitures).</strong><br>Première génération de Z 2N circulant sur les branches sud et ouest du RER C."
      }
    ],
    "correspondances": [
      "1",
      "5",
      "8",
      "10",
      "13",
      "14",
      "15",
      "18",
      "B",
      "D",
      "E",
      "H",
      "J",
      "N",
      "U",
      "V",
      "T1",
      "T2",
      "T3a",
      "T3b",
      "T6",
      "T8",
      "T9",
      "T11",
      "T12",
      "T13"
    ],
    "color": "#ffcc30",
    "idfmLineId": "C01727"
  },
  {
    "id": "D",
    "nom": "Ligne D",
    "type": "rer",
    "mode": "rer",
    "terminus": [
      "Creil / Orry-la-Ville–Coye",
      "Melun / Corbeil-Essonnes / Malesherbes"
    ],
    "ouverture": "1987",
    "stations": 59,
    "longueur": "197 km",
    "logo": "/assets/Paris_transit_icons_-_RER_D.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_RER.svg",
    "plan": "/assets/D-plan.svg",
    "materiel": [
      {
        "nom": "Z 20500",
        "description": "<strong>Automotrice à 2 niveaux à 5 voitures.</strong><br>Matériel historique du RER D circulant en unité multiple (10 voitures) sur l'axe Nord-Sud."
      },
      {
        "nom": "RER NG",
        "description": "<strong>Rame boa nouvelle génération (Z 58500) à 7 voitures.</strong><br>Nouveau matériel à 1 et 2 niveaux progressivement déployé sur le RER D pour remplacer les Z 20500."
      },
      {
        "nom": "Regio 2N",
        "description": "<strong>Automotrice à 2 niveaux (Z 57000).</strong><br>Exploitée sur les branches sud entre Juvisy, Corbeil-Essonnes, Melun et Malesherbes."
      }
    ],
    "correspondances": [
      "1",
      "3",
      "3bis",
      "4",
      "5",
      "14",
      "15",
      "A",
      "B",
      "C",
      "H",
      "K",
      "R",
      "T1",
      "T5",
      "T8",
      "T11",
      "T12"
    ],
    "color": "#008b5b",
    "idfmLineId": "C01728"
  },
  {
    "id": "E",
    "nom": "Ligne E",
    "type": "rer",
    "mode": "rer",
    "terminus": [
      "Nanterre–La Folie",
      "Chelles–Gournay / Tournan"
    ],
    "ouverture": "1999",
    "stations": 25,
    "longueur": "60 km",
    "logo": "/assets/Paris_transit_icons_-_RER_E.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_RER.svg",
    "plan": "/assets/E-plan.svg",
    "materiel": [
      {
        "nom": "RER NG",
        "description": "<strong>Rame boa nouvelle génération (Z 58000) à 6 voitures.</strong><br>Déployée depuis 2023 pour accompagner le prolongement du RER E à l'Ouest vers La Défense et Nanterre–La Folie."
      },
      {
        "nom": "MI 2N Eole",
        "description": "<strong>Rame à 2 niveaux à 5 voitures (Z 22500).</strong><br>Matériel d'origine de la ligne Eole (1999) doté de 3 portes par face par voiture."
      },
      {
        "nom": "Z 50000 Francilien",
        "description": "<strong>Rame boa climatisée à 1 niveau.</strong><br>Engagée en renfort sur les missions Paris-Est / Chelles–Gournay et Tournan."
      }
    ],
    "correspondances": [
      "1",
      "11",
      "15",
      "16",
      "A",
      "C",
      "L",
      "P",
      "U",
      "T1",
      "T2",
      "T3b",
      "T4"
    ],
    "color": "#b94e9a",
    "idfmLineId": "C01729"
  },
  {
    "id": "H",
    "nom": "Ligne H",
    "type": "transilien",
    "mode": "transilien",
    "terminus": [
      "Gare du Nord",
      "Pontoise / Persan–Beaumont / Luzarches / Creil"
    ],
    "ouverture": "2001",
    "stations": 51,
    "longueur": "138 km",
    "logo": "/assets/Paris_transit_icons_-_Train_H.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Train.svg",
    "plan": "/assets/H-plan.svg",
    "materiel": [
      {
        "nom": "Z 50000 Francilien",
        "description": "<strong>Rame boa climatisée à 8 voitures.</strong><br>La ligne H a été la toute première ligne équipée du Francilien dès fin 2009, aujourd'hui exploitée à 100 % avec ce matériel."
      }
    ],
    "correspondances": [
      "4",
      "5",
      "B",
      "C",
      "D",
      "J",
      "K",
      "T1",
      "T8",
      "T11"
    ],
    "color": "#84653d",
    "idfmLineId": "C01737"
  },
  {
    "id": "J",
    "nom": "Ligne J",
    "type": "transilien",
    "mode": "transilien",
    "terminus": [
      "Gare Saint-Lazare",
      "Ermont–Eaubonne / Gisors / Mantes-la-Jolie / Vernon"
    ],
    "ouverture": "2004",
    "stations": 52,
    "longueur": "256 km",
    "logo": "/assets/Paris_transit_icons_-_Train_J.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Train.svg",
    "plan": "/assets/J-plan.svg",
    "materiel": [
      {
        "nom": "Z 50000 Francilien",
        "description": "<strong>Rame boa climatisée à 7 voitures (version courte Saint-Lazare).</strong><br>Adaptées à la longueur des quais de Paris Saint-Lazare, ces rames assurent l'ensemble des missions de la ligne J."
      }
    ],
    "correspondances": [
      "3",
      "12",
      "13",
      "14",
      "15",
      "A",
      "C",
      "H",
      "L",
      "N"
    ],
    "color": "#cec73d",
    "idfmLineId": "C01739"
  },
  {
    "id": "K",
    "nom": "Ligne K",
    "type": "transilien",
    "mode": "transilien",
    "terminus": [
      "Gare du Nord",
      "Crépy-en-Valois"
    ],
    "ouverture": "2004",
    "stations": 10,
    "longueur": "61 km",
    "logo": "/assets/Paris_transit_icons_-_Train_K.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Train.svg",
    "plan": "/assets/K-plan.svg",
    "materiel": [
      {
        "nom": "Z 50000 Francilien",
        "description": "<strong>Rame boa climatisée à 8 voitures.</strong><br>Remplaçant les anciennes rames inox Z 6100 et RIB, le Francilien assure l'intégralité de la desserte Paris-Nord ↔ Crépy-en-Valois."
      }
    ],
    "correspondances": [
      "4",
      "5",
      "B",
      "D",
      "H",
      "T4"
    ],
    "color": "#9b9842",
    "idfmLineId": "C01738"
  },
  {
    "id": "L",
    "nom": "Ligne L",
    "type": "transilien",
    "mode": "transilien",
    "terminus": [
      "Gare Saint-Lazare",
      "Versailles-Rive-Droite / St-Nom-la-Bretèche / Cergy-le-Haut"
    ],
    "ouverture": "2004",
    "stations": 40,
    "longueur": "86 km",
    "logo": "/assets/Paris_transit_icons_-_Train_L.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Train.svg",
    "plan": "/assets/L-plan.svg",
    "materiel": [
      {
        "nom": "Z 50000 Francilien",
        "description": "<strong>Rame boa climatisée à 7 voitures.</strong><br>Équipe à 100 % la ligne L après avoir remplacé les historiques Z 6400 sur les axes Saint-Cloud et Cergy."
      }
    ],
    "correspondances": [
      "1",
      "3",
      "12",
      "13",
      "14",
      "15",
      "A",
      "E",
      "J",
      "U",
      "T2",
      "T6",
      "T13"
    ],
    "color": "#c4a4cc",
    "idfmLineId": "C01740"
  },
  {
    "id": "N",
    "nom": "Ligne N",
    "type": "transilien",
    "mode": "transilien",
    "terminus": [
      "Gare Montparnasse",
      "Rambouillet / Dreux / Mantes-la-Jolie"
    ],
    "ouverture": "2004",
    "stations": 35,
    "longueur": "117 km",
    "logo": "/assets/Paris_transit_icons_-_Train_N.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Train.svg",
    "plan": "/assets/N-plan.svg",
    "materiel": [
      {
        "nom": "Regio 2N",
        "description": "<strong>Automotrice à 2 niveaux climatisée (Z 57000).</strong><br>Depuis 2021, le Regio 2N assure l'intégralité des missions de la ligne N au départ de Paris-Montparnasse, en remplacement des VB 2N."
      }
    ],
    "correspondances": [
      "4",
      "6",
      "12",
      "13",
      "15",
      "18",
      "C",
      "J",
      "U",
      "V",
      "T6",
      "T13"
    ],
    "color": "#00b297",
    "idfmLineId": "C01736"
  },
  {
    "id": "P",
    "nom": "Ligne P",
    "type": "transilien",
    "mode": "transilien",
    "terminus": [
      "Gare de l'Est",
      "Meaux / Château-Thierry / La Ferté-Milon / Provins / Coulommiers"
    ],
    "ouverture": "2004",
    "stations": 36,
    "longueur": "242 km",
    "logo": "/assets/Paris_transit_icons_-_Train_P.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Train.svg",
    "plan": "/assets/P-plan.svg",
    "materiel": [
      {
        "nom": "Z 50000 Francilien",
        "description": "<strong>Rame boa climatisée à 8 voitures.</strong><br>Assure les missions électrifiées vers Meaux, Coulommiers et Château-Thierry."
      },
      {
        "nom": "AGC BiBi",
        "description": "<strong>Autorail bimode-bicourant (B 82500).</strong><br>Exploité sur l'axe non électrifié entre Gretz-Armainvilliers et Provins ainsi que vers La Ferté-Milon."
      },
      {
        "nom": "Z 20500",
        "description": "<strong>Automotrice à 2 niveaux.</strong><br>Utilisée en renfort aux heures de pointe sur l'axe Paris-Est ↔ Château-Thierry / Meaux."
      }
    ],
    "correspondances": [
      "4",
      "5",
      "7",
      "16",
      "E",
      "T14"
    ],
    "color": "#f58f53",
    "idfmLineId": "C01730"
  },
  {
    "id": "R",
    "nom": "Ligne R",
    "type": "transilien",
    "mode": "transilien",
    "terminus": [
      "Gare de Lyon",
      "Montereau / Montargis"
    ],
    "ouverture": "2004",
    "stations": 24,
    "longueur": "164 km",
    "logo": "/assets/Paris_transit_icons_-_Train_R.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Train.svg",
    "plan": "/assets/R-plan.svg",
    "materiel": [
      {
        "nom": "Regio 2N",
        "description": "<strong>Automotrice à 2 niveaux grande capacité (Z 57000).</strong><br>La ligne R a inauguré le déploiement du Regio 2N en Île-de-France fin 2017, offrant un confort longue distance vers la Seine-et-Marne et le Loiret."
      }
    ],
    "correspondances": [
      "1",
      "6",
      "14",
      "A",
      "D"
    ],
    "color": "#f49fb3",
    "idfmLineId": "C01731"
  },
  {
    "id": "U",
    "nom": "Ligne U",
    "type": "transilien",
    "mode": "transilien",
    "terminus": [
      "La Défense",
      "La Verrière"
    ],
    "ouverture": "1995",
    "stations": 11,
    "longueur": "31 km",
    "logo": "/assets/Paris_transit_icons_-_Train_U.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Train.svg",
    "plan": "/assets/U-plan.svg",
    "materiel": [
      {
        "nom": "Z 8800",
        "description": "<strong>Automotrice bicourant à 2 niveaux (4 voitures).</strong><br>Assure la tangente ouest entre le quartier d'affaires de La Défense et Saint-Quentin-en-Yvelines / La Verrière."
      }
    ],
    "correspondances": [
      "1",
      "15",
      "18",
      "A",
      "C",
      "E",
      "L",
      "N",
      "V",
      "T2",
      "T13"
    ],
    "color": "#b6134c",
    "idfmLineId": "C01741"
  },
  {
    "id": "V",
    "nom": "Ligne V",
    "type": "transilien",
    "mode": "transilien",
    "terminus": [
      "Massy–Palaiseau",
      "Versailles Chantiers"
    ],
    "ouverture": "2023",
    "stations": 7,
    "longueur": "15 km",
    "logo": "/assets/Paris_transit_icons_-_Train_V.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Train.svg",
    "plan": "/assets/V-plan.svg",
    "materiel": [
      {
        "nom": "Z 20900",
        "description": "<strong>Automotrice à 2 niveaux climatisée.</strong><br>Partagée avec le parc du RER C pour assurer la navette entre Massy–Palaiseau et Versailles Chantiers via la vallée de la Bièvre."
      },
      {
        "nom": "Z 20500",
        "description": "<strong>Automotrice à 2 niveaux.</strong><br>Circule également sur la ligne V en complément des Z 20900, Z 8800 et Z 5600."
      },
      {
        "nom": "Z 8800",
        "description": "<strong>Automotrice bicourant à 2 niveaux.</strong><br>Issue du parc commun avec le RER C."
      },
      {
        "nom": "Z 5600",
        "description": "<strong>Automotrice monocourant à 2 niveaux.</strong><br>Issue du parc commun avec le RER C."
      }
    ],
    "correspondances": [
      "18",
      "B",
      "C",
      "N",
      "U",
      "T12"
    ],
    "color": "#9f9825",
    "idfmLineId": "C02711"
  },
  {
    "id": "T1",
    "nom": "Ligne T1",
    "type": "tram",
    "mode": "tram",
    "terminus": [
      "Asnières–Quatre Routes",
      "Gare de Noisy-le-Sec"
    ],
    "ouverture": "1992",
    "stations": 37,
    "longueur": "17,9 km",
    "logo": "/assets/Paris_transit_icons_-_Tram_T1.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg",
    "plan": "/assets/T1-plan.svg",
    "materiel": [
      {
        "nom": "Citadis 305",
        "description": "<strong>Rame neuve climatisée (TW20) de 33 mètres.</strong><br>Déployée à partir de 2024 pour remplacer progressivement les rames historiques TFS et accompagner le prolongement vers Val de Fontenay."
      },
      {
        "nom": "TFS",
        "description": "<strong>Tramway Français Standard (Alsthom).</strong><br>Matériel pionnier mis en service en 1992 lors de la réintroduction du tramway en Île-de-France entre Saint-Denis et Bobigny."
      }
    ],
    "correspondances": [
      "5",
      "7",
      "13",
      "15",
      "16",
      "17",
      "C",
      "D",
      "E",
      "H",
      "T5",
      "T8"
    ],
    "color": "#0055c8",
    "idfmLineId": "C01389"
  },
  {
    "id": "T2",
    "nom": "Ligne T2",
    "type": "tram",
    "mode": "tram",
    "terminus": [
      "Pont de Bezons",
      "Porte de Versailles"
    ],
    "ouverture": "1997",
    "stations": 24,
    "longueur": "17,9 km",
    "logo": "/assets/Paris_transit_icons_-_Tram_T2.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg",
    "plan": "/assets/T2-plan.svg",
    "materiel": [
      {
        "nom": "Citadis 302",
        "description": "<strong>Rames couplées en unité multiple (65 mètres).</strong><br>Exploitées en doubles rames pour répondre à la forte fréquentation du pôle de La Défense et du Val de Seine."
      }
    ],
    "correspondances": [
      "1",
      "12",
      "15",
      "A",
      "C",
      "E",
      "L",
      "U",
      "T3a"
    ],
    "color": "#a0006e",
    "idfmLineId": "C01390"
  },
  {
    "id": "T3a",
    "nom": "Ligne T3a",
    "type": "tram",
    "mode": "tram",
    "terminus": [
      "Pont du Garigliano",
      "Porte de Vincennes"
    ],
    "ouverture": "2006",
    "stations": 25,
    "longueur": "12,4 km",
    "logo": "/assets/Paris_transit_icons_-_Tram_T3a.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg",
    "plan": "/assets/T3a-plan.svg",
    "materiel": [
      {
        "nom": "Citadis 402",
        "description": "<strong>Rame grand gabarit de 44 mètres (7 modules).</strong><br>Conçue pour le tramway des Maréchaux Sud afin d'offrir une capacité maximale de plus de 300 voyageurs par rame."
      }
    ],
    "correspondances": [
      "1",
      "4",
      "7",
      "8",
      "12",
      "13",
      "B",
      "C",
      "T2",
      "T3b",
      "T9"
    ],
    "color": "#ff5a00",
    "idfmLineId": "C01391"
  },
  {
    "id": "T3b",
    "nom": "Ligne T3b",
    "type": "tram",
    "mode": "tram",
    "terminus": [
      "Porte de Vincennes",
      "Porte Dauphine"
    ],
    "ouverture": "2012",
    "stations": 33,
    "longueur": "17,5 km",
    "logo": "/assets/Paris_transit_icons_-_Tram_T3b.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg",
    "plan": "/assets/T3b-plan.svg",
    "materiel": [
      {
        "nom": "Citadis 402",
        "description": "<strong>Rame grand gabarit de 44 mètres (7 modules).</strong><br>Identique à celui du T3a, avec de nouvelles rames livrées en livrée IDFM pour le prolongement jusqu'à la Porte Dauphine en 2024."
      }
    ],
    "correspondances": [
      "1",
      "3",
      "3bis",
      "4",
      "9",
      "11",
      "12",
      "13",
      "14",
      "C",
      "E",
      "T3a"
    ],
    "color": "#00643c",
    "idfmLineId": "C01679"
  },
  {
    "id": "T4",
    "nom": "Ligne T4",
    "type": "tram",
    "mode": "tram",
    "terminus": [
      "Bondy",
      "Aulnay-sous-Bois / Hôpital de Montfermeil"
    ],
    "ouverture": "2006",
    "stations": 20,
    "longueur": "13,3 km",
    "logo": "/assets/Paris_transit_icons_-_Tram_T4.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg",
    "plan": "/assets/T4-plan.svg",
    "materiel": [
      {
        "nom": "Citadis Dualis",
        "description": "<strong>Tram-train bicourant (U 53700).</strong><br>Déployé en 2019 pour assurer la nouvelle branche urbaine vers Clichy-sous-Bois et l'Hôpital de Montfermeil."
      },
      {
        "nom": "Avanto",
        "description": "<strong>Tram-train Siemens S70 (U 25500).</strong><br>Premier tram-train mis en service en France en 2006 sur l'axe historique Bondy ↔ Aulnay-sous-Bois."
      }
    ],
    "correspondances": [
      "15",
      "16",
      "B",
      "E",
      "K"
    ],
    "color": "#dc9600",
    "idfmLineId": "C01843"
  },
  {
    "id": "T5",
    "nom": "Ligne T5",
    "type": "tram",
    "mode": "tram",
    "terminus": [
      "Marché de Saint-Denis",
      "Garges–Sarcelles"
    ],
    "ouverture": "2013",
    "stations": 16,
    "longueur": "6,6 km",
    "logo": "/assets/Paris_transit_icons_-_Tram_T5.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg",
    "plan": "/assets/T5-plan.svg",
    "materiel": [
      {
        "nom": "Translohr STE3",
        "description": "<strong>Tramway sur pneumatiques à 3 caisses (25 mètres).</strong><br>Guidé par un rail central unique, il relie Saint-Denis, Pierrefitte, Sarcelles et la gare de Garges–Sarcelles."
      }
    ],
    "correspondances": [
      "D",
      "T1"
    ],
    "color": "#640082",
    "idfmLineId": "C01684"
  },
  {
    "id": "T6",
    "nom": "Ligne T6",
    "type": "tram",
    "mode": "tram",
    "terminus": [
      "Châtillon–Montrouge",
      "Viroflay-Rive-Droite"
    ],
    "ouverture": "2014",
    "stations": 21,
    "longueur": "14 km",
    "logo": "/assets/Paris_transit_icons_-_Tram_T6.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg",
    "plan": "/assets/T6-plan.svg",
    "materiel": [
      {
        "nom": "Translohr STE6",
        "description": "<strong>Tramway sur pneumatiques à 6 caisses (46 mètres).</strong><br>Le roulement sur pneus permet de gravir les fortes rampes de Clamart, Vélizy et Viroflay, incluant une section en tunnel."
      }
    ],
    "correspondances": [
      "13",
      "15",
      "C",
      "L",
      "N",
      "T10"
    ],
    "color": "#ff0000",
    "idfmLineId": "C01794"
  },
  {
    "id": "T7",
    "nom": "Ligne T7",
    "type": "tram",
    "mode": "tram",
    "terminus": [
      "Villejuif–Louis Aragon",
      "Porte de l'Essonne"
    ],
    "ouverture": "2013",
    "stations": 18,
    "longueur": "11,2 km",
    "logo": "/assets/Paris_transit_icons_-_Tram_T7.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg",
    "plan": "/assets/T7-plan.svg",
    "materiel": [
      {
        "nom": "Citadis 302",
        "description": "<strong>Rame à plancher bas intégral de 32 mètres.</strong><br>Relie le terminus de la ligne 7 du métro à Rungis, l'aéroport d'Orly et Athis-Mons."
      }
    ],
    "correspondances": [
      "7",
      "14",
      "15",
      "18"
    ],
    "color": "#6e491e",
    "idfmLineId": "C01774"
  },
  {
    "id": "T8",
    "nom": "Ligne T8",
    "type": "tram",
    "mode": "tram",
    "terminus": [
      "Saint-Denis–Porte de Paris",
      "Épinay-Orgemont / Villetaneuse-Université"
    ],
    "ouverture": "2014",
    "stations": 17,
    "longueur": "8,5 km",
    "logo": "/assets/Paris_transit_icons_-_Tram_T8.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg",
    "plan": "/assets/T8-plan.svg",
    "materiel": [
      {
        "nom": "Citadis 302",
        "description": "<strong>Rame à plancher bas intégral de 32 mètres.</strong><br>Identique au parc du T7, il dessert la fourche nord entre Saint-Denis, Épinay-sur-Seine et Villetaneuse."
      }
    ],
    "correspondances": [
      "13",
      "C",
      "D",
      "H",
      "T1",
      "T11"
    ],
    "color": "#6e6e00",
    "idfmLineId": "C01795"
  },
  {
    "id": "T9",
    "nom": "Ligne T9",
    "type": "tram",
    "mode": "tram",
    "terminus": [
      "Porte de Choisy",
      "Orly–Gaston Viens"
    ],
    "ouverture": "2021",
    "stations": 19,
    "longueur": "10,3 km",
    "logo": "/assets/Paris_transit_icons_-_Tram_T9.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg",
    "plan": "/assets/T9-plan.svg",
    "materiel": [
      {
        "nom": "Citadis 405",
        "description": "<strong>Rame « Lumière » de 45 mètres (7 modules).</strong><br>Matériel de grande capacité doté d'une signature lumineuse sur toute la longueur et de doubles portes aux extrémités."
      }
    ],
    "correspondances": [
      "7",
      "15",
      "C",
      "T3a"
    ],
    "color": "#3c91dc",
    "idfmLineId": "C02317"
  },
  {
    "id": "T10",
    "nom": "Ligne T10",
    "type": "tram",
    "mode": "tram",
    "terminus": [
      "La Croix de Berny",
      "Jardin Parisien"
    ],
    "ouverture": "2023",
    "stations": 13,
    "longueur": "6,8 km",
    "logo": "/assets/Paris_transit_icons_-_Tram_T10.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg",
    "plan": "/assets/T10-plan.svg",
    "materiel": [
      {
        "nom": "Citadis 405",
        "description": "<strong>Rame « Lumière » de 45 mètres (7 modules).</strong><br>Partage la même architecture Citadis X05 que le T9 pour relier Antony, Châtenay-Malabry, Le Plessis-Robinson et Clamart."
      }
    ],
    "correspondances": [
      "B",
      "T6"
    ],
    "color": "#6e6e00",
    "idfmLineId": "C02528"
  },
  {
    "id": "T11",
    "nom": "Ligne T11",
    "type": "tram",
    "mode": "tram",
    "terminus": [
      "Épinay-sur-Seine",
      "Le Bourget"
    ],
    "ouverture": "2017",
    "stations": 7,
    "longueur": "11 km",
    "logo": "/assets/Paris_transit_icons_-_Tram_T11.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg",
    "plan": "/assets/T11-plan.svg",
    "materiel": [
      {
        "nom": "Citadis Dualis",
        "description": "<strong>Tram-train rapide (U 53600) apte à 100 km/h.</strong><br>Circule en unités multiples sur la tangentielle nord entre Épinay-sur-Seine, Villetaneuse, Pierrefitte, Stains, Dugny et Le Bourget."
      }
    ],
    "correspondances": [
      "B",
      "C",
      "D",
      "H",
      "T8"
    ],
    "color": "#ff5a00",
    "idfmLineId": "C01999"
  },
  {
    "id": "T12",
    "nom": "Ligne T12",
    "type": "tram",
    "mode": "tram",
    "terminus": [
      "Massy–Palaiseau",
      "Évry-Courcouronnes"
    ],
    "ouverture": "2023",
    "stations": 16,
    "longueur": "20,4 km",
    "logo": "/assets/Paris_transit_icons_-_Tram_T12.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg",
    "plan": "/assets/T12-plan.svg",
    "materiel": [
      {
        "nom": "Citadis Dualis",
        "description": "<strong>Tram-train bicourant (U 53800).</strong><br>Alterne une section ferroviaire sur la Grande Ceinture entre Massy et Épinay-sur-Orge et une section urbaine jusqu'à Évry-Courcouronnes."
      }
    ],
    "correspondances": [
      "18",
      "B",
      "C",
      "D",
      "V"
    ],
    "color": "#a50034",
    "idfmLineId": "C02529"
  },
  {
    "id": "T13",
    "nom": "Ligne T13",
    "type": "tram",
    "mode": "tram",
    "terminus": [
      "Saint-Germain-en-Laye",
      "Saint-Cyr"
    ],
    "ouverture": "2022",
    "stations": 12,
    "longueur": "18,8 km",
    "logo": "/assets/Paris_transit_icons_-_Tram_T13.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg",
    "plan": "/assets/T13-plan.svg",
    "materiel": [
      {
        "nom": "Citadis Dualis",
        "description": "<strong>Tram-train bicourant (U 53800).</strong><br>Relie Saint-Germain-en-Laye à Saint-Cyr-l'École en empruntant la Grande Ceinture Ouest et un tracé urbain en lisière de forêt."
      }
    ],
    "correspondances": [
      "A",
      "C",
      "L",
      "N",
      "U"
    ],
    "color": "#8d653d",
    "idfmLineId": "C02344"
  },
  {
    "id": "T14",
    "nom": "Ligne T14",
    "type": "tram",
    "mode": "tram",
    "terminus": [
      "Esbly",
      "Crécy-la-Chapelle"
    ],
    "ouverture": "2025",
    "stations": 5,
    "longueur": "9,9 km",
    "logo": "/assets/Paris_transit_icons_-_Tram_T14.svg",
    "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg",
    "plan": "/assets/T14-plan.svg",
    "materiel": [
      {
        "nom": "Citadis Dualis",
        "description": "<strong>Tram-train (U 53600).</strong><br>Assure la navette ferroviaire dans la vallée du Grand Morin entre Esbly et Crécy-la-Chapelle, érigée en ligne T14 en mars 2025."
      }
    ],
    "correspondances": [
      "P"
    ],
    "color": "#00a092",
    "idfmLineId": "C02732"
  }
];

export const ligneColors = {
  "1": "#ffbe00",
  "2": "#0055c8",
  "3": "#6e6e00",
  "3bis": "#82c8e6",
  "4": "#a0006e",
  "5": "#ff5a00",
  "6": "#82dc73",
  "7": "#ff82b4",
  "7bis": "#82dc73",
  "8": "#d282be",
  "9": "#d2d200",
  "10": "#dc9600",
  "11": "#6e491e",
  "12": "#00643c",
  "13": "#82c8e6",
  "14": "#640082",
  "15": "#aaaaaa",
  "16": "#F1B19B",
  "17": "#944D9B",
  "18": "#00a092",
  "A": "#eb2132",
  "B": "#5091cb",
  "C": "#ffcc30",
  "D": "#008b5b",
  "E": "#b94e9a",
  "H": "#84653d",
  "J": "#cec73d",
  "K": "#9b9842",
  "L": "#c4a4cc",
  "N": "#00b297",
  "P": "#f58f53",
  "R": "#f49fb3",
  "U": "#b6134c",
  "V": "#9f9825",
  "T1": "#0055c8",
  "T2": "#a0006e",
  "T3a": "#ff5a00",
  "T3b": "#00643c",
  "T4": "#dc9600",
  "T5": "#640082",
  "T6": "#ff0000",
  "T7": "#6e491e",
  "T8": "#6e6e00",
  "T9": "#3c91dc",
  "T10": "#6e6e00",
  "T11": "#ff5a00",
  "T12": "#a50034",
  "T13": "#8d653d",
  "T14": "#00a092"
};

export const stationsData = [
  {
    "nom": "Abbesses",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "42155"
    ],
    "stopPointIds": [
      "22059",
      "463116"
    ]
  },
  {
    "nom": "Ablon",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Ablon-sur-Seine.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "46387"
    ],
    "stopPointIds": [
      "41311",
      "471630",
      "472782"
    ]
  },
  {
    "nom": "Achères Grand Cormier",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Saint-Germain-en-Laye.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "47915"
    ],
    "stopPointIds": [
      "411358",
      "472019",
      "472135",
      "472259",
      "472507"
    ]
  },
  {
    "nom": "Achères Ville",
    "lignes": [
      "A",
      "L"
    ],
    "resume": "Station située à Achères.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "46647"
    ],
    "stopPointIds": [
      "41528",
      "471010",
      "473017"
    ]
  },
  {
    "nom": "Adrienne Bolland",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "58502"
    ],
    "stopPointIds": [
      "24421",
      "24422"
    ]
  },
  {
    "nom": "Aéroport CDG 1 (Terminal 3)",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Tremblay-en-France.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "462398"
    ],
    "stopPointIds": [
      "411398",
      "471913",
      "472226",
      "472853",
      "472997"
    ]
  },
  {
    "nom": "Aéroport CDG 2 TGV",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Le Mesnil-Amelot.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "473364"
    ],
    "stopPointIds": [
      "411295",
      "470611",
      "470932",
      "471441",
      "471892",
      "472284",
      "472501"
    ]
  },
  {
    "nom": "Aéroport Charles-de-Gaulle 2 TGV",
    "lignes": [
      "17"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MR3V"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Aéroport d'Orly",
    "lignes": [
      "14",
      "18",
      "T7"
    ],
    "resume": "Station située à Paray-Vieille-Poste.",
    "materiel": [
      "MP 14 CA",
      "MRV",
      "Citadis 302"
    ],
    "stopAreaIds": [
      "462747",
      "490909"
    ],
    "stopPointIds": [
      "29894",
      "35927",
      "490908",
      "490917"
    ]
  },
  {
    "nom": "Aiguillage Epinay",
    "lignes": [
      "T8"
    ],
    "resume": "Station située à Argenteuil.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "492818"
    ],
    "stopPointIds": [
      "492817"
    ]
  },
  {
    "nom": "Aimé Césaire",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Aubervilliers.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "483901"
    ],
    "stopPointIds": [
      "483900",
      "483903"
    ]
  },
  {
    "nom": "Alcide d'Orbigny",
    "lignes": [
      "T5"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "46345"
    ],
    "stopPointIds": [
      "28856",
      "28859"
    ]
  },
  {
    "nom": "Alexandra David-Néel",
    "lignes": [
      "T3a"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "45215"
    ],
    "stopPointIds": [
      "24107",
      "24139"
    ]
  },
  {
    "nom": "Alexandre Dumas",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "45196"
    ],
    "stopPointIds": [
      "22122",
      "463117"
    ]
  },
  {
    "nom": "Alésia",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris 14e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "42175"
    ],
    "stopPointIds": [
      "22154",
      "463118"
    ]
  },
  {
    "nom": "Allée de la Tour-Rendez-vous",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Villemomble.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "462929"
    ],
    "stopPointIds": [
      "471757",
      "472172"
    ]
  },
  {
    "nom": "Allée Royale",
    "lignes": [
      "T13"
    ],
    "resume": "Station située à Saint-Cyr-l'École.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "480935"
    ],
    "stopPointIds": [
      "480934",
      "481074"
    ]
  },
  {
    "nom": "Alma - Marceau",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 8e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42182"
    ],
    "stopPointIds": [
      "21935",
      "463052"
    ]
  },
  {
    "nom": "Amédée Gordini",
    "lignes": [
      "T12"
    ],
    "resume": "Station située à Viry-Châtillon.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "486974"
    ],
    "stopPointIds": [
      "486973",
      "486975"
    ]
  },
  {
    "nom": "Anatole France",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Levallois-Perret.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "42195"
    ],
    "stopPointIds": [
      "22036",
      "463119"
    ]
  },
  {
    "nom": "Andrésy",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Andrésy.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47916"
    ],
    "stopPointIds": [
      "41149",
      "471059",
      "472150"
    ]
  },
  {
    "nom": "Angerville",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Angerville.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "47917"
    ],
    "stopPointIds": [
      "41293",
      "472379",
      "472965"
    ]
  },
  {
    "nom": "Angélique Compoint - Porte de Montmartre",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "45531"
    ],
    "stopPointIds": [
      "462437",
      "462443"
    ]
  },
  {
    "nom": "Anna de Noailles",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "490880"
    ],
    "stopPointIds": [
      "490879",
      "490881"
    ]
  },
  {
    "nom": "Anny Flore",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "490885"
    ],
    "stopPointIds": [
      "490884",
      "490886"
    ]
  },
  {
    "nom": "Antony",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Antony.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43066"
    ],
    "stopPointIds": [
      "412829",
      "473980",
      "473996"
    ]
  },
  {
    "nom": "Antonypole",
    "lignes": [
      "18"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MRV"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Anvers",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42210"
    ],
    "stopPointIds": [
      "22123",
      "463120"
    ]
  },
  {
    "nom": "Arboretum",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Montfermeil.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "478647"
    ],
    "stopPointIds": [
      "478646",
      "478651"
    ]
  },
  {
    "nom": "Arcueil - Cachan",
    "lignes": [
      "15",
      "B"
    ],
    "resume": "Station située à Cachan.",
    "materiel": [
      "MR6V",
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43067"
    ],
    "stopPointIds": [
      "412836",
      "473979",
      "473983"
    ]
  },
  {
    "nom": "Argenteuil",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Argenteuil.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47875"
    ],
    "stopPointIds": [
      "41166",
      "471033",
      "471242",
      "472690",
      "472730",
      "472826",
      "472859"
    ]
  },
  {
    "nom": "Argentine",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "MP 05"
    ],
    "stopAreaIds": [
      "42213"
    ],
    "stopPointIds": [
      "22088",
      "463121"
    ]
  },
  {
    "nom": "Arpajon",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Arpajon.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43068"
    ],
    "stopPointIds": [
      "41318",
      "470664",
      "470919"
    ]
  },
  {
    "nom": "Arts et Métiers",
    "lignes": [
      "3",
      "11"
    ],
    "resume": "Station située à Paris 3e.",
    "materiel": [
      "MF 67",
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "42230"
    ],
    "stopPointIds": [
      "21994",
      "21997",
      "463108",
      "463122"
    ]
  },
  {
    "nom": "Asnières - Gennevilliers - Les Courtilles",
    "lignes": [
      "13",
      "T1"
    ],
    "resume": "Station située à Gennevilliers.",
    "materiel": [
      "MF 77",
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "42231",
      "462328"
    ],
    "stopPointIds": [
      "22233",
      "23277",
      "23278",
      "463109"
    ]
  },
  {
    "nom": "Asnières - Quatre Routes",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Asnières-sur-Seine.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "42142"
    ],
    "stopPointIds": [
      "477913",
      "477914"
    ]
  },
  {
    "nom": "Asnières-sur-Seine",
    "lignes": [
      "J",
      "L"
    ],
    "resume": "Station située à Asnières-sur-Seine.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43069"
    ],
    "stopPointIds": [
      "41138",
      "470673",
      "471132",
      "471224",
      "471962",
      "472289",
      "472391",
      "472448",
      "472565",
      "472878"
    ]
  },
  {
    "nom": "Assemblée Nationale",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 7e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "45704"
    ],
    "stopPointIds": [
      "22060",
      "463123"
    ]
  },
  {
    "nom": "Athis-Mons",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Athis-Mons.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "46395"
    ],
    "stopPointIds": [
      "41310",
      "470944",
      "472115"
    ]
  },
  {
    "nom": "Auber",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "43068"
    ],
    "stopPointIds": [
      "41318",
      "470664",
      "470919"
    ]
  },
  {
    "nom": "Aubergenville Élisabethville",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Aubergenville.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43070"
    ],
    "stopPointIds": [
      "41201",
      "471523",
      "472002",
      "472707"
    ]
  },
  {
    "nom": "Aubervilliers - Pantin - Quatre Chemins",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Aubervilliers.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "46492"
    ],
    "stopPointIds": [
      "22394",
      "463031"
    ]
  },
  {
    "nom": "Auguste Delaune",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Bobigny.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "42245"
    ],
    "stopPointIds": [
      "22257",
      "22258"
    ]
  },
  {
    "nom": "Auguste Perret (Cimetière Parisien)",
    "lignes": [
      "T7"
    ],
    "resume": "Station située à Chevilly-Larue.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "58784"
    ],
    "stopPointIds": [
      "29897",
      "35931"
    ]
  },
  {
    "nom": "Aulnay-sous-Bois",
    "lignes": [
      "B",
      "K",
      "T4"
    ],
    "resume": "Station située à Aulnay-sous-Bois.",
    "materiel": [
      "MI 79",
      "MI 84",
      "Z 50000 Francilien",
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "43071",
      "473095"
    ],
    "stopPointIds": [
      "411410",
      "470950",
      "471113",
      "471766",
      "472147",
      "472363",
      "472589",
      "472815"
    ]
  },
  {
    "nom": "Aulnay–Val Francilia",
    "lignes": [
      "16"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MR3V"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Auneau",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Roinville.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "59049"
    ],
    "stopPointIds": [
      "41325",
      "471357",
      "472037"
    ]
  },
  {
    "nom": "Auvers-sur-Oise",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Auvers-sur-Oise.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47918"
    ],
    "stopPointIds": [
      "41112",
      "470610",
      "472941"
    ]
  },
  {
    "nom": "Avenue de France",
    "lignes": [
      "T3a"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "45305"
    ],
    "stopPointIds": [
      "24123",
      "24137"
    ]
  },
  {
    "nom": "Avenue du Président Kennedy",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "45419"
    ],
    "stopPointIds": [
      "41295",
      "471131",
      "471932"
    ]
  },
  {
    "nom": "Avenue Émile Zola",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "42265"
    ],
    "stopPointIds": [
      "21987",
      "463124"
    ]
  },
  {
    "nom": "Avenue Foch",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "45437"
    ],
    "stopPointIds": [
      "41132",
      "470620",
      "471843"
    ]
  },
  {
    "nom": "Avenue Henri Martin",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "45447"
    ],
    "stopPointIds": [
      "41133",
      "471187",
      "471355",
      "471484"
    ]
  },
  {
    "nom": "Avron",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42271"
    ],
    "stopPointIds": [
      "22124",
      "463125"
    ]
  },
  {
    "nom": "Bagneaux-sur-Loing",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Bagneaux-sur-Loing.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47119"
    ],
    "stopPointIds": [
      "41392",
      "470977",
      "471282"
    ]
  },
  {
    "nom": "Bagneux",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Cachan.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "44493"
    ],
    "stopPointIds": [
      "412843",
      "473981",
      "473986"
    ]
  },
  {
    "nom": "Bagneux - Lucie Aubrac",
    "lignes": [
      "4",
      "15"
    ],
    "resume": "Station située à Bagneux.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MR6V"
    ],
    "stopAreaIds": [
      "483280"
    ],
    "stopPointIds": [
      "483279",
      "483314",
      "483423"
    ]
  },
  {
    "nom": "Bailly",
    "lignes": [
      "T13"
    ],
    "resume": "Station située à Bailly.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "480933"
    ],
    "stopPointIds": [
      "480932",
      "481073"
    ]
  },
  {
    "nom": "Balard",
    "lignes": [
      "8",
      "T3a"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MF 77",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "45357",
      "463354"
    ],
    "stopPointIds": [
      "22186",
      "24103",
      "24108",
      "463051"
    ]
  },
  {
    "nom": "Ballancourt",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Ballancourt-sur-Essonne.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43087"
    ],
    "stopPointIds": [
      "41350",
      "470722",
      "471285"
    ]
  },
  {
    "nom": "Barbara",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Bagneux.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "483278"
    ],
    "stopPointIds": [
      "483277",
      "483313"
    ]
  },
  {
    "nom": "Barbès - Rochechouart",
    "lignes": [
      "2",
      "4"
    ],
    "resume": "Station située à Paris 10e.",
    "materiel": [
      "MF 01",
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "42280"
    ],
    "stopPointIds": [
      "22127",
      "22130",
      "463093",
      "463094"
    ]
  },
  {
    "nom": "Baron Le Roy",
    "lignes": [
      "T3a"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "58730"
    ],
    "stopPointIds": [
      "36482",
      "460561"
    ]
  },
  {
    "nom": "Basilique de Saint-Denis",
    "lignes": [
      "13",
      "T1"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "MF 77",
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "44859",
      "463329"
    ],
    "stopPointIds": [
      "22240",
      "22633",
      "22634",
      "463126"
    ]
  },
  {
    "nom": "Bastille",
    "lignes": [
      "1",
      "5",
      "8"
    ],
    "resume": "Station située à Paris 11e.",
    "materiel": [
      "MP 05",
      "MF 01",
      "MF 77"
    ],
    "stopAreaIds": [
      "42288"
    ],
    "stopPointIds": [
      "22010",
      "22089",
      "22097",
      "463000",
      "463018",
      "463019"
    ]
  },
  {
    "nom": "Baudelaire",
    "lignes": [
      "T5"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "58637"
    ],
    "stopPointIds": [
      "28866",
      "28867"
    ]
  },
  {
    "nom": "Beauvais",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Beauvais.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "411317"
    ],
    "stopPointIds": [
      "411316",
      "471046",
      "471404",
      "471709",
      "471822",
      "472914"
    ]
  },
  {
    "nom": "Beethoven - Concorde",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Vitry-sur-Seine.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "478994"
    ],
    "stopPointIds": [
      "478993",
      "478996"
    ]
  },
  {
    "nom": "Bel-Air",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "45222"
    ],
    "stopPointIds": [
      "22177",
      "463127"
    ]
  },
  {
    "nom": "Belleville",
    "lignes": [
      "2",
      "11"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 01",
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "42311"
    ],
    "stopPointIds": [
      "21998",
      "22128",
      "463110",
      "463111"
    ]
  },
  {
    "nom": "Bellevue",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Meudon.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43088"
    ],
    "stopPointIds": [
      "41215",
      "471435",
      "472441",
      "472607",
      "472679"
    ]
  },
  {
    "nom": "Belloy - Saint-Martin",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Belloy-en-France.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47524"
    ],
    "stopPointIds": [
      "41113",
      "471323",
      "472664"
    ]
  },
  {
    "nom": "Belvédère",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Suresnes.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "42315"
    ],
    "stopPointIds": [
      "22303",
      "22304"
    ]
  },
  {
    "nom": "Bercy",
    "lignes": [
      "6",
      "14",
      "R"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MP 73",
      "MP 89 CC",
      "MP 14 CA",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "479035",
      "58728"
    ],
    "stopPointIds": [
      "21957",
      "22178",
      "41397",
      "463128",
      "463129",
      "479034",
      "479038",
      "479039",
      "479045",
      "479047",
      "479048"
    ]
  },
  {
    "nom": "Bessancourt",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Bessancourt.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43090"
    ],
    "stopPointIds": [
      "41121",
      "471956",
      "472170"
    ]
  },
  {
    "nom": "Beynes",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Beynes.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "46857"
    ],
    "stopPointIds": [
      "41231",
      "471879",
      "472129"
    ]
  },
  {
    "nom": "Bécon les Bruyères",
    "lignes": [
      "15",
      "L"
    ],
    "resume": "Station située à Courbevoie.",
    "materiel": [
      "MR6V",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47923"
    ],
    "stopPointIds": [
      "41171",
      "470981",
      "471561",
      "471714",
      "471758",
      "471815",
      "472101",
      "472238",
      "472599"
    ]
  },
  {
    "nom": "Bérault",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Vincennes.",
    "materiel": [
      "MP 05"
    ],
    "stopAreaIds": [
      "42318"
    ],
    "stopPointIds": [
      "22105",
      "463130"
    ]
  },
  {
    "nom": "Bibliothèque François Mitterrand",
    "lignes": [
      "14",
      "C"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MP 14 CA",
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "45301",
      "473111"
    ],
    "stopPointIds": [
      "21955",
      "41128",
      "463112",
      "471835",
      "471854",
      "472490",
      "472740",
      "472741",
      "472821"
    ]
  },
  {
    "nom": "Bièvres",
    "lignes": [
      "V"
    ],
    "resume": "Station située à Bièvres.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43091"
    ],
    "stopPointIds": [
      "41242",
      "472234",
      "472850"
    ]
  },
  {
    "nom": "Billancourt",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Boulogne-Billancourt.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42334"
    ],
    "stopPointIds": [
      "21939",
      "463035"
    ]
  },
  {
    "nom": "Bir-Hakeim",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "45340"
    ],
    "stopPointIds": [
      "22179",
      "463005"
    ]
  },
  {
    "nom": "Blanche",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42337"
    ],
    "stopPointIds": [
      "22125",
      "463113"
    ]
  },
  {
    "nom": "Blumenthal",
    "lignes": [
      "T8"
    ],
    "resume": "Station située à Épinay-sur-Seine.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "59325"
    ],
    "stopPointIds": [
      "42105",
      "42116"
    ]
  },
  {
    "nom": "Bobigny - Pablo Picasso",
    "lignes": [
      "5",
      "15",
      "T1"
    ],
    "resume": "Station située à Bobigny.",
    "materiel": [
      "MF 01",
      "MR6V",
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "42345",
      "462329"
    ],
    "stopPointIds": [
      "22015",
      "22624",
      "22625",
      "463131",
      "492312",
      "497210",
      "497212"
    ]
  },
  {
    "nom": "Bobigny-Pantin - Raymond Queneau",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Bobigny.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42344"
    ],
    "stopPointIds": [
      "22014",
      "463002"
    ]
  },
  {
    "nom": "Boigneville",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Boigneville.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43092"
    ],
    "stopPointIds": [
      "41395",
      "470853",
      "471428"
    ]
  },
  {
    "nom": "Bois Briard",
    "lignes": [
      "T12"
    ],
    "resume": "Station située à Evry-Courcouronnes.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "486964"
    ],
    "stopPointIds": [
      "486963",
      "486988"
    ]
  },
  {
    "nom": "Bois de Saint-Eutrope",
    "lignes": [
      "T12"
    ],
    "resume": "Station située à Ris-Orangis.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "486968"
    ],
    "stopPointIds": [
      "486967",
      "486969"
    ]
  },
  {
    "nom": "Bois-Colombes",
    "lignes": [
      "15",
      "J"
    ],
    "resume": "Station située à Bois-Colombes.",
    "materiel": [
      "MR6V",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "51238"
    ],
    "stopPointIds": [
      "41134",
      "470797",
      "471375",
      "471402",
      "472915"
    ]
  },
  {
    "nom": "Bois-le-Roi",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Bois-le-Roi.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47654"
    ],
    "stopPointIds": [
      "41371",
      "471532",
      "471832"
    ]
  },
  {
    "nom": "Boissière",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "42359"
    ],
    "stopPointIds": [
      "22180",
      "463114"
    ]
  },
  {
    "nom": "Boissise-le-Roi",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Boissise-le-Roi.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45763"
    ],
    "stopPointIds": [
      "41386",
      "471316",
      "472629"
    ]
  },
  {
    "nom": "Boissy-l'Aillerie",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Boissy-l'Aillerie.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "46801"
    ],
    "stopPointIds": [
      "41140",
      "472168",
      "472294",
      "472804"
    ]
  },
  {
    "nom": "Boissy-Saint-Léger",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Boissy-Saint-Léger.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "43094"
    ],
    "stopPointIds": [
      "412802",
      "473984",
      "473987",
      "473988"
    ]
  },
  {
    "nom": "Bolivar",
    "lignes": [
      "7bis"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 88"
    ],
    "stopAreaIds": [
      "58767"
    ],
    "stopPointIds": [
      "24685",
      "463132"
    ]
  },
  {
    "nom": "Bondy",
    "lignes": [
      "15",
      "E",
      "T4"
    ],
    "resume": "Station située à Bondy.",
    "materiel": [
      "MR6V",
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien",
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "43096",
      "473143"
    ],
    "stopPointIds": [
      "41013",
      "470990",
      "471881",
      "471982",
      "472144",
      "472644",
      "472881",
      "473020",
      "479491"
    ]
  },
  {
    "nom": "Bonne Nouvelle",
    "lignes": [
      "8",
      "9"
    ],
    "resume": "Station située à Paris 2e.",
    "materiel": [
      "MF 77",
      "MF 01"
    ],
    "stopAreaIds": [
      "45100"
    ],
    "stopPointIds": [
      "21933",
      "22198",
      "463115",
      "463133"
    ]
  },
  {
    "nom": "Bonneval",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Bonneval.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "411446"
    ],
    "stopPointIds": [
      "411445",
      "471262",
      "472601"
    ]
  },
  {
    "nom": "Bonnières",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Bonnières-sur-Seine.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "46984"
    ],
    "stopPointIds": [
      "41290",
      "470812",
      "471553"
    ]
  },
  {
    "nom": "Boran-sur-Oise",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Boran-sur-Oise.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "411332"
    ],
    "stopPointIds": [
      "411331",
      "471512",
      "472426"
    ]
  },
  {
    "nom": "Botzaris",
    "lignes": [
      "7bis"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 88"
    ],
    "stopAreaIds": [
      "42369"
    ],
    "stopPointIds": [
      "24686",
      "463134"
    ]
  },
  {
    "nom": "Boucicaut",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "42370"
    ],
    "stopPointIds": [
      "22188",
      "463135"
    ]
  },
  {
    "nom": "Bouffémont - Moisselles",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Bouffémont.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47517"
    ],
    "stopPointIds": [
      "41106",
      "472645",
      "472842"
    ]
  },
  {
    "nom": "Bougival",
    "lignes": [
      "L"
    ],
    "resume": "Station située à La Celle-Saint-Cloud.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47790"
    ],
    "stopPointIds": [
      "41183",
      "471671",
      "472113"
    ]
  },
  {
    "nom": "Boulainvilliers",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "45453"
    ],
    "stopPointIds": [
      "41294",
      "470738",
      "470771"
    ]
  },
  {
    "nom": "Boulogne Jean Jaurès",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Boulogne-Billancourt.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "42380"
    ],
    "stopPointIds": [
      "21988",
      "463137"
    ]
  },
  {
    "nom": "Boulogne Pont de Saint-Cloud",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Boulogne-Billancourt.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "42381"
    ],
    "stopPointIds": [
      "21989",
      "463136"
    ]
  },
  {
    "nom": "Bouray",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Lardy.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "47905"
    ],
    "stopPointIds": [
      "41302",
      "470716",
      "472759"
    ]
  },
  {
    "nom": "Bourg-la-Reine",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Bourg-la-Reine.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43097"
    ],
    "stopPointIds": [
      "412842",
      "473969",
      "473970",
      "473971",
      "473972"
    ]
  },
  {
    "nom": "Bourron-Marlotte - Grez",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Bourron-Marlotte.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47124"
    ],
    "stopPointIds": [
      "41390",
      "470903",
      "472636"
    ]
  },
  {
    "nom": "Bourse",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris 2e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "45101"
    ],
    "stopPointIds": [
      "22033",
      "463090"
    ]
  },
  {
    "nom": "Boussy-Saint-Antoine",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Quincy-sous-Sénart.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47924"
    ],
    "stopPointIds": [
      "41365",
      "471212",
      "471545",
      "472445",
      "472771"
    ]
  },
  {
    "nom": "Boutigny",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Boutigny-sur-Essonne.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47895"
    ],
    "stopPointIds": [
      "41352",
      "471799",
      "472447"
    ]
  },
  {
    "nom": "Brancion",
    "lignes": [
      "T3a"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "42387"
    ],
    "stopPointIds": [
      "24104",
      "24121"
    ]
  },
  {
    "nom": "Bretagne",
    "lignes": [
      "T7"
    ],
    "resume": "Station située à Thiais.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "47694"
    ],
    "stopPointIds": [
      "29902",
      "413057"
    ]
  },
  {
    "nom": "Breuillet - Bruyères-le-Châtel",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Breuillet.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "47925"
    ],
    "stopPointIds": [
      "41320",
      "472770",
      "472810"
    ]
  },
  {
    "nom": "Breuillet Village",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Breuillet.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43099"
    ],
    "stopPointIds": [
      "41321",
      "471627",
      "472160"
    ]
  },
  {
    "nom": "Bréguet-Sabin",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris 11e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42390"
    ],
    "stopPointIds": [
      "22008",
      "463138"
    ]
  },
  {
    "nom": "Brétigny",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Brétigny-sur-Orge.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43098"
    ],
    "stopPointIds": [
      "41304",
      "471292",
      "471864",
      "471954",
      "472014",
      "472026",
      "472148",
      "472590"
    ]
  },
  {
    "nom": "Bréval",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Bréval.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43100"
    ],
    "stopPointIds": [
      "41157",
      "471056",
      "471174"
    ]
  },
  {
    "nom": "Brimborion",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Sèvres.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "47364"
    ],
    "stopPointIds": [
      "23441",
      "27464"
    ]
  },
  {
    "nom": "Brochant",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "45487"
    ],
    "stopPointIds": [
      "22231",
      "462978"
    ]
  },
  {
    "nom": "Brunoy",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Brunoy.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "58873"
    ],
    "stopPointIds": [
      "41364",
      "470689",
      "471526",
      "471558",
      "471840"
    ]
  },
  {
    "nom": "Bruyères-sur-Oise",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Bruyères-sur-Oise.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47533"
    ],
    "stopPointIds": [
      "41104",
      "472277",
      "472847"
    ]
  },
  {
    "nom": "Bry-sur-Marne",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Bry-sur-Marne.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "43101"
    ],
    "stopPointIds": [
      "412822",
      "473973",
      "473974"
    ]
  },
  {
    "nom": "Bueil",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Bueil.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "411362"
    ],
    "stopPointIds": [
      "411361",
      "470928",
      "471161",
      "471477"
    ]
  },
  {
    "nom": "Buno - Gironville",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Buno-Bonnevaux.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43102"
    ],
    "stopPointIds": [
      "41354",
      "470703",
      "472752"
    ]
  },
  {
    "nom": "Bures-sur-Yvette",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Bures-sur-Yvette.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43103"
    ],
    "stopPointIds": [
      "412795",
      "473975",
      "473978"
    ]
  },
  {
    "nom": "Bussy-Saint-Georges",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Bussy-Saint-Georges.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "58874"
    ],
    "stopPointIds": [
      "412812",
      "473960",
      "473961"
    ]
  },
  {
    "nom": "Butte du Chapeau Rouge",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "58501"
    ],
    "stopPointIds": [
      "24404",
      "24416"
    ]
  },
  {
    "nom": "Butte Pinson (Parc Régional)",
    "lignes": [
      "T5"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "58640"
    ],
    "stopPointIds": [
      "28850",
      "28853"
    ]
  },
  {
    "nom": "Buttes Chaumont",
    "lignes": [
      "7bis"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 88"
    ],
    "stopAreaIds": [
      "45609"
    ],
    "stopPointIds": [
      "24683",
      "463156"
    ]
  },
  {
    "nom": "Buzenval",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42410"
    ],
    "stopPointIds": [
      "25084",
      "463039"
    ]
  },
  {
    "nom": "Cadet",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "42414"
    ],
    "stopPointIds": [
      "22390",
      "463139"
    ]
  },
  {
    "nom": "Cambronne",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "42419"
    ],
    "stopPointIds": [
      "22176",
      "463140"
    ]
  },
  {
    "nom": "Camille Groult",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Vitry-sur-Seine.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479015"
    ],
    "stopPointIds": [
      "478992",
      "479013"
    ]
  },
  {
    "nom": "Camp des Loges",
    "lignes": [
      "T13"
    ],
    "resume": "Station située à Saint-Germain-en-Laye.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "480926"
    ],
    "stopPointIds": [
      "480925",
      "481068"
    ]
  },
  {
    "nom": "Campo-Formio",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42426"
    ],
    "stopPointIds": [
      "22009",
      "463020"
    ]
  },
  {
    "nom": "Canal Saint-Denis",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "45596"
    ],
    "stopPointIds": [
      "24401",
      "24402"
    ]
  },
  {
    "nom": "Cardinal Lemoine",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris 5e.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "42435"
    ],
    "stopPointIds": [
      "21984",
      "463141"
    ]
  },
  {
    "nom": "Carle - Darthé",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Choisy-le-Roi.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479011"
    ],
    "stopPointIds": [
      "479010",
      "479012"
    ]
  },
  {
    "nom": "Caroline Aigle (Orlyfret)",
    "lignes": [
      "T7"
    ],
    "resume": "Station située à Orly.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "58781"
    ],
    "stopPointIds": [
      "29898",
      "29899"
    ]
  },
  {
    "nom": "Carrefour Pleyel",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "42447"
    ],
    "stopPointIds": [
      "22239",
      "462976",
      "495051"
    ]
  },
  {
    "nom": "CEA Saint-Aubin",
    "lignes": [
      "18"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MRV"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Censier - Daubenton",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris 5e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "42461"
    ],
    "stopPointIds": [
      "22391",
      "463157"
    ]
  },
  {
    "nom": "Centre de Châtillon",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Châtillon.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "59221"
    ],
    "stopPointIds": [
      "2337",
      "41952"
    ]
  },
  {
    "nom": "Cergy le Haut",
    "lignes": [
      "A",
      "L"
    ],
    "resume": "Station située à Cergy.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43104"
    ],
    "stopPointIds": [
      "40918",
      "472384",
      "472468",
      "472554",
      "478476"
    ]
  },
  {
    "nom": "Cergy Préfecture",
    "lignes": [
      "A",
      "L"
    ],
    "resume": "Station située à Cergy.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "44559"
    ],
    "stopPointIds": [
      "411352",
      "472439",
      "472932"
    ]
  },
  {
    "nom": "Cergy Saint-Christophe",
    "lignes": [
      "A",
      "L"
    ],
    "resume": "Station située à Cergy.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47897"
    ],
    "stopPointIds": [
      "411368",
      "470994",
      "471703"
    ]
  },
  {
    "nom": "Cernay",
    "lignes": [
      "C",
      "H"
    ],
    "resume": "Station située à Ermont.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43105"
    ],
    "stopPointIds": [
      "41086",
      "470864",
      "471069"
    ]
  },
  {
    "nom": "Cesson",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Cesson.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "42516"
    ],
    "stopPointIds": [
      "41368",
      "472255",
      "472531",
      "472569",
      "472713"
    ]
  },
  {
    "nom": "César",
    "lignes": [
      "T8"
    ],
    "resume": "Station située à Villetaneuse.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "50572"
    ],
    "stopPointIds": [
      "42132",
      "42133"
    ]
  },
  {
    "nom": "Chailly Boissy le Chatel",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Chailly-en-Brie.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47926"
    ],
    "stopPointIds": [
      "41053"
    ]
  },
  {
    "nom": "Chamarande",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Chamarande.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "47927"
    ],
    "stopPointIds": [
      "41300",
      "471964",
      "472432"
    ]
  },
  {
    "nom": "Champ de Courses d'Enghien",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Soisy-sous-Montmorency.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "46477"
    ],
    "stopPointIds": [
      "41084",
      "470845",
      "471336",
      "471506"
    ]
  },
  {
    "nom": "Champ de Mars Tour Eiffel",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "58757"
    ],
    "stopPointIds": [
      "41210",
      "471988",
      "472748"
    ]
  },
  {
    "nom": "Champagne-sur-Oise",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Champagne-sur-Oise.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47590"
    ],
    "stopPointIds": [
      "41109",
      "470666",
      "472567"
    ]
  },
  {
    "nom": "Champagne-sur-Seine",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Champagne-sur-Seine.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43106"
    ],
    "stopPointIds": [
      "41382",
      "470966",
      "472416"
    ]
  },
  {
    "nom": "Champbenoist Poigny",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Poigny.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47174"
    ],
    "stopPointIds": [
      "41030",
      "471938"
    ]
  },
  {
    "nom": "Champigny",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Saint-Maur-des-Fossés.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "58270"
    ],
    "stopPointIds": [
      "412801",
      "473962",
      "473963"
    ]
  },
  {
    "nom": "Champigny Centre",
    "lignes": [
      "15"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MR6V"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Champigny-sur-Yonne",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Champigny.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411461"
    ],
    "stopPointIds": [
      "411460",
      "471359",
      "471515",
      "472754",
      "472976"
    ]
  },
  {
    "nom": "Champlan",
    "lignes": [
      "T12"
    ],
    "resume": "Station située à Champlan.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "486958"
    ],
    "stopPointIds": [
      "486957",
      "486990"
    ]
  },
  {
    "nom": "Champs-Élysées - Clemenceau",
    "lignes": [
      "1",
      "13"
    ],
    "resume": "Station située à Paris 8e.",
    "materiel": [
      "MP 05",
      "MF 77"
    ],
    "stopAreaIds": [
      "42531"
    ],
    "stopPointIds": [
      "22090",
      "22093",
      "463010",
      "463011"
    ]
  },
  {
    "nom": "Changis - Saint-Jean",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Changis-sur-Marne.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47928"
    ],
    "stopPointIds": [
      "41061",
      "471406",
      "472092"
    ]
  },
  {
    "nom": "Chanteloup-les-Vignes",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Chanteloup-les-Vignes.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47929"
    ],
    "stopPointIds": [
      "41147",
      "472114",
      "472603"
    ]
  },
  {
    "nom": "Chantilly - Gouvieux",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Chantilly.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411428"
    ],
    "stopPointIds": [
      "411427",
      "471772",
      "471807",
      "472930"
    ]
  },
  {
    "nom": "Chaponval",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Auvers-sur-Oise.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47591"
    ],
    "stopPointIds": [
      "41094",
      "471130",
      "471339"
    ]
  },
  {
    "nom": "Chardon Lagache",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "42543"
    ],
    "stopPointIds": [
      "21985"
    ]
  },
  {
    "nom": "Charenton - Écoles",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Charenton-le-Pont.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "42545"
    ],
    "stopPointIds": [
      "22210",
      "463142"
    ]
  },
  {
    "nom": "Charlebourg",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à La Garenne-Colombes.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "47411"
    ],
    "stopPointIds": [
      "23436",
      "23437"
    ]
  },
  {
    "nom": "Charles de Gaulle - Étoile",
    "lignes": [
      "1",
      "2",
      "6",
      "A"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "MP 05",
      "MF 01",
      "MP 73",
      "MP 89 CC",
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "477682",
      "58759"
    ],
    "stopPointIds": [
      "22086",
      "22094",
      "22095",
      "412807",
      "463013",
      "463042",
      "463043",
      "473922",
      "473923"
    ]
  },
  {
    "nom": "Charles Michels",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "42557"
    ],
    "stopPointIds": [
      "21986",
      "463076"
    ]
  },
  {
    "nom": "Charonne",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 11e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42560"
    ],
    "stopPointIds": [
      "21934",
      "463143"
    ]
  },
  {
    "nom": "Chars",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Chars.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47930"
    ],
    "stopPointIds": [
      "41144",
      "471358",
      "472293"
    ]
  },
  {
    "nom": "Chartres",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Chartres.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411507"
    ],
    "stopPointIds": [
      "411506",
      "471043",
      "471084",
      "471802",
      "472404",
      "472592",
      "472733",
      "472768"
    ]
  },
  {
    "nom": "Chartrettes",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Chartrettes.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43107"
    ],
    "stopPointIds": [
      "41378",
      "470759",
      "472933"
    ]
  },
  {
    "nom": "Chatou - Croissy",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Chatou.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "53783"
    ],
    "stopPointIds": [
      "412797",
      "473964",
      "473965"
    ]
  },
  {
    "nom": "Chauffry",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Saint-Siméon.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47931"
    ],
    "stopPointIds": [
      "41054"
    ]
  },
  {
    "nom": "Chaumont-en-Vexin",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Chaumont-en-Vexin.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "411345"
    ],
    "stopPointIds": [
      "411344",
      "471071",
      "471166"
    ]
  },
  {
    "nom": "Chaussée d'Antin - La Fayette",
    "lignes": [
      "7",
      "9"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 77",
      "MF 01"
    ],
    "stopAreaIds": [
      "42589"
    ],
    "stopPointIds": [
      "21932",
      "22388",
      "463144",
      "463145"
    ]
  },
  {
    "nom": "Chaville - Vélizy",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Viroflay.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "47883"
    ],
    "stopPointIds": [
      "41219",
      "471121",
      "471551",
      "471589",
      "472982"
    ]
  },
  {
    "nom": "Chaville Rive Droite",
    "lignes": [
      "L",
      "U"
    ],
    "resume": "Station située à Chaville.",
    "materiel": [
      "Z 50000 Francilien",
      "Z 8800"
    ],
    "stopAreaIds": [
      "43241"
    ],
    "stopPointIds": [
      "41176",
      "471516",
      "471723"
    ]
  },
  {
    "nom": "Chaville Rive Gauche",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Chaville.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43108"
    ],
    "stopPointIds": [
      "41220",
      "471679",
      "472152",
      "472291",
      "472372"
    ]
  },
  {
    "nom": "Château d'Eau",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris 10e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "42579"
    ],
    "stopPointIds": [
      "22153",
      "462979"
    ]
  },
  {
    "nom": "Château de Vincennes",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MP 05"
    ],
    "stopAreaIds": [
      "42582"
    ],
    "stopPointIds": [
      "22104",
      "463149"
    ]
  },
  {
    "nom": "Château Rouge",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "42585"
    ],
    "stopPointIds": [
      "22152",
      "463148"
    ]
  },
  {
    "nom": "Château-Landon",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris 10e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "479053"
    ],
    "stopPointIds": [
      "22367",
      "463006"
    ]
  },
  {
    "nom": "Château-Thierry",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Château-Thierry.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "411378"
    ],
    "stopPointIds": [
      "411377",
      "470760",
      "471957",
      "472119",
      "472783",
      "472854"
    ]
  },
  {
    "nom": "Châteaudun",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Châteaudun.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "411443"
    ],
    "stopPointIds": [
      "411442",
      "470862",
      "472529",
      "472579"
    ]
  },
  {
    "nom": "Châteaudun - Barbès",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Ivry-sur-Seine.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479017"
    ],
    "stopPointIds": [
      "479006",
      "479007"
    ]
  },
  {
    "nom": "Châtelet",
    "lignes": [
      "1",
      "4",
      "7",
      "11",
      "14"
    ],
    "resume": "Station située à Paris 4e.",
    "materiel": [
      "MP 05",
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MF 77",
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "42587"
    ],
    "stopPointIds": [
      "21959",
      "21966",
      "22087",
      "22092",
      "22364",
      "463060",
      "463079",
      "463158",
      "463159",
      "463160"
    ]
  },
  {
    "nom": "Châtelet - Les Halles",
    "lignes": [
      "A",
      "B",
      "D"
    ],
    "resume": "Station située à Paris 1er.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo",
      "MI 79",
      "MI 84",
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45102"
    ],
    "stopPointIds": [
      "412815",
      "471322",
      "471719",
      "472764",
      "472996",
      "473921",
      "473989",
      "473990",
      "473993"
    ]
  },
  {
    "nom": "Châtillon - Montrouge",
    "lignes": [
      "13",
      "15",
      "T6"
    ],
    "resume": "Station située à Châtillon.",
    "materiel": [
      "MF 77",
      "MR6V",
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "42588",
      "462350"
    ],
    "stopPointIds": [
      "22237",
      "2336",
      "463087",
      "482428",
      "495053",
      "496645"
    ]
  },
  {
    "nom": "Chelles - Gournay",
    "lignes": [
      "16",
      "E",
      "P"
    ],
    "resume": "Station située à Chelles.",
    "materiel": [
      "MR3V",
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "58879"
    ],
    "stopPointIds": [
      "41039",
      "471173",
      "471788",
      "472240",
      "472324"
    ]
  },
  {
    "nom": "Chemin d'Antony",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Antony.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "46035"
    ],
    "stopPointIds": [
      "41330",
      "471004",
      "471400"
    ]
  },
  {
    "nom": "Chemin des Reniers",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Villeneuve-la-Garenne.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "42594"
    ],
    "stopPointIds": [
      "23289",
      "23293"
    ]
  },
  {
    "nom": "Chemin Vert",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris 11e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "45097"
    ],
    "stopPointIds": [
      "22202",
      "463146"
    ]
  },
  {
    "nom": "Chevaleret",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "45267"
    ],
    "stopPointIds": [
      "22174",
      "463147"
    ]
  },
  {
    "nom": "Chevilly-Larue",
    "lignes": [
      "14",
      "T7"
    ],
    "resume": "Station située à Chevilly-Larue.",
    "materiel": [
      "MP 14 CA",
      "Citadis 302"
    ],
    "stopAreaIds": [
      "47421",
      "490836"
    ],
    "stopPointIds": [
      "35929",
      "35930",
      "490835",
      "490851"
    ]
  },
  {
    "nom": "Chézy-sur-Marne",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Chézy-sur-Marne.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "411381"
    ],
    "stopPointIds": [
      "411380",
      "471764",
      "471821"
    ]
  },
  {
    "nom": "Chilly-Mazarin",
    "lignes": [
      "T12"
    ],
    "resume": "Station située à Chilly-Mazarin.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "486893"
    ],
    "stopPointIds": [
      "486892",
      "486894"
    ]
  },
  {
    "nom": "Choisy-le-Roi",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Choisy-le-Roi.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43110"
    ],
    "stopPointIds": [
      "41313",
      "471085",
      "471836",
      "472614",
      "472887"
    ]
  },
  {
    "nom": "Christophe Colomb",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Orly.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479016"
    ],
    "stopPointIds": [
      "479008",
      "479009"
    ]
  },
  {
    "nom": "Cimetière de Saint-Denis",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "46327"
    ],
    "stopPointIds": [
      "23312",
      "23314"
    ]
  },
  {
    "nom": "Cimetière Parisien d'Ivry",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Ivry-sur-Seine.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479018"
    ],
    "stopPointIds": [
      "479004",
      "479005"
    ]
  },
  {
    "nom": "Cité",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris 4e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "42639"
    ],
    "stopPointIds": [
      "22150",
      "463161"
    ]
  },
  {
    "nom": "Cité Universitaire",
    "lignes": [
      "B",
      "T3a"
    ],
    "resume": "Station située à Paris 14e.",
    "materiel": [
      "MI 79",
      "MI 84",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "45339",
      "473843"
    ],
    "stopPointIds": [
      "24100",
      "24115",
      "412839",
      "473991",
      "473995"
    ]
  },
  {
    "nom": "Cité-Jardin",
    "lignes": [
      "T10"
    ],
    "resume": "Station située à Châtenay-Malabry.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "486825"
    ],
    "stopPointIds": [
      "486824",
      "486846"
    ]
  },
  {
    "nom": "Clamart",
    "lignes": [
      "15",
      "N"
    ],
    "resume": "Station située à Clamart.",
    "materiel": [
      "MR6V",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43111"
    ],
    "stopPointIds": [
      "41206",
      "471241",
      "472493",
      "472858",
      "472863"
    ]
  },
  {
    "nom": "Clichy - Levallois",
    "lignes": [
      "L"
    ],
    "resume": "Station située à Levallois-Perret.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43112"
    ],
    "stopPointIds": [
      "41137",
      "470726",
      "471449",
      "471457",
      "472249",
      "472621",
      "472866"
    ]
  },
  {
    "nom": "Clichy - Montfermeil",
    "lignes": [
      "16",
      "T4"
    ],
    "resume": "Station située à Clichy-sous-Bois.",
    "materiel": [
      "MR3V",
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "477277"
    ],
    "stopPointIds": [
      "478661",
      "478664"
    ]
  },
  {
    "nom": "Clichy-sous-Bois - Mairie",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Clichy-sous-Bois.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "477287"
    ],
    "stopPointIds": [
      "477286",
      "478663"
    ]
  },
  {
    "nom": "Cluny - La Sorbonne",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris 5e.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "42674"
    ],
    "stopPointIds": [
      "21983",
      "462944"
    ]
  },
  {
    "nom": "Coeur d'Orly",
    "lignes": [
      "T7"
    ],
    "resume": "Station située à Orly.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "58782"
    ],
    "stopPointIds": [
      "35932",
      "460558"
    ]
  },
  {
    "nom": "Coignières",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Coignières.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47932"
    ],
    "stopPointIds": [
      "41224",
      "472242",
      "472793"
    ]
  },
  {
    "nom": "Colette Besson",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "45538"
    ],
    "stopPointIds": [
      "24412",
      "24420"
    ]
  },
  {
    "nom": "Colombes",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Colombes.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43113"
    ],
    "stopPointIds": [
      "41135",
      "471096",
      "472902"
    ]
  },
  {
    "nom": "Colonel Fabien",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris 10e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42732"
    ],
    "stopPointIds": [
      "22120",
      "462984"
    ]
  },
  {
    "nom": "Combs-la-Ville - Quincy",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Combs-la-Ville.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45771"
    ],
    "stopPointIds": [
      "41366",
      "471214",
      "471773",
      "472227",
      "472722",
      "472963"
    ]
  },
  {
    "nom": "Commerce",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "42734"
    ],
    "stopPointIds": [
      "22190",
      "463162"
    ]
  },
  {
    "nom": "Compans",
    "lignes": [
      "K"
    ],
    "resume": "Station située à Compans.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "46731"
    ],
    "stopPointIds": [
      "41080",
      "471777",
      "473013"
    ]
  },
  {
    "nom": "Concorde",
    "lignes": [
      "1",
      "8",
      "12"
    ],
    "resume": "Station située à Paris 8e.",
    "materiel": [
      "MP 05",
      "MF 77",
      "MF 67"
    ],
    "stopAreaIds": [
      "45676"
    ],
    "stopPointIds": [
      "22057",
      "22085",
      "22096",
      "463150",
      "463151",
      "463164"
    ]
  },
  {
    "nom": "Conflans Fin d'Oise",
    "lignes": [
      "A",
      "J",
      "L"
    ],
    "resume": "Station située à Conflans-Sainte-Honorine.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43114"
    ],
    "stopPointIds": [
      "411350",
      "471418",
      "471534",
      "471751",
      "472478"
    ]
  },
  {
    "nom": "Conflans-Sainte-Honorine",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Conflans-Sainte-Honorine.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47447"
    ],
    "stopPointIds": [
      "41170",
      "470959",
      "471464",
      "471597",
      "472871",
      "472947"
    ]
  },
  {
    "nom": "Constant Coquelin",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Vitry-sur-Seine.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479019"
    ],
    "stopPointIds": [
      "479002",
      "479003"
    ]
  },
  {
    "nom": "Convention",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "42751"
    ],
    "stopPointIds": [
      "22058",
      "462949"
    ]
  },
  {
    "nom": "Corbeil-Essonnes",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Corbeil-Essonnes.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43115"
    ],
    "stopPointIds": [
      "41336",
      "470889",
      "472205",
      "472343",
      "472398",
      "472415",
      "472720",
      "477108"
    ]
  },
  {
    "nom": "Corentin Cariou",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "45598"
    ],
    "stopPointIds": [
      "22389",
      "463152"
    ]
  },
  {
    "nom": "Corentin Celton",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Issy-les-Moulineaux.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "42759"
    ],
    "stopPointIds": [
      "22061",
      "463153"
    ]
  },
  {
    "nom": "Cormeilles-en-Parisis",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Cormeilles-en-Parisis.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43116"
    ],
    "stopPointIds": [
      "41167",
      "471261",
      "472141",
      "472832"
    ]
  },
  {
    "nom": "Corvisart",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "45274"
    ],
    "stopPointIds": [
      "22175",
      "463105"
    ]
  },
  {
    "nom": "Cosmonautes",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "42763"
    ],
    "stopPointIds": [
      "22628",
      "22632"
    ]
  },
  {
    "nom": "Coteaux Beauclair",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Rosny-sous-Bois.",
    "materiel": [
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "490771"
    ],
    "stopPointIds": [
      "490770",
      "490792"
    ]
  },
  {
    "nom": "Coteaux de l'Orge",
    "lignes": [
      "T12"
    ],
    "resume": "Station située à Viry-Châtillon.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "486977"
    ],
    "stopPointIds": [
      "486976",
      "486991"
    ]
  },
  {
    "nom": "Couilly - Saint-Germain - Quincy",
    "lignes": [
      "T14"
    ],
    "resume": "Station située à Saint-Germain-sur-Morin.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "492421"
    ],
    "stopPointIds": [
      "492420"
    ]
  },
  {
    "nom": "Coulommiers",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Coulommiers.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "43117"
    ],
    "stopPointIds": [
      "41050",
      "470982",
      "471311",
      "472559"
    ]
  },
  {
    "nom": "Cour Saint-Emilion",
    "lignes": [
      "14"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MP 14 CA"
    ],
    "stopAreaIds": [
      "45234"
    ],
    "stopPointIds": [
      "21956",
      "463165"
    ]
  },
  {
    "nom": "Courbevoie",
    "lignes": [
      "L"
    ],
    "resume": "Station située à Courbevoie.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43118"
    ],
    "stopPointIds": [
      "41172",
      "470814",
      "472453"
    ]
  },
  {
    "nom": "Courcelle-sur-Yvette",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Gif-sur-Yvette.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "47052"
    ],
    "stopPointIds": [
      "412845",
      "473966",
      "473968"
    ]
  },
  {
    "nom": "Courcelles",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42771"
    ],
    "stopPointIds": [
      "22121",
      "463154"
    ]
  },
  {
    "nom": "Couronnes",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42772"
    ],
    "stopPointIds": [
      "22126",
      "462983"
    ]
  },
  {
    "nom": "Creil",
    "lignes": [
      "D",
      "H"
    ],
    "resume": "Station située à Creil.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "411440"
    ],
    "stopPointIds": [
      "411439",
      "471424",
      "471640",
      "471905",
      "472051",
      "472060",
      "472766",
      "473009"
    ]
  },
  {
    "nom": "Crécy-la-Chapelle",
    "lignes": [
      "T14"
    ],
    "resume": "Station située à Crécy-la-Chapelle.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "492425"
    ],
    "stopPointIds": [
      "492424"
    ]
  },
  {
    "nom": "Crépy-en-Valois",
    "lignes": [
      "K"
    ],
    "resume": "Station située à Crépy-en-Valois.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "411396"
    ],
    "stopPointIds": [
      "411395",
      "471748",
      "472271",
      "472290"
    ]
  },
  {
    "nom": "Créteil - L'Échat",
    "lignes": [
      "8",
      "15"
    ],
    "resume": "Station située à Créteil.",
    "materiel": [
      "MF 77",
      "MR6V"
    ],
    "stopAreaIds": [
      "45712"
    ],
    "stopPointIds": [
      "22211",
      "463166"
    ]
  },
  {
    "nom": "Créteil - Préfecture",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Créteil.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "42778"
    ],
    "stopPointIds": [
      "22213",
      "463056"
    ]
  },
  {
    "nom": "Créteil - Université",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Créteil.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "42779"
    ],
    "stopPointIds": [
      "22212",
      "463167"
    ]
  },
  {
    "nom": "Créteil Pompadour",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Créteil.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "46286"
    ],
    "stopPointIds": [
      "41530",
      "472380",
      "472916",
      "488126"
    ]
  },
  {
    "nom": "Crimée",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "42780"
    ],
    "stopPointIds": [
      "22392",
      "463155"
    ]
  },
  {
    "nom": "Croix de Chavaux",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Montreuil.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42789"
    ],
    "stopPointIds": [
      "21943",
      "463176"
    ]
  },
  {
    "nom": "Crouy-sur-Ourcq",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Crouy-sur-Ourcq.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47491"
    ],
    "stopPointIds": [
      "41066",
      "471156",
      "471639"
    ]
  },
  {
    "nom": "Dammartin - Juilly - Saint-Mard",
    "lignes": [
      "K"
    ],
    "resume": "Station située à Saint-Mard.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "46736"
    ],
    "stopPointIds": [
      "41077",
      "470808",
      "472648"
    ]
  },
  {
    "nom": "Danton",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à La Courneuve.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "46115"
    ],
    "stopPointIds": [
      "23302",
      "24427"
    ]
  },
  {
    "nom": "Danube",
    "lignes": [
      "7bis"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 88"
    ],
    "stopAreaIds": [
      "42822"
    ],
    "stopPointIds": [
      "24687"
    ]
  },
  {
    "nom": "Daumesnil",
    "lignes": [
      "6",
      "8"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MP 73",
      "MP 89 CC",
      "MF 77"
    ],
    "stopAreaIds": [
      "45229"
    ],
    "stopPointIds": [
      "22181",
      "22184",
      "463168",
      "463169"
    ]
  },
  {
    "nom": "Delaunay - Belleville",
    "lignes": [
      "T8"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "59326"
    ],
    "stopPointIds": [
      "42117",
      "42125"
    ]
  },
  {
    "nom": "Delphine Seyrig",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "58500"
    ],
    "stopPointIds": [
      "24533",
      "460562"
    ]
  },
  {
    "nom": "Denfert-Rochereau",
    "lignes": [
      "4",
      "6",
      "B"
    ],
    "resume": "Station située à Paris 14e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MP 73",
      "MP 89 CC",
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "462351",
      "473890"
    ],
    "stopPointIds": [
      "22151",
      "22158",
      "412819",
      "463103",
      "463104",
      "473994",
      "473997",
      "480170"
    ]
  },
  {
    "nom": "Desnouettes",
    "lignes": [
      "T3a"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "42844"
    ],
    "stopPointIds": [
      "24101",
      "24116"
    ]
  },
  {
    "nom": "Deuil - Montmagny",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Deuil-la-Barre.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "473159"
    ],
    "stopPointIds": [
      "411425",
      "472400",
      "472457"
    ]
  },
  {
    "nom": "Dewoitine",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Vélizy-Villacoublay.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "42846"
    ],
    "stopPointIds": [
      "2328",
      "2335"
    ]
  },
  {
    "nom": "Diane Arbus - Porte des Poissonniers",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "45537"
    ],
    "stopPointIds": [
      "462415",
      "462444"
    ]
  },
  {
    "nom": "Didot",
    "lignes": [
      "T3a"
    ],
    "resume": "Station située à Paris 14e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "42847"
    ],
    "stopPointIds": [
      "24105",
      "24130"
    ]
  },
  {
    "nom": "Division Leclerc",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Châtillon.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "479057"
    ],
    "stopPointIds": [
      "41855",
      "41856"
    ]
  },
  {
    "nom": "Domaine Chérioux",
    "lignes": [
      "T7"
    ],
    "resume": "Station située à Chevilly-Larue.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "42882"
    ],
    "stopPointIds": [
      "29895",
      "29896"
    ]
  },
  {
    "nom": "Domont",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Domont.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43120"
    ],
    "stopPointIds": [
      "41103",
      "471486",
      "472659"
    ]
  },
  {
    "nom": "Dordives",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Dordives.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "58955"
    ],
    "stopPointIds": [
      "41394",
      "471293",
      "472828"
    ]
  },
  {
    "nom": "Dourdan",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Dourdan.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43121"
    ],
    "stopPointIds": [
      "41324",
      "470842",
      "471001",
      "471744"
    ]
  },
  {
    "nom": "Dourdan la Forêt",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Dourdan.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "47095"
    ],
    "stopPointIds": [
      "41292",
      "471151"
    ]
  },
  {
    "nom": "Drancy",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Drancy.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43122"
    ],
    "stopPointIds": [
      "411409",
      "470605",
      "470881",
      "471478",
      "472688"
    ]
  },
  {
    "nom": "Drancy - Avenir",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Bobigny.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "42866"
    ],
    "stopPointIds": [
      "23306",
      "24424"
    ]
  },
  {
    "nom": "Drancy-Bobigny",
    "lignes": [
      "15"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MR6V"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Dreux",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Dreux.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411492"
    ],
    "stopPointIds": [
      "411491",
      "472080",
      "472214",
      "472306",
      "472532",
      "472594"
    ]
  },
  {
    "nom": "Dugny - La Courneuve",
    "lignes": [
      "T11"
    ],
    "resume": "Station située à La Courneuve.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "426092"
    ],
    "stopPointIds": [
      "470721",
      "472210",
      "495663"
    ]
  },
  {
    "nom": "Dugommier",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "42869"
    ],
    "stopPointIds": [
      "22182",
      "463075"
    ]
  },
  {
    "nom": "Dupleix",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "42871"
    ],
    "stopPointIds": [
      "22171",
      "463099"
    ]
  },
  {
    "nom": "Duroc",
    "lignes": [
      "10",
      "13"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MF 67",
      "MF 19 CC",
      "MF 77"
    ],
    "stopAreaIds": [
      "42874"
    ],
    "stopPointIds": [
      "21970",
      "22229",
      "463083",
      "463084"
    ]
  },
  {
    "nom": "Edgar Quinet",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 14e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "45313"
    ],
    "stopPointIds": [
      "22172",
      "463100"
    ]
  },
  {
    "nom": "Ella Fitzgerald",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "58499"
    ],
    "stopPointIds": [
      "24398",
      "24417"
    ]
  },
  {
    "nom": "Enghien-les-Bains",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Enghien-les-Bains.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43075"
    ],
    "stopPointIds": [
      "41083",
      "470633",
      "471398"
    ]
  },
  {
    "nom": "Epinettes - Pouchet",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "45478"
    ],
    "stopPointIds": [
      "462439",
      "462442"
    ]
  },
  {
    "nom": "Ermont - Eaubonne",
    "lignes": [
      "C",
      "H",
      "J"
    ],
    "resume": "Station située à Eaubonne.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47898"
    ],
    "stopPointIds": [
      "41085",
      "470732",
      "470813",
      "471546",
      "471582",
      "471689",
      "471868",
      "472220",
      "472940"
    ]
  },
  {
    "nom": "Ermont Halte",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Ermont.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47920"
    ],
    "stopPointIds": [
      "41116",
      "470642",
      "472369"
    ]
  },
  {
    "nom": "Esbly",
    "lignes": [
      "P",
      "T14"
    ],
    "resume": "Station située à Esbly.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500",
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "47322",
      "492417"
    ],
    "stopPointIds": [
      "41052",
      "471034",
      "471581",
      "471850",
      "492416"
    ]
  },
  {
    "nom": "Escadrille Normandie-Niémen",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Bobigny.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "47347"
    ],
    "stopPointIds": [
      "22626",
      "22627"
    ]
  },
  {
    "nom": "Esplanade de la Défense",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Puteaux.",
    "materiel": [
      "MP 05"
    ],
    "stopAreaIds": [
      "42962"
    ],
    "stopPointIds": [
      "22102",
      "463170"
    ]
  },
  {
    "nom": "Essonnes Robinson",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Corbeil-Essonnes.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45759"
    ],
    "stopPointIds": [
      "41355",
      "471584",
      "471657"
    ]
  },
  {
    "nom": "Europe",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris 8e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "42972"
    ],
    "stopPointIds": [
      "22032",
      "463069"
    ]
  },
  {
    "nom": "Exelmans",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42977"
    ],
    "stopPointIds": [
      "21930",
      "462956"
    ]
  },
  {
    "nom": "École Militaire",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris 7e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "42885"
    ],
    "stopPointIds": [
      "22191",
      "463177"
    ]
  },
  {
    "nom": "École Vétérinaire de Maisons-Alfort",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Maisons-Alfort.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "42889"
    ],
    "stopPointIds": [
      "22214",
      "463047"
    ]
  },
  {
    "nom": "Écouen - Ézanville",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Ézanville.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43073"
    ],
    "stopPointIds": [
      "41102",
      "471263",
      "472154"
    ]
  },
  {
    "nom": "Église d'Auteuil",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "42947"
    ],
    "stopPointIds": [
      "21971"
    ]
  },
  {
    "nom": "Église de Pantin",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Pantin.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "42949"
    ],
    "stopPointIds": [
      "22016",
      "463178"
    ]
  },
  {
    "nom": "Égly",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Égly.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "415484"
    ],
    "stopPointIds": [
      "41319",
      "470718",
      "472581"
    ]
  },
  {
    "nom": "Émerainville - Pontault-Combault",
    "lignes": [
      "E"
    ],
    "resume": "Station située à Pontault-Combault.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43074"
    ],
    "stopPointIds": [
      "41034",
      "471349",
      "471629",
      "471661",
      "472840"
    ]
  },
  {
    "nom": "Épernon",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Épernon.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411511"
    ],
    "stopPointIds": [
      "411510",
      "472652",
      "473004"
    ]
  },
  {
    "nom": "Épinay - Orgemont",
    "lignes": [
      "T8"
    ],
    "resume": "Station située à Épinay-sur-Seine.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "50483"
    ],
    "stopPointIds": [
      "42101",
      "42109"
    ]
  },
  {
    "nom": "Épinay - Villetaneuse",
    "lignes": [
      "H",
      "T11"
    ],
    "resume": "Station située à Épinay-sur-Seine.",
    "materiel": [
      "Z 50000 Francilien",
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "43078",
      "462331"
    ],
    "stopPointIds": [
      "411415",
      "470874",
      "470918",
      "471479",
      "471519",
      "471855",
      "472969",
      "495666"
    ]
  },
  {
    "nom": "Épinay-sur-Orge",
    "lignes": [
      "C",
      "T12"
    ],
    "resume": "Station située à Épinay-sur-Orge.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "43076",
      "486879"
    ],
    "stopPointIds": [
      "41307",
      "472230",
      "472282",
      "486878",
      "486898",
      "486899"
    ]
  },
  {
    "nom": "Épinay-sur-Seine",
    "lignes": [
      "C",
      "T8",
      "T11"
    ],
    "resume": "Station située à Épinay-sur-Seine.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Citadis 302",
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "43077",
      "462330"
    ],
    "stopPointIds": [
      "41073",
      "42102",
      "42112",
      "471248",
      "472006",
      "472920",
      "472986",
      "495667"
    ]
  },
  {
    "nom": "Épluches",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Saint-Ouen-l'Aumône.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47596"
    ],
    "stopPointIds": [
      "41092",
      "470945",
      "471951"
    ]
  },
  {
    "nom": "Épône - Mézières",
    "lignes": [
      "J",
      "N"
    ],
    "resume": "Station située à Épône.",
    "materiel": [
      "Z 50000 Francilien",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47882"
    ],
    "stopPointIds": [
      "41202",
      "471058",
      "471647",
      "472005",
      "472454"
    ]
  },
  {
    "nom": "Éragny - Neuville",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Éragny.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43079"
    ],
    "stopPointIds": [
      "41145",
      "471810",
      "472435"
    ]
  },
  {
    "nom": "Étampes",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Étampes.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43080"
    ],
    "stopPointIds": [
      "41298",
      "470824",
      "471541",
      "471897",
      "472064",
      "472823"
    ]
  },
  {
    "nom": "Étienne Marcel",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris 1er.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "44970"
    ],
    "stopPointIds": [
      "22147",
      "463171"
    ]
  },
  {
    "nom": "Étigny - Véron",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Étigny.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411455"
    ],
    "stopPointIds": [
      "411454",
      "470832",
      "470836",
      "472153",
      "472461"
    ]
  },
  {
    "nom": "Étréchy",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Étréchy.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43081"
    ],
    "stopPointIds": [
      "41299",
      "471367",
      "471701"
    ]
  },
  {
    "nom": "Évreux Normandie",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Évreux.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "411365"
    ],
    "stopPointIds": [
      "411364",
      "470894",
      "471713",
      "472055",
      "472353",
      "472524"
    ]
  },
  {
    "nom": "Évry - Courcouronnes",
    "lignes": [
      "D",
      "T12"
    ],
    "resume": "Station située à Evry-Courcouronnes.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N",
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "47906",
      "486901"
    ],
    "stopPointIds": [
      "41346",
      "472133",
      "472557",
      "486900",
      "486902"
    ]
  },
  {
    "nom": "Évry - Val de Seine",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Evry-Courcouronnes.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45745"
    ],
    "stopPointIds": [
      "41344",
      "471057",
      "471652"
    ]
  },
  {
    "nom": "Faidherbe - Chaligny",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "42980"
    ],
    "stopPointIds": [
      "22204",
      "463172"
    ]
  },
  {
    "nom": "Falguière",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "42981"
    ],
    "stopPointIds": [
      "22056",
      "463173"
    ]
  },
  {
    "nom": "Faremoutiers - Pommeuse",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Pommeuse.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47199"
    ],
    "stopPointIds": [
      "41047",
      "471086"
    ]
  },
  {
    "nom": "Faubourg de l'Arche",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Courbevoie.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "479058"
    ],
    "stopPointIds": [
      "23433",
      "24432"
    ]
  },
  {
    "nom": "Ferme Neuve",
    "lignes": [
      "T12"
    ],
    "resume": "Station située à Grigny.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "486971"
    ],
    "stopPointIds": [
      "486970",
      "486972"
    ]
  },
  {
    "nom": "Ferrières - Fontenay",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Fontenay-sur-Loing.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411488"
    ],
    "stopPointIds": [
      "411487",
      "470635",
      "471885"
    ]
  },
  {
    "nom": "Félix Faure",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "42984"
    ],
    "stopPointIds": [
      "22189",
      "463163"
    ]
  },
  {
    "nom": "Filles du Calvaire",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris 11e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "58727"
    ],
    "stopPointIds": [
      "22200",
      "463048"
    ]
  },
  {
    "nom": "Fontaine Michalon",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Antony.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43124"
    ],
    "stopPointIds": [
      "412835",
      "473954",
      "473955"
    ]
  },
  {
    "nom": "Fontaine-le-Port",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Fontaine-le-Port.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43123"
    ],
    "stopPointIds": [
      "41379",
      "470856",
      "471488"
    ]
  },
  {
    "nom": "Fontainebleau - Avon",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Avon.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47911"
    ],
    "stopPointIds": [
      "41372",
      "471198",
      "471830"
    ]
  },
  {
    "nom": "Fontenay-aux-Roses",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Fontenay-aux-Roses.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43125"
    ],
    "stopPointIds": [
      "412840",
      "473952",
      "473953"
    ]
  },
  {
    "nom": "Fontenay-le-Fleury",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Fontenay-le-Fleury.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47884"
    ],
    "stopPointIds": [
      "41232",
      "470834",
      "472685"
    ]
  },
  {
    "nom": "Fontenay-sous-Bois",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Fontenay-sous-Bois.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "47238"
    ],
    "stopPointIds": [
      "412810",
      "473958",
      "473959"
    ]
  },
  {
    "nom": "Fort d'Aubervilliers",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Aubervilliers.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "47891"
    ],
    "stopPointIds": [
      "22393",
      "463179"
    ]
  },
  {
    "nom": "Four - Peary",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Choisy-le-Roi.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479020"
    ],
    "stopPointIds": [
      "479000",
      "479001"
    ]
  },
  {
    "nom": "Fourqueux - Bel Air",
    "lignes": [
      "T13"
    ],
    "resume": "Station située à Saint-Germain-en-Laye.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "480941"
    ],
    "stopPointIds": [
      "480940",
      "481070"
    ]
  },
  {
    "nom": "Franconville - Le Plessis-Bouchard",
    "lignes": [
      "C",
      "H"
    ],
    "resume": "Station située à Franconville.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43126"
    ],
    "stopPointIds": [
      "41087",
      "472303",
      "472994"
    ]
  },
  {
    "nom": "Franklin D. Roosevelt",
    "lignes": [
      "1",
      "9"
    ],
    "resume": "Station située à Paris 8e.",
    "materiel": [
      "MP 05",
      "MF 01"
    ],
    "stopAreaIds": [
      "43026"
    ],
    "stopPointIds": [
      "21931",
      "22082",
      "463180",
      "463181"
    ]
  },
  {
    "nom": "Freinville Sevran",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Sevran.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "47933"
    ],
    "stopPointIds": [
      "472197",
      "472316"
    ]
  },
  {
    "nom": "Frépillon",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Frépillon.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47580"
    ],
    "stopPointIds": [
      "41122",
      "471503",
      "471644"
    ]
  },
  {
    "nom": "Front Populaire",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "58497"
    ],
    "stopPointIds": [
      "24679",
      "463082"
    ]
  },
  {
    "nom": "Gabriel Péri",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Asnières-sur-Seine.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "43042"
    ],
    "stopPointIds": [
      "22234",
      "462953"
    ]
  },
  {
    "nom": "Gagny",
    "lignes": [
      "E"
    ],
    "resume": "Station située à Gagny.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43044"
    ],
    "stopPointIds": [
      "41015",
      "470639",
      "470927",
      "471596",
      "471685"
    ]
  },
  {
    "nom": "Gaîté",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris 14e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "43046"
    ],
    "stopPointIds": [
      "22230",
      "463184"
    ]
  },
  {
    "nom": "Gallieni",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Bagnolet.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "47890"
    ],
    "stopPointIds": [
      "22037",
      "463174"
    ]
  },
  {
    "nom": "Gambetta",
    "lignes": [
      "3",
      "3bis"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "43055"
    ],
    "stopPointIds": [
      "21945",
      "21950",
      "462991",
      "462997"
    ]
  },
  {
    "nom": "Garancières - La Queue",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Garancières.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47903"
    ],
    "stopPointIds": [
      "41235",
      "471183",
      "472146"
    ]
  },
  {
    "nom": "Garches - Marnes-la-Coquette",
    "lignes": [
      "L"
    ],
    "resume": "Station située à Garches.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47770"
    ],
    "stopPointIds": [
      "41174",
      "470956",
      "471297",
      "471447"
    ]
  },
  {
    "nom": "Gare d'Austerlitz",
    "lignes": [
      "5",
      "10",
      "C"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MF 01",
      "MF 67",
      "MF 19 CC",
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43072",
      "462352"
    ],
    "stopPointIds": [
      "21967",
      "21981",
      "41333",
      "463023",
      "463024",
      "471077",
      "471167",
      "471233",
      "471335",
      "471473",
      "471592",
      "471646",
      "471971",
      "471976",
      "472323",
      "472344",
      "472570",
      "472582",
      "472695",
      "472718",
      "472724",
      "472865",
      "472890",
      "472959"
    ]
  },
  {
    "nom": "Gare de l'Est",
    "lignes": [
      "4",
      "5",
      "7",
      "P"
    ],
    "resume": "Station située à Paris 10e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MF 01",
      "MF 77",
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "43138",
      "470519"
    ],
    "stopPointIds": [
      "22013",
      "22148",
      "22387",
      "41010",
      "463001",
      "463021",
      "463022",
      "470704",
      "470734",
      "470740",
      "470833",
      "470866",
      "470879",
      "470947",
      "471134",
      "471211",
      "471309",
      "471326",
      "471533",
      "471559",
      "471604",
      "471607",
      "471696",
      "471856",
      "472048",
      "472095",
      "472338",
      "472502",
      "472523",
      "472527",
      "472541",
      "472655",
      "472692",
      "472723",
      "472869",
      "472949"
    ]
  },
  {
    "nom": "Gare de Lyon",
    "lignes": [
      "1",
      "14",
      "A",
      "D",
      "R"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MP 05",
      "MP 14 CA",
      "MI 09",
      "MI 2N Altéo",
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43153",
      "470195"
    ],
    "stopPointIds": [
      "21958",
      "22083",
      "41396",
      "463046",
      "463197",
      "470670",
      "470743",
      "470747",
      "470751",
      "470907",
      "470915",
      "470924",
      "471073",
      "471094",
      "471200",
      "471393",
      "471451",
      "471509",
      "471520",
      "471548",
      "471759",
      "472015",
      "472033",
      "472063",
      "472088",
      "472128",
      "472267",
      "472348",
      "472510",
      "472577",
      "472743",
      "474062",
      "474065"
    ]
  },
  {
    "nom": "Gare du Nord",
    "lignes": [
      "4",
      "5",
      "B",
      "D",
      "H",
      "K"
    ],
    "resume": "Station située à Paris 10e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MF 01",
      "MI 79",
      "MI 84",
      "Z 20500",
      "RER NG",
      "Regio 2N",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "462394",
      "462941"
    ],
    "stopPointIds": [
      "22007",
      "22149",
      "41071",
      "463182",
      "463183",
      "470724",
      "470728",
      "470817",
      "470821",
      "471022",
      "471102",
      "471186",
      "471240",
      "471328",
      "471482",
      "471691",
      "471796",
      "471869",
      "471936",
      "471950",
      "471968",
      "472022",
      "472030",
      "472034",
      "472111",
      "472263",
      "472354",
      "472356",
      "472378",
      "472560",
      "472757",
      "472814",
      "472856",
      "472861",
      "472950",
      "472961"
    ]
  },
  {
    "nom": "Gare Montparnasse",
    "lignes": [
      "4",
      "6",
      "12",
      "13",
      "N"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MP 73",
      "MP 89 CC",
      "MF 67",
      "MF 77",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43238",
      "58578"
    ],
    "stopPointIds": [
      "22038",
      "22143",
      "22156",
      "22157",
      "41203",
      "41204",
      "462954",
      "462955",
      "462980",
      "462996",
      "470679",
      "471135",
      "471299",
      "471521",
      "471552",
      "471554",
      "471566",
      "471567",
      "471650",
      "471693",
      "471704",
      "471733",
      "471742",
      "471794",
      "471820",
      "471918",
      "471935",
      "472173",
      "472308",
      "472319",
      "472325",
      "472451",
      "472624",
      "472627",
      "472691",
      "472888",
      "472895",
      "472964"
    ]
  },
  {
    "nom": "Gare Saint-Lazare",
    "lignes": [
      "3",
      "12",
      "13",
      "14",
      "J",
      "L"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 67",
      "MF 77",
      "MP 14 CA",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "462374",
      "58566"
    ],
    "stopPointIds": [
      "21962",
      "21963",
      "21964",
      "22218",
      "41194",
      "462969",
      "462970",
      "462971",
      "462972",
      "470624",
      "470674",
      "470692",
      "470776",
      "471063",
      "471064",
      "471150",
      "471238",
      "471341",
      "471495",
      "471658",
      "471724",
      "471940",
      "472013",
      "472070",
      "472102",
      "472110",
      "472142",
      "472208",
      "472273",
      "472318",
      "472368",
      "472519",
      "472546",
      "472852",
      "472934"
    ]
  },
  {
    "nom": "Gargan",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Les Pavillons-sous-Bois.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "43128"
    ],
    "stopPointIds": [
      "471825",
      "472211",
      "472857"
    ]
  },
  {
    "nom": "Gargenville",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Gargenville.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43129"
    ],
    "stopPointIds": [
      "41152",
      "471040",
      "472345"
    ]
  },
  {
    "nom": "Garges - Sarcelles",
    "lignes": [
      "D",
      "T5"
    ],
    "resume": "Station située à Garges-lès-Gonesse.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N",
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "43251",
      "473306"
    ],
    "stopPointIds": [
      "411426",
      "470910",
      "471853",
      "473018",
      "479383",
      "479384"
    ]
  },
  {
    "nom": "Garibaldi",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Saint-Ouen.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "43252"
    ],
    "stopPointIds": [
      "22244",
      "462977"
    ]
  },
  {
    "nom": "Gaston Roulaud",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Bobigny.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "47349"
    ],
    "stopPointIds": [
      "22261",
      "23307"
    ]
  },
  {
    "nom": "Gazeran",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Gazeran.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "46832"
    ],
    "stopPointIds": [
      "41230",
      "471264",
      "472093"
    ]
  },
  {
    "nom": "Gennevilliers",
    "lignes": [
      "C",
      "T1"
    ],
    "resume": "Station située à Gennevilliers.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "43130",
      "462332"
    ],
    "stopPointIds": [
      "23281",
      "23287",
      "41075",
      "472491",
      "472623"
    ]
  },
  {
    "nom": "Gentilly",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Gentilly.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "45877"
    ],
    "stopPointIds": [
      "412838",
      "473956",
      "473957"
    ]
  },
  {
    "nom": "George V",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris 8e.",
    "materiel": [
      "MP 05"
    ],
    "stopAreaIds": [
      "43283"
    ],
    "stopPointIds": [
      "22084",
      "463185"
    ]
  },
  {
    "nom": "Georges Brassens",
    "lignes": [
      "T3a"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "43285"
    ],
    "stopPointIds": [
      "24113",
      "24131"
    ]
  },
  {
    "nom": "Georges Millandy",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Meudon.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "59147"
    ],
    "stopPointIds": [
      "41673",
      "41674"
    ]
  },
  {
    "nom": "Georges Pompidou",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Clamart.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "50800"
    ],
    "stopPointIds": [
      "2343",
      "2346"
    ]
  },
  {
    "nom": "Germaine Tailleferre",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Vitry-sur-Seine.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479021"
    ],
    "stopPointIds": [
      "478998",
      "478999"
    ]
  },
  {
    "nom": "Gif-sur-Yvette",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Gif-sur-Yvette.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "47888"
    ],
    "stopPointIds": [
      "412851",
      "473945",
      "473946"
    ]
  },
  {
    "nom": "Gilbert Bonnemaison",
    "lignes": [
      "T8"
    ],
    "resume": "Station située à Épinay-sur-Seine.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "59249"
    ],
    "stopPointIds": [
      "42111",
      "42113"
    ]
  },
  {
    "nom": "Gisors",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Gisors.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "59301"
    ],
    "stopPointIds": [
      "411340",
      "471054",
      "471908",
      "472177",
      "472480"
    ]
  },
  {
    "nom": "Glacière",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "45276"
    ],
    "stopPointIds": [
      "22173",
      "463186"
    ]
  },
  {
    "nom": "Goncourt",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris 11e.",
    "materiel": [
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "43298"
    ],
    "stopPointIds": [
      "21996",
      "463187"
    ]
  },
  {
    "nom": "Gonesse",
    "lignes": [
      "17"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MR3V"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Goussainville",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Goussainville.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47876"
    ],
    "stopPointIds": [
      "41099",
      "471895",
      "472420",
      "472622"
    ]
  },
  {
    "nom": "Grand Bourg",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Ris-Orangis.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45860"
    ],
    "stopPointIds": [
      "41343",
      "471416",
      "472504"
    ]
  },
  {
    "nom": "Grands Boulevards",
    "lignes": [
      "8",
      "9"
    ],
    "resume": "Station située à Paris 2e.",
    "materiel": [
      "MF 77",
      "MF 01"
    ],
    "stopAreaIds": [
      "43310"
    ],
    "stopPointIds": [
      "21909",
      "22197",
      "463049",
      "463058"
    ]
  },
  {
    "nom": "Gravigny Balizy",
    "lignes": [
      "T12"
    ],
    "resume": "Station située à Longjumeau.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "486890"
    ],
    "stopPointIds": [
      "486889",
      "486891"
    ]
  },
  {
    "nom": "Gretz-Armainvilliers",
    "lignes": [
      "E"
    ],
    "resume": "Station située à Gretz-Armainvilliers.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43131"
    ],
    "stopPointIds": [
      "41031",
      "470729",
      "471886",
      "472086",
      "472669"
    ]
  },
  {
    "nom": "Grigny Centre",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Grigny.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43132"
    ],
    "stopPointIds": [
      "41345",
      "471145",
      "471218"
    ]
  },
  {
    "nom": "Gros Noyer Saint-Prix",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Ermont.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "46482"
    ],
    "stopPointIds": [
      "41117",
      "472694",
      "472936"
    ]
  },
  {
    "nom": "Groslay",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Groslay.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43133"
    ],
    "stopPointIds": [
      "411424",
      "470675",
      "471808"
    ]
  },
  {
    "nom": "Guérard - La Celle-sur-Morin",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Guérard.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47205"
    ],
    "stopPointIds": [
      "41046",
      "472269"
    ]
  },
  {
    "nom": "Guillerval",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Guillerval.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43134"
    ],
    "stopPointIds": [
      "41297",
      "471199",
      "471363"
    ]
  },
  {
    "nom": "Guy Môquet",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "43333"
    ],
    "stopPointIds": [
      "22228",
      "462952"
    ]
  },
  {
    "nom": "Guynemer",
    "lignes": [
      "T5"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "50685"
    ],
    "stopPointIds": [
      "28864",
      "28865"
    ]
  },
  {
    "nom": "Haussmann Saint-Lazare",
    "lignes": [
      "E"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "58718"
    ],
    "stopPointIds": [
      "41127",
      "471272",
      "471498",
      "472516",
      "472796"
    ]
  },
  {
    "nom": "Havre-Caumartin",
    "lignes": [
      "3",
      "9"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 67",
      "MF 01"
    ],
    "stopAreaIds": [
      "462375"
    ],
    "stopPointIds": [
      "21906",
      "21926",
      "463188",
      "463189"
    ]
  },
  {
    "nom": "Henri Farman",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "45358"
    ],
    "stopPointIds": [
      "460556",
      "460557"
    ]
  },
  {
    "nom": "Herblay",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Herblay.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47603"
    ],
    "stopPointIds": [
      "41169",
      "470983",
      "472032"
    ]
  },
  {
    "nom": "Hélène Boucher (Orlytech)",
    "lignes": [
      "T7"
    ],
    "resume": "Station située à Paray-Vieille-Poste.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "58813"
    ],
    "stopPointIds": [
      "29893",
      "35928"
    ]
  },
  {
    "nom": "Héricy",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Héricy.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47145"
    ],
    "stopPointIds": [
      "41380",
      "471380",
      "471779"
    ]
  },
  {
    "nom": "Hoche",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Pantin.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "43364"
    ],
    "stopPointIds": [
      "22017",
      "463017"
    ]
  },
  {
    "nom": "Honoré De Balzac",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "45482"
    ],
    "stopPointIds": [
      "462438",
      "462445"
    ]
  },
  {
    "nom": "Houdan",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Houdan.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47935"
    ],
    "stopPointIds": [
      "41238",
      "471032",
      "472346"
    ]
  },
  {
    "nom": "Houilles - Carrières-sur-Seine",
    "lignes": [
      "A",
      "J",
      "L"
    ],
    "resume": "Station située à Houilles.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43082"
    ],
    "stopPointIds": [
      "411357",
      "470891",
      "471638",
      "472203",
      "472389",
      "472409"
    ]
  },
  {
    "nom": "Hôpital Avicenne",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Bobigny.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "43373"
    ],
    "stopPointIds": [
      "23297",
      "23304"
    ]
  },
  {
    "nom": "Hôpital Béclère",
    "lignes": [
      "T6",
      "T10"
    ],
    "resume": "Station située à Clamart.",
    "materiel": [
      "Translohr STE6",
      "Citadis 405"
    ],
    "stopAreaIds": [
      "47746"
    ],
    "stopPointIds": [
      "2342",
      "2344",
      "486812",
      "486839"
    ]
  },
  {
    "nom": "Hôpital Bicêtre",
    "lignes": [
      "14"
    ],
    "resume": "Station située à Le Kremlin-Bicêtre.",
    "materiel": [
      "MP 14 CA"
    ],
    "stopAreaIds": [
      "490840"
    ],
    "stopPointIds": [
      "490839",
      "490849"
    ]
  },
  {
    "nom": "Hôpital de Montfermeil",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Montfermeil.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "43978"
    ],
    "stopPointIds": [
      "478656",
      "478660"
    ]
  },
  {
    "nom": "Hôpital Delafontaine",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "43375"
    ],
    "stopPointIds": [
      "460549",
      "460550"
    ]
  },
  {
    "nom": "Hôpital Robert Debré",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "45616"
    ],
    "stopPointIds": [
      "24410",
      "24418"
    ]
  },
  {
    "nom": "Hôtel de Ville",
    "lignes": [
      "1",
      "11"
    ],
    "resume": "Station située à Paris 4e.",
    "materiel": [
      "MP 05",
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "470524"
    ],
    "stopPointIds": [
      "21990",
      "22091",
      "463061",
      "463080"
    ]
  },
  {
    "nom": "Hôtel de Ville de Bobigny",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Bobigny.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "43390"
    ],
    "stopPointIds": [
      "24425",
      "37466"
    ]
  },
  {
    "nom": "Hôtel de Ville de la Courneuve",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à La Courneuve.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "46120"
    ],
    "stopPointIds": [
      "23301",
      "24428"
    ]
  },
  {
    "nom": "Iéna",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "43395"
    ],
    "stopPointIds": [
      "21927",
      "463190"
    ]
  },
  {
    "nom": "Igny",
    "lignes": [
      "V"
    ],
    "resume": "Station située à Igny.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43083"
    ],
    "stopPointIds": [
      "41243",
      "471020",
      "472687"
    ]
  },
  {
    "nom": "Inovel Parc Nord",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Vélizy-Villacoublay.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "44285"
    ],
    "stopPointIds": [
      "2327",
      "2333"
    ]
  },
  {
    "nom": "Invalides",
    "lignes": [
      "8",
      "13",
      "C"
    ],
    "resume": "Station située à Paris 7e.",
    "materiel": [
      "MF 77",
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43407",
      "470540"
    ],
    "stopPointIds": [
      "22185",
      "22193",
      "41208",
      "463198",
      "463199",
      "472193",
      "472358",
      "472392",
      "472511",
      "495052"
    ]
  },
  {
    "nom": "Isles - Armentières - Congis",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Isles-les-Meldeuses.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47484"
    ],
    "stopPointIds": [
      "41064",
      "471458",
      "472702"
    ]
  },
  {
    "nom": "Issou - Porcheville",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Issou.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "46975"
    ],
    "stopPointIds": [
      "41153",
      "471290",
      "473015"
    ]
  },
  {
    "nom": "Issy",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Issy-les-Moulineaux.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43084"
    ],
    "stopPointIds": [
      "41212",
      "471718",
      "472515"
    ]
  },
  {
    "nom": "Issy (RER)",
    "lignes": [
      "15"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MR6V"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Issy - Val de Seine",
    "lignes": [
      "C",
      "T2"
    ],
    "resume": "Station située à Issy-les-Moulineaux.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Citadis 302"
    ],
    "stopAreaIds": [
      "462357",
      "473392"
    ],
    "stopPointIds": [
      "25635",
      "25638",
      "41227",
      "470792",
      "471953"
    ]
  },
  {
    "nom": "Ivry-sur-Seine",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Ivry-sur-Seine.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "46366"
    ],
    "stopPointIds": [
      "41315",
      "471391",
      "471945"
    ]
  },
  {
    "nom": "Jacqueline Auriol",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Colombes.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "47413"
    ],
    "stopPointIds": [
      "23428",
      "23430"
    ]
  },
  {
    "nom": "Jacques Bonsergent",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris 10e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "43417"
    ],
    "stopPointIds": [
      "22011",
      "463191"
    ]
  },
  {
    "nom": "Jacques Prévert",
    "lignes": [
      "T5"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "58639"
    ],
    "stopPointIds": [
      "28855",
      "28861"
    ]
  },
  {
    "nom": "Jacques-Henri Lartigue",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Issy-les-Moulineaux.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "43420"
    ],
    "stopPointIds": [
      "23438",
      "23439"
    ]
  },
  {
    "nom": "Jardin Parisien",
    "lignes": [
      "T10"
    ],
    "resume": "Station située à Clamart.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "486811"
    ],
    "stopPointIds": [
      "486810",
      "486840"
    ]
  },
  {
    "nom": "Jasmin",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "43423"
    ],
    "stopPointIds": [
      "21928",
      "463038"
    ]
  },
  {
    "nom": "Jaurès",
    "lignes": [
      "2",
      "5",
      "7bis"
    ],
    "resume": "Station située à Paris 10e.",
    "materiel": [
      "MF 01",
      "MF 88"
    ],
    "stopAreaIds": [
      "43425"
    ],
    "stopPointIds": [
      "21952",
      "22118",
      "24680",
      "462981",
      "463074",
      "463095"
    ]
  },
  {
    "nom": "Javel",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "45346"
    ],
    "stopPointIds": [
      "41211",
      "470744",
      "472653"
    ]
  },
  {
    "nom": "Javel - André Citroën",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "462371"
    ],
    "stopPointIds": [
      "21972",
      "462958"
    ]
  },
  {
    "nom": "Jean Moulin",
    "lignes": [
      "T3a"
    ],
    "resume": "Station située à Paris 14e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "43462"
    ],
    "stopPointIds": [
      "24109",
      "24132"
    ]
  },
  {
    "nom": "Jean Rostand",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Bobigny.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "47334"
    ],
    "stopPointIds": [
      "22259",
      "22260"
    ]
  },
  {
    "nom": "Jean Vilar",
    "lignes": [
      "T8"
    ],
    "resume": "Station située à Villetaneuse.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "59327"
    ],
    "stopPointIds": [
      "42128",
      "42131"
    ]
  },
  {
    "nom": "Joigny",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Joigny.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411467"
    ],
    "stopPointIds": [
      "411466",
      "471308",
      "471677",
      "471978",
      "472742"
    ]
  },
  {
    "nom": "Joinville-le-Pont",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Joinville-le-Pont.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "43135"
    ],
    "stopPointIds": [
      "40932",
      "473943",
      "473944",
      "473950",
      "473951"
    ]
  },
  {
    "nom": "Joncherolles",
    "lignes": [
      "T5"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "58638"
    ],
    "stopPointIds": [
      "28849",
      "28858"
    ]
  },
  {
    "nom": "Jourdain",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "43483"
    ],
    "stopPointIds": [
      "21995",
      "463192"
    ]
  },
  {
    "nom": "Jouy",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Jouy.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411498"
    ],
    "stopPointIds": [
      "411497",
      "471066",
      "471320"
    ]
  },
  {
    "nom": "Jouy-en-Josas",
    "lignes": [
      "V"
    ],
    "resume": "Station située à Jouy-en-Josas.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43136"
    ],
    "stopPointIds": [
      "41240",
      "471791",
      "472383"
    ]
  },
  {
    "nom": "Jules Joffrin",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "479055"
    ],
    "stopPointIds": [
      "22054",
      "463065"
    ]
  },
  {
    "nom": "Jussieu",
    "lignes": [
      "7",
      "10"
    ],
    "resume": "Station située à Paris 5e.",
    "materiel": [
      "MF 77",
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "43493"
    ],
    "stopPointIds": [
      "21968",
      "22386",
      "463077",
      "463078"
    ]
  },
  {
    "nom": "Juvisy",
    "lignes": [
      "C",
      "D"
    ],
    "resume": "Station située à Juvisy-sur-Orge.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45739"
    ],
    "stopPointIds": [
      "41309",
      "470750",
      "471148",
      "471164",
      "471215",
      "471494",
      "471959",
      "471960",
      "472085",
      "472094",
      "472396",
      "472482",
      "472668"
    ]
  },
  {
    "nom": "Juziers",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Juziers.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43137"
    ],
    "stopPointIds": [
      "41151",
      "471760",
      "472000"
    ]
  },
  {
    "nom": "Kléber",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "43498"
    ],
    "stopPointIds": [
      "22170",
      "463102"
    ]
  },
  {
    "nom": "L'Abbaye",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Livry-Gargan.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "47936"
    ],
    "stopPointIds": [
      "472077",
      "472657"
    ]
  },
  {
    "nom": "L'Etang - Les Sablons",
    "lignes": [
      "T13"
    ],
    "resume": "Station située à L'Étang-la-Ville.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "480931"
    ],
    "stopPointIds": [
      "480930",
      "481071"
    ]
  },
  {
    "nom": "L'Étang-la-Ville",
    "lignes": [
      "L"
    ],
    "resume": "Station située à L'Étang-la-Ville.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47937"
    ],
    "stopPointIds": [
      "41186",
      "471255",
      "471846"
    ]
  },
  {
    "nom": "L'Haÿ-les-Roses",
    "lignes": [
      "14"
    ],
    "resume": "Station située à L'Haÿ-les-Roses.",
    "materiel": [
      "MP 14 CA"
    ],
    "stopAreaIds": [
      "490838"
    ],
    "stopPointIds": [
      "490837",
      "490850"
    ]
  },
  {
    "nom": "L'Isle-Adam - Parmain",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Parmain.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47589"
    ],
    "stopPointIds": [
      "41110",
      "470809",
      "471307"
    ]
  },
  {
    "nom": "L'Île-Saint-Denis",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à L'Île-Saint-Denis.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "46331"
    ],
    "stopPointIds": [
      "23308",
      "23309"
    ]
  },
  {
    "nom": "L'Onde (Maison des Arts)",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Vélizy-Villacoublay.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "43501"
    ],
    "stopPointIds": [
      "2329",
      "41852"
    ]
  },
  {
    "nom": "La Barre Ormesson",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Deuil-la-Barre.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "46470"
    ],
    "stopPointIds": [
      "41074",
      "472161",
      "472585"
    ]
  },
  {
    "nom": "La Belle Epine",
    "lignes": [
      "T7"
    ],
    "resume": "Station située à Rungis.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "47688"
    ],
    "stopPointIds": [
      "35937",
      "35941"
    ]
  },
  {
    "nom": "La Borne Blanche",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Orry-la-Ville.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411418"
    ],
    "stopPointIds": [
      "411417",
      "471184",
      "472140"
    ]
  },
  {
    "nom": "La Briqueterie",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Ivry-sur-Seine.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479014"
    ],
    "stopPointIds": [
      "478991",
      "478995"
    ]
  },
  {
    "nom": "La Celle-Saint-Cloud",
    "lignes": [
      "L"
    ],
    "resume": "Station située à La Celle-Saint-Cloud.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47880"
    ],
    "stopPointIds": [
      "41182",
      "471635",
      "471931"
    ]
  },
  {
    "nom": "La Chapelle",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "43524"
    ],
    "stopPointIds": [
      "22119",
      "462982"
    ]
  },
  {
    "nom": "La Courneuve - 8 Mai 1945",
    "lignes": [
      "7",
      "T1"
    ],
    "resume": "Station située à La Courneuve.",
    "materiel": [
      "MF 77",
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "42151",
      "470546"
    ],
    "stopPointIds": [
      "22395",
      "22629",
      "24426",
      "463200"
    ]
  },
  {
    "nom": "La Courneuve - Aubervilliers",
    "lignes": [
      "B"
    ],
    "resume": "Station située à La Courneuve.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43140"
    ],
    "stopPointIds": [
      "40990",
      "471549",
      "471805",
      "472178",
      "472855"
    ]
  },
  {
    "nom": "La Courneuve - Six Routes",
    "lignes": [
      "16",
      "17",
      "T1"
    ],
    "resume": "Station située à La Courneuve.",
    "materiel": [
      "MR3V",
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "46100"
    ],
    "stopPointIds": [
      "22630",
      "22631"
    ]
  },
  {
    "nom": "La Croix de Berny",
    "lignes": [
      "B",
      "T10"
    ],
    "resume": "Station située à Antony.",
    "materiel": [
      "MI 79",
      "MI 84",
      "Citadis 405"
    ],
    "stopAreaIds": [
      "46007",
      "486835"
    ],
    "stopPointIds": [
      "412830",
      "473947",
      "473949",
      "486834",
      "486841"
    ]
  },
  {
    "nom": "La Défense",
    "lignes": [
      "1",
      "15",
      "A",
      "E",
      "L",
      "U",
      "T2"
    ],
    "resume": "Station située à Puteaux.",
    "materiel": [
      "MP 05",
      "MR6V",
      "MI 09",
      "MI 2N Altéo",
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien",
      "Z 8800",
      "Citadis 302"
    ],
    "stopAreaIds": [
      "462395",
      "470548",
      "470549"
    ],
    "stopPointIds": [
      "22101",
      "25641",
      "25642",
      "40951",
      "463193",
      "470974",
      "472137",
      "472283",
      "473934",
      "473935",
      "473936",
      "473937",
      "484165",
      "484166"
    ]
  },
  {
    "nom": "La Dhuys",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Rosny-sous-Bois.",
    "materiel": [
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "490769"
    ],
    "stopPointIds": [
      "490768",
      "490791"
    ]
  },
  {
    "nom": "La Ferme",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Bobigny.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "52382"
    ],
    "stopPointIds": [
      "23298",
      "23299"
    ]
  },
  {
    "nom": "La Ferté-Alais",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Baulne.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43142"
    ],
    "stopPointIds": [
      "41351",
      "470938",
      "472418",
      "472588"
    ]
  },
  {
    "nom": "La Ferté-Gaucher",
    "lignes": [
      "P"
    ],
    "resume": "Station située à La Ferté-Gaucher.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47938"
    ],
    "stopPointIds": [
      "41058"
    ]
  },
  {
    "nom": "La Ferté-Milon",
    "lignes": [
      "P"
    ],
    "resume": "Station située à La Ferté-Milon.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "411372"
    ],
    "stopPointIds": [
      "411371",
      "471295",
      "472149",
      "472990"
    ]
  },
  {
    "nom": "La Ferté-sous-Jouarre",
    "lignes": [
      "P"
    ],
    "resume": "Station située à La Ferté-sous-Jouarre.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "43246"
    ],
    "stopPointIds": [
      "41062",
      "472057",
      "472386"
    ]
  },
  {
    "nom": "La Fourche",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "43548"
    ],
    "stopPointIds": [
      "22227",
      "462975",
      "478395"
    ]
  },
  {
    "nom": "La Fraternelle",
    "lignes": [
      "T7"
    ],
    "resume": "Station située à Rungis.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "473468"
    ],
    "stopPointIds": [
      "29900",
      "35942"
    ]
  },
  {
    "nom": "La Frette - Montigny",
    "lignes": [
      "J"
    ],
    "resume": "Station située à La Frette-sur-Seine.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43143"
    ],
    "stopPointIds": [
      "41168",
      "472880",
      "473021"
    ]
  },
  {
    "nom": "La Garenne-Colombes",
    "lignes": [
      "L"
    ],
    "resume": "Station située à La Garenne-Colombes.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47412"
    ],
    "stopPointIds": [
      "41195",
      "471865",
      "471904",
      "472301",
      "472998"
    ]
  },
  {
    "nom": "La Grande-Paroisse",
    "lignes": [
      "R"
    ],
    "resume": "Station située à La Grande-Paroisse.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43144"
    ],
    "stopPointIds": [
      "41384",
      "470877",
      "471700"
    ]
  },
  {
    "nom": "La Hacquinière",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Bures-sur-Yvette.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "47046"
    ],
    "stopPointIds": [
      "412850",
      "473940",
      "473942"
    ]
  },
  {
    "nom": "La Motte-Picquet - Grenelle",
    "lignes": [
      "6",
      "8",
      "10"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MP 73",
      "MP 89 CC",
      "MF 77",
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "43566"
    ],
    "stopPointIds": [
      "21969",
      "22162",
      "22183",
      "463194",
      "463201",
      "463202"
    ]
  },
  {
    "nom": "La Muette",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "43567"
    ],
    "stopPointIds": [
      "21929",
      "463203"
    ]
  },
  {
    "nom": "La Norville - Saint-Germain-lès-Arpajon",
    "lignes": [
      "C"
    ],
    "resume": "Station située à La Norville.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "47939"
    ],
    "stopPointIds": [
      "41317",
      "470828",
      "472213"
    ]
  },
  {
    "nom": "La Noue",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Villeneuve-la-Garenne.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "47355"
    ],
    "stopPointIds": [
      "23294",
      "460552"
    ]
  },
  {
    "nom": "La Plaine Stade de France",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43145"
    ],
    "stopPointIds": [
      "411369",
      "471426",
      "471680",
      "472548",
      "472711"
    ]
  },
  {
    "nom": "La Tour-Maubourg",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris 7e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "43409"
    ],
    "stopPointIds": [
      "22192",
      "463204"
    ]
  },
  {
    "nom": "La Varenne - Chennevières",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Saint-Maur-des-Fossés.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "43146"
    ],
    "stopPointIds": [
      "40946",
      "473928",
      "473929",
      "473938",
      "473939"
    ]
  },
  {
    "nom": "La Verrière",
    "lignes": [
      "N",
      "U"
    ],
    "resume": "Station située à La Verrière.",
    "materiel": [
      "Regio 2N",
      "Z 8800"
    ],
    "stopAreaIds": [
      "43147"
    ],
    "stopPointIds": [
      "41223",
      "470844",
      "471266",
      "471670",
      "472749"
    ]
  },
  {
    "nom": "La Villette Saint-Prest",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Saint-Prest.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411504"
    ],
    "stopPointIds": [
      "411503",
      "471097",
      "471890"
    ]
  },
  {
    "nom": "Lacépède",
    "lignes": [
      "T8"
    ],
    "resume": "Station située à Épinay-sur-Seine.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "50564"
    ],
    "stopPointIds": [
      "42106",
      "42115"
    ]
  },
  {
    "nom": "Lagny - Thorigny",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Thorigny-sur-Marne.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "427872"
    ],
    "stopPointIds": [
      "41051",
      "471091",
      "471095",
      "471127",
      "471998"
    ]
  },
  {
    "nom": "Lamarck - Caulaincourt",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "43600"
    ],
    "stopPointIds": [
      "22055",
      "463205"
    ]
  },
  {
    "nom": "Lamartine",
    "lignes": [
      "T7"
    ],
    "resume": "Station située à Villejuif.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "53692"
    ],
    "stopPointIds": [
      "35945",
      "460559"
    ]
  },
  {
    "nom": "Laplace",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Arcueil.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43607"
    ],
    "stopPointIds": [
      "412837",
      "473926",
      "473927",
      "473932"
    ]
  },
  {
    "nom": "Lardy",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Lardy.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43149"
    ],
    "stopPointIds": [
      "41301",
      "470868",
      "471098"
    ]
  },
  {
    "nom": "Laroche - Migennes",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Migennes.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411479"
    ],
    "stopPointIds": [
      "411478",
      "470654",
      "470912",
      "471443",
      "471471",
      "471543",
      "472181",
      "472555",
      "472924"
    ]
  },
  {
    "nom": "Laumière",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "45581"
    ],
    "stopPointIds": [
      "22012",
      "462999"
    ]
  },
  {
    "nom": "LaVallée",
    "lignes": [
      "T10"
    ],
    "resume": "Station située à Châtenay-Malabry.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "486833"
    ],
    "stopPointIds": [
      "486832",
      "486842"
    ]
  },
  {
    "nom": "Lavilletertre",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Lavilletertre.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "411348"
    ],
    "stopPointIds": [
      "411347",
      "471969",
      "472921"
    ]
  },
  {
    "nom": "Le Blanc-Mesnil",
    "lignes": [
      "16",
      "B"
    ],
    "resume": "Station située à Le Blanc-Mesnil.",
    "materiel": [
      "MR3V",
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "46163"
    ],
    "stopPointIds": [
      "411401",
      "470920",
      "471942",
      "472756",
      "472904"
    ]
  },
  {
    "nom": "Le Bourget",
    "lignes": [
      "B",
      "T11"
    ],
    "resume": "Station située à Le Bourget.",
    "materiel": [
      "MI 79",
      "MI 84",
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "43231",
      "462335"
    ],
    "stopPointIds": [
      "411408",
      "470688",
      "470773",
      "471112",
      "471649",
      "472166",
      "472194",
      "495668"
    ]
  },
  {
    "nom": "Le Bourget–Aéroport",
    "lignes": [
      "17"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MR3V"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Le Bourget–RER",
    "lignes": [
      "16",
      "17"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MR3V"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Le Bras de Fer",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Evry-Courcouronnes.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45850"
    ],
    "stopPointIds": [
      "41347",
      "472200",
      "472534"
    ]
  },
  {
    "nom": "Le Chénay Gagny",
    "lignes": [
      "E"
    ],
    "resume": "Station située à Gagny.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43127"
    ],
    "stopPointIds": [
      "41016",
      "471024",
      "472429",
      "472631",
      "472956"
    ]
  },
  {
    "nom": "Le Coudray-Montceaux",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Le Coudray-Montceaux.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45824"
    ],
    "stopPointIds": [
      "41358",
      "471694",
      "472327"
    ]
  },
  {
    "nom": "Le Guichet",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Orsay.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43232"
    ],
    "stopPointIds": [
      "412847",
      "473898",
      "473902"
    ]
  },
  {
    "nom": "Le Hameau",
    "lignes": [
      "T10"
    ],
    "resume": "Station située à Le Plessis-Robinson.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "486815"
    ],
    "stopPointIds": [
      "486814",
      "486838"
    ]
  },
  {
    "nom": "Le Kremlin-Bicêtre",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Le Kremlin-Bicêtre.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "43643"
    ],
    "stopPointIds": [
      "22398",
      "463107"
    ]
  },
  {
    "nom": "Le Luth",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Gennevilliers.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "46452"
    ],
    "stopPointIds": [
      "23279",
      "23285"
    ]
  },
  {
    "nom": "Le Mesnil-Amelot",
    "lignes": [
      "17"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MR3V"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Le Mée",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Le Mée-sur-Seine.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45784"
    ],
    "stopPointIds": [
      "41369",
      "471577",
      "471717",
      "472333",
      "472899"
    ]
  },
  {
    "nom": "Le Parc de Saint-Maur",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Saint-Maur-des-Fossés.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "43234"
    ],
    "stopPointIds": [
      "412718",
      "473900",
      "473913"
    ]
  },
  {
    "nom": "Le Peletier",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "43656"
    ],
    "stopPointIds": [
      "22382",
      "463206"
    ]
  },
  {
    "nom": "Le Perray",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Le Perray-en-Yvelines.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43235"
    ],
    "stopPointIds": [
      "41226",
      "471229",
      "472553",
      "472843"
    ]
  },
  {
    "nom": "Le Plessis Chenet",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Le Coudray-Montceaux.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45820"
    ],
    "stopPointIds": [
      "41357",
      "471642",
      "472734"
    ]
  },
  {
    "nom": "Le Plessis-Belleville",
    "lignes": [
      "K"
    ],
    "resume": "Station située à Le Plessis-Belleville.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "411405"
    ],
    "stopPointIds": [
      "411404",
      "470886",
      "472518"
    ]
  },
  {
    "nom": "Le Raincy - Villemomble - Montfermeil",
    "lignes": [
      "E"
    ],
    "resume": "Station située à Villemomble.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47901"
    ],
    "stopPointIds": [
      "41014",
      "471874",
      "471977",
      "472187",
      "472799"
    ]
  },
  {
    "nom": "Le Stade",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Colombes.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43236"
    ],
    "stopPointIds": [
      "41136",
      "470625",
      "471754",
      "472443",
      "472955"
    ]
  },
  {
    "nom": "Le Val d'Or",
    "lignes": [
      "L"
    ],
    "resume": "Station située à Saint-Cloud.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "422065"
    ],
    "stopPointIds": [
      "41179",
      "470655",
      "472573",
      "472728"
    ]
  },
  {
    "nom": "Le Vert de Maisons",
    "lignes": [
      "15",
      "D"
    ],
    "resume": "Station située à Maisons-Alfort.",
    "materiel": [
      "MR6V",
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "464040"
    ],
    "stopPointIds": [
      "41338",
      "470788",
      "470883",
      "470984",
      "472241"
    ]
  },
  {
    "nom": "Le Vésinet - Centre",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Le Vésinet.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "53784"
    ],
    "stopPointIds": [
      "412800",
      "473911",
      "473914"
    ]
  },
  {
    "nom": "Le Vésinet - Le Pecq",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Le Vésinet.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "43237"
    ],
    "stopPointIds": [
      "412861",
      "473909",
      "473910",
      "473912",
      "479329"
    ]
  },
  {
    "nom": "Le Village",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Gennevilliers.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "50664"
    ],
    "stopPointIds": [
      "23280",
      "23288"
    ]
  },
  {
    "nom": "Ledru-Rollin",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "43674"
    ],
    "stopPointIds": [
      "22203",
      "463195"
    ]
  },
  {
    "nom": "Les Agnettes",
    "lignes": [
      "13",
      "15"
    ],
    "resume": "Station située à Gennevilliers.",
    "materiel": [
      "MF 77",
      "MR6V"
    ],
    "stopAreaIds": [
      "43693"
    ],
    "stopPointIds": [
      "22232",
      "463207"
    ]
  },
  {
    "nom": "Les Ardoines",
    "lignes": [
      "15",
      "C"
    ],
    "resume": "Station située à Vitry-sur-Seine.",
    "materiel": [
      "MR6V",
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43227"
    ],
    "stopPointIds": [
      "41291",
      "470975",
      "471747"
    ]
  },
  {
    "nom": "Les Baconnets",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Antony.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43228"
    ],
    "stopPointIds": [
      "412834",
      "473905",
      "473906"
    ]
  },
  {
    "nom": "Les Béatus",
    "lignes": [
      "T8"
    ],
    "resume": "Station située à Épinay-sur-Seine.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "50566"
    ],
    "stopPointIds": [
      "42110",
      "42114"
    ]
  },
  {
    "nom": "Les Boullereaux Champigny",
    "lignes": [
      "E"
    ],
    "resume": "Station située à Champigny-sur-Marne.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "58267"
    ],
    "stopPointIds": [
      "41021",
      "471827",
      "472632"
    ]
  },
  {
    "nom": "Les Cholettes",
    "lignes": [
      "T5"
    ],
    "resume": "Station située à Sarcelles.",
    "materiel": [
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "59018"
    ],
    "stopPointIds": [
      "28874",
      "28876"
    ]
  },
  {
    "nom": "Les Clairières de Verneuil",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Verneuil-sur-Seine.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "54249"
    ],
    "stopPointIds": [
      "41199",
      "472100",
      "472539"
    ]
  },
  {
    "nom": "Les Coquetiers",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Villemomble.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "46516"
    ],
    "stopPointIds": [
      "471005",
      "471008"
    ]
  },
  {
    "nom": "Les Coteaux",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Saint-Cloud.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "47370"
    ],
    "stopPointIds": [
      "22300",
      "22301"
    ]
  },
  {
    "nom": "Les Essarts-le-Roi",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Les Essarts-le-Roi.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43229"
    ],
    "stopPointIds": [
      "41225",
      "471993",
      "472011"
    ]
  },
  {
    "nom": "Les Fauvelles",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à La Garenne-Colombes.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "43729"
    ],
    "stopPointIds": [
      "23434",
      "23435"
    ]
  },
  {
    "nom": "Les Flanades",
    "lignes": [
      "T5"
    ],
    "resume": "Station située à Sarcelles.",
    "materiel": [
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "43013"
    ],
    "stopPointIds": [
      "28868",
      "28872"
    ]
  },
  {
    "nom": "Les Gobelins",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "43737"
    ],
    "stopPointIds": [
      "22383",
      "463216"
    ]
  },
  {
    "nom": "Les Grésillons",
    "lignes": [
      "15",
      "C"
    ],
    "resume": "Station située à Gennevilliers.",
    "materiel": [
      "MR6V",
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43230"
    ],
    "stopPointIds": [
      "41082",
      "470819",
      "472813"
    ]
  },
  {
    "nom": "Les Halles",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris 1er.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "417675"
    ],
    "stopPointIds": [
      "22146",
      "463208"
    ]
  },
  {
    "nom": "Les Milons",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Saint-Cloud.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "51611"
    ],
    "stopPointIds": [
      "23442",
      "23443"
    ]
  },
  {
    "nom": "Les Mobiles",
    "lignes": [
      "T8"
    ],
    "resume": "Station située à Épinay-sur-Seine.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "47362"
    ],
    "stopPointIds": [
      "42103",
      "42107"
    ]
  },
  {
    "nom": "Les Moulineaux",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Issy-les-Moulineaux.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "43765"
    ],
    "stopPointIds": [
      "22297",
      "23440"
    ]
  },
  {
    "nom": "Les Mureaux",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Les Mureaux.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47881"
    ],
    "stopPointIds": [
      "41200",
      "470770",
      "471027",
      "471678",
      "472868"
    ]
  },
  {
    "nom": "Les Noues",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Goussainville.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47968"
    ],
    "stopPointIds": [
      "41098",
      "471529",
      "472215"
    ]
  },
  {
    "nom": "Les Pavillons-sous-Bois",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Les Pavillons-sous-Bois.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "46521"
    ],
    "stopPointIds": [
      "471878",
      "472503"
    ]
  },
  {
    "nom": "Les Peintres",
    "lignes": [
      "T10"
    ],
    "resume": "Station située à Châtenay-Malabry.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "486827"
    ],
    "stopPointIds": [
      "486826",
      "486845"
    ]
  },
  {
    "nom": "Les Portes de Saint-Cyr",
    "lignes": [
      "T13"
    ],
    "resume": "Station située à Versailles.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "480937"
    ],
    "stopPointIds": [
      "480936",
      "481075"
    ]
  },
  {
    "nom": "Les Sablons",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Neuilly-sur-Seine.",
    "materiel": [
      "MP 05"
    ],
    "stopAreaIds": [
      "43785"
    ],
    "stopPointIds": [
      "22100",
      "463217"
    ]
  },
  {
    "nom": "Les Saules",
    "lignes": [
      "C",
      "T9"
    ],
    "resume": "Station située à Orly.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Citadis 405"
    ],
    "stopAreaIds": [
      "46298",
      "478984"
    ],
    "stopPointIds": [
      "41328",
      "470850",
      "472967",
      "478983",
      "478985"
    ]
  },
  {
    "nom": "Les Vallées",
    "lignes": [
      "L"
    ],
    "resume": "Station située à Colombes.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47969"
    ],
    "stopPointIds": [
      "41196",
      "471911",
      "472646"
    ]
  },
  {
    "nom": "Les Yvris Noisy-le-Grand",
    "lignes": [
      "E"
    ],
    "resume": "Station située à Noisy-le-Grand.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "58288"
    ],
    "stopPointIds": [
      "41023",
      "471169",
      "472408"
    ]
  },
  {
    "nom": "Léon Blum",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Livry-Gargan.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "43430"
    ],
    "stopPointIds": [
      "478653",
      "478658"
    ]
  },
  {
    "nom": "Liancourt-Saint-Pierre",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Liancourt-Saint-Pierre.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "411342"
    ],
    "stopPointIds": [
      "411341",
      "470645",
      "471023"
    ]
  },
  {
    "nom": "Liberté",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Charenton-le-Pont.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "43811"
    ],
    "stopPointIds": [
      "22209",
      "463209"
    ]
  },
  {
    "nom": "Libération",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Bobigny.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "43805"
    ],
    "stopPointIds": [
      "23296",
      "23300"
    ]
  },
  {
    "nom": "Lieusaint - Moissy",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Lieusaint.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47669"
    ],
    "stopPointIds": [
      "41367",
      "470676",
      "471364",
      "471569",
      "471651"
    ]
  },
  {
    "nom": "Liège",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "43814"
    ],
    "stopPointIds": [
      "22225",
      "463066"
    ]
  },
  {
    "nom": "Limay",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Limay.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43151"
    ],
    "stopPointIds": [
      "41154",
      "471926",
      "472175"
    ]
  },
  {
    "nom": "Lisière Pereire",
    "lignes": [
      "T13"
    ],
    "resume": "Station située à Saint-Germain-en-Laye.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "480929"
    ],
    "stopPointIds": [
      "480928",
      "481069"
    ]
  },
  {
    "nom": "Livry-sur-Seine",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Livry-sur-Seine.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45804"
    ],
    "stopPointIds": [
      "41377",
      "471480",
      "472056"
    ]
  },
  {
    "nom": "Lizy-sur-Ourcq",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Lizy-sur-Ourcq.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47486"
    ],
    "stopPointIds": [
      "41065",
      "470646",
      "471961"
    ]
  },
  {
    "nom": "Lochères",
    "lignes": [
      "T5"
    ],
    "resume": "Station située à Sarcelles.",
    "materiel": [
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "43748"
    ],
    "stopPointIds": [
      "28869",
      "28870"
    ]
  },
  {
    "nom": "Lognes",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Lognes.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "43152"
    ],
    "stopPointIds": [
      "412827",
      "473930",
      "473933"
    ]
  },
  {
    "nom": "Longjumeau",
    "lignes": [
      "T12"
    ],
    "resume": "Station située à Longjumeau.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "486896"
    ],
    "stopPointIds": [
      "486895",
      "486897"
    ]
  },
  {
    "nom": "Longueville",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Longueville.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47914"
    ],
    "stopPointIds": [
      "41040",
      "471114",
      "471623",
      "471787",
      "472765"
    ]
  },
  {
    "nom": "Louis Blanc",
    "lignes": [
      "7",
      "7bis"
    ],
    "resume": "Station située à Paris 10e.",
    "materiel": [
      "MF 77",
      "MF 88"
    ],
    "stopAreaIds": [
      "43823"
    ],
    "stopPointIds": [
      "22384",
      "24681",
      "463033",
      "463034"
    ]
  },
  {
    "nom": "Louise Michel",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Levallois-Perret.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "51613"
    ],
    "stopPointIds": [
      "22034",
      "463210"
    ]
  },
  {
    "nom": "Lourmel",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "45363"
    ],
    "stopPointIds": [
      "22187",
      "463211"
    ]
  },
  {
    "nom": "Louveciennes",
    "lignes": [
      "L"
    ],
    "resume": "Station située à Louveciennes.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "473506"
    ],
    "stopPointIds": [
      "41184",
      "471270",
      "472446"
    ]
  },
  {
    "nom": "Louvois",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Vélizy-Villacoublay.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "43830"
    ],
    "stopPointIds": [
      "2330",
      "2334"
    ]
  },
  {
    "nom": "Louvre - Rivoli",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris 1er.",
    "materiel": [
      "MP 05"
    ],
    "stopAreaIds": [
      "44645"
    ],
    "stopPointIds": [
      "22081",
      "463218"
    ]
  },
  {
    "nom": "Louvres",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Louvres.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "44628"
    ],
    "stopPointIds": [
      "41100",
      "472467",
      "472641"
    ]
  },
  {
    "nom": "Lozère",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Palaiseau.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "474069"
    ],
    "stopPointIds": [
      "412846",
      "473931",
      "474063"
    ]
  },
  {
    "nom": "Luxembourg",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Paris 6e.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43833"
    ],
    "stopPointIds": [
      "412817",
      "473907",
      "473908"
    ]
  },
  {
    "nom": "Luzarches",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Luzarches.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47528"
    ],
    "stopPointIds": [
      "41115",
      "471314",
      "472616"
    ]
  },
  {
    "nom": "Lycée Henri Sellier",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Livry-Gargan.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "411280"
    ],
    "stopPointIds": [
      "470693",
      "472642"
    ]
  },
  {
    "nom": "Mabillon",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris 6e.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "59379"
    ],
    "stopPointIds": [
      "21973",
      "462994"
    ]
  },
  {
    "nom": "Madeleine",
    "lignes": [
      "8",
      "12",
      "14"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 77",
      "MF 67",
      "MP 14 CA"
    ],
    "stopAreaIds": [
      "43898"
    ],
    "stopPointIds": [
      "21961",
      "21965",
      "22194",
      "463063",
      "463064",
      "463081"
    ]
  },
  {
    "nom": "Magenta",
    "lignes": [
      "E"
    ],
    "resume": "Station située à Paris 10e.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "58572"
    ],
    "stopPointIds": [
      "41126",
      "471721",
      "471917",
      "472036",
      "472124"
    ]
  },
  {
    "nom": "Mail de la Plaine",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Clamart.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "42642"
    ],
    "stopPointIds": [
      "2340",
      "2341"
    ]
  },
  {
    "nom": "Maintenon",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Maintenon.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "59302"
    ],
    "stopPointIds": [
      "411509",
      "471383",
      "471660",
      "472158",
      "472538"
    ]
  },
  {
    "nom": "Mairie d'Aubervilliers",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Aubervilliers.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "483899"
    ],
    "stopPointIds": [
      "483898",
      "483904"
    ]
  },
  {
    "nom": "Mairie d'Issy",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Issy-les-Moulineaux.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "44050"
    ],
    "stopPointIds": [
      "22062",
      "463219"
    ]
  },
  {
    "nom": "Mairie d'Ivry",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Ivry-sur-Seine.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44051"
    ],
    "stopPointIds": [
      "22396",
      "463220"
    ]
  },
  {
    "nom": "Mairie de Clichy",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Clichy.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44012"
    ],
    "stopPointIds": [
      "22238",
      "463086"
    ]
  },
  {
    "nom": "Mairie de Montreuil",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Montreuil.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44052"
    ],
    "stopPointIds": [
      "21941",
      "463221"
    ]
  },
  {
    "nom": "Mairie de Montrouge",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Montrouge.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "45904"
    ],
    "stopPointIds": [
      "26602",
      "463222"
    ]
  },
  {
    "nom": "Mairie de Pierrefitte",
    "lignes": [
      "T5"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "50687"
    ],
    "stopPointIds": [
      "28852",
      "28854"
    ]
  },
  {
    "nom": "Mairie de Saint-Ouen",
    "lignes": [
      "13",
      "14"
    ],
    "resume": "Station située à Saint-Ouen.",
    "materiel": [
      "MF 77",
      "MP 14 CA"
    ],
    "stopAreaIds": [
      "43969"
    ],
    "stopPointIds": [
      "22243",
      "463212",
      "480290",
      "480330"
    ]
  },
  {
    "nom": "Mairie de Vélizy",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Vélizy-Villacoublay.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "42430"
    ],
    "stopPointIds": [
      "2331",
      "2332"
    ]
  },
  {
    "nom": "Mairie de Villeneuve-la-Garenne",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Villeneuve-la-Garenne.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "46332"
    ],
    "stopPointIds": [
      "23290",
      "23291"
    ]
  },
  {
    "nom": "Mairie de Vitry-sur-Seine",
    "lignes": [
      "15",
      "T9"
    ],
    "resume": "Station située à Vitry-sur-Seine.",
    "materiel": [
      "MR6V",
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479022"
    ],
    "stopPointIds": [
      "478977",
      "478997"
    ]
  },
  {
    "nom": "Mairie des Lilas",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Les Lilas.",
    "materiel": [
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "44055"
    ],
    "stopPointIds": [
      "21999",
      "463223"
    ]
  },
  {
    "nom": "Maison Blanche",
    "lignes": [
      "7",
      "14"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MF 77",
      "MP 14 CA"
    ],
    "stopAreaIds": [
      "44057"
    ],
    "stopPointIds": [
      "22385",
      "463224",
      "490841",
      "490848"
    ]
  },
  {
    "nom": "Maisons-Alfort - Alfortville",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Maisons-Alfort.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43154"
    ],
    "stopPointIds": [
      "41337",
      "471716",
      "471726",
      "471973",
      "472105",
      "472663"
    ]
  },
  {
    "nom": "Maisons-Alfort - Les Juilliottes",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Maisons-Alfort.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44067"
    ],
    "stopPointIds": [
      "22216",
      "463015"
    ]
  },
  {
    "nom": "Maisons-Alfort - Stade",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Maisons-Alfort.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44066"
    ],
    "stopPointIds": [
      "22215",
      "463225"
    ]
  },
  {
    "nom": "Maisons-Laffitte",
    "lignes": [
      "A",
      "J",
      "L"
    ],
    "resume": "Station située à Maisons-Laffitte.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "473109"
    ],
    "stopPointIds": [
      "41527",
      "470784",
      "471617",
      "471907",
      "472928"
    ]
  },
  {
    "nom": "Maisse",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Maisse.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43156"
    ],
    "stopPointIds": [
      "41353",
      "470790",
      "472083"
    ]
  },
  {
    "nom": "Malabry",
    "lignes": [
      "T10"
    ],
    "resume": "Station située à Châtenay-Malabry.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "486821"
    ],
    "stopPointIds": [
      "486820",
      "486848"
    ]
  },
  {
    "nom": "Malakoff - Plateau de Vanves",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Malakoff.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "413433"
    ],
    "stopPointIds": [
      "22235",
      "463213"
    ]
  },
  {
    "nom": "Malakoff - Rue Étienne Dolet",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Malakoff.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44069"
    ],
    "stopPointIds": [
      "22236",
      "463214"
    ]
  },
  {
    "nom": "Malesherbes",
    "lignes": [
      "3",
      "D"
    ],
    "resume": "Station située à Le Malesherbois.",
    "materiel": [
      "MF 67",
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411485",
      "59370"
    ],
    "stopPointIds": [
      "22031",
      "411484",
      "463068",
      "471420",
      "471598",
      "472076"
    ]
  },
  {
    "nom": "Mantes Station",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Mantes-la-Ville.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "46965"
    ],
    "stopPointIds": [
      "41155",
      "470711",
      "470779",
      "470892",
      "472300"
    ]
  },
  {
    "nom": "Mantes-la-Jolie",
    "lignes": [
      "J",
      "N"
    ],
    "resume": "Station située à Mantes-la-Jolie.",
    "materiel": [
      "Z 50000 Francilien",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43157"
    ],
    "stopPointIds": [
      "41150",
      "470761",
      "470860",
      "471185",
      "471925",
      "471958",
      "472217",
      "472625",
      "472803"
    ]
  },
  {
    "nom": "Maraîchers",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44072"
    ],
    "stopPointIds": [
      "21936",
      "463215"
    ]
  },
  {
    "nom": "Marcadet - Poissonniers",
    "lignes": [
      "4",
      "12"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MF 67"
    ],
    "stopAreaIds": [
      "44075"
    ],
    "stopPointIds": [
      "22052",
      "22132",
      "462973",
      "462974"
    ]
  },
  {
    "nom": "Marcel Sembat",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Boulogne-Billancourt.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "47021"
    ],
    "stopPointIds": [
      "21940",
      "462914"
    ]
  },
  {
    "nom": "Marchezais - Broué",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Broué.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411495"
    ],
    "stopPointIds": [
      "411494",
      "471896",
      "472176"
    ]
  },
  {
    "nom": "Marché de Saint-Denis",
    "lignes": [
      "T1",
      "T5"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Citadis 305",
      "TFS",
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "44095"
    ],
    "stopPointIds": [
      "22267",
      "22268",
      "28846",
      "490553"
    ]
  },
  {
    "nom": "Mareil-Marly",
    "lignes": [
      "T13"
    ],
    "resume": "Station située à Mareil-Marly.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "480943"
    ],
    "stopPointIds": [
      "480942",
      "481038"
    ]
  },
  {
    "nom": "Mareil-sur-Mauldre",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Mareil-sur-Mauldre.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "46884"
    ],
    "stopPointIds": [
      "41158",
      "470748",
      "471061"
    ]
  },
  {
    "nom": "Mareuil-sur-Ourcq",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Mareuil-sur-Ourcq.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "411375"
    ],
    "stopPointIds": [
      "411374",
      "471919",
      "471939"
    ]
  },
  {
    "nom": "Marguerite Long",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "45496"
    ],
    "stopPointIds": [
      "462430",
      "462440"
    ]
  },
  {
    "nom": "Marie De Miribel",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "58503"
    ],
    "stopPointIds": [
      "24394",
      "24405"
    ]
  },
  {
    "nom": "Marles-en-Brie",
    "lignes": [
      "P"
    ],
    "resume": "Station située à La Houssaye-en-Brie.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "43247"
    ],
    "stopPointIds": [
      "41044",
      "472018",
      "472469"
    ]
  },
  {
    "nom": "Marly-le-Roi",
    "lignes": [
      "L"
    ],
    "resume": "Station située à Marly-le-Roi.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43248"
    ],
    "stopPointIds": [
      "41185",
      "470789",
      "472098",
      "472725"
    ]
  },
  {
    "nom": "Marne-la-Vallée - Chessy",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Chessy.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "43239"
    ],
    "stopPointIds": [
      "412814",
      "470780",
      "472550",
      "472552",
      "474059",
      "474064"
    ]
  },
  {
    "nom": "Marolles-en-Hurepoix",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Marolles-en-Hurepoix.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43159"
    ],
    "stopPointIds": [
      "41303",
      "472365",
      "472903"
    ]
  },
  {
    "nom": "Marx Dormoy",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "44113"
    ],
    "stopPointIds": [
      "22053",
      "463236"
    ]
  },
  {
    "nom": "Maryse Bastié",
    "lignes": [
      "T3a"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "58493"
    ],
    "stopPointIds": [
      "24124",
      "24141"
    ]
  },
  {
    "nom": "Massy - Palaiseau",
    "lignes": [
      "18",
      "B",
      "C",
      "V",
      "T12"
    ],
    "resume": "Station située à Massy.",
    "materiel": [
      "MRV",
      "MI 79",
      "MI 84",
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "486884",
      "58774"
    ],
    "stopPointIds": [
      "412833",
      "470825",
      "471587",
      "471608",
      "472207",
      "472474",
      "472788",
      "474056",
      "474058",
      "474060",
      "474061",
      "486883",
      "494313",
      "496039"
    ]
  },
  {
    "nom": "Massy - Verrières",
    "lignes": [
      "B",
      "C"
    ],
    "resume": "Station située à Massy.",
    "materiel": [
      "MI 79",
      "MI 84",
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "47940"
    ],
    "stopPointIds": [
      "41193",
      "471007",
      "471106",
      "474055",
      "491414"
    ]
  },
  {
    "nom": "Massy Europe",
    "lignes": [
      "T12"
    ],
    "resume": "Station située à Massy.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "486961"
    ],
    "stopPointIds": [
      "486960",
      "486962"
    ]
  },
  {
    "nom": "Massy–Opéra",
    "lignes": [
      "18"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MRV"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Maubert - Mutualité",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris 5e.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "44119"
    ],
    "stopPointIds": [
      "21975",
      "463237"
    ]
  },
  {
    "nom": "Maule",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Maule.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "46886"
    ],
    "stopPointIds": [
      "41159",
      "472054",
      "472419"
    ]
  },
  {
    "nom": "Maurecourt",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Andrésy.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43160"
    ],
    "stopPointIds": [
      "41148",
      "471595",
      "472476"
    ]
  },
  {
    "nom": "Maurice Audin",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Clichy-sous-Bois.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "479052"
    ],
    "stopPointIds": [
      "478654",
      "478657"
    ]
  },
  {
    "nom": "Maurice Lachâtre",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Bobigny.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "44125"
    ],
    "stopPointIds": [
      "23295",
      "23305"
    ]
  },
  {
    "nom": "Meaux",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Meaux.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "43161"
    ],
    "stopPointIds": [
      "41038",
      "471695",
      "472297",
      "472472",
      "472926"
    ]
  },
  {
    "nom": "Melun",
    "lignes": [
      "D",
      "R"
    ],
    "resume": "Station située à Melun.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47909"
    ],
    "stopPointIds": [
      "41361",
      "471039",
      "471708",
      "471852",
      "471941",
      "472568",
      "472572",
      "472714"
    ]
  },
  {
    "nom": "Mennecy",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Mennecy.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47899"
    ],
    "stopPointIds": [
      "41349",
      "471590",
      "471735"
    ]
  },
  {
    "nom": "Meudon",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Meudon.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43162"
    ],
    "stopPointIds": [
      "41214",
      "470767",
      "471180",
      "472479",
      "472879"
    ]
  },
  {
    "nom": "Meudon Val Fleury",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Meudon.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43163"
    ],
    "stopPointIds": [
      "41213",
      "471011",
      "471645"
    ]
  },
  {
    "nom": "Meudon-la-Forêt",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Meudon.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "42830"
    ],
    "stopPointIds": [
      "2347",
      "2348"
    ]
  },
  {
    "nom": "Meudon-sur-Seine",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Meudon.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "44137"
    ],
    "stopPointIds": [
      "25639",
      "25640"
    ]
  },
  {
    "nom": "Meulan - Hardricourt",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Hardricourt.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "46897"
    ],
    "stopPointIds": [
      "41165",
      "471626",
      "472350"
    ]
  },
  {
    "nom": "Ménilmontant",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44133"
    ],
    "stopPointIds": [
      "22116",
      "463243"
    ]
  },
  {
    "nom": "Mériel",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Mériel.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47585"
    ],
    "stopPointIds": [
      "41124",
      "470733",
      "470900"
    ]
  },
  {
    "nom": "Méry-sur-Oise",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Méry-sur-Oise.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47582"
    ],
    "stopPointIds": [
      "41123",
      "470660",
      "472612"
    ]
  },
  {
    "nom": "Michel Bizot",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44140"
    ],
    "stopPointIds": [
      "22206",
      "463226"
    ]
  },
  {
    "nom": "Michel-Ange - Auteuil",
    "lignes": [
      "9",
      "10"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MF 01",
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "44138"
    ],
    "stopPointIds": [
      "21907",
      "21922",
      "463238"
    ]
  },
  {
    "nom": "Michel-Ange - Molitor",
    "lignes": [
      "9",
      "10"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MF 01",
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "44139"
    ],
    "stopPointIds": [
      "21904",
      "21923",
      "463239"
    ]
  },
  {
    "nom": "Mirabeau",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "45430"
    ],
    "stopPointIds": [
      "21982"
    ]
  },
  {
    "nom": "Miromesnil",
    "lignes": [
      "9",
      "13"
    ],
    "resume": "Station située à Paris 8e.",
    "materiel": [
      "MF 01",
      "MF 77"
    ],
    "stopAreaIds": [
      "43511"
    ],
    "stopPointIds": [
      "21924",
      "22224",
      "462957",
      "474397"
    ]
  },
  {
    "nom": "Mitry - Claye",
    "lignes": [
      "B",
      "K"
    ],
    "resume": "Station située à Mitry-Mory.",
    "materiel": [
      "MI 79",
      "MI 84",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43164"
    ],
    "stopPointIds": [
      "411402",
      "470619",
      "470649",
      "471674",
      "472831"
    ]
  },
  {
    "nom": "Monceau",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44146"
    ],
    "stopPointIds": [
      "22117",
      "463240"
    ]
  },
  {
    "nom": "Monnerville",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Monnerville.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43165"
    ],
    "stopPointIds": [
      "41296",
      "471205",
      "472184"
    ]
  },
  {
    "nom": "Montargis",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Montargis.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411482"
    ],
    "stopPointIds": [
      "411481",
      "470954",
      "471028",
      "471142",
      "471986",
      "472295",
      "472375"
    ]
  },
  {
    "nom": "Montempoivre",
    "lignes": [
      "T3a"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "45214"
    ],
    "stopPointIds": [
      "24125",
      "40067"
    ]
  },
  {
    "nom": "Montereau",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Montereau-Fault-Yonne.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47910"
    ],
    "stopPointIds": [
      "41376",
      "471220",
      "471462",
      "471469",
      "472212",
      "472370",
      "472979"
    ]
  },
  {
    "nom": "Montfort-l'Amaury - Méré",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Méré.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "46850"
    ],
    "stopPointIds": [
      "41254",
      "471222",
      "472848"
    ]
  },
  {
    "nom": "Montgallet",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44160"
    ],
    "stopPointIds": [
      "22205",
      "463241"
    ]
  },
  {
    "nom": "Montgeron - Crosne",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Montgeron.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47684"
    ],
    "stopPointIds": [
      "41362",
      "470685",
      "470739",
      "471656",
      "472500"
    ]
  },
  {
    "nom": "Montgeroult - Courcelles",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Montgeroult.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "44161"
    ],
    "stopPointIds": [
      "41141",
      "470614",
      "471475"
    ]
  },
  {
    "nom": "Montigny - Beauchamp",
    "lignes": [
      "C",
      "H"
    ],
    "resume": "Station située à Pierrelaye.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43166"
    ],
    "stopPointIds": [
      "41088",
      "471006",
      "471725",
      "472001"
    ]
  },
  {
    "nom": "Montigny-sur-Loing",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Montigny-sur-Loing.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47125"
    ],
    "stopPointIds": [
      "41389",
      "471189",
      "472167"
    ]
  },
  {
    "nom": "Montreuil",
    "lignes": [
      "L"
    ],
    "resume": "Station située à Versailles.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43167"
    ],
    "stopPointIds": [
      "41191",
      "471396",
      "472155"
    ]
  },
  {
    "nom": "Montreuil - Hôpital",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Noisy-le-Sec.",
    "materiel": [
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "490767"
    ],
    "stopPointIds": [
      "490766",
      "490789"
    ]
  },
  {
    "nom": "Montry - Condé",
    "lignes": [
      "T14"
    ],
    "resume": "Station située à Montry.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "492419"
    ],
    "stopPointIds": [
      "492418"
    ]
  },
  {
    "nom": "Montsoult - Maffliers",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Montsoult.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43168"
    ],
    "stopPointIds": [
      "41107",
      "471410",
      "471877",
      "472023"
    ]
  },
  {
    "nom": "Montsouris",
    "lignes": [
      "T3a"
    ],
    "resume": "Station située à Paris 14e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "45329"
    ],
    "stopPointIds": [
      "24119",
      "24122"
    ]
  },
  {
    "nom": "Moret - Veneux-les-Sablons",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Moret-Loing-et-Orvanne.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47130"
    ],
    "stopPointIds": [
      "41374",
      "470606",
      "471196",
      "472062",
      "472576",
      "472684",
      "472980"
    ]
  },
  {
    "nom": "Mormant",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Mormant.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47184"
    ],
    "stopPointIds": [
      "41036",
      "471839",
      "472706"
    ]
  },
  {
    "nom": "Mortcerf",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Mortcerf.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47942"
    ],
    "stopPointIds": [
      "41045",
      "471374",
      "472927"
    ]
  },
  {
    "nom": "Moulin Galant",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Corbeil-Essonnes.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45761"
    ],
    "stopPointIds": [
      "41348",
      "471178",
      "472072"
    ]
  },
  {
    "nom": "Moulin Vert",
    "lignes": [
      "T7"
    ],
    "resume": "Station située à Vitry-sur-Seine.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "47693"
    ],
    "stopPointIds": [
      "29904",
      "29905"
    ]
  },
  {
    "nom": "Mouroux",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Mouroux.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47943"
    ],
    "stopPointIds": [
      "41048",
      "471979"
    ]
  },
  {
    "nom": "Mouton-Duvernet",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris 14e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "44183"
    ],
    "stopPointIds": [
      "22144",
      "463242"
    ]
  },
  {
    "nom": "Musée d'Orsay",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Paris 7e.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "45705"
    ],
    "stopPointIds": [
      "41334",
      "471732",
      "471775",
      "471946",
      "472024"
    ]
  },
  {
    "nom": "Musée de Sèvres",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Sèvres.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "44189"
    ],
    "stopPointIds": [
      "22302",
      "23444"
    ]
  },
  {
    "nom": "Musée MAC VAL",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Vitry-sur-Seine.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479030"
    ],
    "stopPointIds": [
      "478975",
      "478976"
    ]
  },
  {
    "nom": "Nangis",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Nangis.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47158"
    ],
    "stopPointIds": [
      "41037",
      "471269",
      "472477"
    ]
  },
  {
    "nom": "Nanterre - Préfecture",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Nanterre.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "43169"
    ],
    "stopPointIds": [
      "40916",
      "474051",
      "474052",
      "474054",
      "474057"
    ]
  },
  {
    "nom": "Nanterre - Ville",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Nanterre.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "43171"
    ],
    "stopPointIds": [
      "412798",
      "474048",
      "474049"
    ]
  },
  {
    "nom": "Nanterre La Boule",
    "lignes": [
      "15"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MR6V"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Nanterre Université",
    "lignes": [
      "A",
      "L"
    ],
    "resume": "Station située à Nanterre.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43170"
    ],
    "stopPointIds": [
      "411356",
      "470899",
      "470961",
      "472807",
      "474047",
      "474053"
    ]
  },
  {
    "nom": "Nanterre-La-Folie",
    "lignes": [
      "15",
      "E"
    ],
    "resume": "Station située à Nanterre.",
    "materiel": [
      "MR6V",
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "487011"
    ],
    "stopPointIds": [
      "487010",
      "487012",
      "487013",
      "487014",
      "487015",
      "487016"
    ]
  },
  {
    "nom": "Nanteuil - Saâcy",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Saâcy-sur-Marne.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47482"
    ],
    "stopPointIds": [
      "41063",
      "471612",
      "471715"
    ]
  },
  {
    "nom": "Nanteuil-le-Haudouin",
    "lignes": [
      "K"
    ],
    "resume": "Station située à Nanteuil-le-Haudouin.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "411390"
    ],
    "stopPointIds": [
      "411389",
      "472496",
      "472571"
    ]
  },
  {
    "nom": "Nation",
    "lignes": [
      "1",
      "2",
      "6",
      "9",
      "A"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MP 05",
      "MF 01",
      "MP 73",
      "MP 89 CC",
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "462358",
      "473875"
    ],
    "stopPointIds": [
      "21919",
      "22072",
      "22073",
      "22080",
      "412808",
      "462942",
      "462943",
      "463028",
      "463067",
      "473919",
      "473920"
    ]
  },
  {
    "nom": "Nationale",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "44192"
    ],
    "stopPointIds": [
      "22169",
      "463004"
    ]
  },
  {
    "nom": "Nemours - Saint-Pierre",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Saint-Pierre-lès-Nemours.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43245"
    ],
    "stopPointIds": [
      "41391",
      "471550",
      "471867"
    ]
  },
  {
    "nom": "Neuilly-Plaisance",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Neuilly-Plaisance.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "43172"
    ],
    "stopPointIds": [
      "40929",
      "474042",
      "474050"
    ]
  },
  {
    "nom": "Neuville - Université",
    "lignes": [
      "A",
      "L"
    ],
    "resume": "Station située à Neuville-sur-Oise.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47879"
    ],
    "stopPointIds": [
      "411321",
      "471126",
      "472481"
    ]
  },
  {
    "nom": "Nézel - Aulnay",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Nézel.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47944"
    ],
    "stopPointIds": [
      "41160",
      "471611",
      "472371"
    ]
  },
  {
    "nom": "Nogent - Le Perreux",
    "lignes": [
      "15",
      "E"
    ],
    "resume": "Station située à Nogent-sur-Marne.",
    "materiel": [
      "MR6V",
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "46552"
    ],
    "stopPointIds": [
      "41020",
      "471074",
      "471195",
      "471686",
      "471997",
      "472434",
      "472537"
    ]
  },
  {
    "nom": "Nogent-L'Artaud - Charly",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Nogent-l'Artaud.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "411384"
    ],
    "stopPointIds": [
      "411383",
      "471144",
      "471871"
    ]
  },
  {
    "nom": "Nogent-sur-Marne",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Nogent-sur-Marne.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "47886"
    ],
    "stopPointIds": [
      "412716",
      "474043",
      "474045"
    ]
  },
  {
    "nom": "Nointel - Mours",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Nointel.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47530"
    ],
    "stopPointIds": [
      "41125",
      "470762",
      "472584"
    ]
  },
  {
    "nom": "Noisiel",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Noisiel.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "44199"
    ],
    "stopPointIds": [
      "412826",
      "474038",
      "474046"
    ]
  },
  {
    "nom": "Noisy - Champs",
    "lignes": [
      "15",
      "16",
      "A"
    ],
    "resume": "Station située à Noisy-le-Grand.",
    "materiel": [
      "MR6V",
      "MR3V",
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "58937"
    ],
    "stopPointIds": [
      "412825",
      "474039",
      "474040"
    ]
  },
  {
    "nom": "Noisy-le-Grand - Mont d'Est",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Noisy-le-Grand.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "474082"
    ],
    "stopPointIds": [
      "412823",
      "474032",
      "474033",
      "474041",
      "479183"
    ]
  },
  {
    "nom": "Noisy-le-Roi",
    "lignes": [
      "T13"
    ],
    "resume": "Station située à Noisy-le-Roi.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "480939"
    ],
    "stopPointIds": [
      "480938",
      "481065"
    ]
  },
  {
    "nom": "Noisy-le-Sec",
    "lignes": [
      "E",
      "T1"
    ],
    "resume": "Station située à Noisy-le-Sec.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien",
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "44201",
      "473310"
    ],
    "stopPointIds": [
      "22262",
      "23310",
      "41012",
      "471015",
      "471749",
      "472317",
      "472591",
      "472656",
      "472744",
      "472746",
      "472805"
    ]
  },
  {
    "nom": "Notre-Dame-de-Lorette",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "44210"
    ],
    "stopPointIds": [
      "22050",
      "463062"
    ]
  },
  {
    "nom": "Notre-Dame-des-Anges",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Montfermeil.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "479060"
    ],
    "stopPointIds": [
      "478649",
      "478652"
    ]
  },
  {
    "nom": "Notre-Dame-des-Champs",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 6e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "44211"
    ],
    "stopPointIds": [
      "22051",
      "462965"
    ]
  },
  {
    "nom": "Noveos",
    "lignes": [
      "T10"
    ],
    "resume": "Station située à Le Plessis-Robinson.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "486819"
    ],
    "stopPointIds": [
      "486818",
      "486836"
    ]
  },
  {
    "nom": "Oberkampf",
    "lignes": [
      "5",
      "9"
    ],
    "resume": "Station située à Paris 11e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "45193"
    ],
    "stopPointIds": [
      "21905",
      "21925",
      "463054",
      "463059"
    ]
  },
  {
    "nom": "Odéon",
    "lignes": [
      "4",
      "10"
    ],
    "resume": "Station située à Paris 6e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "58716"
    ],
    "stopPointIds": [
      "21978",
      "22145",
      "462995",
      "462998"
    ]
  },
  {
    "nom": "Olympiades",
    "lignes": [
      "14"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MP 14 CA"
    ],
    "stopAreaIds": [
      "479056"
    ],
    "stopPointIds": [
      "21954",
      "463045"
    ]
  },
  {
    "nom": "Opéra",
    "lignes": [
      "3",
      "7",
      "8"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 67",
      "MF 77"
    ],
    "stopAreaIds": [
      "42237"
    ],
    "stopPointIds": [
      "22030",
      "22195",
      "22381",
      "463244",
      "463245",
      "463246"
    ]
  },
  {
    "nom": "Orangis Bois de l'Épine",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Ris-Orangis.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "48489"
    ],
    "stopPointIds": [
      "41342",
      "470913",
      "472278"
    ]
  },
  {
    "nom": "Orgerus - Béhoust",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Orgerus.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47921"
    ],
    "stopPointIds": [
      "41236",
      "471444",
      "472406"
    ]
  },
  {
    "nom": "Orly - Gaston Viens",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Orly.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479023"
    ],
    "stopPointIds": [
      "478974",
      "478981"
    ]
  },
  {
    "nom": "Orly Ville",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Orly.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "46299"
    ],
    "stopPointIds": [
      "41327",
      "470752",
      "471372",
      "472530",
      "472984"
    ]
  },
  {
    "nom": "Ormoy-Villers",
    "lignes": [
      "K"
    ],
    "resume": "Station située à Ormoy-Villers.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "411387"
    ],
    "stopPointIds": [
      "411386",
      "470604",
      "470774",
      "471055"
    ]
  },
  {
    "nom": "Orry-la-Ville - Coye",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Orry-la-Ville.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411421"
    ],
    "stopPointIds": [
      "411420",
      "471280",
      "471490",
      "472008",
      "472016"
    ]
  },
  {
    "nom": "Orsay - Ville",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Orsay.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43086"
    ],
    "stopPointIds": [
      "412794",
      "473901",
      "473903",
      "473904"
    ]
  },
  {
    "nom": "Orsay–Gif",
    "lignes": [
      "18"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MRV"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Osny",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Osny.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "51494"
    ],
    "stopPointIds": [
      "41139",
      "472074",
      "472942"
    ]
  },
  {
    "nom": "Ourcq",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44227"
    ],
    "stopPointIds": [
      "22005",
      "463027"
    ]
  },
  {
    "nom": "Ozoir-la-Ferrière",
    "lignes": [
      "E"
    ],
    "resume": "Station située à Ozoir-la-Ferrière.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "462901"
    ],
    "stopPointIds": [
      "41032",
      "471508",
      "472442"
    ]
  },
  {
    "nom": "Pablo Neruda",
    "lignes": [
      "T8"
    ],
    "resume": "Station située à Villetaneuse.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "59329"
    ],
    "stopPointIds": [
      "42130",
      "42134"
    ]
  },
  {
    "nom": "Palais Royal - Musée du Louvre",
    "lignes": [
      "1",
      "7"
    ],
    "resume": "Station située à Paris 1er.",
    "materiel": [
      "MP 05",
      "MF 77"
    ],
    "stopAreaIds": [
      "44236"
    ],
    "stopPointIds": [
      "22079",
      "22376",
      "463227",
      "463249"
    ]
  },
  {
    "nom": "Palaiseau",
    "lignes": [
      "18",
      "B"
    ],
    "resume": "Station située à Palaiseau.",
    "materiel": [
      "MRV",
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "47009"
    ],
    "stopPointIds": [
      "412848",
      "474034",
      "474037"
    ]
  },
  {
    "nom": "Palaiseau - Villebon",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Palaiseau.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43175"
    ],
    "stopPointIds": [
      "412849",
      "474030",
      "474031"
    ]
  },
  {
    "nom": "Pantin",
    "lignes": [
      "E"
    ],
    "resume": "Station située à Pantin.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43176"
    ],
    "stopPointIds": [
      "41011",
      "470857",
      "471103",
      "471454",
      "471540",
      "472870",
      "472972"
    ]
  },
  {
    "nom": "Parc André Malraux",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Châtillon.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "59179"
    ],
    "stopPointIds": [
      "2338",
      "41670"
    ]
  },
  {
    "nom": "Parc de Saint-Cloud",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Saint-Cloud.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "44249"
    ],
    "stopPointIds": [
      "25643",
      "25644"
    ]
  },
  {
    "nom": "Parc de Sceaux",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Antony.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43177"
    ],
    "stopPointIds": [
      "412831",
      "474027",
      "474029"
    ]
  },
  {
    "nom": "Parc des Chanteraines",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Gennevilliers.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "44252"
    ],
    "stopPointIds": [
      "23286",
      "460554"
    ]
  },
  {
    "nom": "Parc des Expositions",
    "lignes": [
      "17",
      "B"
    ],
    "resume": "Station située à Villepinte.",
    "materiel": [
      "MR3V",
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "47878"
    ],
    "stopPointIds": [
      "411400",
      "471705",
      "472126",
      "472521"
    ]
  },
  {
    "nom": "Parc des Sports",
    "lignes": [
      "T10"
    ],
    "resume": "Station située à Le Plessis-Robinson.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "486817"
    ],
    "stopPointIds": [
      "486816",
      "486837"
    ]
  },
  {
    "nom": "Parc du Château",
    "lignes": [
      "T12"
    ],
    "resume": "Station située à Morsang-sur-Orge.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "486979"
    ],
    "stopPointIds": [
      "486978",
      "486980"
    ]
  },
  {
    "nom": "Parc Pierre Lagravère",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Colombes.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "44678"
    ],
    "stopPointIds": [
      "23427",
      "23429"
    ]
  },
  {
    "nom": "Parmentier",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris 11e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "58725"
    ],
    "stopPointIds": [
      "22019",
      "463250"
    ]
  },
  {
    "nom": "Passy",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "45417"
    ],
    "stopPointIds": [
      "22165",
      "463101"
    ]
  },
  {
    "nom": "Pasteur",
    "lignes": [
      "6",
      "12"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MP 73",
      "MP 89 CC",
      "MF 67"
    ],
    "stopAreaIds": [
      "44273"
    ],
    "stopPointIds": [
      "22039",
      "22166",
      "462947",
      "462948"
    ]
  },
  {
    "nom": "Paul Éluard",
    "lignes": [
      "T8"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "46334"
    ],
    "stopPointIds": [
      "42119",
      "42124"
    ]
  },
  {
    "nom": "Paul Valéry",
    "lignes": [
      "T5"
    ],
    "resume": "Station située à Sarcelles.",
    "materiel": [
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "44298"
    ],
    "stopPointIds": [
      "28873",
      "28875"
    ]
  },
  {
    "nom": "Pavé Blanc",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Clamart.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "44300"
    ],
    "stopPointIds": [
      "2339",
      "2345"
    ]
  },
  {
    "nom": "Pelleport",
    "lignes": [
      "3bis"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "45630"
    ],
    "stopPointIds": [
      "21948",
      "462990"
    ]
  },
  {
    "nom": "Pereire",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "462376"
    ],
    "stopPointIds": [
      "22021",
      "463228"
    ]
  },
  {
    "nom": "Pernety",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris 14e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44316"
    ],
    "stopPointIds": [
      "22222",
      "463229"
    ]
  },
  {
    "nom": "Persan - Beaumont",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Persan.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43178"
    ],
    "stopPointIds": [
      "41105",
      "470800",
      "471446",
      "471699",
      "471761",
      "472359",
      "472394",
      "472463",
      "472536",
      "472873"
    ]
  },
  {
    "nom": "Petit Jouy Les Loges",
    "lignes": [
      "V"
    ],
    "resume": "Station située à Les Loges-en-Josas.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "57674"
    ],
    "stopPointIds": [
      "41239",
      "471898",
      "472794"
    ]
  },
  {
    "nom": "Petit Noisy",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Noisy-le-Sec.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "44325"
    ],
    "stopPointIds": [
      "22263",
      "23311"
    ]
  },
  {
    "nom": "Petit Pierrefitte",
    "lignes": [
      "T5"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "46338"
    ],
    "stopPointIds": [
      "28851",
      "28860"
    ]
  },
  {
    "nom": "Petit Vaux",
    "lignes": [
      "T12"
    ],
    "resume": "Station située à Épinay-sur-Orge.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "486887"
    ],
    "stopPointIds": [
      "486886",
      "486888"
    ]
  },
  {
    "nom": "Petit-Châtenay",
    "lignes": [
      "T10"
    ],
    "resume": "Station située à Châtenay-Malabry.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "486831"
    ],
    "stopPointIds": [
      "486830",
      "486843"
    ]
  },
  {
    "nom": "Père Lachaise",
    "lignes": [
      "2",
      "3"
    ],
    "resume": "Station située à Paris 11e.",
    "materiel": [
      "MF 01",
      "MF 67"
    ],
    "stopAreaIds": [
      "44310"
    ],
    "stopPointIds": [
      "22020",
      "22112",
      "463285",
      "463286"
    ]
  },
  {
    "nom": "Péreire Levallois",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "44314"
    ],
    "stopPointIds": [
      "411230",
      "470905",
      "471778",
      "480010"
    ]
  },
  {
    "nom": "Philippe Auguste",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44332"
    ],
    "stopPointIds": [
      "22113",
      "463230"
    ]
  },
  {
    "nom": "Picpus",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "44334"
    ],
    "stopPointIds": [
      "22167",
      "463098"
    ]
  },
  {
    "nom": "Pierre de Geyter",
    "lignes": [
      "T8"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "50567"
    ],
    "stopPointIds": [
      "42118",
      "42121"
    ]
  },
  {
    "nom": "Pierre et Marie Curie",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Ivry-sur-Seine.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44343"
    ],
    "stopPointIds": [
      "22397",
      "463251"
    ]
  },
  {
    "nom": "Pierrefitte - Stains",
    "lignes": [
      "D",
      "T11"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N",
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "426089",
      "43179"
    ],
    "stopPointIds": [
      "411416",
      "471236",
      "471605",
      "471675",
      "471933",
      "472696",
      "472708"
    ]
  },
  {
    "nom": "Pierrelaye",
    "lignes": [
      "C",
      "H"
    ],
    "resume": "Station située à Pierrelaye.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43180"
    ],
    "stopPointIds": [
      "41089",
      "472340",
      "472526"
    ]
  },
  {
    "nom": "Pigalle",
    "lignes": [
      "2",
      "12"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 01",
      "MF 67"
    ],
    "stopAreaIds": [
      "44345"
    ],
    "stopPointIds": [
      "22040",
      "22114",
      "463088",
      "463089"
    ]
  },
  {
    "nom": "Place d'Italie",
    "lignes": [
      "5",
      "6",
      "7"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MF 01",
      "MP 73",
      "MP 89 CC",
      "MF 77"
    ],
    "stopAreaIds": [
      "44371"
    ],
    "stopPointIds": [
      "22006",
      "22168",
      "22365",
      "463003",
      "463025",
      "463026"
    ]
  },
  {
    "nom": "Place de Clichy",
    "lignes": [
      "2",
      "13"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 01",
      "MF 77"
    ],
    "stopAreaIds": [
      "44372"
    ],
    "stopPointIds": [
      "22115",
      "22129",
      "463252",
      "463253"
    ]
  },
  {
    "nom": "Place de la Logistique",
    "lignes": [
      "T7"
    ],
    "resume": "Station située à Rungis.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "57491"
    ],
    "stopPointIds": [
      "35936",
      "35940"
    ]
  },
  {
    "nom": "Place des Fêtes",
    "lignes": [
      "7bis",
      "11"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 88",
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "44396"
    ],
    "stopPointIds": [
      "21951",
      "24682",
      "463254"
    ]
  },
  {
    "nom": "Place Monge",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris 5e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44435"
    ],
    "stopPointIds": [
      "22366",
      "463106"
    ]
  },
  {
    "nom": "Plaisance",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris 14e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "45322"
    ],
    "stopPointIds": [
      "22223",
      "463085"
    ]
  },
  {
    "nom": "Plaisir - Grignon",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Plaisir.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47885"
    ],
    "stopPointIds": [
      "41234",
      "470807",
      "472484",
      "472978"
    ]
  },
  {
    "nom": "Plaisir - Les Clayes",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Plaisir.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43181"
    ],
    "stopPointIds": [
      "41246",
      "471108",
      "471834"
    ]
  },
  {
    "nom": "Pointe du Lac",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Créteil.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44453"
    ],
    "stopPointIds": [
      "21784",
      "463057"
    ]
  },
  {
    "nom": "Poissonnière",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "45165"
    ],
    "stopPointIds": [
      "22377",
      "463255"
    ]
  },
  {
    "nom": "Poissy",
    "lignes": [
      "A",
      "J"
    ],
    "resume": "Station située à Poissy.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47874"
    ],
    "stopPointIds": [
      "411359",
      "471154",
      "471599",
      "471609",
      "471620",
      "471624"
    ]
  },
  {
    "nom": "Pont Cardinet",
    "lignes": [
      "14",
      "L"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "MP 14 CA",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "45493",
      "480287"
    ],
    "stopPointIds": [
      "411351",
      "470793",
      "470841",
      "471310",
      "471459",
      "472138",
      "472320",
      "480286",
      "480340"
    ]
  },
  {
    "nom": "Pont de Bezons",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Bezons.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "50622"
    ],
    "stopPointIds": [
      "23445",
      "25647"
    ]
  },
  {
    "nom": "Pont de Bondy",
    "lignes": [
      "15",
      "T1"
    ],
    "resume": "Station située à Noisy-le-Sec.",
    "materiel": [
      "MR6V",
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "44471"
    ],
    "stopPointIds": [
      "22264",
      "24430"
    ]
  },
  {
    "nom": "Pont de l'Alma",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Paris 7e.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "415091"
    ],
    "stopPointIds": [
      "41209",
      "471002",
      "473007"
    ]
  },
  {
    "nom": "Pont de Levallois - Bécon",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Levallois-Perret.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "473676"
    ],
    "stopPointIds": [
      "22035",
      "462985"
    ]
  },
  {
    "nom": "Pont de Neuilly",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Neuilly-sur-Seine.",
    "materiel": [
      "MP 05"
    ],
    "stopAreaIds": [
      "44479"
    ],
    "stopPointIds": [
      "22099",
      "463044"
    ]
  },
  {
    "nom": "Pont de Rungis Aéroport d'Orly",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Thiais.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "47907"
    ],
    "stopPointIds": [
      "41326",
      "472171",
      "472299",
      "472867"
    ]
  },
  {
    "nom": "Pont de Sèvres",
    "lignes": [
      "9",
      "15"
    ],
    "resume": "Station située à Boulogne-Billancourt.",
    "materiel": [
      "MF 01",
      "MR6V"
    ],
    "stopAreaIds": [
      "44481"
    ],
    "stopPointIds": [
      "21938",
      "463233"
    ]
  },
  {
    "nom": "Pont du Garigliano",
    "lignes": [
      "C",
      "T3a"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "462396",
      "58734"
    ],
    "stopPointIds": []
  },
  {
    "nom": "Pont Marie",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris 4e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44487"
    ],
    "stopPointIds": [
      "22378",
      "463231"
    ]
  },
  {
    "nom": "Pont Neuf",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris 1er.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44491"
    ],
    "stopPointIds": [
      "22379",
      "463232"
    ]
  },
  {
    "nom": "Pont Petit",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Saint-Ouen-l'Aumône.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47595"
    ],
    "stopPointIds": [
      "41093",
      "472075",
      "472892"
    ]
  },
  {
    "nom": "Pont-sur-Yonne",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Pont-sur-Yonne.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411458"
    ],
    "stopPointIds": [
      "411457",
      "471275",
      "471344",
      "472179",
      "472499"
    ]
  },
  {
    "nom": "Ponthierry - Pringy",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Saint-Fargeau-Ponthierry.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45812"
    ],
    "stopPointIds": [
      "41387",
      "471431",
      "472433"
    ]
  },
  {
    "nom": "Pontoise",
    "lignes": [
      "C",
      "H",
      "J"
    ],
    "resume": "Station située à Pontoise.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "44411"
    ],
    "stopPointIds": [
      "41091",
      "470651",
      "470796",
      "471025",
      "471139",
      "471411",
      "471427",
      "472390",
      "472473",
      "472509",
      "473003"
    ]
  },
  {
    "nom": "Porchefontaine",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Versailles.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43183"
    ],
    "stopPointIds": [
      "41218",
      "470858",
      "472670"
    ]
  },
  {
    "nom": "Port Royal",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Paris 5e.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "44500"
    ],
    "stopPointIds": [
      "412818",
      "473917",
      "473918"
    ]
  },
  {
    "nom": "Porte d'Aubervilliers",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44503"
    ],
    "stopPointIds": [
      "24407",
      "24413"
    ]
  },
  {
    "nom": "Porte d'Auteuil",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "44504"
    ],
    "stopPointIds": [
      "21974",
      "463234"
    ]
  },
  {
    "nom": "Porte d'Issy",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Issy-les-Moulineaux.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "45356"
    ],
    "stopPointIds": [
      "25636",
      "25637"
    ]
  },
  {
    "nom": "Porte d'Italie",
    "lignes": [
      "7",
      "T3a"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MF 77",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44506",
      "473456"
    ],
    "stopPointIds": [
      "22380",
      "24106",
      "24117",
      "463235"
    ]
  },
  {
    "nom": "Porte d'Ivry",
    "lignes": [
      "7",
      "T3a"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MF 77",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44507",
      "473717"
    ],
    "stopPointIds": [
      "22372",
      "24110",
      "24133",
      "463029"
    ]
  },
  {
    "nom": "Porte d'Orléans",
    "lignes": [
      "4",
      "T3a"
    ],
    "resume": "Station située à Paris 14e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44508",
      "473694"
    ],
    "stopPointIds": [
      "22140",
      "24118",
      "460547",
      "463092"
    ]
  },
  {
    "nom": "Porte Dauphine",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44509"
    ],
    "stopPointIds": [
      "22111",
      "463256"
    ]
  },
  {
    "nom": "Porte Dauphine (Avenue Foch)",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "490877"
    ],
    "stopPointIds": [
      "490876",
      "490878"
    ]
  },
  {
    "nom": "Porte de Bagnolet",
    "lignes": [
      "3",
      "T3b"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MF 67",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44510",
      "473453"
    ],
    "stopPointIds": [
      "22022",
      "24414",
      "24419",
      "463276"
    ]
  },
  {
    "nom": "Porte de Champerret",
    "lignes": [
      "3",
      "T3b"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "MF 67",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44511",
      "490891"
    ],
    "stopPointIds": [
      "22023",
      "463258",
      "490890",
      "490895"
    ]
  },
  {
    "nom": "Porte de Charenton",
    "lignes": [
      "8",
      "T3a"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MF 77",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44512",
      "473680"
    ],
    "stopPointIds": [
      "22208",
      "24138",
      "24142",
      "463277"
    ]
  },
  {
    "nom": "Porte de Choisy",
    "lignes": [
      "7",
      "T3a",
      "T9"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MF 77",
      "Citadis 402",
      "Citadis 405"
    ],
    "stopAreaIds": [
      "44513",
      "473684"
    ],
    "stopPointIds": [
      "22373",
      "24120",
      "24126",
      "463030",
      "478979",
      "478980"
    ]
  },
  {
    "nom": "Porte de Clichy",
    "lignes": [
      "13",
      "14",
      "C",
      "T3b"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "MF 77",
      "MP 14 CA",
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44514",
      "473476",
      "473477"
    ],
    "stopPointIds": [
      "22219",
      "41009",
      "462429",
      "462441",
      "463278",
      "470826",
      "471557",
      "480531",
      "480541"
    ]
  },
  {
    "nom": "Porte de Clignancourt",
    "lignes": [
      "4",
      "T3b"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44515",
      "473685"
    ],
    "stopPointIds": [
      "22141",
      "462414",
      "462431",
      "463073"
    ]
  },
  {
    "nom": "Porte de l'Essonne",
    "lignes": [
      "T7"
    ],
    "resume": "Station située à Athis-Mons.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "58786"
    ],
    "stopPointIds": [
      "35926",
      "462937"
    ]
  },
  {
    "nom": "Porte de la Chapelle",
    "lignes": [
      "12",
      "T3b"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "MF 67",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44517",
      "473459"
    ],
    "stopPointIds": [
      "22041",
      "412987",
      "412988",
      "463281"
    ]
  },
  {
    "nom": "Porte de la Villette",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "473461"
    ],
    "stopPointIds": [
      "22374",
      "463007"
    ]
  },
  {
    "nom": "Porte de la Villette (Cité des Sciences et de l'industrie)",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44518"
    ],
    "stopPointIds": [
      "24399",
      "29379"
    ]
  },
  {
    "nom": "Porte de Montreuil",
    "lignes": [
      "9",
      "T3b"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MF 01",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44520",
      "473697"
    ],
    "stopPointIds": [
      "21913",
      "24406",
      "24408",
      "463279"
    ]
  },
  {
    "nom": "Porte de Pantin",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44521"
    ],
    "stopPointIds": [
      "22003",
      "463280"
    ]
  },
  {
    "nom": "Porte de Pantin - Parc de la Villette",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "473687"
    ],
    "stopPointIds": [
      "24403",
      "24423"
    ]
  },
  {
    "nom": "Porte de Rungis",
    "lignes": [
      "T7"
    ],
    "resume": "Station située à Rungis.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "58785"
    ],
    "stopPointIds": [
      "29901",
      "35934"
    ]
  },
  {
    "nom": "Porte de Saint-Cloud",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44524"
    ],
    "stopPointIds": [
      "21914",
      "463259"
    ]
  },
  {
    "nom": "Porte de Saint-Ouen",
    "lignes": [
      "13",
      "T3b"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "MF 77",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44525",
      "473689"
    ],
    "stopPointIds": [
      "22220",
      "462436",
      "462446",
      "462951"
    ]
  },
  {
    "nom": "Porte de Vanves",
    "lignes": [
      "13",
      "T3a"
    ],
    "resume": "Station située à Paris 14e.",
    "materiel": [
      "MF 77",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44526",
      "473702"
    ],
    "stopPointIds": [
      "22221",
      "24128",
      "24129",
      "463260"
    ]
  },
  {
    "nom": "Porte de Versailles",
    "lignes": [
      "12",
      "T2",
      "T3a"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MF 67",
      "Citadis 302",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "473705",
      "49515"
    ],
    "stopPointIds": [
      "22042",
      "24111",
      "24114",
      "25631",
      "25633",
      "463261"
    ]
  },
  {
    "nom": "Porte de Vincennes",
    "lignes": [
      "1",
      "T3a",
      "T3b"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MP 05",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44528",
      "473707"
    ],
    "stopPointIds": [
      "22077",
      "24396",
      "26534",
      "460560",
      "460563",
      "463012"
    ]
  },
  {
    "nom": "Porte des Lilas",
    "lignes": [
      "3bis",
      "11",
      "T3b"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 67",
      "MP 14 CC",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44529",
      "473736"
    ],
    "stopPointIds": [
      "21947",
      "21949",
      "24409",
      "24415",
      "463262",
      "463263"
    ]
  },
  {
    "nom": "Porte Dorée",
    "lignes": [
      "8",
      "T3a"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MF 77",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44532",
      "473692"
    ],
    "stopPointIds": [
      "22207",
      "24134",
      "24135",
      "463050"
    ]
  },
  {
    "nom": "Porte Maillot",
    "lignes": [
      "1",
      "C",
      "E",
      "T3b"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "MP 05",
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "415093",
      "44533",
      "490883"
    ],
    "stopPointIds": [
      "22078",
      "41131",
      "463257",
      "471859",
      "472182",
      "484167",
      "484169",
      "490882",
      "490892"
    ]
  },
  {
    "nom": "Poterne des Peupliers",
    "lignes": [
      "T3a"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44550"
    ],
    "stopPointIds": [
      "24127",
      "24136"
    ]
  },
  {
    "nom": "Presles - Courcelles",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Presles.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47946"
    ],
    "stopPointIds": [
      "41108",
      "470895",
      "471277"
    ]
  },
  {
    "nom": "Pré-Saint-Gervais",
    "lignes": [
      "7bis"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 88"
    ],
    "stopAreaIds": [
      "45617"
    ],
    "stopPointIds": [
      "24684",
      "463282"
    ]
  },
  {
    "nom": "Précy-sur-Oise",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Précy-sur-Oise.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "411326"
    ],
    "stopPointIds": [
      "411325",
      "472762",
      "472775"
    ]
  },
  {
    "nom": "Provins",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Provins.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47181"
    ],
    "stopPointIds": [
      "41041",
      "471395",
      "472279"
    ]
  },
  {
    "nom": "Puteaux",
    "lignes": [
      "L",
      "U",
      "T2"
    ],
    "resume": "Station située à Puteaux.",
    "materiel": [
      "Z 50000 Francilien",
      "Z 8800",
      "Citadis 302"
    ],
    "stopAreaIds": [
      "43184",
      "462353"
    ],
    "stopPointIds": [
      "22298",
      "22299",
      "41181",
      "470869",
      "471324"
    ]
  },
  {
    "nom": "Pyramides",
    "lignes": [
      "7",
      "14"
    ],
    "resume": "Station située à Paris 1er.",
    "materiel": [
      "MF 77",
      "MP 14 CA"
    ],
    "stopAreaIds": [
      "44579"
    ],
    "stopPointIds": [
      "21960",
      "22375",
      "463283",
      "463284"
    ]
  },
  {
    "nom": "Pyrénées",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "44580"
    ],
    "stopPointIds": [
      "21991",
      "463287"
    ]
  },
  {
    "nom": "Quai de la Gare",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "44582"
    ],
    "stopPointIds": [
      "22161",
      "463288"
    ]
  },
  {
    "nom": "Quai de la Rapée",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44583"
    ],
    "stopPointIds": [
      "22004",
      "463289"
    ]
  },
  {
    "nom": "Quatre Septembre",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris 2e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "44587"
    ],
    "stopPointIds": [
      "22024",
      "462989"
    ]
  },
  {
    "nom": "Rambouillet",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Rambouillet.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "427870"
    ],
    "stopPointIds": [
      "41228",
      "471377",
      "471399",
      "472483",
      "472543"
    ]
  },
  {
    "nom": "Rambuteau",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris 4e.",
    "materiel": [
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "44593"
    ],
    "stopPointIds": [
      "21992",
      "462945"
    ]
  },
  {
    "nom": "Ranelagh",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44594"
    ],
    "stopPointIds": [
      "21915",
      "463290"
    ]
  },
  {
    "nom": "Raspail",
    "lignes": [
      "4",
      "6"
    ],
    "resume": "Station située à Paris 14e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "45314"
    ],
    "stopPointIds": [
      "22131",
      "22155",
      "463291",
      "463292"
    ]
  },
  {
    "nom": "Remise à Jorelle",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Bondy.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "44603"
    ],
    "stopPointIds": [
      "471837",
      "472376"
    ]
  },
  {
    "nom": "Rennes",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 6e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "44609"
    ],
    "stopPointIds": [
      "22049",
      "462968"
    ]
  },
  {
    "nom": "Reuilly - Diderot",
    "lignes": [
      "1",
      "8"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MP 05",
      "MF 77"
    ],
    "stopAreaIds": [
      "44637"
    ],
    "stopPointIds": [
      "22076",
      "22098",
      "463293",
      "463294"
    ]
  },
  {
    "nom": "Réaumur - Sébastopol",
    "lignes": [
      "3",
      "4"
    ],
    "resume": "Station située à Paris 2e.",
    "materiel": [
      "MF 67",
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "44600"
    ],
    "stopPointIds": [
      "22018",
      "22142",
      "463072",
      "463091"
    ]
  },
  {
    "nom": "République",
    "lignes": [
      "3",
      "5",
      "8",
      "9",
      "11"
    ],
    "resume": "Station située à Paris 11e.",
    "materiel": [
      "MF 67",
      "MF 01",
      "MF 77",
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "44617"
    ],
    "stopPointIds": [
      "21902",
      "21903",
      "21918",
      "21937",
      "22199",
      "462946",
      "462960",
      "462961",
      "462962",
      "462963"
    ]
  },
  {
    "nom": "République - Marx Dormoy",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Livry-Gargan.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "44626"
    ],
    "stopPointIds": [
      "478650",
      "478662"
    ]
  },
  {
    "nom": "Richard-Lenoir",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris 11e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44641"
    ],
    "stopPointIds": [
      "22002",
      "463096"
    ]
  },
  {
    "nom": "Richelieu - Drouot",
    "lignes": [
      "8",
      "9"
    ],
    "resume": "Station située à Paris 2e.",
    "materiel": [
      "MF 77",
      "MF 01"
    ],
    "stopAreaIds": [
      "44642"
    ],
    "stopPointIds": [
      "21921",
      "22196",
      "463036",
      "463037"
    ]
  },
  {
    "nom": "Riquet",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44643"
    ],
    "stopPointIds": [
      "22371",
      "463295"
    ]
  },
  {
    "nom": "Ris-Orangis",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Ris-Orangis.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47948"
    ],
    "stopPointIds": [
      "41341",
      "471235",
      "471999"
    ]
  },
  {
    "nom": "Robert Schuman (Parc Silic Centre)",
    "lignes": [
      "T7"
    ],
    "resume": "Station située à Rungis.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "44994"
    ],
    "stopPointIds": [
      "35938",
      "35943"
    ]
  },
  {
    "nom": "Robert Wagner",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Vélizy-Villacoublay.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "44649"
    ],
    "stopPointIds": [
      "41850",
      "41853"
    ]
  },
  {
    "nom": "Robespierre",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Montreuil.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44650"
    ],
    "stopPointIds": [
      "21942",
      "463053"
    ]
  },
  {
    "nom": "Robinson",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Sceaux.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43186"
    ],
    "stopPointIds": [
      "412832",
      "474024",
      "474025",
      "474026"
    ]
  },
  {
    "nom": "Roger Semât",
    "lignes": [
      "T5"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "50681"
    ],
    "stopPointIds": [
      "28862",
      "28863"
    ]
  },
  {
    "nom": "Roissy-en-Brie",
    "lignes": [
      "E"
    ],
    "resume": "Station située à Roissy-en-Brie.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "46568"
    ],
    "stopPointIds": [
      "41033",
      "470946",
      "470987",
      "471570",
      "472127"
    ]
  },
  {
    "nom": "Romain Rolland",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Clichy-sous-Bois.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "43043"
    ],
    "stopPointIds": [
      "478655",
      "478659"
    ]
  },
  {
    "nom": "Romainville - Carnot",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Romainville.",
    "materiel": [
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "490765"
    ],
    "stopPointIds": [
      "490764",
      "490788"
    ]
  },
  {
    "nom": "Rome",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44662"
    ],
    "stopPointIds": [
      "22110",
      "463296"
    ]
  },
  {
    "nom": "Rosa Parks",
    "lignes": [
      "E",
      "T3b"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien",
      "Citadis 402"
    ],
    "stopAreaIds": [
      "473484",
      "58498"
    ],
    "stopPointIds": [
      "24530",
      "24531",
      "420316",
      "471119",
      "472747"
    ]
  },
  {
    "nom": "Rose Bertin",
    "lignes": [
      "T8"
    ],
    "resume": "Station située à Épinay-sur-Seine.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "415806"
    ],
    "stopPointIds": [
      "42104",
      "42108"
    ]
  },
  {
    "nom": "Rosny Bois Perrier",
    "lignes": [
      "11",
      "15",
      "E"
    ],
    "resume": "Station située à Rosny-sous-Bois.",
    "materiel": [
      "MP 14 CC",
      "MR6V",
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "42356",
      "490773"
    ],
    "stopPointIds": [
      "41017",
      "470763",
      "471124",
      "472307",
      "472712",
      "490772",
      "490793"
    ]
  },
  {
    "nom": "Rosny-sous-Bois",
    "lignes": [
      "E"
    ],
    "resume": "Station située à Rosny-sous-Bois.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47877"
    ],
    "stopPointIds": [
      "41018",
      "471618",
      "472202",
      "472717",
      "472882"
    ]
  },
  {
    "nom": "Rosny-sur-Seine",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Rosny-sur-Seine.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "479059"
    ],
    "stopPointIds": [
      "41289",
      "471422",
      "472945"
    ]
  },
  {
    "nom": "Rougemont Chanteloup",
    "lignes": [
      "T4"
    ],
    "resume": "Station située à Sevran.",
    "materiel": [
      "Citadis Dualis",
      "Avanto"
    ],
    "stopAreaIds": [
      "411283"
    ],
    "stopPointIds": [
      "471289",
      "472618"
    ]
  },
  {
    "nom": "Rouget de Lisle",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Choisy-le-Roi.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479025"
    ],
    "stopPointIds": [
      "478978",
      "478986"
    ]
  },
  {
    "nom": "Rue de la Pompe",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44461"
    ],
    "stopPointIds": [
      "21908",
      "463055"
    ]
  },
  {
    "nom": "Rue des Boulets",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 11e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "425987"
    ],
    "stopPointIds": [
      "22442",
      "463298"
    ]
  },
  {
    "nom": "Rue du Bac",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 7e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "58717"
    ],
    "stopPointIds": [
      "22043",
      "462950"
    ]
  },
  {
    "nom": "Rue Saint-Maur",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris 11e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "45194"
    ],
    "stopPointIds": [
      "22025",
      "463297"
    ]
  },
  {
    "nom": "Rueil-Malmaison",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Rueil-Malmaison.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "58875"
    ],
    "stopPointIds": [
      "412796",
      "474020",
      "474021",
      "474022",
      "474023"
    ]
  },
  {
    "nom": "Rueil–Suresnes Mont-Valérien",
    "lignes": [
      "15"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MR6V"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Rungis la Fraternelle",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Rungis.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "44787"
    ],
    "stopPointIds": [
      "41329",
      "471045",
      "471741"
    ]
  },
  {
    "nom": "Saarinen",
    "lignes": [
      "T7"
    ],
    "resume": "Station située à Rungis.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "52184"
    ],
    "stopPointIds": [
      "35935",
      "35939"
    ]
  },
  {
    "nom": "Saint-Ambroise",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 11e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "45205"
    ],
    "stopPointIds": [
      "21910",
      "463299"
    ]
  },
  {
    "nom": "Saint-Augustin",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 8e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44857"
    ],
    "stopPointIds": [
      "21911",
      "463300"
    ]
  },
  {
    "nom": "Saint-Chéron",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Saint-Chéron.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "47952"
    ],
    "stopPointIds": [
      "41322",
      "471463",
      "472475"
    ]
  },
  {
    "nom": "Saint-Cloud",
    "lignes": [
      "15",
      "L",
      "U"
    ],
    "resume": "Station située à Saint-Cloud.",
    "materiel": [
      "MR6V",
      "Z 50000 Francilien",
      "Z 8800"
    ],
    "stopAreaIds": [
      "43196"
    ],
    "stopPointIds": [
      "41178",
      "470852",
      "471421",
      "471432",
      "471906"
    ]
  },
  {
    "nom": "Saint-Cyr",
    "lignes": [
      "C",
      "N",
      "U",
      "T13"
    ],
    "resume": "Station située à Saint-Cyr-l'École.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Regio 2N",
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "46990",
      "480909"
    ],
    "stopPointIds": [
      "41222",
      "470890",
      "471036",
      "471247",
      "471899",
      "472732",
      "472908",
      "480908",
      "481066",
      "494486"
    ]
  },
  {
    "nom": "Saint-Denis",
    "lignes": [
      "D",
      "H",
      "T1",
      "T8"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N",
      "Z 50000 Francilien",
      "Citadis 305",
      "TFS",
      "Citadis 302"
    ],
    "stopAreaIds": [
      "412743",
      "462392"
    ],
    "stopPointIds": [
      "22635",
      "24431",
      "411414",
      "42122",
      "42126",
      "470626",
      "470700",
      "471298",
      "471568",
      "472089",
      "472399",
      "472918"
    ]
  },
  {
    "nom": "Saint-Denis - Porte de Paris",
    "lignes": [
      "13",
      "T8"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "MF 77",
      "Citadis 302"
    ],
    "stopAreaIds": [
      "44861",
      "473458"
    ],
    "stopPointIds": [
      "22241",
      "42120",
      "42123",
      "463301"
    ]
  },
  {
    "nom": "Saint-Denis - Université",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44860"
    ],
    "stopPointIds": [
      "22242",
      "463302"
    ]
  },
  {
    "nom": "Saint-Denis Pleyel",
    "lignes": [
      "14",
      "15",
      "16",
      "17"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "MP 14 CA",
      "MR6V",
      "MR3V"
    ],
    "stopAreaIds": [
      "490775"
    ],
    "stopPointIds": [
      "490774",
      "490794"
    ]
  },
  {
    "nom": "Saint-Fargeau",
    "lignes": [
      "3bis",
      "D"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MF 67",
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "44864",
      "45814"
    ],
    "stopPointIds": [
      "21946",
      "41388",
      "463071",
      "471461",
      "472872"
    ]
  },
  {
    "nom": "Saint-François-Xavier",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris 7e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "45139"
    ],
    "stopPointIds": [
      "22217",
      "463303"
    ]
  },
  {
    "nom": "Saint-Georges",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "44867"
    ],
    "stopPointIds": [
      "22044",
      "463304"
    ]
  },
  {
    "nom": "Saint-Germain-des-Prés",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris 6e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "44799"
    ],
    "stopPointIds": [
      "22136",
      "462993"
    ]
  },
  {
    "nom": "Saint-Germain-en-Laye",
    "lignes": [
      "A",
      "T13"
    ],
    "resume": "Station située à Saint-Germain-en-Laye.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo",
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "43198",
      "480905"
    ],
    "stopPointIds": [
      "40927",
      "474015",
      "474016",
      "474017",
      "480904",
      "481067"
    ]
  },
  {
    "nom": "Saint-Gratien",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Saint-Gratien.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43201"
    ],
    "stopPointIds": [
      "41095",
      "472677",
      "472836"
    ]
  },
  {
    "nom": "Saint-Jacques",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 14e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "45315"
    ],
    "stopPointIds": [
      "22160",
      "463305"
    ]
  },
  {
    "nom": "Saint-Julien du Sault",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Saint-Julien-du-Sault.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411473"
    ],
    "stopPointIds": [
      "411472",
      "471902",
      "472264",
      "472313",
      "472772"
    ]
  },
  {
    "nom": "Saint-Leu-d'Esserent",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Saint-Leu-d'Esserent.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "411329"
    ],
    "stopPointIds": [
      "411328",
      "471736",
      "472485"
    ]
  },
  {
    "nom": "Saint-Leu-la-Forêt",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Saint-Leu-la-Forêt.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "48964"
    ],
    "stopPointIds": [
      "41118",
      "470668",
      "471051",
      "471080"
    ]
  },
  {
    "nom": "Saint-Mammès",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Saint-Mammès.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47953"
    ],
    "stopPointIds": [
      "41375",
      "472231",
      "472385"
    ]
  },
  {
    "nom": "Saint-Mandé",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Vincennes.",
    "materiel": [
      "MP 05"
    ],
    "stopAreaIds": [
      "47247"
    ],
    "stopPointIds": [
      "22103",
      "463040"
    ]
  },
  {
    "nom": "Saint-Marcel",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44875"
    ],
    "stopPointIds": [
      "22000",
      "463097"
    ]
  },
  {
    "nom": "Saint-Martin d'Étampes",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Étampes.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "47115"
    ],
    "stopPointIds": [
      "41316",
      "472800"
    ]
  },
  {
    "nom": "Saint-Maur - Créteil",
    "lignes": [
      "15",
      "A"
    ],
    "resume": "Station située à Saint-Maur-des-Fossés.",
    "materiel": [
      "MR6V",
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "44801"
    ],
    "stopPointIds": [
      "412719",
      "474013",
      "474014"
    ]
  },
  {
    "nom": "Saint-Michel",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris 6e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "462369"
    ],
    "stopPointIds": [
      "22137",
      "463306"
    ]
  },
  {
    "nom": "Saint-Michel Notre-Dame",
    "lignes": [
      "B",
      "C"
    ],
    "resume": "Station située à Paris 5e.",
    "materiel": [
      "MI 79",
      "MI 84",
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "44877"
    ],
    "stopPointIds": [
      "412816",
      "470634",
      "472262",
      "473915",
      "473916"
    ]
  },
  {
    "nom": "Saint-Michel-sur-Orge",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Saint-Michel-sur-Orge.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43202"
    ],
    "stopPointIds": [
      "41305",
      "470965",
      "472833"
    ]
  },
  {
    "nom": "Saint-Nom-la-Bretèche - Forêt de Marly",
    "lignes": [
      "L",
      "T13"
    ],
    "resume": "Station située à L'Étang-la-Ville.",
    "materiel": [
      "Z 50000 Francilien",
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "47954",
      "480907"
    ],
    "stopPointIds": [
      "41187",
      "471811",
      "472894",
      "480906",
      "481072"
    ]
  },
  {
    "nom": "Saint-Ouen",
    "lignes": [
      "14",
      "C"
    ],
    "resume": "Station située à Saint-Ouen.",
    "materiel": [
      "MP 14 CA",
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43203",
      "480289"
    ],
    "stopPointIds": [
      "41076",
      "471049",
      "471345",
      "480288",
      "480341"
    ]
  },
  {
    "nom": "Saint-Ouen-l'Aumône",
    "lignes": [
      "C",
      "H"
    ],
    "resume": "Station située à Saint-Ouen-l'Aumône.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47599"
    ],
    "stopPointIds": [
      "41090",
      "471117",
      "471653",
      "472654"
    ]
  },
  {
    "nom": "Saint-Ouen-l'Aumône Liesse",
    "lignes": [
      "C",
      "H"
    ],
    "resume": "Station située à Saint-Ouen-l'Aumône.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43150"
    ],
    "stopPointIds": [
      "41129",
      "471301",
      "473006"
    ]
  },
  {
    "nom": "Saint-Ouen-l'Aumône Quartier de l'Église",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Saint-Ouen-l'Aumône.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47955"
    ],
    "stopPointIds": [
      "41146",
      "470962",
      "471776"
    ]
  },
  {
    "nom": "Saint-Paul",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris 4e.",
    "materiel": [
      "MP 05"
    ],
    "stopAreaIds": [
      "44881"
    ],
    "stopPointIds": [
      "22074",
      "463307"
    ]
  },
  {
    "nom": "Saint-Philippe-du-Roule",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 8e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44884"
    ],
    "stopPointIds": [
      "21912",
      "462915"
    ]
  },
  {
    "nom": "Saint-Piat",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Saint-Piat.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411501"
    ],
    "stopPointIds": [
      "411500",
      "471949",
      "472678"
    ]
  },
  {
    "nom": "Saint-Placide",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris 6e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "44885"
    ],
    "stopPointIds": [
      "22138",
      "463308"
    ]
  },
  {
    "nom": "Saint-Quentin en Yvelines - Montigny-le-Bretonneux",
    "lignes": [
      "C",
      "N",
      "U"
    ],
    "resume": "Station située à Montigny-le-Bretonneux.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "461504"
    ],
    "stopPointIds": [
      "41251",
      "470830",
      "471329",
      "471781",
      "472414",
      "472731",
      "472780"
    ]
  },
  {
    "nom": "Saint-Quentin Est",
    "lignes": [
      "18"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MRV"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Saint-Rémy-la-Vanne",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Saint-Rémy-la-Vanne.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47956"
    ],
    "stopPointIds": [
      "41056"
    ]
  },
  {
    "nom": "Saint-Rémy-lès-Chevreuse",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Saint-Rémy-lès-Chevreuse.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "47889"
    ],
    "stopPointIds": [
      "412844",
      "474009",
      "474011",
      "474012"
    ]
  },
  {
    "nom": "Saint-Sébastien - Froissart",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris 3e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "45208"
    ],
    "stopPointIds": [
      "22201",
      "463309"
    ]
  },
  {
    "nom": "Saint-Siméon",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Saint-Siméon.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47957"
    ],
    "stopPointIds": [
      "41055"
    ]
  },
  {
    "nom": "Saint-Sulpice",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris 6e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "45120"
    ],
    "stopPointIds": [
      "22139",
      "462992"
    ]
  },
  {
    "nom": "Sainte-Colombe Septveilles",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Sainte-Colombe.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47171"
    ],
    "stopPointIds": [
      "41042",
      "472837"
    ]
  },
  {
    "nom": "Sainte-Geneviève-des-Bois",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Sainte-Geneviève-des-Bois.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43188"
    ],
    "stopPointIds": [
      "41306",
      "471366",
      "472285"
    ]
  },
  {
    "nom": "Sannois",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Sannois.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43189"
    ],
    "stopPointIds": [
      "41096",
      "470876",
      "472328"
    ]
  },
  {
    "nom": "Santeuil - Le Perchay",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Santeuil.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47949"
    ],
    "stopPointIds": [
      "41143",
      "471631",
      "472637"
    ]
  },
  {
    "nom": "Sarcelles - Saint-Brice",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Saint-Brice-sous-Forêt.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43190"
    ],
    "stopPointIds": [
      "411423",
      "471312",
      "472223",
      "472533"
    ]
  },
  {
    "nom": "Sartrouville",
    "lignes": [
      "A",
      "J",
      "L"
    ],
    "resume": "Station située à Sartrouville.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43191"
    ],
    "stopPointIds": [
      "411360",
      "470846",
      "471244",
      "471763",
      "472009",
      "472440"
    ]
  },
  {
    "nom": "Satory",
    "lignes": [
      "18"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MRV"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Savigny-le-Temple - Nandy",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Savigny-le-Temple.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47665"
    ],
    "stopPointIds": [
      "41370",
      "470678",
      "471687",
      "472545",
      "472583"
    ]
  },
  {
    "nom": "Savigny-sur-Orge",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Savigny-sur-Orge.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43192"
    ],
    "stopPointIds": [
      "41308",
      "471613",
      "472330"
    ]
  },
  {
    "nom": "Sceaux",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Sceaux.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "59206"
    ],
    "stopPointIds": [
      "412841",
      "474018",
      "474019"
    ]
  },
  {
    "nom": "Sens",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Sens.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411452"
    ],
    "stopPointIds": [
      "411451",
      "471044",
      "471048",
      "471655",
      "472247",
      "472658"
    ]
  },
  {
    "nom": "Sentier",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris 2e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "44825"
    ],
    "stopPointIds": [
      "22029",
      "462986"
    ]
  },
  {
    "nom": "Serge Gainsbourg",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Les Lilas.",
    "materiel": [
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "490763"
    ],
    "stopPointIds": [
      "490762",
      "490787"
    ]
  },
  {
    "nom": "Sermaise",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Sermaise.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "47950"
    ],
    "stopPointIds": [
      "41323",
      "471838",
      "472049"
    ]
  },
  {
    "nom": "Seugy",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Seugy.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47951"
    ],
    "stopPointIds": [
      "41079",
      "470786"
    ]
  },
  {
    "nom": "Sevran - Beaudottes",
    "lignes": [
      "16",
      "B"
    ],
    "resume": "Station située à Sevran.",
    "materiel": [
      "MR3V",
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43193"
    ],
    "stopPointIds": [
      "411413",
      "470731",
      "472186"
    ]
  },
  {
    "nom": "Sevran - Livry",
    "lignes": [
      "16",
      "B"
    ],
    "resume": "Station située à Sevran.",
    "materiel": [
      "MR3V",
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "43194"
    ],
    "stopPointIds": [
      "411411",
      "471467",
      "471476",
      "472535",
      "472962"
    ]
  },
  {
    "nom": "Sèvres - Babylone",
    "lignes": [
      "10",
      "12"
    ],
    "resume": "Station située à Paris 6e.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "44828"
    ],
    "stopPointIds": [
      "21976",
      "21980",
      "462966",
      "462967"
    ]
  },
  {
    "nom": "Sèvres - Ville-d'Avray",
    "lignes": [
      "L",
      "U"
    ],
    "resume": "Station située à Sèvres.",
    "materiel": [
      "Z 50000 Francilien",
      "Z 8800"
    ],
    "stopAreaIds": [
      "47767"
    ],
    "stopPointIds": [
      "41177",
      "471746",
      "472701"
    ]
  },
  {
    "nom": "Sèvres Rive Gauche",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Sèvres.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43195"
    ],
    "stopPointIds": [
      "41216",
      "470898",
      "471152",
      "471302",
      "472662"
    ]
  },
  {
    "nom": "Sèvres-Lecourbe",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ],
    "stopAreaIds": [
      "44829"
    ],
    "stopPointIds": [
      "22163",
      "463314"
    ]
  },
  {
    "nom": "Ségur",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "51612"
    ],
    "stopPointIds": [
      "21979",
      "463315"
    ]
  },
  {
    "nom": "Séverine",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "45629"
    ],
    "stopPointIds": [
      "24397",
      "24400"
    ]
  },
  {
    "nom": "Simplon",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "44833"
    ],
    "stopPointIds": [
      "22133",
      "463310"
    ]
  },
  {
    "nom": "Soleil Levant",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Clamart.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "44838"
    ],
    "stopPointIds": [
      "41857",
      "41858"
    ]
  },
  {
    "nom": "Solférino",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 7e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "44840"
    ],
    "stopPointIds": [
      "22045",
      "463311"
    ]
  },
  {
    "nom": "Souppes - Château-Landon",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Souppes-sur-Loing.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47118"
    ],
    "stopPointIds": [
      "41393",
      "470712",
      "472010"
    ]
  },
  {
    "nom": "Square Sainte-Odile",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "490894"
    ],
    "stopPointIds": [
      "490893",
      "490896"
    ]
  },
  {
    "nom": "Stade Charléty - Porte de Gentilly",
    "lignes": [
      "T3a"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "44892"
    ],
    "stopPointIds": [
      "24112",
      "28847"
    ]
  },
  {
    "nom": "Stade de France",
    "lignes": [
      "15"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MR6V"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Stade de France Saint-Denis",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43204"
    ],
    "stopPointIds": [
      "411370",
      "470637",
      "470904",
      "472411"
    ]
  },
  {
    "nom": "Stade Géo André",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à La Courneuve.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "46119"
    ],
    "stopPointIds": [
      "23303",
      "24429"
    ]
  },
  {
    "nom": "Stains la Cerisaie",
    "lignes": [
      "T11"
    ],
    "resume": "Station située à Stains.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "462931"
    ],
    "stopPointIds": [
      "471887",
      "472968",
      "495662"
    ]
  },
  {
    "nom": "Stalingrad",
    "lignes": [
      "2",
      "5",
      "7"
    ],
    "resume": "Station située à Paris 19e.",
    "materiel": [
      "MF 01",
      "MF 77"
    ],
    "stopAreaIds": [
      "44901"
    ],
    "stopPointIds": [
      "22001",
      "22107",
      "22368",
      "463008",
      "463009",
      "463032"
    ]
  },
  {
    "nom": "Strasbourg - Saint-Denis",
    "lignes": [
      "4",
      "8",
      "9"
    ],
    "resume": "Station située à Paris 2e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MF 77",
      "MF 01"
    ],
    "stopAreaIds": [
      "44909"
    ],
    "stopPointIds": [
      "21920",
      "22134",
      "22159",
      "463264",
      "463312",
      "463313"
    ]
  },
  {
    "nom": "Sucy - Bonneuil",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Sucy-en-Brie.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "58792"
    ],
    "stopPointIds": [
      "412803",
      "474007",
      "474010"
    ]
  },
  {
    "nom": "Sully - Morland",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris 4e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "44911"
    ],
    "stopPointIds": [
      "22369",
      "463265"
    ]
  },
  {
    "nom": "Suresnes - Longchamp",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Suresnes.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "44914"
    ],
    "stopPointIds": [
      "25645",
      "25646"
    ]
  },
  {
    "nom": "Suresnes Mont Valérien",
    "lignes": [
      "L",
      "U"
    ],
    "resume": "Station située à Suresnes.",
    "materiel": [
      "Z 50000 Francilien",
      "Z 8800"
    ],
    "stopAreaIds": [
      "43205"
    ],
    "stopPointIds": [
      "41180",
      "471065",
      "471181",
      "472349"
    ]
  },
  {
    "nom": "Survilliers - Fosses",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Fosses.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47958"
    ],
    "stopPointIds": [
      "41101",
      "470986",
      "472877"
    ]
  },
  {
    "nom": "Suzanne Lenglen",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "44917"
    ],
    "stopPointIds": [
      "22295",
      "22296"
    ]
  },
  {
    "nom": "Suzanne Valadon",
    "lignes": [
      "T5"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Translohr STE3"
    ],
    "stopAreaIds": [
      "50686"
    ],
    "stopPointIds": [
      "28848",
      "28857"
    ]
  },
  {
    "nom": "Tacoignières - Richebourg",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Tacoignières.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47959"
    ],
    "stopPointIds": [
      "41237",
      "471731",
      "472649"
    ]
  },
  {
    "nom": "Taverny",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Taverny.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43206"
    ],
    "stopPointIds": [
      "41120",
      "471641",
      "471883"
    ]
  },
  {
    "nom": "Temple",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris 3e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "44924"
    ],
    "stopPointIds": [
      "22026",
      "463316"
    ]
  },
  {
    "nom": "Ternes",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "44931"
    ],
    "stopPointIds": [
      "22108",
      "463266"
    ]
  },
  {
    "nom": "Télégraphe",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MP 14 CC"
    ],
    "stopAreaIds": [
      "44923"
    ],
    "stopPointIds": [
      "21993",
      "463319"
    ]
  },
  {
    "nom": "Théâtre Gérard Philipe",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "44937"
    ],
    "stopPointIds": [
      "22269",
      "23313"
    ]
  },
  {
    "nom": "Théâtre La Piscine",
    "lignes": [
      "T10"
    ],
    "resume": "Station située à Châtenay-Malabry.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "486829"
    ],
    "stopPointIds": [
      "486828",
      "486844"
    ]
  },
  {
    "nom": "Thérèse Pierre",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "Citadis 402"
    ],
    "stopAreaIds": [
      "490888"
    ],
    "stopPointIds": [
      "490887",
      "490889"
    ]
  },
  {
    "nom": "Thiais - Orly",
    "lignes": [
      "14"
    ],
    "resume": "Station située à Thiais.",
    "materiel": [
      "MP 14 CA"
    ],
    "stopAreaIds": [
      "490834"
    ],
    "stopPointIds": [
      "490833",
      "490852"
    ]
  },
  {
    "nom": "Thieux - Nantouillet",
    "lignes": [
      "K"
    ],
    "resume": "Station située à Nantouillet.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47960"
    ],
    "stopPointIds": [
      "41081",
      "472265",
      "472790"
    ]
  },
  {
    "nom": "Thomery",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Fontainebleau.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47961"
    ],
    "stopPointIds": [
      "41373",
      "471739",
      "472239"
    ]
  },
  {
    "nom": "Thun le Paradis",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Meulan-en-Yvelines.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "46902"
    ],
    "stopPointIds": [
      "41164",
      "470612",
      "471382"
    ]
  },
  {
    "nom": "Timbaud",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Gennevilliers.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ],
    "stopAreaIds": [
      "46450"
    ],
    "stopPointIds": [
      "23283",
      "23284"
    ]
  },
  {
    "nom": "Tolbiac",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris 13e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "43411"
    ],
    "stopPointIds": [
      "22370",
      "463267"
    ]
  },
  {
    "nom": "Torcy",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Torcy.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "43207"
    ],
    "stopPointIds": [
      "40944",
      "474005",
      "474006",
      "474008"
    ]
  },
  {
    "nom": "Tournan",
    "lignes": [
      "E",
      "P"
    ],
    "resume": "Station située à Tournan-en-Brie.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "43208"
    ],
    "stopPointIds": [
      "41043",
      "471445",
      "471983",
      "472817"
    ]
  },
  {
    "nom": "Traité de Rome",
    "lignes": [
      "T12"
    ],
    "resume": "Station située à Evry-Courcouronnes.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "486966"
    ],
    "stopPointIds": [
      "486965",
      "486994"
    ]
  },
  {
    "nom": "Trappes",
    "lignes": [
      "N",
      "U"
    ],
    "resume": "Station située à Trappes.",
    "materiel": [
      "Regio 2N",
      "Z 8800"
    ],
    "stopAreaIds": [
      "43209"
    ],
    "stopPointIds": [
      "41250",
      "472042",
      "472310",
      "472547",
      "472676"
    ]
  },
  {
    "nom": "Trie-Château",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Trie-Château.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "411338"
    ],
    "stopPointIds": [
      "411337",
      "470665",
      "472020"
    ]
  },
  {
    "nom": "Triel-sur-Seine",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Triel-sur-Seine.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "46926"
    ],
    "stopPointIds": [
      "41162",
      "470997",
      "472640"
    ]
  },
  {
    "nom": "Trilport",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Trilport.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47962"
    ],
    "stopPointIds": [
      "41060",
      "472185",
      "472274"
    ]
  },
  {
    "nom": "Trinité - d'Estienne d'Orves",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "45170"
    ],
    "stopPointIds": [
      "22046",
      "463317"
    ]
  },
  {
    "nom": "Trocadéro",
    "lignes": [
      "6",
      "9"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MP 73",
      "MP 89 CC",
      "MF 01"
    ],
    "stopAreaIds": [
      "44962"
    ],
    "stopPointIds": [
      "21917",
      "22164",
      "463268",
      "463318"
    ]
  },
  {
    "nom": "Trois Communes",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Thiais.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479026"
    ],
    "stopPointIds": [
      "478982",
      "478990"
    ]
  },
  {
    "nom": "Tuileries",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris 1er.",
    "materiel": [
      "MP 05"
    ],
    "stopAreaIds": [
      "45664"
    ],
    "stopPointIds": [
      "22075",
      "463041"
    ]
  },
  {
    "nom": "Us",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Us.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47922"
    ],
    "stopPointIds": [
      "41142",
      "470764",
      "471090"
    ]
  },
  {
    "nom": "Vaires - Torcy",
    "lignes": [
      "E",
      "P"
    ],
    "resume": "Station située à Vaires-sur-Marne.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "43211"
    ],
    "stopPointIds": [
      "41049",
      "471245",
      "471870",
      "472069",
      "472738"
    ]
  },
  {
    "nom": "Val d'Argenteuil",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Argenteuil.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43212"
    ],
    "stopPointIds": [
      "41161",
      "470667",
      "471415"
    ]
  },
  {
    "nom": "Val d'Europe",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Chessy.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "43213"
    ],
    "stopPointIds": [
      "40953",
      "474003",
      "474004"
    ]
  },
  {
    "nom": "Val de Fontenay",
    "lignes": [
      "A",
      "E"
    ],
    "resume": "Station située à Fontenay-sous-Bois.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo",
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47900"
    ],
    "stopPointIds": [
      "41019",
      "470867",
      "471194",
      "471654",
      "471698",
      "474001",
      "474002"
    ]
  },
  {
    "nom": "Vallée aux Loups",
    "lignes": [
      "T10"
    ],
    "resume": "Station située à Châtenay-Malabry.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "486823"
    ],
    "stopPointIds": [
      "486822",
      "486847"
    ]
  },
  {
    "nom": "Valmondois",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Butry-sur-Oise.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47588"
    ],
    "stopPointIds": [
      "41111",
      "472090",
      "472121",
      "472165",
      "472456",
      "472795"
    ]
  },
  {
    "nom": "Vaneau",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris 6e.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ],
    "stopAreaIds": [
      "45116"
    ],
    "stopPointIds": [
      "21977",
      "462959"
    ]
  },
  {
    "nom": "Vanves - Malakoff",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Vanves.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43214"
    ],
    "stopPointIds": [
      "41205",
      "470871",
      "471812",
      "472007",
      "472047"
    ]
  },
  {
    "nom": "Varenne",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris 7e.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "45131"
    ],
    "stopPointIds": [
      "22226",
      "463320"
    ]
  },
  {
    "nom": "Vauban",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Châtillon.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "59202"
    ],
    "stopPointIds": [
      "41671",
      "41672"
    ]
  },
  {
    "nom": "Vauboyen",
    "lignes": [
      "V"
    ],
    "resume": "Station située à Jouy-en-Josas.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43215"
    ],
    "stopPointIds": [
      "41241",
      "471996",
      "472889"
    ]
  },
  {
    "nom": "Vaucelles",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Taverny.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47963"
    ],
    "stopPointIds": [
      "41119",
      "471672",
      "472910"
    ]
  },
  {
    "nom": "Vaucresson",
    "lignes": [
      "L"
    ],
    "resume": "Station située à Vaucresson.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43216"
    ],
    "stopPointIds": [
      "41175",
      "471026",
      "471037"
    ]
  },
  {
    "nom": "Vaugirard",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "44995"
    ],
    "stopPointIds": [
      "22047",
      "463321"
    ]
  },
  {
    "nom": "Vaux-sur-Seine",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Vaux-sur-Seine.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43217"
    ],
    "stopPointIds": [
      "41163",
      "470629",
      "472999"
    ]
  },
  {
    "nom": "Vavin",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris 6e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ],
    "stopAreaIds": [
      "44997"
    ],
    "stopPointIds": [
      "22135",
      "463016"
    ]
  },
  {
    "nom": "Verdun - Hoche",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Thiais.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479027"
    ],
    "stopPointIds": [
      "478988",
      "478989"
    ]
  },
  {
    "nom": "Verneuil-l'Étang",
    "lignes": [
      "P"
    ],
    "resume": "Station située à Verneuil-l'Étang.",
    "materiel": [
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
    ],
    "stopAreaIds": [
      "47187"
    ],
    "stopPointIds": [
      "41035",
      "470682",
      "471267",
      "472675"
    ]
  },
  {
    "nom": "Vernon - Giverny",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Vernon.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "59038"
    ],
    "stopPointIds": [
      "41287",
      "471217",
      "471970"
    ]
  },
  {
    "nom": "Vernou-sur-Seine",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Vernou-la-Celle-sur-Seine.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43218"
    ],
    "stopPointIds": [
      "41383",
      "472351",
      "472841"
    ]
  },
  {
    "nom": "Vernouillet - Verneuil",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Verneuil-sur-Seine.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47964"
    ],
    "stopPointIds": [
      "41198",
      "470650",
      "470930",
      "471622",
      "472710"
    ]
  },
  {
    "nom": "Versailles Chantiers",
    "lignes": [
      "18",
      "C",
      "N",
      "U",
      "V"
    ],
    "resume": "Station située à Versailles.",
    "materiel": [
      "MRV",
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43219"
    ],
    "stopPointIds": [
      "41207",
      "470737",
      "470766",
      "471389",
      "471738",
      "471928",
      "472104",
      "472407",
      "472737"
    ]
  },
  {
    "nom": "Versailles Château Rive Gauche",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Versailles.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "43220"
    ],
    "stopPointIds": [
      "41217",
      "470707",
      "470893",
      "471963",
      "472314"
    ]
  },
  {
    "nom": "Versailles Rive Droite",
    "lignes": [
      "L"
    ],
    "resume": "Station située à Versailles.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "44602"
    ],
    "stopPointIds": [
      "41190",
      "470933",
      "470999"
    ]
  },
  {
    "nom": "Vert-Galant",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Villepinte.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "46222"
    ],
    "stopPointIds": [
      "411412",
      "470873",
      "472517",
      "472643",
      "472700"
    ]
  },
  {
    "nom": "Vélizy 2",
    "lignes": [
      "T6"
    ],
    "resume": "Station située à Vélizy-Villacoublay.",
    "materiel": [
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "59053"
    ],
    "stopPointIds": [
      "41851",
      "41854"
    ]
  },
  {
    "nom": "Viarmes",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Viarmes.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47525"
    ],
    "stopPointIds": [
      "41114",
      "471497"
    ]
  },
  {
    "nom": "Victor Basch",
    "lignes": [
      "T2"
    ],
    "resume": "Station située à Colombes.",
    "materiel": [
      "Citadis 302"
    ],
    "stopAreaIds": [
      "58494"
    ],
    "stopPointIds": [
      "23431",
      "23432"
    ]
  },
  {
    "nom": "Victor Hugo",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris 16e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "45020"
    ],
    "stopPointIds": [
      "22109",
      "463322"
    ]
  },
  {
    "nom": "Vigneux-sur-Seine",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Vigneux-sur-Seine.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45735"
    ],
    "stopPointIds": [
      "41339",
      "470627",
      "471136",
      "472304",
      "472907"
    ]
  },
  {
    "nom": "Villabé",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Villabé.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47904"
    ],
    "stopPointIds": [
      "41356",
      "470623",
      "471346"
    ]
  },
  {
    "nom": "Villaines",
    "lignes": [
      "H"
    ],
    "resume": "Station située à Villaines-sous-Bois.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47522"
    ],
    "stopPointIds": [
      "41078",
      "470710"
    ]
  },
  {
    "nom": "Villejuif - Gustave Roussy",
    "lignes": [
      "14",
      "15"
    ],
    "resume": "Station située à Villejuif.",
    "materiel": [
      "MP 14 CA",
      "MR6V"
    ],
    "stopAreaIds": [
      "490907"
    ],
    "stopPointIds": [
      "490906",
      "490916"
    ]
  },
  {
    "nom": "Villejuif - Louis Aragon",
    "lignes": [
      "7",
      "15",
      "T7"
    ],
    "resume": "Station située à Villejuif.",
    "materiel": [
      "MF 77",
      "MR6V",
      "Citadis 302"
    ],
    "stopAreaIds": [
      "45049",
      "473766"
    ],
    "stopPointIds": [
      "22400",
      "29903",
      "35946",
      "463269"
    ]
  },
  {
    "nom": "Villejuif Léo Lagrange",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Villejuif.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "47826"
    ],
    "stopPointIds": [
      "22399",
      "463323"
    ]
  },
  {
    "nom": "Villejuif Paul Vaillant-Couturier",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Villejuif.",
    "materiel": [
      "MF 77"
    ],
    "stopAreaIds": [
      "58471"
    ],
    "stopPointIds": [
      "22401",
      "463324"
    ]
  },
  {
    "nom": "Villeneuve Triage",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Villeneuve-Saint-Georges.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "46304"
    ],
    "stopPointIds": [
      "41359",
      "470795",
      "472347",
      "472544"
    ]
  },
  {
    "nom": "Villeneuve-la-Guyard",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Villeneuve-la-Guyard.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411464"
    ],
    "stopPointIds": [
      "411463",
      "471688",
      "471900",
      "472715",
      "472987"
    ]
  },
  {
    "nom": "Villeneuve-le-Roi",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Villeneuve-le-Roi.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "46307"
    ],
    "stopPointIds": [
      "41312",
      "470951",
      "472125"
    ]
  },
  {
    "nom": "Villeneuve-Saint-Georges",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Villeneuve-Saint-Georges.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "45067"
    ],
    "stopPointIds": [
      "41360",
      "470943",
      "470949",
      "471784",
      "472195",
      "472465",
      "472886",
      "473001"
    ]
  },
  {
    "nom": "Villeneuve-sur-Yonne",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Villeneuve-sur-Yonne.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "411476"
    ],
    "stopPointIds": [
      "411475",
      "470746",
      "471088",
      "471390",
      "471496"
    ]
  },
  {
    "nom": "Villennes-sur-Seine",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Villennes-sur-Seine.",
    "materiel": [
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "47966"
    ],
    "stopPointIds": [
      "41197",
      "471690",
      "472816"
    ]
  },
  {
    "nom": "Villeparisis - Mitry-le-Neuf",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Mitry-Mory.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "46725"
    ],
    "stopPointIds": [
      "411403",
      "470683",
      "471813",
      "472374",
      "472470"
    ]
  },
  {
    "nom": "Villepinte",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Villepinte.",
    "materiel": [
      "MI 79",
      "MI 84"
    ],
    "stopAreaIds": [
      "58793"
    ],
    "stopPointIds": [
      "40962",
      "471271",
      "472174"
    ]
  },
  {
    "nom": "Villepreux - Les Clayes",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Les Clayes-sous-Bois.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43221"
    ],
    "stopPointIds": [
      "41233",
      "471442",
      "471493"
    ]
  },
  {
    "nom": "Villetaneuse - Université",
    "lignes": [
      "T8",
      "T11"
    ],
    "resume": "Station située à Villetaneuse.",
    "materiel": [
      "Citadis 302",
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "462926"
    ],
    "stopPointIds": [
      "42127",
      "42129",
      "470851",
      "472820",
      "495664",
      "495665"
    ]
  },
  {
    "nom": "Villiers",
    "lignes": [
      "2",
      "3"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "MF 01",
      "MF 67"
    ],
    "stopAreaIds": [
      "45056"
    ],
    "stopPointIds": [
      "22027",
      "22106",
      "462987",
      "462988"
    ]
  },
  {
    "nom": "Villiers - Neauphle - Pontchartrain",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Villiers-Saint-Frédéric.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "46847"
    ],
    "stopPointIds": [
      "41253",
      "470968",
      "472428"
    ]
  },
  {
    "nom": "Villiers Montbarbin",
    "lignes": [
      "T14"
    ],
    "resume": "Station située à Crécy-la-Chapelle.",
    "materiel": [
      "Citadis Dualis"
    ],
    "stopAreaIds": [
      "492423"
    ],
    "stopPointIds": [
      "492422"
    ]
  },
  {
    "nom": "Villiers-le-Bel - Gonesse - Arnouville",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Arnouville.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43222"
    ],
    "stopPointIds": [
      "41097",
      "470843",
      "471491",
      "471601",
      "471989",
      "472106",
      "472108"
    ]
  },
  {
    "nom": "Villiers-sur-Marne - Le Plessis-Trévise",
    "lignes": [
      "E"
    ],
    "resume": "Station située à Villiers-sur-Marne.",
    "materiel": [
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ],
    "stopAreaIds": [
      "43223"
    ],
    "stopPointIds": [
      "41022",
      "471450",
      "472393",
      "472958"
    ]
  },
  {
    "nom": "Villiers–Champigny–Bry",
    "lignes": [
      "15"
    ],
    "resume": "Station située à Île-de-France.",
    "materiel": [
      "MR6V"
    ],
    "stopAreaIds": [],
    "stopPointIds": []
  },
  {
    "nom": "Vincennes",
    "lignes": [
      "A"
    ],
    "resume": "Station située à Vincennes.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo"
    ],
    "stopAreaIds": [
      "43224"
    ],
    "stopPointIds": [
      "412811",
      "473998",
      "474000"
    ]
  },
  {
    "nom": "Viroflay - Rive Droite",
    "lignes": [
      "L",
      "T6"
    ],
    "resume": "Station située à Viroflay.",
    "materiel": [
      "Z 50000 Francilien",
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "46689",
      "473567"
    ],
    "stopPointIds": [
      "41192",
      "422039",
      "422040",
      "472236",
      "473014"
    ]
  },
  {
    "nom": "Viroflay - Rive Gauche",
    "lignes": [
      "C",
      "N",
      "T6"
    ],
    "resume": "Station située à Viroflay.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600",
      "Regio 2N",
      "Translohr STE6"
    ],
    "stopAreaIds": [
      "462388",
      "473569"
    ],
    "stopPointIds": [
      "41221",
      "422037",
      "422038",
      "471175",
      "471343",
      "471362",
      "471767",
      "472387",
      "472845"
    ]
  },
  {
    "nom": "Viry-Châtillon",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Viry-Châtillon.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43225"
    ],
    "stopPointIds": [
      "41340",
      "471361",
      "471862"
    ]
  },
  {
    "nom": "Vitry-sur-Seine",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Vitry-sur-Seine.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "46375"
    ],
    "stopPointIds": [
      "41314",
      "470880",
      "471123"
    ]
  },
  {
    "nom": "Volontaires",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris 15e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "45060"
    ],
    "stopPointIds": [
      "22048",
      "462964"
    ]
  },
  {
    "nom": "Voltaire",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris 11e.",
    "materiel": [
      "MF 01"
    ],
    "stopAreaIds": [
      "45065"
    ],
    "stopPointIds": [
      "21916",
      "463325"
    ]
  },
  {
    "nom": "Vosves",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Dammarie-les-Lys.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47967"
    ],
    "stopPointIds": [
      "41385",
      "472809",
      "472911"
    ]
  },
  {
    "nom": "Voves",
    "lignes": [
      "C"
    ],
    "resume": "Station située à Les Villages Vovéens.",
    "materiel": [
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
    ],
    "stopAreaIds": [
      "411449"
    ],
    "stopPointIds": [
      "411448",
      "471381",
      "472561",
      "472948"
    ]
  },
  {
    "nom": "Vulaines-sur-Seine - Samoreau",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Vulaines-sur-Seine.",
    "materiel": [
      "Regio 2N"
    ],
    "stopAreaIds": [
      "47136"
    ],
    "stopPointIds": [
      "41381",
      "472078",
      "472123"
    ]
  },
  {
    "nom": "Wagram",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "MF 67"
    ],
    "stopAreaIds": [
      "45508"
    ],
    "stopPointIds": [
      "22028",
      "463070"
    ]
  },
  {
    "nom": "Watteau - Rondenay",
    "lignes": [
      "T9"
    ],
    "resume": "Station située à Vitry-sur-Seine.",
    "materiel": [
      "Citadis 405"
    ],
    "stopAreaIds": [
      "479028"
    ],
    "stopPointIds": [
      "478973",
      "478987"
    ]
  },
  {
    "nom": "Yerres",
    "lignes": [
      "D"
    ],
    "resume": "Station située à Yerres.",
    "materiel": [
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ],
    "stopAreaIds": [
      "43226"
    ],
    "stopPointIds": [
      "41363",
      "470799",
      "471373",
      "472460",
      "472806"
    ]
  }
];

const lineMap = new Map(lignesMetro.map(l => [l.id, l]));

export function getLineLogo(id) {
  const ligne = lineMap.get(String(id));
  if (ligne && ligne.logo) return ligne.logo;
  return `/assets/${id}-logo.png`;
}

export function getLinePlan(id) {
  const ligne = lineMap.get(String(id));
  if (ligne && ligne.plan) return ligne.plan;
  return `/assets/${id}-plan.png`;
}

export function getModeLogo(mode, white = false) {
  const prefix = white ? "Paris_transit_icons_white_-_" : "Paris_transit_icons_-_";
  switch (mode) {
    case "rer":
      return `/assets/${prefix}RER.svg`;
    case "transilien":
    case "rail":
      return `/assets/${prefix}Train.svg`;
    case "tram":
      return `/assets/${prefix}Tram.svg`;
    case "metro":
    default:
      return white ? "/assets/logo-metro-blanc.svg" : "/assets/logo-metro-noir.svg";
  }
}
