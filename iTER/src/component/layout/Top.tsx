import { styled } from '../../../stitches.config';
import Back from '../../assets/icon/Back.svg?react';

const Top = ({ title }: { title: string }) => {
  return (
    <Container>
      <BackBox onClick={() => {}}>
        <Back />
      </BackBox>
      <Title>{title}</Title>
    </Container>
  );
};

export default Top;

const Container = styled('div', {
  width: '100%',
  height: '60px',
  backgroundColor: '$White',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: 'solid 1px #EAEEF2',
});

const Title = styled('div', {
  color: '#24292F',
  fontSize: '16px',
  fontWeight: '600',
});

const BackBox = styled('div', {
  position: 'absolute',
  left: '25px',
  top: '30px',
});
