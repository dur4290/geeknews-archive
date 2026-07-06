# GeekNews Weekly #360 리뷰
> 기간: 2026-05-25 ~ 2026-05-31 | 생성: 2026-06-01 | 파일ID: 2026-W22

## 승인 방법
포함할 항목의 `- [ ]` → `- [x]` 로 변경 후 저장
그 후 Claude Code에서 `/mail-approve` 실행

---

## 📝 이번 주 뉴스 요약
**기술 선택은 정답 맞히기가 아니라 제약 조건을 읽는 일**
이번 주 에디토리얼은 AI 시대의 기술 선택과 아키텍처 판단에 관한 이야기입니다. Redis에서 MySQL로 전환한 Shopify 사례, Postgres vs SQLite 논의, 그리고 AI 에이전트가 그럴듯한 설계를 제안할 수 있지만 "아니오"와 "왜?"를 충분히 대신하지 못한다는 점을 중심으로 전개됩니다.

핵심 메시지는 "좋은 기술 선택은 새로운 기술을 거부하는 태도도, 오래된 기술을 무조건 고집하는 태도도 아니다"는 것입니다. 중요한 것은 문제의 형태를 보고, 선택의 비용을 이해하고, 팀의 역량·레거시·운영 제약을 반영하며, 나중에 바꿀 수 있는 부분과 지금 틀리면 치명적인 부분을 구분하는 능력입니다.

Shopify 사례는 "Redis가 나쁘고 MySQL이 좋다"는 단순한 이야기가 아니라, 문제의 형태를 다시 보고 원자성이 필요한 경계를 재정의했다는 점에서 중요합니다. 최근 "일단 Postgres로 시작하면 된다"는 기본값이 강해질수록, 정말 필요한지, MySQL이면 더 자연스럽지 않은지, SQLite로 충분하지 않은지 반대 질문도 함께 중요해집니다.

AI 에이전트에게 코드 맥락과 구조 정보를 주는 것은 중요하지만, 그것이 아키텍처 판단까지 위임해도 된다는 뜻은 아닙니다. 판단은 맥락을 가진 사람이 해야 하며, AI에게는 적절한 지적질이 중요합니다. 에디터의 경험에서 AI 에이전트가 인스턴스 업그레이드를 제안했지만, 실제 원인은 크롤러 봇 요청을 제대로 막지 못한 데 있었고 관련 코드 수정으로 문제를 해결했습니다.

결론적으로 AI가 선택지를 넓혀주고 구현 속도를 높여줄수록, 엔지니어에게는 제약 조건을 읽고 맥락을 반영해 올바른 판단을 내릴 수 있는 감각이 더욱 중요해집니다.

---

## 🤖 AI 에이전트 & 자동화 `#agents`
- [x] **Codex, 활용 사례 모음 대폭 확장**
  Codex가 PR 리뷰·코드 이해부터 업무 처리·데이터 분석까지 전사 에이전트로 진화
  url: https://news.hada.io/topic?id=29847
- [ ] **CodeGraph - AI 코딩 에이전트를 위한 코드 지식 그래프**
  심볼 관계 인덱싱으로 토큰 59%, 도구 호출 70% 절감하는 에이전트 최적화 도구
  url: https://news.hada.io/topic?id=29873
- [ ] **Flue - 샌드박스 에이전트 프레임워크**
  Claude Code·Codex를 강력하게 만드는 하네스를 일반화한 TypeScript 에이전트 프레임워크
  url: https://news.hada.io/topic?id=29849
- [ ] **Decepticon - 레드팀을 위한 자율 해킹 에이전트**
  정찰에서 C2까지 실제 공격 체인을 자동화하는 16개 전문 에이전트 시스템
  url: https://news.hada.io/topic?id=29939
- [ ] **CodeBoarding - 코드베이스용 인터랙티브 아키텍처 다이어그램**
  정적 분석과 LLM으로 코드 구조를 자동 생성해 에이전트가 함께 보는 지도 제공
  url: https://news.hada.io/topic?id=29976
- [x] **OpenHuman - 개인용 AI 슈퍼 인텔리전스**
  로컬 우선 Memory Tree로 데스크톱 비서·Meet 참여자·118개 서드파티 연동
  url: https://news.hada.io/topic?id=29907
