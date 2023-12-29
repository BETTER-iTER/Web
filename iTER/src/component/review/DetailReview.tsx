import { styled } from '../../../stitches.config';
import HeartIcon from '../../assets/icon/Heart.svg?react';
import CommentIcon from '../../assets/icon/Comment.svg?react';
import ScrapIcon from '../../assets/icon/Scrap.svg?react';
import ShareIcon from '../../assets/icon/Share.svg?react';
import Star from '../../assets/icon/star/Star.svg?react';
import { Caption1 } from '../Font';
import ReviewImage from './ReviewImage';
import { useState } from 'react';
const DetailReview = (props: { data }) => {
  const { data } = props;

  const short = data.shortReview.replace(/['"]/g, '').split(', ');
  const [setting, setSetting] = useState<boolean>(false);

  return (
    <>
      <ReviewImage />
      <Box>
        {/* 좋아요 등의 액션 아이콘 */}
        <Actives>
          <div style={{ display: 'flex' }}>
            <Active>
              <HeartIcon fill={'#4C4E55'} width={24} height={24} />
              {data.likedCount}
            </Active>
            <Active>
              <CommentIcon
                onClick={() => {
                  setSetting(!setting);
                }}
              />
              {data.commentCount}
            </Active>
          </div>
          <div style={{ display: 'flex' }}>
            <Active>
              <ScrapIcon fill={'#4C4E55'} width={24} height={24} />
              {data.scrapedCount}
            </Active>
            <div>
              <ShareIcon />
            </div>
          </div>
        </Actives>
        {/* 리뷰 내용 */}
        <Title>{data.productName}</Title>
        <Caption1 style={{ color: '#57606A' }}>{data.reviewSpecData.join(' / ')}</Caption1>
        {/* 별점 */}
        <Stars>
          수정필요
          <Star width={24} height={24} />
        </Stars>
        {/* 간단리뷰 */}
        <SimpleReviews>
          <SimpleReview>
            <Label>무게</Label>
            {short[0]}
          </SimpleReview>
          <SimpleReview>
            <Label>가격</Label>
            {short[1]}
          </SimpleReview>
          <SimpleReview>
            <Label>디자인</Label>
            {short[2]}
          </SimpleReview>
        </SimpleReviews>
        {/* 상세 리뷰 */}
        <Point>👍 좋은 점</Point>
        <Content>{data.goodPoint}</Content>
        <Point>👎 아쉬운 점</Point>
        <Content>{data.badPoint}</Content>
        <Point>⚖️ 비교 제품</Point>
        <Content>수정필요</Content>
        {/* 구매정보 */}
        <Buy>
          수정필요
          <div>마샬 | 공식 홈페이지 구매</div>
          <div>60만원 | {data.boughtAt} 구매</div>
        </Buy>
        {data.createdAt}
      </Box>
    </>
  );
};

export default DetailReview;

const Box = styled('div', {
  width: '340px',
  display: 'flex',
  flexDirection: 'column',
  color: '#AFB8C1',
  bodyText: 2,
  marginBottom: '40px',
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
