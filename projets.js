/* ------------------------------------------------------------------
   LE CATALOGUE DES PROJETS - Sild'arcade production
   ------------------------------------------------------------------
   C'EST LE SEUL FICHIER A MODIFIER POUR AJOUTER UN PROJET.
   Les pages du site se remplissent toutes seules a partir d'ici.

   Un projet s'ecrit comme ceci :

     {
       titre:    "Le nom du jeu",
       machine:  "arcade",          arcade | nes | consoles
       etat:     "disponible",      disponible | encours | chantier
       genre:    "Traduction FR",   ce qu'on a fait dessus
       note:     "une phrase",      facultatif, s'affiche sous le titre
       image:    "assets/xxx.jpg",  facultatif ; sans image, une tuile
                                    dessinee avec le titre est generee
       lien:     "https://..."      le telechargement ; laisse vide tant
                                    que ce n'est pas sorti
     },

   LES ETATS
     disponible  le patch est telechargeable, le bouton s'allume
     encours     le travail avance, le bouton dit « en cours »
     chantier    c'est ouvert mais loin d'etre fini

   Pour SORTIR un projet : passe son etat a "disponible" et colle son
   lien. Rien d'autre a toucher, nulle part.
------------------------------------------------------------------ */

const PROJETS = [

  /* ============================ ARCADE ============================ */
  { titre: "Luigi's Mansion Arcade", machine: "arcade", etat: "disponible",
    genre: "Traduction FR", image: "assets/banner_luigi_mansion_arcade.jpg",
    lien: "https://drive.google.com/file/d/1vpGscA6F780YEbTK5u1SInaoP2TuNy0x/view?usp=drive_link" },

  { titre: "Silent Hill Arcade", machine: "arcade", etat: "disponible",
    genre: "Traduction FR", image: "assets/banner_silent_hill_arcade.png",
    lien: "https://drive.google.com/file/d/1tJwgw3EDVunw41ECYNUqAeRVmEK_Dicd/view?usp=sharing" },

  { titre: "Jurassic Park", machine: "arcade", etat: "encours",
    genre: "Traduction FR", image: "assets/banner_jurassic_park.png",
    note: "Raw Thrills — conteneurs .g5 décodés", lien: "" },

  { titre: "Rambo", machine: "arcade", etat: "encours",
    genre: "Traduction FR et doublage", image: "assets/banner_rambo.png",
    note: "Sega Lindbergh — les vidéos .sfd refaites", lien: "" },

  { titre: "Time Crisis 5", machine: "arcade", etat: "encours",
    genre: "Traduction FR", note: "340 répliques traduites", lien: "" },

  { titre: "Knights of the Round", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Capcom 1991, CPS-1", lien: "" },
  { titre: "The King of Dragons", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Capcom 1991, CPS-1", lien: "" },
  { titre: "Cadillacs and Dinosaurs", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Capcom 1993, CPS-1.5", lien: "" },
  { titre: "Dungeons & Dragons — Shadow over Mystara", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Capcom 1996, CPS-2", lien: "" },
  { titre: "Battle Circuit", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Capcom 1997, CPS-2", lien: "" },
  { titre: "Alien vs Predator", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Capcom 1994, CPS-2", lien: "" },
  { titre: "Red Earth", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Capcom 1996, CPS-3", lien: "" },
  { titre: "Black Tiger", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Capcom 1987", lien: "" },
  { titre: "Light Bringer / Dungeon Magic", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Taito F3", lien: "" },
  { titre: "Warrior Blade — Rastan Saga Episode III", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Taito 1991, double écran", lien: "" },
  { titre: "Chaos Breaker", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Taito Type X", lien: "" },
  { titre: "Metamorphic Force", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Konami 1993", lien: "" },
  { titre: "Gaiapolis", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Konami 1993", lien: "" },
  { titre: "Crossed Swords", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "ADK 1991, Neo Geo", lien: "" },
  { titre: "Sengoku 3", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "SNK 2001, Neo Geo", lien: "" },
  { titre: "Shadow Force", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Technos 1993", lien: "" },
  { titre: "Wizard Fire / Dark Seal II", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Data East 1992", lien: "" },
  { titre: "Hook", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Irem 1992, M92", lien: "" },
  { titre: "Rygar", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "Tecmo 1986", lien: "" },
  { titre: "The Gladiator / Shen Jian", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "IGS 2003, PGM", lien: "" },
  { titre: "Knights of Valour Super Heroes Plus", machine: "arcade", etat: "chantier",
    genre: "Traduction FR", note: "IGS, PGM", lien: "" },
  { titre: "Nosferatu Lilinor", machine: "arcade", etat: "chantier",
    genre: "Correctif", note: "Sega ALLS — le français dort déjà dans le jeu", lien: "" },

  /* ========================= NES / FAMICOM ======================== */
  { titre: "Retour vers le futur II et III", machine: "nes", etat: "disponible",
    genre: "Traduction FR",
    image: "assets/banner_nes_bttf.jpg",
    lien: "https://drive.google.com/file/d/1KXsiX2ZO_GVn60hHO1KMHkfbv2R16in1/view?usp=sharing" },
  { titre: "Indiana Jones et la dernière croisade", machine: "nes", etat: "disponible",
    genre: "Traduction FR",
    note: "toute l'histoire, en minuscules et accentuée",
    image: "assets/banner_nes_croisade.jpg",
    lien: "https://drive.google.com/file/d/1yPQXHLnmpnaPsIIl1zehQ_9oZZx2axLc/view?usp=sharing" },
  { titre: "Indiana Jones et le Temple maudit", machine: "nes", etat: "disponible",
    genre: "Traduction FR",
    image: "assets/banner_nes_temple.jpg",
    lien: "https://drive.google.com/file/d/18WAPXKwOuBc7G9ncWq9ez2J1qWcBXsfb/view?usp=sharing" },
  { titre: "Mad Max", machine: "nes", etat: "disponible",
    genre: "Traduction FR",
    image: "assets/banner_nes_madmax.jpg",
    lien: "https://drive.google.com/file/d/1ULd-YOv4esw-2oOhUi4EzjNM74XyBw_V/view?usp=sharing" },
  { titre: "Octobre rouge", machine: "nes", etat: "disponible",
    genre: "Traduction FR",
    image: "assets/banner_nes_octobre.jpg",
    lien: "https://drive.google.com/file/d/1NuVV0KhbGGTZCHmIVlQvMORmbpF89Eqa/view?usp=sharing" },
  { titre: "Platoon", machine: "nes", etat: "disponible",
    genre: "Traduction FR",
    image: "assets/banner_nes_platoon.jpg",
    lien: "https://drive.google.com/file/d/1y6QDk_tSecy4AAvXsRy2RfACNh88rRMk/view?usp=sharing" },
  { titre: "Wayne's World", machine: "nes", etat: "disponible",
    genre: "Traduction FR",
    image: "assets/banner_nes_wayne.jpg",
    lien: "https://drive.google.com/file/d/1SYb4wj1LoMxKlDBGsI4AmFFRQavfnjf8/view?usp=sharing" },
  { titre: "Le Surfer d'argent", machine: "nes", etat: "disponible",
    genre: "Traduction FR",
    note: "Marvel",
    image: "assets/banner_nes_surfer.jpg",
    lien: "https://drive.google.com/file/d/1U0DQfT1T7U0ALqRx8CLvjwoq-T587Y1q/view?usp=sharing" },
  { titre: "Superman", machine: "nes", etat: "disponible",
    genre: "Traduction FR",
    note: "base Kemco (U)",
    image: "assets/banner_nes_superman.jpg",
    lien: "https://drive.google.com/file/d/1C9zpZAtGTTzxaCN_6kj7Gz5sovTKlhk5/view?usp=sharing" },

  { titre: "Les Chevaliers du Zodiaque — La Légende d'Or", machine: "nes", etat: "encours",
    genre: "Traduction FR", image: "assets/banner_nes_zodiaque.jpg",
    lien: "" },
  { titre: "L'Empereur", machine: "nes", etat: "encours",
    genre: "Traduction FR", note: "Koei — patch IPS", image: "assets/banner_nes_empereur.jpg",
    lien: "" },
  { titre: "Dragon Ball - Le Secret du Dragon", machine: "nes", etat: "encours",
    genre: "Retraduction depuis le japonais", image: "assets/banner_nes_dragonball.jpg",
    lien: "" },
  { titre: "Cliffhanger", machine: "nes", etat: "disponible",
    genre: "Traduction FR", image: "assets/banner_nes_cliffhanger.jpg",
    lien: "https://drive.google.com/file/d/1h2NFFRd_8_O5FveZBJgbizEyGYRuZgQv/view?usp=sharing" },
  { titre: "Last Action Hero", machine: "nes", etat: "disponible",
    genre: "Traduction FR", image: "assets/banner_nes_last_action_hero.jpg",
    lien: "https://drive.google.com/file/d/19ptS9NQdqvcpPprUlTL0LQCnKucaN-0a/view?usp=sharing" },
  { titre: "Qui veut la peau de Roger Rabbit", machine: "nes", etat: "disponible",
    genre: "Traduction FR", image: "assets/banner_nes_roger_rabbit.jpg",
    lien: "https://drive.google.com/file/d/1lliiMOI0jURFyGfzew8lRLIJnZY-k5XK/view?usp=sharing" },
  { titre: "Le Punisher", machine: "nes", etat: "disponible",
    genre: "Traduction FR", image: "assets/banner_nes_punisher.jpg",
    lien: "https://drive.google.com/file/d/1Il6-LsnN6F37KeXEfUNp9HeJe6tHdaP5/view?usp=sharing" },
  { titre: "Mitsume ga Tooru — L'Enfant aux trois yeux", machine: "nes", etat: "chantier",
    genre: "Traduction FR depuis le japonais", image: "assets/banner_nes_mitsume.jpg",
    lien: "" },
  { titre: "Samouraï Pizza Cats", machine: "nes", etat: "chantier",
    genre: "Traduction FR depuis le japonais", image: "assets/banner_nes_pizza_cats.jpg",
    lien: "" },
  { titre: "Edgar de la Cambriole — L'Héritage de Pandore", machine: "nes", etat: "chantier",
    genre: "Traduction FR", image: "assets/banner_nes_edgar.jpg",
    lien: "" },
  { titre: "Ultraman Club 3", machine: "nes", etat: "chantier",
    genre: "Traduction FR depuis le japonais", image: "assets/banner_nes_ultraman.jpg",
    lien: "" },
  { titre: "Shadowgate", machine: "nes", etat: "chantier",
    genre: "Conversion 50 Hz vers 60 Hz", note: "la VF PAL passée en NTSC", image: "assets/banner_nes_shadowgate.jpg",
    lien: "" },

  /* =========================== CONSOLES =========================== */
  { titre: "Haunting Ground", machine: "consoles", etat: "disponible",
    genre: "Traduction FR", image: "assets/banner_haunting_ground.jpg",
    note: "PlayStation 2",
    lien: "https://drive.google.com/file/d/1cT3uTXQ7OOCK5Dex2r3xnNNTU_415mon/view?usp=sharing" },

  { titre: "Resident Evil Outbreak File #1 et #2", machine: "consoles", etat: "disponible",
    genre: "Traduction FR", image: "assets/banner_outbreak.jpg",
    note: "PlayStation 2",
    lien: "https://drive.google.com/file/d/1ngqfOuKsUAwxgQLAz_AA1oaISSJZbby9/view?usp=drive_link" },

  { titre: "Resident Evil Gaiden", machine: "consoles", etat: "encours",
    genre: "Traduction FR", image: "assets/banner_gaiden.png",
    note: "Game Boy Color", lien: "" },

  { titre: "Le Seigneur des Anneaux — Le Tiers Âge", machine: "consoles", etat: "chantier",
    genre: "Codes de triche", note: "GameCube", lien: "" }
];
