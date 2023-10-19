import { useState } from 'react';
import { styled } from '../../../stitches.config';
import CategoryList, { CategoryProps } from '../../constants/Category';

interface InterestProps {
  onDisabled: (value: boolean) => void;
  onChange: (value: string) => void;
}
const Interest = ({ onDisabled, onChange }: InterestProps) => {
  const [selected, setSelected] = useState<number[]>([]);
  const handleSelect = (id: number) => {
    const selectedCount = selected.length;

    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else if (selectedCount < 3) {
      setSelected([...selected, id]);
    }
  };

  onDisabled(selected.length === 0);
  onChange(selected.join(','));

  return (
    <Container>
      {CategoryList.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            onClick={() => handleSelect(item.id)}
            isSelected={selected.includes(item.id)}
          />
        );
      })}
    </Container>
  );
};

interface CategoryItem extends CategoryProps {
  onClick: () => void;
  isSelected: boolean;
}

const Item = ({ name, onClick, isSelected }: CategoryItem) => {
  return (
    <ItemBox onClick={onClick}>
      <Image isSelected={isSelected}></Image>
      <Name>{name}</Name>
    </ItemBox>
  );
};

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  backgroundColor: '$White',
});

const ItemBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  width: 'fit-content',
  marginBottom: '16px',
  gap: '4px',
});

const Image = styled('div', {
  width: '68px',
  height: '68px',
  borderRadius: '50%',
  boxShadow: '2px 4px 4px 2px rgba(158, 158, 158, 0.25)',
  variants: {
    isSelected: {
      true: {
        backgroundColor: ' rgba(135, 135, 244, 0.30)',
      },
    },
  },
});

const Name = styled('div', {
  color: '$TitleBlack',
  bodyText: 2,
  height: '20px',
});

export default Interest;
