import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import sharp from 'sharp';
import { publicPath } from '../../lib/image';

// 프로젝트 페이지의 링크 미리보기 이미지. 배너를 1200×630 JPG로 잘라 만든다
// (WebP를 미리보기로 못 보여 주는 메신저가 있어서 JPG로 변환)
export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.filter((p) => p.data.image).map((p) => ({ params: { slug: p.id }, props: { image: p.data.image! } }));
}

export const GET: APIRoute = async ({ props }) => {
  const jpg = await sharp(publicPath(props.image)).resize(1200, 630, { fit: 'cover', position: 'attention' }).jpeg({ quality: 82 }).toBuffer();
  return new Response(new Uint8Array(jpg), { headers: { 'Content-Type': 'image/jpeg' } });
};
