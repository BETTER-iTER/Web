import Top from '../../component/layout/Top';
import { styled } from '../../../stitches.config';

const Setting = () => {
  return (
    <>
      <Top title="설정" />
      <Content>
        <Title>회원정보</Title>
        <Items>
          <Item>내 포인트</Item>
          <Item>프로필</Item>
          <Item>관심 카테고리 설정</Item>
          <Item>좋아요한 리뷰</Item>
        </Items>

        <Title>계정관리</Title>
        <Items>
          <Item>로그아웃</Item>
          <Item>회원탈퇴</Item>
        </Items>
        <Item>1:1 문의하기</Item>
      </Content>
    </>
  );
};

export default Setting;

const Content = styled('div', {
  marginTop: '60px',
});

const Title = styled('div', {
  padding: '0 25px',
  fontSize: '12px',
  fontWeight: '600',
  color: '$TitleBlack',
  lineHeight: '22px',
  letterSpacing: '-0.6px',
  marginBottom: '16px',
});

const Items = styled('div', {
  marginBottom: '24px',
  borderBottom: '1px solid $Bar',
  paddingBottom: '12px',
});

const Item = styled('div', {
  padding: '0 25px',
  bodyText: 2,
  color: '#000000',
  lineHeight: '22px',
  letterSpacing: '-0.7px',
  marginBottom: '12px',
  cursor: 'pointer',
});
