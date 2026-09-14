# GeekNews Weekly #375 리뷰
> 기간: 2026-09-07 ~ 2026-09-13 | 생성: 2026-09-14 | 파일ID: 2026-W37

## 승인 방법
포함할 항목의 `- [ ]` → `- [x]` 로 변경 후 저장
그 후 `/geeknews` 실행

---

## 📝 이번 주 뉴스 요약
**오픈소스를 계속 개발할 비용은 어디에서 나오는가**
이번 주 Shopify의 두 가지 소식을 통해 오픈소스 지속성의 문제를 깊이 있게 조명합니다. Tailwind Labs의 Shopify 합류와 React Native 지원 중단은 별개의 사건이지만, 함께 보면 '널리 쓰이는 것'과 '개발비가 마련되는 것'이 얼마나 분리되어 있는지 보여줍니다. Tailwind는 올해 초 엔지니어링 팀의 75%를 해고했는데, 사용량은 증가했지만 문서 방문과 매출은 오히려 줄었기 때문입니다. Shopify는 AI 에이전트로 인해 두 플랫폼 구현 비용이 낮아지자 React Native에서 네이티브 코드로 전환하기로 결정했고, 이에 따라 지원하던 라이브러리들의 미래가 불투명해졌습니다. 핵심 질문은 '회사가 떠나도 개발과 유지보수가 이어질 수 있는가'입니다. 코드 공개와 지속적인 유지는 다르며, 누군가 월급을 받으며 유지하는지, 개인 시간을 쓰고 있는지, 또는 지원이 끊겨도 이를 계속할 사람이 있는지 살펴봐야 합니다. 오픈소스에 깊이 의존하는 제품이라면 이 비용과 작업을 함께 나눠 맡을 준비도 필요합니다.

---

## 🤖 AI 에이전트 & 자동화 `#agents`
- [x] **코딩 에이전트는 테스트와 검증 기법을 얼마나 잘 활용할까?**
  에이전트의 테스트 기법 활용도 조사: 지시보다 어떤 입력이 버그를 드러내는지가 중요
  url: https://news.hada.io/topic?id=33410
- [x] **Astra로 코딩하기: 우리는 대체 왜 이러고 있는 걸까?**
  Astra 코딩: 35시간에 7만 5천 줄 생성도 쓸 만한 결과 없음, 일회용 코드 습관 문제
  url: https://news.hada.io/topic?id=33524
- [x] **Apache Maka - 에이전트가 한 일을 기록으로 남기는 로컬 우선 워크스페이스**
  Apache Maka: 에이전트의 도구 호출·승인·실행 결과를 로컬에 기록하는 작업 환경
  url: https://news.hada.io/topic?id=33336
- [x] **Google ARTEMIS - 자연어로 Android 앱을 조작/테스트하는 자동화 도구**
  Google ARTEMIS: 자연어로 Android 앱을 조작·테스트하는 자동화 도구
  url: https://news.hada.io/topic?id=33506

## 🔧 Claude Code & 개발 도구 `#claudecode`
- [ ] **Ask HN: 스킬 파일을 어떻게 관리하시나요?**
  스킬 파일 관리: 공개 스킬보다 반복 작업을 스킬로 남기는 경험 공유
  url: https://news.hada.io/topic?id=33338
- [x] **GPT-6 Astra를 위한 스킬과 프롬프트 다시 생각하기**
  GPT-6 Astra 대비: 기존 Skills/AGENTS.md 점검하여 불필요한 작업 제거
  url: https://news.hada.io/topic?id=33404

## 🧠 AI 모델 & 연구 `#models`
- [x] **GPT-6 Astra: 하네스가 곧 제품이다**
  GPT-6 Astra: 추론 상태 보존과 문맥 압축으로 성능 54.8%→99.9% 향상
  url: https://news.hada.io/topic?id=33301
- [ ] **Qwen-Drive-1.0 - 도로 상황을 이해하고 주행 경로까지 계획하는 자율주행 AI 모델**
  Qwen-Drive-1.0: 도로 인식·경로 계획을 하나의 모델에 구현한 자율주행 AI
  url: https://news.hada.io/topic?id=33383
- [x] **GPT-6 Astra와 루프형 트랜스포머: 추론이 짧아지면 속을 알기 어려워질까?**
  루프형 트랜스포머: 가중치 증가 없이 계산을 더 깊게 수행하는 구조
  url: https://news.hada.io/topic?id=33449
