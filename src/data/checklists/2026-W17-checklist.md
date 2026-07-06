# GeekNews Weekly #355 리뷰
> 기간: 2026-04-20 ~ 2026-04-26 | 생성: 2026-04-27 | 파일ID: 2026-W17

## 승인 방법
포함할 항목의 `- [ ]` → `- [x]` 로 변경 후 저장
그 후 Claude Code에서 `/mail-approve` 실행

---

## 📝 이번 주 뉴스 요약
**AI 시대의 소프트웨어 공학: 코드 작성에서 설계와 유지보수로의 전환**
AI 코딩 에이전트가 대량의 코드를 생성하는 시대에 소프트웨어 엔지니어의 역할이 변화하고 있습니다. Cursor나 Claude로 컴포넌트와 테스트 코드를 빠르게 만들 수 있게 되면서, '코드 작성'의 비용은 낮아졌지만 '좋은 설계와 유지보수'의 가치는 더욱 높아지고 있습니다.

에디토리얼은 AI 시대에 특히 중요한 소프트웨어 공학 원칙들을 강조합니다. Gall의 법칙(복잡한 시스템은 단순한 시스템에서 진화)은 AI가 한 번에 거대한 구조를 만들어주는 유혹에 저항하도록 상기시킵니다. Kernighan의 법칙(디버깅은 작성보다 어려움)은 AI가 작성한 코드를 우리가 디버깅해야 하는 현실을 반영합니다. YAGNI 원칙도 여전히 중요한데, AI에게 '확장 가능하게' 요청하면 필요 이상의 추상화가 따라오기 때문입니다.

중요한 것은 법칙을 많이 아는 것이 아니라, '언제 어떤 법칙을 적용하고 언제 깨야 하는지' 아는 판단력입니다. 이 판단력이 AI 시대의 엔지니어 기본기입니다. 마찬가지로 문서화의 가치도 높아집니다. 코드 자체가 아니라 '왜 그렇게 선택했는지', '왜 다른 방법을 하지 않았는지'를 남기는 일이 미래의 동료와 자신을 도울 수 있습니다.

 Martin Fowler가 제시한 '기술 부채, 인지 부채, 의도 부채' 개념은 이를 통합합니다. 기술 부채는 코드에 쌓이지만, 인지 부채는 사람에게 쌓입니다. 아무도 왜 그렇게 동작하는지 설명하지 못하는 코드가 늘어나면 팀의 공유 이해가 무너집니다. AI 시대에는 이 인지 부채 관리가 더욱 중요해집니다.

---

## 🤖 AI 에이전트 & 자동화 `#agents`
- [ ] **Garry Tan의 'Skillify' — AI 에이전트의 실패를 영구적 구조 수정으로**
  AI 에이전트 오류를 일회성 프롬프트가 아닌 재사용 가능한 스킬로 전환하는 10단계 체크리스트
  url: https://news.hada.io/topic?id=28777
- [x] **Google Cloud의 AI 에이전트 거버넌스 스택**
  에이전트를 엔지니어링 조직처럼 관리하는 거버넌스 프레임워크
  url: https://news.hada.io/topic?id=28810
- [x] **Google Agents CLI — 코딩 에이전트를 에이전트 빌더로**
  AI 에이전트에게 Google Cloud 기반 에이전트 설계/배포 역량을 주입하는 메타 도구
  url: https://news.hada.io/topic?id=28817
- [x] **Codex, Browser use로 웹사이트 구현 및 검증 지원**
  코딩 에이전트가 직접 브라우저를 띄워 웹앱 구현과 테스트를 함께 수행
  url: https://news.hada.io/topic?id=28868

## 🔧 Claude Code & 개발 도구 `#claudecode`
- [x] **Claude Code 및 Codex 설정 변경으로 토큰을 절약하는 방법**
  시스템 프롬프트, 툴 호출, 외부 연동에서 토큰 누수를 막는 구체적인 설정값
  url: https://news.hada.io/topic?id=28697
- [x] **Anthropic - OpenClaw : 다시 사용 가능해짐**
  Claude CLI를 자체 API 키로 쓸 수 있는 OpenClaw가 공식 허가를 받음
  url: https://news.hada.io/topic?id=28761
- [x] **Anthropic, 신규 Pro($20/월) 사용자에게 Claude Code 제공 중단?**
  Pro 플랜 신규 가입자에서 Claude Code 접근 제외 논란
  url: https://news.hada.io/topic?id=28762
- [x] **Claude를 해지한 이유: 토큰 문제, 품질 저하, 부실한 지원**
  Claude Code Pro 사용자의 토큰 한도, 품질, 지원 문제 경험기
  url: https://news.hada.io/topic?id=28863
