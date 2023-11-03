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
          src={i <= selectedStars ? Starfill : Star} // 이미지 파일의 경로를 지정하세요
          alt={`Star ${i}`}
          onClick={() => onStarClick(i)}
          style={{
            width: "30px", // 이미지의 너비를 조절하세요
            height: "30px", // 이미지의 높이를 조절하세요
            cursor: "pointer", // 커서를 포인터로 변경하여 클릭 가능하게 만듭니다
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
