import { Headline3 } from '../../component/Font';
import Top from '../../component/layout/Top';
import { styled } from '../../../stitches.config';
import Category from '../../component/common/Category';
import CategoryList from '../../constants/Category';
import Button from '../../component/common/Button';
import { useState } from 'react';

const Interest = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const handleSelect = (id: number) => {
    const selectedCount = selected.length;

    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else if (selectedCount < 3) {
      setSelected([...selected, id]);
    }
  };

  return (
    <div>
      <Top title="관심 카테고리 설정" />
      <Content>
        <Headline3>1~3개의 카테고리를 선택해 주세요</Headline3>
        <CategoryBox>
          {CategoryList.map((item) => (
            <Category
              onClick={() => handleSelect(item.id)}
              isSelectedBorer={selected.includes(item.id)}
              name={item.name}
              gap={8.98}
              id={item.id}
            />
          ))}
        </CategoryBox>
        <Bottom>
          <Button disabled={selected.length <= 0}>저장하기</Button>
        </Bottom>
      </Content>
    </div>
  );
};

export default Interest;

const Content = styled('div', {
  margin: '101px 0 0 25px',
  width: '340px',
  display: 'flex',
  flexDirection: 'column',
});

const CategoryBox = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '16px',
  marginTop: '40px',
});

const Bottom = styled('div', {
  position: 'absolute',
  bottom: '20px',
});
