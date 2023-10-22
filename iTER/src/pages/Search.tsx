import { styled } from '../../stitches.config';
import SearchCategory from '../component/search/Category';
import Nav from '../component/layout/Nav';
import Top from '../component/layout/Top';
import { useEffect, useState } from 'react';
import ListItem from '../component/search/ListItem';
import Bottom, { BottomCategory, BottomSort } from '../component/common/Bottom';
import Result from '../component/search/Result';

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
      <Result />
      {/* <SearchCategory keywords={keywords} onDelete={handleDelete} /> */}
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
