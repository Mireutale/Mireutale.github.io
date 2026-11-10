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
    imagePosition: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), caption: z.string() })).optional(),
    learned: z.string().optional(),
    highlights: z.array(z.object({ value: z.string(), label: z.string() })).max(3).optional(),
    stack: z.array(z.string()).optional(),
    ownStack: z.array(z.string()).optional(),
    // 시연 영상 주소 (YouTube 등). 있으면 상세에 버튼이 생김
    demo: z.string().url().optional(),
  }),
});

// 페이지마다 달라지는 소개: 직무명, 대표 프로젝트 순서, 기술 분류 순서
const track = {
  role: z.string(),
  description: z.string(),
  // 앞에 둘 프로젝트 파일 이름(확장자 제외), 적은 순서대로. 나머지는 최신순으로 뒤에 붙음
  featured: z.array(z.string()).min(1),
  // skills.md의 '분류:' 값. 빠진 분류는 원래 순서대로 뒤에 붙음
  skillOrder: z.array(z.string()).optional(),
};

// 상단 소개(/ 페이지). 연락처는 여기 하나만 고치면 모든 페이지에 반영됨
const profile = defineCollection({
  loader: glob({ pattern: 'intro.md', base: './src/content/profile' }),
  schema: z.object({
    name: z.string(),
    email: z.string().email(),
    github: z.string().url(),
    ...track,
  }),
});

// 직무별 페이지(/backend/, /infra/ …). 파일 이름이 주소가 됨
const tracks = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/tracks' }),
  schema: z.object(track),
});

export const collections = { projects, profile, tracks };
