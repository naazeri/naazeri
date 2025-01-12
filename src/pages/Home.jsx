import {
  BsYoutube,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsEnvelopeAtFill,
} from 'react-icons/bs';
import Container from '../components/Container';
import Icon from '../components/Icon';
import ProfileImage from '../components/ProfileImage';
import SocialIcons from '../components/SocialIcons';
import BlogIcon from '../assets/icons/BlogIcon';

function Home() {
  return (
    <Container>
      <ProfileImage
        imageSrc={'/images/reza-nazeri-3.webp'}
        alt="reza nazeri profile image"
      />
      <h1 className="text-white font-kaushan text-5xl font-light transform rotate-[-5deg]">
        - Reza Nazeri -
      </h1>
      <SocialIcons>
        <Icon link="https://virgool.io/@naazeri">
          <BlogIcon />
        </Icon>
        <Icon IconComponent={BsGithub} link="https://github.com/naazeri/" />
        <Icon
          IconComponent={BsLinkedin}
          link="https://linkedin.com/in/rezanazeri/"
        />
        <Icon IconComponent={BsYoutube} link="https://youtube.com/@naazeri" />
        <Icon
          IconComponent={BsEnvelopeAtFill}
          link="mailto:reza.nazeri.dev@gmail.com"
        />
        <Icon
          IconComponent={BsInstagram}
          link="https://instagram.com/re_nazeri/"
        />
      </SocialIcons>
    </Container>
  );
}

export default Home;
