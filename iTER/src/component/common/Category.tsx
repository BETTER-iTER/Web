import { styled } from '../../../stitches.config';
import { CategoryProps } from '../../constants/Category';

interface CategoryItem extends CategoryProps {
  onClick: () => void;
  isSelected: boolean;
  gap?: number;
}

const Category = ({ name, onClick, isSelected, gap }: CategoryItem) => {
  return (
    <ItemBox onClick={onClick} style={{ gap: gap }} gap={gap}>
      <Image isSelected={isSelected}></Image>
      <Name>{name}</Name>
    </ItemBox>
  );
};

export default Category;

const ItemBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  width: 'fit-content',
  variants: {
    gap: {
      4: {
        marginBottom: '16px',
      },
      8.98: {
        marginBottom: '0',
      },
    },
  },
});

const Image = styled('div', {
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    isSelected: {
      true: {
        boxShadow: '2px 4px 4px 2px rgba(135, 135, 244, 0.5)',
      },
      false: {
        boxShadow: '2px 4px 4px 2px rgba(158, 158, 158, 0.25)',
      },
    },
  },
});

const Name = styled('div', {
  color: '$TitleBlack',
  bodyText: 2,
  height: '20px',
});
