import { useState } from 'react';
import { styled } from '../../../stitches.config';
import CategoryList from '../../constants/Category';
import Category from '../common/Category';

interface InterestProps {
  onDisabled: (value: boolean) => void;
  onChange: (value: string) => void;
}
const Interest = ({ onDisabled, onChange }: InterestProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const handleSelect = (name: string) => {
    const selectedCount = selected.length;

    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
    } else if (selectedCount < 3) {
      setSelected([...selected, name]);
    }
  };
  console.log(selected);

  onDisabled(selected.length === 0);
  onChange(selected.join(', '));

  return (
    <Container>
      {CategoryList.map((item) => {
        return (
          <Category
            key={item.id}
            id={item.id}
            name={item.name}
            onClick={() => handleSelect(item.name)}
            isSelected={selected.includes(item.name)}
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
