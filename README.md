# mireutale.github.io

개인 포트폴리오. Astro로 만들고 GitHub Pages에 배포.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

내용 수정은 `src/content/` 아래 마크다운 파일만 편집:

- `profile/intro.md` 이름, 연락처, `/` 페이지 소개 문단
- `tracks/*.md` 직무별 페이지 소개 (`backend.md` → `/backend/`, `infra.md` → `/infra/`)
- `profile/experience.md` 경험
- `profile/awards.md` 수상
- `profile/certifications.md` 자격증
- `profile/skills.md` 기술 스택
- `projects/*.md` 프로젝트 (파일 하나 = 프로젝트 하나, 상세 페이지 `/projects/<파일명>`)

`profile/` 파일은 `---` 줄로 항목을 나누며, 작성 형식은 각 파일 상단 주석 참고.
프로젝트 frontmatter 스키마는 `src/content.config.ts`, 이미지는 `public/img/<프로젝트>/`(WebP).
소개 페이지의 `role`·`description`을 바꾸면 `npm run og`로 링크 미리보기 이미지(`public/og/`)를 다시 만든다.

`main`에 푸시하면 GitHub Actions가 빌드 후 자동 배포.

## 남은 일

코드에도 `TODO:` 주석으로 남겨 두었다. `grep -rn "TODO:" src astro.config.mjs`로 찾을 수 있다.

- [ ] 검색 등록: [Google Search Console](https://search.google.com/search-console), [네이버 서치어드바이저](https://searchadvisor.naver.com/)에 사이트를 등록하고 `https://mireutale.github.io/sitemap-index.xml` 제출 (`astro.config.mjs`)
- [ ] 링크 미리보기 확인: 카톡·슬랙에 `/backend/`, `/infra/` 링크를 붙여 이미지가 나오는지 확인 (`src/layouts/Base.astro`)
- [ ] 시연 영상: Fruition·Pilltip 30~60초 영상을 찍어 프로젝트 md에 `demo: "주소"` 추가 (`src/content.config.ts`)
- [ ] 기술 목록 맞추기: 프로필 README의 Studying Skills와 `profile/skills.md` 항목이 다름. 어느 쪽 기준으로 맞출지 정하기
- [ ] rhwp 표현 맞추기: 프로필 README는 "HWPX → HWP 저장 시 데이터 손실", `profile/experience.md`는 "HWPX 파일을 저장할 때 정보가 사라지는 문제"
