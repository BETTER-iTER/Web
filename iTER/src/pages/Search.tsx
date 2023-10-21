import { styled } from '../../stitches.config';
import SearchCategory from '../component/search/Category';
import Nav from '../component/layout/Nav';
import Top from '../component/layout/Top';
import { useEffect, useState } from 'react';
import ListItem from '../component/search/ListItem';

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
      <ListItem
        title={'마샬 STANMORE III'}
        spec={'코어 i 5-13세대 / 14인치 / 32GB / 256-129GB'}
        star={4.5}
        review={'"가벼워요", "적당해요", "예뻐요"'}
        user={'제리'}
      />
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
