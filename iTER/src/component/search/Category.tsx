import { styled } from '../../../stitches.config';
import Category from '../common/Category';
import Recent from './Recent';
import { useQuery } from '@tanstack/react-query';
import { CategoryProps } from '../../types/Review';
import { getCategory } from '../../apis/Common';
import LoadingPage from '../common/Loading';
import ErrorPage from '../common/Error';

interface RecentProps {
  keywords: { id: number; text: string }[]; // 최근 검색어
  onDelete: (id: number) => void;
  onClick: (text: string) => void;
  onRecent: (text: string) => void;
}

const SearchCategory: React.FC<RecentProps> = ({ keywords, onDelete, onClick, onRecent }) => {
  const { data, isLoading, isError } = useQuery<CategoryProps[], Error>(['category'], getCategory);
  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage type={2} />;

  return (
    <Container>
      {keywords.length > 0 && <Recent keywords={keywords} onDelete={onDelete} onClick={onRecent} />}
      <div>카테고리</div>
      <Content>
        {data?.map((category, index) => (
          <Category
            key={index}
            name={category.name}
            onClick={() => onClick(category.name)}
            imageUrl={category.imageUrl}
            isSelected={false}
            gap={4}
          />
        ))}
      </Content>
    </Container>
  );
};

export default SearchCategory;

const Container = styled('div', {
  width: '370px',
  bodyText: 1,

  padding: '20px 0 0 20px',
  overflow: 'hidden',
});

const Content = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  marginTop: '25px',
});
