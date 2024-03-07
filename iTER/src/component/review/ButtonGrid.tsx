import React, { useState, useEffect } from 'react';
import { styled } from '../../../stitches.config';
import { Caption1 } from '../Font';

interface ButtonGridProps {
  items: { data: string; id: number }[];
  onButtonClick: (item: { data: string; id: number }) => void;
  initialSelectedItem: string | null;
}

const GridContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0px',
});

const GridItem = styled('button', {
  backgroundColor: 'white',
  padding: '10px',
  cursor: 'pointer',
  height: '30px',
});

const Item = styled('div', {
  marginTop: '-3px',
});

const ButtonGrid: React.FC<ButtonGridProps> = ({ items, onButtonClick, initialSelectedItem }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    if (initialSelectedItem !== undefined) {
      const initialIndex = items.findIndex((item) => item.data === initialSelectedItem);
      if (initialIndex !== -1) {
        setSelectedItem(items[initialIndex].id);
      }
    }
  }, [initialSelectedItem, items]);

  const handleButtonClick = (item: { data: string; id: number }) => {
    setSelectedItem(item.id);
    onButtonClick(item);
  };

  return (
    <GridContainer>
      {items.map((item, index) => (
        <GridItem
          key={index}
          onClick={() => handleButtonClick(item)}
          style={{
            border: selectedItem === item.id ? '1px solid #8787F4' : '1px solid #EAEEF2',
            color: selectedItem === item.id ? '#8787F4' : '#8C959F',
          }}
        >
          <Item>
            <Caption1>{item.data}</Caption1>
          </Item>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default ButtonGrid;
