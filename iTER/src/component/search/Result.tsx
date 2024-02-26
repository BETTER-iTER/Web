import { useEffect, useState } from 'react';
import { styled } from '../../../stitches.config';
import { BottomCategory, BottomSort } from '../common/Bottom';
import { ButtonControl } from '../common/Button';
import ListItem from './ListItem';
import Sort from '../../assets/icon/Sort.svg?react';
import { getCategoryReviewList, getReviewList } from '../../apis/Review';
import { useInfiniteQuery } from '@tanstack/react-query';
import LoadingPage from '../common/Loading';
import ErrorPage from '../common/Error';
import { CategoryReviewProps } from '../../types/Review';
import CategoryData from '../../constants/Category';
import { useSearchParams } from 'react-router-dom';

const Result = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || ''; // 쿼리스트링 keyword
  const category = searchParams.get('category') || ''; // 쿼리스트링 category
  const expert = searchParams.get('expert') === 'true'; // 쿼리스트링 expert
  const categoryKeyword = searchParams.get('categoryList') || ''; // 필터가 아닌 카테고리 선택 키워드

  const [categoryBottom, setCategoryBottom] = useState<boolean>(false);
  const [sortBottom, setSortBottom] = useState<boolean>(false);

  const [sort, setSort] = useState<string>('latest');
  const page = 0;

  const [listData, setListData] = useState<CategoryReviewProps[]>();
  const [etcData, setEtcData] = useState<CategoryReviewProps>();

  // 카테고리 검색 결과
  const {
    data: categoryData,
    error: categoryError,
    isLoading: categoryIsLoading,
    fetchNextPage: categoryNextPage,
  } = useInfiniteQuery<CategoryReviewProps, Error>(
    ['reviewListCategory', { categoryKeyword, page }],
    ({ pageParam = 0 }) => getCategoryReviewList({ category: categoryKeyword, page: pageParam }),
    {
      getNextPageParam: (lastPage) => (lastPage.hasNext ? page + 1 : undefined),
    }
  );

  // 키워드 검색 결과
  const {
    data: Data,
    error: listError,
    isLoading: listIsLoading,
    fetchNextPage: listNextPage,
  } = useInfiniteQuery<CategoryReviewProps, Error>(
    ['reviewList', keyword, sort, expert, category],
    ({ pageParam = 0 }) => getReviewList({ keyword, category, sort, page: pageParam, expert }),
    {
      getNextPageParam: (lastPage) => (lastPage.hasNext ? page + 1 : undefined),
    }
  );

  // 검색 조회 결과 존재 여부
  const type = window.location.href.split('?')[1];
  useEffect(() => {
    if (type.startsWith('categoryList')) {
      if (categoryData?.pages[0]?.existed) {
        setListData(categoryData?.pages);
      } else {
        setEtcData(categoryData?.pages[0]);
      }
    } else {
      if (Data?.pages[0]?.existed) {
        setListData(Data?.pages);
      } else {
        setEtcData(Data?.pages[0]);
      }
    }
  }, [Data, categoryData]);

  if (categoryIsLoading || listIsLoading) return <LoadingPage />;
  if (categoryError || listError) return <ErrorPage type={2} />;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { currentTarget } = e;
    if (currentTarget instanceof HTMLDivElement) {
      const { scrollHeight, scrollTop, clientHeight } = currentTarget;
      // 스크롤이 리스크의 끝에 도달했을 때
      if (scrollHeight - scrollTop === clientHeight) {
        if (categoryData?.pages[0]?.existed) {
          categoryNextPage();
        } else {
          listNextPage();
        }
      }
    }
  };
  console.log(categoryData, 'categoryData');
  console.log(Data, 'Data');
  console.log(listData, 'listData');

  // 카테고리 필터링
  const handleCategoryChange = (value: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    const updatedParams = { ...currentParams, category: value };
    setSearchParams(updatedParams);
  };

  // 전문가 리뷰 필터링
  const handleExpertChange = () => {
    const updatedExpert = !expert;
    setSearchParams({ keyword, category, expert: updatedExpert.toString() });
  };

  return (
    <Container>
      {!categoryKeyword && (
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
      )}
      {!Data?.pages[0]?.existed && !categoryData?.pages[0]?.existed ? (
        <>
          <NoData>찾으시는 제품 리뷰가 없어요</NoData>
          <Recommend>다른 유저들은 이런 제품을 찾아봤어요</Recommend>
          <Scroll>
            {etcData?.reviews.map((item, index) => <ListItem key={index} item={item} />)}
          </Scroll>
        </>
      ) : (
        <>
          <Items onScroll={handleScroll}>
            {listData?.map((page) =>
              page.reviews.map((item, index) => <ListItem key={index} item={item} />)
            )}
          </Items>
        </>
      )}

      {categoryBottom && (
        <BottomCategory
          onClose={() => {
            setCategoryBottom(false);
          }}
          onChange={handleCategoryChange}
          keyword={category}
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
