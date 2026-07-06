// 파싱 데이터 전수 검증 — sync 후 매주 재실행 가능
// Node 24의 TS 타입 스트리핑으로 src/lib/parser.ts를 직접 import (파서 로직 이중화 방지)
import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { EXCLUDED_IDS } from '../src/lib/archive-config.ts';
import { parseChecklist } from '../src/lib/parser.ts';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DIR = join(ROOT, 'src', 'data', 'checklists');

const errors = [];
const fail = (msg) => errors.push(msg);

const allFiles = readdirSync(DIR).filter((f) => /-checklist\.md$/.test(f)).sort();
const excluded = allFiles.filter((f) => EXCLUDED_IDS.has(f.replace('-checklist.md', '')));
const files = allFiles.filter((f) => !excluded.includes(f));
if (excluded.length) console.log(`[validate] 수록 제외 ${excluded.length}건: ${excluded.join(', ')}`);
const weeks = files.map((name) => {
  const id = name.match(/(\d{4}-W\d{2})-checklist\.md$/)?.[1];
  if (!id) {
    fail(`파일명 형식 오류: ${name}`);
    return null;
  }
  return { name, raw: readFileSync(join(DIR, name), 'utf-8'), week: null, id };
}).filter(Boolean);

for (const w of weeks) {
  try {
    w.week = parseChecklist(w.id, w.raw);
  } catch (e) {
    fail(`${w.name}: 파싱 실패 — ${e.message}`);
  }
}
const parsed = weeks.filter((w) => w.week);

// 1. 전체 주차 수 = 파일 수
if (parsed.length !== files.length) fail(`파싱 성공 ${parsed.length} ≠ 파일 수 ${files.length}`);

// 2. issue 번호 중복/누락 (주차 오름차순으로 +1 연속)
for (let i = 1; i < parsed.length; i++) {
  const prev = parsed[i - 1].week;
  const cur = parsed[i].week;
  if (cur.issue !== prev.issue + 1) {
    fail(`issue 연속성 깨짐: ${prev.id} #${prev.issue} → ${cur.id} #${cur.issue}`);
  }
}

// 3. slug 중복 없음
const slugs = new Set();
for (const { week } of parsed) {
  if (slugs.has(week.slug)) fail(`slug 중복: ${week.slug}`);
  slugs.add(week.slug);
}

// 4~7. 주차별 항목 검사
let itemTotal = 0;
const perWeek = [];
for (const { name, raw, week } of parsed) {
  const items = week.categories.flatMap((c) => c.items);
  itemTotal += items.length;
  perWeek.push(`  ${week.id} #${week.issue}: 승인 ${items.length}건`);

  // 5. 빈 제목/빈 URL 0개
  for (const item of items) {
    if (!item.title.trim()) fail(`${name}: 빈 제목 항목`);
    if (!/^https?:\/\//.test(item.url)) fail(`${name}: URL 누락/형식 오류 — "${item.title}" (url="${item.url}")`);
    if (!item.summary.trim()) fail(`${name}: summary 누락 — "${item.title}"`);
  }

  // 6. summary bleed — "미체크로만 존재하는" 제목이 결과에 등장하면 안 됨
  //    (같은 아이템이 두 카테고리에 체크/미체크로 중복 게재되는 경우는 정상)
  const parsedTitles = new Set(items.map((i) => i.title));
  const checkedTitles = new Set([...raw.matchAll(/^- \[[xX]\]\s*\*\*(.+?)\*\*$/gm)].map((m) => m[1]));
  for (const m of raw.matchAll(/^- \[ \]\s*\*\*(.+?)\*\*$/gm)) {
    if (parsedTitles.has(m[1]) && !checkedTitles.has(m[1])) {
      fail(`${name}: 미체크 항목이 결과에 포함됨 — "${m[1]}"`);
    }
  }
  // 체크 라인 수 = 파싱된 항목 수 (유실 방지 역방향 검증)
  const checkedLineCount = [...raw.matchAll(/^- \[[xX]\]/gm)].length;
  if (checkedLineCount !== items.length) {
    fail(`${name}: 체크 라인 ${checkedLineCount}개 ≠ 파싱 항목 ${items.length}개`);
  }

  // 7. weeklyUrl 2자리 패딩 패턴
  if (!/\/weekly\/\d{6}$/.test(week.weeklyUrl)) fail(`${name}: weeklyUrl 패턴 오류 — ${week.weeklyUrl}`);

  // 에디토리얼 존재
  if (!week.editorialTitle) fail(`${name}: 에디토리얼 제목 없음`);
  if (week.editorialParagraphs.length === 0) fail(`${name}: 에디토리얼 본문 없음`);
  if (!week.period) fail(`${name}: 기간 메타 없음`);
}

// 4. 체크 항목 수 합계 출력
console.log(`[validate] 주차 ${parsed.length}개, 승인 항목 합계 ${itemTotal}건`);
console.log(perWeek.join('\n'));

if (errors.length) {
  console.error(`\n❌ 검증 실패 ${errors.length}건:`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log('\n✅ 전 항목 통과');
