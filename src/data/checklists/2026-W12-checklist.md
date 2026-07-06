# GeekNews Weekly #350 리뷰
> 기간: 2026-03-16 ~ 2026-03-22 | 생성: 2026-03-23 | 파일ID: 2026-W12

## 승인 방법
포함할 항목의 `- [ ]` → `- [x]` 로 변경 후 저장
그 후 Claude Code에서 `/mail-approve` 실행

---

## 📝 이번 주 뉴스 요약
**AI 시대의 경쟁은 모델이 아니라 개발자 워크플로 점유**
AI 업계의 핵심 화두가 모델 성능에서 개발자 워크플로 통합으로 이동하고 있습니다. Anthropic이 Claude Code를 중심으로 Skills, Channels, 예약 작업 등을 차례로 공개하며 단순 기능 추가를 넘어 "어떻게 써야 하는가"를 함께 배포하는 전략을 펼치고 있습니다. 이는 과거의 DevRel과 달리 제품 아키텍처 자체에 개발자 경험을 깊이 있게 통합하는 방식입니다. 에이전트 기반 개발이 표준화되면서 한 엔지니어가 수십~수백 개의 에이전트를 조율하게 될 때, 어떤 플랫폼에서 이 워크플로를 구성하느냐가 생존을 결정하게 됩니다. Apple이 개발자 기반으로 생태계를 구축한 것처럼, 현재 AI 경쟁은 점점 개발자의 일하는 방식 자체를 점유하는 것으로 재편되고 있습니다. 코드 비즈니스에서 OpenAI가 대중 인지도로는 앞서지만, 개발자 워크플로 중심 채택에서는 Anthropic이 빠르게 존재감을 키우고 있으며, 이것이 향후 AI 기업의 가치를 결정하는 핵심 축이 될 가능성이 높습니다.

---

## 🤖 AI 에이전트 & 자동화 `#agents`
- [x] **Claude Code Channels 공개 - Telegram/Discord로 작업 지시 가능**
  Telegram·Discord로 Claude Code를 제어할 수 있는 Channels 기능 출시
  url: https://news.hada.io/topic?id=27657
- [ ] **Open SWE: 사내 코딩 에이전트를 위한 오픈소스 프레임워크**
  프로덕션 검증된 에이전트 아키텍처를 오픈소스로 구현한 프레임워크
  url: https://news.hada.io/topic?id=27604
- [x] **cmux - AI 코딩 에이전트를 위한 Ghostty 기반 macOS용 터미널**
  Ghostty 기반 빠른 터미널로 AI 협업 환경 커스터마이징 가능
  url: https://news.hada.io/topic?id=27598
- [ ] **nullclaw - Zig로 구현한 초경량 자율형 AI 어시스턴트**
  678KB 단일 바이너리로 50개 AI Provider와 메시징 채널 통합
  url: https://news.hada.io/topic?id=27568
- [x] **Codex, Subagents 지원 시작**
  복잡한 개발 작업을 여러 전문 에이전트에 병렬 분배 및 자동 통합
  url: https://news.hada.io/topic?id=27566
- [x] **Claude Cowork Dispatch - 어디서든 Claude에게 작업시키기**
  모바일/데스크톱에서 Claude에게 작업 지시, 로컬 자원 활용 가능
  url: https://news.hada.io/topic?id=27605
- [x] **Claude Cowork를 두 번째 직원처럼 활용하는 방법**
  자율적 데스크톱 에이전트로 계획·실행·결과물 저장 자동화
  url: https://news.hada.io/topic?id=27674
- [x] **AI 에이전트 프로토콜 개발자 가이드**
  6가지 프로토콜 통합으로 에이전트 생태계 공급망 구축
  url: https://news.hada.io/topic?id=27636
- [ ] **NVIDIA NemoClaw - OpenClaw + Nemotron + OpenShell**
  개인 AI OS에 프라이버시·보안 제어 레이어와 정책 기반 가드레일 추가
  url: https://news.hada.io/topic?id=27569
