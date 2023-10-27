import { styled } from '../../../stitches.config';
import { CategoryProps } from '../../constants/Category';
import Phone from '../../assets/icon/category/Phone.svg?react';
import Laptop from '../../assets/icon/category/Laptop.svg?react';
import PC from '../../assets/icon/category/PC.svg?react';
import Watch from '../../assets/icon/category/Watch.svg?react';
import Tablet from '../../assets/icon/category/Tablet.svg?react';
import Mouse from '../../assets/icon/category/Mouse.svg?react';
import Keyboard from '../../assets/icon/category/Keyboard.svg?react';
import Headphone from '../../assets/icon/category/Headphone.svg?react';
import Speaker from '../../assets/icon/category/Speaker.svg?react';
import Charger from '../../assets/icon/category/Charger.svg?react';
import Accessory from '../../assets/icon/category/Accessory.svg?react';
import Etc from '../../assets/icon/category/Etc.svg?react';

interface CategoryItem extends CategoryProps {
  onClick: () => void;
  isSelected: boolean;
  gap?: number;
}

type IconType = {
  [key: string]: React.ReactNode;
};

const iconMapping: IconType = {
  휴대폰: <Phone />,
  노트북: <Laptop />,
  PC: <PC />,
  스마트워치: <Watch />,
  태블릿: <Tablet />,
  마우스: <Mouse />,
  키보드: <Keyboard />,
  헤드폰: <Headphone />,
  스피커: <Speaker />,
  보조배터리: <Charger />,
  악세사리: <Accessory />,
  기타: <Etc />,
};

const Category = ({ name, onClick, isSelected, gap }: CategoryItem) => {
  const selectedIcon = iconMapping[name];
  return (
    <ItemBox onClick={onClick} style={{ gap: gap }} gap={gap}>
      <Image isSelected={isSelected}>{selectedIcon}</Image>
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
      false: {
        backgroundColor: '$White',
      },
    },
  },
});

const Name = styled('div', {
  color: '$TitleBlack',
  bodyText: 2,
  height: '20px',
});
