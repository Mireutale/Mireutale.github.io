import { getCollection, render, type CollectionEntry } from 'astro:content';

const parts = new Map((await getCollection('projectParts')).map((e) => [e.id, e]));

// 직무 폴더(backend/ 등)에 파일이 있으면 그것을, 없으면 기본 파일을 렌더링
async function renderPart(id: string, part: 'detail' | 'learned', track?: string) {
  const entry = (track && parts.get(`${id}/${track}/${part}`)) || parts.get(`${id}/${part}`);
  return entry ? (await render(entry)).Content : undefined;
}

export async function loadProject(entry: CollectionEntry<'projects'>, track?: string) {
  return {
    ...entry.data,
    id: entry.id,
    Content: await renderPart(entry.id, 'detail', track),
    Learned: await renderPart(entry.id, 'learned', track),
  };
}

export type Project = Awaited<ReturnType<typeof loadProject>>;
