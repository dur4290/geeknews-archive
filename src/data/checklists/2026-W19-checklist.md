# GeekNews Weekly #357 리뷰
> 기간: 2026-05-04 ~ 2026-05-10 | 생성: 2026-05-11 | 파일ID: 2026-W19

## 승인 방법
포함할 항목의 `- [ ]` → `- [x]` 로 변경 후 저장
그 후 Claude Code에서 `/mail-approve` 실행

---

## 📝 이번 주 뉴스 요약
**확률적 엔지니어링 시대: 생성은 싸졌으나 검증은 비싸다**
AI 에이전트의 발전으로 소프트웨어 개발이 결정론적에서 확률적으로 변화하고 있습니다. 같은 요청에 매번 다른 결과가 나오고, 생성 비용은 급락했으나 검증 비용은 여전히 높습니다. 이는 코드베이스가 '작동한다고 아는 것'에서 '작동한다고 믿는 것'으로 변질되는 위험을 초래합니다. 창업과 엔지니어링 현장에서는 '더 엄격하게 판단하고 더 빠르게 교정할 수 있는 사람'이 중요해졌으며, 모델이 고려하지 못하는 특정 맥락(비용, 제약, 운영 현실)을 인간이 판단해야 합니다. 신뢰가 커질수록 '일탈의 정상화'로 인한 큰 실패 위험도 증가합니다.

---

## 🤖 AI 에이전트 & 자동화 `#agents`
- [x] **장기 실행 에이전트 - 에이전트가 며칠 동안 실행되면 무엇이 달라지는가**
  30시간 이상 자율 코딩, 컨텍스트 윈도우 소진 등 장기 실행의 구체적 문제점 분석
  url: https://news.hada.io/topic?id=29153
- [ ] **Codex CLI 에 /goal 기능 추가**
  목표 기반 자동 반복 실행 기능으로 에이전트 자율성 강화
  url: https://news.hada.io/topic?id=29158
- [x] **병목은 결코 코드가 아니었다**
  에이전트 시대 병목이 코드 작성에서 명세 작성으로 이동
  url: https://news.hada.io/topic?id=29238
- [ ] **에이전트 경제의 블루오션 기회**
  MCP와 A2A 프로토콜이 기존 SaaS UI 경쟁 우위 무력화
  url: https://news.hada.io/topic?id=29171
- [ ] **Camofox Browser - AI 에이전트를 위한 스텔스 헤드리스 브라우저**
  봇 탐지 우회 기능으로 에이전트 웹 탐색 능력 강화
  url: https://news.hada.io/topic?id=29310
- [ ] **Hunk - AI 에이전트 코드 리뷰를 위한 터미널 Diff 뷰어**
  에이전트 생성 코드의 인라인 주석으로 변경 의도 시각화
  url: https://news.hada.io/topic?id=29279
- [x] **AI의 Computer Use 기능은 구조화 API보다 45배 더 비싸다**
  비전 에이전트 vs 구조화 API 비용 비교, 45배 차이 실증
  url: https://news.hada.io/topic?id=29227

## 🔧 Claude Code & 개발 도구 `#claudecode`
- [x] **Agentic Coding은 함정이다**
  감독의 역설: 에이전트 효율이 높을수록 코딩 역량 약화
  url: https://news.hada.io/topic?id=29155
- [x] **Vibe coding과 agentic engineering이 내가 원하는 것보다 더 가까워지고 있다**
  '일탈의 정상화'로 모든 줄 검토 포기, 설계 단계 변화 필요
  url: https://news.hada.io/topic?id=29236
- [ ] **Claude Code는 당신의 제품을 더 좋게 만들지 않는다**
  K자형 효과: 시니어는 산출↑ 주니어는 정체 또는 감소
  url: https://news.hada.io/topic?id=29225
- [ ] **엉클 밥: "코드를 직접 짜던 시대는 끝났다"**
  AI로 절약한 시간을 테스트, 복잡도 분석 등 품질 개선에 투자
  url: https://news.hada.io/topic?id=29202
- [x] **클로드 코드 사용하기: HTML의 놀라운 효율성**
  Markdown 대신 HTML로 가독성과 상호작용성 대폭 향상
  url: https://news.hada.io/topic?id=29347

## 🧠 AI 모델 & 연구 `#models`
- [x] **Gemma 4 가속하기 : 다중 토큰 예측 drafter로 더 빠른 추론**
  다중 토큰 예측으로 품질 유지 하며 추론 속도 3배 향상
  url: https://news.hada.io/topic?id=29214
