# GeekNews Weekly #358 리뷰
> 기간: 2026-05-11 ~ 2026-05-17 | 생성: 2026-05-18 | 파일ID: 2026-W20

## 승인 방법
포함할 항목의 `- [ ]` → `- [x]` 로 변경 후 저장
그 후 Claude Code에서 `/mail-approve` 실행

---

## 📝 이번 주 뉴스 요약
**Local AI의 시대: 하이브리드 워크플로우의 현실화**
지난 1년간 Claude Code, Cursor 등 AI 코딩 도구가 실험에서 실제 개발 환경으로 진화했다. 하지만 Uber는 AI 예산을 4달 만에 소진하고, 아마존은 토큰 사용량 평가로 역효과를 낳는 등 클라우드 AI의 비용·보안·의존성 문제가 대두되고 있다. DeepSeek V4 Flash, Qwen 3.5 같은 경량 로컬 모델의 실용화로 Local AI가 다시 주목받고 있다. antirez의 DwarfStar 4나 M4 MacBook에서의 실험사례들이 보여주듯, 이제는 '어떤 작업을 어떤 모델에 맡길 것인가'에 대한 하이브리드 워크플로우 설계가 필수 시대가 되었다. 복잡한 아키텍처 판단은 프런티어 모델에, 세부 구현·테스트·코드 리뷰는 로컬 모델에 맡기는 역할 분담이 자연스러워질 가능성이 크다. 로컬 AI는 단순 비용 절감을 넘어 앱 기능의 신뢰성, 데이터 보안, 네트워크 의존성 제거라는 근본적인 소프트웨어 설계 철학의 변화까지 촉발하고 있다.

---

## 🤖 AI 에이전트 & 자동화 `#agents`
- [x] **Anthropic, 금융 서비스에 특화된 AI 에이전트/스킬/커넥터 오픈소스 공개**
  금융 전문 10종 AI 에이전트와 11개 금융 데이터 MCP 커넥터 공개
  url: https://news.hada.io/topic?id=29372
- [ ] **DeerFlow 2.0 — ByteDance의 장기 실행 SuperAgent 하네스**
  바이트댄스 장기 실행 에이전트 하네스, 수시간 복합 작업 지원
  url: https://news.hada.io/topic?id=29518
- [x] **Claude Code 에도 /goal 기능 추가**
  목표 설정 후 자동 완료까지 다중 턴 실행하는 기능 추가
  url: https://news.hada.io/topic?id=29428
- [x] **Learning Opportunities - Claude Code와 Codex에서 의도적 기술 개발을 돕는 스킬**
  코딩 중 개발자 학습을 돕는 예측·생성·인출 연습 제안
  url: https://news.hada.io/topic?id=29531

## 🔧 Claude Code & 개발 도구 `#claudecode`
- [ ] **Open Design - Claude Design의 로컬 퍼스트 오픈소스 대체제**
  16종 코딩 에이전트 자동 감지 및 129개 디자인 시스템 내장
  url: https://news.hada.io/topic?id=29376
- [x] **Code w/ Claude에서 발표한 모든 것들**
  Anthropic 컨퍼런스 19개 세션, Claude Code 워크플로우 업데이트
  url: https://news.hada.io/topic?id=29493
- [ ] **대규모 코드베이스에서 Claude Code가 작동하는 방식 : 모범 사례 및 시작점**
  Claude Code의 파일 시스템 탐색·grep 기반 추적 방식 및 최적화
  url: https://news.hada.io/topic?id=29556
- [x] **Claude, 프로그래밍 방식 사용을 '월간 크레딧' 구조로 변경**
  6월 15일부터 Agent SDK 사용량을 별도 월간 크레딧으로 분리
  url: https://news.hada.io/topic?id=29494
- [x] **OpenAI, Codex를 ChatGPT 모바일 앱에 통합 공개**
  스마트폰에서 원격 코딩 에이전트 세션 관리·승인·모니터링
  url: https://news.hada.io/topic?id=29514

