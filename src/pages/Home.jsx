import Container from '../components/Container';
import ProfileImage from '../components/ProfileImage';
import SocialIcons from '../components/SocialIcons';

function Home() {
  return (
    <Container>
      <ProfileImage
        imageSrc={'/images/reza-nazeri-3.webp'}
        alt="reza nazeri profile image"
      />
      <h1 className="myName">- Reza Nazeri -</h1>
      <SocialIcons />
    </Container>
  );
}

export default Home;
