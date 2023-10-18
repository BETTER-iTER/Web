import { styled } from '../../../stitches.config';
import Category from '../common/Category';
import { ButtonText } from '../Font';
import CategoryList from '../../constants/Category';

const SearchCategory = () => {
  return (
    <Container>
      <ButtonText>카테고리</ButtonText>
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
  width: '340px',
  padding: '25px',
});

const Content = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  marginTop: '25px',
});