## 🧠 AI 모델 & 연구 `#models`
- [ ] **Rapid-MLX - Apple Silicon 전용 초고속 로컬 AI 엔진**
  Apple MLX 기반 Metal 커널, Ollama 대비 최대 4.2배 빠름
  url: https://news.hada.io/topic?id=29410
- [ ] **상호작용 모델 - 인간-AI 협업을 위한 확장 가능한 접근법**
  200ms 마이크로턴 실시간 입출력, 모델 내부 상호작용성 내장
  url: https://news.hada.io/topic?id=29441
- [x] **중국 AI 연구소 내부에서 얻은 교훈**
  중국 연구자의 모델 품질 최적화 집중, 자체 기술 스택 통제
  url: https://news.hada.io/topic?id=29487

## 🏢 AI 산업 & 비즈니스 `#industry`
- [ ] **Bifrost - 초고속 엔터프라이즈 AI 게이트웨이**
  LiteLLM 대비 50배 빠른 성능, 15개 프로바이더 단일 API 통합
  url: https://news.hada.io/topic?id=29373
- [x] **로컬 AI가 표준이 되어야 함**
  앱 내 클라우드 AI는 네트워크·비용·장애 문제, 온디바이스 필수
  url: https://news.hada.io/topic?id=29369
- [ ] **AWS로 돌아왔는데, 내가 왜 떠났는지 다시 깨달았다**
  복잡한 과금·이그레스 요금·IAM 극단적 복잡성 문제점 지적
  url: https://news.hada.io/topic?id=29364
- [x] **GitHub이 침몰하고 있다**
  AI 저품질 코드·봇·가짜 스타 범람, 신뢰 훼손 심각
  url: https://news.hada.io/topic?id=29405
- [x] **M4 24GB 메모리에서 로컬 모델 실행하기**
  Qwen 3.5 9B로 40토큰/초, thinking·128K 컨텍스트 활용
  url: https://news.hada.io/topic?id=29385
- [x] **지금 많은 기업이 AI 집단 광기에 빠져 있다고 믿는다**
  MTTR 만능주의, 클라우드 시대 실패한 아키텍처 부식 재현
  url: https://news.hada.io/topic?id=29549
- [x] **"클로드 90% 할인"의 정체, 알고 보니 AI 학습 데이터 탈취 통로였습니다**
  중국 프록시 네트워크, 사용자 프롬프트를 학습 데이터로 판매
  url: https://news.hada.io/topic?id=29461
- [ ] **Bun의 Rust 재작성 PR이 머지됨**
  600만 라인 코드 재작성, AI 어시스트 코딩 기념비적 사례
  url: https://news.hada.io/topic?id=29526

## 💭 개발 문화 & 의견 `#culture`
- [ ] **소프트웨어 아키텍처 배우기**
  rust-analyzer 개발자, Conway's Law를 인센티브 구조로 분석
  url: https://news.hada.io/topic?id=29452
- [x] **시니어 개발자가 전문성을 전달하지 못하는 이유**
  비즈니스 속도 vs 복잡성 우려, 더 빠른 대안 제시가 핵심
  url: https://news.hada.io/topic?id=29459
- [ ] **Rust 백엔드 DB 라이브러리 4종 비교**
  Diesel·SQLx·SeaORM·Rusqlite 프로덕션 경험 기반 비교
  url: https://news.hada.io/topic?id=29433
- [x] **경험은 이제 세금이다**
  AI로 인해 탐색·외부화·번복 비용 붕괴, 경험이 장벽으로
  url: https://news.hada.io/topic?id=29515
- [x] **소프트웨어 엔지니어링은 더 이상 평생 직업이 아닐 수 있다**
  AI 거부 엔지니어는 경쟁에서 밀림, 경력 수명 제한 가능성
  url: https://news.hada.io/topic?id=29416
- [ ] **AI 분야의 다음 최대 해자는 "조직"이다**
  제품·기술 수렴, 조직 구조 자체가 경쟁 해자로 부상
  url: https://news.hada.io/topic?id=29486
- [ ] **이론 형성으로서의 프로그래밍 (1985)**
  프로그래밍은 코드 생산이 아닌 머릿속 이론 형성, AI 시대에 재강조
  url: https://news.hada.io/topic?id=29501
