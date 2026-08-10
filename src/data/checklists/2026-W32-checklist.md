# GeekNews Weekly #370 리뷰
> 기간:  | 생성: 2026-08-10 | 파일ID: 2026-W32

## 승인 방법
포함할 항목의 `- [ ]` → `- [x]` 로 변경 후 저장
그 후 `/geeknews` 실행

---

## 📝 이번 주 뉴스 요약
**시스템의 경계를 다시 그으며 - 서버를 키우기 전에 묻는 질문**
긱뉴스의 에디토리얼은 트래픽 증가 속에서 마주한 고민을 두 사례로 풀어낸다. Canva는 MySQL 병목을 Redis 같은 추가 저장소로 해결하지 않고 데이터베이스 조회 자체를 S3 파일 배포 문제로 변환했고, PatronView는 전체 트래픽의 99%가 봇임을 인식해 각 크롤러의 실제 가치를 비용 기준으로 판단했다. 두 사례의 공통점은 자원을 늘리기 전에 '무엇을 여기에서 처리할 것인가'를 먼저 결정했다는 점이다. AI 에이전트와 복잡한 구성을 제안받기 쉬운 시대일수록, 시스템의 책임 경계를 명확히 하는 운영자의 판단이 더욱 중요하다. 핵심은 '어떻게 더 많이 처리할까'가 아니라 '이 일을 꼭 여기에서 처리해야 할까'라는 질문이다.

---

## 🤖 AI 에이전트 & 자동화 `#agents`
- [x] **agent-device - AI 에이전트가 iOS/Android 기기를 제어하도록 돕는 CLI**
  모바일 앱 개발 에이전트용 CLI로 UI 검사/조작/검증을 반복하며 테스트 스크립트 자동화
  url: https://news.hada.io/topic?id=32078
- [x] **자기 개선을 위한 하네스 엔지니어링**
  모델 가중치보다 하네스 개선으로 자기 진화 가능, 워크플로/메모리/서브에이전트 패턴 설계
  url: https://news.hada.io/topic?id=32179
- [ ] **Pi의 미니멀리즘이 경쟁력인 이유**
  기본 4개 도구와 1000토큰 미만 프롬프트로 높은 통과율 달성, 하네스 간결함의 가치
  url: https://news.hada.io/topic?id=32171
- [x] **Orca - 여러 병렬 코딩 에이전트를 위한 오픈소스 ADE**
  다중 코딩 에이전트를 통합 관리하는 IDE로 결과 비교/병합 기능 탑재
  url: https://news.hada.io/topic?id=32253
- [ ] **Paseo - 여러 코딩 에이전트를 데스크톱/모바일에서 관리하는 오케스트레이터**
  다중 에이전트 셀프호스트 관제층으로 여러 AI 도구를 통합 제어
  url: https://news.hada.io/topic?id=32254

## 🧠 AI 모델 & 연구 `#models`
- [ ] **크래프톤, 21B 한영 이중언어 음성 AI 모델 'A.X K2 Raon-Speech' 공개**
  30B 이하 공개 모델 중 한국어 1위, STT/TTS/감정 억양 통합 처리
  url: https://news.hada.io/topic?id=32125
- [x] **카카오, '카나나-2'의 경량 모델 4종 오픈소스로 공개**
  3B/1.3B 경량 모델 공개, KV 캐시 72.7% 감축, 한국어 토크나이저 효율 30% 개선
  url: https://news.hada.io/topic?id=32124
- [ ] **LLM은 '점프'할 수 없다**
  LLM은 귀납/연역 강하지만 귀추적 점프 불가, 월드 모델 필요성 주장
  url: https://news.hada.io/topic?id=32218
- [x] **100배 저렴한 오픈 모델로 검색에서 GPT-5.6 Sol 능가하기**
  4B 모델 강화학습으로 프런티어 모델 수준의 성능을 1% 비용으로 달성
  url: https://news.hada.io/topic?id=32204
- [ ] **Qwen3.8-Max: 코딩과 협업의 새로운 기준**
  알리바바 2.4조 파라미터 모델, 최초 Max급 가중치 공개, 자기 진화 피드백 루프 특징
  url: https://news.hada.io/topic?id=32090
- [ ] **Discovery Loop**
  Google 연구팀의 AI 실험 자동화 플랫폼으로 수천 개 루프 병렬화 목표
  url: https://news.hada.io/topic?id=32186

