# GeekNews Weekly #359 리뷰
> 기간: 2026-05-18 ~ 2026-05-24 | 생성: 2026-05-26 | 파일ID: 2026-W21

## 승인 방법
포함할 항목의 `- [ ]` → `- [x]` 로 변경 후 저장
그 후 Claude Code에서 `/mail-approve` 실행

---

## 📝 이번 주 뉴스 요약
**구글 검색의 변화: 웹의 정문에서 AI 중심 인터페이스로**
Google I/O 2026에서 구글은 25년 이상 유지된 검색창을 AI 중심으로 개편한다고 발표했습니다. 기존 파란 링크 중심의 검색 결과에서 AI가 먼저 답변을 만들고 출처를 붙이는 구조로 바뀌고 있습니다. 이는 단순한 UI 개편이 아니라 웹 발견 구조의 근본적인 변화입니다. 웹사이트 운영자들은 검색 결과 1등을 해도 AI 답변이 먼저 사용자를 만족시켜 클릭이 줄어드는 상황에 직면하게 됩니다. 더 심각한 문제는 인덱싱입니다. Pokémon Central Wiki 같은 정상 운영 사이트들이 구글의 AI 생성 페이지 필터링 과정에서 콜래터럴 데미지를 입고 있습니다. 구글이 이전처럼 웹을 안정적으로 발견하고 분배해주지 않는다면, 콘텐츠 제작자들은 새로운 발견 경로를 찾아야 합니다. SEO는 여전히 중요하지만, AI 검색 시대에는 더 이상 충분하지 않다는 것이 핵심입니다.

---

## 🤖 AI 에이전트 & 자동화 `#agents`
- [ ] **AI 에이전트를 위한 통합 가상 파일시스템 (Mirage)**
  S3, Gmail, Slack, Notion 등을 단일 파일시스템으로 마운트
  url: https://news.hada.io/topic?id=29681
- [x] **AI 코딩 에이전트용 영구 메모리 시스템 (agentmemory)**
  도구 사용과 작업 흐름을 백그라운드에서 캡처해 다음 세션에 주입
  url: https://news.hada.io/topic?id=29754
- [ ] **AI Agent 시대를 위한 tmux 스타일 터미널 워크스페이스 (Herdr)**
  여러 에이전트의 상태를 working/blocked/done으로 자동 인식
  url: https://news.hada.io/topic?id=29738
- [ ] **grep보다 토큰을 98% 적게 쓰는 에이전트용 코드 검색 (Semble)**
  관련 청크만 즉시 반환해 에이전트의 토큰 소비 98% 감소
  url: https://news.hada.io/topic?id=29626
- [x] **Codex의 Goals를 활용하는 법**
  정의된 목표를 향해 여러 턴 동안 지속 작업하는 AI 에이전트 시스템
  url: https://news.hada.io/topic?id=29639
- [x] **Google의 검색 변화: 24시간 작동하는 정보 에이전트**
  검색이 작업 실행으로 확장되는 AI 에이전트 기능 발표
  url: https://news.hada.io/topic?id=29671

## 🔧 Claude Code & 개발 도구 `#claudecode`
- [x] **AI와 함께 일하며 복리처럼 쌓아 성장하는 법**
  Anthropic 테크니컬 스태프의 AI 코딩 도구 워크플로우 5가지
  url: https://news.hada.io/topic?id=29606
- [x] **Andrej Karpathy, Anthropic에 합류**
  Tesla AI 디렉터 카파시, Anthropic Claude 사전학습팀 합류
  url: https://news.hada.io/topic?id=29674
- [ ] **Google이 이제 우리를 싫어하는 것 같다**
  Pokémon Wiki 인덱싱 소실 사례와 실제 대응책 공유
  url: https://news.hada.io/topic?id=29728

## 🧠 AI 모델 & 연구 `#models`
- [ ] **LLM 아키텍처의 최근 동향: KV 공유, mHC, 그리고 압축 어텐션**
  최신 오픈 가중치 모델들의 KV 캐시, 메모리 최적화 기법 분석
  url: https://news.hada.io/topic?id=29775
- [x] **LLM의 지난 6개월을 5분 만에 보기**
  코딩 에이전트 기능 향상과 오픈 가중치 모델 성능 향상 정리
  url: https://news.hada.io/topic?id=29682
