---
# Métadonnées SEO (onglet du navigateur, moteurs de recherche — jamais
# affichées sur la page elle-même).
title: "Page de motivation – Anaïs Mattle – Inserm"
description: "Page de motivation d'Anaïs Mattle pour une alternance BTS SIO à l'Inserm."

# Header (rendu par <ProfileHeader />, identique au profil pro).
eyebrow: "Page de motivation"
firstName: "ANAÏS"
lastName: "MATTLE"
intro: |
  Alternance BTS SIO – Support informatique   
  Inserm – Lille

# Citation, affichée sous le texte d'intro (optionnelle).
quote: "« Un bon outil permet aux autres de se concentrer sur leur véritable métier. »"

# Overlay d'entrée. L'image doit toujours s'appeler intro.webp et vivre
# dans ce même dossier — seul son contenu change d'une candidature à
# l'autre. `introPrompt` est optionnel (défaut : "Cliquez pour ouvrir la page").
introImage: "./intro.webp"
introAlt: "Dossier de recherche illustrant les domaines que je souhaite mobiliser au sein de l'Inserm : support, infrastructure, développement, automatisation et documentation"
introTitle: "Dans mon dossier pour rejoindre l'Inserm"

# Accordéons groupés par thème — autant de groupes que nécessaire, chacun
# avec son propre label.
accordionGroups:
  - label: "Parcours & expériences"
    items:
      - question: "Pourquoi une reconversion vers le numérique"
        answer: |
          Je n'ai pas suivi un cursus classique vers l'informatique — j'y suis arrivée par la pratique. Le concours de chant en ligne que j'organisais reposait sur des mécaniques de jeu de rôle textuel qu'aucun tableur ne pouvait suivre en temps réel : construire un bot pour ça a été mon premier vrai projet, pas un exercice. Ce n'est pas ce projet seul qui a décidé de mon orientation, mais l'accumulation de projets similaires par la suite, le fait que des personnes du milieu informatique m'aient demandé à plusieurs reprises pourquoi je n'en faisais pas mon métier, puis un bilan de compétences qui a confirmé cette direction. C'est ce qui m'amène aujourd'hui à formaliser ce parcours avec un BTS SIO en alternance.
      - question: "Ce que j'ai déjà pratiqué"
        answer: |
          Depuis, j'ai construit et fait évoluer plusieurs projets. Deux bots Discord distincts, en Python et SQL, en séparant environnement de test et production pour vérifier avant de déployer. Du test fonctionnel, à travers les bêta-tests du jeu Sky: Children of the Light — suivre un parcours utilisateur, repérer ce qui casse, écrire un retour structuré. Des automatisations en Google Apps Script pour remplacer un suivi tenu à la main. Un site personnel en Astro pour présenter mes candidatures — encore en chantier, sa mise en ligne est mise de côté le temps de trouver une alternance. Et aujourd'hui, une infrastructure Oracle Cloud avec plusieurs VM connectées en réseau privé, où je sépare les environnements par bonne pratique.
      - question: "Le support et la documentation, un réflexe déjà là"
        answer: |
          Sur mes différents projets communautaires, j'ai dû m'adapter en continu aux besoins et aux retours des utilisateurs, et accompagner ceux qui utilisaient les outils que je créais. Je recevais régulièrement des tickets de membres — parfois de vrais bugs, parfois des erreurs d'utilisation, parfois des demandes d'évolution — et je devais qualifier chaque signalement avant d'y répondre. J'ai aussi formé une petite équipe de bénévoles aux commandes d'un bot qu'ils devaient ensuite expliquer eux-mêmes aux participants, et rédigé la documentation qui accompagne chaque nouvelle fonctionnalité.

          Avant l'informatique, j'ai fait de la vente, du service en restauration, puis de l'animation — des expériences qui m'ont donné les mêmes réflexes : écouter, reformuler un besoin, adapter mon discours selon la personne en face.
  - label: "À l'Inserm"
    items:
      - question: "Pourquoi cette offre à l'Inserm"
        answer: |
          Les missions proposées rejoignent ce qui compte pour moi dans l'informatique : comprendre un problème, accompagner son utilisateur, qualifier ce qui relève d'un incident, résoudre ou transmettre au bon niveau, puis documenter ce qui a été fait. La prise en charge des demandes, l'assistance aux utilisateurs, la gestion des postes et des comptes, l'administration courante, l'automatisation et la rédaction de procédures forment un ensemble concret et cohérent, dans lequel la technique reste directement liée aux besoins des personnes qui l'utilisent.

          L'Inserm représente par ailleurs un changement d'échelle important par rapport à mes projets personnels : des équipes aux métiers variés, des environnements Windows et Linux, des outils et des services qui doivent rester disponibles, ainsi qu'un besoin réel de coordination et de traçabilité. C'est précisément ce cadre que je souhaite découvrir : un environnement où la fiabilité du système d'information soutient directement le travail quotidien des équipes.
      - question: "Ce que j'apporte, concrètement"
        answer: |
          Une vraie autonomie sur mes projets personnels — je suis habituée à chercher, tester, documenter et itérer sans supervision. Un réflexe de documentation déjà ancré : écrire une procédure claire n'est jamais une perte de temps, c'est ce qui évite de refaire le même diagnostic deux fois.

          Ce socle continue de s'élargir à chaque projet — et une partie de ce qu'il me reste à apprendre est justement propre à un contexte professionnel que je n'ai pas encore connu : l'administration d'un parc, les outils de ticketing, les procédures internes, la virtualisation, la gestion des accès et la coordination avec des équipes aux besoins différents. C'est ce cadre que je souhaite découvrir et consolider au cours de mon alternance.

# Bloc contact : par défaut celui partagé (src/content/candidatures/contact.md).
# Décommenter et adapter `contactBlocks` ci-dessous seulement si CETTE
# candidature a besoin d'un bloc contact totalement différent (il
# remplacerait alors entièrement le bloc partagé, coordonnées incluses).
# contactBlocks:
#   - type: text
#     content: "Exemple"

# CV : optionnel, par défaut celui du profil pro (/assets/cv.pdf).
# cvHref: "/assets/cv.pdf"
---

Mon parcours vers l'informatique est autodidacte, construit au fil de projets personnels et communautaires plutôt que dans un cursus classique. Cette candidature répond à votre offre en alternance, dans le cadre d'un BTS SIO à la rentrée 2026 : une occasion de confronter cette pratique à un environnement professionnel mêlant support, infrastructure, automatisation, développement et documentation. L'Inserm m'attire aussi par son domaine d'activité : je m'intéresse depuis longtemps à la science et à la recherche, notamment à travers la vulgarisation scientifique, et je serais particulièrement enthousiaste à l'idée de contribuer au fonctionnement quotidien d'un organisme dont la mission me parle réellement.
