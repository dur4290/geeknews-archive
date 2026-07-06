# GeekNews Weekly #353 리뷰
> 기간: 2026-04-06 ~ 2026-04-12 | 생성: 2026-04-13 | 파일ID: 2026-W15

## 승인 방법
포함할 항목의 `- [ ]` → `- [x]` 로 변경 후 저장
그 후 Claude Code에서 `/mail-approve` 실행

---

## 📝 이번 주 뉴스 요약
**남의 하네스를 입지 말고, 내 워크플로에 맞게 설계하라**
2022년 프롬프트 엔지니어링에서 2026년 하네스 엔지니어링으로 진화하는 4년의 패러다임 전환을 추적합니다. 핵심은 각 시대가 이전 시대를 대체하지 않고 포함한다는 점입니다. 최근 유명 개발자들이 마크다운 기반 에이전트 스킬셋을 공개하면서 'agent-skills 공유 붐'이 일고 있지만, 이를 무조건 따라가는 것은 피해야 합니다. Vercel의 사례처럼 더 많은 스킬이 항상 더 좋은 결과를 가져오지는 않기 때문입니다. 중요한 것은 쏟아지는 패턴을 에이전트에게 분석시켜 자신의 작업 흐름에 맞는 3~4개 스킬을 선택하고, 이를 프로젝트 컨벤션에 맞게 수정하는 '진정한 하네스 엔지니어링'입니다. Anthropic의 'Managed Agents 확장하기' 글이 보여주듯, 하네스가 인코딩하는 가정은 모델 발전에 따라 낡아지므로, 세션·하네스·샌드박스를 독립적으로 교체할 수 있게 설계해야 합니다. 이 변화의 시대에 정말 필요한 것은 더 많은 도구가 아니라 '어떤 도구가 내 문제를 푸는지 판단할 수 있는 안목'입니다.

---

## 🤖 AI 에이전트 & 자동화 `#agents`
- [x] **프롬프트에서 하네스까지 - AI 에이전틱 패턴 4년의 기록**
  2022~2026년 프롬프트→컨텍스트→하네스 엔지니어링 진화 과정 기록
  url: https://news.hada.io/topic?id=28301
- [x] **agent-skills - AI 코딩 에이전트를 위한 프로덕션급 엔지니어링 스킬 모음**
  Google AI 디렉터가 공개한 19개 구조화 스킬 모음, /spec→/ship까지
  url: https://news.hada.io/topic?id=28294
- [x] **코딩 에이전트의 구성 요소**
  LLM, 추론 모델, 하네스 6가지 구성 요소 체계적 분해
  url: https://news.hada.io/topic?id=28232
- [ ] **코드 에이전트 오케스트라 - 멀티 에이전트 코딩을 제대로 작동시키는 법**
  컨덕터→오케스트레이터 모델 전환, 서브에이전트·팀·계층적 위임
  url: https://news.hada.io/topic?id=28303
- [ ] **rtk - LLM 토큰 소비를 60~90% 줄여주는 CLI 프록시**
  CLI 명령 출력 필터링으로 토큰 60~90% 절감
  url: https://news.hada.io/topic?id=28245
- [x] **strix - 앱의 취약점을 찾아 수정하는 오픈소스 AI 해커**
  다중 에이전트 협력으로 취약점 발견·검증하는 보안 도구
  url: https://news.hada.io/topic?id=28364
- [ ] **Claude Code, 에이전트가 필요할 때 깨워주는 Monitor Tool 기능 도입**
  백그라운드 프로세스로 로그 추적, 이벤트 발생 시 자동 개입
  url: https://news.hada.io/topic?id=28376
- [ ] **Meta의 HyperAgents — 에이전트가 스스로 자신의 하네스를 설계할 때**
  에이전트가 스스로 구성 요소 설계, 하네스 모듈과 매핑
  url: https://news.hada.io/topic?id=28430
- [x] **나는 여전히 Skills보다 MCP를 선호한다**
  Skills는 지식, MCP는 연결 계층으로 구분해야 함
  url: https://news.hada.io/topic?id=28404

## 🔧 Claude Code & 개발 도구 `#claudecode`
- [x] **Advisor 전략: Opus를 조언자로 활용해 Sonnet의 지능을 끌어올리기**
  Opus 조언자+Sonnet 실행자 조합으로 비용 85% 절감, 품질↑
  url: https://news.hada.io/topic?id=28370
- [x] **Claude Code, 2월 업데이트 이후 복잡한 엔지니어링 작업에서 사용 불가 수준으로 품질 저하**
  Extended Thinking 토큰 73% 감축, 품질 저하 분석
  url: https://news.hada.io/topic?id=28272
- [x] **Caveman - 원시인 말투로 Claude/Codex 토큰 절약하기**
  군더더기 제거로 출력 토큰 65~75% 절감 스킬
  url: https://news.hada.io/topic?id=28238
- [x] **Claude Managed Agents - 프로덕션 속도를 10배 더 빠르게**
  샌드박싱·자격증명·권한 관리를 API가 처리
  url: https://news.hada.io/topic?id=28326
- [x] **LM Studio Headless CLI와 Claude Code로 로컬에서 Google Gemma 4 실행하기**
  완전 오프라인 코드 어시스턴트 구축 가이드
  url: https://news.hada.io/topic?id=28265
