import { styled } from '../../../stitches.config';
import CategoryList from '../../constants/Category';
import Category from './Category';

interface BottomProps {
  title: string;
  component: React.ReactNode;
  onClose?: () => void;
}

const Bottom = ({ title, component, onClose }: BottomProps) => {
  return (
    <Background onClick={onClose}>
      <Container>
        <Title>
          <Bar />
          <div>{title}</div>
        </Title>
        {component}
      </Container>
    </Background>
  );
};

export const BottomCategory = ({ onClose }: { onClose: () => void }) => {
  return (
    <Bottom
      title="카테고리"
      onClose={onClose}
      component={
        <CategoryBox>
          {CategoryList.map((category) => (
            <Category
              key={category.id}
              name={category.name}
              onClick={() => console.log('click')}
              isSelected={false}
              gap={4}
              id={category.id}
            />
          ))}
        </CategoryBox>
      }
    />
  );
};

export const BottomSort = ({ onClose }: { onClose: () => void }) => {
  return (
    <Bottom
      title="정렬"
      onClose={onClose}
      component={
        <SortBox>
          <SortItem>최근 작성순(기본)</SortItem>
          <SortItem>좋아요 많은 순</SortItem>
          <SortItem>스크랩 많은 순</SortItem>
          <SortItem>팔로워 많은 순</SortItem>
        </SortBox>
      }
    />
  );
};

export default Bottom;

const Background = styled('div', {
  position: 'fixed',
  bottom: 0,
  width: '390px',
  height: '100vh',
  zIndex: 10,
  backgroundColor: 'rgba(36, 36, 36, 0.80)',
});

const Container = styled('div', {
  width: '390px',
  backgroundColor: '$White',
  borderRadius: '20px 20px 0 0',
  position: 'absolute',
  bottom: 0,
});

const Bar = styled('div', {
  width: '64px',
  height: '4px',
  backgroundColor: '$Gray10',
  borderRadius: '2px',
  margin: '8px 0 20px 0',
});

const Title = styled('div', {
  width: '100%',
  borderBottom: '1px solid $Gray10',
  bodyText: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '8px',
});

const CategoryBox = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  padding: '25px 0 60px 27px',
});

const SortBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '60px',
});

const SortItem = styled('div', {
  bodyText: 2,
  padding: '18px 30px',
  borderBottom: '1px solid $Gray10',
  cursor: 'pointer',
});
