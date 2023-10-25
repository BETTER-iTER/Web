import { useState } from 'react';
import { styled } from '../../../stitches.config';
import { BottomCategory, BottomSort } from '../common/Bottom';
import { ButtonControl } from '../common/Button';
import ListItem from './ListItem';
import Sort from '../../assets/icon/Sort.svg?react';

const Result = () => {
  const [categoryBottom, setCategoryBottom] = useState<boolean>(false);
  const [sortBottom, setSortBottom] = useState<boolean>(false);
  return (
    <Container>
      <Control>
        <Filter>
          <ButtonControl type="toggle" onClick={() => setCategoryBottom(!categoryBottom)}>
            카테고리
          </ButtonControl>
          <ButtonControl>전문가</ButtonControl>
        </Filter>
        <div onClick={() => setSortBottom(!sortBottom)}>
          <Sort />
        </div>
      </Control>
      <ListItem
        id={0}
        title={'마샬 STANMORE III'}
        spec={'코어 i 5-13세대 / 14인치 / 32GB / 256-129GB'}
        star={4.5}
        review={'"가벼워요", "적당해요", "예뻐요"'}
        user={'제리'}
      />
      {categoryBottom && (
        <BottomCategory
          onClose={() => {
            setCategoryBottom(false);
          }}
        />
      )}
      {sortBottom && (
        <BottomSort
          onClose={() => {
            setSortBottom(false);
          }}
        />
      )}
    </Container>
  );
};

export default Result;

const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

// 상단 컨트롤
const Control = styled('div', {
  width: '344px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Filter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});
