import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '코딩 테스트 기초 스터디',
      subTitle: '기초 코딩 테스트 문제 풀이 및 알고리즘 학습',
      at: '2017-10',
      descriptions: [
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://www.slideshare.net/',
        },
      ],
    },
  ],
};

export default presentation;
