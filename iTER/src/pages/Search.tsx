import { styled } from '../../stitches.config';
import SearchCategory from '../component/search/Category';
import Nav from '../component/layout/Nav';
import Top from '../component/layout/Top';
import Recent from '../component/search/Recent';
import { useEffect, useState } from 'react';

const Search = () => {
  const [keywords, setKeywords] = useState<{ id: number; text: string }[]>(
    JSON.parse(localStorage.getItem('keywords') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  const handleDelete = (id: number) => {
    const nextKeywords = keywords.filter((keyword) => {
      if (typeof keyword === 'string') {
        return true;
      }
      return keyword.id !== id;
    });
    setKeywords(nextKeywords);
  };

  const handleAdd = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  return (
    <Container>
      <Top search onHandle={handleAdd} />
      <Recent keywords={keywords} onDelete={handleDelete} />
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
