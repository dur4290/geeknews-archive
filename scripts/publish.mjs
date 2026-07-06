// 원커맨드 발행: sync → validate(실패 시 중단) → 변경 감지 → 커밋 → push
// 변경이 없으면 커밋 없이 종료한다. validate 실패 시 push하지 않는다.
// 실행: npm run publish (반드시 ASCII 정션 C:\geeknews-archive 에서 — rule.md 참조)
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const run = (cmd, args) => execFileSync(cmd, args, { cwd: ROOT, stdio: 'inherit' });
const capture = (cmd, args) => execFileSync(cmd, args, { cwd: ROOT, encoding: 'utf-8' });

// 1) 정본 → 미러 동기화
console.log('\n=== [1/4] sync (정본 → 미러) ===');
run('node', ['scripts/sync.mjs']);

// 2) 데이터 검증 — 실패하면 발행 중단 (push 안 함)
console.log('\n=== [2/4] validate ===');
try {
  run('node', ['scripts/validate.mjs']);
} catch {
  console.error('\n❌ validate 실패 — 발행을 중단합니다. 데이터를 고친 뒤 다시 실행하세요.');
  process.exit(1);
}

// 3) 미러 변경 스테이징 + 변경 감지 (없으면 커밋 생략)
console.log('\n=== [3/4] 변경 감지 ===');
run('git', ['add', 'src/data/checklists']);
const staged = capture('git', ['diff', '--cached', '--name-status', '--', 'src/data/checklists']).trim();
if (!staged) {
  console.log('변경 없음 — 새 checklist가 없어 커밋을 생략합니다.');
  process.exit(0);
}
console.log(staged);

// 변경된 주차 추출 (A=추가/M=수정/D=삭제), id 오름차순 → 마지막이 최신 주차
const changed = staged
  .split('\n')
  .map((line) => {
    const [status, path] = line.split('\t');
    return { status, path, id: path?.match(/(\d{4}-W\d{2})-checklist\.md$/)?.[1] };
  })
  .filter((c) => c.id)
  .sort((a, b) => a.id.localeCompare(b.id));

const latest = changed[changed.length - 1];
// 이슈 번호는 파일 1행("# GeekNews Weekly #365 리뷰")에서 추출 (삭제 파일이면 생략)
let issue = '';
if (latest.status !== 'D') {
  try {
    const firstLine = readFileSync(join(ROOT, latest.path), 'utf-8').split(/\r?\n/)[0];
    issue = firstLine.match(/#(\d+)/)?.[1] ?? '';
  } catch { /* 이슈 번호 없이 진행 */ }
}
const suffix = changed.length > 1 ? ` 외 ${changed.length - 1}건` : '';
const message = `content: ${latest.id}${issue ? ` (#${issue})` : ''}${suffix}`;

// 4) 커밋 + push (Vercel 자동 재배포)
console.log('\n=== [4/4] commit & push ===');
run('git', ['commit', '-m', message]);
run('git', ['push']);
console.log(`\n✅ 발행 완료: ${message}\nVercel이 자동으로 재배포합니다.`);
