import { FC, ReactNode, MouseEvent } from 'react';
import { ButtonText, Caption2 } from '../Font';
import { styled } from '../../../stitches.config';
import Write from '../../assets/icon/Write.svg?react';

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  disabled?: boolean;
}
const ButtonBody = styled('button', {
  width: '340px',
  height: '45px',
  borderRadius: '10px',
  backgroundColor: '$Brand',
  border: 'none',
  color: '$White',
  variants: {
    disabled: {
      true: {
        backgroundColor: '$Gray20',
        cursor: 'not-allowed',
      },
      false: {},
    },
  },
});

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  disabled?: boolean;
}

// 일반 버튼
const Button: FC<ButtonProps> = ({ onClick, children, disabled }) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <>
      <ButtonBody onClick={handleClick} disabled={disabled}>
        <ButtonText>{children}</ButtonText>
      </ButtonBody>
    </>
  );
};

export default Button;

interface ButtonWriteProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

// 글쓰기 버튼
export const ButtonWrite: FC<ButtonWriteProps> = ({ onClick, children }) => {
  return (
    <>
      <ButtonWriteBody onClick={onClick}>
        <ButtonWriteText>
          <Write width={22} height={22} fill={'#fff'} />
          {children}
        </ButtonWriteText>
      </ButtonWriteBody>
    </>
  );
};

const ButtonWriteBody = styled('button', {
  width: '340px',
  height: '45px',
  borderRadius: '22.5px',
  backgroundColor: '$Brand',
  border: 'none',
});

export const ButtonWriteText = styled('div', {
  fontSize: '14px',
  fontWeight: '600',
  color: '$White',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8.5px',
});

// 빈 버튼
export const ButtonEmpty: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <>
      <ButtonEmptyBody onClick={onClick}>
        <Caption2>{children}</Caption2>
      </ButtonEmptyBody>
    </>
  );
};

const ButtonEmptyBody = styled('button', {
  width: '154px',
  height: '30px',
  borderRadius: '20px',
  border: '1px solid $Gray10',
  backgroundColor: 'transparent',
  color: '$Gray30',
});
