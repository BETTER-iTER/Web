import { styled } from '@stitches/react';
import Nav from '../component/layout/Nav';

const Home = () => {
  return (
    <Container>
      <Nav />
    </Container>
  );
};

export default Home;

const Container = styled('div', {
  width: '390px',
  height: '100vh',
  backgroundColor: '$Gray10',
  // border: '1px solid red',
});
