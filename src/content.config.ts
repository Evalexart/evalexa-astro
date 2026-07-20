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
        z.object({
          tool: z.string(),
          icon: z.string(),
          detail: z.string(),
        }),
      )
      .optional(),

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
          z.object({
            icon: z.string().optional(),
            label: z.string(),
            href: z.string().optional(),
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
