// checklist 미러 파일 로딩 + 정렬 + 통계 (빌드 시 1회 실행)
import { EXCLUDED_IDS } from './archive-config.ts';
import { CATEGORY_META } from './categories.ts';
import { parseChecklist, type WeekData } from './parser.ts';

const files = import.meta.glob<string>('../data/checklists/*-checklist.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const weeks: WeekData[] = Object.entries(files)
  .flatMap(([path, content]) => {
    const idMatch = path.match(/(\d{4}-W\d{2})-checklist\.md$/);
    if (!idMatch) throw new Error(`checklist 파일명 형식 오류: ${path}`);
    return EXCLUDED_IDS.has(idMatch[1]) ? [] : [parseChecklist(idMatch[1], content)];
  })
  .sort((a, b) => a.id.localeCompare(b.id)); // 주차 오름차순 (ISO 주차라 사전순 = 시간순)

/** 주차 오름차순 전체 목록 */
export function getAllWeeks(): WeekData[] {
  return weeks;
}

export interface ArchiveStats {
  weekCount: number;
  itemTotal: number;
  firstWeek: WeekData;
  latestWeek: WeekData;
  /** CATEGORY_META 순서, 승인 항목 수 (0건 카테고리 포함) */
  categoryCounts: { key: string; emoji: string; label: string; count: number }[];
}

export function getStats(): ArchiveStats {
  if (weeks.length === 0) throw new Error('checklist 데이터가 없습니다 — npm run sync를 먼저 실행하세요');
  const counts = new Map<string, number>(CATEGORY_META.map((c) => [c.key, 0]));
  for (const w of weeks) {
    for (const c of w.categories) {
      counts.set(c.key, counts.get(c.key)! + c.items.length);
    }
  }
  return {
    weekCount: weeks.length,
    itemTotal: weeks.reduce((n, w) => n + w.itemCount, 0),
    firstWeek: weeks[0],
    latestWeek: weeks[weeks.length - 1],
    categoryCounts: CATEGORY_META.map((c) => ({
      key: c.key,
      emoji: c.emoji,
      label: c.label,
      count: counts.get(c.key)!,
    })),
  };
}
