import { styled } from '../../../stitches.config';
import Modal from '../common/Modal';
import { Caption2, Headline4 } from '../Font';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface QuizProps {
  id: number;
  question: string;
}

const Quiz = ({ id, question }: QuizProps) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState<boolean>(false);

  const handleGo = () => {
    if (id == 2) {
      console.log('퀴즈풀러가기');
    } else {
      setModal(true);
    }
  };

  return (
    <>
      <Container>
        <Title>
          <Headline4>오늘의 퀴즈</Headline4>
        </Title>
        <Content>Q. {question}</Content>
        <Go onClick={() => handleGo()}>
          <Caption2>퀴즈 풀어보기</Caption2>
        </Go>
      </Container>
      {modal && (
        <Modal
          text="로그인이 필요한 서비스입니다."
          btn="로그인"
          onClick={() => {
            navigate('/login');
          }}
          onClosed={() => {
            setModal(false);
          }}
        />
      )}
    </>
  );
};

export default Quiz;

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '340px',
  overflow: 'hidden',
  borderRadius: '10px',
  backgroundColor: '$White',
  margin: '5px 0 20px 0',
  boxShadow: '2px 4px 4px 2px rgba(158, 158, 158, 0.25)',
});

const Title = styled('div', {
  color: '$White',
  width: '360px',
  backgroundColor: '$Brand',
  padding: '15px 0',
  textAlign: 'center',
});

const Content = styled('div', {
  textAlign: 'center',
  bodyText: 1,
  lineHeight: '20px',
  padding: '23px 0',
});

const Go = styled('div', {
  padding: '3px 0 20px 0',
  textAlign: 'center',
  cursor: 'pointer',
  color: '$Gray40',
});
