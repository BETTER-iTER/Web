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
import { useState } from 'react';
import { BottomReviewSetting } from '../../component/common/Bottom';
import { ModalSelect } from '../../component/common/Modal';
const ReviewDetail = () => {
  const [setting, setSetting] = useState<boolean>(false);
  const [select, setSelect] = useState<number>(0);
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
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setSetting(!setting);
            }}
          >
            <Dots3 />
          </div>
        </User>

        <ReviewImage></ReviewImage>
        <Box>
          {/* 좋아요 등의 액션 아이콘 */}
          <Actives>
            <div style={{ display: 'flex' }}>
              <Active>
                <HeartIcon fill={'#4C4E55'} width={24} height={24} />
                99+
              </Active>
              <Active>
                <CommentIcon />
                99+
              </Active>
            </div>
            <div style={{ display: 'flex' }}>
              <Active>
                <ScrapIcon fill={'#4C4E55'} width={24} height={24} />
                99+
              </Active>
              <div>
                <ShareIcon />
              </div>
            </div>
          </Actives>
          {/* 리뷰 내용 */}
          <Title>마샬 STANMORE III</Title>
          <Caption1 style={{ color: '#57606A' }}>
            코어 i 5-13세대 / 14인치 / 32GB / 256-129GB
          </Caption1>
          {/* 별점 */}
          <Stars>
            <Star width={24} height={24} />
            <Star width={24} height={24} />
            <Star width={24} height={24} />
            <Star width={24} height={24} />
            <Star width={24} height={24} />
          </Stars>
          {/* 간단리뷰 */}
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
          {/* 상세 리뷰 */}
          <Point>👍 좋은 점</Point>
          <Content>스피커가 예뻐서 인테리어 효과가 있음 베이스 음역대가 잘 들림</Content>
          <Point>👎 아쉬운 점</Point>
          <Content>블루투스 연결이 쉽게 끊어짐</Content>
          <Point>⚖️ 비교 제품</Point>
          <Content>SONY SRS-XB100</Content>
          {/* 구매정보 */}
          <Buy>
            <div>마샬 | 공식 홈페이지 구매</div>
            <div>60만원 | 2023.01.04 구매</div>
          </Buy>
          2021.01.04 작성
          <Report>신고하기</Report>
        </Box>
      </Container>
      <Nav />
      {setting && (
        <BottomReviewSetting
          onClose={() => {
            setSetting(false);
          }}
          onChange={(index: number) => {
            setSelect(index);
          }}
        />
      )}
      {select === 2 && (
        <ModalSelect
          text={'댓글을 삭제하시겠습니까?'}
          btn={'삭제하기'}
          onClick={() => {
            console.log('삭제');
          }}
          onClosed={() => {
            setSelect(0);
          }}
        />
      )}
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
  color: '#AFB8C1',
  bodyText: 2,
});

const Actives = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '13px',
  fontWeight: '600',
  color: '$Gray50',
  margin: '12px 0',
  justifyContent: 'space-between',
});

const Active = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  color: '#4C4E55',
  marginRight: '8px',
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
  margin: '16px 0 3px 0',
});

const Content = styled('div', {
  color: '$TitleBlack',
  whiteSpace: 'pre-wrap',
});

const Buy = styled('div', {
  color: '#8C959F',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '21px 0 16px 0',
});

const Report = styled('div', {
  margin: '40px 0 24px 0',
  width: '100%',
  textAlign: 'right',
});