- [x] **Constraint Decay: 백엔드 코드 생성에서 LLM 에이전트의 취약성**
  API 계약·ORM 제약이 누적될수록 LLM 에이전트 성능이 무너지는 현상 분석
  url: https://news.hada.io/topic?id=29861

## 🔧 Claude Code & 개발 도구 `#claudecode`
- [x] **Claude는 당신의 아키텍트가 아니다. 그런 척하게 두지 말라**
  AI 에이전트의 코드 맥락 활용은 중요하나 아키텍처 판단은 여전히 사람의 책임
  url: https://news.hada.io/topic?id=29862
- [x] **Anthropic, Claude Opus 4.8 출시**
  코딩·추론 성능보다 정직성 강화로 불확실할 때 더 잘 멈추고 결함 감소
  url: https://news.hada.io/topic?id=29960
- [ ] **AI를 사용해 더 나은 코드를 더 천천히 작성하기**
  여러 AI에 교차 검토시켜 오탐 걸러내고 critical 문제만 사람이 수정하는 워크플로
  url: https://news.hada.io/topic?id=29870
- [ ] **React Doctor — AI가 생성한 React 코드를 정적 분석으로 검증하는 진단 도구**
  AI 생성 React 코드를 상태·성능·보안·접근성으로 자동 진단하고 에이전트 연동
  url: https://news.hada.io/topic?id=29920

## 🧠 AI 모델 & 연구 `#models`
- [ ] **Greg Brockman 인터뷰: AI가 곧 폭발적으로 성장할 것! 앞으로 어떤 일이 벌어질까?**
  AI가 이미 AI 개발을 가속 중이며 코드 설계는 여전히 인간 전문가가 강함
  url: https://news.hada.io/topic?id=29850

## 🏢 AI 산업 & 비즈니스 `#industry`
- [ ] **Shopify, 재고 예약 시스템을 Redis에서 MySQL로 교체**
  SKIP LOCKED로 오버셀 문제 해결하고 커넥션 점유 측정으로 성능 50% 개선
  url: https://news.hada.io/topic?id=30006
- [x] **Microsoft 보고서, AI가 인간 직원 고용보다 더 비싸다고 밝혀**
  토큰 사용량을 생산성 지표처럼 다루는 위험, 도입 늘수록 비용도 빠르게 증가
  url: https://news.hada.io/topic?id=29833
- [x] **Anthropic과 OpenAI가 제품-시장 적합성을 찾았다고 생각한다**
  개인 구독 아닌 엔터프라이즈 API 과금 모델에서 AI 회사들의 PMF 드러남
  url: https://news.hada.io/topic?id=29942
- [x] **외주 인력 + LocalAI 조합이 곧 프론티어 랩보다 경제적이 될 것**
  프론티어 모델 가격 상승으로 저비용 국가 엔지니어와 오픈소스 모델 조합 주목
  url: https://news.hada.io/topic?id=29936
- [ ] **기술 CEO들은 AI 정신증을 겪고 있는 듯하다**
  프로토타입 경험만으로 업무 전부를 에이전트 대체로 판단하는 간극 지적
  url: https://news.hada.io/topic?id=29944
- [ ] **Uber COO, tokenmaxxing에 쓰는 돈을 정당화하기가 점점 어려워지고 있다고 말해**
  토큰 사용 증가와 실제 생산성 향상의 괴리로 AI 도구 비용 효율성 재검토
  url: https://news.hada.io/topic?id=29897
- [ ] **Amazon Web Services - 4년 그리고 퇴사**
  AWS가 인프라에서 GenAI 과열로 기울며 길을 잃었다는 전직원의 회고
  url: https://news.hada.io/topic?id=29845
- [ ] **네이버, AI 브리핑 인용수를 창작자 보상 기준으로 공식화 — 네이버 메이트 발표**
  AI 답변 인용수가 창작자 보상 기준이 되면서 SEO에서 AI 인용 기준으로 전환
  url: https://news.hada.io/topic?id=29983
- [ ] **Apple과 Google은 푸시 알림에 무엇을 하고 있나**
  플랫폼이 알림을 파싱·순위화·요약·재작성하면서 앱의 알림 도달 가정 약화
  url: https://news.hada.io/topic?id=29962
- [ ] **Stack Overflow의 포럼은 죽었지만 회사는 여전히 버티고 있음**
  AI 확산으로 공개 질문 트래픽 감소하나 기업용 제품과 과거 콘텐츠로 생존
  url: https://news.hada.io/topic?id=29969

