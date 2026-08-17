# GeekNews Weekly #371 리뷰
> 기간:  | 생성: 2026-08-17 | 파일ID: 2026-W33

## 승인 방법
포함할 항목의 `- [ ]` → `- [x]` 로 변경 후 저장
그 후 `/geeknews` 실행

---

## 📝 이번 주 뉴스 요약
**코드 밖으로 꺼낸 기준 - 포크 시대의 소프트웨어 자산**
AI가 코드 생성 비용을 급격히 낮추면서 오픈소스 프로젝트의 진정한 자산이 코드에서 판단 기준과 설계 철학으로 옮겨가고 있습니다. Redis의 antirez는 생성된 코드의 검증 부담을 줄이기 위해 DESIGN.md에 핵심 아이디어를 명시하는 방식으로, Rails 커뮤니티의 Amiko 포크는 코드 복사 전에 거버넌스 저장소부터 열며, 각각 다른 방식으로 머릿속의 기준을 코드 바깥으로 꺼내고 있습니다. 코드는 포크할 수 있지만 그것을 같은 소프트웨어로 남게 만드는 판단과 가치관, 의사결정 구조는 여전히 사람과 공동체가 풀어야 할 핵심 과제입니다.

---

## 🤖 AI 에이전트 & 자동화 `#agents`
- [x] **Unsloth Desktop - 로컬 AI 모델 실행/학습/에이전트를 하나로 묶은 오픈소스 앱**
  로컬 LLM, 이미지, 비디오, TTS/STT 모델을 하나 앱에서 실행/학습 가능
  url: https://news.hada.io/topic?id=32455
- [x] **실전 루프 엔지니어링**
  Addy Osmani의 에이전트 운용법: /goal 반복과 /loop 주기 실행
  url: https://news.hada.io/topic?id=32519
- [x] **hubble.md - 사람과 에이전트를 위한 노트패드**
  에이전트가 편집 가능한 Markdown 노트폴더, 라이브 리로드 지원
  url: https://news.hada.io/topic?id=32516
- [ ] **palmier-pro - AI를 위해 만든 macOS 영상 편집기**
  사용자와 에이전트가 타임라인에서 함께 영상 제작
  url: /topic?id=32484
- [ ] **Xirp - Spotify가 만든 조직 컨텍스트 기반 AI 코딩 환경**
  에이전트가 서비스 소유권/의존성/기술 결정을 조직 검색으로 해결
  url: /topic?id=32420
- [x] **DeepSeek Harness - 모든 구성 요소를 플러그인으로 만든 오픈소스 코딩 에이전트**
  Model, Tool, Loop까지 플러그인화된 에이전트 프레임워크
  url: https://news.hada.io/topic?id=32474
- [ ] **Graph 엔지니어링 vs Loop 엔지니어링: 실제로 달라진 것은 무엇인가**
  여러 에이전트 루프를 연결한 워크플로, 확률적 판단의 신뢰성 문제
  url: /topic?id=32544
- [x] **Grok Bot 공개**
  항상 켜진 맥락 + 역할별 봇 + 봇 간 인계를 묶은 에이전트 UX
  url: https://news.hada.io/topic?id=32432
- [x] **인간이 루프의 중심이어야 한다**
  에이전트 병렬 실행의 우로보로스 현상, 인간 중심의 필요성
  url: https://news.hada.io/topic?id=32465

## 🔧 Claude Code & 개발 도구 `#claudecode`
- [ ] **AI 사용을 그만두기로 한 이유**
  Claude Code로 생산성 향상도 학습 멈춤과 무기력 초래
  url: /topic?id=32447

## 🧠 AI 모델 & 연구 `#models`
- [ ] **AI가 코드를 쓰는 시대, antirez는 왜 다시 C로 만드는가**
  Redis 창시자가 반년간 로컬 추론 엔진 4개 연속 개발한 의미
  url: /article/antirez-controls-the-ideas
- [ ] **Qwen3.8-27B, 17~19GB 메모리에서 4-bit 로컬 실행 가능**
  27B 모델이 24GB Mac에서 실행 가능해진 로컬 AI 환경
  url: /topic?id=32514
- [ ] **Meta Muse Glimmer - 기기에서 실행하는 오픈 웨이트 30B 코딩 모델**
  55GB→20GB 압축된 Apache 2.0 로컬 에이전트 모델
  url: /topic?id=32362
- [x] **Gemini 3.7 Flash**
  3주 만의 갱신, 코딩 벤치 34%→43%, 절반 비용
  url: https://news.hada.io/topic?id=32477
- [ ] **Solar Pro 4 - 에이전트 작업 특화 LLM**
  Excel/Word/PPT 생성 특화, GDPval-AA 최고점 달성
  url: /topic?id=32408
- [x] **압축은 예측이다**
  정보 이론: 압축과 예측은 같은 문제, 실제 비율 계산 예시
  url: https://news.hada.io/topic?id=32426
- [x] **AI 모델 고르기: 같은 프롬프트, 11개 모델, 매우 다른 결과**
  비싼 모델 1회 vs 저렴한 모델 다중 실행 비용/품질 비교
  url: https://news.hada.io/topic?id=32505
- [ ] **Go 언어가 AI 기반 소프트웨어 엔지니어링에 이상적인 이유**
  gofmt 단일 포맷과 빠른 컴파일이 AI 자기 교정 루프 단축
  url: /topic?id=32427

## 🏢 AI 산업 & 비즈니스 `#industry`
- [ ] **Rails는 DHH 없이도 Rails일 수 있을까**
  Rails 포크 Amiko 등장, 창시자의 가치관과 거버넌스 문제
  url: /article/rails-without-dhh
