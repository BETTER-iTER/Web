import { useState } from 'react';
import { styled } from '../../../stitches.config';
import { BottomCategory, BottomSort } from '../common/Bottom';
import { ButtonControl } from '../common/Button';
import ListItem from './ListItem';
import Sort from '../../assets/icon/Sort.svg?react';
import { getCategoryReview } from '../../apis/Review';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../common/Loading';
import ErrorPage from '../common/Error';
import { CategoryReviewProps } from '../../types/Review';

const Result = ({ keyword }: { keyword: string }) => {
  const [categoryBottom, setCategoryBottom] = useState<boolean>(false);
  const [sortBottom, setSortBottom] = useState<boolean>(false);

  const {
    data: categoryData,
    error: categoryError,
    isLoading: categoryIsLoading,
  } = useQuery<CategoryReviewProps, Error>(['categoryReview'], () => getCategoryReview(keyword));

  if (categoryIsLoading) return <LoadingPage />;
  if (categoryError) return <ErrorPage type={2} />;

  console.log(categoryData, 'categoryData');

  return (
    <Container>
      {categoryData.reviews?.length == 0 ? (
        <>
          <NoData>찾으시는 제품 리뷰가 없어요</NoData>
          <Recommend>다른 유저들은 이런 제품을 찾아봤어요</Recommend>
          <ListItem
            id={0}
            productName={'마샬 STANMORE III'}
            reviewSpecData={['코어 i 5-13세대', '14인치', '32GB', '256-129GB']}
            starPoint={4.5}
            shortReview={'"가벼워요", "적당해요", "예뻐요"'}
            userInfo={{
              nickname: '김지수',
              profileImage: 'https://avatars.githubusercontent.com/u/77308744?v=4',
              job: '디자이너',
            }}
            scrapedCount={0}
            likedCount={0}
          />
        </>
      ) : (
        <>
          <Control>
            <Filter>
              <ButtonControl type="toggle" onClick={() => setCategoryBottom(!categoryBottom)}>
                카테고리
              </ButtonControl>
              <ButtonControl>전문가</ButtonControl>
            </Filter>
            <div onClick={() => setSortBottom(!sortBottom)}>
              <Sort />
            </div>
          </Control>

          {categoryData?.reviews.map((item, index) => (
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
            />
          ))}
        </>
      )}

      {categoryBottom && (
        <BottomCategory
          onClose={() => {
            setCategoryBottom(false);
          }}
        />
      )}
      {sortBottom && (
        <BottomSort
          onClose={() => {
            setSortBottom(false);
          }}
        />
      )}
    </Container>
  );
};

export default Result;

const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

// 상단 컨트롤
const Control = styled('div', {
  width: '344px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Filter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const NoData = styled('div', {
  width: '390px',
  height: '182px',
  bodyText: 2,
  color: '$Gray50',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '1px solid $Bar',
});

const Recommend = styled('div', {
  bodyText: 1,
  width: '350px',
  textAlign: 'left',
  color: '$TitleBlack',
  margin: '40px 0 10px 0',
});
