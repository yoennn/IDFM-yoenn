#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script d'importation automatique des assets officiels depuis Wikimedia Commons / Wikipédia
et de traitement / enrichissement de idfm_data.json avec le jeu de données Open Data IDFM arrets-lignes.
"""

import os
import re
import sys
import json
import time
import shutil
import unicodedata
import urllib.request
import urllib.parse
from pathlib import Path

BASE_DIR = Path(r"c:\Users\yoenn\Downloads\ratpmetro")
APP_DIR = BASE_DIR / "mon-app-metro-main"
ASSETS_DIR = APP_DIR / "public" / "assets"
SRC_DIR = APP_DIR / "src"
IDFM_JSON_PATH = BASE_DIR / "idfm_data.json"
DATA_JS_PATH = SRC_DIR / "data.js"
IDFM_MAPPING_JS_PATH = SRC_DIR / "data" / "idfmMapping.js"
ORIG_METRO_STATIONS_BACKUP = BASE_DIR / "metro_stations_backup.json"

HEADERS = {
    "User-Agent": "ParisTransitUnifiedGuide/1.0 (https://example.org; contact@example.org) Python/3.14"
}

COMMONS_API = "https://commons.wikimedia.org/w/api.php"
FRWIKI_API = "https://fr.wikipedia.org/w/api.php"

LINE_ORDER = [
    "1", "2", "3", "3bis", "4", "5", "6", "7", "7bis", "8", "9", "10", "11", "12", "13", "14",
    "15", "16", "17", "18",
    "A", "B", "C", "D", "E",
    "H", "J", "K", "L", "N", "P", "R", "U", "V",
    "T1", "T2", "T3a", "T3b", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12", "T13", "T14"
]
LINE_RANK = {lid: i for i, lid in enumerate(LINE_ORDER)}

PARIS_GARES = {
    "gare de lyon",
    "gare du nord",
    "gare de l'est",
    "gare d'austerlitz",
    "gare montparnasse",
    "gare saint-lazare",
}

BOUNDARY_STOP_LINES = {
    "492818": ["T8"],
    "47926": ["P"],
    "47931": ["P"],
    "47938": ["P"],
    "47956": ["P"],
    "47957": ["P"],
    "47917": ["C"],
    "59049": ["C"],
    "411446": ["C"],
    "411443": ["C"],
    "43134": ["C"],
    "43165": ["C"],
    "411449": ["C"],
    "46832": ["N"],
    "411511": ["N"],
    "59302": ["N"],
    "411501": ["N"],
    "411498": ["N"],
    "411504": ["N"],
    "411507": ["N"],
    "43100": ["J"],
    "411362": ["J"],
    "411365": ["J"],
    "411317": ["H"],
    "479035": ["R"],
    "411458": ["R"],
    "411461": ["R"],
    "411464": ["R"],
    "411452": ["R"],
    "411455": ["R"],
    "411476": ["R"],
    "411473": ["R"],
    "411467": ["R"],
    "411479": ["R"],
}

CANONICAL_STOP_NAMES = {
    "saint-paul (le marais)": "Saint-Paul",
    "pont marie (cite des arts)": "Pont Marie",
    "pont marie (cité des arts)": "Pont Marie",
    "chateau landon": "Château-Landon",
    "château landon": "Château-Landon",
    "chateau de landon": "Château-Landon",
    "château de landon": "Château-Landon",
    "chevilly-larue (marche international)": "Chevilly-Larue",
    "chevilly-larue (marché international)": "Chevilly-Larue",
    "thiais - orly (pont de rungis)": "Thiais - Orly",
    "saint-lazare": "Gare Saint-Lazare",
    "paris saint-lazare": "Gare Saint-Lazare",
    "gare saint-lazare": "Gare Saint-Lazare",
    "montparnasse bienvenue": "Gare Montparnasse",
    "montparnasse-bienvenue": "Gare Montparnasse",
    "montparnasse–bienvenüe": "Gare Montparnasse",
    "paris montparnasse": "Gare Montparnasse",
    "gare montparnasse": "Gare Montparnasse",
    "neuilly - porte maillot": "Porte Maillot",
    "porte maillot (palais des congres)": "Porte Maillot",
    "porte maillot (palais des congrès)": "Porte Maillot",
    "porte de clichy - tribunal de paris": "Porte de Clichy",
    "pont du garigliano - hopital europeen g. pompidou": "Pont du Garigliano",
    "pont du garigliano - hôpital européen g. pompidou": "Pont du Garigliano",
    "les courtilles": "Asnières - Gennevilliers - Les Courtilles",
    "saint-denis - pleyel": "Saint-Denis Pleyel",
}


def fetch_imageinfo_batch(api_url, titles, thumb_width=None):
    results = {}
    title_list = list(titles)
    for i in range(0, len(title_list), 20):
        batch = title_list[i:i + 20]
        params = {
            "action": "query",
            "titles": "|".join(batch),
            "prop": "imageinfo",
            "iiprop": "url|mime",
            "format": "json",
        }
        if thumb_width:
            params["iiurlwidth"] = str(thumb_width)
        url = f"{api_url}?{urllib.parse.urlencode(params)}"
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode("utf-8"))
        pages = data.get("query", {}).get("pages", {})
        norm_map = {}
        for n in data.get("query", {}).get("normalized", []):
            norm_map[n["to"]] = n["from"]
        for p in pages.values():
            t = p.get("title")
            orig_t = norm_map.get(t, t)
            ii = p.get("imageinfo", [{}])[0]
            dl_url = ii.get("thumburl") if (thumb_width and ii.get("thumburl")) else ii.get("url")
            if dl_url:
                results[orig_t] = dl_url
                results[t] = dl_url
    return results


def download_file(url, dest_path):
    if dest_path.exists() and dest_path.stat().st_size > 100:
        return True
    for attempt in range(4):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=45) as resp:
                content = resp.read()
            dest_path.write_bytes(content)
            time.sleep(0.15)
            return True
        except Exception as e:
            print(f"  [Retry {attempt+1}] Erreur sur {dest_path.name}: {e}")
            time.sleep(1.5 * (attempt + 1))
    return False


def download_all_wikimedia_assets():
    print("=== 1. Téléchargement des assets officiels depuis Wikimedia Commons ===")
    ASSETS_DIR.mkdir(parents=True, exist_ok=True)

    frwiki_urls = fetch_imageinfo_batch(FRWIKI_API, ["Fichier:Logo SNCF (2011).svg", "Fichier:Logo SNCF (2005).svg"])
    commons_sncf = fetch_imageinfo_batch(COMMONS_API, ["File:Sncf logo.svg"])
    sncf_url = (
        frwiki_urls.get("Fichier:Logo SNCF (2011).svg")
        or commons_sncf.get("File:Sncf logo.svg")
        or frwiki_urls.get("Fichier:Logo SNCF (2005).svg")
    )
    if sncf_url:
        sncf_dest = ASSETS_DIR / "Logo_SNCF_2011.svg"
        download_file(sncf_url, sncf_dest)
        print(f"  [OK] Logo SNCF -> {sncf_dest.name}")

    commons_svg_map = {
        "File:Paris transit icons - Métro.svg": ["Paris_transit_icons_-_Métro.svg", "logo-metro-noir.svg"],
        "File:Paris transit icons - RER.svg": ["Paris_transit_icons_-_RER.svg"],
        "File:Paris transit icons - Train.svg": ["Paris_transit_icons_-_Train.svg"],
        "File:Paris transit icons - Tram.svg": ["Paris_transit_icons_-_Tram.svg"],
        "File:Paris transit icons white - Métro.svg": ["Paris_transit_icons_white_-_Métro.svg", "logo-metro-blanc.svg"],
        "File:Paris transit icons white - RER.svg": ["Paris_transit_icons_white_-_RER.svg"],
        "File:Paris transit icons white - Train.svg": ["Paris_transit_icons_white_-_Train.svg"],
        "File:Paris transit icons white - Tram.svg": ["Paris_transit_icons_white_-_Tram.svg"],
    }

    for code in ["A", "B", "C", "D", "E"]:
        commons_svg_map[f"File:Paris transit icons - RER {code}.svg"] = [
            f"Paris_transit_icons_-_RER_{code}.svg",
        ]

    for code in ["H", "J", "K", "L", "N", "P", "R", "U", "V"]:
        commons_svg_map[f"File:Paris transit icons - Train {code}.svg"] = [
            f"Paris_transit_icons_-_Train_{code}.svg",
        ]

    for code in ["T1", "T2", "T3a", "T3b", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12", "T13", "T14"]:
        num = code[1:]
        commons_svg_map[f"File:Paris transit icons - Tram {num}.svg"] = [
            f"Paris_transit_icons_-_Tram_{code}.svg",
        ]

    plan_files = {
        "A": "File:RER ligne A Paris plan 2024.svg",
        "B": "File:Plan Linéaire RER Île-de-France Ligne B - 2023.svg",
        "C": "File:Ligne C Plan de la ligne - 2024.svg",
        "D": "File:Plan Linéaire RER Île-de-France Ligne D - 2023.svg",
        "E": "File:Plan Linéaire RER Île-de-France Ligne E - 2024.svg",
        "H": "File:Plan Linéraire Transilien Ligne H - 2017-07-01.svg",
        "J": "File:Plan Linéraire Transilien Ligne J - 2024-10-05.svg",
        "K": "File:Plan Linéraire Transilien Ligne K - 2006-11-20.svg",
        "L": "File:Plan Linéraire Transilien Ligne L - 2023.svg",
        "N": "File:Plan Linéraire Transilien Ligne N - 2022.svg",
        "P": "File:Plan Linéraire Transilien Ligne P - 2025.svg",
        "R": "File:Plan Linéraire Transilien Ligne R - 2004.svg",
        "U": "File:Plan Linéraire Transilien Ligne U - 2023.svg",
        "V": "File:Plan Linéaire Transilien Ligne V - 2023-12-10.svg",
        "T1": "File:Plan Linéaire Tramway Île-de-France Ligne 1 - 2014-12-16.svg",
        "T2": "File:Plan Paris Tramway ligne 2-2022.svg",
        "T3a": "File:Plan Linéaire Tramway Île-de-France Ligne 3a 2024.svg",
        "T3b": "File:Plan Paris Tramway ligne 3b-2023.svg",
        "T4": "File:Plan Linéaire Tramway Île-de-France Ligne 4 - 2020-08-31.svg",
        "T5": "File:Plan Linéaire Tramway Île-de-France Ligne 5 - 2013-07-29.svg",
        "T6": "File:Plan Linéaire Tramway Île-de-France Ligne 6 - 2023-Correction.svg",
        "T7": "File:Plan Linéaire Tramway Île-de-France Ligne 7 - 2024.svg",
        "T8": "File:Plan Linéaire Tramway Île-de-France Ligne 8 - 2014-12-16.svg",
        "T9": "File:Plan Linéaire Tramway Île-de-France Ligne 9 - 2021-04-10.svg",
        "T10": "File:Plan Paris Tramway ligne 10.svg",
        "T11": "File:Plan Paris Tramway Express ligne 11.svg",
        "T12": "File:Plan Linéaire Tramway Île-de-France Ligne 12 - 2023.svg",
        "T13": "File:Plan Linéaire Tramway Île-de-France Ligne 13 - 2022.svg",
        "T14": "File:Plan Linéaire Tramway Île-de-France Ligne 14 - 2025-03-22.svg",
    }
    for code, commons_title in plan_files.items():
        commons_svg_map[commons_title] = [f"{code}-plan.svg"]

    svg_urls = fetch_imageinfo_batch(COMMONS_API, commons_svg_map.keys())
    for commons_title, dest_names in commons_svg_map.items():
        url = svg_urls.get(commons_title)
        if not url:
            print(f"  [WARN] URL introuvable pour {commons_title}")
            continue
        primary_dest = ASSETS_DIR / dest_names[0]
        if download_file(url, primary_dest):
            for alias_name in dest_names[1:]:
                alias_dest = ASSETS_DIR / alias_name
                if not alias_dest.exists():
                    shutil.copyfile(primary_dest, alias_dest)

    rame_commons_map = {
        "File:MI 2N Altéo du RER A arrivant en gare souterraine de Paris-Gare-de-Lyon.jpg": "mi2n-alteo.jpg",
        "File:MI 09 — RER A.1.jpg": "mi09.jpg",
        "File:MI 79 — RER B.1.jpg": "mi79.jpg",
        "File:MI 84 — RER B.1.jpg": "mi84.jpg",
        "File:Z 20500 IDFM.jpg": "z20500.jpg",
        "File:Z 20900 IDF Mobilités sur le RER C.jpg": "z20900.jpg",
        "File:Z 8800 en livrée Transilien sur la ligne U au terminus de La Défense.jpg": "z8800.jpg",
        "File:Une UM2 avec un Z 5600 en livrée Transilien sous la grande halle de Paris-Austerlitz.jpg": "z5600.jpg",
        "File:RER NG 009M.jpg": "rer-ng.jpg",
        "File:Z-22500-rer-e-paris-est-ete-2022-1.jpg": "mi2n-eole.jpg",
        "File:Z 50000 Transilien SNCF IDF Mobilités.jpg": "z50000.jpg",
        "File:Z 57000 (Regio 2N) IDF Mobilités Ligne R.jpg": "regio2n.jpg",
        "File:B 82500 Mormant Transilien P 2019 by night 03.jpg": "agc-bibi.jpg",
        "File:Paris-ratp-sl-t1-tfs-721267.jpg": "tfs.jpg",
        "File:Des rames de tramway TFS et TW20 à la station La Courneuve 8 mai 1945 du tram T1.jpg": "citadis305.jpg",
        "File:Citadis 302 en livrée IDFM quittant le terminus de Porte de Versailles sur la ligne T2 (1).jpg": "citadis302.jpg",
        "File:Tram T3b Citadis 402 IDFM.jpg": "citadis402.jpg",
        "File:Citadis 405 Tramway T9 Orly - Gaston Viens 2021.jpg": "citadis405.jpg",
        "File:Photo 05-10-2017 tram T11 à La Courneuve.jpg": "citadis-dualis.jpg",
        "File:Siemens Avanto et Citadis Dualis Tramway T4 Bondy 2020 03.jpg": "avanto.jpg",
        "File:Essai Translohr STE3 ligne T5 IDF.jpg": "translohr-ste3.jpg",
        "File:Translohr STE6 Tramway T6 2018.jpg": "translohr-ste6.jpg",
    }

    rame_urls = fetch_imageinfo_batch(COMMONS_API, rame_commons_map.keys(), thumb_width=1000)
    for commons_title, dest_name in rame_commons_map.items():
        url = rame_urls.get(commons_title)
        if url:
            download_file(url, ASSETS_DIR / dest_name)
    print("  [OK] Tous les assets Wikimedia Commons sont présents dans public/assets/")


def norm_key(s):
    s = unicodedata.normalize("NFD", s.lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    s = re.sub(r"^gare\s+(de\s+la\s+|de\s+l'|du\s+|des\s+|de\s+|d')", "", s)
    s = re.sub(r"\s*-\s*gare$", "", s)
    s = re.sub(r"^paris\s+", "", s)
    s = s.replace("saint ", "st ").replace("sainte ", "ste ").replace("saint-", "st-").replace("sainte-", "ste-")
    s = re.sub(r"[^a-z0-9]+", " ", s).strip()
    return s


def clean_stop_name(raw_name):
    n = raw_name.strip()
    low = n.lower()
    if low in CANONICAL_STOP_NAMES:
        return CANONICAL_STOP_NAMES[low]
    if low == "paris gare de lyon":
        return "Gare de Lyon"
    if low in ("paris gare du nord", "paris nord"):
        return "Gare du Nord"
    if low == "paris est":
        return "Gare de l'Est"
    if low == "paris austerlitz":
        return "Gare d'Austerlitz"
    if low in ("paris montparnasse", "gare vaugirard"):
        return "Gare Montparnasse"
    if low == "paris saint-lazare":
        return "Gare Saint-Lazare"
    if low == "paris bercy bourgogne - pays d'auvergne":
        return "Bercy"
    if low in PARIS_GARES:
        return n
    n = re.sub(r"\s*-\s*Gare$", "", n, flags=re.IGNORECASE)
    m = re.match(r"^Gare\s+(?:de\s+la\s+|de\s+l'|du\s+|des\s+|de\s+|d')(.+)$", n, flags=re.IGNORECASE)
    if m:
        rest = m.group(1).strip()
        cand = rest[0].upper() + rest[1:]
        return CANONICAL_STOP_NAMES.get(cand.lower(), cand)
    return CANONICAL_STOP_NAMES.get(n.lower(), n)


def get_all_data_definitions():
    data_rames = {
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
        # --- RER / TRANSILIEN / TRAMWAY ---
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
    }

    lignes_metro = [
        # --- MÉTRO ACTUEL ---
        {
            "id": "1", "nom": "Ligne 1", "type": "actuel", "mode": "metro",
            "terminus": ["La Défense", "Château de Vincennes"],
            "ouverture": "1900", "stations": 25, "longueur": "16,6 km",
            "logo": "/assets/1-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/1-plan.png",
            "materiel": [
                {"nom": "MP 05", "description": "<strong>Rame automatique (CA) à 6 voitures.</strong><br>Déployées lors de l'automatisation intégrale de la ligne (2008-2011), elles remplacent les anciennes rames MP 89 CC (à conduite manuelle)."}
            ]
        },
        {
            "id": "2", "nom": "Ligne 2", "type": "actuel", "mode": "metro",
            "terminus": ["Porte Dauphine", "Nation"],
            "ouverture": "1900", "stations": 25, "longueur": "12,4 km",
            "logo": "/assets/2-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/2-plan.png",
            "materiel": [
                {"nom": "MF 01", "description": "<strong>Rame boa climatisée à 5 voitures.</strong><br>Ces rames modernes (aussi appelées MF 2000) ont remplacé les MF 67 vieillissants, apportant plus de confort, la climatisation et l'intercirculation."}
            ]
        },
        {
            "id": "3", "nom": "Ligne 3", "type": "actuel", "mode": "metro",
            "terminus": ["Pont de Levallois", "Gallieni"],
            "ouverture": "1904", "stations": 25, "longueur": "11,7 km",
            "logo": "/assets/3-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/3-plan.png",
            "materiel": [
                {"nom": "MF 67", "description": "<strong>Rame historique à 5 voitures.</strong><br>Matériel emblématique du réseau, il est en service sur la 3 depuis les années 70. Il est en cours de remplacement progressif par le nouveau MF 19."}
            ]
        },
        {
            "id": "3bis", "nom": "Ligne 3bis", "type": "actuel", "mode": "metro",
            "terminus": ["Gambetta", "Porte des Lilas"],
            "ouverture": "1921 (1971 en 3bis)", "stations": 4, "longueur": "1,3 km",
            "logo": "/assets/3bis-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/3bis-plan.png",
            "materiel": [
                {"nom": "MF 67", "description": "<strong>Rame courte à 3 voitures.</strong><br>Ces rames spécifiques proviennent de la Ligne 9 et ont été adaptées à la très faible fréquentation de la plus petite ligne du réseau."}
            ]
        },
        {
            "id": "4", "nom": "Ligne 4", "type": "actuel", "mode": "metro",
            "terminus": ["Porte de Clignancourt", "Bagneux–Lucie Aubrac"],
            "ouverture": "1908", "stations": 29, "longueur": "14 km",
            "logo": "/assets/4-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/4-plan.png",
            "materiel": [
                {"nom": "MP 14 CA", "description": "<strong>Rame automatique (CA) neuve à 6 voitures.</strong><br>Déployées pour finaliser l'automatisation et augmenter la capacité de la ligne."},
                {"nom": "MP 05 IDFM", "description": "<strong>Rame automatique (CA) rénovée à 6 voitures.</strong><br>Provenant de la Ligne 1, elles ont été transférées et rénovées pour l'automatisation de la 4."},
                {"nom": "MP 89 CA", "description": "<strong>Rame automatique (CA) à 6 voitures.</strong><br>Historiques de la Ligne 14, elles ont été transférées sur la 4 après l'arrivée des MP 14 (8 voitures) sur la 14."}
            ]
        },
        {
            "id": "5", "nom": "Ligne 5", "type": "actuel", "mode": "metro",
            "terminus": ["Bobigny–Pablo Picasso", "Place d'Italie"],
            "ouverture": "1906", "stations": 22, "longueur": "14,6 km",
            "logo": "/assets/5-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/5-plan.png",
            "materiel": [
                {"nom": "MF 01", "description": "<strong>Rame boa climatisée à 5 voitures.</strong><br>Tout comme la Ligne 2, la 5 a été équipée de ce matériel moderne pour remplacer les anciens MF 67."}
            ]
        },
        {
            "id": "6", "nom": "Ligne 6", "type": "actuel", "mode": "metro",
            "terminus": ["Charles de Gaulle–Étoile", "Nation"],
            "ouverture": "1909", "stations": 28, "longueur": "13,7 km",
            "logo": "/assets/6-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/6-plan.png",
            "materiel": [
                {"nom": "MP 73", "description": "<strong>Rame sur pneus à 5 voitures.</strong><br>Ce matériel a été conçu spécifiquement pour la Ligne 6 et ses nombreux viaducs. Ses bogies sont adaptés aux virages serrés."},
                {"nom": "MP 89 CC", "description": "<strong>Rame boa à 5 voitures (ex-Ligne 4).</strong><br>Transférées après l'automatisation de la Ligne 4, ces rames sont raccourcies à 5 voitures."}
            ]
        },
        {
            "id": "7", "nom": "Ligne 7", "type": "actuel", "mode": "metro",
            "terminus": ["La Courneuve–8 Mai 1945", "Mairie d'Ivry / Villejuif"],
            "ouverture": "1910", "stations": 38, "longueur": "22,5 km",
            "logo": "/assets/7-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/7-plan.png",
            "materiel": [
                {"nom": "MF 77", "description": "<strong>Rame à 5 voitures (design 'requin').</strong><br>Conçues pour les lignes longues avec des branches, elles sont en service sur la 7 depuis 1979 et sont actuellement en cours de rénovation."}
            ]
        },
        {
            "id": "7bis", "nom": "Ligne 7bis", "type": "actuel", "mode": "metro",
            "terminus": ["Louis Blanc", "Pré-Saint-Gervais"],
            "ouverture": "1911 (1967 en 7bis)", "stations": 8, "longueur": "3,1 km",
            "logo": "/assets/7bis-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/7bis-plan.png",
            "materiel": [
                {"nom": "MF 88", "description": "<strong>Rame expérimentale à 3 voitures.</strong><br>Prototype unique à 9 exemplaires, il testait des essieux orientables pour les virages serrés de la ligne. Il sera remplacé par le MF 19."}
            ]
        },
        {
            "id": "8", "nom": "Ligne 8", "type": "actuel", "mode": "metro",
            "terminus": ["Balard", "Pointe du Lac"],
            "ouverture": "1913", "stations": 38, "longueur": "23,4 km",
            "logo": "/assets/8-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/8-plan.png",
            "materiel": [
                {"nom": "MF 77", "description": "<strong>Rame à 5 voitures (design 'requin').</strong><br>Matériel historique de la ligne, conçu pour les longs trajets de banlieue à banlieue."}
            ]
        },
        {
            "id": "9", "nom": "Ligne 9", "type": "actuel", "mode": "metro",
            "terminus": ["Pont de Sèvres", "Mairie de Montreuil"],
            "ouverture": "1922", "stations": 37, "longueur": "19,6 km",
            "logo": "/assets/9-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/9-plan.png",
            "materiel": [
                {"nom": "MF 01", "description": "<strong>Rame boa climatisée à 5 voitures.</strong><br>Le déploiement de ces rames s'est achevé en 2016, remplaçant les MF 67 et modernisant cette ligne très fréquentée."}
            ]
        },
        {
            "id": "10", "nom": "Ligne 10", "type": "actuel", "mode": "metro",
            "terminus": ["Boulogne–Pont de St-Cloud", "Gare d'Austerlitz"],
            "ouverture": "1913", "stations": 23, "longueur": "11,7 km",
            "logo": "/assets/10-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/10-plan.png",
            "materiel": [
                {"nom": "MF 67", "description": "<strong>Rame historique à 5 voitures.</strong><br>C'est l'une des dernières lignes à être entièrement équipée de ce matériel fiable mais vieillissant."},
                {"nom": "MF 19 CC", "description": "<strong>Nouveau matériel (Conduite Conducteur).</strong><br>La Ligne 10 est la première ligne équipée de la nouvelle rame MF 19 remplaçant les MF 67."}
            ]
        },
        {
            "id": "11", "nom": "Ligne 11", "type": "actuel", "mode": "metro",
            "terminus": ["Châtelet", "Rosny–Bois-Perrier"],
            "ouverture": "1935", "stations": 19, "longueur": "11,7 km",
            "logo": "/assets/11-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/11-plan.png",
            "materiel": [
                {"nom": "MP 14 CC", "description": "<strong>Rame sur pneus neuve à 5 voitures (Conduite Conducteur).</strong><br>Déployées en 2023 pour le prolongement de la ligne et le remplacement des très anciens MP 59."}
            ]
        },
        {
            "id": "12", "nom": "Ligne 12", "type": "actuel", "mode": "metro",
            "terminus": ["Mairie d'Aubervilliers", "Mairie d'Issy"],
            "ouverture": "1910", "stations": 29, "longueur": "17,2 km",
            "logo": "/assets/12-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/12-plan.png",
            "materiel": [
                {"nom": "MF 67", "description": "<strong>Rame historique à 5 voitures.</strong><br>Identifiable à sa livrée spécifique, ce matériel équipe la ligne depuis les années 70 et sera remplacé par le MF 19."}
            ]
        },
        {
            "id": "13", "nom": "Ligne 13", "type": "actuel", "mode": "metro",
            "terminus": ["Asnières–Gennevilliers / St-Denis", "Châtillon–Montrouge"],
            "ouverture": "1911", "stations": 32, "longueur": "24,4 km",
            "logo": "/assets/13-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/13-plan.png",
            "materiel": [
                {"nom": "MF 77", "description": "<strong>Rame à 5 voitures (rénovée IDFM).</strong><br>Ces rames ont été rénovées (livrée IDFM) et équipées du pilotage automatique OURAGAN pour gérer la saturation de la ligne."}
            ]
        },
        {
            "id": "14", "nom": "Ligne 14", "type": "actuel", "mode": "metro",
            "terminus": ["Saint-Denis Pleyel", "Aéroport d'Orly"],
            "ouverture": "1998", "stations": 20, "longueur": "27,8 km",
            "logo": "/assets/14-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/14-plan.png",
            "materiel": [
                {"nom": "MP 14 CA", "description": "<strong>Rame automatique (CA) longue à 8 voitures.</strong><br>Ce sont les rames les plus longues (120m) et les plus récentes du réseau, déployées pour les prolongements Nord et Sud."}
            ]
        },
        # --- GRAND PARIS EXPRESS ---
        {
            "id": "15", "nom": "Ligne 15", "type": "gpe", "mode": "metro",
            "terminus": ["Pont de Sèvres", "Noisy–Champs"],
            "ouverture": "Prévue 2026", "stations": 36, "longueur": "33 km",
            "logo": "/assets/15-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/15-plan.png",
            "materiel": [
                {"nom": "MR6V", "description": "<strong>Rame automatique à 6 voitures (108m).</strong><br>Futur matériel lourd sur fer, à grand gabarit, conçu pour la haute capacité de la rocade GPE."}
            ]
        },
        {
            "id": "16", "nom": "Ligne 16", "type": "gpe", "mode": "metro",
            "terminus": ["Saint-Denis Pleyel", "Noisy–Champs"],
            "ouverture": "Prévue 2026", "stations": 10, "longueur": "29 km",
            "logo": "/assets/16-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/16-plan.png",
            "materiel": [
                {"nom": "MR3V", "description": "<strong>Rame automatique à 3 voitures (54m).</strong><br>Version plus courte du matériel GPE, adaptée à un trafic moins dense que la ligne 15."}
            ]
        },
        {
            "id": "17", "nom": "Ligne 17", "type": "gpe", "mode": "metro",
            "terminus": ["Saint-Denis Pleyel", "Le Mesnil-Amelot"],
            "ouverture": "Prévue 2026", "stations": 9, "longueur": "26,5 km",
            "logo": "/assets/17-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/17-plan.png",
            "materiel": [
                {"nom": "MR3V", "description": "<strong>Rame automatique à 3 voitures (54m).</strong><br>Même matériel que la ligne 16, destiné à desservir les aéroports du Bourget et de Roissy."}
            ]
        },
        {
            "id": "18", "nom": "Ligne 18", "type": "gpe", "mode": "metro",
            "terminus": ["Aéroport d'Orly", "Versailles Chantiers"],
            "ouverture": "Prévue 2027", "stations": 10, "longueur": "35 km",
            "logo": "/assets/18-logo.png", "modeLogo": "/assets/logo-metro-noir.svg", "plan": "/assets/18-plan.png",
            "materiel": [
                {"nom": "MRV", "description": "<strong>Rame automatique rapide (Métro léger).</strong><br>Matériel spécifique alimenté par 3e rail, conçu pour de hautes vitesses (120 km/h) sur le plateau de Saclay."}
            ]
        },
        # --- RÉSEAU RER (A à E) ---
        {
            "id": "A", "nom": "Ligne A", "type": "rer", "mode": "rer",
            "terminus": ["Saint-Germain-en-Laye / Cergy / Poissy", "Boissy-Saint-Léger / Marne-la-Vallée–Chessy"],
            "ouverture": "1969", "stations": 46, "longueur": "108 km",
            "logo": "/assets/Paris_transit_icons_-_RER_A.svg", "modeLogo": "/assets/Paris_transit_icons_-_RER.svg", "plan": "/assets/A-plan.svg",
            "materiel": [
                {"nom": "MI 09", "description": "<strong>Rame à 2 niveaux (Z 1600) à 5 voitures.</strong><br>Déployées à partir de 2011 pour remplacer les MS 61 et MI 84, ces rames à grande capacité assurent l'essentiel du service sur le RER A."},
                {"nom": "MI 2N Altéo", "description": "<strong>Rame à 2 niveaux (Z 1500) à 3 portes par face.</strong><br>Premier matériel à deux niveaux du RER A (1997), conçu pour accélérer les échanges voyageurs dans le tronçon central."}
            ]
        },
        {
            "id": "B", "nom": "Ligne B", "type": "rer", "mode": "rer",
            "terminus": ["Aéroport CDG 2 / Mitry–Claye", "Robinson / Saint-Rémy-lès-Chevreuse"],
            "ouverture": "1977", "stations": 47, "longueur": "80 km",
            "logo": "/assets/Paris_transit_icons_-_RER_B.svg", "modeLogo": "/assets/Paris_transit_icons_-_RER.svg", "plan": "/assets/B-plan.svg",
            "materiel": [
                {"nom": "MI 79", "description": "<strong>Rame bicourant rénovée à 4 voitures (Z 8100).</strong><br>Matériel historique de l'interconnexion Nord-Sud RATP/SNCF du RER B, intégralement rénové et climatisé."},
                {"nom": "MI 84", "description": "<strong>Rame bicourant à 4 voitures (Z 8400).</strong><br>Évolution du MI 79 transférée depuis le RER A pour renforcer la fréquence sur l'axe Nord-Sud."}
            ]
        },
        {
            "id": "C", "nom": "Ligne C", "type": "rer", "mode": "rer",
            "terminus": ["Pontoise / Versailles-Château / St-Quentin", "Massy–Palaiseau / Dourdan / St-Martin-d'Étampes"],
            "ouverture": "1979", "stations": 84, "longueur": "187 km",
            "logo": "/assets/Paris_transit_icons_-_RER_C.svg", "modeLogo": "/assets/Paris_transit_icons_-_RER.svg", "plan": "/assets/C-plan.svg",
            "materiel": [
                {"nom": "Z 20900", "description": "<strong>Automotrice à 2 niveaux climatisée (4 voitures).</strong><br>Dernière génération de Z 2N engagée sur le RER C, offrant intercirculation et climatisation."},
                {"nom": "Z 20500", "description": "<strong>Automotrice bicourant à 2 niveaux (4 voitures).</strong><br>Matériel polyvalent assurant les missions transversales du RER C."},
                {"nom": "Z 8800", "description": "<strong>Automotrice bicourant à 2 niveaux (4 voitures).</strong><br>Déployée en 1985 pour l'ouverture de la branche Vallée de Montmorency (Pontoise)."},
                {"nom": "Z 5600", "description": "<strong>Automotrice monocourant à 2 niveaux (4 ou 6 voitures).</strong><br>Première génération de Z 2N circulant sur les branches sud et ouest du RER C."}
            ]
        },
        {
            "id": "D", "nom": "Ligne D", "type": "rer", "mode": "rer",
            "terminus": ["Creil / Orry-la-Ville–Coye", "Melun / Corbeil-Essonnes / Malesherbes"],
            "ouverture": "1987", "stations": 59, "longueur": "197 km",
            "logo": "/assets/Paris_transit_icons_-_RER_D.svg", "modeLogo": "/assets/Paris_transit_icons_-_RER.svg", "plan": "/assets/D-plan.svg",
            "materiel": [
                {"nom": "Z 20500", "description": "<strong>Automotrice à 2 niveaux à 5 voitures.</strong><br>Matériel historique du RER D circulant en unité multiple (10 voitures) sur l'axe Nord-Sud."},
                {"nom": "RER NG", "description": "<strong>Rame boa nouvelle génération (Z 58500) à 7 voitures.</strong><br>Nouveau matériel à 1 et 2 niveaux progressivement déployé sur le RER D pour remplacer les Z 20500."},
                {"nom": "Regio 2N", "description": "<strong>Automotrice à 2 niveaux (Z 57000).</strong><br>Exploitée sur les branches sud entre Juvisy, Corbeil-Essonnes, Melun et Malesherbes."}
            ]
        },
        {
            "id": "E", "nom": "Ligne E", "type": "rer", "mode": "rer",
            "terminus": ["Nanterre–La Folie", "Chelles–Gournay / Tournan"],
            "ouverture": "1999", "stations": 25, "longueur": "60 km",
            "logo": "/assets/Paris_transit_icons_-_RER_E.svg", "modeLogo": "/assets/Paris_transit_icons_-_RER.svg", "plan": "/assets/E-plan.svg",
            "materiel": [
                {"nom": "RER NG", "description": "<strong>Rame boa nouvelle génération (Z 58000) à 6 voitures.</strong><br>Déployée depuis 2023 pour accompagner le prolongement du RER E à l'Ouest vers La Défense et Nanterre–La Folie."},
                {"nom": "MI 2N Eole", "description": "<strong>Rame à 2 niveaux à 5 voitures (Z 22500).</strong><br>Matériel d'origine de la ligne Eole (1999) doté de 3 portes par face par voiture."},
                {"nom": "Z 50000 Francilien", "description": "<strong>Rame boa climatisée à 1 niveau.</strong><br>Engagée en renfort sur les missions Paris-Est / Chelles–Gournay et Tournan."}
            ]
        },
        # --- RÉSEAU TRANSILIEN (H, J, K, L, N, P, R, U, V) ---
        {
            "id": "H", "nom": "Ligne H", "type": "transilien", "mode": "transilien",
            "terminus": ["Gare du Nord", "Pontoise / Persan–Beaumont / Luzarches / Creil"],
            "ouverture": "2001", "stations": 51, "longueur": "138 km",
            "logo": "/assets/Paris_transit_icons_-_Train_H.svg", "modeLogo": "/assets/Paris_transit_icons_-_Train.svg", "plan": "/assets/H-plan.svg",
            "materiel": [
                {"nom": "Z 50000 Francilien", "description": "<strong>Rame boa climatisée à 8 voitures.</strong><br>La ligne H a été la toute première ligne équipée du Francilien dès fin 2009, aujourd'hui exploitée à 100 % avec ce matériel."}
            ]
        },
        {
            "id": "J", "nom": "Ligne J", "type": "transilien", "mode": "transilien",
            "terminus": ["Gare Saint-Lazare", "Ermont–Eaubonne / Gisors / Mantes-la-Jolie / Vernon"],
            "ouverture": "2004", "stations": 52, "longueur": "256 km",
            "logo": "/assets/Paris_transit_icons_-_Train_J.svg", "modeLogo": "/assets/Paris_transit_icons_-_Train.svg", "plan": "/assets/J-plan.svg",
            "materiel": [
                {"nom": "Z 50000 Francilien", "description": "<strong>Rame boa climatisée à 7 voitures (version courte Saint-Lazare).</strong><br>Adaptées à la longueur des quais de Paris Saint-Lazare, ces rames assurent l'ensemble des missions de la ligne J."}
            ]
        },
        {
            "id": "K", "nom": "Ligne K", "type": "transilien", "mode": "transilien",
            "terminus": ["Gare du Nord", "Crépy-en-Valois"],
            "ouverture": "2004", "stations": 10, "longueur": "61 km",
            "logo": "/assets/Paris_transit_icons_-_Train_K.svg", "modeLogo": "/assets/Paris_transit_icons_-_Train.svg", "plan": "/assets/K-plan.svg",
            "materiel": [
                {"nom": "Z 50000 Francilien", "description": "<strong>Rame boa climatisée à 8 voitures.</strong><br>Remplaçant les anciennes rames inox Z 6100 et RIB, le Francilien assure l'intégralité de la desserte Paris-Nord ↔ Crépy-en-Valois."}
            ]
        },
        {
            "id": "L", "nom": "Ligne L", "type": "transilien", "mode": "transilien",
            "terminus": ["Gare Saint-Lazare", "Versailles-Rive-Droite / St-Nom-la-Bretèche / Cergy-le-Haut"],
            "ouverture": "2004", "stations": 40, "longueur": "86 km",
            "logo": "/assets/Paris_transit_icons_-_Train_L.svg", "modeLogo": "/assets/Paris_transit_icons_-_Train.svg", "plan": "/assets/L-plan.svg",
            "materiel": [
                {"nom": "Z 50000 Francilien", "description": "<strong>Rame boa climatisée à 7 voitures.</strong><br>Équipe à 100 % la ligne L après avoir remplacé les historiques Z 6400 sur les axes Saint-Cloud et Cergy."}
            ]
        },
        {
            "id": "N", "nom": "Ligne N", "type": "transilien", "mode": "transilien",
            "terminus": ["Gare Montparnasse", "Rambouillet / Dreux / Mantes-la-Jolie"],
            "ouverture": "2004", "stations": 35, "longueur": "117 km",
            "logo": "/assets/Paris_transit_icons_-_Train_N.svg", "modeLogo": "/assets/Paris_transit_icons_-_Train.svg", "plan": "/assets/N-plan.svg",
            "materiel": [
                {"nom": "Regio 2N", "description": "<strong>Automotrice à 2 niveaux climatisée (Z 57000).</strong><br>Depuis 2021, le Regio 2N assure l'intégralité des missions de la ligne N au départ de Paris-Montparnasse, en remplacement des VB 2N."}
            ]
        },
        {
            "id": "P", "nom": "Ligne P", "type": "transilien", "mode": "transilien",
            "terminus": ["Gare de l'Est", "Meaux / Château-Thierry / La Ferté-Milon / Provins / Coulommiers"],
            "ouverture": "2004", "stations": 36, "longueur": "242 km",
            "logo": "/assets/Paris_transit_icons_-_Train_P.svg", "modeLogo": "/assets/Paris_transit_icons_-_Train.svg", "plan": "/assets/P-plan.svg",
            "materiel": [
                {"nom": "Z 50000 Francilien", "description": "<strong>Rame boa climatisée à 8 voitures.</strong><br>Assure les missions électrifiées vers Meaux, Coulommiers et Château-Thierry."},
                {"nom": "AGC BiBi", "description": "<strong>Autorail bimode-bicourant (B 82500).</strong><br>Exploité sur l'axe non électrifié entre Gretz-Armainvilliers et Provins ainsi que vers La Ferté-Milon."},
                {"nom": "Z 20500", "description": "<strong>Automotrice à 2 niveaux.</strong><br>Utilisée en renfort aux heures de pointe sur l'axe Paris-Est ↔ Château-Thierry / Meaux."}
            ]
        },
        {
            "id": "R", "nom": "Ligne R", "type": "transilien", "mode": "transilien",
            "terminus": ["Gare de Lyon", "Montereau / Montargis"],
            "ouverture": "2004", "stations": 24, "longueur": "164 km",
            "logo": "/assets/Paris_transit_icons_-_Train_R.svg", "modeLogo": "/assets/Paris_transit_icons_-_Train.svg", "plan": "/assets/R-plan.svg",
            "materiel": [
                {"nom": "Regio 2N", "description": "<strong>Automotrice à 2 niveaux grande capacité (Z 57000).</strong><br>La ligne R a inauguré le déploiement du Regio 2N en Île-de-France fin 2017, offrant un confort longue distance vers la Seine-et-Marne et le Loiret."}
            ]
        },
        {
            "id": "U", "nom": "Ligne U", "type": "transilien", "mode": "transilien",
            "terminus": ["La Défense", "La Verrière"],
            "ouverture": "1995", "stations": 11, "longueur": "31 km",
            "logo": "/assets/Paris_transit_icons_-_Train_U.svg", "modeLogo": "/assets/Paris_transit_icons_-_Train.svg", "plan": "/assets/U-plan.svg",
            "materiel": [
                {"nom": "Z 8800", "description": "<strong>Automotrice bicourant à 2 niveaux (4 voitures).</strong><br>Assure la tangente ouest entre le quartier d'affaires de La Défense et Saint-Quentin-en-Yvelines / La Verrière."}
            ]
        },
        {
            "id": "V", "nom": "Ligne V", "type": "transilien", "mode": "transilien",
            "terminus": ["Massy–Palaiseau", "Versailles Chantiers"],
            "ouverture": "2023", "stations": 7, "longueur": "15 km",
            "logo": "/assets/Paris_transit_icons_-_Train_V.svg", "modeLogo": "/assets/Paris_transit_icons_-_Train.svg", "plan": "/assets/V-plan.svg",
            "materiel": [
                {"nom": "Z 20900", "description": "<strong>Automotrice à 2 niveaux climatisée.</strong><br>Partagée avec le parc du RER C pour assurer la navette entre Massy–Palaiseau et Versailles Chantiers via la vallée de la Bièvre."},
                {"nom": "Z 20500", "description": "<strong>Automotrice à 2 niveaux.</strong><br>Circule également sur la ligne V en complément des Z 20900, Z 8800 et Z 5600."},
                {"nom": "Z 8800", "description": "<strong>Automotrice bicourant à 2 niveaux.</strong><br>Issue du parc commun avec le RER C."},
                {"nom": "Z 5600", "description": "<strong>Automotrice monocourant à 2 niveaux.</strong><br>Issue du parc commun avec le RER C."}
            ]
        },
        # --- RÉSEAU TRAMWAY (T1 à T14) ---
        {
            "id": "T1", "nom": "Ligne T1", "type": "tram", "mode": "tram",
            "terminus": ["Asnières–Quatre Routes", "Gare de Noisy-le-Sec"],
            "ouverture": "1992", "stations": 37, "longueur": "17,9 km",
            "logo": "/assets/Paris_transit_icons_-_Tram_T1.svg", "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg", "plan": "/assets/T1-plan.svg",
            "materiel": [
                {"nom": "Citadis 305", "description": "<strong>Rame neuve climatisée (TW20) de 33 mètres.</strong><br>Déployée à partir de 2024 pour remplacer progressivement les rames historiques TFS et accompagner le prolongement vers Val de Fontenay."},
                {"nom": "TFS", "description": "<strong>Tramway Français Standard (Alsthom).</strong><br>Matériel pionnier mis en service en 1992 lors de la réintroduction du tramway en Île-de-France entre Saint-Denis et Bobigny."}
            ]
        },
        {
            "id": "T2", "nom": "Ligne T2", "type": "tram", "mode": "tram",
            "terminus": ["Pont de Bezons", "Porte de Versailles"],
            "ouverture": "1997", "stations": 24, "longueur": "17,9 km",
            "logo": "/assets/Paris_transit_icons_-_Tram_T2.svg", "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg", "plan": "/assets/T2-plan.svg",
            "materiel": [
                {"nom": "Citadis 302", "description": "<strong>Rames couplées en unité multiple (65 mètres).</strong><br>Exploitées en doubles rames pour répondre à la forte fréquentation du pôle de La Défense et du Val de Seine."}
            ]
        },
        {
            "id": "T3a", "nom": "Ligne T3a", "type": "tram", "mode": "tram",
            "terminus": ["Pont du Garigliano", "Porte de Vincennes"],
            "ouverture": "2006", "stations": 25, "longueur": "12,4 km",
            "logo": "/assets/Paris_transit_icons_-_Tram_T3a.svg", "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg", "plan": "/assets/T3a-plan.svg",
            "materiel": [
                {"nom": "Citadis 402", "description": "<strong>Rame grand gabarit de 44 mètres (7 modules).</strong><br>Conçue pour le tramway des Maréchaux Sud afin d'offrir une capacité maximale de plus de 300 voyageurs par rame."}
            ]
        },
        {
            "id": "T3b", "nom": "Ligne T3b", "type": "tram", "mode": "tram",
            "terminus": ["Porte de Vincennes", "Porte Dauphine"],
            "ouverture": "2012", "stations": 33, "longueur": "17,5 km",
            "logo": "/assets/Paris_transit_icons_-_Tram_T3b.svg", "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg", "plan": "/assets/T3b-plan.svg",
            "materiel": [
                {"nom": "Citadis 402", "description": "<strong>Rame grand gabarit de 44 mètres (7 modules).</strong><br>Identique à celui du T3a, avec de nouvelles rames livrées en livrée IDFM pour le prolongement jusqu'à la Porte Dauphine en 2024."}
            ]
        },
        {
            "id": "T4", "nom": "Ligne T4", "type": "tram", "mode": "tram",
            "terminus": ["Bondy", "Aulnay-sous-Bois / Hôpital de Montfermeil"],
            "ouverture": "2006", "stations": 20, "longueur": "13,3 km",
            "logo": "/assets/Paris_transit_icons_-_Tram_T4.svg", "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg", "plan": "/assets/T4-plan.svg",
            "materiel": [
                {"nom": "Citadis Dualis", "description": "<strong>Tram-train bicourant (U 53700).</strong><br>Déployé en 2019 pour assurer la nouvelle branche urbaine vers Clichy-sous-Bois et l'Hôpital de Montfermeil."},
                {"nom": "Avanto", "description": "<strong>Tram-train Siemens S70 (U 25500).</strong><br>Premier tram-train mis en service en France en 2006 sur l'axe historique Bondy ↔ Aulnay-sous-Bois."}
            ]
        },
        {
            "id": "T5", "nom": "Ligne T5", "type": "tram", "mode": "tram",
            "terminus": ["Marché de Saint-Denis", "Garges–Sarcelles"],
            "ouverture": "2013", "stations": 16, "longueur": "6,6 km",
            "logo": "/assets/Paris_transit_icons_-_Tram_T5.svg", "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg", "plan": "/assets/T5-plan.svg",
            "materiel": [
                {"nom": "Translohr STE3", "description": "<strong>Tramway sur pneumatiques à 3 caisses (25 mètres).</strong><br>Guidé par un rail central unique, il relie Saint-Denis, Pierrefitte, Sarcelles et la gare de Garges–Sarcelles."}
            ]
        },
        {
            "id": "T6", "nom": "Ligne T6", "type": "tram", "mode": "tram",
            "terminus": ["Châtillon–Montrouge", "Viroflay-Rive-Droite"],
            "ouverture": "2014", "stations": 21, "longueur": "14 km",
            "logo": "/assets/Paris_transit_icons_-_Tram_T6.svg", "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg", "plan": "/assets/T6-plan.svg",
            "materiel": [
                {"nom": "Translohr STE6", "description": "<strong>Tramway sur pneumatiques à 6 caisses (46 mètres).</strong><br>Le roulement sur pneus permet de gravir les fortes rampes de Clamart, Vélizy et Viroflay, incluant une section en tunnel."}
            ]
        },
        {
            "id": "T7", "nom": "Ligne T7", "type": "tram", "mode": "tram",
            "terminus": ["Villejuif–Louis Aragon", "Porte de l'Essonne"],
            "ouverture": "2013", "stations": 18, "longueur": "11,2 km",
            "logo": "/assets/Paris_transit_icons_-_Tram_T7.svg", "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg", "plan": "/assets/T7-plan.svg",
            "materiel": [
                {"nom": "Citadis 302", "description": "<strong>Rame à plancher bas intégral de 32 mètres.</strong><br>Relie le terminus de la ligne 7 du métro à Rungis, l'aéroport d'Orly et Athis-Mons."}
            ]
        },
        {
            "id": "T8", "nom": "Ligne T8", "type": "tram", "mode": "tram",
            "terminus": ["Saint-Denis–Porte de Paris", "Épinay-Orgemont / Villetaneuse-Université"],
            "ouverture": "2014", "stations": 17, "longueur": "8,5 km",
            "logo": "/assets/Paris_transit_icons_-_Tram_T8.svg", "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg", "plan": "/assets/T8-plan.svg",
            "materiel": [
                {"nom": "Citadis 302", "description": "<strong>Rame à plancher bas intégral de 32 mètres.</strong><br>Identique au parc du T7, il dessert la fourche nord entre Saint-Denis, Épinay-sur-Seine et Villetaneuse."}
            ]
        },
        {
            "id": "T9", "nom": "Ligne T9", "type": "tram", "mode": "tram",
            "terminus": ["Porte de Choisy", "Orly–Gaston Viens"],
            "ouverture": "2021", "stations": 19, "longueur": "10,3 km",
            "logo": "/assets/Paris_transit_icons_-_Tram_T9.svg", "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg", "plan": "/assets/T9-plan.svg",
            "materiel": [
                {"nom": "Citadis 405", "description": "<strong>Rame « Lumière » de 45 mètres (7 modules).</strong><br>Matériel de grande capacité doté d'une signature lumineuse sur toute la longueur et de doubles portes aux extrémités."}
            ]
        },
        {
            "id": "T10", "nom": "Ligne T10", "type": "tram", "mode": "tram",
            "terminus": ["La Croix de Berny", "Jardin Parisien"],
            "ouverture": "2023", "stations": 13, "longueur": "6,8 km",
            "logo": "/assets/Paris_transit_icons_-_Tram_T10.svg", "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg", "plan": "/assets/T10-plan.svg",
            "materiel": [
                {"nom": "Citadis 405", "description": "<strong>Rame « Lumière » de 45 mètres (7 modules).</strong><br>Partage la même architecture Citadis X05 que le T9 pour relier Antony, Châtenay-Malabry, Le Plessis-Robinson et Clamart."}
            ]
        },
        {
            "id": "T11", "nom": "Ligne T11", "type": "tram", "mode": "tram",
            "terminus": ["Épinay-sur-Seine", "Le Bourget"],
            "ouverture": "2017", "stations": 7, "longueur": "11 km",
            "logo": "/assets/Paris_transit_icons_-_Tram_T11.svg", "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg", "plan": "/assets/T11-plan.svg",
            "materiel": [
                {"nom": "Citadis Dualis", "description": "<strong>Tram-train rapide (U 53600) apte à 100 km/h.</strong><br>Circule en unités multiples sur la tangentielle nord entre Épinay-sur-Seine, Villetaneuse, Pierrefitte, Stains, Dugny et Le Bourget."}
            ]
        },
        {
            "id": "T12", "nom": "Ligne T12", "type": "tram", "mode": "tram",
            "terminus": ["Massy–Palaiseau", "Évry-Courcouronnes"],
            "ouverture": "2023", "stations": 16, "longueur": "20,4 km",
            "logo": "/assets/Paris_transit_icons_-_Tram_T12.svg", "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg", "plan": "/assets/T12-plan.svg",
            "materiel": [
                {"nom": "Citadis Dualis", "description": "<strong>Tram-train bicourant (U 53800).</strong><br>Alterne une section ferroviaire sur la Grande Ceinture entre Massy et Épinay-sur-Orge et une section urbaine jusqu'à Évry-Courcouronnes."}
            ]
        },
        {
            "id": "T13", "nom": "Ligne T13", "type": "tram", "mode": "tram",
            "terminus": ["Saint-Germain-en-Laye", "Saint-Cyr"],
            "ouverture": "2022", "stations": 12, "longueur": "18,8 km",
            "logo": "/assets/Paris_transit_icons_-_Tram_T13.svg", "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg", "plan": "/assets/T13-plan.svg",
            "materiel": [
                {"nom": "Citadis Dualis", "description": "<strong>Tram-train bicourant (U 53800).</strong><br>Relie Saint-Germain-en-Laye à Saint-Cyr-l'École en empruntant la Grande Ceinture Ouest et un tracé urbain en lisière de forêt."}
            ]
        },
        {
            "id": "T14", "nom": "Ligne T14", "type": "tram", "mode": "tram",
            "terminus": ["Esbly", "Crécy-la-Chapelle"],
            "ouverture": "2025", "stations": 5, "longueur": "9,9 km",
            "logo": "/assets/Paris_transit_icons_-_Tram_T14.svg", "modeLogo": "/assets/Paris_transit_icons_-_Tram.svg", "plan": "/assets/T14-plan.svg",
            "materiel": [
                {"nom": "Citadis Dualis", "description": "<strong>Tram-train (U 53600).</strong><br>Assure la navette ferroviaire dans la vallée du Grand Morin entre Esbly et Crécy-la-Chapelle, érigée en ligne T14 en mars 2025."}
            ]
        }
    ]

    return data_rames, lignes_metro


def fetch_idfm_json(dataset, where=None):
    params = {}
    if where:
        params["where"] = where
    qs = ("?" + urllib.parse.urlencode(params)) if params else ""
    url = f"https://data.iledefrance-mobilites.fr/api/explore/v2.1/catalog/datasets/{dataset}/exports/json{qs}"
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read().decode("utf-8"))


def pick_best_area_name(raw_names):
    cleaned_raw = [str(rn).strip() for rn in raw_names if str(rn).strip()]
    if not cleaned_raw:
        return ""
    for rn in cleaned_raw:
        if rn.lower() in PARIS_GARES:
            return rn
    candidates = [
        clean_stop_name(rn)
        for rn in cleaned_raw
        if not rn.lower().startswith("gare ")
        and not rn.lower().startswith("paris ")
        and not rn.lower().endswith(" - gare")
    ]
    if candidates:
        return sorted(candidates, key=lambda x: (len(x), x))[0]
    return clean_stop_name(cleaned_raw[0])


def enrich_idfm_data():
    print("=== 2A. Audit, enrichissement et dédoublonnage de idfm_data.json ===")
    with open(IDFM_JSON_PATH, encoding="utf-8") as f:
        idfm_data = json.load(f)

    # 1. Référentiel des lignes IDFM (ajout de toutes les lignes Métro 1..14, 3bis, 7bis, 15, 18)
    ref_lines = fetch_idfm_json(
        "referentiel-des-lignes",
        where="transportmode in ('metro', 'rail', 'tram')",
    )
    lines_by_id = {l["id"]: dict(l) for l in idfm_data.get("lines", [])}
    valid_codes = set(LINE_ORDER)

    for l in ref_lines:
        lid = str(l.get("id_line") or "").strip()
        if not lid:
            continue
        tmode = l.get("transportmode")
        tsub = l.get("transportsubmode") or ""
        sc = str(l.get("shortname_line") or "").strip()
        if sc == "3B":
            sc = "3bis"
        elif sc == "7B":
            sc = "7bis"
        if sc not in valid_codes:
            continue
        if lid not in lines_by_id:
            col = str(l.get("colourweb_hexa") or "aaaaaa").lstrip("#").lower()
            tcol = str(l.get("textcolourweb_hexa") or "000000").lstrip("#").lower()
            lines_by_id[lid] = {
                "id": lid,
                "name": sc,
                "code": sc,
                "mode": tmode if tmode in ("metro", "rail", "tram") else "rail",
                "submode": tsub,
                "color": f"#{col}",
                "textColor": f"#{tcol}",
            }

    enriched_lines = sorted(
        lines_by_id.values(),
        key=lambda x: (LINE_RANK.get(x["code"], 999), x["id"]),
    )
    line_id_to_code = {l["id"]: l["code"] for l in enriched_lines}

    # 2. Référentiels officiels IDFM : arrets, zones-d-arrets, arrets-lignes
    arrets = fetch_idfm_json("arrets", where="arrtype in ('metro', 'rail', 'tram')")
    zdas = fetch_idfm_json(
        "zones-d-arrets",
        where="zdatype in ('metroStation', 'railStation', 'tramStation', 'onstreetTram')",
    )
    arrets_lignes = fetch_idfm_json(
        "arrets-lignes",
        where="mode in ('Metro', 'RapidTransit', 'LocalTrain', 'Tramway', 'Rail')",
    )

    arr_to_zda = {}
    zda_from_arrets = {}
    for a in arrets:
        zid = str(a.get("zdaid") or "").strip()
        aid = str(a.get("arrid") or "").strip()
        if not zid:
            continue
        if aid:
            arr_to_zda[aid] = zid
        rec = zda_from_arrets.setdefault(
            zid,
            {
                "stopAreaId": zid,
                "rawNames": [],
                "type": a.get("arrtype") or "rail",
                "town": a.get("arrtown") or "",
                "stopPointIds": set(),
                "lines": set(),
                "zdcid": None,
            },
        )
        aname = str(a.get("arrname") or "").strip()
        if aname and aname not in rec["rawNames"]:
            rec["rawNames"].append(aname)
        if aid:
            rec["stopPointIds"].add(aid)
        if a.get("arrtype") == "metro":
            rec["type"] = "metro"

    for z in zdas:
        zid = str(z.get("zdaid") or "").strip()
        if zid in zda_from_arrets:
            zdc = str(z.get("zdcid") or "").strip()
            if zdc:
                zda_from_arrets[zid]["zdcid"] = zdc
            zname = str(z.get("zdaname") or "").strip()
            if zname and zname not in zda_from_arrets[zid]["rawNames"]:
                zda_from_arrets[zid]["rawNames"].append(zname)

    for rec in arrets_lignes:
        lid = str(rec.get("id") or "").replace("IDFM:", "").strip()
        mode = rec.get("mode")
        sname = str(rec.get("shortname") or "").strip()
        line_code = line_id_to_code.get(lid)
        if not line_code and mode == "Metro" and sname:
            line_code = "3bis" if sname == "3B" else ("7bis" if sname == "7B" else sname)
        if not line_code:
            continue
        sid = str(rec.get("stop_id") or "").split(":")[-1].strip()
        if sid in zda_from_arrets:
            zda_from_arrets[sid]["lines"].add(line_code)
        elif sid in arr_to_zda and arr_to_zda[sid] in zda_from_arrets:
            zda_from_arrets[arr_to_zda[sid]]["lines"].add(line_code)

    # 3. Fusionner et dédoublonner par stopAreaId (ex: "Athis-Mons" + "Gare d'Athis Mons")
    stops_by_area = {}
    for s in idfm_data.get("stops", []):
        aid = str(s.get("stopAreaId") or "").strip()
        if not aid:
            continue
        rec = stops_by_area.setdefault(
            aid,
            {
                "stopAreaId": aid,
                "rawNames": [],
                "type": s.get("type") or "rail",
                "town": s.get("town") or "",
                "stopPointIds": set(),
                "lines": set(),
                "zdcid": s.get("zdcid") or None,
            },
        )
        sname = str(s.get("name") or "").strip()
        if sname and sname not in rec["rawNames"]:
            rec["rawNames"].append(sname)
        for pid in s.get("stopPointIds", []):
            if str(pid).strip():
                rec["stopPointIds"].add(str(pid).strip())
        if not rec["town"] and s.get("town"):
            rec["town"] = s.get("town")

    # Intégrer tous les arrêts de Metro (et compléter les rail/tram) depuis arrets/arrets-lignes
    for aid, zrec in zda_from_arrets.items():
        if aid not in stops_by_area:
            stops_by_area[aid] = zrec
        else:
            existing = stops_by_area[aid]
            for rn in zrec["rawNames"]:
                if rn not in existing["rawNames"]:
                    existing["rawNames"].append(rn)
            existing["stopPointIds"] |= zrec["stopPointIds"]
            existing["lines"] |= zrec["lines"]
            if not existing["zdcid"] and zrec["zdcid"]:
                existing["zdcid"] = zrec["zdcid"]
            if not existing["town"] and zrec["town"]:
                existing["town"] = zrec["town"]

    for aid, b_lines in BOUNDARY_STOP_LINES.items():
        if aid in stops_by_area:
            stops_by_area[aid]["lines"] |= set(b_lines)

    deduped_stops = []
    for aid, rec in stops_by_area.items():
        if not rec["lines"]:
            continue
        best_name = clean_stop_name(pick_best_area_name(rec["rawNames"]))
        sorted_lines = sorted(rec["lines"], key=lambda x: LINE_RANK.get(x, 999))
        entry = {
            "name": best_name,
            "type": rec["type"],
            "town": rec["town"],
            "stopAreaId": aid,
            "stopPointIds": sorted(rec["stopPointIds"]),
            "lines": sorted_lines,
        }
        if rec.get("zdcid"):
            entry["zdcid"] = rec["zdcid"]
        deduped_stops.append(entry)

    deduped_stops.sort(key=lambda s: (unicodedata.normalize("NFD", s["name"].lower()), s["stopAreaId"]))

    enriched_payload = {
        "lines": enriched_lines,
        "stops": deduped_stops,
    }
    IDFM_JSON_PATH.write_text(
        json.dumps(enriched_payload, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(
        f"  [OK] idfm_data.json enrichi : {len(enriched_lines)} lignes "
        f"(dont {sum(1 for l in enriched_lines if l['mode'] == 'metro')} Métro) "
        f"et {len(deduped_stops)} arrêts uniques par stopAreaId."
    )
    return enriched_payload, arrets_lignes


def build_and_write_data_js():
    idfm_data, records = enrich_idfm_data()
    print("=== 2B. Traitement de idfm_data.json & génération de data.js / idfmMapping.js ===")

    # Sauvegarder une copie des stations Métro d'origine si elle n'existe pas encore
    if not ORIG_METRO_STATIONS_BACKUP.exists():
        orig_js = DATA_JS_PATH.read_text(encoding="utf-8")
        station_blocks = re.findall(r'\{\s*nom:\s*"([^"]+)",\s*lignes:\s*(\[[^\]]+\])', orig_js)
        metro_stations_orig = {name: json.loads(lignes) for name, lignes in station_blocks}
        ORIG_METRO_STATIONS_BACKUP.write_text(
            json.dumps(metro_stations_orig, ensure_ascii=False, indent=2),
            encoding="utf-8"
        )
    else:
        metro_stations_orig = json.loads(ORIG_METRO_STATIONS_BACKUP.read_text(encoding="utf-8"))

    data_rames, lignes_metro = get_all_data_definitions()

    # Couleurs officielles (Métro + couleurs exactes de idfm_data.json)
    ligne_colors = {
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
    }
    for l in idfm_data["lines"]:
        ligne_colors[l["code"]] = l["color"]

    # Map ligne -> matériel roulant et ligne -> idfmLineId
    line_to_rames = {
        l["id"]: [m["nom"] for m in l.get("materiel", [])]
        for l in lignes_metro
    }

    line_id_to_code = {l["id"]: l["code"] for l in idfm_data["lines"]}
    line_code_to_id = {}
    for l in idfm_data["lines"]:
        # Priorité au premier identifiant officiel s'il existe
        line_code_to_id.setdefault(l["code"], l["id"])

    numeric_id_to_lines = {}
    norm_name_to_lines = {}
    for rec in records:
        lid = rec.get("id", "").replace("IDFM:", "")
        sname = rec.get("shortname")
        mode = rec.get("mode")
        line_code = None
        if lid in line_id_to_code:
            line_code = line_id_to_code[lid]
        elif mode == "Metro" and sname:
            line_code = "3bis" if sname == "3B" else ("7bis" if sname == "7B" else sname)
        if not line_code:
            continue
        num_id = rec.get("stop_id", "").split(":")[-1]
        numeric_id_to_lines.setdefault(num_id, set()).add(line_code)
        nk = norm_key(rec.get("stop_name", ""))
        if nk:
            norm_name_to_lines.setdefault(nk, set()).add(line_code)

    # Index des zones de correspondance (zdcid) et arrêts enrichis par stopAreaId
    area_records = {}
    zdc_to_areas = {}
    for s in idfm_data["stops"]:
        aid = str(s["stopAreaId"])
        lines_found = set(s.get("lines", []))
        if aid in numeric_id_to_lines:
            lines_found |= numeric_id_to_lines[aid]
        for pid in s.get("stopPointIds", []):
            if pid in numeric_id_to_lines:
                lines_found |= numeric_id_to_lines[pid]
        if not lines_found and aid in BOUNDARY_STOP_LINES:
            lines_found |= set(BOUNDARY_STOP_LINES[aid])
        if not lines_found:
            nk = norm_key(s["name"])
            if nk in norm_name_to_lines:
                lines_found |= norm_name_to_lines[nk]

        zdcid = s.get("zdcid")
        if zdcid:
            zdc_to_areas.setdefault(zdcid, set()).add(aid)

        area_records[aid] = {
            "stopAreaId": aid,
            "stopPointIds": set(str(p) for p in s.get("stopPointIds", []) if str(p)),
            "zdcid": zdcid,
            "nom": s["name"],
            "lignes": lines_found,
            "town": s.get("town", ""),
        }

    # Fusion multimodale par clé normalisée (avec conservation de tous les stopAreaId / stopPointIds)
    unified = {}
    for aid, rec in area_records.items():
        if not rec["lignes"]:
            continue
        nk = norm_key(rec["nom"])
        if nk not in unified:
            unified[nk] = {
                "nom": rec["nom"],
                "lignes": set(rec["lignes"]),
                "town": rec["town"],
                "stopAreaIds": {aid},
                "stopPointIds": set(rec["stopPointIds"]),
            }
        else:
            unified[nk]["lignes"] |= set(rec["lignes"])
            unified[nk]["stopAreaIds"].add(aid)
            unified[nk]["stopPointIds"] |= set(rec["stopPointIds"])

    # Aliases exacts pour les stations Métro historiques sans perte d'IDFM
    METRO_STOP_AREA_ALIASES = {
        norm_key("Château-Landon"): ["479053"],
        norm_key("Pont Marie"): ["44487"],
        norm_key("Saint-Paul"): ["44881"],
        norm_key("Thiais - Orly"): ["490834"],
        norm_key("Chevilly-Larue"): ["490836"],
        norm_key("Aéroport d'Orly"): ["490909", "462747"],
    }

    # Uniquement injecter les futures gares du Grand Paris Express (15, 16, 17, 18) depuis backup
    gpe_lines_set = {"15", "16", "17", "18"}
    for m_name, m_lines in metro_stations_orig.items():
        gpe_only = [lid for lid in m_lines if lid in gpe_lines_set]
        if not gpe_only:
            continue
        nk = norm_key(clean_stop_name(m_name))
        if nk in unified:
            unified[nk]["lignes"] |= set(gpe_only)
        else:
            unified[nk] = {
                "nom": clean_stop_name(m_name),
                "lignes": set(gpe_only),
                "town": "Île-de-France",
                "stopAreaIds": set(),
                "stopPointIds": set(),
            }
        for alias_aid in METRO_STOP_AREA_ALIASES.get(nk, []):
            if alias_aid in area_records:
                unified[nk]["stopAreaIds"].add(alias_aid)
                unified[nk]["stopPointIds"] |= area_records[alias_aid]["stopPointIds"]

    # Séparation stricte des pôles reliés par couloirs (zéro mélange de lignes entre gares distinctes)
    STRICT_STATION_OVERRIDES = {
        "Gare Saint-Lazare": (["3", "12", "13", "14", "J", "L"], ["462374", "58566"]),
        "Haussmann Saint-Lazare": (["E"], ["58718"]),
        "Auber": (["A"], ["43068"]),
        "Châtelet": (["1", "4", "7", "11", "14"], ["42587"]),
        "Châtelet - Les Halles": (["A", "B", "D"], ["45102"]),
        "Les Halles": (["4"], ["417675"]),
        "Gare du Nord": (["4", "5", "B", "D", "H", "K"], ["462941", "462394"]),
        "Magenta": (["E"], ["58572"]),
        "Gare de l'Est": (["4", "5", "7", "P"], ["43138", "470519"]),
        "Gare de Lyon": (["1", "14", "A", "D", "R"], ["43153", "470195"]),
        "Bercy": (["6", "14", "R"], ["58728", "479035"]),
        "Gare d'Austerlitz": (["5", "10", "C"], ["462352", "43072"]),
        "Gare Montparnasse": (["4", "6", "12", "13", "N"], ["58578", "43238"]),
        "Saint-Michel": (["4"], ["462369"]),
        "Saint-Michel Notre-Dame": (["B", "C"], ["44877"]),
        "La Défense": (["1", "15", "A", "E", "L", "U", "T2"], ["462395", "470548", "470549"]),
        "Nation": (["1", "2", "6", "9", "A"], ["462358", "473875"]),
        "Charles de Gaulle - Étoile": (["1", "2", "6", "A"], ["477682", "58759"]),
        "Porte Maillot": (["1", "C", "E", "T3b"], ["44533", "415093", "490883"]),
        "Porte de Clichy": (["13", "14", "C", "T3b"], ["473477", "44514", "473476"]),
        "Pont du Garigliano": (["C", "T3a"], ["58734", "462396"]),
    }
    strict_keys = set()
    for s_name, (s_lines, s_areas) in STRICT_STATION_OVERRIDES.items():
        nk = norm_key(s_name)
        strict_keys.add(nk)
        pts = set()
        for aid in s_areas:
            if aid in area_records:
                pts |= area_records[aid]["stopPointIds"]
        unified[nk] = {
            "nom": s_name,
            "lignes": set(s_lines),
            "town": unified.get(nk, {}).get("town", "Paris") or "Paris",
            "stopAreaIds": set(s_areas),
            "stopPointIds": pts,
        }

    # Compléter via zone de correspondance (zdcid) uniquement hors pôles stricts et pour correspondances réelles
    for nk, u in unified.items():
        if nk in strict_keys:
            continue
        extra_areas = set()
        for aid in list(u["stopAreaIds"]):
            zdc = area_records.get(aid, {}).get("zdcid")
            if not zdc:
                continue
            for sibling_aid in zdc_to_areas.get(zdc, set()):
                if sibling_aid not in u["stopAreaIds"]:
                    sib = area_records.get(sibling_aid)
                    if sib and (sib["lignes"] & u["lignes"]):
                        extra_areas.add(sibling_aid)
        for aid in extra_areas:
            u["stopAreaIds"].add(aid)
            u["stopPointIds"] |= area_records[aid]["stopPointIds"]

    # Construire stationsData triée par ordre alphabétique
    stations_data = []
    for u in unified.values():
        sorted_lines = sorted(u["lignes"], key=lambda x: LINE_RANK.get(x, 999))
        rames = []
        for lid in sorted_lines:
            for rname in line_to_rames.get(lid, []):
                if rname not in rames:
                    rames.append(rname)
        stations_data.append({
            "nom": u["nom"],
            "lignes": sorted_lines,
            "resume": f"Station située à {u['town']}." if u.get("town") else "",
            "materiel": rames,
            "stopAreaIds": sorted(u["stopAreaIds"]),
            "stopPointIds": sorted(u["stopPointIds"]),
        })

    stations_data.sort(key=lambda s: unicodedata.normalize("NFD", s["nom"].lower()))

    # Calculer les correspondances exactes et l'identifiant IDFM de chaque ligne
    for ligne in lignes_metro:
        lid = ligne["id"]
        corr = set()
        for st in stations_data:
            if lid in st["lignes"]:
                for other_lid in st["lignes"]:
                    if other_lid != lid:
                        corr.add(other_lid)
        ligne["correspondances"] = sorted(corr, key=lambda x: LINE_RANK.get(x, 999))
        ligne["color"] = ligne_colors.get(lid, "#6c757d")
        if lid in line_code_to_id:
            ligne["idfmLineId"] = line_code_to_id[lid]

    # Construire src/data/idfmMapping.js pour les résolutions rapides C01xxx <-> Code ligne
    idfm_lines_mapping = {
        l["code"]: {
            "id": l["id"],
            "code": l["code"],
            "mode": l["mode"],
            "stifRef": f"STIF:Line::{l['id']}:",
            "color": l["color"],
        }
        for l in idfm_data["lines"]
    }
    idfm_id_to_code_map = {l["id"]: l["code"] for l in idfm_data["lines"]}
    IDFM_MAPPING_JS_PATH.parent.mkdir(parents=True, exist_ok=True)
    mapping_js = f"""// src/data/idfmMapping.js — Généré automatiquement depuis idfm_data.json
