import { styled } from '../../../stitches.config';
import Top from '../../component/layout/Top';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getMypageReviewLike } from '../../apis/Mypage';
import LoadingPage from '../../component/common/Loading';
import ErrorPage from '../../component/common/Error';
import { CategoryReviewProps } from '../../types/Review';
import ListItem from '../../component/search/ListItem';

const Like = () => {
  const page = 0;

  const {
    data: likeData,
    isLoading: likeLoading,
    isError: likeError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<CategoryReviewProps, Error>(
    ['likedReview'],
    ({ pageParam = 0 }) => getMypageReviewLike(pageParam),
    {
      getNextPageParam: (lastPage) => (lastPage.hasNext ? page + 1 : undefined),
    }
  );

  likeLoading && <LoadingPage />;
  likeError && <ErrorPage type={2} />;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { currentTarget } = e;
    if (currentTarget instanceof HTMLDivElement) {
      const { scrollHeight, scrollTop, clientHeight } = currentTarget;
      // 스크롤이 리스크의 끝에 도달했을 때
      if (scrollHeight - scrollTop === clientHeight) {
        fetchNextPage();
      }
    }
  };

  return (
    <Container>
      <Top title="좋아요한 리뷰" />

      {likeData !== undefined && likeData?.pages[0]?.existed ? (
        <List onScroll={handleScroll}>
          {likeData.pages.map((page, pageIndex) =>
            page.reviews.map((item, index) => (
              <ListItem key={`${pageIndex}-${index}`} item={item} />
            ))
          )}
          {hasNextPage && <LoadingPage />} {/* 추가 데이터를 로드 중임을 표시 */}
        </List>
      ) : (
        <Empty>마음에 드는 리뷰에 좋아요를 눌러보세요</Empty>
      )}
    </Container>
  );
};

export default Like;

const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Empty = styled('div', {
  padding: '330px 80px 0 81px',
  bodyText: 1,
  color: '$Gray50',
});

const List = styled('div', {
  width: '350px',
  height: '100vh',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
