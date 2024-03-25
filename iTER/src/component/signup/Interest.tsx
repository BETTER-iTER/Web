import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { styled } from '../../../stitches.config';
import { getCategory } from '../../apis/Common';
import { CategoryProps } from '../../types/Review';
import Category from '../common/Category';
import ErrorPage from '../common/Error';
import LoadingPage from '../common/Loading';

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

  onDisabled(selected.length === 0);
  onChange(selected.join(', '));

  const { data, isLoading, isError } = useQuery<CategoryProps[], Error>(['categort'], getCategory);
  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage type={2} />;

  return (
    <Container>
      {data?.map((item, index) => {
        return (
          <Category
            key={index}
            name={item.name}
            onClick={() => handleSelect(item.name)}
            isSelected={selected.includes(item.name)}
            imageUrl={item.imageUrl}
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