- [x] **Anthropic의 Claude Code 장애 포스트모템: 2026년 4월 23일**
  추론 기본값 변경과 캐싱 버그로 인한 품질 저하 원인 분석
  url: https://news.hada.io/topic?id=28828

## 🧠 AI 모델 & 연구 `#models`
- [ ] **Qwen3.6-27B: 270억 dense 모델에서 플래그십급 코딩 성능**
  Alibaba의 270억 파라미터 모델이 훨씬 큰 MoE 모델을 코딩 성능에서 초과
  url: https://news.hada.io/topic?id=28797
- [ ] **DeepSeek v4 : 100만 토큰 컨텍스트를 지원하는 고효율 모델**
  100만 토큰 컨텍스트를 효율적으로 처리하는 하이브리드 어텐션 아키텍처
  url: https://news.hada.io/topic?id=28845
- [x] **ChatGPT Images 2.0 공개**
  사고 기능과 다국어 렌더링을 갖춘 새로운 이미지 생성 모델
  url: https://news.hada.io/topic?id=28763
- [x] **GPT-5.5 공개**
  자율적 계획과 도구 조합으로 복잡한 작업을 수행하는 에이전트형 모델
  url: https://news.hada.io/topic?id=28834
- [ ] **Google LiteRT-LM - 엣지 디바이스용 고성능 LLM 추론 프레임워크**
  Android부터 Raspberry Pi까지 한 프레임워크로 커버하는 엣지 LLM 추론 엔진
  url: https://news.hada.io/topic?id=28758
- [ ] **vLLM Recipes 개편 - 모델+하드웨어 조합별 설정을 한방으로**
  모델과 하드웨어를 선택하면 바로 쓸 수 있는 vllm 명령어를 생성해주는 레시피 사이트
  url: https://news.hada.io/topic?id=28808
- [x] **딥러닝에 대한 과학적 이론이 나올 것이다.**
  딥러닝 작동 원리에 대한 통합 이론 형성이 시작되었다는 논문
  url: https://news.hada.io/topic?id=28883

## 🏢 AI 산업 & 비즈니스 `#industry`
- [x] **크리에이티브 소프트웨어 업계가 Adobe에 전쟁을 선포함**
  Maxon, Canva, Affinity 등이 Adobe Creative Cloud에 무료 대안 제시
  url: https://news.hada.io/topic?id=28721
- [ ] **Tim Cook의 완벽한 타이밍**
  CEO 15년 재임 중 매출 303%, 이익 354% 성장을 이끈 경영 철학 분석
  url: https://news.hada.io/topic?id=28769
- [ ] **2027년부터 EU에서 판매되는 모든 휴대전화에 교체 가능한 배터리 의무화**
  EU, 2027년부터 모든 스마트폰의 사용자 교체 가능 배터리 의무화
  url: https://news.hada.io/topic?id=28735
- [x] **'제미나이 인 크롬'으로 더욱 스마트하고 편리해진 크롬이 한국에 출시**
  Google, 크롬 사이드 패널에서 페이지 요약과 멀티탭 분석 기능 공식 출시
  url: https://news.hada.io/topic?id=28743

## 💭 개발 문화 & 의견 `#culture`
- [ ] **소프트웨어 공학의 법칙들**
  56가지 소프트웨어 원칙을 팀, 아키텍처, 품질, 설계, 의사결정 영역으로 정리
  url: https://news.hada.io/topic?id=28760
- [x] **시니어 엔지니어로서 배운 것들 (2021)**
  5년 이상 프로덕션을 유지한 경험에서 나온 실전 소프트웨어 공학 조언
  url: https://news.hada.io/topic?id=28787
- [x] **기술 부채, 인지 부채, 의도 부채**
  Martin Fowler의 세 가지 부채 개념으로 보는 AI 시대 코드 관리
  url: https://news.hada.io/topic?id=28824
- [ ] **프로그래밍의 일곱 가지 원형 언어 (2022)**
  ALGOL, Lisp, ML 등 모든 언어의 뿌리가 되는 사고 패턴의 계보
  url: https://news.hada.io/topic?id=28703
- [ ] **프로덕션 환경에서 바이브 코딩을 책임감 있게 하는 법**
  AI 코딩을 프로덕션에서 안전하게 쓰려면 리프 노드에만 한정해야 한다
  url: https://news.hada.io/topic?id=28749
- [ ] **Why 2026 Seniors are just highly-paid Code Editors, on Addy Osmani**
  Google 엔지니어가 본 AI 시대 시니어 개발자의 역할 변화: 코드 평가자로의 전환
  url: https://news.hada.io/topic?id=28716