- [ ] **월 100달러 Claude Code 예산을 Zed와 OpenRouter로 재배분하기**
  Zed($10) + OpenRouter($90)로 더 유연한 구성
  url: https://news.hada.io/topic?id=28396
- [ ] **Shopify AI Toolkit - 클로드 코드/코덱스로 스토어를 관리하세요**
  자연어 명령으로 스토어 관리, 자동 업데이트 지원
  url: https://news.hada.io/topic?id=28378

## 🧠 AI 모델 & 연구 `#models`
- [ ] **작은 언어 모델 GuppyLM으로 언어 모델의 작동 원리를 직접 체험하기**
  900만 파라미터 모델로 5분 학습, 기본 Transformer로 이해
  url: https://news.hada.io/topic?id=28270
- [x] **Google AI Edge Gallery - 완전 오프라인 LLM 갤러리 앱 오픈소스**
  Gemma 4, 인터넷 없이 채팅·인식·음성 전사 지원
  url: https://news.hada.io/topic?id=28242
- [ ] **Claude Mythos Preview의 사이버보안 능력 평가**
  27년 미발견 취약점 발견, Firefox 익스플로잇 181회 성공
  url: https://news.hada.io/topic?id=28320
- [ ] **GLM-5.1: 장기적 과제 수행을 향한 진화**
  장기 에이전틱 작업 특화, 반복 실행으로 성능 자동 향상
  url: https://news.hada.io/topic?id=28296

## 🏢 AI 산업 & 비즈니스 `#industry`
- [x] **Awesome Design.MD - 유명 웹사이트 디자인 시스템을 내 사이트에 적용하기**
  60개 서비스 디자인 시스템을 마크다운 하나로 패키징
  url: https://news.hada.io/topic?id=28246
- [x] **GBrain — 오픈소스 개인 지식 베이스**
  Karpathy LLM Wiki 방식의 개인 지식 관리, MCP 20개 내장
  url: https://news.hada.io/topic?id=28323
- [ ] **AI 기반 Google Finance, 한국 포함 100개국 이상으로 글로벌 확장**
  Gemini 기반 자연어 금융 질의, 기술 지표 추가
  url: https://news.hada.io/topic?id=28336
- [ ] **SQLite로 실제 쇼핑몰을 운영하며 배운 것들**
  AI 에이전트 운영 쇼핑몰, 절차적 규칙으로 배포 안정화
  url: https://news.hada.io/topic?id=28377
- [ ] **Ruff·uv 만든 Astral이 공개한 오픈소스 보안 전략 전모**
  CI/CD 보안 실천 방식, 공급망 해킹 대응 전략
  url: https://news.hada.io/topic?id=28340
- [ ] **S3 Files와 변화하는 S3의 모습**
  S3를 NFS로 마운트, 파일 시스템처럼 동기화 지원
  url: https://news.hada.io/topic?id=28305

## 💭 개발 문화 & 의견 `#culture`
- [x] **코드를 읽기 전에 실행하는 Git 명령들**
  Git 이력만으로 프로젝트 건강 상태 진단, 에이전트에게 유용
  url: https://news.hada.io/topic?id=28324
- [x] **바이브 코딩 숭배는 미쳐있다**
  BitTorrent 창시자의 비판, 구조 설계 필요성 강조
  url: https://news.hada.io/topic?id=28275
- [x] **기계는 괜찮아요. 나는 우리가 걱정됩니다.**
  AI 도구로 우회되는 인간의 학습 과정, 시스템 설계 문제
  url: https://news.hada.io/topic?id=28237
- [x] **8년의 갈망, 3개월의 완성 - AI가 바꾼 사이드 프로젝트의 공식**
  SQLite 도구 개발 경험담, 설계·검토 직접 수행 중요성
  url: https://news.hada.io/topic?id=28239
- [ ] **Sam Altman이 우리의 미래를 통제할지도 모른다 – 그를 신뢰할 수 있을까?**
  뉴요커의 심층 분석, 권력 구조·2023년 해임 사건 추적
  url: https://news.hada.io/topic?id=28273

## 🔐 보안 `#security`
- [ ] **고용주들이 개인 데이터로 지원자가 수락할 최저 연봉을 계산하는 '감시 임금' 시대**
  개인 데이터로 급전 이력·신용 기반 최저연봉 계산
  url: https://news.hada.io/topic?id=28276
- [ ] **macOS에 숨어있던 49일짜리 시한폭탄 — TCP 네트워킹이 완전히 멈추는 커널 버그 전말**
  tcp_now 32비트 오버플로우, 49일 후 TCP 연결 불가
  url: https://news.hada.io/topic?id=28312

## 🇰🇷 국내 프로젝트 (Show GN) `#showgn`
- [ ] **webreel - 브라우저 데모를 MP4 영상으로 자동 녹화하는 CLI 도구**
  Vercel Labs, JSON으로 데모 영상 자동 녹화·합성
  url: https://news.hada.io/topic?id=28335
- [ ] **닌텐도 Wii에서 Mac OS X 10.0(Cheetah) 구동 성공**
  10년 포팅 프로젝트, PowerPC 호환성 활용한 성과
  url: https://news.hada.io/topic?id=28325
