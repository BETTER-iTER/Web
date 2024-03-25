import React, { useState } from 'react';
import { styled } from '../../../stitches.config';
import Nav from '../../component/layout/Nav';
import Top from '../../component/layout/Top';
import PreviewSimple from '../../component/review/PreviewSimple';
import ProfileFlat from '../../component/user/ProfileFlat';

import { getMyPageReviewMine } from '../../apis/Mypage';
import { getMyPageReviewScrap } from '../../apis/Mypage';
import { useInfiniteQuery } from '@tanstack/react-query';
import LoadingPage from '../../component/common/Loading';
import ErrorPage from '../../component/common/Error';
import { MypageReviewProps } from '../../types/Review';

const Mypage = () => {
  const [status, setStatus] = useState<number>(0);
  const page = 0;

  const {
    data: scrapData,
    isLoading: scrapLoading,
    isError: scrapError,
    fetchNextPage: scrapNextPage,
  } = useInfiniteQuery<MypageReviewProps, Error>(
    ['scrap', { page }],
    ({ pageParam = 0 }: { pageParam?: number }) => getMyPageReviewScrap(pageParam),
    {
      getNextPageParam: (lastPage) => (lastPage.pageInfo.hasNext ? page + 1 : undefined),
    }
  );

  const {
    data: mineData,
    isLoading: mineLoading,
    isError: mineError,
    fetchNextPage: mineNextPage,
  } = useInfiniteQuery<MypageReviewProps, Error>(
    ['mine', { page }],
    ({ pageParam = 0 }: { pageParam?: number }) => getMyPageReviewMine(pageParam),
    {
      getNextPageParam: (lastPage) => (lastPage.pageInfo.hasNext ? page + 1 : undefined),
    }
  );

  console.log('scrapData', scrapData);
  console.log('mineData', mineData);
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { currentTarget } = e;
    if (currentTarget instanceof HTMLDivElement) {
      const { scrollHeight, scrollTop, clientHeight } = currentTarget;
      // 스크롤이 리스크의 끝에 도달했을 때
      if (scrollHeight - scrollTop === clientHeight) {
        console.log('scroll');
        if (status === 0) {
          mineNextPage(); // 내가 쓴 리뷰의 다음 페이지 가져오기
        } else if (status === 1) {
          scrapNextPage(); // 스크랩한 리뷰의 다음 페이지 가져오기
        }
      }
    }
  };

  scrapLoading && mineLoading && <LoadingPage />;
  scrapError && mineError && <ErrorPage type={2} />;

  console.log('mineData', mineData);
  console.log('scrapData', scrapData);
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
          내가 쓴 리뷰({mineData !== undefined && mineData?.pages[0].pageInfo.totalCount})
        </Status>
        <Status
          active={status == 1}
          onClick={() => {
            setStatus(1);
          }}
        >
          스크랩한 리뷰({scrapData !== undefined && scrapData?.pages[0].pageInfo.totalCount})
        </Status>
      </StatusBox>
      <Content onScroll={handleScroll}>
        {/* 내가 쓴 리뷰 */}
        {status == 0 &&
          (mineData !== undefined && mineData?.pages[0].pageInfo.totalCount > 0 ? (
            <div onScroll={handleScroll} style={{ paddingBottom: 10 }}>
              {mineData.pages.map((page, pageIndex) => (
                <PreviewSimple key={pageIndex} list={page.reviewList} />
              ))}
            </div>
          ) : (
            <Empty>내가 쓴 리뷰가 없습니다</Empty>
          ))}

        {/* 스크랩 리뷰 */}
        {status == 1 &&
          (scrapData !== undefined && scrapData?.pages[0].pageInfo.totalCount > 0 ? (
            <div onScroll={handleScroll}>
              {scrapData.pages.map((page, pageIndex) => (
                <PreviewSimple key={pageIndex} list={page.reviewList} />
              ))}
            </div>
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

// const DetailReviews = styled('div', {
//   display: 'flex',
//   flexDirection: 'column',
//   width: '100%',
//   alignItems: 'center',
// });
