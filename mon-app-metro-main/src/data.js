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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
      "B",
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
    "color": "#FFCD00"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
    "color": "#003CA6"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
      "A",
      "D",
      "E",
      "J",
      "L",
      "T3b"
    ],
    "color": "#837902"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
    "color": "#6EC4E8"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
      "A",
      "B",
      "C",
      "D",
      "E",
      "H",
      "K",
      "N",
      "P",
      "T3a",
      "T3b"
    ],
    "color": "#BE418D"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
      "E",
      "H",
      "K",
      "P",
      "T1"
    ],
    "color": "#FF7E2E"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
    "color": "#6ECA97"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
      "A",
      "B",
      "D",
      "E",
      "H",
      "K",
      "P",
      "T1",
      "T3a",
      "T7",
      "T9"
    ],
    "color": "#FA9ABA"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
    "color": "#6ECA97"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
    "color": "#D27AD2"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
      "12",
      "13",
      "14",
      "15",
      "A",
      "E",
      "J",
      "L",
      "T3b"
    ],
    "color": "#B6BD00"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
      "B",
      "C"
    ],
    "color": "#C9910D"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
      "A",
      "B",
      "D",
      "E",
      "T1",
      "T3b"
    ],
    "color": "#704B1C"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
      "9",
      "10",
      "13",
      "14",
      "A",
      "E",
      "J",
      "L",
      "N",
      "T2",
      "T3a",
      "T3b"
    ],
    "color": "#007852"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
      "A",
      "C",
      "E",
      "J",
      "L",
      "N",
      "T1",
      "T3a",
      "T3b",
      "T6",
      "T8"
    ],
    "color": "#6EC4E8"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
      "9",
      "11",
      "12",
      "13",
      "15",
      "16",
      "17",
      "18",
      "A",
      "B",
      "C",
      "D",
      "E",
      "J",
      "L",
      "R",
      "T3b",
      "T7"
    ],
    "color": "#62259D"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
    "color": "#DE005C"
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
    "modeLogo": "/assets/Paris_transit_icons_-_Métro.svg",
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
    "color": "#339999"
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
      "3",
      "4",
      "6",
      "7",
      "9",
      "11",
      "12",
      "13",
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
    "color": "#eb2132"
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
      "1",
      "4",
      "5",
      "6",
      "7",
      "10",
      "11",
      "14",
      "15",
      "16",
      "17",
      "18",
      "A",
      "C",
      "D",
      "E",
      "H",
      "K",
      "V",
      "T3a",
      "T4",
      "T10",
      "T11",
      "T12"
    ],
    "color": "#5091cb"
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
      "4",
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
    "color": "#ffcc30"
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
      "7",
      "11",
      "14",
      "15",
      "A",
      "B",
      "C",
      "E",
      "H",
      "K",
      "R",
      "T1",
      "T5",
      "T8",
      "T11",
      "T12"
    ],
    "color": "#008b5b"
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
      "3",
      "4",
      "5",
      "7",
      "9",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "A",
      "B",
      "C",
      "D",
      "H",
      "J",
      "K",
      "L",
      "P",
      "U",
      "T1",
      "T2",
      "T3b",
      "T4"
    ],
    "color": "#b94e9a"
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
      "7",
      "B",
      "C",
      "D",
      "E",
      "J",
      "K",
      "T1",
      "T8",
      "T11"
    ],
    "color": "#84653d"
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
      "9",
      "12",
      "13",
      "14",
      "15",
      "A",
      "C",
      "E",
      "H",
      "L",
      "N"
    ],
    "color": "#cec73d"
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
      "7",
      "B",
      "D",
      "E",
      "H",
      "T4"
    ],
    "color": "#9b9842"
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
      "9",
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
    "color": "#c4a4cc"
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
    "color": "#00b297"
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
    "color": "#f58f53"
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
    "color": "#f49fb3"
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
    "color": "#b6134c"
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
    "color": "#9f9825"
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
      "11",
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
    "color": "#0055c8"
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
    "color": "#a0006e"
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
    "color": "#ff5a00"
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
    "color": "#00643c"
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
    "color": "#dc9600"
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
    "color": "#640082"
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
    "color": "#ff0000"
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
    "color": "#6e491e"
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
    "color": "#6e6e00"
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
    "color": "#3c91dc"
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
    "color": "#6e6e00"
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
    "color": "#ff5a00"
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
    "color": "#a50034"
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
    "color": "#8d653d"
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
    "color": "#00a092"
  }
];

