import { styled } from '../../stitches.config';
import Category from '../component/common/Category';
import { ButtonWrite } from '../component/common/Button';
import Top from '../component/home/Top';
import CategoryList from '../constants/Category';

const Home = () => {
  return (
    <Container>
      <Top />
      <ButtonWrite>리뷰 쓰러가기</ButtonWrite>
      <Label>아이터에서 찐 리뷰를 살펴보세요</Label>
      <CategoryScroll />
    </Container>
  );
};

export default Home;

const CategoryScroll = () => {
  return (
    <CategoryBox>
      {CategoryList.map((item) => {
        return (
          <Category
            key={item.id}
            id={item.id}
            name={item.name}
            isSelected={false}
            gap={8.98}
            onClick={() => {}}
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
  margin: '20px 0 15px 24px',
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
