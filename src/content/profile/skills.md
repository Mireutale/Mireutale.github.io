<!-- 항목마다 --- 줄로 구분. 기술 다음 문단은 실제 활용 경험. -->

---
분류: AWS · 컨테이너
기술: AWS EKS, EC2, RDS, ElastiCache, S3, ALB, WAF, Lambda, EventBridge, Secrets Manager, KMS, Kubernetes, Docker

Fruition의 프라이빗 EKS와 데이터 저장소를 구성하고, Pilltip은 연구실 서버에서 Docker로 운영했습니다.

---
분류: IaC · 배포
기술: Terraform, GitHub Actions (OIDC), ECR, Kustomize, External Secrets Operator

AWS 리소스를 코드로 관리하고 커밋 SHA 기준으로 배포했습니다. OIDC로 배포 권한을 받아 장기 자격 증명을 저장소에 두지 않도록 구성했습니다.

---
분류: 운영 · 성능 검증
기술: Linux, Nginx, CloudWatch, Fluent Bit, k6, KEDA, HPA, Cluster Autoscaler

HTTPS와 외부 접속, 로그·장애 알림을 구성했습니다. k6로 모놀리스·MSA와 동시성 제어 방식을 비교하고 KEDA로 AI 워커를 확장했습니다.

---
분류: 백엔드 · 데이터
기술: Java, Spring Boot, Spring Security, JPA, Python, FastAPI, JWT, PostgreSQL, MySQL, Redis, Elasticsearch, Kafka (Strimzi)

JWT 인증과 DB 스키마, 공공데이터 파이프라인을 구현했습니다. 수강신청 부하 실험과 서비스별 데이터 저장소·Kafka 인프라 구성에도 사용했습니다.

---
분류: 프론트엔드
기술: TypeScript, Next.js, React

Fruition의 GFM 편집기·지식 그래프·Wiki 추가 화면, Pilltip의 병원용 웹, 인턴 과제의 로그인·회원가입 화면을 개발했습니다.

---
분류: AI 모델 · API 연동
기술: YOLOv8, OpenAI GPT, OpenWeather API

AI-Hub 경구약제 데이터로 알약 인식 모델을 학습했습니다. 옷차림 추천 서비스에서는 날씨 데이터를 GPT에 전달하는 백엔드를 구현했습니다.

---
분류: 오픈소스 · 협업
기술: Rust, Git

rhwp의 HWPX 저장 오류를 고치고 cargo test·clippy·회귀 테스트로 확인했습니다. 팀 프로젝트에서는 브랜치·PR 규칙과 API 형식을 맞춰 개발했습니다.
