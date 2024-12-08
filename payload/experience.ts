import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '크레타렙스',
      position: 'Frontend Developer',
      startedAt: '2024-07',
      endedAt: '2024-09',
      descriptions: ['데이터하이브에서 소속 이전하여 동일 업무 수행'],
    },
    {
      title: '데이터하이브',
      position: 'Frontend Developer',
      startedAt: '2022-10',
      endedAt: '2024-07',
      descriptions: [
        '공부선수 사용자 APP / 관리자 WEB 개발',
        '해운사 내부 데이터 시각화 대시보드 레거시 코드 리팩토링',
        '해운사 화주(고객용) 챗봇 서비스 개발 (WEB / APP)',
        '화환 주문 WEB 서비스 개발',
        '슬립베러베이비 APP 개발',
        '태국 골프 여행 투어 예약 챗봇 관리자 WEB 서비스 개발',
      ],
    },
    {
      title: '엘리스',
      position: '운영 오퍼레이터',
      startedAt: '2021-08',
      endedAt: '2021-11',
      descriptions: [
        '인턴 근무',
        'AI 트랙 2기 교육 운영 및 교육생 데이터 기반 대시보드 제작',
        '만족도 조사 분석',
      ],
    },
  ],
};

export default experience;
