# GeekNews Weekly #349 리뷰
> 기간: 2026-03-09 ~ 2026-03-15 | 생성: 2026-03-16 | 파일ID: 2026-W11

## 승인 방법
포함할 항목의 `- [ ]` → `- [x]` 로 변경 후 저장
그 후 Claude Code에서 `/mail-approve` 실행

---

## 📝 이번 주 뉴스 요약
**AI를 얼마나 쓰는가보다 무엇을 만드는가가 중요하다**
AI 시대에 공포 마케팅처럼 '에이전트를 못 쓰면 뒤처진다'는 말이 퍼지고 있지만, 실제로 중요한 것은 도구의 사용 여부가 아니라 그 도구로 무엇을 만들어내는지이다. Geohot의 글을 통해 제로섬 게임을 피하고 다른 사람에게 가치를 창출하는 것의 중요성을 강조했다. AI가 강해질수록 문제 정의, 올바른 방향 선택 같은 인간의 역할이 더 중요해진다. 오픈소스 생태계나 긱뉴스 커뮤니티처럼 소비보다 조금 더 많은 가치를 만들어내는 작은 기여들이 모여 전체 시스템을 유지하고 성장시킨다.

---

## 🤖 AI 에이전트 & 자동화 `#agents`
- [ ] **page-agent - 코드 1줄로 웹페이지에 AI 에이전트 추가하기**
  알리바바의 오픈소스, script 한 줄로 웹페이지를 AI 네이티브 앱으로 전환
  url: https://news.hada.io/topic?id=27404
- [x] **하네스 엔지니어링: 에이전트 우선 세계에서 Codex 활용하기**
  에이전트 시대에는 코딩 실력보다 에이전트가 잘 일할 환경 설계가 중요
  url: https://news.hada.io/topic?id=27457
- [ ] **진짜 내 일을 위한 Agentic Workflow**
  에이전트 코딩의 핵심은 모델보다 결정론적 제어 로직(하네스)
  url: https://news.hada.io/topic?id=27513
- [x] **PM Skills - AI 에이전트를 PM으로 활용하기**
  검증된 제품관리 프레임워크를 AI 워크플로우에 내장, 자동화된 의사결정
  url: https://news.hada.io/topic?id=27327
- [x] **OpenAI의 에이전트 구축을 위한 실용 가이드**
  에이전트는 모델·도구·지침 3축으로 복잡한 워크플로우 자동화
  url: https://news.hada.io/topic?id=27459
- [x] **Superset - AI 에이전트 시대를 위한 IDE**
  여러 AI 코딩 에이전트를 병렬 실행, 충돌 없이 효율적 개발
  url: https://news.hada.io/topic?id=27326
- [x] **AgentHub - AI 에이전트를 위한 경량 협업 플랫폼**
  Karpathy의 Autoresearch 에이전트들이 협업할 수 있는 Git 기반 플랫폼
    내 생각 : 이걸 활용하면 공동 프로젝트를 git으로 할 수 있겠다.
  url: https://news.hada.io/topic?id=27367
- [ ] **ralph-loop - 장시간 실행형 AI 에이전트 루프로 개발 업무 자동화하기**
  Docker 샌드박스에서 AI 에이전트가 요구사항부터 배포까지 자동 처리
  url: https://news.hada.io/topic?id=27426
- [ ] **Karpathy, Autoresearch로 nanochat을 2일간 자동 튜닝해 GPT-2 학습 시간 11% 단축**
  자율 실험 에이전트가 700회 실험으로 모델 성능 개선 자동화
  url: https://news.hada.io/topic?id=27402
- [ ] **NanoClaw를 Docker 샌드박스에서 실행하기**
  AI 에이전트를 이중 보안 경계 내 완전 격리 환경에서 실행
  url: https://news.hada.io/topic?id=27493
- [x] **잠자는 동안 실행되는 에이전트를 만들고 있어요**
  AI 에이전트의 자체 검증 문제 해결, TDD 기반 수용 기준 파이프라인
  url: https://news.hada.io/topic?id=27414
- [ ] **Agent Safehouse – macOS용 로컬 에이전트 샌드박싱 도구**
  macOS 네이티브 샌드박스로 로컬 AI 에이전트의 시스템 접근 격리
  url: https://news.hada.io/topic?id=27329

## 🔧 Claude Code & 개발 도구 `#claudecode`
- [x] **구현할까요? 아니요 (feat. claude-opus-4-6)**
  Claude Opus 4.6이 코드 변경 여부를 맥락적으로 판단하는 내부 사고
  url: https://news.hada.io/topic?id=27451
- [x] **Claude Code, 코드 리뷰 기능 공개**
  Claude Code의 멀티 에이전트 자동 코드 리뷰, 사람의 검증 결정권 유지
  url: https://news.hada.io/topic?id=27362
- [x] **Claude, 대화내에서 인터랙티브 시각 자료 생성 기능 추가**
  Claude가 대화 중 실시간으로 차트·다이어그램 등 시각화 생성
  url: https://news.hada.io/topic?id=27458

## 🧠 AI 모델 & 연구 `#models`
- [ ] **Qwen3.5 로컬 실행 가이드**
  알리바바의 0.8B~397B 모델군, Dynamic GGUF 양자화로 로컬 실행 가능
  url: https://news.hada.io/topic?id=27315
