export const profile = {
  name: '강태진',
  nameEn: 'Taejin Kang',
  role: '백엔드 엔지니어',
  tagline: '왜 만드는지, 어떻게 동작하는지를 먼저 묻는 백엔드 개발자',
  email: 'mireutale@gmail.com',
  github: 'https://github.com/Mireutale',
  blog: 'https://mireutale.tistory.com',
  about: [
    '저는 호기심 많은 개발자입니다. 고민하고 탐구하는 과정을 즐기며, 여러 시행착오 속에서 배우고 발전합니다.',
    '여러 기술을 사용해보는 것을 좋아하고, 기술보다 "이 서비스는 왜 필요하고 어떤 구조여야 하는가"를 먼저 묻습니다.',
    '요즘은 클라우드·인프라와 LLM을 활용한 개발에 가장 관심이 많고, 여러 오픈소스를 직접 써보며 경험을 넓히고 있습니다.',
  ],
  traits: [
    {
      text: '컨퍼런스 및 외부 네트워킹을 통해 기술적 시야를 넓히고, 여러 오픈 소스를 살펴보며 새로운 기술을 꾸준히 학습합니다.',
    },
    {
      text: '새로 배운 지식은 기술적인 내용이 아니더라도 팀과 적극적으로 공유하며 함께 성장하고자 합니다.',
    },
    {
      text: '팀 프로젝트에서 항상 상대를 존중하는 태도로 프로젝트를 진행합니다.',
    },
  ],
  experience: [
    {
      org: '오픈소스 기여',
      role: 'rhwp · Rust 기반 HWP 뷰어·에디터',
      period: '2026.06',
      summary: 'AI를 활용한 [rhwp](https://github.com/edwardkim/rhwp) 오픈소스 기여 · AI 기반 코드 분석 및 직접 검증, 데이터 손실 수정 PR 4건 반영',
      bullets: [
        'HWPX → HWP 저장 과정에서 일부 정보가 사라지는 문제를 분석해 수정 4건 반영: 표 테두리 대각선 방향 정보 유지, 문단 번호 겹침 방지, 그림의 그림자·효과 정보 보존, 표 칸 안의 탭·줄바꿈 저장',
        '처음 보는 Rust 코드와 문제 상황을 AI로 빠르게 파악하되, 제안을 그대로 쓰지 않고 기존 코드 방식과 테스트로 직접 검증',
        '모든 수정에 기능이 깨지지 않는지 확인하는 테스트 추가',
      ],
    },
    {
      org: '팀 Pilltip',
      role: '3인 팀 프로젝트',
      period: '2025.03 ~ 2025.12',
      summary: '개인맞춤 AI 안심복약 솔루션 [Pilltip](https://github.com/PillTipKR/Pilltip) · 백엔드 · 웹 프론트 · 설계 · 온프레미스 인프라 담당',
      bullets: [
        '온프레미스 서버 구축·운영, YOLOv8 알약 인식 모델 학습(정답률 92%)',
        'JWT 인증·DB 설계·민감 데이터 암호화, 의약품 공공데이터 파이프라인 구성',
        '자세한 내용은 [Projects](#projects) 참고',
      ],
    },
    {
      org: '팀 Fruition',
      role: '3인 팀 프로젝트',
      period: '2026.04 ~ 현재',
      summary: 'AI·SW 마에스트로 17기 연수생 · [Fruition](https://github.com/FruitionKR) 팀장 · 기획 · 아키텍처 · 프론트 · AWS 인프라 · DevOps 담당',
      bullets: [
        'AWS EKS 기반 MSA 아키텍처 설계 및 CI/CD·모니터링 구축',
        'Next.js 프론트엔드 개발, 팀 일정·배포 관리',
        '자세한 내용은 [Projects](#projects) 참고',
      ],
    },
    {
      org: '주식회사 뉴아이',
      role: '개발 인턴',
      period: '2025.06 ~ 2025.08',
      summary: '로그인/회원가입 웹 페이지 구현 · 무역 서류 자동화 솔루션 · 실무 경험',
      bullets: [
        '종이 무역 서류를 OCR로 읽어 관세청 unipass API에 연동, 수출입 서류 입력을 자동화',
        '처음 다루는 React·Next.js로 로그인·회원가입 웹 페이지를 직접 구현',
        '서류 양식마다 다른 필드를 어떻게 정규화할지 설계하며 OCR 결과 후처리 담당',
      ],
    },
  ],
  education: [
    {
      org: '부산대학교',
      role: '정보컴퓨터공학 학사',
      period: '2020.02 ~ 2026.02',
      summary: '교내 학술 보안동아리 [KEEPER](https://keeper.or.kr/) 활동',
      bullets: [
        'KEEPER 14기 (2022.08 ~ 2026.02)',
        '15.5기(2024년 2학기)·16기(2025년 1학기) 멘토로 신입 회원 학습 지원',
        '학술부장 (2024.08 ~ 2025.08)',
      ],
      sections: [
        {
          summary: '교내 성과 및 활동',
          bullets: [
            '2025 K-ICT in Busan 부산대학교 대표 참가 (2025.07)',
            '졸업과제 SW/AI 분과 금상 (1위) · 팀 Pilltip (2025.10)',
            'SW중심대학 마일스톤 장학생, SW전문인재S 선정 (2025.10)',
            'SK AI SUMMIT 2025 부산대학교 대표 참가 (2025.11)',
          ],
        },
      ],
    },
  ],
  awards: [
    { date: '2025.08', title: 'SW중심대학 디지털 경진대회 SW부문 후원기업상', org: 'SW중심대학협의회', team: 'Pilltip' },
    { date: '2025.09', title: 'Google.org AI 커리어스쿨 창업톤 L:AUNCH 장려상 (3위)', org: 'Google.org', team: 'Pilltip' },
    { date: '2025.09', title: '부산 데이터 위크 2025 데이터활용 우수사례 최우수상 (1위)', org: '부산광역시', team: 'Pilltip' },
  ],
  certifications: [
    { date: '2025.05', title: 'TOPCIT', org: '정보통신기획평가원', grade: 'Level 3 (557점)' },
    { date: '2025.05', title: 'PCCP', org: '프로그래머스', grade: 'Lv.2' },
    { date: '2026.02', title: 'OPIc', org: 'ACTFL', grade: 'IM2' },
    { date: '2026.06', title: '정보처리기사', org: '한국산업인력공단' },
  ],
} as const;
