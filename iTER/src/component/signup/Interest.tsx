import { useState } from 'react';
import { styled } from '../../../stitches.config';
import CategoryList from '../../constants/Category';
import Category from '../common/Category';

interface InterestProps {
  onDisabled: (value: boolean) => void;
}
const Interest = ({ onDisabled }: InterestProps) => {
  const [selected, setSelected] = useState<number[]>([]);
  const handleSelect = (id: number) => {
    const selectedCount = selected.length;

    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else if (selectedCount < 3) {
      setSelected([...selected, id]);
    }
  };

  onDisabled(selected.length === 0);

  return (
    <Container>
      {CategoryList.map((item) => {
        return (
          <Category
            key={item.id}
            id={item.id}
            name={item.name}
            onClick={() => handleSelect(item.id)}
            isSelected={selected.includes(item.id)}
            gap={4}
          />
        );
      })}
    </Container>
  );
};

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  backgroundColor: '$White',
});

export default Interest;
