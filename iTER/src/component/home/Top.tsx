import { styled } from '../../../stitches.config';
import Notification from '../../assets/icon/Notification.svg?react';
import ITER from '../../assets/icon/ITER.svg?react';
import { useNavigate } from 'react-router-dom';

const Top = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Icon>
        <ITER width={45} height={31} />
        <div onClick={() => navigate('/notification')}>
          <Notification />
        </div>
      </Icon>
    </Container>
  );
};

export default Top;

const Container = styled('div', {
  width: '100%',
  height: '60px',
  display: 'flex',
});

const Icon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '265px',
  margin: '0 auto',
});
