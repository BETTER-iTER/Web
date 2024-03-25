import { styled } from '../../../stitches.config';

interface CategoryItem {
  onClick?: () => void;
  onChange?: (value: string) => void;
  onClose?: () => void;
  isSelected?: boolean;
  isSelectedBorer?: boolean;
  gap?: number;
  name: string;
  imageUrl?: string;
}

const Category = ({
  imageUrl,
  name,
  isSelected,
  isSelectedBorer,
  gap,
  onChange,
  onClick,
  onClose,
}: CategoryItem) => {
  // const Icon = iconMapping[name];

  const handleClicked = () => {
    if (onChange) {
      onChange(name);
    }
    onClick && onClick();
    onClose && onClose();
  };

  return (
    <ItemBox
      style={{ gap: gap }}
      gap={gap === 4 || gap === 8.98 ? gap : undefined}
      onClick={() => handleClicked()}
    >
      <Image isSelected={isSelected} isSelectedBorder={isSelectedBorer}>
        <img
          src={imageUrl}
          alt={imageUrl}
          width={name === '기타' ? 27 : 50}
          height={name === '기타' ? 5 : name === '키보드' ? 38 : 50}
        />
      </Image>
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
  boxShadow: '2px 4px 4px 2px rgba(158, 158, 158, 0.25)',
  variants: {
    isSelected: {
      true: {
        backgroundColor: 'rgba(135, 135, 244, 0.30)',
      },
    },
    isSelectedBorder: {
      true: {
        border: '1px solid $Brand',
        width: '68px',
        height: '68px',
      },
    },
  },
});

const Name = styled('div', {
  color: '$TitleBlack',
  bodyText: 2,
  height: '20px',
});
