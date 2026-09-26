# mireutale.github.io

개인 포트폴리오. Astro로 만들고 GitHub Pages에 배포.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

내용 수정은 `src/data/` 아래 파일만 편집:

- `profile.ts` 소개, 연락처, 수상
- `projects.ts` 프로젝트 카드
- `skills.ts` 기술 스택

`main`에 푸시하면 GitHub Actions가 빌드 후 자동 배포.
