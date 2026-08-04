# Evalexa

Site personnel bilingue (FR/EN).

🔗 [evalexa.fr](https://evalexa.fr)

---

## À propos

Evalexa est un site vitrine personnel, développé avec [Astro](https://astro.build).

Le site est encore en construction. Il contient pour l'instant mon profil professionnel — dans le cadre d'une recherche d'alternance BTS SIO — ainsi que les pages légales du site. À terme, il accueillera également une vitrine des mes projets créatifs et numériques, ainsi que du contenu pédagogique lié à mes différentes activités.

## Fonctionnalités

- 🌍 Navigation bilingue FR/EN (FR comme version de référence)
- 🌓 Thème clair/sombre (préférence système + choix manuel mémorisé)
- 👤 Profil professionnel : compétences, formation, parcours, réalisations
- ⚖️ Pages légales (mentions légales, confidentialité, CGU, cookies)

## Stack technique

| Domaine | Choix |
|---|---|
| Framework | [Astro 7](https://astro.build) (rendu statique) |
| Contenu | Markdown via Astro Content Collections |
| Style | CSS natif, architecture par composants |
| Interactions | JavaScript vanilla |
| Icônes | [simple-icons](https://simpleicons.org) + glyphes SVG maison |

## Structure du projet

```
src/
├── components/     # Composants Astro réutilisables (Header, Carousel, CardGrid…)
├── content/        # Contenu éditorial (Markdown, FR/EN)
├── data/           # Navigation et textes d'interface (JSON)
├── layouts/        # Layout de base
├── lib/            # Utilitaires (rendu markdown, icônes…)
├── pages/          # Routes du site (fr/, en/)
├── scripts/        # Scripts client (thème, langue)
└── styles/         # CSS organisé en core / layout / components / pages
```

## Déploiement

Le site est hébergé chez OVH et déployé manuellement via SFTP. Astro générant des bundles CSS avec hashing, toute modification de style nécessite un rebuild complet et un remplacement intégral du dossier `dist/` côté serveur.

## Contact

📧 [contact@evalexa.fr](mailto:contact@evalexa.fr)

## Licence

Projet personnel — tous droits réservés.