- [ ] **BitNet - 1비트 LLM을 위한 추론 프레임워크**
  1비트 LLM의 공식 추론 프레임워크, CPU에서 6배 고속·80% 에너지 절감
  url: https://news.hada.io/topic?id=27444
- [ ] **CodeSpeak - 코틀린 창시자의 새 언어: 영어 대신 명세(spec)로 LLM과 대화하기**
  명세로 코드를 자동 생성하는 LLM 기반 프로그래밍 언어, 코드 10배 감소
  url: https://news.hada.io/topic?id=27476

## 🏢 AI 산업 & 비즈니스 `#industry`
- [x] **다가올 10년을 준비하는 방법**
  기술이 욕구 충족 시간을 극압축, 인류가 '가속의 10년'에 진입
  url: https://news.hada.io/topic?id=27333
- [ ] **천천히 만드는 즐거움: 하이퍼 성장을 거부하는 소프트웨어 제작 방식**
  투자 거부, 2인 팀 유지로 느린 성장을 선택하는 !Boring의 철학
  url: https://news.hada.io/topic?id=27403
- [x] **창업의 새로운 규칙**
  클라우드·AI·오픈소스가 전통 진입장벽을 무너뜨리며 창업 규칙 변화
  url: https://news.hada.io/topic?id=27445
- [ ] **Minimum Lovable Product의 시대**
  AI가 개발 비용을 무너뜨리자 차별점은 기능에서 감정적 관계로 이동
  url: https://news.hada.io/topic?id=27336
- [ ] **잇따른 장애 후, Amazon이 AI 지원 코드 변경에 시니어 엔지니어 승인 의무화**
  AI 코딩 도구의 운영 리스크로 인적 검증 강화 정책 도입
  url: https://news.hada.io/topic?id=27395
- [ ] **서비스가 새로운 소프트웨어다**
  AI 시대 다음 단계는 도구 판매에서 업무 결과 판매로 이동할 것
  url: https://news.hada.io/topic?id=27436
- [ ] **서비스는 소프트웨어가 되지 않을 것이다**
  전문 서비스의 가치는 신뢰·책임·자격인증에 있어 AI로도 완전 자동화 불가
  url: https://news.hada.io/topic?id=27428
- [x] **네트워크 효과에 역행하지 마라: 에이전트 시대에도 통하는 방어 전략**
  진정한 네트워크 효과와 단순 집계를 구분, AI 에이전트 시대의 방어 전략
  url: https://news.hada.io/topic?id=27425

## 💭 개발 문화 & 의견 `#culture`
- [ ] **다른 사람에게 가치를 창출하고, 보상은 걱정하지 마세요.**
  Geohot: AI 도구보다 중요한 것은 사람이 무엇을 만들어내는지
  url: https://news.hada.io/topic?id=27422
- [x] **AI 글쓰기에서 피해야 할 상투적 패턴 모음**
  AI 문체의 30여 가지 상투적 표현을 범주별로 정리, 개선 방법 제시
  url: https://news.hada.io/topic?id=27321
- [x] **파일시스템이 주목받는 이유**
  LLM 컨텍스트 한계 극복, 파일기반 영속적 메모리로 에이전트 정체성 보존
  url: https://news.hada.io/topic?id=27320

## 🔐 보안 `#security`
- [ ] **SSH에 비밀 메뉴가 있다는 거 아세요?**
  SSH 이스케이프 시퀀스로 멈춘 세션을 클라이언트에서 직접 제어
  url: https://news.hada.io/topic?id=27460
- [ ] **JavaScript DRM의 허상: HotAudio 복사 보호를 3라운드 만에 무력화한 과정**
  브라우저 DRM은 구조적으로 완전 보호 불가능, 3단계 우회 기법 분석
  url: https://news.hada.io/topic?id=27427

## 🇰🇷 국내 프로젝트 (Show GN) `#showgn`
- [ ] **Scrapling - 적응형 웹 스크래핑 프레임워크**
  웹 구조 변화·반봇 시스템에 능동 대응하는 지능형 스크래핑 프레임워크
  url: https://news.hada.io/topic?id=27352
- [x] **나의 홈랩 구축기**
  게이밍 PC를 홈서버로 전환, TrueNAS로 개인 클라우드 환경 구축 사례
  url: https://news.hada.io/topic?id=27348
- [ ] **TUI Studio – 터미널 UI 디자인 도구**
  Figma처럼 드래그 앤 드롭으로 터미널 UI를 시각적으로 설계
  url: https://news.hada.io/topic?id=27484
- [ ] **웹에서 WebAssembly를 1급 언어로 만들기**
  WebAssembly Component Model로 JS 없이도 Web API 직접 접근 가능
  url: https://news.hada.io/topic?id=27429
- [ ] **ShadowBroker - 전 세계 15개 실시간 데이터 피드를 통합한 OSINT 대시보드**
  항공·선박·위성·분쟁 등 15개 데이터를 지도 기반으로 통합 시각화
  url: https://news.hada.io/topic?id=27351
- [ ] **CanIRun.ai — 내 컴퓨터에서 AI 모델을 실행할 수 있을까?**
  WebGPU로 로컬 AI 모델 실행 가능성을 간편하게 확인
  url: https://news.hada.io/topic?id=27483
- [ ] **deff - 인터랙티브한 git diff TUI 뷰어**
  Rust 기반 TUI로 git 변경사항을 Side-by-Side 시각화
  url: https://news.hada.io/topic?id=27420
