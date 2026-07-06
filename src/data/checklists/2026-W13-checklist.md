# GeekNews Weekly #351 리뷰
> 기간: 2026-03-23 ~ 2026-03-29 | 생성: 2026-03-30 | 파일ID: 2026-W13

## 승인 방법
포함할 항목의 `- [ ]` → `- [x]` 로 변경 후 저장
그 후 Claude Code에서 `/mail-approve` 실행

---

## 📝 이번 주 뉴스 요약
**하네스 엔지니어링: 에이전트 팀을 어떻게 구성하느냐가 핵심**
단순한 AI 도구 사용에서 벗어나 에이전트를 워크플로우 단위로 묶고 역할을 분리해 제어 가능하게 만드는 '하네스 엔지니어링'이 새로운 표준이 되고 있습니다. 젠슨 황의 '연봉 7억 원 엔지니어는 3억 5천만 원어치 토큰을 써야 한다'는 발언은 단순히 토큰 소비가 아니라, 여러 에이전트를 협력 시스템으로 구성했을 때 자연스럽게 늘어나는 연산량을 의미합니다. 이제 핵심은 '에이전트를 잘 쓰는 것'이 아니라 '에이전트 팀을 어떻게 구성하느냐'이며, gstack이나 Harness 같은 도구들이 이러한 구조화된 접근법을 실제로 구현하고 있습니다. 책임이 명확한 역할 분리 구조에서는 안정성과 재현성이 크게 향상되며, 병렬화와 반복 실행을 통해 토큰이 생산 단위로 자연스럽게 확장됩니다. 궁극적으로 AI 시대의 핵심 역량은 복잡한 작업을 제어 가능한 에이전트 시스템으로 설계하고 조율하는 능력입니다.

---

## 🤖 AI 에이전트 & 자동화 `#agents`
- [ ] **gstack - Claude Code로 만드는 가상 엔지니어링 팀**
  YC CEO가 만든 AI 개발 팩토리, 한 명이 20명 팀처럼 일하는 역할별 에이전트 슬래시 커맨드 자동화
  url: https://news.hada.io/topic?id=27756
- [ ] **Harness — Claude Code 에이전트 팀 & 스킬 아키텍트 플러그인**
  한 줄 명령으로 도메인별 전문 에이전트 팀 자동 설계, 6가지 팀 아키텍처 패턴 지원
  url: https://news.hada.io/topic?id=27969
- [x] **gitagent - AI 에이전트 정의 및 관리를 위한 Git 기반 표준**
  agent.yaml로 에이전트 정의, Git으로 버전관리·협업, PR로 인간 검토하는 워크플로우
  url: https://news.hada.io/topic?id=27859
- [x] **Chops - AI 에이전트 스킬을 한 곳에서 관리하는 macOS 앱**
  여러 에이전트의 스킬 파일 통합 관리, 보일러플레이트 자동생성과 실시간 감지
  url: https://news.hada.io/topic?id=27880
- [x] **understudy - 시연으로 배우는 로컬 데스크톱 에이전트**
  사용자 시연으로 의도 학습, GUI·브라우저·쉘 통합 제어하는 개인용 RPA
  url: https://news.hada.io/topic?id=27902
- [x] **cq - 에이전트를 위한 Stack Overflow**
  AI 에이전트들이 지식 공유해 동일 실수 반복 방지하는 지식 커먼즈
  url: https://news.hada.io/topic?id=27855

## 🔧 Claude Code & 개발 도구 `#claudecode`
- [x] **Claude Code 치트시트**
  단축키·슬래시 명령·스킬·워크플로우·설정 A4 한장 요약
  url: https://news.hada.io/topic?id=27806
- [x] **Claude Code로 생산성을 높이는 방법**
  /git-pr 자동화·초고속 빌드·병렬 워크트리로 반복 작업 제거
  url: https://news.hada.io/topic?id=27817
- [x] **.claude/ 폴더 구조 분석**
  CLAUDE.md·commands·skills·agents·settings.json 전체 구조 레퍼런스
  url: https://news.hada.io/topic?id=27941
- [x] **Claude, 컴퓨터의 마우스·키보드·화면 직접 제어 기능 출시**
  Claude Code Desktop에서 실제 컴퓨터 제어, GUI 자동화 지원
  url: https://news.hada.io/topic?id=27794
- [ ] **Impeccable - AI 하네스가 더 디자인 잘하게 만들기**
  LLM 디자인 안티패턴 제거, 감사·정렬·정제 워크플로우 제공
  url: https://news.hada.io/topic?id=27750

## 🧠 AI 모델 & 연구 `#models`
- [ ] **장기 실행 애플리케이션 개발을 위한 하네스 설계**
  Anthropic 공개, 생성기·평가기·플래너 3-에이전트 구조로 장기 자율 코딩 지원
  url: https://news.hada.io/topic?id=27863
- [ ] **구글 TurboQuant: 극한 압축으로 AI 효율성을 재정의하다**
  KV 캐시 3비트 무손실 압축, 메모리 6배·속도 8배 향상 양자화
  url: https://news.hada.io/topic?id=27867

