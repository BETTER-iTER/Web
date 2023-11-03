import React, { useState } from "react";
import Star from '../../assets/icon/Star.svg?react';

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
        <Star
          key={i}
          alt={`Star ${i}`}
          onClick={() => onStarClick(i)}
          style={{
            width: "30px", // 이미지의 너비를 조절하세요
            height: "30px", // 이미지의 높이를 조절하세요
            cursor: "pointer", // 커서를 포인터로 변경하여 클릭 가능하게 만듭니다
            filter: i <= selectedStars ? "black" : "black" // 선택된 별을 색상으로, 나머지를 회색으로 표시
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div>
      <p>별점을 선택하세요:</p>
      {createStars()}
    </div>
  );
};

export default StarRating;
