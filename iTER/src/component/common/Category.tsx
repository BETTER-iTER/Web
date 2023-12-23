import { styled } from '../../../stitches.config';

interface CategoryItem {
  onClick?: () => void;
  onChange?: (value: string) => void;
  onClose: () => void;
  isSelected?: boolean;
  isSelectedBorer?: boolean;
  gap?: number;
  name: string;
  imageUrl?: string;
}

// type IconType = {
//   [key: string]: JSX.Element;
// };

// const iconMapping: IconType = {
//   휴대폰: <img src={`../../src/assets/png/Phone.png`} width={69} height={43} />,
//   노트북: <img src={`../../src/assets/png/Laptop.png`} width={54} height={53} />,
//   PC: <img src={`../../src/assets/png/PC.png`} width={47} height={48} />,
//   스마트워치: <img src={`../../src/assets/png/Watch.png`} width={45} height={49} />,
//   태블릿: <img src={`../../src/assets/png/Tablet.png`} width={60} height={58} />,
//   마우스: <img src={`../../src/assets/png/Mouse.png`} width={59} height={46} />,
//   키보드: <img src={`../../src/assets/png/Keyboard.png`} width={61} height={40} />,
//   헤드폰: <img src={`../../src/assets/png/Headphone.png`} width={50} height={54} />,
//   스피커: <img src={`../../src/assets/png/Speaker.png`} width={50} height={43} />,
//   보조배터리: <img src={`../../src/assets/png/Battery.png`} width={61} height={38} />,
//   악세서리: <img src={`../../src/assets/png/Accessory.png`} width={42} height={47} />,
//   기타: <img src={`../../src/assets/png/Etc.png`} width={27} height={5} />,
// };

const Category = ({
  imageUrl,
  name,
  isSelected,
  isSelectedBorer,
  gap,
  onChange,
  onClose,
}: CategoryItem) => {
  // const Icon = iconMapping[name];

  const handleClicked = () => {
    if (onChange) {
      onChange(name);
    }
    console.log(name);
    onClose();
  };

  return (
    <ItemBox style={{ gap: gap }} gap={gap} onClick={() => handleClicked()}>
      <Image isSelected={isSelected} isSelectedBorder={isSelectedBorer}>
        <img src={imageUrl} alt={imageUrl} />
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