- [ ] **Gemma 4 MTP 은폐후 커뮤니티가 파헤치고, Google이 뒤늦게 우회 지원**
  Google이 숨긴 기능을 커뮤니티가 리버스 엔지니어링으로 복구
  url: https://news.hada.io/topic?id=29219
- [ ] **OpenAI, GPT-5급 추론 능력을 가진 GPT-Realtime-2 시리즈 공개**
  음성 중단 처리, 실시간 번역, 동시 발화 텍스트화 등 지원
  url: https://news.hada.io/topic?id=29284
- [x] **GPT-5.5 vs GPT-5.4 vs Opus 4.7 - 실제 코딩 작업 56개 벤치마크 비교**
  GPT-5.5가 모든 지표에서 1위, Opus 4.7은 패치 크기 최소
  url: https://news.hada.io/topic?id=29140
- [ ] **GPT-5.5 low vs medium vs high vs xhigh: 오픈소스 저장소의 실제 작업 26개에서 본 추론 곡선**
  high 추론 설정에서 코드 리뷰 통과율 3→18/26으로 극적 상승
  url: https://news.hada.io/topic?id=29316
- [ ] **antirez/ds4 - Metal용 DeepSeek V4 Flash 로컬 추론 엔진**
  Apple Metal 최적화, 다른 모델 대비 1/5 수준의 짧은 thinking
  url: https://news.hada.io/topic?id=29299

## 🏢 AI 산업 & 비즈니스 `#industry`
- [ ] **확률적 창업자의 부상**
  AI 네이티브 팀의 작업 비율 변화: 엔지니어링 70%→실험, 30%→로드맵
  url: https://news.hada.io/topic?id=29176
- [ ] **확률적 엔지니어링과 24/7 직원**
  생성은 싸졌으나 검증 비용은 비싸짐, 주니어 훈련 위기 심화
  url: https://news.hada.io/topic?id=29345
- [ ] **OpenAI가 대규모 저지연 음성 AI를 제공하는 방법**
  9억명 주간활성사용자를 위한 WebRTC 재설계 및 Kubernetes 최적화
  url: https://news.hada.io/topic?id=29168
- [x] **AI로 인한 고용 종말이 (아마도) 일어나지 않을 이유**
  AI가 단가를 낮추면 기업은 인원감축 대신 새로운 수요 창출
  url: https://news.hada.io/topic?id=29185
- [ ] **브라질의 Pix 결제 시스템, Visa와 Mastercard의 압박을 받는 중**
  성인 93%, 거래 49% 점유, 무료 개인 + 0.33% 기업 수수료
  url: https://news.hada.io/topic?id=29301
- [ ] **Lean Analytics, AI와 에이전트 시대에 맞춰 돌아보기**
  Time to Value 극단적 단축, 첫 시도 고품질 기대, 실패 시 즉시 이탈
  url: https://news.hada.io/topic?id=29281

## 💭 개발 문화 & 의견 `#culture`
- [x] **Amazon에서 약 1,000번 면접을 진행하며 얻은 교훈**
  기술 탈락 아님, 행동 면접에서 스토리 준비 부족이 주요 원인
  url: https://news.hada.io/topic?id=29141
- [x] **최고의 직원이 최악의 관리자가 되는 이유**
  관리직은 승진 아닌 새 직업, 피터 원리 반복의 구조적 원인
  url: https://news.hada.io/topic?id=29206
- [x] **생산적 미루기 - 왜 해야 할 일 대신 다른 생산적인 일을 하게 되는가**
  도파민 보상 시스템이 새 자극에 반응, 핵심 작업 미루기 초래
  url: https://news.hada.io/topic?id=29203
- [ ] **프로그래밍은 형편없다 [2014]**
  수조 달러가 TODO 코드 위에서 돌아가는 시스템 구조적 문제
  url: https://news.hada.io/topic?id=29287
- [ ] **프로그래밍은 여전히 형편없다**
  AI로 주니어 해고, 시니어 개인에게 부담 집중, 도제 제도 붕괴
  url: https://news.hada.io/topic?id=29261
- [x] **AI가 끌어올린 바닥, 우리의 천장은 어디인가? 대화 속에서 찾아낸 세 가지 화두**
  사진기처럼 AI도 기초를 올려도 천장은 인간 영역, 불완전한 도구
  url: https://news.hada.io/topic?id=29254
- [ ] **모두가 AI를 가져도 회사는 여전히 아무것도 배우지 못할 때**
  개인 생산성 향상이 자동으로 조직 학습으로 이어지지 않음
  url: https://news.hada.io/topic?id=29217
- [ ] **직장에서 생산적으로 보이기**
  AI가 산출물과 역량의 연결 단절, 역량 없는 설계 증가
  url: https://news.hada.io/topic?id=29234
