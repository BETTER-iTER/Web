import LoadingGif from '../../assets/icon/Iter_loading.gif';
import { styled } from '../../../stitches.config';

const LoadingPage = () => {
  return (
    <>
      <Lay>
        <img src={LoadingGif} alt="Loading" width={260} height={260} />
      </Lay>
    </>
  );
};

export default LoadingPage;

const Lay = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 10000,
  position: 'absolute',
  top: 0,
  left: 0,
});
