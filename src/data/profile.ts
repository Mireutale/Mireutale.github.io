export const profile = {
  name: '강태진',
  nameEn: 'Taejin Kang',
  tagline: '고민하고, 문제를 탐구하는 것을 좋아하는 개발자',
  intro:
    '부산대학교 정보컴퓨터공학부를 졸업했고, 백엔드와 인프라를 중심으로 서비스를 만들어 왔습니다. 현재 AI·SW 마에스트로 17기 연수생으로 팀 Fruition에서 활동하고 있습니다.',
  email: 'mireutale@gmail.com',
  github: 'https://github.com/Mireutale',
  facts: [
    { label: '학력', value: '부산대학교 정보컴퓨터공학 학사 (2020 ~ 2026)' },
    { label: '경력', value: '주식회사 뉴아이 개발 인턴 (2025.06 ~ 2025.08)' },
    { label: '현재', value: 'AI·SW 마에스트로 17기, 팀 Fruition' },
    { label: '자격', value: '정보처리기사 (2026.06)' },
  ],
  awards: [
    { date: '2025.10', title: '부산대학교 졸업과제 SW/AI 분과 금상 (1위)', team: 'Pilltip' },
    { date: '2025.09', title: '부산 데이터 위크 2025 데이터활용 우수사례 최우수상 (1위)', team: 'Pilltip' },
    { date: '2025.09', title: 'Google.org AI 커리어스쿨 창업톤 L:AUNCH 장려상 (3위)', team: 'Pilltip' },
    { date: '2025.08', title: 'SW중심대학 디지털 경진대회 SW부문 기업상', team: 'Pilltip' },
  ],
} as const;