- [x] **SaaS의 미래는 Agentic**
  사용자 대신 행동하는 에이전트 중심으로 상호작용 세금 제거
  url: https://news.hada.io/topic?id=27732

## 🔧 Claude Code & 개발 도구 `#claudecode`
- [x] **Claude Code를 만들며 배운 것: 우리가 Skills를 사용하는 방법**
  Skills로 폴더 단위 스크립트·데이터·에셋 통합, 모델 직접 탐색 실행
  url: https://news.hada.io/topic?id=27640
- [x] **일상적으로 사용하는 Claude Code 팁과 모범 사례 50가지**
  단축키, Hooks, CLAUDE.md 구조화로 개발 병목 제거
  url: https://news.hada.io/topic?id=27677
- [x] **IDE의 죽음?**
  개발이 코드 편집에서 에이전트 오케스트레이션 인터페이스로 전환
  url: https://news.hada.io/topic?id=27720

## 🧠 AI 모델 & 연구 `#models`
- [x] **LLM 아키텍처 갤러리**
  최신 오픈웨이트 LLM 아키텍처·사양을 한눈에 비교
  url: https://news.hada.io/topic?id=27553
- [ ] **소프트웨어 엔지니어를 위한 Codex**
  OpenAI 공개 Codex 웨비나로 대규모 에이전트 작업 위임 학습
  url: https://news.hada.io/topic?id=27629
- [ ] **Unsloth Studio - 로컬에서 AI 모델을 훈련하고 실행하는 오픈소스 노코드 웹 UI**
  로컬 학습·추론 2배 빠르고 VRAM 70% 절감
  url: https://news.hada.io/topic?id=27606
- [ ] **GPT-5.4로 세련된 프론트엔드 디자인하기**
  프론트엔드 디자인 능력 강화, 실전 프롬팅 4가지 기법 공개
  url: https://news.hada.io/topic?id=27687
- [x] **Cursor, 코딩 특화 AI 모델 Composer 2 출시**
  자체 훈련 코딩 모델 성능 60% 향상, SWE-bench 73.7점
  url: https://news.hada.io/topic?id=27682

## 🏢 AI 산업 & 비즈니스 `#industry`
- [x] **"토큰 경로에 올라타라" - AI 시대 인프라 기업의 핵심 수익화 전략**
  수익 단위가 컴퓨트에서 토큰으로 이동, Cursor 같은 기업이 경로 점유
  url: https://news.hada.io/topic?id=27547
- [x] **"지금 AI는 너무 싸다" 개발자 커뮤니티가 본 가격 거품과 생존 전망**
  저가 착시, 장기 가격 인상·종속성 리스크와 효율화의 균형점 논쟁
  url: https://news.hada.io/topic?id=27584
- [x] **Google의 AI 네이티브 "바이브 디자인" 플랫폼, Stitch 공개**
  자연어로 고품질 UI 생성, 감정적 톤·목표로 설계 탐색
  url: https://news.hada.io/topic?id=27635
- [x] **Google AI Studio, 새로운 "풀스택 바이브 코딩 환경"으로 업그레이드**
  Antigravity 에이전트로 프롬프트만으로 프로덕션 앱 자동 완성
  url: https://news.hada.io/topic?id=27656
- [ ] **Astral, OpenAI에 합류**
  Python 도구 생태계 강자가 Codex 팀 합류, 오픈소스 공개 유지
  url: https://news.hada.io/topic?id=27659
- [x] **open-pencil - Figma 대체용 AI 기반 디자인 편집기**
  .fig 수정 가능, 90개 AI 도구로 형태·레이아웃 자동 구성
  url: https://news.hada.io/topic?id=27658

## 💭 개발 문화 & 의견 `#culture`
- [x] **AI 시대에도 프로그래밍을 배워야 하는가**
  AI 시대도 시스템 읽고 통제하는 능력 필수, 구조 유지 핵심
  url: https://news.hada.io/topic?id=27550
- [x] **내가 LLM으로 소프트웨어를 만드는 방법**
  LLM을 역할 분리한 협업자로 활용, 설계 정확도가 코드 품질보다 중요
  url: https://news.hada.io/topic?id=27576
