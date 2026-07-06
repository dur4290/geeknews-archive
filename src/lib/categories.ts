// CATEGORY_META 이식 원본: C:\geeknews-digest\geeknews_digest.py L51-59
// 순서 = 사이트 표시 순서 (원본 dict 순서 보존)
export const CATEGORY_META = [
  { key: 'agents', emoji: '🤖', label: 'AI 에이전트 & 자동화' },
  { key: 'claudecode', emoji: '🔧', label: 'Claude Code & 개발 도구' },
  { key: 'models', emoji: '🧠', label: 'AI 모델 & 연구' },
  { key: 'industry', emoji: '🏢', label: 'AI 산업 & 비즈니스' },
  { key: 'culture', emoji: '💭', label: '개발 문화 & 의견' },
  { key: 'security', emoji: '🔐', label: '보안' },
  { key: 'showgn', emoji: '🇰🇷', label: '국내 프로젝트 (Show GN)' },
] as const;

export type CategoryKey = (typeof CATEGORY_META)[number]['key'];
