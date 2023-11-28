import React, { useState } from 'react';
import { styled } from '../../../stitches.config';
import { Caption1 } from '../Font';

interface ButtonGridProps {
  items: string[];
  onButtonClick: (item: string) => void;
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

const ButtonGrid: React.FC<ButtonGridProps> = ({ items, onButtonClick }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleButtonClick = (item: string) => {
    setSelectedItem(item); // 클릭된 항목을 상태에 저장
    onButtonClick(item);
  };

  return (
    <GridContainer>
      {items.map((item, index) => (
        <GridItem
          key={index}
          onClick={() => handleButtonClick(item)}
          style={{
            border: selectedItem === item ? '1px solid #8787F4' : '1px solid #EAEEF2', // 클릭된 버튼의 테두리를 변경
            color: selectedItem === item ? '#8787F4' : '#8C959F', // 클릭된 버튼의 글자색을 변경
          }}
        >
          <Item>
            <Caption1>{item}</Caption1>
          </Item>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default ButtonGrid;
