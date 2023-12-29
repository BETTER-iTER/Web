import { styled } from '../../../stitches.config';

const Footer = () => {
  return (
    <Container>
      <Title>BETTER team</Title>
      <Email>문의 이메일: better.iter@gmail.com</Email>
      <div>@ Better team. All right reserved.</div>
      <div style={{ marginTop: 4, marginBottom: 4 }}>
        아이터는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가 등록한 상품정보 및 거래에
        대해 아이터는 책임을 지지 않습니다.
      </div>
      <Term>
        <div>서비스이용약관</div>
        <div>|</div>
        <div>개인정보처리방침</div>
      </Term>
    </Container>
  );
};

export default Footer;

const Container = styled('div', {
  width: '352px',
  backgroundColor: '#F7F8FA',
  padding: '20px 19px 50px 19px',
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  color: '$WH02',
  bodyText: 3,
});

const Title = styled('div', {
  fontSize: '12px',
  fontWeight: '700',
  color: '$WH03',
  lineHeight: '16px',
  letterSpacing: '-0.6px',
  marginBottom: '10px',
});

const Email = styled('div', {
  color: '$WH03',
  marginBottom: '15px',
});

const Term = styled('div', {
  display: 'flex',
  gap: '5px',
  color: '$WH03',
  cursor: 'pointer',
});
