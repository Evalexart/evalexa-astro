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

    // Modular skill/tool cards — mirrors the carousel's flexibility: each
    // card just needs at least one of image/icon/title/description to
    // render. `icon` is a key into src/lib/tool-icons.ts. `href` makes
    // the card a real link (only meaningful in "medium"/"large" display
    // mode — see skillsSize below).
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
    // Editorial intro text shown by default in the skills detail panel
    // (before any icon is clicked). Only used in "small" display mode —
    // see skillsSize below. This is page-specific content, not a generic
    // UI string, so it lives here rather than in ui.json.
    skillsIntro: z.string().optional(),
    // Display mode for the skills grid: "small" is the original compact
    // icon-only look (with the shared detail panel above); "medium" and
    // "large" render full content cards instead (image/icon + title +
    // description shown directly, optionally a link via each card's
    // href) — "large" is sized to match the legal-hub cards.
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
        // Each entry in `items` is either:
        //  - a classic contact item (icon + label, optionally linked via
        //    href), rendered inside the 2-column grid, or
        //  - a free-standing note (just `note`), rendered as a full-width
        //    line that breaks out of the 2-column grid. Notes can be
        //    placed anywhere in the array — before, between, or after the
        //    regular items — since position in the array is what decides
        //    where the line appears on the page.
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
            // CSS aspect-ratio value for this card's image only, e.g.
            // "4/5", "1/1", "16/9". Overrides carouselImageRatio below for
            // this one card. Keeps the image framing stable no matter how
            // much text sits underneath it.
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
    // Default CSS aspect-ratio value for every image in this carousel, e.g.
    // "4/5", "1/1", "16/9". Falls back to the ratio implied by
    // carouselOrientation when omitted. Can be overridden per-card via
    // imageRatio above.
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

const oeuvres = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/oeuvres",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  pages,
  profilPro,
  journal,
  oeuvres,
};
