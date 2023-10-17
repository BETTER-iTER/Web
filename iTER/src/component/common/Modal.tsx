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
      <ModalBox>
        <div style={{ height: 110 }}>
          <Headline4>{text}</Headline4>
        </div>
        <Button onClick={onClick}>
          <ButtonText>{btn}</ButtonText>
        </Button>
      </ModalBox>
    </Back>
  );
};

export default Modal;

const Back = styled('div', {
  backgroundColor: 'rgba(25, 25, 25, 0.8)',
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pointerEvents: 'auto',
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
});

const Button = styled('div', {
  borderTop: '1px solid $Gray10',
  height: '50px',
  cursor: 'pointer',
});
