import { styled } from '../../stitches.config';
import SearchCategory from '../component/search/Category';
import Nav from '../component/layout/Nav';
import Top from '../component/layout/Top';
import Recent from '../component/search/Recent';

const Search = () => {
  return (
    <Container>
      <Top search />
      <Recent />
      <SearchCategory />
      <Nav />
    </Container>
  );
};

export default Search;

const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
