---
# Contenu partagé par toutes les pages de candidature (voir
# CandidatureLayout.astro, qui charge ce fichier une seule fois via
# getEntry("candidatureContact", "contact") — sauf pour une candidature
# qui définirait son propre `contactBlocks`, auquel cas ce fichier est
# ignoré pour elle). Modifier ici met à jour la carte contact sur toutes
# les candidatures concernées.
#
# Chaque bloc :
#   - type: text      → icône optionnelle + texte markdown en ligne
#                        (width: half par défaut, ou full)
#   - type: separator → simple barre de séparation
#   - type: card      → encadré, markdown multi-lignes, href optionnel
#                        pour rendre toute la carte cliquable
name: "Anaïs Mattle"
blocks:
  - type: text
    width: full
    content: "Disponible dès maintenant pour tout échange ou entretien, n'hésitez pas à me contacter via les canaux ci-dessous."
  - type: text
    icon: "✉"
    content: "a.mattle@outlook.com"
  - type: text
    icon: "☎"
    content: "06 09 56 29 33"

  - type: separator

  - type: text
    width: full
    content: "Une courte immersion est également possible, si les délais avant le début de formation le permettent."
  - type: text
    icon: "📍"
    content: "62500 Saint-Omer"
  - type: text
    icon: "🚆"
    content: "Ligne SNCF Lille / Calais"
  - type: text
    icon: "🚗"
    content: "Permis B — véhicule personnel"
  - type: text
    icon: "💻"
    content: "Distanciel possible"

  - type: separator

  - type: text
    width: full
    content: "J'ai été acceptée dans les deux écoles présentées ci-dessous. Elles proposent des rythmes d'alternance différents : à vous de choisir celui qui convient le mieux à votre entreprise."
  - type: card
    width: half
    content: |
      🎓 **My Digital School — Lille**  
      🕔 3j / 2j alternés

      [Site de l'école](https://www.mydigitalschool.com/ecole-multimedia-lille)  
      [Planning d'alternance](/assets/planning-mds.pdf)
  - type: card
    width: half
    content: |
      🎓 **Lycée Gaston Berger — Lille**  
      🕔 1 semaine sur 2

      [Site de l'école](https://www.gastonberger.fr/)  
      [Planning d'alternance](/assets/planning-gb.pdf)

  - type: separator

  - type: text
    width: full
    content: "Pour aller plus loin n'hesitez pas à consulter mon github."
  - type: text
    icon: "✉"
    content: "https://github.com/Evalexart"
---
