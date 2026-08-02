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

    contact: z
      .object({
        name: z.string().optional(),
        items: z.array(
          z
            .object({
              icon: z.string().optional(),
              label: z.string().optional(),
              href: z.string().optional(),
              note: z.string().optional(),
            })
            .refine((item) => item.note || item.label, {
              message:
                "A contact entry needs either a `label` (regular item) or a `note` (full-width line).",
            }),
        ),
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

const journal = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/journal",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

// Each artwork lives at src/content/oeuvres/<slug>/fr.md + en.md, mirroring
// the profil-pro / pages pattern (one markdown file per language, same
// slug). Every descriptive field is optional except the piece's own
// presentation text, since real inventory data will be filled in
// progressively and unevenly (some works are untitled, undated, or have
// only partial material notes).
//
// `orientation` is a distinct, deliberately-chosen field rather than
// something computed from `dimensions` — dimensions stays a free-form
// display string (so it can read "24 x 32 cm", "A4", "21 x 29,7 cm"...)
// while orientation is the one used for the gallery's "Format" filter,
// since it's the only version of "shape" that's guaranteed comparable
// across every entry regardless of how dimensions were recorded.
const oeuvres = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/oeuvres",
  }),
  schema: ({ image }) => z.object({
    title: z.string().optional(),
    date: z.string().optional(),
    description: z.string().optional(),
    image: image().optional(),

    dimensions: z.string().optional(),
    orientation: z.enum(["portrait", "landscape", "square"]).optional(),

    // Main sorting axis in the gallery filters (e.g. "Aquarelle",
    // "Graphite").
    medium: z.string().optional(),
    series: z.string().optional(),

    // Free-form tags; theme and style are kept as two separate fields
    // since they answer different questions ("what is it of" vs. "how is
    // it made"), but the gallery's single "Tag" filter reads from both
    // combined.
    theme: z.array(z.string()).optional(),
    style: z.array(z.string()).optional(),

    materials: z
      .object({
        paper: z.string().optional(),
        tools: z.array(z.string()).optional(),
        pigments: z.array(z.string()).optional(),
        other: z.array(z.string()).optional(),
      })
      .optional(),

    draft: z.boolean().default(false),
  }),
});

export const collections = {
  pages,
  profilPro,
  journal,
  oeuvres,
};
