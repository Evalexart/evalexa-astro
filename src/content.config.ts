import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({
    pattern: ["**/*.{md,mdx}", "!profil-pro/**"],
    base: "./src/content/pages",
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    intro: z.string().optional(),

    sections: z
      .array(
        z.object({
          id: z.string().optional(),
          title: z.string(),
          description: z.string().optional(),
          cards: z.array(
            z.object({
              kicker: z.string().optional(),
              image: image().optional(),
              title: z.string(),
              description: z.string().optional(),
              href: z.string().optional(),
            }),
          ),
        }),
      )
      .optional(),

    documents: z
      .array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          href: z.string(),
        }),
      )
      .optional(),

    legalSections: z
      .array(
        z.object({
          title: z.string(),
          content: z.string(),
        }),
      )
      .optional(),
  }),
});

// Schéma d'un bloc du <ContactCard /> générique — partagé par le profil
// pro (champ `contact.blocks` ci-dessous), la collection
// candidatureContact (bloc commun à toutes les candidatures) et le champ
// optionnel `contactBlocks` de la collection `candidatures` (override
// complet propre à une candidature donnée). Voir
// src/components/ContactCard.astro pour le rendu de chaque type.
//   - "text"      : icône optionnelle + texte markdown en ligne.
//                   `width` "half" (défaut) ou "full".
//   - "separator" : barre de séparation, toujours pleine largeur.
//   - "card"      : encadré, markdown multi-lignes, `href` optionnel
//                   pour rendre toute la carte cliquable (une flèche →
//                   ou ↗ est alors ajoutée automatiquement). Attention :
//                   si `href` est renseigné, le contenu ne doit PAS
//                   contenir de lien markdown (un <a> ne peut pas en
//                   contenir un autre) — dans ce cas, laisser `href`
//                   vide et mettre les liens directement dans le texte.
//                   `width` "half" (défaut) ou "full".
const contactBlockSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("text"),
    content: z.string(),
    icon: z.string().optional(),
    width: z.enum(["full", "half"]).optional(),
  }),
  z.object({
    type: z.literal("separator"),
  }),
  z.object({
    type: z.literal("card"),
    content: z.string(),
    href: z.string().optional(),
    width: z.enum(["full", "half"]).optional(),
  }),
]);

const profilPro = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/pages/profil-pro",
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    intro: z.string().optional(),
    quote: z.string().optional(),
    cvHref: z.string().optional(),

    photo: image().optional(),

    skills: z
      .array(
        z
          .object({
            title: z.string().optional(),
            icon: z.string().optional(),
            image: image().optional(),
            description: z.string().optional(),
            href: z.string().optional(),
          })
          .refine(
            (card) => card.image || card.icon || card.title || card.description,
            {
              message:
                "A skill card needs at least one of: image, icon, title, description.",
            },
          ),
      )
      .optional(),
    skillsIntro: z.string().optional(),
    skillsSize: z.enum(["small", "medium", "large"]).optional(),

    alternanceProject: z.string().optional(),

    formation: z
      .array(
        z.object({
          name: z.string(),
          schedule: z.string().optional(),
          links: z
            .array(z.object({ label: z.string(), href: z.string() }))
            .optional(),
        }),
      )
      .optional(),

    accordion: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),

    // Format attendu par <ContactCard /> directement (voir
    // contactBlockSchema ci-dessus) — même forme que
    // src/content/candidatures/contact.md :
    //   contact:
    //     name: "Anaïs Mattle"
    //     blocks:
    //       - type: text
    //         width: full
    //         content: "..."
    //       - type: text
    //         icon: "✉"
    //         content: "[a.mattle@outlook.com](mailto:a.mattle@outlook.com)"
    //       - type: separator
    //       - type: card
    //         href: "https://github.com/..."
    //         content: "..."
    contact: z
      .object({
        name: z.string().optional(),
        blocks: z.array(contactBlockSchema),
      })
      .optional(),

    carousel: z
      .array(
        z
          .object({
            image: image().optional(),
            imageRatio: z.string().optional(),
            title: z.string().optional(),
            description: z.string().optional(),
            href: z.string().optional(),
          })
          .refine(
            (card) => card.image || card.title || card.description,
            {
              message:
                "A carousel card needs at least one of: image, title, description.",
            },
          ),
      )
      .optional(),
    carouselSize: z.enum(["small", "medium", "large"]).optional(),
    carouselOrientation: z.enum(["portrait", "square", "landscape"]).optional(),
    carouselImageRatio: z.string().optional(),
  }),
});

