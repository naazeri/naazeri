import {
  BsYoutube,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsEnvelopeAtFill,
} from 'react-icons/bs';
import BlogIcon from '../assets/icons/BlogIcon';
import { Link } from 'react-router-dom';

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
      link: '/blog',
      // link: 'https://virgool.io/@naazeri',
      isExternalLink: false,
    },
    {
      id: 2,
      icon: <MyBsGithub />,
      link: 'https://github.com/naazeri',
      isExternalLink: true,
    },
    {
      id: 3,
      icon: <MyBsLinkedin />,
      link: 'https://linkedin.com/in/rezanazeri',
      isExternalLink: true,
    },
    {
      id: 4,
      icon: <MyBsYoutube />,
      link: 'https://youtube.com/@naazeri',
      isExternalLink: true,
    },
    {
      id: 5,
      icon: <MyBsEnvelopeAtFill />,
      link: 'mailto:reza.nazeri.dev@gmail.com',
      isExternalLink: true,
    },
    {
      id: 6,
      icon: <MyBsInstagram />,
      link: 'https://instagram.com/re_nazeri',
      isExternalLink: true,
    },
  ];

  return (
    <div className="flex gap-6 xs:gap-8">
      {socialLinks.map((link) =>
        link.isExternalLink ? (
          <a href={link.link} target="_blank" key={link.id}>
            {link.icon}
          </a>
        ) : (
          <Link to={link.link} key={link.id}>
            {link.icon}
          </Link>
        )
      )}
    </div>
  );
}

export default SocialIcons;
