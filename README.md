# GeekNews 주간 칼럼 아카이브

매주 GeekNews Weekly에서 직접 고른 뉴스와 에디토리얼을 paper-ink 디자인의 칼럼으로 보관하는 정적 사이트입니다. Astro로 빌드하고 Vercel로 배포합니다.

## 구조

- `src/data/checklists/` — 주차별 checklist.md 원본 미러 (`npm run sync`로만 갱신)
- `src/lib/parser.ts` — checklist 파서. **체크된([x]) 항목만** 사이트에 노출
- `src/lib/archive-config.ts` — 수록 제외 주차 목록
- `src/styles/paper-ink.css` — 디자인 원본 (무수정 유지, 추가 스타일은 `site.css`)
- `src/pages/index.astro` — 표지 (통계 + 발행 목록)
- `src/pages/weekly/[slug].astro` — 주차별 칼럼 (`/weekly/2026-w27/`)

## 명령

```bash
npm run sync       # 정본(60-operations)에서 checklist 미러링
npm run validate   # 파싱 데이터 전수 검증
npm run dev        # 개발 서버
npm run build      # 정적 빌드 → dist/
```

> Windows 로컬에서는 한글 경로 문제로 반드시 정션 `C:\geeknews-archive`에서 실행합니다.

## 매주 갱신

```powershell
cd C:\geeknews-archive
npm run sync
npm run validate
git add src/data/checklists; git commit -m "content: 2026-Wnn (#nnn)"; git push
```

push하면 Vercel이 자동으로 빌드·배포합니다.
