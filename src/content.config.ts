import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const str = z.string().nullish();
const num = z.number().nullish();
const tags = z.array(z.string()).nullish();

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/gallery" }),
  schema: z.object({
    name: z.string(),
    maker: str,
    category: str,
    squad: str,
    thumbnail: str,
    link: str,
    tags,
  }).passthrough(),
});

const skills = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/skills" }),
  schema: z.object({
    title: z.string(),
    author: str,
    category: str,
    keywords: z.array(z.string()).nullish(),
    summary: str,
    link: str,
  }).passthrough(),
});

const analysis = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/analysis" }),
  schema: z.object({
    week: num,
    date: z.preprocess(
      (val) => val instanceof Date ? val.toISOString().split('T')[0] : val,
      z.string().nullish(),
    ),
    generated_at: z.string().nullish(),
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

export const collections = { gallery, skills, analysis, proposals };
