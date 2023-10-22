import { styled } from '../../stitches.config';
import Nav from '../component/layout/Nav';
import { useEffect, useState } from 'react';
import Result from '../component/search/Result';
import SearchCategory from '../component/search/Category';
import RecommendItem from '../component/search/RecommendList';
import TopSearch from '../component/layout/TopSearch';

const Search = () => {
  const [keywords, setKeywords] = useState<{ id: number; text: string }[]>(
    JSON.parse(localStorage.getItem('keywords') || '[]')
  );
  const [searchInputValue, setSearchInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

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
    setShowSuggestions(false);
  };

  // 추천 검색어

  // 값을 입력하기 시작했을 때
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchInputValue(text);
    if (text.trim() === '') {
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
    }
  };

  const handleSelectSuggestions = (text: string) => {
    console.log(text);
    setSearchInputValue(text);
    setShowSuggestions(false);
  };

  return (
    <Container>
      <TopSearch onHandle={handleAdd} onChange={handleSearch} searchText={searchInputValue} />
      {/* <Result /> */}
      <SearchCategory keywords={keywords} onDelete={handleDelete} />
      {showSuggestions && (
        <RecommendBox>
          {recommend
            .filter((text) => text.includes(searchInputValue))
            .map((text) => (
              <RecommendItem key={text} text={text} onSelect={handleSelectSuggestions} />
            ))}
        </RecommendBox>
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

const RecommendBox = styled('div', {
  width: '390px',
  height: '100vh',
  marginTop: '60px',
  backgroundColor: '$White',
  position: 'absolute',
  zIndex: 1,
});

const recommend = ['추천 검색어', '추천할까', '추천할게'];
