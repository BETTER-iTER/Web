import { useEffect, useState } from 'react';
import { styled } from '../../../stitches.config';

interface TimerProps {
  min: number;
  onChange: (value: boolean) => void;
}

const Timer = ({ min, onChange }: TimerProps) => {
  const MINUTES_IN_MS = min * 60 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);
    if (timeLeft <= 0) {
      clearInterval(timer);
      onChange(false);
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <StyledTimer>
      {minutes}:{second}
    </StyledTimer>
  );
};

export default Timer;

const StyledTimer = styled('div', {
  bodyText: 2,
  color: '$Gray50',
});
