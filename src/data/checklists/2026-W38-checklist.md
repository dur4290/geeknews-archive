# GeekNews Weekly #376 리뷰
> 기간: 2026-09-14 ~ 2026-09-20 | 생성: 2026-09-21 | 파일ID: 2026-W38

## 승인 방법
포함할 항목의 `- [ ]` → `- [x]` 로 변경 후 저장
그 후 `/geeknews` 실행

---

## 📝 이번 주 뉴스 요약
**판단을 빠르고 저렴하게: Jev와 구조화된 출력의 시대**
이번 주 에디토리얼은 LLM의 새로운 활용 패턴을 다룹니다. 기존 생성형 LLM은 대화 형태의 응답을 생성하는 데 최적화되어 있지만, 실제 업무에서는 미리 정한 선택지 중에서 고르는 판단 작업이 많습니다. 이러한 분류/평가/검증 작업을 위해 문자열 생성 대신 선택지별 확률을 반환하는 Jev 같은 모델이 등장했습니다. Jev는 입력 가격이 저렴하고 출력은 무료이며, 약 90% 확률을 부여한 판단들이 실제로도 약 90%가 맞도록 학습된 '보정된 확률'을 제공합니다. 실제 사용 사례에서 777개 판단을 0.7초 내에 처리했으며, 기존 추론 모델보다 약 25배 빠릅니다. 다만 선택지의 순서나 무관한 옵션 추가 시 확률이 변하는 현상도 확인되었습니다. OpenSpec, dbt Charts 같은 도구와 Jevlike, Laya 같은 오픈소스 구현도 함께 등장하여, 개발자들이 이 패턴을 직접 실험할 수 있는 환경이 빠르게 확산되고 있습니다. 에디터는 서비스에서 틀렸을 때의 손해를 고려하여 어떤 판단은 빠르게 처리하고 어떤 판단은 더 강한 모델이나 사람에게 넘길지 구분하는 것부터 시작할 것을 제안합니다.

---

## 🤖 AI 에이전트 & 자동화 `#agents`
- [x] **코딩 에이전트 하네스 설계에 관한 실증 연구**
  4개 모델, 176가지 설정 비교로 에이전트 하네스 최적화 방법 연구
  url: https://news.hada.io/topic?id=33905
- [x] **에이전트형 AI를 위한 데이터 준비하기**
  에이전트를 위한 데이터 품질 관리: 데이터 계약과 공통 정의 필요
  url: https://news.hada.io/topic?id=33657
- [ ] **OpenSpec - 코딩 에이전트와 구현 전에 명세를 맞추는 개발 도구**
  OpenSpec으로 명세를 먼저 정하고 에이전트가 구현하도록 관리
  url: https://news.hada.io/topic?id=33841
- [x] **생각을 멈춰도 되는 때는 오지 않는다**
  AI를 사람 중계 역할로만 두지 말고 품질 검증 능력 갖춰야 함
  url: https://news.hada.io/topic?id=33909

## 🔧 Claude Code & 개발 도구 `#claudecode`
- [x] **Claude Code, 이제 AGENTS.md도 지원**
  Claude Code가 AGENTS.md 지원, Mods 체계로 하네스 커스터마이징 가능
  url: https://news.hada.io/topic?id=33925

## 🧠 AI 모델 & 연구 `#models`
- [ ] **OpenArch - LLM 아키텍처를 모델별 한 파일로 구현한 PyTorch 코드 모음**
  OpenArch: LLM 아키텍처를 PyTorch 한 파일로 읽기 쉽게 구현
  url: https://news.hada.io/topic?id=33700
- [x] **Jev - 문장 대신 판단과 확률을 반환하는 AI 모델**
  Jev: 선택지별 확률 반환, 빠르고 저렴한 판단형 AI 모델
  url: https://news.hada.io/topic?id=33751
- [x] **Jev의 아키텍처를 파헤치다**
  Jev의 내부 구조를 1만 API 호출로 분석한 역공학 연구
  url: https://news.hada.io/topic?id=33930
- [x] **Jevlike - 문장 대신 선택지별 확률을 반환하는 Jev 방식의 오픈소스 모델**
  Jevlike: 기존 모델에 점수 계산 부분만 추가해 확률 반환 가능
  url: https://news.hada.io/topic?id=33854
- [ ] **Laya - 직접 실행하고 학습할 수 있는 Jev의 오픈소스 대안**
  Laya: Jev 방식의 완전 오픈소스 모델, 논문과 가중치 공개
  url: https://news.hada.io/topic?id=33944
- [ ] **GPT Image 2.5 프롬프트 가이드 - 무엇을 바꾸고 무엇을 유지할까**
  GPT Image 2.5 프롬프트 가이드: Flare/Sunburst 모델 선택과 유지 조건
  url: https://news.hada.io/topic?id=33919
- [ ] **Qwen3.8-Omni-Flash 공개, 시청각 이해에서 작업 실행까지**
  Qwen3.8-Omni-Flash: 영상 이해에서 에이전트 스킬 생성까지 지원
  url: https://news.hada.io/topic?id=33884

