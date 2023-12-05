import { styled } from '../../stitches.config';
import Nav from '../component/layout/Nav';
import { useEffect, useState } from 'react';
import SearchCategory from '../component/search/Category';
import TopSearch from '../component/layout/TopSearch';
import Result from '../component/search/Result';

const Search = () => {
  const [count, setCount] = useState<number>(1); // 페이지
  const [keyword, setKeyword] = useState<string>(''); // 검색어
  const [recentKeywords, setRecentKeywords] = useState<{ id: number; text: string }[]>( // 최근 검색어
    JSON.parse(localStorage.getItem('keywords') || '[]')
  );
  // 카테고리 선택
  const handleCategory = (text: string) => {
    setKeyword(text);
    setCount(2);
  };
  // 최근 검색어
  useEffect(() => {
    const currentDate = Date.now();
    const filteredKeywords = recentKeywords
      .filter((keyword) => currentDate - keyword.id <= 604800000)
      .slice(0, 7);
    localStorage.setItem('keywords', JSON.stringify(filteredKeywords));
  }, [recentKeywords]);

  const handleDelete = (id: number) => {
    const nextKeywords = recentKeywords.filter((keyword) => keyword.id !== id);
    setRecentKeywords(nextKeywords);
  };
  // 엔터를 눌러 키워드를 입력했을 때
  const handleAdd = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setRecentKeywords([newKeyword, ...recentKeywords]);
  };

  console.log(keyword, 'keyword!!');
  return (
    <Container>
      <TopSearch
        onHandle={handleAdd}
        back={
          count > 1
            ? () => {
                setCount(count - 1);
              }
            : undefined
        }
      />

      {count == 1 ? (
        <SearchCategory
          keywords={recentKeywords}
          onDelete={handleDelete}
          onClick={handleCategory}
        />
      ) : (
        <Result keyword={keyword} />
      )}
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
