/* ------------------------------------------------------------------
   SILD'ARCADE - le moteur du site
   ------------------------------------------------------------------
   Il n'y a rien a modifier ici pour ajouter un projet : tout se passe
   dans projets.js. Ce fichier ne fait que deux choses.

   1. REMPLIR LA GRILLE. Chaque page porte un <div id="grille"
      data-machine="arcade">. On y pose les projets de cette machine.
      Sans data-machine, on pose tout.

   2. LE SAS DE LA CHAINE. Un clic sur un projet disponible ouvre la
      chaine YouTube dans un onglet, compte cinq secondes, puis ouvre
      le telechargement. C'est le fonctionnement d'origine du site,
      garde tel quel.
------------------------------------------------------------------ */

const CHAINE = "https://www.youtube.com/@laboiteavider";
const ATTENTE = 5;                       // les secondes du sas

const LIBELLE = {
    disponible: "Disponible",
    encours:    "En cours",
    chantier:   "En chantier"
};

function fiche(p) {
    const carte = document.createElement("article");
    carte.className = "fiche";

    const visuel = document.createElement("div");
    visuel.className = "visuel";

    /* le titre dessine sert de fond de secours : il est la meme quand
       une banniere existe, et l'image se pose par-dessus. Si l'image
       manque ou ne charge pas, on voit le titre au lieu d'un trou. */
    const sigle = document.createElement("div");
    sigle.className = "sigle";
    sigle.textContent = p.titre;
    visuel.appendChild(sigle);

    if (p.image) {
        const img = document.createElement("img");
        img.className = "banniere";
        img.src = p.image;
        img.alt = "";
        img.addEventListener("error", function () { img.remove(); });
        visuel.appendChild(img);
    }
    const etat = document.createElement("span");
    etat.className = "etat " + p.etat;
    etat.textContent = LIBELLE[p.etat] || p.etat;
    visuel.appendChild(etat);
    carte.appendChild(visuel);

    const corps = document.createElement("div");
    corps.className = "corps";

    const titre = document.createElement("h3");
    titre.textContent = p.titre;
    corps.appendChild(titre);

    if (p.genre) {
        const g = document.createElement("p");
        g.className = "genre";
        g.textContent = p.genre;
        corps.appendChild(g);
    }
    if (p.note) {
        const n = document.createElement("p");
        n.className = "note";
        n.textContent = p.note;
        corps.appendChild(n);
    }

    const bouton = document.createElement("button");
    bouton.className = "bouton";
    if (p.etat === "disponible" && p.lien) {
        bouton.className = "bouton actif";
        bouton.textContent = "Télécharger";
        bouton.addEventListener("click", function () { sas(bouton, p.lien); });
    } else if (p.etat === "encours") {
        bouton.textContent = "En cours de traduction";
    } else {
        bouton.textContent = "En chantier";
    }
    corps.appendChild(bouton);

    carte.appendChild(corps);
    return carte;
}

/* le sas : la chaine d'abord, le fichier ensuite */
function sas(bouton, lien) {
    if (bouton.dataset.enCours === "oui") return;
    bouton.dataset.enCours = "oui";
    window.open(CHAINE, "_blank", "noopener");

    let reste = ATTENTE;
    bouton.className = "bouton attente";
    bouton.textContent = "Merci ! Ouverture dans " + reste + " s";

    const horloge = setInterval(function () {
        reste = reste - 1;
        if (reste > 0) {
            bouton.textContent = "Merci ! Ouverture dans " + reste + " s";
            return;
        }
        clearInterval(horloge);
        window.open(lien, "_blank", "noopener");
        bouton.className = "bouton actif";
        bouton.textContent = "Télécharger";
        bouton.dataset.enCours = "non";
    }, 1000);
}

function remplir() {
    const grille = document.getElementById("grille");
    if (!grille || typeof PROJETS === "undefined") return;

    const machine = grille.dataset.machine || "";
    const ordre = { disponible: 0, encours: 1, chantier: 2 };
    const liste = PROJETS
        .filter(function (p) { return !machine || p.machine === machine; })
        .slice()
        .sort(function (a, b) { return ordre[a.etat] - ordre[b.etat]; });

    dessiner(grille, liste);
    filtres(grille, liste);

    const compte = document.getElementById("compte");
    if (compte) {
        const dispo = liste.filter(function (p) { return p.etat === "disponible"; }).length;
        compte.textContent = liste.length + " projets, dont " + dispo + " téléchargeables";
    }
}

function dessiner(grille, liste) {
    grille.innerHTML = "";
    liste.forEach(function (p) { grille.appendChild(fiche(p)); });
}

function filtres(grille, liste) {
    const barre = document.getElementById("filtres");
    if (!barre) return;
    const choix = [
        ["", "Tout"],
        ["disponible", "Disponibles"],
        ["encours", "En cours"],
        ["chantier", "En chantier"]
    ];
    barre.innerHTML = "";
    choix.forEach(function (c, i) {
        const b = document.createElement("button");
        b.textContent = c[1];
        if (i === 0) b.className = "actif";
        b.addEventListener("click", function () {
            Array.prototype.forEach.call(barre.children, function (x) { x.className = ""; });
            b.className = "actif";
            dessiner(grille, c[0] ? liste.filter(function (p) { return p.etat === c[0]; }) : liste);
        });
        barre.appendChild(b);
    });
}

/* les nombres des grandes tuiles de l'accueil */
function compter() {
    if (typeof PROJETS === "undefined") return;
    ["arcade", "nes", "consoles"].forEach(function (m) {
        const cible = document.getElementById("nombre-" + m);
        if (!cible) return;
        const n = PROJETS.filter(function (p) { return p.machine === m; }).length;
        const d = PROJETS.filter(function (p) { return p.machine === m && p.etat === "disponible"; }).length;
        cible.textContent = n + " projets" + (d ? " — " + d + " à télécharger" : "");
    });
}

document.addEventListener("DOMContentLoaded", function () {
    remplir();
    compter();
});