export const ligneColors = {
  "1": "#FFCD00",
  "2": "#003CA6",
  "3": "#837902",
  "3bis": "#6EC4E8",
  "4": "#BE418D",
  "5": "#FF7E2E",
  "6": "#6ECA97",
  "7": "#FA9ABA",
  "7bis": "#6ECA97",
  "8": "#D27AD2",
  "9": "#B6BD00",
  "10": "#C9910D",
  "11": "#704B1C",
  "12": "#007852",
  "13": "#6EC4E8",
  "14": "#62259D",
  "15": "#DE005C",
  "16": "#F1B19B",
  "17": "#944D9B",
  "18": "#339999",
  "T3a": "#ff5a00",
  "P": "#f58f53",
  "H": "#84653d",
  "K": "#9b9842",
  "J": "#cec73d",
  "T8": "#6e6e00",
  "T10": "#6e6e00",
  "T3b": "#00643c",
  "T5": "#640082",
  "D": "#008b5b",
  "E": "#b94e9a",
  "U": "#b6134c",
  "B": "#5091cb",
  "C": "#ffcc30",
  "R": "#f49fb3",
  "T4": "#dc9600",
  "T11": "#ff5a00",
  "T13": "#8d653d",
  "T12": "#a50034",
  "T14": "#00a092",
  "N": "#00b297",
  "T7": "#6e491e",
  "T6": "#ff0000",
  "T9": "#3c91dc",
  "T1": "#0055c8",
  "T2": "#a0006e",
  "L": "#c4a4cc",
  "A": "#eb2132",
  "V": "#9f9825"
};