- [x] **Gemini 3.5 Flash**
  장기 에이전트 작업용 프런티어 모델로 포지셔닝된 신규 모델
  url: https://news.hada.io/topic?id=29670
- [x] **TabPFN - 테이블 데이터를 위한 파운데이션 모델**
  정형 데이터를 scikit-learn처럼 fit/predict로 바로 사용 가능
  url: https://news.hada.io/topic?id=29719

## 🏢 AI 산업 & 비즈니스 `#industry`
- [ ] **AI-native 조직 (잭 도시 트위터 창업자)**
  Block CEO의 AI 시대 조직 구조 재설계 철학 인터뷰
  url: https://news.hada.io/topic?id=29724
- [x] **플랫폼 엔지니어링의 모든 것: 왜 필요하고, 어떻게 구축하며, 성공은 어떤 모습인가**
  90% 조직이 내부 플랫폼 도입, AI 도구 성능 예측 지표로 부상
  url: https://news.hada.io/topic?id=29603
- [x] **제품의 시대는 끝나고, 두뇌의 시대가 온다**
  SaaS 경쟁력이 기능에서 대규모 의사결정 품질로 이동 중
  url: https://news.hada.io/topic?id=29748
- [ ] **Visa와 Mastercard 안녕: 유럽인 1.3억 명, 독자 결제망으로 전환 예정**
  유럽 13개국 1.3억 명이 미국 결제망에서 독립 결제망으로 전환
  url: https://news.hada.io/topic?id=29721
- [x] **소프트웨어가 헤드리스로 가는가?**
  AI 에이전트가 UI 우회, SaaS의 해자가 데이터와 로직으로 이동
  url: https://news.hada.io/topic?id=29750
- [x] **Google, 검색창을 변경하다**
  검색창을 AI 중심으로 개편, 정보 에이전트로 확장 발표
  url: https://news.hada.io/topic?id=29671
- [ ] **Google, 웹에 전쟁을 선포하다**
  구글의 추상화 계층을 열린 표준 벗어난 Metaverse로 비판
  url: https://news.hada.io/topic?id=29735
- [x] **Google I/O 2026에서 발표한 모든 것**
  Gemini 3.5 Flash, Antigravity 2.0, AI 에이전트 인프라 발표
  url: https://news.hada.io/topic?id=29729
- [x] **Gemini CLI는 2026년 6월 18일부터 작동을 중단할 예정**
  Gemini CLI 폐기, 기능을 Antigravity CLI로 통합 예정
  url: https://news.hada.io/topic?id=29711
- [ ] **공격적인 AI 스크래퍼가 위키 운영을 꽤 힘들게 만들고 있음**
  Wiki 생태계 서버 문제 95%가 나쁜 스크래퍼 봇 원인
  url: https://news.hada.io/topic?id=29744
- [ ] **AI 구독은 엔터프라이즈의 시한폭탄**
  Claude Pro/ChatGPT Plus 가격이 실제 추론 비용을 미반영한 보조금 기반
  url: https://news.hada.io/topic?id=29612
- [x] **메모리 부족으로 인해 소비자 가전 제품의 가격이 재조정되고 있음**
  AI 데이터센터 DRAM 수요로 소비자 전자제품 가격 상승 중
  url: https://news.hada.io/topic?id=29769
- [ ] **"System of Record"에서 "System of Intelligence"로**
  CRM 위에 AI 추론 레이어가 올라오며 엔터프라이즈 소프트웨어 가치 변화
  url: https://news.hada.io/topic?id=29604

## 💭 개발 문화 & 의견 `#culture`
- [ ] **AI 보조 코딩에 대해 틀리는 열두 가지 방식**
  AI 코딩 생산성 측정의 12가지 착시 현상 정리
  url: https://news.hada.io/topic?id=29745
- [x] **AI가 여러분의 프로세스를 더 빠르게 만들지는 않을 것 같습니다**
  AI 도입 후에도 팀 속도 변화 없는 이유, 병목 이론으로 설명
  url: https://news.hada.io/topic?id=29610
- [ ] **AI는 기술이지, 제품이 아니다**
  Apple의 AI는 단독 제품이 아닌 전체 제품에 스며드는 기반 기술
  url: https://news.hada.io/topic?id=29614
