import { styled } from '../../../stitches.config';
import Category from '../common/Category';
import CategoryList from '../../constants/Category';
import Recent from './Recent';

interface RecentProps {
  keywords: { id: number; text: string }[];
  onDelete: (id: number) => void;
}

const SearchCategory: React.FC<RecentProps> = ({ keywords, onDelete }) => {
  return (
    <Container>
      {keywords.length > 0 && <Recent keywords={keywords} onDelete={onDelete} />}
      <div>카테고리</div>
      <Content>
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
      </Content>
    </Container>
  );
};

export default SearchCategory;

const Container = styled('div', {
  width: '370px',
  bodyText: 1,

  padding: '25px 0 0 25px',
  overflow: 'hidden',
});

const Content = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  marginTop: '25px',
});
