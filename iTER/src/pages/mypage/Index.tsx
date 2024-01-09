import { useState } from 'react';
import { styled } from '../../../stitches.config';
import Nav from '../../component/layout/Nav';
import Top from '../../component/layout/Top';
import PreviewSimple from '../../component/review/PreviewSimple';
import ProfileFlat from '../../component/user/ProfileFlat';

import { getMyPageReviewMine } from '../../apis/Mypage';
import { getMyPageReviewScrap } from '../../apis/Mypage';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../../component/common/Loading';
import ErrorPage from '../../component/common/Error';
import { MypageReviewProps } from '../../types/Review';

const Mypage = () => {
  const [status, setStatus] = useState<number>(0);
  const [id, setId] = useState<number>(0);

  const {
    data: scrapData,
    isLoading: scrapLoading,
    isError: scrapError,
  } = useQuery<MypageReviewProps, Error>(['scrap', id], () => getMyPageReviewScrap(id));

  const {
    data: mineData,
    isLoading: mineLoading,
    isError: mineError,
  } = useQuery<MypageReviewProps, Error>(['mine', id], () => getMyPageReviewMine(id));

  scrapLoading && mineLoading && <LoadingPage />;
  scrapError && mineError && <ErrorPage type={2} />;

  return (
    <Container>
      <Top title="마이페이지" />
      <ProfileFlat type={'setting'} />
      <StatusBox>
        <Status
          active={status == 0}
          onClick={() => {
            setStatus(0);
          }}
        >
          내가 쓴 리뷰
        </Status>
        <Status
          active={status == 1}
          onClick={() => {
            setStatus(1);
          }}
        >
          스크랩한 리뷰
        </Status>
      </StatusBox>
      <Content>
        {/* 내가 쓴 리뷰 */}
        {status === 0 &&
          (mineData !== undefined && mineData.reviewCount > 0 ? (
            <PreviewSimple list={mineData.reviewList} />
          ) : (
            <Empty>리뷰를 작성해 보세요</Empty>
          ))}

        {/* 스크랩 리뷰 */}
        {status == 1 &&
          (scrapData !== undefined && scrapData.reviewCount > 0 ? (
            <PreviewSimple list={scrapData.reviewList} />
          ) : (
            <Empty>스크랩한 리뷰가 없습니다</Empty>
          ))}
      </Content>
      <Bottom>
        <Nav />
      </Bottom>
    </Container>
  );
};

export default Mypage;

const Container = styled('div', {
  overflow: 'hidden',
  height: '100vh',
});

const Content = styled('div', {
  height: 'calc(100vh - 290px)',

  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  color: '$TextBlack',
});

const StatusBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  borderBottom: '1px solid $Bar',
});

const Status = styled('div', {
  backgroundColor: '$White',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '195px',
  bodyText: 1,
  padding: '20px 0 10px 0',
  variants: {
    active: {
      true: {
        borderBottom: '3px solid $TitleBlack',
      },
      false: {
        borderBottom: '3px solid $White',
        color: '#AFB8C1',
      },
    },
  },
  zIndex: 100,
});

const Empty = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: '156px',
  color: '$Gray50',
});

const Bottom = styled('div', {
  position: 'fixed',
  bottom: '0',
  width: '390px',
  display: 'flex',
  justifyContent: 'center',
});

const DetailReviews = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
});
