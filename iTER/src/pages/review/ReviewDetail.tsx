import { styled } from '../../../stitches.config';
import Nav from '../../component/layout/Nav';
import Top from '../../component/layout/Top';
import UserIcon from '../../assets/icon/User.svg?react';
import Dots3 from '../../assets/icon/Dots3.svg?react';
import HeartIcon from '../../assets/icon/Heart.svg?react';
import CommentIcon from '../../assets/icon/Comment.svg?react';
import ScrapIcon from '../../assets/icon/Scrap.svg?react';
import ShareIcon from '../../assets/icon/Share.svg?react';
import Star from '../../assets/icon/star/Star.svg?react';
import { Caption1, Caption2 } from '../../component/Font';
const ReviewDetail = () => {
  return (
    <>
      <Top title="스피커" />
      <Container>
        {/* 상단 유저 정보 및 설정 버튼 */}
        <User>
          <Right>
            <UserIcon width={35} height={35} />
            {/* <UserImage></UserImage> */}
            블루투스 하트
            <Job>
              <Caption2>개발자</Caption2>
            </Job>
          </Right>
          <Dots3 />
        </User>

        <ReviewImage></ReviewImage>
        <Box>
          {/* 좋아요 등의 액션 아이콘 */}
          <Actives>
            <Active>
              <HeartIcon fill={'#4C4E55'} width={24} height={24} />
              99+
            </Active>
            <Active>
              <CommentIcon />
              99+
            </Active>
            <Active>
              <ScrapIcon fill={'#4C4E55'} width={24} height={24} />
              99+
            </Active>
            <Active>
              <ShareIcon />
            </Active>
          </Actives>

          {/* 리뷰 내용 */}
          <Title>마샬 STANMORE III</Title>
          <Caption1>코어 i 5-13세대 / 14인치 / 32GB / 256-129GB</Caption1>

          <Stars>
            <Star width={24} height={24} />
            <Star width={24} height={24} />
            <Star width={24} height={24} />
            <Star width={24} height={24} />
            <Star width={24} height={24} />
          </Stars>

          <SimpleReviews>
            <SimpleReview>
              <Label>무게</Label>가벼워요
            </SimpleReview>
            <SimpleReview>
              <Label>가격</Label>적당해요
            </SimpleReview>
            <SimpleReview>
              <Label>디자인</Label>예뻐요
            </SimpleReview>
          </SimpleReviews>

          <Point>👍 좋은 점</Point>
          <Content>스피커가 예뻐서 인테리어 효과가 있음 베이스 음역대가 잘 들림</Content>
          <Point>👎 아쉬운 점</Point>
          <Content>블루투스 연결이 쉽게 끊어짐</Content>
          <Point>⚖️ 비교 제품</Point>
          <Content>SONY SRS-XB100</Content>

          <Buy>
            <div>마샬 | 공식 홈페이지 구매</div>
            <div>60만원 | 2023.01.04 구매</div>
          </Buy>

          <CreatedAt>2021.01.04 작성</CreatedAt>

          <Report>신고하기</Report>
        </Box>
      </Container>
      <Nav />
    </>
  );
};

export default ReviewDetail;

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '60px',
});

const User = styled('div', {
  width: '360px',
  height: '55px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Right = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const UserImage = styled('div', {
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  backgroundColor: '#EAEEF2',
});

const Job = styled('div', {
  marginLeft: '-5px',
  paddingLeft: '5px',
  height: '15px',
  borderLeft: '1px solid #EAEEF2;',
  color: '#57606A',
});

const ReviewImage = styled('div', {
  width: '390px',
  height: '390px',
  backgroundColor: '#EAEEF2',
});

const Box = styled('div', {
  width: '340px',
  display: 'flex',
  flexDirection: 'column',
  color: '#57606A',
});

const Actives = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '13px',
  fontWeight: '600',
  color: '$Gray50',
  margin: '12px 0',
});

const Active = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  marginRight: '20px',
  color: '#4C4E55',
});

const Title = styled('div', {
  bodyText: 1,
  color: '$TitleBlack',
});

const Stars = styled('div', {
  display: 'flex',
  gap: '4px',
  marginTop: '27px',
});

const SimpleReviews = styled('div', {
  display: 'flex',
  gap: '4px',
  padding: '16px 0 24px 0',
  borderBottom: '1px solid #EAEEF2',
  marginBottom: '8px',
});

const SimpleReview = styled('div', {
  width: 'fit-content',
  padding: '4px 8px',
  bodyText: 2,
  gap: '4px',
  display: 'flex',
  backgroundColor: '$Gray10',
  color: '$Gray50',
});

const Label = styled('div', {
  color: '#8C959F',
});

const Point = styled('div', {
  bodyText: 1,
  color: '$TitleBlack',
  marginTop: '16px',
  marginBottom: '3px',
});

const Content = styled('div', {
  bodyText: 2,
  color: '$TitleBlack',
  whiteSpace: 'pre-wrap',
});

const Buy = styled('div', {
  color: '#8C959F',
  bodyText: 2,
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '21px',
  marginBottom: '16px',
});

const CreatedAt = styled('div', {
  color: '#AFB8C1',
  bodyText: 2,
  marginBottom: '40px',
});

const Report = styled('div', {
  color: '#AFB8C1',
  bodyText: 2,
  marginBottom: '24px',
  width: '100%',
  textAlign: 'right',
});
