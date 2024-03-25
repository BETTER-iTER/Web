import { styled } from '../../../stitches.config';
import Nav from '../../component/layout/Nav';
import Top from '../../component/layout/Top';
import UserIcon from '../../assets/icon/User.svg?react';
import { Caption2 } from '../../component/Font';
import { useState } from 'react';
import { BottomReviewSetting } from '../../component/common/Bottom';
import { ModalSelect } from '../../component/common/Modal';
import Relation from '../../component/review/Relation';
import Toast from '../../component/common/Toast';
import DetailReview from '../../component/review/DetailReview';
import { useMutation, useQuery } from '@tanstack/react-query';
import LoadingPage from '../../component/common/Loading';
import ErrorPage from '../../component/common/Error';
import { deleteReview, getReviewDetail } from '../../apis/Review';
import { ReviewDetailProps } from '../../types/Review';
import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonFollow } from '../../component/common/Button';

const ReviewDetail = () => {
  const [setting, setSetting] = useState<boolean>(false);
  const [select, setSelect] = useState<number>(0);
  const [toast, setToast] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split('/')[3];

  // 검색 리스트로 돌아가기
  const { state } = useLocation();
  const handleGoBack = () => {
    navigate('/search', { state: state });
  };

  // 리뷰 삭제
  const mutation = useMutation(deleteReview, {
    onSuccess: (data) => {
      console.log('data', data);
      setToast(true);
      navigate('/mypage');
    },
    onError: (error) => {
      console.log('error', error);
      return <ErrorPage type={2} />;
    },
  });

  const handleDelete = () => {
    mutation.mutate(id);
  };

  const handleRewrite = () => {
    const currentURL = window.location.href;

    const match = currentURL.match(/\d+$/);
    const extractedNumber = match ? parseInt(match[0]) : null;

    navigate(`/review/rewrite/${extractedNumber}`);
  };

  // 리뷰 상세 데이터 가져오기
  const {
    data: reviewDetailData,
    error: reviewDetailError,
    isLoading: reviewDetailIsLoading,
  } = useQuery<ReviewDetailProps, Error>(['reviewDetail', id], () => getReviewDetail(id));

  if (reviewDetailIsLoading) return <LoadingPage />;
  if (reviewDetailError) return <ErrorPage type={2} />;

  const reviewDetail = reviewDetailData?.reviewDetail;
  const writerInfo = reviewDetailData?.writerInfo;
  const relatedReviews = reviewDetailData?.relatedReviews;

  return (
    <>
      <Top title={reviewDetail.productName} back={state && handleGoBack} />
      <Container>
        {/* 상단 유저 정보 및 설정 버튼 */}
        <User>
          <Right
            onClick={() => {
              window.location.href = `/user/profile/${writerInfo.id}`;
            }}
          >
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

          {!reviewDetail.mine && <ButtonFollow isFollow={reviewDetail.follow} id={writerInfo.id} />}
        </User>
        <DetailReview data={reviewDetail} />
        <Report
          onClick={() => {
            setSetting(!setting);
          }}
        >
          {reviewDetail.mine && '수정/삭제하기'}
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
            setSetting(false);
            setSelect(index);
          }}
        />
      )}
      {select === 2 && !setting && (
        <ModalSelect
          text={'리뷰를 삭제하시겠습니까?'}
          btn={'삭제하기'}
          onClick={() => {
            handleDelete();
          }}
          onClosed={() => {
            setSelect(0);
          }}
        />
      )}
      {select === 1 && !setting && (
        <ModalSelect
          text={'리뷰를 수정하시겠습니까?'}
          btn={'수정하기'}
          onClick={() => {
            handleRewrite();
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
  cursor: 'pointer',
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
