import {
  BsYoutube,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsEnvelopeAtFill,
} from 'react-icons/bs';
import BlogIcon from '../assets/icons/BlogIcon';

// HOC
function withStyle(IconComponent) {
  return function StyledIconComponent(props) {
    return <IconComponent className="icon" {...props} />;
  };
}

function SocialIcons() {
  const MyBsGithub = withStyle(BsGithub);
  const MyBsLinkedin = withStyle(BsLinkedin);
  const MyBsYoutube = withStyle(BsYoutube);
  const MyBsEnvelopeAtFill = withStyle(BsEnvelopeAtFill);
  const MyBsInstagram = withStyle(BsInstagram);

  const socialLinks = [
    {
      id: 1,
      icon: <BlogIcon />,
      link: 'https://virgool.io/@naazeri',
    },
    {
      id: 2,
      icon: <MyBsGithub />,
      link: 'https://github.com/naazeri',
    },
    {
      id: 3,
      icon: <MyBsLinkedin />,
      link: 'https://linkedin.com/in/rezanazeri',
    },
    {
      id: 4,
      icon: <MyBsYoutube />,
      link: 'https://youtube.com/@naazeri',
    },
    {
      id: 5,
      icon: <MyBsEnvelopeAtFill />,
      link: 'mailto:reza.nazeri.dev@gmail.com',
    },
    {
      id: 6,
      icon: <MyBsInstagram />,
      link: 'https://instagram.com/re_nazeri',
    },
  ];

  return (
    <div className="flex gap-6 xs:gap-8">
      {socialLinks.map((link) => (
        <a href={link.link} target="_blank" key={link.id}>
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
