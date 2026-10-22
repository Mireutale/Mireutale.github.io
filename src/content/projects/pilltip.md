---
name: "Pilltip"
period: "2025.03 ~ 2025.12"
type: "팀"
featured: true
role: "온프레미스 인프라 · 백엔드 · 설계 · 웹 프론트"
award: "졸업과제 금상 · 부산 데이터 위크 최우수상 · L:AUNCH 장려상 · SW중심대학 디지털 경진대회 후원기업상"
summary: "복약 이력과 건강 정보로 함께 먹을 때 주의할 약을 확인하고, 복약 알림과 디지털 문진을 제공하는 서비스입니다. 3명이 졸업과제로 개발했습니다."
highlights:
  - value: "92%"
    label: "알약 인식 정답률 (YOLOv8)"
  - value: "수상 4회"
    label: "졸업과제 금상 외"
  - value: "10개월"
    label: "온프레미스 직접 운영"
stack: ["Spring Boot", "MySQL", "Elasticsearch", "Weaviate", "Redis", "Nginx", "Docker", "YOLOv8", "GPT-4o mini"]
repo: "https://github.com/PillTipKR/Pilltip"
image: "/img/pilltip/banner.png"
gallery:
  - src: "/img/pilltip/dur.png"
    caption: "개인 맞춤형 DUR 분석 결과"
  - src: "/img/pilltip/search.png"
    caption: "약품 검색 · DUR 위험 태그"
  - src: "/img/pilltip/search-detail.png"
    caption: "약품 상세 · AI 맞춤 안내"
  - src: "/img/pilltip/reminder.png"
    caption: "스마트 복약 알림 · 복약 완료율"
  - src: "/img/pilltip/family.png"
    caption: "가족 계정 전환 · 자녀 관리"
  - src: "/img/pilltip/questionnaire.png"
    caption: "스마트 문진표 QR 제출 · 병원용 웹"
  - src: "/img/pilltip/chatbot.png"
    caption: "AI 챗봇 오케스트레이션 플로우"
ownStack: ["Spring Boot", "MySQL", "JWT", "AES-GCM", "Nginx", "Docker", "YOLOv8", "Next.js"]
learned: |
  연구실 서버를 직접 운영하면서 배포 이후의 장애 추적도 설계에 포함하게 됐습니다. 어떤 요청이 어느 서비스에서 실패했는지 알 수 있어야 원인을 찾을 수 있었습니다.

  모델 학습도 서버 용량에 맞춰 방식을 바꿔야 했습니다. 이후 프로젝트에서도 사용할 자원과 운영 제약부터 확인하게 됐습니다.
---

## 해결하려던 문제

여러 병원에서 처방받은 약의 복용 이력과 주의사항을 한곳에서 확인하기 어렵다는 문제에서 출발했습니다. “약 봉투는 왜 아직도 종이일까?”라는 질문을 바탕으로 복약 데이터를 사용자가 직접 관리하도록 만들었습니다.

## 내가 맡은 부분

- **인프라 운영**: 연구실 서버의 외부 접속, HTTPS, Docker 배포와 장애 대응을 맡아 10개월 동안 운영했습니다.
- **백엔드·데이터**: JWT 인증과 MySQL 스키마를 설계하고 처방·문진 데이터에 AES-GCM 암호화를 적용했습니다. 식약처·심평원 공공데이터(e약은요, DUR 품목정보, 성분별 1일 최대투여량 등)를 통합했습니다.
- **알약 인식**: AI-Hub 경구약제 데이터로 YOLOv8 모델을 학습했습니다.
- **웹 프론트엔드**: 병원용 웹 개발에 참여했습니다.

공공데이터·DUR 결과와 Weaviate 검색 근거로 답하는 RAG 구조는 AI 담당 팀원이 구현했습니다.

## 문제 해결과 결과

### 클라우드 비용을 줄이기 위한 연구실 서버 운영

클라우드 비용이 부담돼 지원받은 서버를 사용했습니다. 학교 내부망의 서버에 Nginx 리버스 프록시와 포트포워딩을 구성하고 ZeroSSL 인증서로 HTTPS를 적용해 도메인을 연결했습니다. 요청 로그를 남겨 장애 원인을 추적하고 배포부터 장애 대응까지 직접 맡았습니다.

### 서버 용량보다 큰 학습 데이터 처리

AI-Hub 데이터를 한 번에 받기에는 서버 용량이 부족했습니다. 데이터를 나눠 받고 이전 가중치에 이어서 학습하되, 이전 이미지 10%를 함께 넣어 이미 학습한 내용을 잊지 않도록 했습니다.

정답률이 90%를 넘을 때만 다음 묶음으로 넘어갔고, 넘지 못하면 에포크와 가중치를 조정했습니다. 여러 알약이 함께 찍힌 고화질 이미지로 검증한 최종 정답률은 **92%**였습니다.

## 서비스 구성과 팀 기능

![Pilltip 시스템 아키텍처](/img/pilltip/architecture.png)

Android 앱과 병원용 Next.js 웹이 Nginx를 거쳐 Spring Boot 서버에 REST 요청을 보냅니다. 서버와 저장소는 Docker로 운영했습니다. 약품 검색·자동완성은 Elasticsearch, DUR 매핑·태깅은 Redis, 자연어 질문 임베딩·Top-K 검색은 Weaviate, 사용자·약 정보는 MySQL이 맡습니다. 데이터에는 암호화와 비식별화를 적용했습니다.

- **복약 확인·안내**: 건강 정보와 복약 이력으로 DUR 주의사항을 확인하고 검색 결과에 임산부·병용·노인·연령 주의 태그를 표시합니다. GPT-4o mini는 약 안내와 DUR 충돌 설명을 쉬운 말로 생성합니다. 챗봇은 DUR 확인·제품 추천·섭취량 안내를 수행하며 제품은 DUR 검사를 통과한 것만 추천합니다.
- **복약·가족 관리**: FCM으로 알림을 보내고 '먹었어요'를 누르면 기록합니다. 달력에서 복약 완료율을 확인하고 만 14세 미만 자녀나 가족 계정으로 전환할 수 있습니다.
- **디지털 문진**: 병원 QR 코드를 스캔해 문진표를 병원 웹에 제출합니다. 병원에서 관리하며 일정 시간이 지나면 자동 삭제됩니다.

졸업과제 금상, 부산 데이터 위크 최우수상, L:AUNCH 장려상, SW중심대학 디지털 경진대회 후원기업상을 받았습니다.
