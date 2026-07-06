// @ts-check
import { defineConfig } from 'astro/config';

// 주의: 한글 경로에서 astro build가 네이티브 크래시/CSS 누락됨.
//       모든 명령은 ASCII 정션 C:\geeknews-archive 에서 실행 (rule.md 참조).
//       preserveSymlinks: 정션 경로를 실경로(한글)로 풀지 않도록 고정.
export default defineConfig({
  site: 'https://geeknews-archive-lilac.vercel.app',
  vite: { resolve: { preserveSymlinks: true } },
});