// Correspondances exactes des identifiants IDFM (Lignes, StopAreas SP, StopPoints Q)

export const IDFM_LINES_BY_CODE = {json.dumps(idfm_lines_mapping, ensure_ascii=False, indent=2)};

export const IDFM_LINE_ID_TO_CODE = {json.dumps(idfm_id_to_code_map, ensure_ascii=False, indent=2)};

export function extractIdfmLineId(lineRef) {{
  if (!lineRef) return null;
  const str = String(lineRef).trim();
  const match = str.match(/C\\d{{5}}/);
  return match ? match[0] : str.replace(/^STIF:Line::|:$/g, '') || null;
}}

export function getLineCodeFromRef(lineRef) {{
  const lid = extractIdfmLineId(lineRef);
  if (!lid) return null;
  return IDFM_LINE_ID_TO_CODE[lid] || null;
}}

export function getIdfmLineId(lineCode) {{
  const entry = IDFM_LINES_BY_CODE[String(lineCode)];
  return entry ? entry.id : null;
}}

export function getIdfmLineRef(lineCode) {{
  const entry = IDFM_LINES_BY_CODE[String(lineCode)];
  return entry ? entry.stifRef : null;
}}

export function formatStopAreaRef(stopAreaId) {{
  const raw = String(stopAreaId || '').trim();
  if (!raw) return null;
  if (raw.startsWith('STIF:StopArea:SP:')) return raw.endsWith(':') ? raw : `${{raw}}:`;
  return `STIF:StopArea:SP:${{raw}}:`;
}}

