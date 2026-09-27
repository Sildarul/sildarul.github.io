SILD'ARCADE — LE SITE, MODE D'EMPLOI
======================================================================

COMMENT C'EST FAIT
----------------------------------------------------------------------
  index.html      l'accueil : Arcade, Nintendo, Sony, Sega, Special
  arcade.html     les bornes d'arcade
  nintendo.html   la page Nintendo : une tuile par console
    nes.html        NES et Famicom (projet Reset 60)
    snes.html       Super Nintendo et Super Famicom (projet Reset 60)
    n64.html        Nintendo 64
    gb.html         Game Boy et Game Boy Color
    gamecube.html   GameCube
  sony.html       la page Sony : une tuile par console
    ps1.html        PlayStation
    ps2.html        PlayStation 2
  sega.html       la page Sega : une tuile par console
    mastersystem.html  Master System
    megadrive.html     Mega Drive
  soutiens.html   les traductions reservees aux soutiens Ko-fi
  consoles.html   l'ancienne page Consoles : renvoie vers l'accueil

  projets.js      LE CATALOGUE. C'est le seul fichier a modifier.
  site.js         le moteur : il remplit les pages a partir du catalogue
  style.css       l'habillage
  assets/         les bannieres
  sitemap.xml     la liste des pages, pour les moteurs de recherche
  robots.txt      dit aux moteurs ou trouver le sitemap

  refaire_les_pages.py   A RELANCER APRES CHAQUE CHANGEMENT DE projets.js

  ancienne-page.html   l'ancienne page d'avant la refonte, gardee au cas
                       ou. Tu peux la supprimer quand tu es tranquille.


AJOUTER OU SORTIR UN PROJET
----------------------------------------------------------------------
Tout se passe dans projets.js, et NULLE PART AILLEURS. Les pages
se remplissent toutes seules a partir de ce fichier.

Pour ajouter un projet, recopie un bloc existant :

  { titre: "Le nom du jeu",
    machine: "arcade",            arcade | nes | snes | n64 | gb | gamecube
                                  | ps1 | ps2 | mastersystem | megadrive | soutiens
    etat: "chantier",             disponible | encours | chantier | soutien
    genre: "Traduction FR",
    note: "une precision",        facultatif
    image: "assets/xxx.jpg",      facultatif
    lien: "" },                   le telechargement

Pour SORTIR un patch : passe son etat a "disponible" et colle son lien
dans "lien". Le bouton s'allume tout seul, le compteur de la page se met
a jour tout seul, et la tuile remonte en haut de la grille toute seule.

Sans image, une tuile est dessinee avec le titre du jeu : un projet peut
donc etre annonce avant que la banniere existe.


POURQUOI IL FAUT RELANCER refaire_les_pages.py
----------------------------------------------------------------------
Le JavaScript sait remplir les pages tout seul a partir de projets.js.
Mais UN MOTEUR DE RECHERCHE NE LIT PAS TOUJOURS LE JAVASCRIPT : sans
precaution, les titres des jeux n'existeraient nulle part dans le HTML
et Google pourrait passer a cote.

refaire_les_pages.py recopie donc toutes les fiches EN DUR dans les
pages, entre <!-- FICHES --> et <!-- FIN FICHES -->. Le
JavaScript les redessine ensuite par-dessus a l'ouverture : les deux
disent la meme chose. Et la page reste entierement lisible meme avec le
JavaScript coupe.

   python refaire_les_pages.py

Il met aussi le sitemap.xml a jour. A relancer a chaque fois que tu
touches a projets.js, sinon les moteurs verront l'ancienne liste.


LE SAS DE LA CHAINE
----------------------------------------------------------------------
Un clic sur un projet disponible ouvre la chaine YouTube, compte cinq
secondes, puis ouvre le telechargement. C'est le fonctionnement
d'origine, garde tel quel. Les deux reglages sont en haut de site.js :

  CHAINE    l'adresse de la chaine
  ATTENTE   le nombre de secondes


LES LIENS ACTIFS, AU 7 SEPTEMBRE 2026
----------------------------------------------------------------------
  Haunting Ground
    https://drive.google.com/file/d/1cT3uTXQ7OOCK5Dex2r3xnNNTU_415mon/view?usp=sharing
  Resident Evil Outbreak File #1 et #2
    https://drive.google.com/file/d/1ngqfOuKsUAwxgQLAz_AA1oaISSJZbby9/view?usp=drive_link
  Luigi's Mansion Arcade
    https://drive.google.com/file/d/1vpGscA6F780YEbTK5u1SInaoP2TuNy0x/view?usp=drive_link
  Silent Hill Arcade
    https://drive.google.com/file/d/1tJwgw3EDVunw41ECYNUqAeRVmEK_Dicd/view?usp=sharing

  Ces quatre liens ont ete repris tels quels de l'ancienne page, qui
  faisait foi. Le fichier README d'avant en donnait deux autres, perimes.


A VERIFIER PAR TOI
----------------------------------------------------------------------
J'ai ajoute au catalogue tous les chantiers dont j'avais connaissance,
avec un etat prudent : rien n'est marque "disponible" a part les quatre
patchs qui l'etaient deja. Relis la liste et corrige :
  - les etats (ce qui est en fait deja sorti)
  - les titres et les machines
  - ce qui manque, ce qui n'a rien a y faire


LES TRADUCTIONS POUR LES SOUTIENS
----------------------------------------------------------------------
Une fiche avec machine: "soutiens" et etat: "soutien" va sur la page
soutiens.html, et son bouton dit « Debloquer sur Ko-fi ».

ATTENTION : le site est PUBLIC, projets.js compris. Dans « lien », on
met la page Ko-fi du jeu, JAMAIS le lien du fichier (sinon n'importe
qui le trouve dans le code source). C'est Ko-fi qui donne le fichier a
ceux qui soutiennent.


AJOUTER UNE CONSOLE (par exemple la Mega Drive chez Sega)
----------------------------------------------------------------------
1. Copier une page console existante (ps1.html par exemple), changer
   le titre, le texte, le fil d'Ariane et data-machine="megadrive".
2. L'ajouter dans PAGES en haut de refaire_les_pages.py.
3. Ajouter "megadrive" au bon constructeur dans MARQUES, en bas de
   site.js, pour que les compteurs en tiennent compte.
4. Ajouter sa tuile dans la page du constructeur (sega.html).

PHOTOS DES TUILES DE L'ACCUEIL
- Les tuiles Arcade / Nintendo / Sony / Sega / Spécial de index.html ont une
  vitrine en haut : <div class="photo photo-xxx"><img src="assets/tuile_xxx.webp"></div>.
- Photos : assets/tuile_nintendo.webp (Super Famicom), assets/tuile_sony.webp
  (PlayStation), assets/tuile_ps2.webp (PS2), assets/tuile_sega.webp (Mega Drive).
  Détourées (fond transparent), ~720 px de large, en webp.
- La tuile Sony montre deux consoles (classe "photo-duo") : la seconde passe devant.
- La lueur derrière chaque console se règle dans style.css (--lueur).
