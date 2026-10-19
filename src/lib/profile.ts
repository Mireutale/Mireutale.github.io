import { field, parseBlocks } from './blocks';
import experienceMd from '../content/profile/experience.md?raw';
import awardsMd from '../content/profile/awards.md?raw';
import certificationsMd from '../content/profile/certifications.md?raw';
import skillsMd from '../content/profile/skills.md?raw';

// 화면 순서 = md 파일에 적힌 순서
export const experience = parseBlocks(experienceMd).map((b) => ({
  org: field(b, '기관', 'experience.md'),
  role: field(b, '역할', 'experience.md'),
  period: field(b, '기간', 'experience.md'),
  summary: b.summary,
  bullets: b.bullets,
  sections: b.sections,
}));

export const awards = parseBlocks(awardsMd).map((b) => ({
  date: field(b, '날짜', 'awards.md'),
  title: field(b, '이름', 'awards.md'),
  org: field(b, '기관', 'awards.md'),
  team: b.fields['팀'],
}));

export const certifications = parseBlocks(certificationsMd).map((b) => ({
  date: field(b, '날짜', 'certifications.md'),
  title: field(b, '이름', 'certifications.md'),
  org: field(b, '기관', 'certifications.md'),
  grade: b.fields['등급'],
}));

export const skills = parseBlocks(skillsMd).map((b) => ({
  group: field(b, '분류', 'skills.md'),
  items: field(b, '기술', 'skills.md').split(',').map((s) => s.trim()).filter(Boolean),
}));
