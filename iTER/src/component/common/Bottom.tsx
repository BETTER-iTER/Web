import { useQuery } from '@tanstack/react-query';
import { styled } from '../../../stitches.config';
import { getCategory } from '../../apis/Common';
import { CategoryProps } from '../../types/Review';
import Category from './Category';
import ErrorPage from './Error';
import LoadingPage from './Loading';

interface BottomProps {
  title: string;
  component: React.ReactNode;
  onClose?: () => void;
}

const Bottom = ({ title, component, onClose }: BottomProps) => {
  return (
    <Background onClick={onClose}>
      <BackContainer>
        <Container>
          <Title>
            <Bar />
            <div>{title}</div>
          </Title>
          {component}
        </Container>
      </BackContainer>
    </Background>
  );
};

export const BottomCategory = ({ onClose }: { onClose: () => void }) => {
  const { data, isLoading, isError } = useQuery<CategoryProps[], Error>(['category'], getCategory);
  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage type={2} />;

  return (
    <Bottom
      title="카테고리"
      onClose={onClose}
      component={
        <CategoryBox>
          {data?.map((category, index) => (
            <Category
              key={index}
              name={category.name}
              onClick={() => console.log('click')}
              isSelected={false}
              gap={4}
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

export const BottomReviewSetting = ({
  onClose,
  onChange,
}: {
  onClose: () => void;
  onChange: (index: number) => void;
}) => {
  return (
    <Bottom
      title="리뷰 설정"
      onClose={onClose}
      component={
        <SettingBox>
          <SortItem onClick={() => onChange(1)}>리뷰 수정하기</SortItem>
          <SortItem onClick={() => onChange(2)}>리뷰 삭제하기</SortItem>
        </SettingBox>
      }
    />
  );
};

export default Bottom;

const Background = styled('div', {
  width: '100%',
  height: '100vh',
  zIndex: 10,
  backgroundColor: 'rgba(36, 36, 36, 0.80)',
  position: 'fixed',
  top: 0,
  left: 0,
});

const BackContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
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

const SettingBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '22px',
});
