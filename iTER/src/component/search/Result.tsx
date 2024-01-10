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
import { useSearchParams } from 'react-router-dom';

const Result = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordFromQuery = searchParams.get('keyword') || ''; // 쿼리스트링 keyword
  const categoryFromQuery = searchParams.get('category') || ''; // 쿼리스트링 category
  const expertFromQuery = searchParams.get('expert') === 'true'; // 쿼리스트링 expert

  const [keyword, setKeywordLast] = useState<string>(keywordFromQuery);
  const [category, setCategory] = useState<string>(categoryFromQuery);
  const [expert, setExpert] = useState<boolean>(expertFromQuery);

  const [categoryBottom, setCategoryBottom] = useState<boolean>(false);
  const [sortBottom, setSortBottom] = useState<boolean>(false);

  const [sort, setSort] = useState<string>('latest');
  const page = 0;

  const [listData, setListData] = useState<CategoryReviewProps>();
  const [etcData, setEtcData] = useState<CategoryReviewProps>();

  const {
    data: Data,
    error: listError,
    isLoading: listIsLoading,
  } = useQuery<CategoryReviewProps, Error>(['reviewList', keyword, sort, expert], () =>
    getReviewList({ keyword, category, sort, page, expert })
  );

  useEffect(() => {
    setKeywordLast(keywordFromQuery);
    setCategory(categoryFromQuery);
    setExpert(expertFromQuery);
  }, [keywordFromQuery, categoryFromQuery, expertFromQuery]);

  // 검색 조회 결과 존재 여부
  useEffect(() => {
    if (Data?.existed) {
      setListData(Data);
    } else {
      setEtcData(Data);
    }
  }, [Data, listData]);

  if (listIsLoading) return <LoadingPage />;
  if (listError) return <ErrorPage type={2} />;

  // 카테고리 필터링
  const handleCategoryChange = (value: string) => {
    setKeywordLast(value);
    const currentParams = Object.fromEntries(searchParams.entries());
    const updatedParams = { ...currentParams, category: value };
    setSearchParams(updatedParams, { replace: true });
  };

  // 전문가 리뷰 필터링
  const handleExpertChange = () => {
    const updatedExpert = !expert;
    setExpert(updatedExpert);
    setSearchParams({ keyword, category, expert: updatedExpert.toString() }, { replace: true });
  };

  return (
    <Container>
      <Control>
        <Filter>
          <ButtonControl
            type="toggle"
            onClick={() => setCategoryBottom(!categoryBottom)}
            active={CategoryData.map((item) => item).includes(category)}
          >
            카테고리
          </ButtonControl>
          <ButtonControl onClick={handleExpertChange} active={expert}>
            전문가
          </ButtonControl>
        </Filter>
        <div onClick={() => setSortBottom(!sortBottom)}>
          <Sort />
        </div>
      </Control>
      {!Data.existed ? (
        <>
          <NoData>찾으시는 제품 리뷰가 없어요</NoData>
          <Recommend>다른 유저들은 이런 제품을 찾아봤어요</Recommend>
          <Scroll>
            {etcData?.reviews.map((item, index) => <ListItem key={index} item={item} />)}
          </Scroll>
        </>
      ) : (
        <>
          <Items>
            {listData?.reviews.map((item, index) => <ListItem key={index} item={item} />)}
          </Items>
        </>
      )}

      {categoryBottom && (
        <BottomCategory
          onClose={() => {
            setCategoryBottom(false);
          }}
          onChange={handleCategoryChange}
          keyword={keyword}
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
  minHeight: '60px',
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
