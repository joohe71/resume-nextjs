import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '코딩 테스트 기초 스터디',
      startedAt: '2022-01',
      endedAt: '2022-06',
      where: '기초 코딩 테스트 문제 풀이 및 알고리즘 학습',
      descriptions: [
        '단순 문제 풀이형식이 아닌 라이브 코딩으로 실제 코딩 테스트와 유사하게 진행',
        '실제 코딩 테스트에 참가하여 서로의 풀이 방법 공유',
        '엘리스 AI 트랙 4기 교육 과정 중 자발적인 스터디 수행',
      ].map((item) => ({ content: item })),
    },
  ],
};

export default project;
