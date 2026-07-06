// checklist 미러 스크립트
// 정본: 60-operations/61-geeknews-digest/checklist/*.md → 미러: src/data/checklists/
// 정책: 항상 덮어쓰기, 대상에만 남은 stale 파일은 삭제 (git 이력이 안전망)
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SOURCE = 'C:\\AI-WORKSPACE-학생배포용\\60-operations\\61-geeknews-digest\\checklist';
const TARGET = join(ROOT, 'src', 'data', 'checklists');

mkdirSync(TARGET, { recursive: true });

const pattern = /-checklist\.md$/;
const sourceFiles = readdirSync(SOURCE).filter((f) => pattern.test(f)).sort();
const targetFiles = readdirSync(TARGET).filter((f) => pattern.test(f)).sort();

const added = [];
const updated = [];
const unchanged = [];

for (const name of sourceFiles) {
  const content = readFileSync(join(SOURCE, name), 'utf-8');
  if (!targetFiles.includes(name)) {
    writeFileSync(join(TARGET, name), content);
    added.push(name);
  } else if (readFileSync(join(TARGET, name), 'utf-8') !== content) {
    writeFileSync(join(TARGET, name), content);
    updated.push(name);
  } else {
    unchanged.push(name);
  }
}

const stale = targetFiles.filter((f) => !sourceFiles.includes(f));
for (const name of stale) {
  rmSync(join(TARGET, name));
}

const list = (label, files) =>
  files.length ? `${label} ${files.length}건:\n${files.map((f) => `  - ${f}`).join('\n')}` : `${label} 0건`;

console.log(`[sync] 정본 ${sourceFiles.length}개 → 미러 완료`);
console.log(list('추가됨', added));
console.log(list('갱신됨', updated));
console.log(list('삭제됨(stale)', stale));
console.log(`변경 없음 ${unchanged.length}건`);
