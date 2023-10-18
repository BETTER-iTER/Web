import { styled } from '../../stitches.config';
import SearchCategory from '../component/search/Category';
import Nav from '../component/layout/Nav';
import Top from '../component/layout/Top';

const Search = () => {
  return (
    <Container>
      <Top search />
      <SearchCategory />
      <Nav />
    </Container>
  );
};

export default Search;

const Container = styled('div', {
  width: '100%',
  height: '100vh',
  border: 'solid 1px red',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
