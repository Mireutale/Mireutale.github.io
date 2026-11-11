---
name: "분산 동시성 스트레스 테스트"
period: "2025.11"
type: "개인"
role: "설계 · 구현 · 측정"
summary: "수강 신청처럼 요청이 몰리는 상황에서 로드밸런서와 서버 3대를 두어 과부하 상태에서 요청 처리를 재현한 개인 프로젝트입니다. 서버의 동시 처리 한도를 고정했을 때와 처리 시간과 성공 여부에 따라 적응형으로 조절했을 때를 비교해 보고, 초당 2,000건 부하에서 실패율이 20.79%에서 0%로 낮아지는 것을 확인해 보았습니다."
repo: "https://github.com/Mireutale/java-Distributed-Concurrency-Stress-Test"
image: "/img/stress-test/banner.webp"
highlights:
  - value: "20.79% → 0%"
    label: "실패율"
  - value: "11.71s → 462ms"
    label: "p95 응답 시간"
  - value: "고정 대비 +62%"
    label: "처리량 (2,000 req/s)"
ownStack: ["Java", "Spring Boot", "WebFlux", "PostgreSQL", "Docker", "k6"]
---
