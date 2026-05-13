import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/pages",
  }),
  schema: z.object({
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
              title: z.string(),
              description: z.string().optional(),
              href: z.string(),
            }),
          ),
        }),
      )
      .optional(),
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
  journal,
  oeuvres,
};
