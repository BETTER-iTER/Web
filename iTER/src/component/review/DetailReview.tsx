import { styled } from '../../../stitches.config';
import HeartIcon from '../../assets/icon/Heart.svg?react';
import HeartFill from '../../assets/icon/HeartFill.svg?react';
import CommentIcon from '../../assets/icon/Comment.svg?react';
import ScrapIcon from '../../assets/icon/Scrap.svg?react';
import ScrapFillIcon from '../../assets/icon/ScrapFill.svg?react';
import ShareIcon from '../../assets/icon/Share.svg?react';
import { Caption1, Caption2 } from '../Font';
import ReviewImage from './ReviewImage';

import { CommentSort } from '../common/CommentSort';

import { LikeSort } from '../common/LikeSort';
import { useState } from 'react';
import axios from 'axios';

import { ReviewDetailProps } from '../../types/Review';
import StarRatingShow from '../../component/review/StarRatingShow';
import { Store } from '../../constants/Store';
import Toast from '../common/Toast';

const DetailReview = (props: { data: ReviewDetailProps['reviewDetail'] }) => {
  const { data } = props;

  const short = data.shortReview.replace(/['"]/g, '').split(',');
  const [setting, setSetting] = useState<boolean>(false);
  const [toast, setToast] = useState<boolean>(false);

  function formatDateString(inputDate: string): string {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}.${month}.${day}`;
  }

  function formatPriceString(inputPrice: number) {
    const man = Math.floor(inputPrice / 10000);
    const rest = inputPrice % 10000;

    if (man === 0) return `${rest}원`;
    if (rest === 0) return `${man}만원`;
    return `${man}만 ${rest}원`;
  }

  //좋아요 부분
  const [settingLike, setSettingLike] = useState<boolean>(false);
  const [pushHeart, setPushHeart] = useState<boolean>(true);
  const [pushScrap, setPushScrap] = useState<boolean>(true);

  const LikeReview = async () => {
    const currentPathname = window.location.pathname;
    const reviewId = currentPathname.split('/').pop();
    try {
      const response = await axios.post(`https://dev.betteritem.store/review/${reviewId}/like`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 좋아요 취소 api
  const CancleLike = async () => {
    const currentPathname = window.location.pathname;
    const reviewId = currentPathname.split('/').pop();
    try {
      const response = await axios.delete(`https://dev.betteritem.store/review/${reviewId}/like`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //스크랩 등록 api
  const addScrap = async () => {
    const currentPathname = window.location.pathname;
    const reviewId = currentPathname.split('/').pop();
    try {
      const response = await axios.post(`https://dev.betteritem.store/review/${reviewId}/scrap`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //스크랩 취소 api
  const cancleScrap = async () => {
    const currentPathname = window.location.pathname;
    const reviewId = currentPathname.split('/').pop();
    try {
      const response = await axios.delete(`https://dev.betteritem.store/review/${reviewId}/scrap`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 클립보드 복사(공유)
  const location = window.location;
  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      setToast(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleHeartClick = () => {
    setPushHeart(!pushHeart);
    if (pushHeart) {
      console.log('좋아요 누름');
      LikeReview();
    } else {
      console.log('좋아요 취소함');
      CancleLike();
    }
  };

  const handleScrapClick = () => {
    setPushScrap(!pushScrap);
    if (pushScrap) {
      console.log('스크랩 누름');
      addScrap();
    } else {
      console.log('스크랩 취소');
      cancleScrap();
    }
  };

  return (
    <>
      <ReviewImage list={data.reviewImages} />
      <Box>
        {/* 좋아요 등의 액션 아이콘 */}
        <Actives>
          <div style={{ display: 'flex' }}>
            <Active>
              <Hicon onClick={handleHeartClick}>
                {pushHeart ? (
                  <>
                    <HeartIcon fill={'#4C4E55'} width={24} height={24} />
                  </>
                ) : (
                  <>
                    <HeartFill width={24} height={24} />
                  </>
                )}
              </Hicon>
              <HeartNum
                onClick={() => {
                  setSettingLike(!settingLike);
                }}
              >
                {data.likedCount}
              </HeartNum>
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
              <Hicon onClick={handleScrapClick}>
                {pushScrap ? (
                  <>
                    <ScrapIcon fill={'#4C4E55'} width={24} height={24} />
                  </>
                ) : (
                  <>
                    <ScrapFillIcon width={24} height={24} />
                  </>
                )}
              </Hicon>
              {/* <ScrapIcon fill={'#4C4E55'} width={24} height={24} /> */}
              {data.scrapedCount}
            </Active>
            <div onClick={() => handleCopyClipBoard()} style={{ cursor: 'pointer' }}>
              <ShareIcon />
            </div>
          </div>
        </Actives>
        {/* 리뷰 내용 */}
        <Title>{data.productName}</Title>
        <Caption1 style={{ color: '#57606A' }}>{data.reviewSpecData.join(' / ')}</Caption1>
        <Caption2 style={{ color: '#57606A', marginTop: '8px' }}>
          조회수 {data.shownCount}회
        </Caption2>
        {/* 별점 */}
        <Stars>
          <StarRatingShow rating={data.starPoint} />
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
        <Content>{data.comparedProductName}</Content>
        {/* 구매정보 */}
        <Buy>
          <div>
            {data.manufacturer} | {Store[data.storeName]}
          </div>
          <div>
            {formatPriceString(data.price)} | {formatDateString(data.boughtAt)} 구매
          </div>
        </Buy>
        {formatDateString(data.createdAt)} 작성
      </Box>

      {setting && <CommentSort />}

      {settingLike && (
        <LikeSort
          onClose={() => {
            setSettingLike(false);
          }}
        />
      )}

      {toast && <Toast message={'클립보드에 복사되었습니다'} onClose={() => setToast(false)} />}
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
  marginTop: '24px',
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
const Hicon = styled('div', {
  display: 'flex',
});

const HeartNum = styled('div', {});
