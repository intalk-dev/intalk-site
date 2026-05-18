import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const str = z.string().nullish();
const num = z.number().nullish();
const tags = z.array(z.string()).nullish();

const analysis = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/analysis" }),
  schema: z.object({
    week: num,
    date: z.coerce.string().nullish(),
    tags,
    daily_count: num,
    active_members: num,
  }).passthrough(),
});

const proposals = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/proposals" }),
  schema: z.object({
    tags,
    last_updated: z.coerce.string().nullish(),
    count: num,
    preview: str,
    highlights: z.array(z.string()).nullish(),
  }).passthrough(),
});

export const collections = { analysis, proposals };
