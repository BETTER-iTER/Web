import { styled } from '../../stitches.config';
import Nav from '../component/layout/Nav';
import { useEffect, useState } from 'react';
import SearchCategory from '../component/search/Category';
import TopSearch from '../component/layout/TopSearch';

const Search = () => {
  const [keywords, setKeywords] = useState<{ id: number; text: string }[]>(
    JSON.parse(localStorage.getItem('keywords') || '[]')
  );
  // 최근 검색어
  useEffect(() => {
    const currentDate = Date.now();
    const filteredKeywords = keywords
      .filter((keyword) => currentDate - keyword.id <= 604800000)
      .slice(0, 7);
    localStorage.setItem('keywords', JSON.stringify(filteredKeywords));
  }, [keywords]);

  const handleDelete = (id: number) => {
    const nextKeywords = keywords.filter((keyword) => keyword.id !== id);
    setKeywords(nextKeywords);
  };
  // 엔터를 눌러 키워드를 입력했을 때
  const handleAdd = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  return (
    <Container>
      <TopSearch onHandle={handleAdd} />
      {/* <Result /> */}
      <SearchCategory keywords={keywords} onDelete={handleDelete} />

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
