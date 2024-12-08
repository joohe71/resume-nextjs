import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '태국 골프 여행 투어 예약 챗봇 관리자 WEB 서비스 개발',
      startedAt: '2024-08',
      endedAt: '2024-09',
      where: '시암 엘리트 골프 예약 서비스는 사용자에게 최적의 일정표 추천을 목표',
      descriptions: [
        {
          content: '실시간 예약 수정 기능 구현',
        },
        {
          content: '대량의 데이터를 테이블로 표시하기 위해 커스텀 테이블 구조 개발',
        },
      ],
    },
    {
      title: '슬립베러베이비 APP 개발',
      startedAt: '2024-04',
      endedAt: '2024-09',
      where:
        '부모와 아기의 수면 질 개선을 위한 교육 브랜드로 아기의 행동 패턴을 분석하는 종합 솔루션 제공',
      descriptions: [
        {
          content: '이미지 파일 인코딩',
        },
        {
          content: '절대시간 로직 구현 및 적용',
        },
        {
          content: '베타 테스트를 통한 UI/UX 개선',
        },
        {
          content: '소셜 로그인 기능 구현 및 환경 세팅',
        },
      ],
    },
    {
      title: '화환 주문 WEB 서비스 개발',
      startedAt: '2024-01',
      endedAt: '2024-04',
      where: '빠르고 간편한 모바일 꽃배달 서비스로 다양한 꽃배달 옵션을 제공',
      descriptions: [
        {
          content: '상품 이미지 사이즈 동일하게 조정 및 반응형 구현',
        },
        {
          content: '지역 기반 필터링을 통한 장소 검색 기능 구현',
        },
        {
          content: '인증번호 로그인 기능 구현',
        },
      ],
    },
    {
      title: '해운사 화주(고객용) 챗봇 서비스 개발 (WEB/APP)',
      startedAt: '2023-07',
      endedAt: '2023-12',
      where:
        '해운 물류 비즈니스의 복잡한 업무를 간소화하고, 사용자 편의 증진을 위한 챗봇 서비스를 개발하여 글로벌 시장에서의 경쟁력을 강화하는 것이 목표',
      descriptions: [
        {
          content: 'APP',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Webview 기반 챗봇 APP 개발',
            },
            {
              content: 'WEB ↔️ APP 데이터 통신 기능 구현',
            },
            {
              content: 'PUSH 알림 개발',
            },
          ],
        },

        {
          content: 'WEB',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Mantine Design System 도입으로 컴포넌트 개발 시간 단축 및 반응형 구현',
            },
            {
              content: '국가 및 다국어 처리 모듈 구현',
            },
            { content: '사용자 인증 시스템 및 자동 갱신 구현' },
          ],
        },
      ],
    },

    {
      title: '해운사 내부 데이터 시각화 대시보드 레거시 코드 리팩토링',
      startedAt: '2023-04',
      endedAt: '2023-06',
      where: '대량의 해운 데이터 시각화를 통한 모니터링 기능 제공',
      descriptions: [
        {
          content: '코드 리팩토링 및 유지보수',
        },
        {
          content: '차트 라이브러리 변경으로 부드러운 화면 전환 애니메이션 구현',
        },
        {
          content: '반응형 구현으로 UX 개선',
        },
      ],
    },
    {
      title: '공부선수 사용자 APP / 관리자 WEB 개발',
      startedAt: '2022-10',
      endedAt: '2023-02',
      where: '학습유형검사부터 학습진단컨설팅까지 제공하는 학생 맞춤형 컨설팅 서비스',
      descriptions: [
        {
          content: '사용자 APP',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'EXPO 환경에서 크로스 플랫폼 APP 개발 (Android / IOS)',
            },
            {
              content: '앱 개발 후, 2개의 추가 분양 앱 개발 (2024. 01 ~ 2024. 02)',
            },
          ],
        },

        {
          content: '관리자 WEB',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '사용자 데이터 기반 그래프 시각화',
            },
            { content: '약 9가지 리포트 출력물 마크업 및 데이터 가공 및 연결' },
            {
              content: '대학교 입시 정보 엑셀 파일 데이터 업로드 / 다운로드 기능 구현',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
