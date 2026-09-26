export type Project = {
  name: string;
  period: string;
  type: '팀' | '개인';
  summary: string;
  stack: string[];
  repo: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Pilltip',
    period: '2025.03 ~ 2025.12',
    type: '팀',
    summary:
      '개인맞춤 AI 안심복약 솔루션. 복약 정보와 건강 데이터를 기반으로 안전한 복약을 돕는 서비스로, 졸업과제 금상과 부산 데이터 위크 최우수상을 받았습니다.',
    stack: ['Spring Boot', 'JPA', 'MySQL', 'AWS', 'Docker'],
    repo: 'https://github.com/PillTipKR/Pilltip',
    featured: true,
  },
  {
    name: '분산 동시성 스트레스 테스트',
    period: '2025.11',
    type: '개인',
    summary:
      '라운드로빈 로드밸런서와 다중 서버 인스턴스로 수강신청 고부하 시나리오를 시뮬레이션. 우선순위 큐 기반 접근 제어를 구현하고 k6로 부하를 측정했습니다.',
    stack: ['Java 21', 'Spring Boot', 'WebFlux', 'PostgreSQL', 'k6', 'Docker'],
    repo: 'https://github.com/Mireutale/java-Distributed-Concurrency-Stress-Test',
  },
  {
    name: '지역별 날씨 기반 옷차림 추천',
    period: '2025.03 ~ 2025.05',
    type: '팀',
    summary:
      '검색한 지역의 날씨 데이터를 활용해 의상을 추천하는 서비스. 클라우드컴퓨팅 수업 프로젝트로 백엔드를 담당했습니다.',
    stack: ['Python', 'TypeScript', 'Docker'],
    repo: 'https://github.com/Mireutale/cloudComputingProject',
  },
  {
    name: '당근마켓 클론코딩',
    period: '2024.11 ~ 2025.02',
    type: '팀',
    summary:
      'PNU Mini Bootcamp 프로젝트. 당근마켓 API를 리버싱해 FastAPI로 백엔드를 구현하고 React 프론트와 연결했습니다.',
    stack: ['FastAPI', 'SQLModel', 'React'],
    repo: 'https://github.com/Mireutale/Project_API',
  },
  {
    name: 'googleCalendar-Lunar',
    period: '2026',
    type: '개인',
    summary:
      '음력 생일을 연도별 양력 날짜로 계산해 하나의 .ics 캘린더 구독으로 자동 생성. secret gist 발행으로 개인정보 노출 없이 공유합니다.',
    stack: ['Python', 'GitHub Actions', 'iCalendar'],
    repo: 'https://github.com/Mireutale/googleCalendar-Lunar',
  },
  {
    name: 'Gap 티스토리 스킨',
    period: '2026',
    type: '개인',
    summary:
      '크림/차콜 팔레트의 에디토리얼 티스토리 스킨. 라이트/다크 자동 테마, 코드 하이라이트, KaTeX 수식 지원.',
    stack: ['HTML', 'CSS', 'Tistory'],
    repo: 'https://github.com/Mireutale/gap-tistory-skin',
  },
];
