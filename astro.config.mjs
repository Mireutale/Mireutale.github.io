// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mireutale.github.io',
  // TODO: Google Search Console(https://search.google.com/search-console)과
  // 네이버 서치어드바이저(https://searchadvisor.naver.com/)에 사이트를 등록하고
  // https://mireutale.github.io/sitemap-index.xml 제출하기
  integrations: [sitemap()],
});