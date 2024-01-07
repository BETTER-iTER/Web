import { FC } from 'react';
import { styled } from '../../../stitches.config';
import { ButtonText, Headline4 } from '../Font';
import Xbtn from '../../assets/icon/Xbtn.svg?react';

interface ModalProps {
  text: string;
  btn: string;
  onClick: () => void;
  onClosed?: () => void;
}

const Modal: FC<ModalProps> = ({ text, btn, onClick, onClosed }) => {
  return (
    <Back
      onClick={() => {
        onClosed && onClosed();
      }}
    >
      <Container>
        <ModalBox>
          <div style={{ height: 110 }}>
            <Headline4>{text}</Headline4>
          </div>
          <Button onClick={onClick}>
            <ButtonText>{btn}</ButtonText>
          </Button>
        </ModalBox>
      </Container>
    </Back>
  );
};

export const ModalSelect: FC<ModalProps> = ({ text, btn, onClick, onClosed }) => {
  return (
    <Back
      onClick={() => {
        onClosed && onClosed();
      }}
    >
      <Container>
        <ModalBox>
          <div style={{ height: 110 }}>
            <Headline4>{text}</Headline4>
          </div>
          <Buttons>
            <SelectButton onClick={() => console.log('클릭')}>
              <ButtonText>취소</ButtonText>
            </SelectButton>
            <SelectButton onClick={onClick}>
              <ButtonText>{btn}</ButtonText>
            </SelectButton>
          </Buttons>
        </ModalBox>
      </Container>
    </Back>
  );
};

export const ModalMyPoint: FC<ModalProps> = ({ onClick, onClosed }) => {
  const score = [
    { title: '리뷰를 작성하면', score: '+ 20점' },
    { title: 'IT 퀴즈를 풀면', score: '+3점' },
    { title: 'IT 퀴즈 정답을 맞히면', score: '+5점' },
    { title: '리뷰 좋아요', score: '+7점' },
    { title: '리뷰 스크랩', score: '+10점' },
  ];

  return (
    <Back
      onClick={() => {
        onClosed && onClosed();
      }}
    >
      <Container>
        <PointModalBox>
          <XbtnLay onClick={onClosed}>
            <Xbtn width={28} height={28} />
          </XbtnLay>
          <Title>
            <Headline4>
              포인트가 500점 이상이면
              <br />
              ITet가 인정하는 IT 전문가에요
            </Headline4>
          </Title>
          <Info>
            {score.map((item, index) => (
              <Item key={index}>
                <ContainerP>
                  <TitleContainer>{item.title}</TitleContainer>
                  <ScoreContainer>{item.score}</ScoreContainer>
                </ContainerP>
              </Item>
            ))}
          </Info>
        </PointModalBox>
      </Container>
    </Back>
  );
};

export default Modal;

const Back = styled('div', {
  backgroundColor: 'rgba(25, 25, 25, 0.8)',
  width: '100%',
  height: '100vh',
  position: 'fixed',
  left: '0',
  top: '0',
  justifyContent: 'center',
  alignItems: 'center',
  pointerEvents: 'auto',
  zIndex: 1000,
});

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pointerEvents: 'none',
});

const ModalBox = styled('div', {
  width: '340px',
  backgroundColor: `$White`,
  borderRadius: '20px',
  flexDirection: 'column',
  ' & > div': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overflow: 'hidden',
  pointerEvents: 'auto',
  position: 'fixed',
  transform: 'translateY(-50%)',
  top: '50%',
});

const Button = styled('div', {
  borderTop: '1px solid $Gray10',
  height: '50px',
  cursor: 'pointer',
});

const Buttons = styled('div', {
  display: 'flex',
});

const SelectButton = styled('div', {
  width: '50%',
  borderTop: '1px solid $Gray10',
  height: '50px',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  '&:first-child': {
    borderRight: '1px solid $Gray10',
  },
  '&:last-child': {
    backgroundColor: '$Gray40',
    color: '$White',
  },
});

const PointModalBox = styled('div', {
  width: '340px',
  height: '296px',
  borderRadius: '20px',
  backgroundColor: '#FFF',
  position: 'fixed',
  transform: 'translateY(-50%)',
  top: '50%',
});

const Title = styled('div', {
  color: '24292F',
  textAlign: 'center',
  marginTop: '-10px',
});

//여기서부터 point 모달창 스타일
const ContainerP = styled('div', {
  width: '250px',
  marginLeft: '46px',
});

const Item = styled('div', {
  bodyText: 1,
  display: 'flex',
  marginBottom: '8px',
  color: '#8E9198',
});

const TitleContainer = styled('div', {
  float: 'left',
});

const ScoreContainer = styled('div', {
  float: 'right',
});

const Info = styled('div', {
  marginTop: '30px',
});

const XbtnLay = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: '16px',
  marginTop: '16px',
  cursor: 'pointer',
});