- [ ] **AI Slop이 온라인 커뮤니티를 죽이고 있다**
  AI 생성 콘텐츠 무차별 살포로 신호 대 잡음 비율 급락
  url: https://news.hada.io/topic?id=29277
- [ ] **오픈소스가 공개 커뮤니티를 의미하지는 않는다**
  GitHub 이후 무급 이슈/PR 관리 업무 증가로 번아웃 초래
  url: https://news.hada.io/topic?id=29130
- [ ] **소프트웨어를 만들어서 무료로 나눠주기**
  취미 수익화는 두 번째 직업화, 무료 배포의 철학적 가치
  url: https://news.hada.io/topic?id=29269
- [x] **나만의 GitHub를 만든다면**
  forge 기능이 실제 업무와 동떨어짐, 피드백 프로세스 재설계 필요
  url: https://news.hada.io/topic?id=29152
- [ ] **Redis array: 긴 개발 과정의 짧은 이야기**
  Opus/Codex와 함께 하되 생성 코드 한 줄씩 검토 및 수동 재작성
  url: https://news.hada.io/topic?id=29173
- [ ] **TUI가 다시 돌아온 이유**
  Claude Code 성공으로 터미널 UI 재조명, GUI 전략 부재
  url: https://news.hada.io/topic?id=29135
- [ ] **텍스트 모드의 거짓말: 현대 TUI가 접근성에 악몽인 이유**
  프레임워크 기반 TUI는 화면 읽기 사용자에게 반복 낭독/크래시 초래
  url: https://news.hada.io/topic?id=29134

## 🔐 보안 `#security`
- [ ] **이메일 주소 심층 분석**
  Gmail 점 무시, 발신자 주소 이중화, 스푸핑 근본 원인 분석
  url: https://news.hada.io/topic?id=29144
- [x] **Google Chrome이 동의 없이 기기에 4GB AI 모델을 조용히 설치함**
  Gemini Nano 자동 설치, 동의 프롬프트 없음, 삭제 후 재설치
  url: https://news.hada.io/topic?id=29210
- [ ] **React 및 Next.js에서 다수의 보안 취약점 공개, 즉시 패치 권고**
  12건 취약점, 일부 WAF 우회 가능, 애플리케이션 패치 필수
  url: https://news.hada.io/topic?id=29283
- [x] **Microsoft Edge는 사용하지 않을 때도 모든 비밀번호를 메모리에 평문으로 저장함**
  시작 시 모든 비밀번호 복호화해 메모리 상주, Chrome은 필요시만
  url: https://news.hada.io/topic?id=29172
- [ ] **브라우저가 알려준 모든 정보를 보여주는 웹페이지**
  위치, 기기, GPU, 배터리, 폰트 등 접속 직후 수집 가능 정보
  url: https://news.hada.io/topic?id=29313
- [ ] **AI가 두 취약점 문화를 깨뜨리고 있다**
  AI의 커밋 보안 분석으로 엠바고 전략 무력화, 조용한 패치 불가
  url: https://news.hada.io/topic?id=29307
- [ ] **Claude Mythos Preview로 Firefox를 강화한 비하인드 스토리**
  AI로 보안 버그 271개 발견 수정, 신호 대 잡음 비율 개선
  url: https://news.hada.io/topic?id=29288

## 🇰🇷 국내 프로젝트 (Show GN) `#showgn`
- [ ] **Understand-Anything - 코드/지식베이스를 인터랙티브 지식 그래프로 변환하는 플러그인**
  멀티 에이전트로 파일/함수 자동 분석, 리플 이펙트 분석 가능
  url: https://news.hada.io/topic?id=29178
- [ ] **Open Generative AI - 200개 이상의 AI 모델로 이미지/영상을 생성하는 스튜디오**
  Flux, Midjourney, Sora 등 200+ 모델 통합, 콘텐츠 필터 없음
  url: https://news.hada.io/topic?id=29246
- [ ] **정확한 텍스트와 숫자를 위해 "밑그림" 사용하기**
  SVG 밑그림 후 AI 스타일 입히기로 텍스트/숫자 정확도 향상
  url: https://news.hada.io/topic?id=29174
- [ ] **나는 Bun이 걱정된다**
  Anthropic 인수 후 Claude Code 정책 확대 우려, 품질 저하 신호
  url: https://news.hada.io/topic?id=29169
- [ ] **왜 ASCII에서 소문자는 대문자 바로 뒤에 오지 않을까?**
  Z-a 간격 6문자로 32비트 차이, 우아한 비트 연산 구조
  url: https://news.hada.io/topic?id=29303
