import { faEnvelope, faFile, faPhone, faSmile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/resume_image.jpg';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '강주희 | 프론트엔드 개발자',
    small: '',
  },
  contact: [
    {
      title: 'joohe71@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-7114-7103',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/joohe71',
      icon: faGithub,
    },
    {
      title: '경력기술서',
      link: 'https://local-ironclad-650.notion.site/aae9dac15b364c48832da7385fa8e0a8',
      icon: faFile,
    },
  ],
  notice: {
    title:
      '사용자에게 친근하고 편리한 서비스를 제공하는 디테일한 개발자가 되고자 합니다.\n2년차, 프론트엔드 개발자 강주희입니다.',
    icon: faSmile,
  },
};

export default profile;
