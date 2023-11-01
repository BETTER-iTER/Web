import React from 'react';
import { styled } from '../../../stitches.config';

interface ButtonGridProps {
  items: string[];
  onButtonClick: (item: string) => void;
}

const GridContainer = styled("div",{
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
})

const GridItem = styled("button" , {
  backgroundColor: "#3498db",
  color: "#fff",
  border: "none",
  padding: "10px",
  cursor: "pointer",
})

const ButtonGrid: React.FC<ButtonGridProps> = ({ items, onButtonClick }) => {
  return (
    <GridContainer>
      {items.map((item, index) => (
        <GridItem key={index} onClick={() => onButtonClick(item)}>
          {item}
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default ButtonGrid;
