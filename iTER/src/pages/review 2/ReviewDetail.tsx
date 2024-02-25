import { styled } from '../../../stitches.config';
import Nav from '../../component/layout/Nav';
import Top from '../../component/layout/Top';
import UserIcon from '../../assets/icon/User.svg?react';
import Dots3 from '../../assets/icon/Dots3.svg?react';
import { Caption2 } from '../../component/Font';
import { useState } from 'react';
import { BottomReviewSetting } from '../../component/common/Bottom';
import { ModalSelect } from '../../component/common/Modal';
import Relation from '../../component/review/Relation';
import Toast from '../../component/common/Toast';
import DetailReview from '../../component/review/DetailReview';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../../component/common/Loading';
import ErrorPage from '../../component/common/Error';
import { getReviewDetail } from '../../apis/Review';
import { ReviewDetailProps } from '../../types/Review';
import { useLocation } from 'react-router-dom';
const ReviewDetail = () => {
  const [setting, setSetting] = useState<boolean>(false);
  const [select, setSelect] = useState<number>(0);
  const [toast, setToast] = useState<boolean>(false);

  const location = useLocation();
  const id = location.pathname.split('/')[3];

  // const {
  //   data: reviewDetailData,
  //   error: reviewDetailError,
  //   isLoading: reviewDetailIsLoading,
  // } = useQuery<JSON, Error>(['reviewDetail', id], () => getReviewDetail(id));

  // if (reviewDetailIsLoading) return <LoadingPage />;
  // if (reviewDetailError) return <ErrorPage type={2} />;
  // if (reviewDetailData) {
  //   console.log(reviewDetailData);
  // }

  const reviewDetail = reviewDetailData.reviewDetail;
  const writerInfo = reviewDetailData.writerInfo;
  const relatedReviews = reviewDetailData.relatedReviews;
  return (
    <>
      <Top title={reviewDetail.productName} />
      <Container>
        {/* 상단 유저 정보 및 설정 버튼 */}
        <User>
          <Right>
            {writerInfo.profileImage && writerInfo.profileImage.length > 0 ? (
              <UserImage>
                <img src={writerInfo.profileImage} alt="user" width={35} height={35} />
              </UserImage>
            ) : (
              <UserIcon width={35} height={35} />
            )}
            {writerInfo.nickName}
            <Job>
              <Caption2>{writerInfo.job}</Caption2>
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
        <DetailReview data={reviewDetail} />
        <Report
          onClick={() => {
            setSetting(!setting);
          }}
        >
          {reviewDetail.mine ? '수정/삭제하기' : '신고하기'}
        </Report>
        <Relation list={relatedReviews} />
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
      {select === 2 && !setting && (
        <ModalSelect
          text={'리뷰를 삭제하시겠습니까?'}
          btn={'삭제하기'}
          onClick={() => {
            setToast(true);
          }}
          onClosed={() => {
            setSelect(0);
          }}
        />
      )}

      {toast && <Toast message={'리뷰가 삭제되었습니다.'} onClose={() => setToast(false)} />}
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
  '&::-webkit-scrollbar': {
    display: 'none',
  },
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
  overflow: 'hidden',
});

const Job = styled('div', {
  marginLeft: '-5px',
  paddingLeft: '5px',
  height: '15px',
  borderLeft: '1px solid $Bar;',
  color: '#57606A',
});

const Report = styled('div', {
  margin: '40px 25px 40px 0',
  width: '100%',
  textAlign: 'right',
  color: '#AFB8C1',
  bodyText: 2,
});

const reviewDetailData: ReviewDetailProps = {
  reviewDetail: {
    reviewId: 0,
    productName: '스피커',
    reviewSpecData: ['코어 i5', '16GB', '512GB'],
    starPoint: 4,
    goodPoint: '스피커가 좋아요',
    badPoint: '소리가 작아요',
    shortReview: '"가벼워요", "적당해요", "예뻐요"',
    manudactuere: '삼성',
    storeName: 1,
    boughtAt: '2021-08-01',
    createdAt: '2021-08-02',
    reviewImages: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1627970186567-4b7b2b0b5b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlY2tlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',

        orderNum: 1,
      },
    ],
    scrapedCount: 0,
    likedCount: 0,
    commentCount: 0,
    follow: true,
    mine: true,
    like: true,
    scrap: true,
  },
  writerInfo: {
    id: 0,
    nickName: '블루투스 하트',
    profileImage:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
    job: 'sw 개발자',
    expert: true,
  },

  relatedReviews: [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1627970186567-4b7b2b0b5b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlY2tlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      productName: '스피커',
      nickname: '블루투스 하트',
      profileImageUrl:
        'https://images.unsplash.com/photo-1627970186567-4b7b2b0b5b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlY2tlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      expert: true,
    },
  ],
};
