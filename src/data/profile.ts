export const profile = {
  name: '강태진',
  nameEn: 'Taejin Kang',
  role: '백엔드 엔지니어',
  tagline: '고민하고, 문제를 탐구하는 것을 좋아하는 개발자',
  email: 'mireutale@gmail.com',
  github: 'https://github.com/Mireutale',
  blog: 'https://mireutale.tistory.com',
  about: [
    '부산대학교 정보컴퓨터공학부를 졸업하고, Java / Spring과 Python / FastAPI 기반의 백엔드 개발을 해왔습니다. 인턴으로 무역 서류 OCR 자동화 시스템과 로그인·회원가입 웹을 개발했고, 팀 프로젝트 Pilltip으로 졸업과제 금상과 부산 데이터 위크 최우수상을 받았습니다.',
    '동시성과 부하 상황에서 시스템이 어떻게 무너지고 어떻게 버티는지에 관심이 많습니다. 로드밸런서와 우선순위 큐를 직접 구현해 k6로 스트레스 테스트를 돌려보는 식으로, 궁금한 것은 손으로 만들어 확인하는 편입니다.',
    '현재 AI·SW 마에스트로 17기 연수생으로 팀 Fruition에서 활동하고 있습니다.',
  ],
  experience: [
    {
      org: 'AI·SW 마에스트로 17기',
      url: 'https://swmaestro.org',
      role: '연수생 · 팀 Fruition',
      period: '2026.04 ~ 현재',
      summary: '과학기술정보통신부 주관 SW 인재 양성 프로그램',
      bullets: ['서울 센터 17기 연수생', '팀 Fruition 백엔드 담당'],
    },
    {
      org: '주식회사 뉴아이',
      role: '개발 인턴',
      period: '2025.06 ~ 2025.08',
      summary: '무역 서류 자동화 솔루션',
      bullets: [
        '로그인 및 회원가입 웹 페이지 개발 (React, Next.js)',
        'OCR을 활용한 무역 서류 자동화 시스템 개발',
        'unipass API 연동으로 수출입 서류 자동화',
      ],
    },
  ],
  education: [
    {
      org: '부산대학교',
      role: '정보컴퓨터공학 학사',
      period: '2020.02 ~ 2026.02',
      summary: '보안동아리 KEEPER 활동',
      bullets: ['KEEPER 멘토 및 학술부장 (2024.08 ~ 2025.08)', 'SW중심대학 마일스톤 장학생, SW전문인재S 선정 (2025.10)'],
    },
    {
      org: '정보처리기사',
      role: '국가기술자격',
      period: '2026.06',
      summary: '한국산업인력공단',
      bullets: [],
    },
  ],
  awards: [
    { date: '2025.10', title: '부산대학교 졸업과제 SW/AI 분과 금상 (1위)', org: '부산대학교', team: 'Pilltip' },
    { date: '2025.09', title: '부산 데이터 위크 2025 데이터활용 우수사례 최우수상 (1위)', org: '부산광역시', team: 'Pilltip' },
    { date: '2025.09', title: 'Google.org AI 커리어스쿨 창업톤 L:AUNCH 장려상 (3위)', org: 'Google.org', team: 'Pilltip' },
    { date: '2025.08', title: 'SW중심대학 디지털 경진대회 SW부문 기업상', org: 'SW중심대학협의회', team: 'Pilltip' },
    { date: '2025.11', title: 'SK AI SUMMIT 2025 부산대학교 대표 참가', org: 'SK Telecom', team: 'Pilltip' },
    { date: '2025.07', title: '2025 K-ICT in Busan 부산대학교 대표 참가', org: 'SK Telecom', team: 'Pilltip' },
  ],
} as const;
