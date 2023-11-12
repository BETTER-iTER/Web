import { styled } from '../../../stitches.config';
import Back from '../../assets/icon/Back.svg?react';
import { useNavigate } from 'react-router-dom';
import { LabelText } from '../Font';

const Top = ({ title, back }: { title?: string; back?: () => void }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackBox onClick={back ? back : () => navigate(-1)}>
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
  width: '350px',
  height: '60px',
  backgroundColor: '$White',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: 'solid 1px $Bar',
  color: '$TitleBlack',
  padding: '0 20px',
  zIndex: 2,
  position: 'sticky',
  top: 0,
});

const BackBox = styled('div', {
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 'auto',
  cursor: 'pointer',
});

const Title = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
