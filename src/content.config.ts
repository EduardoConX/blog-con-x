import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";
import { file, glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.mdx" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: reference("categories"),
  }),
});

const categories = defineCollection({
  loader: file("./src/data/categories.json"),
});

export const collections = { posts, categories };
