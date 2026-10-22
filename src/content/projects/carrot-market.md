---
name: "당근마켓 클론코딩"
period: "2025.02"
type: "팀"
role: "기획 · 설계 · 백엔드"
summary: "PNU Mini Bootcamp에서 4명이 만든 당근마켓 클론입니다. 기획·설계·백엔드를 맡아 상품·댓글·찜·구매·채팅 API를 FastAPI로 구현하고 React 화면과 연결했습니다."
stack: ["FastAPI", "SQLModel", "JWT", "WebSocket", "React"]
repo: "https://github.com/Mireutale/Project_API"
image: "/img/carrot-market/banner.png"
ownStack: ["FastAPI", "SQLModel", "JWT", "WebSocket"]
learned: |
  앱 화면에서 필요한 기능을 따라가면서 서버 코드는 도메인과 계층에 따라 나눴습니다. 팀원들과 API 형식을 맞추고 모듈을 하나씩 연결하며 커밋·브랜치·PR 규칙을 적용해 봤습니다.
---

## 목표와 담당 작업

실제 서비스의 API 구조와 팀 개발 과정을 배우기 위해 당근마켓 앱의 요청을 분석했습니다.\
기획·설계·백엔드를 맡았습니다.

- 상품·댓글·찜·구매·채팅 5개 도메인의 API와 SQLModel 모델을 구현했습니다.
- 비밀번호는 bcrypt로 해싱하고 JWT(python-jose) 인증을 적용했습니다.
- 채팅방마다 WebSocket을 연결해 실시간으로 메시지를 주고받도록 했습니다.
- 개발 전에 4명이 브랜치와 PR 규칙을 정하고 모듈을 React 프론트엔드에 연결하며 v0.1.0부터 v0.3까지 통합했습니다.
