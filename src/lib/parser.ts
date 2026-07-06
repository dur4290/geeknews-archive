// checklist.md 파서 — 이식 원본: C:\geeknews-digest\geeknews_digest.py parse_review_md() (L369-420)
// 계약: 체크된([x]/[X]) 항목만 반환한다. 미체크 항목은 결과에 포함되지 않는다.
import { CATEGORY_META, type CategoryKey } from './categories.ts';

export interface Item {
  title: string;
  summary: string;
  url: string;
  note?: string;
}

export interface CategoryGroup {
  key: CategoryKey;
  emoji: string;
  label: string;
  items: Item[];
}

export interface WeekData {
  /** 파일ID, 예: "2026-W27" */
  id: string;
  /** URL 슬러그, 예: "2026-w27" */
  slug: string;
  /** 이슈 번호, 예: 365 */
  issue: number;
  /** 예: "2026-06-29 ~ 2026-07-05" */
  period: string;
  editorialTitle: string;
  editorialParagraphs: string[];
  /** 승인 항목이 있는 카테고리만, CATEGORY_META 순서대로 */
  categories: CategoryGroup[];
  /** GeekNews 주간 원문, 예: "https://news.hada.io/weekly/202627" */
  weeklyUrl: string;
  /** 승인 항목 총계 */
  itemCount: number;
}

const VALID_KEYS = new Set<string>(CATEGORY_META.map((c) => c.key));

/**
 * @param id 파일명에서 추출한 파일ID ("2026-W27")
 * @param content checklist.md 원문
 */
export function parseChecklist(id: string, content: string): WeekData {
  const lines = content.split(/\r?\n/);

  // 1행: "# GeekNews Weekly #365 리뷰"
  const issueMatch = lines[0]?.match(/#(\d+)/);
  const issue = issueMatch ? Number(issueMatch[1]) : 0;

  // 2행: "> 기간: ... | 생성: ... | 파일ID: ..."
  const periodMatch = content.match(/기간:\s*(.+?)\s*\|/);
  const period = periodMatch ? periodMatch[1] : '';

  // 에디토리얼: "## 📝 이번 주 뉴스 요약" 섹션 — 첫 **...** 줄이 제목, 이후 줄들이 본문 문단
  let editorialTitle = '';
  const editorialParagraphs: string[] = [];
  const edMatch = content.match(/## 📝 이번 주 뉴스 요약\r?\n([\s\S]+?)(?:\r?\n\r?\n---|$)/);
  if (edMatch) {
    for (const raw of edMatch[1].split(/\r?\n/)) {
      const line = raw.trim();
      if (!line) continue;
      const titleMatch = line.match(/^\*\*(.+?)\*\*$/);
      if (titleMatch && !editorialTitle) {
        editorialTitle = titleMatch[1];
      } else {
        editorialParagraphs.push(line);
      }
    }
  }

  // 카테고리별 승인 항목 파싱 (원본 로직 라인 단위 이식)
  const approved = new Map<string, Item[]>(CATEGORY_META.map((c) => [c.key, []]));
  let currentCat: string | null = null;
  let currentItem: Item | null = null;

  for (const line of lines) {
    // 카테고리 헤더: "## 🤖 AI 에이전트 & 자동화 `#agents`"
    const catMatch = line.match(/`#(\w+)`/);
    if (catMatch && line.startsWith('##')) {
      currentCat = catMatch[1];
      currentItem = null;
      continue;
    }
    if (currentCat === null) continue;

    if (line.startsWith('- [x]') || line.startsWith('- [X]')) {
      const title = line.trim().replace(/^- \[[xX]\]\s*\*\*(.+?)\*\*$/, '$1');
      currentItem = { title, summary: '', url: '' };
      if (VALID_KEYS.has(currentCat)) {
        approved.get(currentCat)!.push(currentItem);
      }
    } else if (line.startsWith('- [')) {
      // 미체크 항목 — summary 블리드 방지
      currentItem = null;
    } else if (line.startsWith('  url: ') && currentItem !== null) {
      currentItem.url = line.trim().slice(5);
    } else if (line.startsWith('  ') && currentItem !== null && line.trim()) {
      if (!currentItem.summary) {
        currentItem.summary = line.trim();
      } else if (currentItem.note === undefined) {
        // 두 번째 이후 들여쓰기 라인 = 개인 코멘트
        currentItem.note = line.trim();
      }
    }
  }

  const categories: CategoryGroup[] = CATEGORY_META.filter((c) => approved.get(c.key)!.length > 0).map(
    (c) => ({ key: c.key, emoji: c.emoji, label: c.label, items: approved.get(c.key)! })
  );

  return {
    id,
    slug: id.toLowerCase(),
    issue,
    period,
    editorialTitle,
    editorialParagraphs,
    categories,
    // week 부분은 숫자 변환 없이 문자열 치환만 — "2026-W09" → "202609" (2자리 패딩 보존)
    weeklyUrl: `https://news.hada.io/weekly/${id.replace('-W', '')}`,
    itemCount: categories.reduce((n, c) => n + c.items.length, 0),
  };
}
