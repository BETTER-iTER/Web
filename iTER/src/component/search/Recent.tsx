import { styled } from '../../../stitches.config';
import Xbtn from '../../assets/icon/Xbtn.svg?react';

interface RecentProps {
  keywords: { id: number; text: string }[];
  onDelete: (id: number) => void;
  onClick: (text: string) => void;
}

const Recent: React.FC<RecentProps> = ({ keywords, onDelete, onClick }) => {
  return (
    <Box>
      <div>최근 검색어</div>
      <Items>
        {keywords.map((item) => (
          <Item onClick={() => onClick(item.text)} item={item} onDelete={onDelete} key={item.id} />
        ))}
      </Items>
    </Box>
  );
};

export default Recent;

const Box = styled('div', {
  width: '340px',
  bodyText: 1,
  marginBottom: '23px',
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

interface ItemProps {
  item: { id: number; text: string };
  onDelete: (id: number) => void;
  onClick: () => void;
}

const Item: React.FC<ItemProps> = ({ item, onDelete, onClick }) => {
  return (
    <ItemBox onClick={onClick}>
      <div>{item.text}</div>
      <Xbox onClick={() => onDelete(item.id)}>
        <Xbtn />
      </Xbox>
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
  border: '1px solid $Bar',
  bodyText: 2,
  color: '#8C959F',
  whiteSpace: 'nowrap',
});

const Xbox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});