- [x] **AI가 스스로 더 나은 AI를 만드는 날은 얼마나 가까웠나?**
  AI 자율 개선: 2년~10년 안에 AI 연구 생산성 10배 달성 가능성 논쟁
  url: https://news.hada.io/topic?id=33600

## 🏢 AI 산업 & 비즈니스 `#industry`
- [ ] **WordPress는 누구의 것인가**
  WordPress 리더십: Matt Mullenweg 강제 휴직 사건과 기여금 분쟁 정리
  url: https://news.hada.io/article/who-owns-wordpress
- [x] **AI는 우리의 경제적 미래를 어떻게 바꿀까?**
  AI 경제 영향: Anthropic의 2030년 GDP·일자리 변화 시나리오 탐색기
  url: https://news.hada.io/topic?id=33471
- [x] **Shopify, React Native에서 네이티브로 복귀**
  Shopify React Native 복귀: AI로 네이티브 전환, 엔지니어링 기록 공개
  url: https://news.hada.io/topic?id=33485
- [ ] **Build vs Buy - AI로 개발은 싸졌지만, 3년 뒤 유지보수는 누가 맡을까?**
  Build vs Buy: AI로 개발 비용 낮춰도 3년 후 유지보수 주체 불명확
  url: https://news.hada.io/topic?id=33346
- [ ] **Rust, Microsoft의 Tier-1 언어로 자리 잡음**
  Microsoft, Rust를 Tier-1 언어로 격상, MSVC 백엔드 연결
  url: https://news.hada.io/topic?id=33487
- [ ] **AI로 도구를 만드는 것과 기업을 바꾸는 것은 다른 일이다**
  AI 도구 vs 조직 변화: 5분 도구도 5개 부서·3개 시스템 걸쳐 있으면 다름
  url: https://news.hada.io/topic?id=33293
- [ ] **Tailwind Labs, Shopify에 합류**
  Tailwind Labs, Shopify 합류: MIT 라이선스 유지, 기존 팀 유지
  url: https://news.hada.io/topic?id=33444
- [x] **기존 강자들이 몰려온다: 특화 AI 스타트업은 어디서 이길 수 있을까**
  특화 AI 스타트업 경쟁: 여러 시스템 업무 완결과 전문가 학습에서 차별화
  url: https://news.hada.io/topic?id=33306
- [ ] **Nvidia는 AI의 중앙은행이다**
  Nvidia 중앙은행화: 칩 판매 외 자금 조달·장비 보증까지 확대
  url: https://news.hada.io/topic?id=33588

## 💭 개발 문화 & 의견 `#culture`
- [ ] **AI 때문에 느끼는 슬픔**
  AI와 슬픔: 실직 걱정보다 프로그래밍이 쓸모없다는 태도가 더 아픔
  url: https://news.hada.io/topic?id=33548
- [ ] **코드가 나빠지는 데는 한계가 없다**
  Amazon 주문 시스템: 유능한 엔지니어도 버티기 어려운 기술 부채의 악순환
  url: https://news.hada.io/topic?id=33300
- [ ] **브라운필드의 코끼리: AI로 개인은 빨라졌는데, 조직은 왜 그대로인가**
  브라운필드 코끼리: AI로 개인은 빨라졌는데 조직은 승인·백로그에 갇혀있음
  url: https://news.hada.io/topic?id=33304
- [ ] **모든 어른은 한때 어린이였지만, 그것을 기억하는 어른은 드물다**
  어린이의 탐색 vs 전문가의 지시: AI를 표면적 목표에만 쓰면 배움이 사라짐
  url: https://news.hada.io/topic?id=33480
- [ ] **소프트웨어는 어떻게 사람을 미치게 만드는가**
  소프트웨어 변경 비용: 보이지 않는 문맥 전환·회귀 위험을 간과하는 경향
  url: https://news.hada.io/topic?id=33493
- [ ] **내 소프트웨어의 기본 라이선스를 MIT에서 EUPL로 바꿨다**
  MIT에서 EUPL로: 오픈소스 개발자와 사용자에게 돌아오는 것 재고
  url: https://news.hada.io/topic?id=33380
- [ ] **창업자는 월급을 얼마나 받아야 할까?**
  창업자 급여: 너무 적으면 부채 쌓여 평범한 인수가 매력적으로 보임
  url: https://news.hada.io/topic?id=33464
