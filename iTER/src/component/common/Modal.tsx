import { FC } from 'react';
import { styled } from '../../../stitches.config';
import { ButtonText, Headline4 } from '../Font';

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
            <SelectButton onClick={onClosed}>
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

export default Modal;

const Back = styled('div', {
  backgroundColor: 'rgba(25, 25, 25, 0.8)',
  width: '100vw',
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
  marginTop: '50%',
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