## 🏢 AI 산업 & 비즈니스 `#industry`
- [x] **스타트업을 강력하게 만드는 법**
  Paul Graham: 스타트업 강화는 고객의 예상 밖 사용에서 찾을 수 있음
  url: https://news.hada.io/topic?id=33659
- [ ] **dbt Charts - AI와 대화로 만들고 Git으로 관리하는 대시보드**
  dbt Charts: AI와 SQL/YAML로 관리 가능한 대시보드 개발
  url: https://news.hada.io/topic?id=33723
- [x] **Cloudflare Quick Tunnels - 계정 없이 로컬 서버를 인터넷에 공유하기**
  Cloudflare Quick Tunnels: 계정 없이 로컬 서버를 인터넷에 공유
  url: https://news.hada.io/topic?id=33904
- [ ] **Apple Reference Image - 실제 카메라로 찍은 사진임을 검증하는 기술**
  Apple Reference Image: 센서 서명으로 카메라 원본 사진 검증
  url: https://news.hada.io/topic?id=33773
- [ ] **Java 27 출시**
  Java 27 정식 출시: G1 GC 기본화, 컴팩트 객체 헤더, 양자내성 지원
  url: https://news.hada.io/topic?id=33740

## 💭 개발 문화 & 의견 `#culture`
- [x] **효과적인 소프트웨어 설계 문서 작성법**
  설계 문서는 되돌리기 어려운 결정부터: 비용 기준 판단법
  url: https://news.hada.io/topic?id=33696
- [x] **Diagram Design - AI가 만드는 다이어그램에 디자인 규칙을 더하는 스킬**
  AI 다이어그램에 디자인 규칙 입혀 정보 위계와 가독성 개선
  url: https://news.hada.io/topic?id=33664
- [ ] **여러분의 사고방식에 가장 큰 영향을 준 블로그 글은 무엇인가요?**
  잘못된 추상화와 불필요한 복잡성을 경계하는 블로그 글 모음
  url: https://news.hada.io/topic?id=33714
- [ ] **아직도 코드를 읽나요?**
  AI 시대, 코드 읽기는 사라지지 않음: 유지보수 능력이 가르는 기준
  url: https://news.hada.io/topic?id=33735
- [x] **LLM 시대의 프로그래밍 학습**
  LLM으로 학습할 때 자신이 일하는 계층의 위/아래를 이해해야 함
  url: https://news.hada.io/topic?id=33794
- [x] **바이브 코딩으로 만든 대시보드가 형편없어 보이는 10가지 이유**
  바이브 코딩 대시보드가 형편없는 이유: 사용자 관점 설계 부재
  url: https://news.hada.io/topic?id=33651
- [ ] **작은 프로그래밍 요령들**
  Python 부터 atuin까지: 사전 지식 없이 바로 쓸 수 있는 작은 요령
  url: https://news.hada.io/topic?id=33778
- [ ] **모두가 제정신을 잃었다**
  AI 대응에 75% 시간, 실제 문제 해결 미루는 조직 문화 비판
  url: https://news.hada.io/topic?id=33862
- [ ] **발표가 좋았다면 발표자에게 말해주세요**
  좋은 발표는 직접 피드백 전해주기: 발표자를 응원하는 문화
  url: https://news.hada.io/topic?id=33800
- [ ] **다른 사람들의 일까지 하기**
  담당 경계 사이 일을 끝내는 사람이 조직을 앞으로 움직임
  url: https://news.hada.io/topic?id=33793
- [ ] **엔지니어링 매니저의 네 가지 핵심 책임 영역**
  엔지니어링 매니저: 사람/기술/제품/실행 영역의 우선순위 조정
  url: https://news.hada.io/topic?id=33656
- [ ] **공포의 전염**
  공포의 전염: 근거 없는 AI 멸종 주장의 위험성 지적
  url: https://news.hada.io/topic?id=33667
- [x] **LLM과 함께 글 쓰는 법**
  LLM과 글쓰기: 제안 거절하고 문제만 지적하며 스스로 개선
  url: https://news.hada.io/topic?id=33887
- [ ] **마틴 파울러: 나는 LLM이 마음에 들지 않는다**
  마틴 파울러: LLM 유용성은 인정하되, 확신한 거짓이 불편함
  url: https://news.hada.io/topic?id=33853
- [ ] **기술 분야에서 여전히 가슴 뛰게 하는 것은 무엇인가요?**
  기술 분야의 설렘: 1990년대 같은 설렘을 다시 찾는 질문
  url: https://news.hada.io/topic?id=33917

## 🔐 보안 `#security`
- [ ] **PS5 Linux 핵심 개발자 하차: “LLM으로 자신도 이해하지 못하는 코드를 짜는 초보자들뿐”**
  PS5 Linux 개발자 하차: 보안 신고 약속 위반과 AI 코드 품질 논쟁
  url: https://news.hada.io/topic?id=33792
- [ ] **백업은 단순하지 않다**
  백업은 단순하지 않음: 미러링/DB/권한까지 고려한 복원 검증 필수
  url: https://news.hada.io/topic?id=33827