export function formatStopPointRef(stopPointId) {{
  const raw = String(stopPointId || '').trim();
  if (!raw) return null;
  if (raw.startsWith('STIF:StopPoint:Q:')) return raw.endsWith(':') ? raw : `${{raw}}:`;
  return `STIF:StopPoint:Q:${{raw}}:`;
}}
"""
    IDFM_MAPPING_JS_PATH.write_text(mapping_js, encoding="utf-8")
    print(f"  [OK] {IDFM_MAPPING_JS_PATH} généré.")

    # Écriture de src/data.js
    js_content = f"""// src/data.js — Généré automatiquement par prepare_data_and_assets.py
// Données unifiées : Métro (1 à 18) + RER (A à E) + Transilien (H à V) + Tramway (T1 à T14)

export const dataRames = {json.dumps(data_rames, ensure_ascii=False, indent=2)};

export const lignesMetro = {json.dumps(lignes_metro, ensure_ascii=False, indent=2)};

export const ligneColors = {json.dumps(ligne_colors, ensure_ascii=False, indent=2)};

export const stationsData = {json.dumps(stations_data, ensure_ascii=False, indent=2)};

const lineMap = new Map(lignesMetro.map(l => [l.id, l]));

export function getLineLogo(id) {{
  const ligne = lineMap.get(String(id));
  if (ligne && ligne.logo) return ligne.logo;
  return `/assets/${{id}}-logo.png`;
}}

