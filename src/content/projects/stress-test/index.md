---
name: "분산 동시성 스트레스 테스트"
period: "2025.11"
type: "개인"
role: "설계 · 구현 · 측정"
summary: "수강신청처럼 요청이 몰리는 상황에서 고정 동시성과 적응형 동시성을 비교한 개인 실험입니다. 초당 2,000건 부하에서 실패율을 20.79%에서 0%로 낮췄습니다."
repo: "https://github.com/Mireutale/java-Distributed-Concurrency-Stress-Test"
image: "/img/stress-test/banner.webp"
highlights:
  - value: "0%"
    label: "실패율 (기존 20.79%)"
  - value: "462ms"
    label: "p95 (기존 11.71s)"
  - value: "+62%"
    label: "처리량 (2,000 req/s 부하)"
stack: ["Java", "Spring Boot", "WebFlux", "PostgreSQL", "Docker", "k6"]
ownStack: ["Java", "Spring Boot", "WebFlux", "PostgreSQL", "Docker", "k6"]
---
