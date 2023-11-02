import React, { useState } from 'react';
import { styled } from '../../../stitches.config';
import { Caption1 } from '../Font';

interface ButtonGridProps {
  items: string[];
  onButtonClick: (item: string) => void;
}

const GridContainer = styled("div",{
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1px",
})

const GridItem = styled("button" , {
  backgroundColor: "white",
  color: "#8C959F",
  border: "1px solid #8C959F",
  padding: "10px",
  cursor: "pointer",
})

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
            backgroundColor: selectedItem === item ? '#4C4E55' : 'white', // 클릭된 버튼의 배경색을 변경
            color: selectedItem === item ? 'white' : '#8C959F', // 클릭된 버튼의 글자색을 변경
          }}
        >
          <Caption1>{item}</Caption1>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default ButtonGrid;
