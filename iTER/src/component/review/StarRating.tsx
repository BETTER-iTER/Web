import React, { useState } from "react";
import Star from '../../assets/icon/Star.svg';
import Starfill from '../../assets/icon/Starfill.svg';
import Starhalf from "../../assets/icon/Starhalf.svg";

interface StarRatingProps {
  totalStars: number;
  selectedStars: number;
  onStarClick: (star: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars, selectedStars, onStarClick }) => {
  const createStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      let starImage = Star;
      if (i === selectedStars && selectedStars % 1 !== 0.5) {
        starImage = Starhalf;
      } else if (i <= selectedStars) {
        starImage = Starfill;
      }

      stars.push(
        <img
          key={i}
          src={starImage} 
          alt={`Star ${i}`}
          onClick={() => onStarClick(i === selectedStars ? (selectedStars % 1 === 0.5 ? i - 0.5 : i + 0.5) : i)}
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