- [x] **코드 리뷰를 없애는 방법**
  AI 코드 폭증으로 리뷰를 스펙 중심으로 전환, 코드 전 제약 정의
  url: https://news.hada.io/topic?id=27546
- [x] **충분히 상세한 명세는 코드다**
  에이전틱 코딩에서 정밀한 명세가 코드 수렴, 신뢰성·대기 오류 발생
  url: https://news.hada.io/topic?id=27662
- [ ] **Rob Pike의 프로그래밍 5가지 규칙 (1989)**
  측정 우선, 복잡도 피하기, 데이터 구조 중심으로 재조명
  url: https://news.hada.io/topic?id=27631
- [x] **코드 작성 속도가 문제라고 생각했다면, 더 큰 문제가 있는 것이다**
  병목은 타이핑 아닌 조직 흐름, 사이클 타임 단축이 진짜 생산성
  url: https://news.hada.io/topic?id=27624
- [ ] **AI 시대 개발 방법론 (SDD+TDD)**
  Spec-Driven Development와 TDD 결합, 명세가 테스트·제어 평면
  url: https://news.hada.io/topic?id=27675
- [ ] **뒤처져도 괜찮습니다, 고마워요!**
  FOMO 무기화를 경계, 기다리고 관찰하는 전략이 합리적
  url: https://news.hada.io/topic?id=27693
- [ ] **"당신의 짜증이 곧 상품이다"**
  현대 웹이 광고 수익으로 의도적 불편 설계, 신뢰도 저하
  url: https://news.hada.io/topic?id=27664
- [ ] **모든 리뷰 단계는 속도를 10배 느리게 만든다**
  리뷰 병목이 대기 시간 폭증, 신뢰 기반 품질 문화 전환 필요
  url: https://news.hada.io/topic?id=27608
- [ ] **Andrej Karpathy가 말하는 코드 에이전트, AutoResearch, 그리고 AI의 루피(Loopy) 시대 [유튜브]**
  병렬 작업 병목이 모델에서 사용자 지휘 능력으로 이동
  url: https://news.hada.io/topic?id=27706
- [x] **MCP는 죽었다; MCP 만세**
  개인 CLI vs 조직 MCP, 중앙화 구조의 보안·일관성 우위
  url: https://news.hada.io/topic?id=27530

## 🔐 보안 `#security`
- [ ] **FreeBSD를 사랑하는 이유**
  문서·안정성·네이티브 기능으로 서버 신뢰성과 예측성 확보
  url: https://news.hada.io/topic?id=27588

## 🇰🇷 국내 프로젝트 (Show GN) `#showgn`
- [ ] **MimikaStudio - 맥용 음성 복제 및 TTS 오픈소스**
  Metal 가속 로컬 음성 복제·다국어 감정 TTS, UI·API·CLI
  url: https://news.hada.io/topic?id=27628
- [ ] **defuddle - 어떤 웹페이지든 Markdown으로 추출합니다**
  불필요 요소 제거 후 정제된 콘텐츠 추출, Readability 대체
  url: https://news.hada.io/topic?id=27540
- [ ] **OpenGenerativeUI - AI기반 생성형 UI 프레임워크 오픈소스**
  AI가 차트·다이어그램·3D 시각화 자동 생성 오픈소스
  url: https://news.hada.io/topic?id=27570
- [x] **창업자를 위한 마케팅**
  예산 없는 초기 사용자 확보 GitHub 기반 실행 가능 전략 모음
  url: https://news.hada.io/topic?id=27531
- [x] **Remodex - Remote Control for Codex**
  아이폰에서 Mac Codex 제어, WebSocket 암호화·Git 워크플로
  url: https://news.hada.io/topic?id=27545
- [ ] **Kagi Translate가 이제 '링크드인 스타일'로 번역 지원**
  평범한 문장을 자기계발형 톤으로 변환하는 번역 모드
  url: https://news.hada.io/topic?id=27599