export const stationsData = [
  {
    "nom": "Abbesses",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Aéroport Charles-de-Gaulle 2 TGV",
    "lignes": [
      "17"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MR3V"
    ]
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
    ]
  },
  {
    "nom": "Aimé Césaire",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Alexandre Dumas",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Alésia",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
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
    ]
  },
  {
    "nom": "Alma–Marceau",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Anatole France",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Antonypole",
    "lignes": [
      "18"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MRV"
    ]
  },
  {
    "nom": "Anvers",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Argentine",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05"
    ]
  },
  {
    "nom": "Aristide Briand",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Montreuil.",
    "materiel": [
      "Citadis 305",
      "TFS"
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
    ]
  },
  {
    "nom": "Arts et Métiers",
    "lignes": [
      "3",
      "11"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MP 14 CC"
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
    ]
  },
  {
    "nom": "Asnières–Gennevilliers–Les Courtilles",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Assemblée Nationale",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Aubervilliers–Pantin–Quatre Chemins",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Aulnay–Val Francilia",
    "lignes": [
      "16"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MR3V"
    ]
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
    ]
  },
  {
    "nom": "Avenue Émile-Zola",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
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
    ]
  },
  {
    "nom": "Avron",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Bagneux–Lucie Aubrac",
    "lignes": [
      "4",
      "15"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MR6V"
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
    ]
  },
  {
    "nom": "Barbara",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ]
  },
  {
    "nom": "Barbès–Rochechouart",
    "lignes": [
      "2",
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01",
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ]
  },
  {
    "nom": "Baron le Roy",
    "lignes": [
      "T3a"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "Citadis 402"
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
    ]
  },
  {
    "nom": "Bastille",
    "lignes": [
      "1",
      "5",
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05",
      "MF 01",
      "MF 77"
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
    ]
  },
  {
    "nom": "Bel-Air",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ]
  },
  {
    "nom": "Belleville",
    "lignes": [
      "2",
      "11"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01",
      "MP 14 CC"
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
    ]
  },
  {
    "nom": "Bérault",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05"
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
    ]
  },
  {
    "nom": "Billancourt",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Bir-Hakeim",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ]
  },
  {
    "nom": "Blanche",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Bobigny - Pantin - Raymond Queneau",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Bobigny–La Folie",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Boissière",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
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
    ]
  },
  {
    "nom": "Bolivar",
    "lignes": [
      "7bis"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 88"
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
    ]
  },
  {
    "nom": "Bonne Nouvelle",
    "lignes": [
      "8",
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77",
      "MF 01"
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
    ]
  },
  {
    "nom": "Botzaris",
    "lignes": [
      "7bis"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 88"
    ]
  },
  {
    "nom": "Boucicaut",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Boulogne–Jean Jaurès",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ]
  },
  {
    "nom": "Boulogne–Pont de Saint-Cloud",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
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
    ]
  },
  {
    "nom": "Bourse",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Bréguet–Sabin",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Brochant",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Buttes Chaumont",
    "lignes": [
      "7bis"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 88"
    ]
  },
  {
    "nom": "Buzenval",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Cadet",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Cambronne",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
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
    ]
  },
  {
    "nom": "Campo Formio",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Cardinal Lemoine",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
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
    ]
  },
  {
    "nom": "Carrefour de la Vierge",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Noisy-le-Sec.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ]
  },
  {
    "nom": "Carrefour Pleyel",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "CEA Saint-Aubin",
    "lignes": [
      "18"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MRV"
    ]
  },
  {
    "nom": "Censier–Daubenton",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Champigny Centre",
    "lignes": [
      "15"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MR6V"
    ]
  },
  {
    "nom": "Champigny-sur-Yonne",
    "lignes": [
      "R"
    ],
    "resume": "Station située à Champigny.",
    "materiel": [
      "Regio 2N"
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
    ]
  },
  {
    "nom": "Champs-Élysées–Clemenceau",
    "lignes": [
      "1",
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05",
      "MF 77"
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
    ]
  },
  {
    "nom": "Chardon Lagache",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ]
  },
  {
    "nom": "Charenton–Écoles",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Charles Michels",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ]
  },
  {
    "nom": "Charonne",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Chaussée d'Antin–La Fayette",
    "lignes": [
      "7",
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77",
      "MF 01"
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
    ]
  },
  {
    "nom": "Château d'Eau",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ]
  },
  {
    "nom": "Château de Landon",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Château de Vincennes",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05"
    ]
  },
  {
    "nom": "Château Rouge",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
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
    ]
  },
  {
    "nom": "Châtelet",
    "lignes": [
      "1",
      "4",
      "7",
      "11",
      "14",
      "A",
      "B",
      "D"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05",
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MF 77",
      "MP 14 CC",
      "MI 09",
      "MI 2N Altéo",
      "MI 79",
      "MI 84",
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ]
  },
  {
    "nom": "Châtelet - Les Halles",
    "lignes": [
      "1",
      "4",
      "7",
      "11",
      "14",
      "A",
      "B",
      "D"
    ],
    "resume": "Station située à Paris 1er.",
    "materiel": [
      "MP 05",
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MF 77",
      "MP 14 CC",
      "MI 09",
      "MI 2N Altéo",
      "MI 79",
      "MI 84",
      "Z 20500",
      "RER NG",
      "Regio 2N"
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
    ]
  },
  {
    "nom": "Chemin Vert",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Chevaleret",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
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
    ]
  },
  {
    "nom": "Cité",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
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
    ]
  },
  {
    "nom": "Cluny–La Sorbonne",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
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
    ]
  },
  {
    "nom": "Collège Gustave Courbet",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Romainville.",
    "materiel": [
      "Citadis 305",
      "TFS"
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
    ]
  },
  {
    "nom": "Colonel Fabien",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Commerce",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Concorde",
    "lignes": [
      "1",
      "8",
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05",
      "MF 77",
      "MF 67"
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
    ]
  },
  {
    "nom": "Convention",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Corentin Cariou",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Corentin Celton",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Corvisart",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
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
    ]
  },
  {
    "nom": "Coteaux Beauclair",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CC"
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
    ]
  },
  {
    "nom": "Cour Saint-Émilion",
    "lignes": [
      "14"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA"
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
    ]
  },
  {
    "nom": "Courcelles",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Couronnes",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Créteil–L'Échat",
    "lignes": [
      "8",
      "15"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77",
      "MR6V"
    ]
  },
  {
    "nom": "Créteil–Préfecture",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Créteil–Université",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Crimée",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Croix de Chavaux",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Danube",
    "lignes": [
      "7bis"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 88"
    ]
  },
  {
    "nom": "Daumesnil",
    "lignes": [
      "6",
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC",
      "MF 77"
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
    ]
  },
  {
    "nom": "Drancy-Bobigny",
    "lignes": [
      "15"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MR6V"
    ]
  },
  {
    "nom": "Dreux",
    "lignes": [
      "N"
    ],
    "resume": "Station située à Dreux.",
    "materiel": [
      "Regio 2N"
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
    ]
  },
  {
    "nom": "Dugommier",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ]
  },
  {
    "nom": "Dupleix",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ]
  },
  {
    "nom": "Duroc",
    "lignes": [
      "10",
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC",
      "MF 77"
    ]
  },
  {
    "nom": "Edgar Quinet",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
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
    ]
  },
  {
    "nom": "Esplanade de La Défense",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05"
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
    ]
  },
  {
    "nom": "Europe",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Exelmans",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "École Militaire",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "École Vétérinaire de Maisons-Alfort",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Église d'Auteuil",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ]
  },
  {
    "nom": "Église de Pantin",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Étienne Marcel",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
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
    ]
  },
  {
    "nom": "Évry-Courcouronnes",
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
    ]
  },
  {
    "nom": "Faidherbe–Chaligny",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Falguière",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Félix Faure",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Filles du Calvaire",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Fort d'Aubervilliers",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Franklin D. Roosevelt",
    "lignes": [
      "1",
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05",
      "MF 01"
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
    ]
  },
  {
    "nom": "Front Populaire",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Gabriel Péri",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Gaîté",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Gallieni",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Gambetta",
    "lignes": [
      "3",
      "3bis"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Gare de l'Est",
    "lignes": [
      "4",
      "5",
      "7",
      "E",
      "P"
    ],
    "resume": "Station située à Paris 10e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MF 01",
      "MF 77",
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien",
      "AGC BiBi",
      "Z 20500"
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
    ]
  },
  {
    "nom": "Gare du Nord",
    "lignes": [
      "4",
      "5",
      "B",
      "D",
      "E",
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
      "MI 2N Eole",
      "Z 50000 Francilien"
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
    ]
  },
  {
    "nom": "Gare Saint-Lazare",
    "lignes": [
      "3",
      "12",
      "13",
      "14",
      "E",
      "J",
      "L"
    ],
    "resume": "Station située à Paris 8e.",
    "materiel": [
      "MF 67",
      "MF 77",
      "MP 14 CA",
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
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
    ]
  },
  {
    "nom": "Garibaldi",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "George V",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05"
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
    ]
  },
  {
    "nom": "Glacière",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ]
  },
  {
    "nom": "Goncourt",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CC"
    ]
  },
  {
    "nom": "Gonesse",
    "lignes": [
      "17"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MR3V"
    ]
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
    ]
  },
  {
    "nom": "Grands Boulevards",
    "lignes": [
      "8",
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77",
      "MF 01"
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
    ]
  },
  {
    "nom": "Guy Môquet",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Haussmann Saint-Lazare",
    "lignes": [
      "3",
      "9",
      "12",
      "13",
      "14",
      "A",
      "E",
      "J",
      "L"
    ],
    "resume": "Station située à Paris 9e.",
    "materiel": [
      "MF 67",
      "MF 01",
      "MF 77",
      "MP 14 CA",
      "MI 09",
      "MI 2N Altéo",
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
    ]
  },
  {
    "nom": "Havre–Caumartin",
    "lignes": [
      "3",
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 01"
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
    ]
  },
  {
    "nom": "Hoche",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Hôpital Bicêtre",
    "lignes": [
      "14"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA"
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
    ]
  },
  {
    "nom": "Hôtel de Ville",
    "lignes": [
      "1",
      "11"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05",
      "MP 14 CC"
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
    ]
  },
  {
    "nom": "Hôtel de ville de la Courneuve",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à La Courneuve.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ]
  },
  {
    "nom": "Iéna",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Issy (RER)",
    "lignes": [
      "15"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MR6V"
    ]
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
    ]
  },
  {
    "nom": "Jacques Bonsergent",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Jasmin",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Jaurès",
    "lignes": [
      "2",
      "5",
      "7bis"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01",
      "MF 88"
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
    ]
  },
  {
    "nom": "Javel–André Citroën",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
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
    ]
  },
  {
    "nom": "Jourdain",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CC"
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
    ]
  },
  {
    "nom": "Jules Joffrin",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Jussieu",
    "lignes": [
      "7",
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77",
      "MF 67",
      "MF 19 CC"
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
    ]
  },
  {
    "nom": "Kléber",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
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
    ]
  },
  {
    "nom": "L'Haÿ-les-Roses",
    "lignes": [
      "14"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA"
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
    ]
  },
  {
    "nom": "La Chapelle",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "La Dhuys",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CC"
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
    ]
  },
  {
    "nom": "La Fourche",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "La Motte-Picquet–Grenelle",
    "lignes": [
      "6",
      "8",
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC",
      "MF 77",
      "MF 67",
      "MF 19 CC"
    ]
  },
  {
    "nom": "La Muette",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "La Plaine - Stade de France",
    "lignes": [
      "B"
    ],
    "resume": "Station située à Saint-Denis.",
    "materiel": [
      "MI 79",
      "MI 84"
    ]
  },
  {
    "nom": "La Tour-Maubourg",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Lamarck–Caulaincourt",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Laumière",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Le Bourget–Aéroport",
    "lignes": [
      "17"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MR3V"
    ]
  },
  {
    "nom": "Le Bourget–RER",
    "lignes": [
      "16",
      "17"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MR3V"
    ]
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
    ]
  },
  {
    "nom": "Le Kremlin-Bicêtre",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Le Mesnil-Amelot",
    "lignes": [
      "17"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MR3V"
    ]
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
    ]
  },
  {
    "nom": "Le Peletier",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Ledru-Rollin",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Les Agnettes",
    "lignes": [
      "13",
      "15"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77",
      "MR6V"
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
    ]
  },
  {
    "nom": "Les Courtilles",
    "lignes": [
      "13",
      "T1"
    ],
    "resume": "Station située à Asnières-sur-Seine.",
    "materiel": [
      "MF 77",
      "Citadis 305",
      "TFS"
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
    ]
  },
  {
    "nom": "Les Gobelins",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Les Halles",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
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
    ]
  },
  {
    "nom": "Les Sablons",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05"
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
    ]
  },
  {
    "nom": "Liberté",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Libre Pensée",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Romainville.",
    "materiel": [
      "Citadis 305",
      "TFS"
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
    ]
  },
  {
    "nom": "Liège",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Louis Blanc",
    "lignes": [
      "7",
      "7bis"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77",
      "MF 88"
    ]
  },
  {
    "nom": "Louise Michel",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Lourmel",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Louvre–Rivoli",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05"
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
    ]
  },
  {
    "nom": "Mabillon",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ]
  },
  {
    "nom": "Madeleine",
    "lignes": [
      "8",
      "12",
      "14"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77",
      "MF 67",
      "MP 14 CA"
    ]
  },
  {
    "nom": "Magenta",
    "lignes": [
      "4",
      "5",
      "7",
      "B",
      "D",
      "E",
      "H",
      "K"
    ],
    "resume": "Station située à Paris 10e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MF 01",
      "MF 77",
      "MI 79",
      "MI 84",
      "Z 20500",
      "RER NG",
      "Regio 2N",
      "MI 2N Eole",
      "Z 50000 Francilien"
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
    ]
  },
  {
    "nom": "Mairie d'Aubervilliers",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Mairie d'Issy",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Mairie d'Ivry",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Mairie de Clichy",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Mairie de Montreuil",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Mairie de Montrouge",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
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
    ]
  },
  {
    "nom": "Mairie de Saint-Ouen",
    "lignes": [
      "13",
      "14"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77",
      "MP 14 CA"
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
    ]
  },
  {
    "nom": "Mairie des Lilas",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CC"
    ]
  },
  {
    "nom": "Maison Blanche",
    "lignes": [
      "7",
      "14"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77",
      "MP 14 CA"
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
    ]
  },
  {
    "nom": "Maisons-Alfort–Les Juilliottes",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Maisons-Alfort–Stade",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Malakoff–Plateau de Vanves",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Malakoff–Rue Étienne-Dolet",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Maraîchers",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Marcadet–Poissonniers",
    "lignes": [
      "4",
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MF 67"
    ]
  },
  {
    "nom": "Marcel Sembat",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Marie de Miribel",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "Citadis 402"
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
    ]
  },
  {
    "nom": "Marx Dormoy",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Massy–Opéra",
    "lignes": [
      "18"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MRV"
    ]
  },
  {
    "nom": "Maubert–Mutualité",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
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
    ]
  },
  {
    "nom": "Ménilmontant",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Michel Bizot",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Michel-Ange–Auteuil",
    "lignes": [
      "9",
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01",
      "MF 67",
      "MF 19 CC"
    ]
  },
  {
    "nom": "Michel-Ange–Molitor",
    "lignes": [
      "9",
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01",
      "MF 67",
      "MF 19 CC"
    ]
  },
  {
    "nom": "Mirabeau",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ]
  },
  {
    "nom": "Miromesnil",
    "lignes": [
      "9",
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01",
      "MF 77"
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
    ]
  },
  {
    "nom": "Monceau",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Montgallet",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Montparnasse–Bienvenüe",
    "lignes": [
      "4",
      "6",
      "12",
      "13",
      "N"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MP 73",
      "MP 89 CC",
      "MF 67",
      "MF 77",
      "Regio 2N"
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
    ]
  },
  {
    "nom": "Montreuil - Hôpital",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CC"
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
    ]
  },
  {
    "nom": "Mouton-Duvernet",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
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
    ]
  },
  {
    "nom": "Nanterre - Université",
    "lignes": [
      "A",
      "L"
    ],
    "resume": "Station située à Nanterre.",
    "materiel": [
      "MI 09",
      "MI 2N Altéo",
      "Z 50000 Francilien"
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
    ]
  },
  {
    "nom": "Nanterre La Boule",
    "lignes": [
      "15"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MR6V"
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
    ]
  },
  {
    "nom": "Nationale",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
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
    ]
  },
  {
    "nom": "Neuilly - Porte Maillot",
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
    ]
  },
  {
    "nom": "Notre-Dame-de-Lorette",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Notre-Dame-des-Champs",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Oberkampf",
    "lignes": [
      "5",
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Odéon",
    "lignes": [
      "4",
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MF 67",
      "MF 19 CC"
    ]
  },
  {
    "nom": "Olympiades",
    "lignes": [
      "14"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA"
    ]
  },
  {
    "nom": "Opéra",
    "lignes": [
      "3",
      "7",
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 77"
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
    ]
  },
  {
    "nom": "Orly 1-2-3",
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
    ]
  },
  {
    "nom": "Orly 4",
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
    ]
  },
  {
    "nom": "Orsay–Gif",
    "lignes": [
      "18"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MRV"
    ]
  },
  {
    "nom": "Osny",
    "lignes": [
      "J"
    ],
    "resume": "Station située à Osny.",
    "materiel": [
      "Z 50000 Francilien"
    ]
  },
  {
    "nom": "Ourcq",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Palais Royal–Musée du Louvre",
    "lignes": [
      "1",
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05",
      "MF 77"
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
    ]
  },
  {
    "nom": "Parmentier",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Passy",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ]
  },
  {
    "nom": "Pasteur",
    "lignes": [
      "6",
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC",
      "MF 67"
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
    ]
  },
  {
    "nom": "Pelleport",
    "lignes": [
      "3bis"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Pereire",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Pernety",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Père Lachaise",
    "lignes": [
      "2",
      "3"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01",
      "MF 67"
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
    ]
  },
  {
    "nom": "Philippe Auguste",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Picpus",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
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
    ]
  },
  {
    "nom": "Pierre et Marie Curie",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Pigalle",
    "lignes": [
      "2",
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01",
      "MF 67"
    ]
  },
  {
    "nom": "Place Carnot",
    "lignes": [
      "11",
      "T1"
    ],
    "resume": "Station située à Romainville.",
    "materiel": [
      "MP 14 CC",
      "Citadis 305",
      "TFS"
    ]
  },
  {
    "nom": "Place d'Italie",
    "lignes": [
      "5",
      "6",
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01",
      "MP 73",
      "MP 89 CC",
      "MF 77"
    ]
  },
  {
    "nom": "Place de Clichy",
    "lignes": [
      "2",
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01",
      "MF 77"
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
    ]
  },
  {
    "nom": "Place des Fêtes",
    "lignes": [
      "7bis",
      "11"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 88",
      "MP 14 CC"
    ]
  },
  {
    "nom": "Place Jeanne d'Arc",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Noisy-le-Sec.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ]
  },
  {
    "nom": "Place Monge",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Plaisance",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Pointe du Lac",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Poissonnière",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Pont de Levallois–Bécon",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Pont de Neuilly",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05"
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
    ]
  },
  {
    "nom": "Pont de Sèvres",
    "lignes": [
      "9",
      "15"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01",
      "MR6V"
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
    ]
  },
  {
    "nom": "Pont du Garigliano - Hôpital Européen G. Pompidou",
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
    ]
  },
  {
    "nom": "Pont Marie",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Pont Neuf",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Porte d'Aubervilliers",
    "lignes": [
      "12",
      "T3b"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "MF 67",
      "Citadis 402"
    ]
  },
  {
    "nom": "Porte d'Auteuil",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
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
    ]
  },
  {
    "nom": "Porte Dauphine",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Porte de Clichy - Tribunal de Paris",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "Citadis 402"
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
    ]
  },
  {
    "nom": "Porte de Gentilly",
    "lignes": [
      "14"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA"
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
    ]
  },
  {
    "nom": "Porte de la Villette",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Porte de Pantin",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Porte de Saint-Cloud",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Porte de Saint-Ouen",
    "lignes": [
      "13",
      "T3b"
    ],
    "resume": "Station située à Paris 18e.",
    "materiel": [
      "MF 77",
      "Citadis 402"
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
    ]
  },
  {
    "nom": "Porte de Vincennes",
    "lignes": [
      "1",
      "T3a",
      "T3b"
    ],
    "resume": "Station située à Paris 12e.",
    "materiel": [
      "MP 05",
      "Citadis 402"
    ]
  },
  {
    "nom": "Porte des Lilas",
    "lignes": [
      "3bis",
      "11",
      "T3b"
    ],
    "resume": "Station située à Paris 20e.",
    "materiel": [
      "MF 67",
      "MP 14 CC",
      "Citadis 402"
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
    "resume": "Station située à Paris.",
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
    ]
  },
  {
    "nom": "Porte Maillot - Palais des Congrès",
    "lignes": [
      "T3b"
    ],
    "resume": "Station située à Paris 17e.",
    "materiel": [
      "Citadis 402"
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
    ]
  },
  {
    "nom": "Pré-Saint-Gervais",
    "lignes": [
      "7bis"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 88"
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
    ]
  },
  {
    "nom": "Pyramides",
    "lignes": [
      "7",
      "14"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77",
      "MP 14 CA"
    ]
  },
  {
    "nom": "Pyrénées",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CC"
    ]
  },
  {
    "nom": "Quai de la Gare",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ]
  },
  {
    "nom": "Quai de la Rapée",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Quatre-Septembre",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Rambuteau",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CC"
    ]
  },
  {
    "nom": "Ranelagh",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Raspail",
    "lignes": [
      "4",
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MP 73",
      "MP 89 CC"
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
    ]
  },
  {
    "nom": "Rennes",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Reuilly–Diderot",
    "lignes": [
      "1",
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05",
      "MF 77"
    ]
  },
  {
    "nom": "Réaumur–Sébastopol",
    "lignes": [
      "3",
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
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
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 01",
      "MF 77",
      "MP 14 CC"
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
    ]
  },
  {
    "nom": "Richard-Lenoir",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Richelieu–Drouot",
    "lignes": [
      "8",
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77",
      "MF 01"
    ]
  },
  {
    "nom": "Riquet",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Robespierre",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Romainville - Carnot",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CC"
    ]
  },
  {
    "nom": "Rome",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Route de Romainville",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Montreuil.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ]
  },
  {
    "nom": "Rue de la Pompe",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Rue de Rosny",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Montreuil.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ]
  },
  {
    "nom": "Rue des Boulets",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Rue du Bac",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Rue Hélène",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Noisy-le-Sec.",
    "materiel": [
      "Citadis 305",
      "TFS"
    ]
  },
  {
    "nom": "Rue Saint-Maur",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Rueil–Suresnes Mont-Valérien",
    "lignes": [
      "15"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MR6V"
    ]
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
    ]
  },
  {
    "nom": "Saint-Ambroise",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Saint-Augustin",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MR6V",
      "MR3V"
    ]
  },
  {
    "nom": "Saint-Denis–Université",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Saint-Fargeau",
    "lignes": [
      "3bis",
      "D"
    ],
    "resume": "Station située à Saint-Fargeau-Ponthierry.",
    "materiel": [
      "MF 67",
      "Z 20500",
      "RER NG",
      "Regio 2N"
    ]
  },
  {
    "nom": "Saint-François-Xavier",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
    ]
  },
  {
    "nom": "Saint-Georges",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Saint-Germain-des-Prés",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
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
    ]
  },
  {
    "nom": "Saint-Jacques",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ]
  },
  {
    "nom": "Saint-Jean",
    "lignes": [
      "T1"
    ],
    "resume": "Station située à Noisy-le-Sec.",
    "materiel": [
      "Citadis 305",
      "TFS"
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
    ]
  },
  {
    "nom": "Saint-Lazare",
    "lignes": [
      "3",
      "12",
      "13",
      "14",
      "E",
      "J",
      "L"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 77",
      "MP 14 CA",
      "RER NG",
      "MI 2N Eole",
      "Z 50000 Francilien"
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
    ]
  },
  {
    "nom": "Saint-Mandé",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05"
    ]
  },
  {
    "nom": "Saint-Marcel",
    "lignes": [
      "5"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Saint-Michel",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
    ]
  },
  {
    "nom": "Saint-Michel Notre-Dame",
    "lignes": [
      "4",
      "10",
      "B",
      "C"
    ],
    "resume": "Station située à Paris 5e.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MF 67",
      "MF 19 CC",
      "MI 79",
      "MI 84",
      "Z 20900",
      "Z 20500",
      "Z 8800",
      "Z 5600"
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
    ]
  },
  {
    "nom": "Saint-Paul",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05"
    ]
  },
  {
    "nom": "Saint-Philippe du Roule",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Saint-Placide",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
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
    ]
  },
  {
    "nom": "Saint-Quentin Est",
    "lignes": [
      "18"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MRV"
    ]
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
    ]
  },
  {
    "nom": "Saint-Sébastien–Froissart",
    "lignes": [
      "8"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Saint-Sulpice",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
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
    ]
  },
  {
    "nom": "Satory",
    "lignes": [
      "18"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MRV"
    ]
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
    ]
  },
  {
    "nom": "Sentier",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Serge Gainsbourg",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CC"
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
    ]
  },
  {
    "nom": "Sèvres–Babylone",
    "lignes": [
      "10",
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
    ]
  },
  {
    "nom": "Sèvres–Lecourbe",
    "lignes": [
      "6"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC"
    ]
  },
  {
    "nom": "Ségur",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
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
    ]
  },
  {
    "nom": "Simplon",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
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
    ]
  },
  {
    "nom": "Solférino",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Stade de France",
    "lignes": [
      "15"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MR6V"
    ]
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
    ]
  },
  {
    "nom": "Stains - La Cerisaie",
    "lignes": [
      "T11"
    ],
    "resume": "Station située à Stains.",
    "materiel": [
      "Citadis Dualis"
    ]
  },
  {
    "nom": "Stalingrad",
    "lignes": [
      "2",
      "5",
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01",
      "MF 77"
    ]
  },
  {
    "nom": "Strasbourg–Saint-Denis",
    "lignes": [
      "4",
      "8",
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA",
      "MF 77",
      "MF 01"
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
    ]
  },
  {
    "nom": "Sully–Morland",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Temple",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Ternes",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
    ]
  },
  {
    "nom": "Télégraphe",
    "lignes": [
      "11"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CC"
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
    ]
  },
  {
    "nom": "Thiais - Orly",
    "lignes": [
      "14"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA"
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
    ]
  },
  {
    "nom": "Tolbiac",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Trinité–d'Estienne d'Orves",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Trocadéro",
    "lignes": [
      "6",
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 73",
      "MP 89 CC",
      "MF 01"
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
    ]
  },
  {
    "nom": "Tuileries",
    "lignes": [
      "1"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 05"
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
    ]
  },
  {
    "nom": "Vaneau",
    "lignes": [
      "10"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67",
      "MF 19 CC"
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
    ]
  },
  {
    "nom": "Varenne",
    "lignes": [
      "13"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Vaugirard",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
    ]
  },
  {
    "nom": "Vavin",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
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
    ]
  },
  {
    "nom": "Verdun-Sud",
    "lignes": [
      "4"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MP 05 IDFM",
      "MP 89 CA"
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
    ]
  },
  {
    "nom": "Victor Hugo",
    "lignes": [
      "2"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Villejuif - Gustave Roussy",
    "lignes": [
      "14",
      "15"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MP 14 CA",
      "MR6V"
    ]
  },
  {
    "nom": "Villejuif - Léo Lagrange",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Villejuif–Paul Vaillant-Couturier",
    "lignes": [
      "7"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 77"
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
    ]
  },
  {
    "nom": "Villiers",
    "lignes": [
      "2",
      "3"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01",
      "MF 67"
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
    ]
  },
  {
    "nom": "Villiers–Champigny–Bry",
    "lignes": [
      "15"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MR6V"
    ]
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
    ]
  },
  {
    "nom": "Volontaires",
    "lignes": [
      "12"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
    ]
  },
  {
    "nom": "Voltaire",
    "lignes": [
      "9"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 01"
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
    ]
  },
  {
    "nom": "Wagram",
    "lignes": [
      "3"
    ],
    "resume": "Station située à Paris.",
    "materiel": [
      "MF 67"
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
      return white ? `/assets/${prefix}Métro.svg` : "/assets/metro-logo.png";
  }
}
