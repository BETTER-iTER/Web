import { styled } from '../../../stitches.config';
import Top from '../../component/layout/Top';
import { useQuery } from '@tanstack/react-query';
import { getMypageReviewLike } from '../../apis/Mypage';
import LoadingPage from '../../component/common/Loading';
import ErrorPage from '../../component/common/Error';
import { MypageReviewProps } from '../../types/Review';

const Like = () => {
  // const [page, setPage] = useState<number>(0);
  const page = 0;

  const {
    data: likeData,
    isLoading: likeLoading,
    isError: likeError,
  } = useQuery<MypageReviewProps>(['like', page], () => getMypageReviewLike(page));

  likeLoading && <LoadingPage />;
  likeError && <ErrorPage type={2} />;

  console.log(likeData, 'likeData');
  return (
    <Container>
      <Top title="좋아요한 리뷰" />

      {likeData !== undefined && likeData.reviewCount > 0 ? (
        <List>
          {/* {likeData.reviewList.map((item, index) => (
            <ListItem
              key={index}
            />
            <div>좋아요한 리뷰</div>
          ))} */}
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
});