- [ ] **창의성이 새로운 해자다**
  창의성이 해자다: AI가 무난한 결과물은 빠르게 만들지만 참신함은 가치
  url: https://news.hada.io/topic?id=33534
- [ ] **다리오 아모데이: 최첨단 AI의 발전 속도를 늦춰야 한다**
  다리오 아모데이: AI 발전 속도 자체를 늦춰야 한다는 제안
  url: https://news.hada.io/topic?id=33586
- [ ] **다리오에게 보내는 공개서한: 진심이라면 모델 가중치를 공개하라**
  공개서한: 규제보다 모델 가중치 공개 의무화가 더 효과적
  url: https://news.hada.io/topic?id=33595
- [ ] **젠장, 그래도 만들자**
  젠장 그래도 만들자: 빨리 만드는 게 아니라 어려운 길을 선택하는 기쁨
  url: https://news.hada.io/topic?id=33582

## 🔐 보안 `#security`
- [x] **VoiceStudio - 음성 복제, 더빙, 받아쓰기를 로컬에서 처리하는 오픈소스 스튜디오**
  VoiceStudio: 음성 복제·더빙을 로컬에서 처리, 워터마크 감지 지원
  url: https://news.hada.io/topic?id=33349
- [ ] **LG TV 화면을 끈 상태에서 오디오 녹음, 주변 기기 탐색 적발**
  LG TV 보안: 대기 상태에서도 마이크 녹음 가능, 주변 기기 정보 전송
  url: https://news.hada.io/topic?id=33318
- [ ] **강남언니 약 22만 명 개인정보 유출…상담 사진과 실제 시술 내역까지 포함**
  강남언니 22만 명 정보 유출: 상담 사진·시술 내역·결제 정보까지 포함
  url: https://news.hada.io/topic?id=33337
- [ ] **Google 앱 광고에 220달러를 썼는데, 설치의 60%가 봇이었다**
  Google Ads 봇: 220달러 광고 중 설치의 60%가 봇, 퍼즐로 필터링
  url: https://news.hada.io/topic?id=33559
- [ ] **Google 검색, 목적지 주소를 바로 읽을 수 없는 리디렉션 링크 확대**
  Google 검색 리디렉션: URL이 직접 복원 불가능해져 링크 긁기 어려워짐
  url: https://news.hada.io/topic?id=33571

## 🇰🇷 국내 프로젝트 (Show GN) `#showgn`
- [ ] **타임스탬프를 시·분·초로 변환하는 더 빠른 방법**
  타임스탐프 변환 최적화: 계산 순서 변경으로 연산 대기 시간 감소
  url: https://news.hada.io/topic?id=33334
- [ ] **Visa와 Mastercard는 무슨 일을 할까? 카드 네트워크 입문**
  Visa와 Mastercard 입문: 메시지·정산·수수료·분쟁 해결의 구조
  url: https://news.hada.io/topic?id=33453
- [ ] **Databasus - 실제 복원까지 검증하는 셀프 호스팅 데이터베이스 백업 도구**
  Databasus: 백업이 실제로 복원되는지 자동 확인하는 셀프호스팅 도구
  url: https://news.hada.io/topic?id=33305
- [ ] **코딩이 해결됐다면, 코드의 조잡함은 어떻게 측정할까?**
  코드 품질 측정: LLM 평가는 난수이고, 중복·복잡성 지표가 객관적
  url: https://news.hada.io/topic?id=33547
- [ ] **21세기 교실을 위한 음악 이론 - 팝송과 악보로 배우는 무료 온라인 교재**
  21세기 음악 이론: 팝송·영화음악으로 배우는 무료 온라인 교재
  url: https://news.hada.io/topic?id=33513
- [ ] **Multigres - Postgres의 수평 확장을 위한 오픈소스**
  Multigres: MySQL의 Vitess 방식을 Postgres에 적용한 수평 확장 도구
  url: https://news.hada.io/topic?id=33505
- [ ] **Apple, 첫 폴더블 iPhone Duo 공개**
  iPhone Duo 폴더블: 안팎 화면 비율 동등, Split View로 두 앱 동시 사용
  url: https://news.hada.io/topic?id=33450
- [ ] **필즈상 수상자 25명의 경고: AI의 문제 풀이 경쟁이 놓치는 수학의 목적**
  필즈상 수상자 경고: AI 문제 풀이 경쟁이 수학의 새 아이디어 토양 훼손
  url: https://news.hada.io/topic?id=33550
