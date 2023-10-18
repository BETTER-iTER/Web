import { styled } from '../../../stitches.config';
import Back from '../../assets/icon/Back.svg?react';
import { useNavigate } from 'react-router-dom';
import { LabelText } from '../Font';

const Top = ({ title, back, search }: { title?: string; back?: () => void; search?: boolean }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackBox onClick={back ? back : () => navigate(-1)}>
        <Back />
      </BackBox>
      <>
        {title && (
          <Title>
            <LabelText>{title}</LabelText>
          </Title>
        )}
        {search && <Input placeholder="검색어를 입력해 주세요" />}
      </>
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
  borderBottom: 'solid 1px #EAEEF2',
  color: '$TitleBlack',
  padding: '0 20px',
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

const Input = styled('input', {
  border: '1px solid $Gray10',
  borderRadius: '5px',
  width: '298px',
  height: '18px',
  padding: '10px',
  bodyText: 2,
  '&:focus': {
    outline: 'none',
  },
  '::placeholder': {
    color: '$Gray10',
  },
});

const Title = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
