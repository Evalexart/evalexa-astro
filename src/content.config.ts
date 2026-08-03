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

export const collections = {
  pages,
  profilPro,
};
