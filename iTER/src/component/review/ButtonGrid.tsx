import React from 'react';
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
  return (
    <GridContainer>
      {items.map((item, index) => (
        <GridItem key={index} onClick={() => onButtonClick(item)}>
          <Caption1>{item}</Caption1>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default ButtonGrid;
