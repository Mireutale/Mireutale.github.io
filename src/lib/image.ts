import sharp from 'sharp';
import { join } from 'node:path';

// public/ 이미지의 실제 크기. <img width height>에 넣어 로딩 중 화면 밀림을 막는다
export async function imageSize(src: string): Promise<{ width: number; height: number }> {
  const { width, height } = await sharp(publicPath(src)).metadata();
  if (!width || !height) throw new Error(`이미지 크기를 읽을 수 없습니다: ${src}`);
  return { width, height };
}

// 빌드 시 코드가 다른 폴더로 묶이므로 프로젝트 루트 기준으로 찾는다
export function publicPath(src: string): string {
  return join(process.cwd(), 'public', src);
}
