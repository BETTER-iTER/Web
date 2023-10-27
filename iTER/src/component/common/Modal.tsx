import { FC } from 'react';
import { styled } from '../../../stitches.config';
import { ButtonText, Headline4 } from '../Font';

interface ModalProps {
  text: string;
  onClick: () => void;
}

const Modal: FC<ModalProps> = ({ text, onClick }) => {
  return (
    <Back>
      <ModalBox>
        <div style={{ height: 110 }}>
          <Headline4>{text}</Headline4>
        </div>
        <Button onClick={onClick}>
          <ButtonText>확인</ButtonText>
        </Button>
      </ModalBox>
    </Back>
  );
};

export default Modal;

const Back = styled('div', {
  backgroundColor: 'rgba(25, 25, 25, 0.8)',
  width: '390px',
  height: '100vh',
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
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
