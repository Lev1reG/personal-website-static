import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    thumbnailUrl: z.string().optional(),
    tags: z.array(z.string()).default([]),
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
