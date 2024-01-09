import { useEffect, useState } from 'react';
import { styled } from '../../../stitches.config';
import { BottomCategory, BottomSort } from '../common/Bottom';
import { ButtonControl } from '../common/Button';
import ListItem from './ListItem';
import Sort from '../../assets/icon/Sort.svg?react';
import { getReviewList } from '../../apis/Review';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../common/Loading';
import ErrorPage from '../common/Error';
import { CategoryReviewProps } from '../../types/Review';
import CategoryData from '../../constants/Category';

const Result = ({ keyword }: { keyword: string }) => {
  const [categoryBottom, setCategoryBottom] = useState<boolean>(false);
  const [sortBottom, setSortBottom] = useState<boolean>(false);
  const [sort, setSort] = useState<string>('latest');
  // const [page, setPage] = useState<number>(0);
  const page = 0;
  const [keywordLast, setKeywordLast] = useState<string>(keyword);
  const [expert, setExpert] = useState<boolean>(false);

  const [listData, setListData] = useState<CategoryReviewProps>();
  const [etcData, setEtcData] = useState<CategoryReviewProps>();

  const {
    data: Data,
    error: listError,
    isLoading: listIsLoading,
  } = useQuery<CategoryReviewProps, Error>(['reviewList', keywordLast, sort, expert], () =>
    getReviewList({ keywordLast, sort, page, expert })
  );

  useEffect(() => {
    setKeywordLast(keyword);
  }, [keyword]);

  useEffect(() => {
    if (Data?.existed) {
      setListData(Data);
      console.log('listData', listData);
    } else {
      setEtcData(Data);
    }
  }, [Data, listData]);

  if (listIsLoading) return <LoadingPage />;
  if (listError) return <ErrorPage type={2} />;

  return (
    <Container>
      {!Data.existed ? (
        <>
          <NoData>찾으시는 제품 리뷰가 없어요</NoData>
          <Recommend>다른 유저들은 이런 제품을 찾아봤어요</Recommend>
          <Scroll>
            {etcData?.reviews.map((item, index) => (
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
                keyword={keywordLast}
              />
            ))}
          </Scroll>
        </>
      ) : (
        <>
          <Control>
            <Filter>
              <ButtonControl
                type="toggle"
                onClick={() => setCategoryBottom(!categoryBottom)}
                active={CategoryData.map((item) => item).includes(keywordLast)}
              >
                카테고리
              </ButtonControl>
              <ButtonControl
                onClick={() => {
                  setExpert(!expert);
                }}
                active={expert}
              >
                전문가
              </ButtonControl>
            </Filter>
            <div onClick={() => setSortBottom(!sortBottom)}>
              <Sort />
            </div>
          </Control>
          <Items>
            {listData?.reviews.map((item, index) => (
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
                keyword={keywordLast}
              />
            ))}
          </Items>
        </>
      )}

      {categoryBottom && (
        <BottomCategory
          onClose={() => {
            setCategoryBottom(false);
          }}
          onChange={(value: string) => {
            setKeywordLast(value);
          }}
          keyword={keywordLast}
        />
      )}
      {sortBottom && (
        <BottomSort
          onClose={() => {
            setSortBottom(false);
          }}
          onChange={(value: string) => {
            setSort(value);
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
  overflowY: 'auto',
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
  minHeight: '182px',
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

const Items = styled('div', {
  width: '100%',
  height: 'calc(100vh - 165px)',
  overflowY: 'scroll',
  marginBottom: '42px',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

const Scroll = styled('div', {
  width: '100%',
  height: 'calc(100vh - 200px)',
  overflowY: 'scroll',
  marginBottom: '42px',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
