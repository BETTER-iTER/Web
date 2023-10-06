import { styled } from '../../../stitches.config';
import Back from '../../assets/icon/Back.svg?react';
import { useNavigate } from 'react-router-dom';
import { LabelText } from '../Font';

const Top = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackBox
        onClick={() => {
          navigate(-1);
        }}
      >
        <Back />
      </BackBox>
      <Title>
        <LabelText>{title}</LabelText>
      </Title>
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
  position: 'absolute',
  top: '0',
  left: '0',
});

const Title = styled('div', {
  color: '#24292F',
});

const BackBox = styled('div', {
  position: 'absolute',
  left: '20px',
  top: '20px',
});
