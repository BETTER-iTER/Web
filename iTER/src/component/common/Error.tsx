import { styled } from '../../../stitches.config';
import ErrorNetwork from '../../assets/icon/error/ErrorNetwork.svg?react';
import ErrorIcon from '../../assets/icon/error/ErrorIcon.svg?react';
const ErrorPage = ({ type }: { type: number }) => {
  return (
    <Container>
      {type == 1 ? <ErrorNetwork /> : <ErrorIcon width={50} height={50} fill={'black'} />}
      {type == 1 ? '네크워크 다시 연결하기' : '다시 시도하기'}
    </Container>
  );
};
export default ErrorPage;

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  color: '$Gray50',
  flexDirection: 'column',
  gap: '26px',
});
