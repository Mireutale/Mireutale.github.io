---
name: "지역별 날씨 기반 옷차림 추천"
period: "2025.03 ~ 2025.05"
type: "팀"
role: "기획 · 설계 · 백엔드"
summary: "검색한 지역의 현재 날씨로 옷차림을 추천하는 웹 서비스입니다. 클라우드컴퓨팅 수업에서 4명이 함께 개발하며 기획·설계와 날씨·GPT API를 연결하는 백엔드 구현, Docker·AWS 배포를 맡았습니다."
stack: ["OpenWeather API", "OpenAI GPT", "Docker", "AWS"]
repo: "https://github.com/Mireutale/cloudComputingProject"
image: "/img/weather-clothes/banner.png"
ownStack: ["OpenWeather API", "OpenAI GPT", "Docker", "AWS"]
learned: |
  같은 모델이라도 프롬프트에 넣는 날씨 정보에 따라 추천이 달라졌습니다. 로컬 구현 이후 Docker로 묶고 AWS에 배포해 도메인까지 연결하면서 서비스 공개 과정을 익혔습니다. 이후 Pilltip과 Fruition의 인프라 작업에도 이 경험을 활용했습니다.
---

## 목표와 담당 작업

LLM API를 사용하는 작은 서비스를 만들어 배포까지 해 보는 것이 목표였습니다.\
기획·설계·백엔드를 맡았습니다.

- OpenWeather API에서 지역 날씨를 받아 GPT 프롬프트에 넣고 추천 문장을 반환하는 백엔드를 구현했습니다.
- 로그인 없이 지역을 검색하면 결과를 확인할 수 있도록 사용 흐름을 정했습니다.
- Docker로 컨테이너화해 AWS에 배포하고 도메인을 연결했습니다.