- [ ] **5년과 500만 달러의 교훈: 웹 개발용 새 프로그래밍 언어를 만든 것은 실수였다**
  Wasp 팀의 새 언어 개발 실패 회고, TypeScript SDK로 전환
  url: https://news.hada.io/topic?id=29778
- [x] **나는 평범한 데이터 과학자입니다. 그리고 10년째 잘 살고 있습니다**
  최첨단 기술보다 구식 기술로 실제 의사결정 돕는 일의 가치
  url: https://news.hada.io/topic?id=29638
- [ ] **제번스 역설의 어두운 면**
  효율 향상이 더 많은 이메일, 문서, 검토 노동으로 이어질 가능성
  url: https://news.hada.io/topic?id=29654
- [ ] **신경과학자가 제시하는 미루는 습관 극복 3단계 전략**
  미루기를 머리·마음·손 3가지 원인으로 분석하는 triple-check 시스템
  url: https://news.hada.io/topic?id=29679
- [ ] **오픈소스 소프트웨어에서 오픈소스 전략으로**
  15년간 오픈소스가 기업 경쟁 전략 도구로 진화한 분석
  url: https://news.hada.io/topic?id=29746
- [ ] **옵시디언 최다 다운로드 Excalidraw 개발자, Obsidian 새 커뮤니티 사이트 스코어에 반발**
  최다 다운로드 플러그인의 품질 점수 논쟁, 스코어카드 제도 비판
  url: https://news.hada.io/topic?id=29653

## 🔐 보안 `#security`
- [x] **GitHub이 침해되어, 공격자가 GitHub 내부 3800개 저장소에 접근함**
  악성 VS Code 확장 통해 직원 기기 침해, 내부 저장소 접근
  url: https://news.hada.io/topic?id=29703

## 🇰🇷 국내 프로젝트 (Show GN) `#showgn`
- [ ] **Datatype - 텍스트를 차트로 변환하는 가변 폰트**
  OpenType 합자 치환으로 텍스트를 바/라인/파이 차트로 자동 변환
  url: https://news.hada.io/topic?id=29640
- [x] **whichllm - 내 하드웨어에서 실제로 돌아가고 최고 성능을 내는 로컬 LLM 찾기**
  GPU/CPU/RAM 자동 감지 후 벤치마크로 최적 로컬 LLM 추천 CLI 도구
  url: https://news.hada.io/topic?id=29613
- [ ] **SideQuick - 사이드 프로젝트를 끝까지 완주하게 돕는 도구**
  작업을 게임 퀘스트 단위로 쪼개 사이드 프로젝트 완주 돕는 앱
  url: https://news.hada.io/topic?id=29685
- [ ] **OpenShorts - 무료 오픈소스 클립 생성기 & AI UGC 비디오 제작 도구**
  Gemini 3.0으로 롱폼 영상에서 숏츠 자동 추출하는 무료 오픈소스
  url: https://news.hada.io/topic?id=29715
- [x] **Files.md - Obsidian의 오픈소스 대안인 로컬 우선 Markdown 파일 앱**
  .md 파일 기반 노트 앱, PWA와 클라우드 동기화 지원
  url: https://news.hada.io/topic?id=29643
- [ ] **생각할 수 있는 거의 모든 운영체제를 담은 가상 박물관을 만들었습니다**
  1948년부터 현재까지 570개 운영체제를 클릭으로 부팅 가능
  url: https://news.hada.io/topic?id=29686
- [ ] **Zero - 에이전트를 위한 프로그래밍 언어**
  AI가 주 사용자인 에이전트용 실험적 프로그래밍 언어
  url: https://news.hada.io/topic?id=29780
- [ ] **FileBrowser Quantum - 무료 오픈소스 셀프호스팅 웹 파일 관리자**
  단일 바이너리 파일 매니저, OIDC·LDAP·JWT·2FA 엔터프라이즈 지원
  url: https://news.hada.io/topic?id=29680
- [ ] **dev3000 - AI 디버깅을 위한 웹 앱 개발 타임라인 통합 캡처 도구**
  서버 로그·콘솔·네트워크·스크린샷을 타임스탬프 로그로 묶어 AI 디버깅
  url: https://news.hada.io/topic?id=29607
