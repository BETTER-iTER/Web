import { styled } from '../../../stitches.config';
import Xbtn from '../../assets/icon/Xbtn.svg?react';

const Recent = () => {
  return (
    <Box>
      <div>최근 검색어</div>
      <Items>{dummy.map((item) => Item(item))}</Items>
    </Box>
  );
};

export default Recent;

const Box = styled('div', {
  width: '340px',
  bodyText: 1,
  marginTop: '30px',
  marginBottom: '5px',
});

const Items = styled('div', {
  display: 'flex',
  gap: '8px',
  marginTop: '20px',
  overflowX: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

const Item = (item: string) => {
  return (
    <ItemBox>
      <div>{item}</div>
      <Xbtn />
    </ItemBox>
  );
};

const ItemBox = styled('div', {
  width: 'fit-content',
  display: 'flex',
  gap: '2px',
  alignItems: 'center',
  padding: '7px 12px',
  borderRadius: '24px',
  marginBottom: '10px',
  cursor: 'pointer',
  border: '1px solid #EAEEF2',
  bodyText: 2,
  color: '#8C959F',
  whiteSpace: 'nowrap',
});

const dummy = ['버티컬 마우스', '헤드셋', '마샬 헤드셋', 'm2'];
