import React, { useState } from "react";
import { ButtonText } from "../../component/Font";
import CategoryList from "../../constants/Category";
import Category from "../../component/common/Category";
import { styled } from "../../../stitches.config";

interface CheckCategoryProps {
  onDisabled: (value: boolean) => void;
  onCategorySelect: (id: number, name: string) => void;
}

const CheckCategory: React.FC<CheckCategoryProps> = ({ onDisabled, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<{ id: number | null; name: string | null }>({
    id: null,
    name: null,
  });

  const handleCategoryClick = (id: number, name: string) => {
    setSelectedCategory({ id, name });
    onDisabled(true); 
    onCategorySelect(id, name);
    console.log(id, name);
  };

  return (
    <>
      <InfoMessage>
        <ButtonText>카테고리를 선택해주세요</ButtonText>
      </InfoMessage>
      <CategoryBox>
        {CategoryList.map((category) => (
          <Category
            key={category.id}
            name={category.name}
            onClick={() => handleCategoryClick(category.id, category.name)}
            isSelected={selectedCategory.id === category.id} 
            gap={4}
            id={category.id}
          />
        ))}
      </CategoryBox>

      
    </>
  );
};

export default CheckCategory;

const CategoryBox = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  padding: "25px 0 60px 27px",
  marginTop: "30px",
});

const InfoMessage = styled("div", {
  textAlign: "center",
  color: "$Brand",
  marginTop: "104px",
});
