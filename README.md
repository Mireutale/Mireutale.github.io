# mireutale.github.io

개인 포트폴리오. Astro로 만들고 GitHub Pages에 배포.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

내용 수정은 `src/content/` 아래 마크다운 파일만 편집:

- `profile/intro.md` 이름, 연락처, 소개 문단
- `profile/experience.md` 경험
- `profile/awards.md` 수상
- `profile/certifications.md` 자격증
- `profile/skills.md` 기술 스택
- `projects/*.md` 프로젝트 (파일 하나 = 프로젝트 하나, 상세 페이지 `/projects/<파일명>`)

`profile/` 파일은 `---` 줄로 항목을 나누며, 작성 형식은 각 파일 상단 주석 참고.
프로젝트 frontmatter 스키마는 `src/content.config.ts`, 이미지는 `public/img/<프로젝트>/`.

`main`에 푸시하면 GitHub Actions가 빌드 후 자동 배포.
