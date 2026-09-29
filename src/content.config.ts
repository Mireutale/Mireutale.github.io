import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    period: z.string(),
    type: z.enum(['팀', '개인']),
    role: z.string().optional(),
    award: z.string().optional(),
    summary: z.string(),
    repo: z.string().url().optional(),
    image: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), caption: z.string() })).optional(),
    learned: z.string().optional(),
  }),
});

export const collections = { projects };
