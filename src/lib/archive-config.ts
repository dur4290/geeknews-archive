// 아카이브 수록 제외 목록 (미러 원본은 그대로 보존, 로드 단계에서만 제외)
// 2026-W09: W10과 같은 GeekNews Weekly #348을 두 번 처리한 중복 —
//           에디토리얼이 상세한 W10을 #348 대표로 유지 (2026-07-06 결정)
export const EXCLUDED_IDS: ReadonlySet<string> = new Set(['2026-W09']);
