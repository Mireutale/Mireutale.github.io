[CLAUDE.md](http://CLAUDE.md)

강태진(Mireutale)의 개인 포트폴리오 사이트. Astro, GitHub Pages 배포.

## 내용 원본: GitHub 프로필과 항상 일치

이 사이트의 내용은 GitHub 프로필 README와 **항상 일치해야 한다.**

- 프로필 README: [https://github.com/Mireutale/Mireutale](https://github.com/Mireutale/Mireutale) (`README.md`)
- 확인: `gh api repos/Mireutale/Mireutale/readme --jq .content | base64 -d`

일치해야 하는 항목:


| 프로필 README             | 이 저장소                                   |
| ---------------------- | --------------------------------------- |
| Introduction (이름, 이메일) | `src/content/profile/intro.md`          |
| Experience             | `src/content/profile/experience.md`     |
| Award                  | `src/content/profile/awards.md`         |
| Certification          | `src/content/profile/certifications.md` |
| Studying Skills        | `src/content/profile/skills.md`         |
| Project                | `src/content/projects/<이름>/*.md`       |


규칙:

- 위 파일을 수정하기 전에 프로필 README를 먼저 읽고 사실(기간, 역할, 수상명·순위, 날짜, 점수, 링크)이 같은지 확인한다.
- 사실이 다르면 임의로 한쪽에 맞추지 말고 사용자에게 어느 쪽이 맞는지 묻는다.
- 이 저장소에서 사실을 바꿨다면 프로필 README도 같이 고쳐야 한다고 사용자에게 알린다.
- 문장 표현·상세 설명은 사이트 쪽이 더 길어도 되지만, 사실은 서로 어긋나면 안 된다.

## 구조

- `src/content/profile/*.md` — `---` 줄로 항목 구분, "키: 값" 필드 + 본문. 형식은 각 파일 상단 주석, 파서는 `src/lib/blocks.ts`, `src/lib/profile.ts`
- `src/content/projects/<이름>/` — `index.md`(frontmatter, 스키마는 `src/content.config.ts`) + `detail.md`(본문) + `learned.md`(배운 것). `backend/`·`infra/` 하위에 같은 이름 파일이 있으면 그 직무 페이지에서 대신 쓰인다. 직무별 파일도 사실은 프로필 README와 일치해야 한다
- `src/content/tracks/*.md` — 직무별 페이지(`/backend/`, `/infra/`)의 직무명·소개·대표 프로젝트·기술 순서. `/`는 `intro.md`가 같은 역할. 소개 문단의 사실도 프로필 README·프로젝트 md와 일치해야 한다
- `public/og/*.png` — 소개 페이지 링크 미리보기 이미지. `role`·`description`을 바꾸면 `npm run og`로 다시 만든다(Chrome 필요)
- `public/img/<프로젝트>/` — 프로젝트 이미지
- `src/components/`, `src/pages/` — 화면

## 명령

```bash
npm run dev     # http://localhost:4321
npm run build   # 수정 후 빌드 확인
```

`main`에 푸시하면 `.github/workflows/deploy.yml`이 자동 배포한다.