- [x] **어떤 시대에도 살아남는 기업을 만드는 방법 [유튜브]**
  Eric Ries 신간, 소유 구조가 제품 품질 결정
  url: https://news.hada.io/topic?id=29517
- [x] **코드 작성에 쓰는 AI 코딩 에이전트는 반드시 유지보수 비용을 줄여야 함**
  출력량 2배면 유지보수 비용도 2배, 생산성 이점이 소멸
  url: https://news.hada.io/topic?id=29399
- [ ] **소프트웨어의 Emacs화**
  AI로 개인 맞춤형 앱 제작 가능, 완제품보다 아이디어 가치 상승
  url: https://news.hada.io/topic?id=29502
- [ ] **오픈소스 레지스탕스: 업무 시간에 오픈소스를 지키자**
  기업 의존 오픈소스 유지보수를 업무 시간에 공유 인프라로
  url: https://news.hada.io/topic?id=29509
- [ ] **Steve Jobs의 망명기 – NeXT Computer 시절을 다룬 신간**
  Jobs의 NeXT 실패가 고객 맞춤의 규율·기술 가르쳐
  url: https://news.hada.io/topic?id=29559
- [x] **금욕적 컴퓨팅**
  단순함·집중·원칙, 도구 끊임없이 바꾸는 습관 경계
  url: https://news.hada.io/topic?id=29577
- [ ] **DS4에 대한 몇 마디**
  DeepSeek V4 Flash 로컬 모델의 코딩 능력 평가·기술 회고
  url: https://news.hada.io/topic?id=29541

## 🔐 보안 `#security`
- [ ] **브라우저는 대형 사이트를 다르게 취급한다**
  Safari·Firefox가 대형 사이트별 렌더링 예외코드 배포
  url: https://news.hada.io/topic?id=29513
- [ ] **새로운 arXiv 정책: 환각 인용에 대해 1년 이용 금지**
  LLM 생성 환각 참고문헌 논문, 1년 이용 금지 제재
  url: https://news.hada.io/topic?id=29535

## 🇰🇷 국내 프로젝트 (Show GN) `#showgn`
- [ ] **goshs - 개발자를 위한 다기능 단일 바이너리 파일 서버**
  HTTP/S·WebDAV·SFTP·SMB·LDAP 단일 바이너리로 제공
  url: https://news.hada.io/topic?id=29445
- [ ] **zero-native - Zig와 웹 UI로 데스크톱 + 모바일 앱 빌드**
  Vercel Labs, Zig 기반 크로스플랫폼 앱 프레임워크 공개
  url: https://news.hada.io/topic?id=29409
- [ ] **fzf를 설치했습니다. 이제 뭘 해야 할까요? (2023)**
  fzf 실전 활용법, Ctrl+R·Alt+C·ripgrep 조합으로 생산성 향상
  url: https://news.hada.io/topic?id=29389
- [ ] **RustFS - Rust로 만든 S3 호환 분산 객체 스토리지**
  MinIO AGPL 대안, Apache 2.0·마이그레이션·Helm Chart 지원
  url: https://news.hada.io/topic?id=29532
- [ ] **git-sync - 로컬 체크아웃 없이 Git 리모트 간 ref를 직접 미러링하는 CLI 도구**
  로컬 클론 없이 Git ref 직접 스트리밍, 메모리 효율적
  url: https://news.hada.io/topic?id=29547
- [x] **Obsidian 플러그인의 미래**
  커뮤니티 디렉터리 통합, 4000+ 플러그인 자동 품질 검사
  url: https://news.hada.io/topic?id=29438
- [ ] **Tailwind에서 벗어나며 CSS 구조화 배우기**
  Julia Evans, Tailwind 대신 시맨틱 HTML + CSS 변수 활용
  url: https://news.hada.io/topic?id=29553
- [ ] **MacBook Neo 심층 분석: 벤치마크, 웨이퍼 경제학, 그리고 8GB 도박**
  $599 MacBook Neo, 팬리스 설계의 60초 열 절벽 분석
  url: https://news.hada.io/topic?id=29506
