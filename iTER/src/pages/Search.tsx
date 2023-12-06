import { styled } from '../../stitches.config';
import Nav from '../component/layout/Nav';
import { useEffect, useState } from 'react';
import SearchCategory from '../component/search/Category';
import TopSearch from '../component/layout/TopSearch';
import Result from '../component/search/Result';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const [keyword, setKeyword] = useState<string>(''); // 검색어
  const [recentKeywords, setRecentKeywords] = useState<{ id: number; text: string }[]>( // 최근 검색어
    JSON.parse(localStorage.getItem('keywords') || '[]')
  );

  // 카테고리 선택
  const handleCategory = (text: string) => {
    setKeyword(text);
  };

  // 홈에서 선택한 카테고리
  const location = useLocation();
  const keywordHome = location.state?.category;
  useEffect(() => {
    if (keywordHome) {
      setKeyword(keywordHome);
    }
  }, [keywordHome]);

  // 엔터를 눌러 키워드를 입력했을 때
  const handleAdd = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setRecentKeywords([newKeyword, ...recentKeywords]);
    setKeyword(text);
  };

  // 최근 검색어
  useEffect(() => {
    const currentDate = Date.now();

    const validKeywords = recentKeywords.filter((keyword) => keyword !== undefined);

    const uniqueKeywords = Array.from(new Set(validKeywords.map((keyword) => keyword.text))).map(
      (text) => validKeywords.find((keyword) => keyword?.text === text)
    );

    const filteredKeywords = uniqueKeywords
      .filter((keyword) => keyword && currentDate - keyword.id <= 604800000)
      .slice(0, 7);

    localStorage.setItem('keywords', JSON.stringify(filteredKeywords));
  }, [recentKeywords]);
  // 최근검색어 삭제
  const handleDelete = (id: number) => {
    const nextKeywords = recentKeywords.filter((keyword) => keyword.id !== id);
    setRecentKeywords(nextKeywords);
  };
  // 최근검색어 선택
  const handleRecent = (text: string) => {
    setKeyword(text);
  };
  return (
    <Container>
      <TopSearch
        onHandle={handleAdd}
        back={keyword.length > 0 ? () => setKeyword('') : undefined}
      />

      {keyword.length <= 0 ? (
        <SearchCategory
          keywords={recentKeywords}
          onDelete={handleDelete}
          onRecent={handleRecent}
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
