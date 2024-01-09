import iTER from '../assets/icon/iTER.svg';
import { styled } from '../../stitches.config';
import { Caption1 } from '../component/Font';
import Button from '../component/common/Button';
const Cover = styled('div', {
  marginTop: '213px',
});

const Title = styled('div', {
  fontSize: '30px',
  fontWeight: '600',
  color: '$Brand',
});
const Box = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '$White',
  textAlign: 'center',
});

const Top = styled('div', {
  fontSize: '20px',
  fontWeight: '600',
  color: '$Brand',
  lineHeight: '28px',
  marginBottom: '116px',
});

const Sub = styled('div', {
  marginTop: '145px',
  color: '$Gray50',
});

const BtnBody = styled('div', {
  marginTop: '34px',
});
const Onboading = () => {
  return (
    <Box>
      <Cover>
        <Top>
          삶의 질을 높여주는
          <br />
          IT 제품리뷰 서비스
        </Top>
        <img style={{ width: '100px', height: '68.7px' }} src={iTER} alt="logo" />
        <Title>ITer</Title>
        <Sub>
          <Caption1>로그인 후 더 편리해진 ITer를 이용해보세요!</Caption1>
        </Sub>
        <BtnBody>
          <Button
            onClick={() => {
              window.location.href = '/login';
            }}
            children="로그인"
            disabled={false}
          />
        </BtnBody>
      </Cover>
    </Box>
  );
};

export default Onboading;
