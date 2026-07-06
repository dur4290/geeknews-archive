# GeekNews Weekly #354 리뷰
> 기간: 2026-04-13 ~ 2026-04-19 | 생성: 2026-04-20 | 파일ID: 2026-W16

## 승인 방법
포함할 항목의 `- [ ]` → `- [x]` 로 변경 후 저장
그 후 Claude Code에서 `/mail-approve` 실행

---

## 📝 이번 주 뉴스 요약
**검색에서 에이전트로: AEO 시대의 문서 최적화**
SEO가 제대로 자리잡기 전에 검색 생태계 자체가 AI 에이전트 중심으로 급변하고 있습니다. AI가 문서를 소비하는 방식은 사람과 근본적으로 다른데, 스크롤·클릭·체류 시간 같은 신호가 거의 남지 않고 토큰 제한으로 긴 문서가 잘려나갑니다. 따라서 AEO(Agentic Engine Optimization)라는 새로운 과제가 떠올랐습니다. Addy Osmani의 AEO 가이드는 robots.txt → llms.txt → agent-permissions.json → MCP Server Card로 이어지는 '에이전트 스택'을 체계적으로 정리했고, Cloudflare의 'Agent-Ready' 도구는 실무자들이 어디서 시작할지 구체적으로 알려줍니다. 20년 쌓인 SEO 노하우와 달리 에이전트 스펙은 매달 변하므로, 기준을 잡고 점진적으로 대응하는 유연성이 핵심입니다.

---

## 🤖 AI 에이전트 & 자동화 `#agents`
- [x] **에이전틱 엔진 최적화 (AEO)**
  AI 에이전트 발견성을 위한 문서 구조 최적화 가이드
  url: https://news.hada.io/topic?id=28588
- [ ] **Is Your Site Agent-Ready? - 당신의 사이트는 에이전트에 대응하나요?**
  에이전트 대응도를 평가하고 수정 프롬프트를 제공하는 Cloudflare 도구
  url: https://news.hada.io/topic?id=28650
- [x] **Happy - Codex 및 Claude Code용 모바일/웹 클라이언트**
  휴대폰에서 코딩 에이전트를 원격 모니터링하고 조작하는 도구
  url: https://news.hada.io/topic?id=28500
- [ ] **OpenHarness - 개인 에이전트 Ohmo를 내장한 오픈 에이전트 하네스**
  LLM을 실제 에이전트로 만드는 오픈소스 하네스, 다양한 채팅 플랫폼 지원
  url: https://news.hada.io/topic?id=28531
- [ ] **pi-autoresearch: Karpathy의 "AI 자율 실험" 아이디어를 범용화한 오픈소스**
  측정 가능한 최적화 문제를 에이전트가 스스로 실험하고 로깅하는 시스템
  url: https://news.hada.io/topic?id=28600
- [x] **거의 모든 것을 위한 Codex**
  컴퓨터 제어·플러그인·장기 스케줄링으로 전체 개발 워크플로우 자동화
  url: https://news.hada.io/topic?id=28614
- [x] **Claude Code Routines 공개**
  클라우드 기반 자동 실행 기능으로 장기 워크플로우 자동화
  url: https://news.hada.io/topic?id=28533
- [x] **Gemma Gem - 브라우저에서 Google Gemma 4 모델을 완전 온디바이스로 실행하는 Chrome 확장**
  WebGPU로 브라우저 내 로컬 에이전트 실행, 클라우드 전송 없음
  url: https://news.hada.io/topic?id=28645
- [x] **Agents SDK의 차세대 진화**
  MCP·skills·AGENTS.md 통합, 다양한 샌드박스 제공업체 네이티브 지원
  url: https://news.hada.io/topic?id=28578

## 🔧 Claude Code & 개발 도구 `#claudecode`
- [x] **Claude Code(~100시간) vs. Codex(~20시간) 비교**
  실무 프로젝트에서 두 에이전트의 속도·완성도·지시 따르기 비교 분석
  url: https://news.hada.io/topic?id=28538
- [x] **Anthropic, Claude Design 공개**
  텍스트 설명으로 UI/마케팅 자료 생성, 디자인 시스템 자동 구축
  url: https://news.hada.io/topic?id=28640
- [x] **claude opus 4.7을 소개합니다**
  기존 Opus의 점진적 개선, 사이버보안 기능 단계적 테스트 추가
  url: https://news.hada.io/topic?id=28602

## 🧠 AI 모델 & 연구 `#models`
- [x] **Gemma 4를 Codex CLI에서 로컬 모델로 실행하기**
  Gemma 4의 도구 호출 86.4% 성공률로 로컬 구동 실전 기록
  url: https://news.hada.io/topic?id=28510
- [ ] **VoxCPM2 - 실제 음성과 비슷한 음성 복제 가능한 다국어 음성 합성 오픈소스**
  30개 언어 지원, 자연어로 음성 캐릭터 생성, 상용 제한 없음
  url: https://news.hada.io/topic?id=28527
- [x] **SuperGemma4 - 구글 Gemma 4 26B의 비검열/속도개선/양자화 모델**
  4비트 양자화로 13GB, 코드 생성·한국어 성능 원본 초과
  url: https://news.hada.io/topic?id=28584
