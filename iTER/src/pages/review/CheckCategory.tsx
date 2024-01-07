import React, { useState } from 'react';
import { ButtonText } from '../../component/Font';
import Category from '../../component/common/Category';
import { styled } from '../../../stitches.config';
import { useQuery } from '@tanstack/react-query';
import { CategoryProps } from '../../types/Review';
import { getCategory } from '../../apis/Common';
import LoadingPage from '../../component/common/Loading';
import ErrorPage from '../../component/common/Error';

interface CheckCategoryProps {
  onDisabled: (value: boolean) => void;
  onCategorySelect: (name: string) => void;
}

const CheckCategory: React.FC<CheckCategoryProps> = ({ onDisabled, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<{ name: string | null }>({
    name: null,
  });

  const { data, isLoading, isError } = useQuery<CategoryProps[], Error>(['category'], getCategory);
  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage type={2} />;

  const handleCategoryClick = (name: string, index: number) => {
    setSelectedCategory({ name });
    onDisabled(true);
    onCategorySelect(name);
    console.log(name);
    console.log(index);
    localStorage.setItem('selectCategory', name);
  };

  return (
    <>
      <InfoMessage>
        <ButtonText>카테고리를 선택해주세요</ButtonText>
      </InfoMessage>
      <CategoryBox>
        {data?.map((category, index) => (
          <Category
            key={index}
            name={category.name}
            onClick={() => handleCategoryClick(category.name, index)}
            isSelected={selectedCategory.name === category.name}
            gap={4}
          />
        ))}
      </CategoryBox>
    </>
  );
};

export default CheckCategory;

const CategoryBox = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  padding: '25px 0 60px 27px',
  marginTop: '30px',
});

const InfoMessage = styled('div', {
  textAlign: 'center',
  color: '$Brand',
  marginTop: '104px',
});
