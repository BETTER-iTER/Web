import { styled } from '../../stitches.config';
import Category from '../component/common/Category';
import { ButtonWrite } from '../component/common/Button';
import Review from '../component/home/Review';
import Top from '../component/home/Top';
import Quiz from '../component/home/Quiz';
import News from '../component/home/News';
import Footer from '../component/layout/Footer';
import Nav from '../component/layout/Nav';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getHome } from '../apis/home';
import LoadingPage from '../component/common/Loading';
import ErrorPage from '../component/common/Error';
import { HomeProps } from '../types/Home';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const navigate = useNavigate();
  // 홈 데이터 가져오기
  const {
    data: homeData,
    isLoading: homeLoading,
    isError: homeError,
  } = useQuery<HomeProps, Error>(['home'], getHome);

  if (homeLoading) return <LoadingPage />;
  if (homeError) return <ErrorPage type={2} />;

  return (
    <Container>
      <Top />
      <div style={{ height: 20 }} />
      <ButtonWrite
        onClick={() => {
          navigate('/review/write');
        }}
      >
        리뷰 쓰러가기
      </ButtonWrite>

      <Label>최신IT 소식</Label>
      <News newsData={homeData?.news} />

      <Label>카테고리별로 찐 리뷰를 살펴보세요</Label>
      <CategoryScroll list={homeData?.categories} />

      {/* 관심카테고리 리뷰 리스트 */}
      {Object.keys(homeData.categoryReviews).map((category: string) => {
        const categoryName = category as string;
        return (
          <React.Fragment key={categoryName}>
            <Label>{categoryName}</Label>
            <Review list={homeData?.categoryReviews[categoryName]} />
          </React.Fragment>
        );
      })}

      <Label>팔로우들의 리뷰</Label>
      <Review list={homeData?.followingReviews} />

      <Label>리뷰보고 구매했어요</Label>
      <Review list={homeData?.mostScrapedAndLikedReviews} />

      <Label>🪙 IT 퀴즈풀고 포인트 받기</Label>
      <Quiz id={1} question={'CPU는 중앙처리장치이다'} />

      <Footer />
      <Nav />
    </Container>
  );
};

export default Home;

const CategoryScroll = ({ list }: { list: HomeProps['categories'] }) => {
  const navigation = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<string>('');

  console.log(selectedCategory, 'selectedCategory');

  const handleCategoryClick = (name: string) => {
    console.log('click', name);
    setSelectedCategory(name);
    console.log('set', name, selectedCategory);
  };
  useEffect(() => {
    if (selectedCategory.length > 0) {
      console.log(selectedCategory, 'selectedCategory');
      navigation('/search', { state: { category: selectedCategory } });
    }
  }, [navigation, selectedCategory]);
  return (
    <CategoryBox>
      {list.map((item, index) => {
        return (
          <Category
            key={index}
            name={item.name}
            imageUrl={item.imageUrl}
            isSelected={false}
            gap={8.98}
            onClick={() => {
              handleCategoryClick(item.name);
            }}
          />
        );
      })}
    </CategoryBox>
  );
};

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
});

const Label = styled('div', {
  color: '$TitleBlack',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '22px',
  alignSelf: 'flex-start',
  margin: '30px 0 15px 24px',
});

const CategoryBox = styled('div', {
  display: 'flex',
  gap: '20px',
  overflowX: 'scroll',
  width: '369px',
  paddingLeft: '16px',
  paddingRight: '5px',
  alignSelf: 'flex-end',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