## 🏢 AI 산업 & 비즈니스 `#industry`
- [x] **Canva는 어떻게 수억 건의 사용자 세션을 빠르고 안전하게 유지할까?**
  MySQL 병목을 S3 압축 객체로 해결, 데이터 저장소 문제를 배포 문제로 전환
  url: https://news.hada.io/topic?id=32156
- [ ] **150만 페이지 웹사이트에서 scraper와 싸운 1년**
  트래픽 99% 봇, 크롤러별 비용 차이로 수용 기준 설정, 방어와 경험의 역설
  url: https://news.hada.io/topic?id=32244
- [ ] **AMD, 모델을 실리콘에 새기는 AI 칩 스타트업 Taalas 인수**
  모델 가중치를 ROM에 직접 집적, 초당 16,960토큰 처리로 GPU 48배 빠름
  url: https://news.hada.io/topic?id=32224
- [x] **구글 서치 콘솔, X/인스타그램/틱톡/유튜브를 통한 유입 트래픽도 지원 시작**
  Search Console에 플랫폼 속성 추가, 소셜 계정의 검색 성과 추적 가능
  url: https://news.hada.io/topic?id=32128

## 💭 개발 문화 & 의견 `#culture`
- [x] **가장 빠른 AI-First 기업은 실제로 어떻게 일하는가**
  AI 초안에서 검증/개선 병목, 미션 팟 조직으로 고객 책임 끝까지 추적
  url: https://news.hada.io/topic?id=32075
- [ ] **Netflix가 AI 시대에 전문가보다 시스템 사고형 인재에 베팅하는 이유**
  시스템 사고형 인재가 공통 인프라와 가드레일 구축으로 안전한 환경 조성
  url: https://news.hada.io/topic?id=32159
- [x] **LLM은 전문성을 보상함**
  AI가 평준화되므로 도메인 전문성이 차별화 요소, 모델 한계 인식 필수
  url: https://news.hada.io/topic?id=32119
- [ ] **자동화하지 말고, 완전히 없애버려라**
  AI의 공급 비용 감축이 전문성 권한을 수요자로 이동, 자동화 아닌 근본 제거
  url: https://news.hada.io/topic?id=32076
- [x] **프롬프트로 프로토타입은 만들 수 있어도, 안목까지 만들 수는 없다**
  완성도 높은 원본 만들기 쉬워져도 선별 안목은 오랜 반복으로만 축적
  url: https://news.hada.io/topic?id=32223
- [x] **안목, 판단 그리고 AI**
  AI는 대안 평가까지 가능하지만, 결정 책임은 여전히 인간의 몫
  url: https://news.hada.io/topic?id=32127
- [x] **소프트웨어 엔지니어링과 생성형 AI에 관한 8가지 오해**
  개발자의 코딩 시간 14%뿐, AI 도구 효과 실제 지표로 평가 필요
  url: https://news.hada.io/topic?id=32175
- [ ] **AI가 린 스타트업 플레이북을 무너뜨리고 있는가?**
  Stripe 사례로 린의 핵심은 빠른 공개 출시, AI로 시간 단축 가능성 열림
  url: https://news.hada.io/topic?id=32255
- [x] **이제 모델 선택 기준은 지능보다 속도**
  벤치마크 수렴으로 응답 속도와 전체 작업 시간이 선택 기준으로 이동
  url: https://news.hada.io/topic?id=32110

## 🔐 보안 `#security`
- [ ] **late.sh - 개발자를 위한 아늑한 터미널 클럽하우스**
  SSH 키로 신원 인증, IP 로깅 없음, 프라이버시 중심 터미널 소셜 공간
  url: https://news.hada.io/topic?id=32192

## 🇰🇷 국내 프로젝트 (Show GN) `#showgn`
- [x] **모든 사용자 인터페이스를 구성하는 10가지 GUI 디자인 요소**
  GUI 기본 요소 10개를 86개 지침으로 풀어냄, 관례 준수의 중요성
  url: https://news.hada.io/topic?id=32160
- [ ] **Diátaxis - 기술 문서 작성을 위한 체계적 접근법**
  튜토리얼/방법/참조/설명으로 문서 분류, 에이전트 시대 문서화 프레임워크
  url: https://news.hada.io/topic?id=32073
- [x] **디자인 시스템의 미래**
  AI 생산 속도에 따른 불일치 해결, 코드/캔버스/에이전트 통합 설계 시스템
  url: https://news.hada.io/topic?id=32162
- [ ] **평가 주도 개발 (Eval-driven development)**
  Airbnb 사례, 평가를 핵심 엔지니어링 규율로 출시 전부터 단계적 적용
  url: https://news.hada.io/topic?id=32257
