import { keyframes } from '@stitches/react';
import { useEffect } from 'react';
import { styled } from '../../../stitches.config';
import { ButtonText } from '../Font';

const Toast = ({ message, onClose }: { message: string; onClose?: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose && onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Container>
      <ButtonText>
        <ToastBox>{message}</ToastBox>
      </ButtonText>
    </Container>
  );
};

export default Toast;

const Container = styled('div', {
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  top: '10px',
  zIndex: 100,
});

const toast = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const ToastBox = styled('div', {
  borderRadius: '10px',
  backgroundColor: '$Brand',
  color: '$White',
  width: '340px',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: `${toast} 3s ease-in-out`,
});
