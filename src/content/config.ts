import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    description: z.string(),
  }),
});

const categories = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = { posts, categories };
