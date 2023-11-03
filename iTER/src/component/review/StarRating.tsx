import React, { useState } from "react";
import Star from '../../assets/icon/Star.svg';
import Starfill from '../../assets/icon/Starfill.svg';

interface StarRatingProps {
  totalStars: number;
  selectedStars: number;
  onStarClick: (star: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars, selectedStars, onStarClick }) => {
  const createStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <img
          key={i}
          src={i <= selectedStars ? Starfill : Star} 
          alt={`Star ${i}`}
          onClick={() => onStarClick(i)}
          style={{
            width: "50px", 
            height: "30px", 
            cursor: "pointer", 
          }}
        />
      );
    }
    return stars;
  };

  return (
    <>
      {createStars()}
    </>
  );
};

export default StarRating;
