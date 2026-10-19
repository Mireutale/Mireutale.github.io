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
    highlights: z.array(z.object({ value: z.string(), label: z.string() })).max(3).optional(),
    stack: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
  }),
});

// 상단 소개. src/content/profile/intro.md 하나만 고치면 반영됨
const profile = defineCollection({
  loader: glob({ pattern: 'intro.md', base: './src/content/profile' }),
  schema: z.object({
    name: z.string(),
    email: z.string().email(),
    github: z.string().url(),
    description: z.string(),
  }),
});

export const collections = { projects, profile };