export function getLinePlan(id) {{
  const ligne = lineMap.get(String(id));
  if (ligne && ligne.plan) return ligne.plan;
  return `/assets/${{id}}-plan.png`;
}}

export function getModeLogo(mode, white = false) {{
  const prefix = white ? "Paris_transit_icons_white_-_" : "Paris_transit_icons_-_";
  switch (mode) {{
    case "rer":
      return `/assets/${{prefix}}RER.svg`;
    case "transilien":
    case "rail":
      return `/assets/${{prefix}}Train.svg`;
    case "tram":
      return `/assets/${{prefix}}Tram.svg`;
    case "metro":
    default:
      return white ? "/assets/logo-metro-blanc.svg" : "/assets/logo-metro-noir.svg";
  }}
}}
"""
    DATA_JS_PATH.write_text(js_content, encoding="utf-8")
    with_areas = sum(1 for st in stations_data if st["stopAreaIds"])
    print(
        f"  [OK] {DATA_JS_PATH} généré avec {len(lignes_metro)} lignes, "
        f"{len(data_rames)} matériels roulants et {len(stations_data)} stations/gares "
        f"({with_areas} reliées à des stopAreaIds IDFM) !"
    )


if __name__ == "__main__":
    if "--data-only" not in sys.argv:
        download_all_wikimedia_assets()
    build_and_write_data_js()
