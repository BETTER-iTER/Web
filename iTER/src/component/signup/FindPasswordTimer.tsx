import { useEffect, useState } from 'react';
import { styled } from '../../../stitches.config';
import Modal from '../common/Modal';

interface TimerProps {
  min: number;
  onChange: (value: boolean) => void;
}

const Timer = ({ min, onChange }: TimerProps) => {
  const MINUTES_IN_MS = min * 60 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);
  const [modal, setModal] = useState<boolean>(false);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);
    if (timeLeft <= 0) {
      clearInterval(timer);
      onChange(false);
      setModal(true);
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <>
      {timeLeft > 0 && (
        <StyledTimer>
          {minutes}:{second}
        </StyledTimer>
      )}
      <ModalBox>
        {modal && (
          <Modal
            text="인증번호 유효시간이 만료되었습니다"
            onClick={() => {
              setModal(false);
            }}
            btn="확인"
          />
        )}
      </ModalBox>
    </>
  );
};

export default Timer;

const StyledTimer = styled('div', {
  bodyText: 2,
  color: '$Gray50',
});

const ModalBox = styled('div', {
  position: 'absolute',
  top: '-285px',
  left: '-30px',
  zIndex: 2,
});