## 🏢 AI 산업 & 비즈니스 `#industry`
- [x] **Codex 활용 사례 모음**
  OpenAI 공개, PR 리뷰·Figma-to-code 등 12가지 실무 유즈케이스
  url: https://news.hada.io/topic?id=27938
- [x] **데이터만이 유일한 해자다**
  실세계 데이터 수집·정제가 소프트웨어 기업의 유일한 경쟁력
  url: https://news.hada.io/topic?id=27800
- [x] **소프트웨어에 남은 길은 두 가지뿐**
  a16z, AI로 성장률 10%p 올리거나 영업이익률 40~50% 재구축 양자택일
  url: https://news.hada.io/topic?id=27905
- [ ] **그래서, AI 앱들은 다 어디에 있나요?**
  PyPI 데이터, AI 생산성 향상 주장과 달리 패키지 생성 속도 무변화
  url: https://news.hada.io/topic?id=27834
- [x] **SaaS 는 죽지 않았다**
  LinkedIn 공동창업자, 경쟁력은 도메인 맞춤 AI 시스템과 새로운 가격 구조로 이동
  url: https://news.hada.io/topic?id=27918
- [ ] **Vercel의 json-render - Generative UI 프레임워크**
  AI가 제약된 JSON 구조 생성해 즉시 렌더링, 안정성과 예측 가능성 확보
  url: https://news.hada.io/topic?id=27933
- [x] **Codex 플러그인 출시 — Slack, Figma, Notion, Gmail 등 주요 도구와 즉시 연동**
  OpenAI Codex, 플러그인 구조로 팀 워크플로우 실행 엔진으로 확장
  url: https://news.hada.io/topic?id=27942
- [ ] **emulate - 로컬에서 GitHub·Vercel·Google API를 완전 복제해 실행하기**
  Vercel 공개, 프로덕션 동일 상태·응답으로 로컬 API 에뮬레이션
  url: https://news.hada.io/topic?id=27802
- [x] **Expect - 에이전트가 실제 브라우저에서 코드를 테스트하는 도구**
  코드 변경 감지해 실제 브라우저에서 자동 테스트 생성·실행
  url: https://news.hada.io/topic?id=27865

## 💭 개발 문화 & 의견 `#culture`
- [x] **하루에 코딩은 4시간이 한계인 이유**
  개발자 딥 워크 한계 3~4시간, 인터럽션이 플로 상태 파괴하는 구조의 문제
  url: https://news.hada.io/topic?id=27906
- [x] **코드의 죽음은 과장되었다**
  Val Town 개발자, 추상화 복잡성 정복이 코드의 진정한 가치
  url: https://news.hada.io/topic?id=27772
- [x] **AI 이야기, 이제 지겹지 않나요?**
  AI 워크플로 자랑에서 본질로, 도구로 무엇을 만들 것인가로 초점 전환
  url: https://news.hada.io/topic?id=27827
- [x] **여백 만들기: 덜 하는 것이 위대함을 만드는 방법**
  WP Engine 창업자, 집중은 더 많이 하는 게 아니라 대부분 일 멈추기
  url: https://news.hada.io/topic?id=27770
- [x] **속도를 늦춰야 하는 이유**
  AI 에이전트 속도 증가가 품질관리·설계 통제권 상실의 트레이드오프 야기
  url: https://news.hada.io/topic?id=27861
- [x] **속도를 늦춰야 빨라진다**
  실행 전 느린 사고 단계가 가장 큰 레버리지, AI는 숙고 도구로 활용
  url: https://news.hada.io/topic?id=27858
- [ ] **세 가지 유형의 나쁜 매니저**
  Rands, 실리콘밸리 나쁜 매니저 3유형: 예술가·독재자·침묵자
  url: https://news.hada.io/topic?id=27771
- [x] **추정은 왜 실패하는가 (그리고 왜 여전히 필요한가)**
  소프트웨어 추정, 불확실성 속 기대치 정렬 구조화된 대화의 가치
  url: https://news.hada.io/topic?id=27932
- [ ] **온보딩은 거래(Transaction)다**
  온보딩 길이보다 주의력·의도 활용, 이유 명시로 신뢰 구축
  url: https://news.hada.io/topic?id=27897
- [ ] **평균 사용자를 위해 디자인하지 마라**
  사용자 분포 멱법칙, P95는 P50 대비 17배 더 많은 요청
  url: https://news.hada.io/topic?id=27935

## 🔐 보안 `#security`
- [x] **Windows 네이티브 앱 개발이 엉망인 이유**
  프레임워크 단절·Win32 의존, P/Invoke로 구식 API 호출 강요
  url: https://news.hada.io/topic?id=27757

## 🇰🇷 국내 프로젝트 (Show GN) `#showgn`
- [ ] **Harness — Claude Code 에이전트 팀 & 스킬 아키텍트 플러그인**
  카카오 AI Native 전략 팀 황민호, 6가지 팀 아키텍처 패턴 메타 스킬
  url: https://news.hada.io/topic?id=27969
- [x] **GitLab 공동창업자, 파운더 모드로 직접 자신의 암 치료를 설계하다**
  Sid Sijbrandij, 25TB 의료 데이터 공개해 AI 기반 맞춤 치료 병렬 진행
  url: https://news.hada.io/topic?id=27961
