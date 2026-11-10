// 소개 페이지(/, /backend/ …)의 링크 미리보기 이미지를 public/og/에 만든다.
// intro.md·tracks/*.md의 role·description을 바꿨다면 다시 실행: npm run og
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const CHROME = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const root = process.cwd();
const template = pathToFileURL(join(root, 'scripts/og-image.html'));

const field = (md, key) => {
  const m = md.match(new RegExp(`^${key}:\\s*"(.*)"\\s*$`, 'm'));
  if (!m) throw new Error(`"${key}:" 값을 찾을 수 없습니다`);
  return m[1];
};

const pages = [
  { name: 'intro', file: 'src/content/profile/intro.md' },
  ...readdirSync(join(root, 'src/content/tracks'))
    .filter((f) => f.endsWith('.md'))
    .map((f) => ({ name: f.replace(/\.md$/, ''), file: `src/content/tracks/${f}` })),
];

for (const { name, file } of pages) {
  const md = readFileSync(join(root, file), 'utf8');
  const url = new URL(template);
  url.searchParams.set('role', field(md, 'role'));
  url.searchParams.set('desc', field(md, 'description'));
  execFileSync(CHROME, [
    '--headless=new',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    '--virtual-time-budget=5000',
    '--window-size=1200,630',
    `--screenshot=${join(root, 'public/og', `${name}.png`)}`,
    url.href,
  ], { stdio: 'ignore' });
  console.log(`public/og/${name}.png`);
}