- [x] **Nvidia의 위험한 사업**
  5,000억 달러 제3자 자본, 잔존가치 25% 보증 구조의 위험성
  url: https://news.hada.io/topic?id=32415
- [x] **ARR의 의미가 예전과 달라졌다**
  AI 스타트업 ARR이 실제 수익을 의미하지 않는 문제
  url: https://news.hada.io/topic?id=32377
- [x] **AI 제품의 가격을 책정하는 방법**
  비용 하한 + 고객 가치 상한, Candor 인터뷰 서비스 실제 예시
  url: https://news.hada.io/topic?id=32375
- [ ] **X, For You 알고리듬 공개 범위 확대 - 랭킹 가중치와 노출 제한 시스템까지**
  랭킹 가중치, Visibility Filtering, 악용 방지 시스템 공개
  url: /topic?id=32491

## 💭 개발 문화 & 의견 `#culture`
- [x] **코드 리뷰도 배워야 하는 기술이다**
  LLM이 놓친 맥락 기반 버그, 소크라테스식 리뷰 방법론
  url: https://news.hada.io/topic?id=32417
- [x] **엔지니어링 리더는 매일 무슨 일을 하는가**
  수집→공유→결정→영향→실행→계획 순환의 리더 업무 구조
  url: https://news.hada.io/topic?id=32376
- [ ] **모든 코드를, 항상 다시 작성하라**
  코드 생성 비용 저하시 저장소는 명세, 코드는 일회성 산출물
  url: /topic?id=32322
- [x] **코드가 아니라 아이디어를 통제하라**
  antirez 원문: AI 코드 검토보다 설계 문서화의 중요성
  url: https://news.hada.io/topic?id=32422
- [ ] **아직 이해하지 못한 것에 대해 블로그를 써라**
  Sean Goedecke의 글쓰기 철학: 제약이 오히려 사고를 깊게
  url: /topic?id=32517
- [ ] **AI가 소프트웨어 엔지니어링의 중산층을 없애고 있음**
  +24K/-4K PR, AI의 복잡성 증가로 기술 부채 구조적 악화
  url: /topic?id=32441
- [x] **인간 중심에서 에이전틱 코드 리뷰로 - 더 빠른 결정이 더 나은 리뷰를 뜻하지는 않는다**
  102만 PR 분석: AI 리뷰 속도↑ but 품질 무의미, 안티패턴 증가
  url: https://news.hada.io/topic?id=32454
- [ ] **"기술 부채"가 아니라 그저 "엉망인 상태"다**
  의도적 선택이 아닌 미숙함, 명확한 의도 구분의 중요성
  url: /topic?id=32498
- [ ] **ActivityPub은 지루했기에 승리했다**
  HTTP/JSON 같은 평범한 기술이 100+ 구현체 공존 가능하게
  url: /topic?id=32527

## 🔐 보안 `#security`
- [ ] **한 연구자가 noreply.net을 샀더니 기업 기밀이 쏟아짐**
  401K+ 이메일/기밀 유입, 외부 주소 신뢰성 가정의 위험
  url: /topic?id=32405
- [x] **Tailscale이 데이터베이스 손상 원인을 16년 된 SQLite WAL-Reset 버그로 추적한 과정**
  16년 숨은 SQLite 데이터 경쟁 버그, VFS shim으로 발견
  url: https://news.hada.io/topic?id=32442

## 🇰🇷 국내 프로젝트 (Show GN) `#showgn`
- [ ] **hallmark - AI 티가 안나는 디자인 스킬**
  AI 반복 패턴 회피: 매크로구조 먼저, 구조적 DNA 추출
  url: /topic?id=32321
- [ ] **HOP - HWP/HWPX 문서를 보고 편집할 수 있는 오픈소스 데스크톱 앱**
  Rust 기반 Tauri로 한글 문서 크로스플랫폼 지원
  url: /topic?id=32428
- [ ] **Instatic - Webflow, Framer, WordPress를 대체하는 오픈소스 셀프호스팅 비주얼 CMS**
  Bun 하나로 통합한 비주얼 CMS, 시맨틱 HTML 출력
  url: /topic?id=32372
- [ ] **Wails v3 Beta - Go 데스크톱 앱을 위한 새로운 기반**
  명시적 객체 설계로 멀티윈도우 기본 기능화
  url: /topic?id=32485
- [ ] **Chat2DB - AI 기반 데이터베이스 클라이언트 & SQL 워크스페이스**
  30+ DB 지원, 자연어 SQL 생성/설명/최적화
  url: /topic?id=32318
- [ ] **xberg - 다국어 문서 인텔리전스 프레임워크**
  PDF/이미지/오디오 통합 처리, HWP/HWPX 추출 지원
  url: /topic?id=32452
- [ ] **PlanetScale은 이전 백업을 복원해서 다음 백업을 만든다**
  WAL 재생 방식으로 32TB 백업 22시간→42분 단축
  url: /topic?id=32319
- [ ] **SQLite에서 배운 신뢰성의 교훈 - Richard Hipp [유튜브]**
  100% MC/DC 테스트, 의도적 오류 주입으로 1조 개 사용 신뢰성
  url: /topic?id=32324
- [ ] **PostgreSQL의 MVCC는 나쁘다. 다른 DB도 마찬가지다**
  MVCC 비용 비교, WAL/인덱스별 상세 분석
  url: /topic?id=32326
- [ ] **MCP가 Stateless해짐**
  MCP 2026 사양: initialize 제거, HTTP 수평 확장 지원
  url: /topic?id=32492
- [ ] **Suno Studio 2.0 - MIDI와 AI Chat을 결합한 본격적인 음악 제작 도구**
  MIDI 편집, 신시사이저, 음원 분리 추가된 AI DAW
  url: /topic?id=32520