## 💭 개발 문화 & 의견 `#culture`
- [ ] **좋아하는 개발자 도구는 무엇인가요?**
  기본값이 좋은 도구(Helix, Fish, ripgrep)와 강력한 CLI 도구 선호 경향 분석
  url: https://news.hada.io/topic?id=29937
- [x] **AI와 대화하는 데 지쳤어요**
  AI 답변으로 우회하며 사람의 이해와 책임을 생략하는 현상 비판
  url: https://news.hada.io/topic?id=29940
- [x] **React를 좋아하는 사람이 실제로 있긴 한가요?**
  React 기본값 승리가 프론트엔드 혁신을 늦췄다는 기술 지배력의 위험성 제시
  url: https://news.hada.io/topic?id=29900
- [x] **병목은 "조직"에 있다**
  AI 도구가 코드 속도 높여도 조직 병목 그대로면 가치 전달 속도 안 변함
  url: https://news.hada.io/topic?id=29872
- [ ] **Go에서 Rust로 마이그레이션하기**
  성능이 아닌 컴파일 타임 보장으로 런타임 함정을 타입 시스템으로 옮기는 과정
  url: https://news.hada.io/topic?id=29838
- [ ] **하루 쉬어도 될까요?**
  AI 생산성 향상의 이익이 노동자가 아닌 주주에게 간다는 경제 구조 비판
  url: https://news.hada.io/topic?id=29975
- [ ] **구글이 더 이상 예전 Google이 아닌 지금, 시도해 볼만한 대체 검색엔진들**
  AI Overview 중심 전환으로 검색엔진 선택이 다시 기술 선택의 문제화
  url: https://news.hada.io/topic?id=29878
- [x] **죽은 경제 이론**
  AI 자동화로 비용 줄인 기업은 이익 얻으나 소비자 수요 자체가 감소하는 함정
  url: https://news.hada.io/topic?id=30009
- [ ] **기술 업계를 은퇴하고 오프라인으로 살꺼에요**
  Sentry 개발자가 인터넷 없는 삶으로 전환하며 온라인 피로감 표현
  url: https://news.hada.io/topic?id=30001
- [ ] **너무 가볍게 구독하지 마세요**
  구독이 가격 혜택을 넘어 사용자 행동과 습관을 서서히 바꾸는 설계 장치
  url: https://news.hada.io/topic?id=29901
- [ ] **지루한 기술을 선택하라 (2015)**
  혁신 토큰으로 새 기술 도입 비용을 직관적으로 보여주는 고전적 조언
  url: https://news.hada.io/topic?id=30035
- [ ] **지루한 기술을 선택하라, Revisited (2025)**
  AI는 모르는 기술에서 의존성을 키우는 장치가 될 수 있다는 현대적 재해석
  url: https://news.hada.io/topic?id=30036

## 🔐 보안 `#security`
- [x] **Constraint Decay: 백엔드 코드 생성에서 LLM 에이전트의 취약성**
  데이터 계층과 ORM 제약 위반으로 LLM 에이전트의 보안 취약성 입증
  url: https://news.hada.io/topic?id=29861

## 🇰🇷 국내 프로젝트 (Show GN) `#showgn`
- [ ] **기숙사 방에서 백만 달러짜리 제품을 만들었다 (2025)**
  DIY 키보드 커뮤니티의 정확한 빈틈을 찌른 무선 키보드로 100만 달러 달성
  url: https://news.hada.io/topic?id=29988
- [ ] **Postgres에서 내구성 워크플로 구축하기**
  Postgres를 단순 저장소가 아닌 워크플로 상태 기록과 복구의 기반으로 활용
  url: https://news.hada.io/topic?id=29999
- [ ] **SQLite만으로 내구성 있는 워크플로를 구현할 수 있음**
  SQLite와 Litestream으로 초기 단계에서는 대형 DB보다 단순하고 강력한 해법
  url: https://news.hada.io/topic?id=30014
- [x] **LLM이 만들어낸 "AI 냄새들"**
  AI 글의 패턴과 UI 반복이 금방 식별 가능해지면서 개인 문체 중요성 부각
  url: https://news.hada.io/topic?id=29997
- [ ] **몇 가지 흥미로운 현대 픽셀 폰트**
  제약이 만든 디자인 언어로 현대 픽셀 폰트의 기술과 미학을 재검토
  url: https://news.hada.io/topic?id=29930