// Pages de candidature : contenu FR uniquement (pas de version EN — ces
// pages ne sont pas bilingues), un dossier par candidature sous
// src/content/candidatures/{slug}/ :
//   fr.md        → cette collection (contenu éditorial de la candidature)
//   intro.webp   → image de l'overlay d'entrée (toujours ce nom)
// Photo et CV ne sont PAS répétés ici : ils sont partagés avec le profil
// pro et injectés directement par CandidatureLayout.astro. Le bloc
// contact (coordonnées, écoles, liens) est lu par défaut depuis
// src/content/candidatures/contact.md (collection candidatureContact) ;
// une candidature peut fournir son propre `contactBlocks` si elle a
// besoin d'un contenu totalement différent — dans ce cas il REMPLACE
// entièrement le bloc partagé (pas de fusion).
const candidatures = defineCollection({
  loader: glob({
    pattern: "**/fr.md",
    base: "./src/content/candidatures",
  }),
  schema: ({ image }) => z.object({
    // Métadonnées SEO — <title> de l'onglet et balise <meta description>,
    // jamais affichées telles quelles sur la page.
    title: z.string(),
    description: z.string(),

    // Header (rendu par <ProfileHeader />, partagé avec le profil pro).
    // `eyebrow` = petit libellé au-dessus du nom (ex: "Page de motivation").
    // `intro` = lignes de détail sous le nom (poste visé, mots-clés,
    // entreprise) — libre, pas de valeur imposée.
    // `heading`/firstName/lastName : mêmes règles que sur le profil pro —
    // heading sert de repli si firstName/lastName sont absents.
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    intro: z.string().optional(),

    // Citation, affichée sous le texte d'intro (corps du markdown),
    // avant les accordéons (optionnelle).
    quote: z.string().optional(),

    // Overlay d'entrée plein écran. `introImage` doit pointer vers
    // "./intro.webp" (fichier à côté de ce fr.md). `introPrompt` est
    // optionnel (texte par défaut géré par le composant).
    introImage: image(),
    introAlt: z.string(),
    introTitle: z.string(),
    introPrompt: z.string().optional(),

    // Accordéons groupés par thème (autant de groupes que nécessaire,
    // chacun avec son propre label affiché au-dessus).
    accordionGroups: z.array(
      z.object({
        label: z.string(),
        items: z.array(
          z.object({
            question: z.string(),
            answer: z.string(),
          }),
        ),
      }),
    ),

    // Override optionnel et complet du bloc contact pour cette seule
    // candidature (remplace le contenu de contact.md — voir plus haut).
    contactBlocks: z.array(contactBlockSchema).optional(),

    // CV : optionnel, par défaut celui du profil pro (/assets/cv.pdf) —
    // sert uniquement au bouton CV du header, plus au bloc contact.
    cvHref: z.string().optional(),
  }),
});

// Bloc contact partagé par défaut par toutes les candidatures : un seul
// fichier, src/content/candidatures/contact.md. Chargé par
// CandidatureLayout.astro via getEntry("candidatureContact", "contact"),
// sauf si la candidature définit son propre `contactBlocks` (voir
// ci-dessus).
const candidatureContact = defineCollection({
  loader: glob({
    pattern: "contact.md",
    base: "./src/content/candidatures",
  }),
  schema: z.object({
    name: z.string(),
    blocks: z.array(contactBlockSchema),
  }),
});

export const collections = {
  pages,
  profilPro,
  candidatures,
  candidatureContact,
};
