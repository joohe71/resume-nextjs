import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Frontend',
  items: [
    'React, Next.js (WEB)',
    'React-Native & Expo (APP)',
    'HTML',
    'CSS (emotion, tailwind)',
    'Javascript',
    'Typescript',
    'SWR, Context API',
  ].map((item) => ({ title: item })),
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Backend',
  items: ['MongoDB', 'Node.js'].map((item) => ({ title: item })),
};

const virtualization: ISkill.Skill = {
  category: 'Tools & Collaboration',
  items: ['VS Code', 'Git', 'NVM', 'Figma', 'Notion', 'Slack', 'Goolge Chat'].map((item) => ({
    title: item,
  })),
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, kernelDevelopment, virtualization],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
