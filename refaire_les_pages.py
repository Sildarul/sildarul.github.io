# -*- coding: utf-8 -*-
"""REFAIRE LES PAGES DU SITE - Sild'arcade production.

   python refaire_les_pages.py

Le catalogue vit dans projets.js. Le JavaScript du site sait deja le lire
et remplir les pages tout seul... mais UN MOTEUR DE RECHERCHE, LUI, NE
LIT PAS TOUJOURS LE JAVASCRIPT. Sans ce script, les 52 titres n'existent
nulle part dans le HTML et Google peut passer a cote.

Ce script recopie donc les fiches EN DUR dans les quatre pages, entre les
deux reperes <!-- FICHES --> et <!-- FIN FICHES -->. Le JavaScript les
redessine ensuite par-dessus a l'ouverture : les deux disent la meme
chose, et la page reste lisible meme sans JavaScript.

A RELANCER a chaque fois que projets.js change. Rien d'autre a faire.
"""
import io, os, re, html, datetime

DOSSIER = os.path.dirname(os.path.abspath(__file__))
PAGES = {"index.html": None, "arcade.html": "arcade",
         "nes.html": "nes", "consoles.html": "consoles"}
ADRESSE = "https://sildarul.github.io/"
LIBELLE = {"disponible": "Disponible", "encours": "En cours", "chantier": "En chantier"}
BOUTON = {"disponible": "Télécharger", "encours": "En cours de traduction",
          "chantier": "En chantier"}
ORDRE = {"disponible": 0, "encours": 1, "chantier": 2}


def lire_catalogue():
    """lit projets.js sans avoir besoin de node : les fiches y sont
    ecrites simplement, une accolade par projet"""
    t = io.open(os.path.join(DOSSIER, "projets.js"), encoding="utf-8").read()
    t = t[t.index("["):]
    projets = []
    for bloc in re.findall(r"\{(.*?)\}", t, re.S):
        p = {}
        for cle, val in re.findall(r"(\w+)\s*:\s*\"((?:[^\"\\]|\\.)*)\"", bloc):
            p[cle] = val.replace('\\"', '"').replace("\\'", "'")
        if p.get("titre"):
            projets.append(p)
    return projets


def fiche(p):
    etat = p.get("etat", "chantier")
    t = html.escape(p["titre"])
    L = ['      <article class="fiche">',
         '        <div class="visuel">',
         '          <div class="sigle">%s</div>' % t]
    if p.get("image"):
        L.append('          <img class="banniere" src="%s" alt="%s">'
                 % (html.escape(p["image"]), t))
    L += ['          <span class="etat %s">%s</span>' % (etat, LIBELLE.get(etat, etat)),
          '        </div>',
          '        <div class="corps">',
          '          <h3>%s</h3>' % t]
    if p.get("genre"):
        L.append('          <p class="genre">%s</p>' % html.escape(p["genre"]))
    if p.get("note"):
        L.append('          <p class="note">%s</p>' % html.escape(p["note"]))
    if etat == "disponible" and p.get("lien"):
        L.append('          <a class="bouton actif" href="%s" rel="noopener">%s</a>'
                 % (html.escape(p["lien"]), BOUTON[etat]))
    else:
        L.append('          <span class="bouton">%s</span>' % BOUTON.get(etat, etat))
    L += ['        </div>', '      </article>']
    return "\n".join(L)


def refaire():
    projets = lire_catalogue()
    for page, machine in PAGES.items():
        chemin = os.path.join(DOSSIER, page)
        if not os.path.exists(chemin):
            continue
        liste = [p for p in projets if not machine or p.get("machine") == machine]
        liste.sort(key=lambda p: ORDRE.get(p.get("etat"), 9))
        fiches = "\n".join(fiche(p) for p in liste)
        t = io.open(chemin, encoding="utf-8").read()
        neuf = '<!-- FICHES -->\n%s\n      <!-- FIN FICHES -->' % fiches
        if "<!-- FICHES -->" in t:
            t = re.sub(r"<!-- FICHES -->.*?<!-- FIN FICHES -->", lambda m: neuf, t, flags=re.S)
        else:
            t = re.sub(r'(<div class="grille" id="grille"[^>]*>)',
                       lambda m: m.group(1) + "\n      " + neuf + "\n      ", t)
        io.open(chemin, "w", encoding="utf-8").write(t)
        print("%-16s %3d fiches ecrites en dur" % (page, len(liste)))

    aujourdhui = datetime.date.today().isoformat()
    s = ['<?xml version="1.0" encoding="UTF-8"?>',
         '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for page in ("index.html", "arcade.html", "nes.html", "consoles.html"):
        adr = ADRESSE if page == "index.html" else ADRESSE + page
        s += ["  <url>", "    <loc>%s</loc>" % adr,
              "    <lastmod>%s</lastmod>" % aujourdhui,
              "    <changefreq>weekly</changefreq>", "  </url>"]
    s.append("</urlset>")
    io.open(os.path.join(DOSSIER, "sitemap.xml"), "w", encoding="utf-8").write("\n".join(s))
    io.open(os.path.join(DOSSIER, "robots.txt"), "w", encoding="utf-8").write(
        "User-agent: *\nAllow: /\n\nSitemap: %ssitemap.xml\n" % ADRESSE)
    print("sitemap.xml et robots.txt ecrits")


if __name__ == "__main__":
    refaire()
