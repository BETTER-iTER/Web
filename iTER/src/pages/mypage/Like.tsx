import { styled } from '../../../stitches.config';
import Top from '../../component/layout/Top';
import { useQuery } from '@tanstack/react-query';
import { getMypageReviewLike } from '../../apis/Mypage';
import LoadingPage from '../../component/common/Loading';
import ErrorPage from '../../component/common/Error';
import { CategoryReviewProps } from '../../types/Review';
import ListItem from '../../component/search/ListItem';

const Like = () => {
  // const [page, setPage] = useState<number>(0);
  const page = 0;

  const {
    data: likeData,
    isLoading: likeLoading,
    isError: likeError,
  } = useQuery<CategoryReviewProps>(['like', page], () => getMypageReviewLike(page));

  likeLoading && <LoadingPage />;
  likeError && <ErrorPage type={2} />;

  console.log(likeData, 'likeData');
  return (
    <Container>
      <Top title="좋아요한 리뷰" />

      {likeData !== undefined && likeData.reviews.length > 0 ? (
        <List>
          {likeData.reviews.map((item, index) => (
            <ListItem
              key={index}
              id={item.id}
              productName={item.productName}
              reviewSpecData={item.reviewSpecData}
              starPoint={item.starPoint}
              shortReview={item.shortReview}
              userInfo={item.userInfo}
              scrapedCount={item.scrapedCount}
              likedCount={item.likedCount}
              reviewImage={item.reviewImage}
            />
          ))}
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