- [ ] **LLM으로 할 수 있는 비전형적인 일 7가지**
  악마의 변호인, 러버 덕킹 자동화 등 LLM의 창의적 활용법
  url: https://news.hada.io/topic?id=28846
- [x] **과도한 편집: 모델이 필요 범위를 넘어서 코드를 수정하는 현상**
  AI 모델이 버그 수정 시 필요 이상으로 코드를 재작성하는 경향 분석
  url: https://news.hada.io/topic?id=28814
- [ ] **나는 왜 쓰는가 (1946)**
  조지 오웰의 에세이, AI 시대에 사람이 쓰는 이유를 다시 묻다
  url: https://news.hada.io/topic?id=28886

## 🔐 보안 `#security`
- [x] **모든 공개 Notion 페이지는 모든 편집자들의 이메일 주소를 노출하고 있음**
  공개 Notion 페이지의 API 호출로 편집자 전원 이메일과 정보 노출 (4년 미해결)
  url: https://news.hada.io/topic?id=28701
- [ ] **AI에 대한 저항이 커지고 있다**
  Reddit의 r/PoisonFountain이 AI 크롤러에 오염 데이터를 제공하는 운동 중
  url: https://news.hada.io/topic?id=28750
- [ ] **AI 크롤러 시대, 로그 파일 분석으로 검색 가시성의 사각지대를 읽는 법**
  AI 검색 시스템의 크롤링 패턴을 서버 로그로 분석하고 차단하는 방법
  url: https://news.hada.io/topic?id=28847

## 🇰🇷 국내 프로젝트 (Show GN) `#showgn`
- [ ] **kumo - Go로 작성된 경량 AWS 서비스 에뮬레이터**
  단일 바이너리에 76개 AWS 서비스를 넣은 LocalStack 대안
  url: https://news.hada.io/topic?id=28793
- [ ] **GoScrapy - Go기반 초고속 웹 스크래핑 프레임워크**
  Python Scrapy 아키텍처를 Go로 네이티브 구현한 고처리량 스크래핑 도구
  url: https://news.hada.io/topic?id=28862
- [ ] **iroh - 공개키 기반 초고속 P2P 네트워크 연결 라이브러리 오픈소스**
  공개키로 노드를 지정하고 최적 경로를 자동 선택하는 Rust P2P 라이브러리
  url: https://news.hada.io/topic?id=28702
- [ ] **작은 화면용 5x5 픽셀 폰트**
  350바이트 폰트 파일로 마이크로컨트롤러와 OLED 화면에 최적화
  url: https://news.hada.io/topic?id=28813
- [ ] **DESIGN.md — AI 코딩 도구를 위한 디자인 시스템 단일 파일 포맷**
  YAML 토큰과 마크다운 설명이 함께하는 AI 친화적 디자인 시스템 포맷
  url: https://news.hada.io/topic?id=28861
- [ ] **Cherri - 애플 단축어를 코드로 작성하는 프로그래밍 언어**
  Apple Siri 단축어를 텍스트 코드로 작성하고 컴파일하는 도메인 특화 언어
  url: https://news.hada.io/topic?id=28732
- [ ] **IPv6가 훌륭한 설계였던 세상 (2017)**
  IPv6의 원래 꿈과 현실의 괴리를 추적한 네트워크 아키텍처 분석
  url: https://news.hada.io/topic?id=28731
- [ ] **나는 클라우드를 만들고 있어요**
  Tailscale 공동 창업자가 본 클라우드 아키텍처의 근본적인 설계 문제
  url: https://news.hada.io/topic?id=28835
- [ ] **Linux를 위한 Windows 9x 서브시스템**
  Windows 95/98에서 Linux 6.19 커널을 실행하는 실험적 프로젝트
  url: https://news.hada.io/topic?id=28796
- [ ] **집에서 RAM 만들기 [비디오]**
  가정 장비로 반도체 공정을 거쳐 DRAM 셀을 직접 제작해 동작 확인
  url: https://news.hada.io/topic?id=28781
- [ ] **다크 모드의 여섯 단계 (2024)**
  메타 태그부터 light-dark() 함수까지 다크 모드 구현의 진화 과정
  url: https://news.hada.io/topic?id=28705
- [ ] **Flipbook - 모델에서 직접 라이브 스트리밍되는 웹사이트**
  이미지 모델이 실시간으로 픽셀 기반 웹 페이지를 생성하는 실험적 브라우저
  url: https://news.hada.io/topic?id=28820