- [ ] **Qwen3.6-35B-A3B: Agentic Coding Power, Now Open to All**
  MoE 모델로 활성 파라미터 30억만 사용, SWE-bench 73.4점
  url: https://news.hada.io/topic?id=28609
- [ ] **Qwen3.5 모델 양자화, 왜 커뮤니티 버전은 성능이 떨어지나**
  선형 어텐션 레이어 정보 손실 민감도가 출력층의 120배 규명
  url: https://news.hada.io/topic?id=28658

## 🏢 AI 산업 & 비즈니스 `#industry`
- [ ] **Thoughtworks Technology Radar, Volume 34 공개**
  에이전트 시대 기술 평가, 코딩 에이전트 보안, 코드베이스 인지 부채
  url: https://news.hada.io/topic?id=28625
- [x] **월 $20 스택으로 월매출 $10K 회사를 여러 개 운영하는 법**
  VPS·Go·SQLite·로컬 GPU로 월 5달러에 월매출 10K 사업 운영
  url: https://news.hada.io/topic?id=28457
- [ ] **구글, "백버튼 하이재킹"을 스팸으로 지정**
  뒤로 가기 악용 광고를 6월부터 공식 스팸으로 처리
  url: https://news.hada.io/topic?id=28530
- [ ] **IPv6 트래픽이 50%를 돌파**
  구글 접속 기준 전 세계 IPv6 첫 과반 달성, 한국은 21%
  url: https://news.hada.io/topic?id=28596

## 💭 개발 문화 & 의견 `#culture`
- [ ] **홈랩 2026 현황: 셀프호스팅 취미의 진화**
  월 7유로로 미디어·AI·사진 돌리는 NUC+Hetzner 셀프호스팅
  url: https://news.hada.io/topic?id=28509
- [x] **AI 코딩 시대, 성장이 멈추는 개발자의 뇌에서 일어나는 일**
  AI 사용으로 신경 효율성 떨어져 학습 정체 현상, 인지과학 분석
  url: https://news.hada.io/topic?id=28653
- [ ] **로컬 LLM 생태계에는 Ollama가 필요하지 않다**
  llama.cpp 크레딧 누락, 성능 저하, 사용자 오도 등 신랄한 비판
  url: https://news.hada.io/topic?id=28622
- [x] **데이터베이스가 정말 필요한가**
  파일 시스템부터 SQLite까지 4가지 방식 벤치마크, 초기제품은 SQLite 충분
  url: https://news.hada.io/topic?id=28587
- [ ] **애자일에 작별을 고하며**
  애자일 개념이 1970년대 것, LLM 시대는 포괄적 문서와 소프트웨어 중시
  url: https://news.hada.io/topic?id=28583
- [ ] **pip install torch 한 줄로 끝낸다 — Python 패키징의 오랜 숙제, 드디어 풀리나**
  Wheel Next로 최신 CPU 명령어 활용, NVIDIA·Astral·Quansight 연합
  url: https://news.hada.io/topic?id=28490
- [x] **우리가 좋아하는 모든 것은 심리전(psyop)인가?**
  TikTok 가짜 트렌드, 자동 댓글 조작, 조직적 캠페인의 현실
  url: https://news.hada.io/topic?id=28642
- [ ] **프런티어의 종말**
  프런티어 AI 독점의 신식민지적 가치 추출, 오픈소스 3~12개월 추격
  url: https://news.hada.io/topic?id=28470
- [x] **몇 달 동안 손으로 코딩하는 중이에요**
  AI 대신 손 코딩으로 쓰면서 동시에 배우는 경험 공유
  url: https://news.hada.io/topic?id=28663

## 🔐 보안 `#security`
- [x] **바이브 코딩으로 만든 환자 관리 앱의 보안 참사**
  AI 생성 환자 관리 시스템이 접근제어·암호화 없이 노출된 사례
  url: https://news.hada.io/topic?id=28541
- [ ] **Zerobox - OpenAI Codex 런타임 기반의 경량 크로스 플랫폼 프로세스 샌드박싱 도구**
  Deny-by-default로 AI 생성 코드 실행의 파일·네트워크 접근 차단
  url: https://news.hada.io/topic?id=28620

## 🇰🇷 국내 프로젝트 (Show GN) `#showgn`
- [ ] **BOJ 서비스 종료**
  백준 온라인 저지, 16년 1인 운영 끝내고 4월 28일 종료
  url: https://news.hada.io/topic?id=28550
- [ ] **damn-my-slow-kt - KT 인터넷 SLA 미달 자동 측정 & 요금 감면 신청 도구**
  KT 계약 속도 50% 미달 시 자동 측정·이의신청 오픈소스
  url: https://news.hada.io/topic?id=28511
- [ ] **pgmicro - SQLite 기반으로 만든 인-프로세스 PostgreSQL**
  PostgreSQL 파서 + Turso SQLite로 임베디드 인메모리 DB
  url: https://news.hada.io/topic?id=28464
- [x] **openai-oauth - ChatGPT 계정으로 OpenAI API를 무료로 사용하기**
  ChatGPT OAuth 토큰으로 API 크레딧 없이 사용 가능
  url: https://news.hada.io/topic?id=28569
- [ ] **Current — 읽지 않은 글의 죄책감 없이 흘러가는 RSS 리더**
  반감기 설정으로 읽지 않은 글 죄책감 구조적 해결
  url: https://news.hada.io/topic?id=28543
