import { FC, ReactNode, MouseEvent } from 'react';
import { ButtonText, Caption2 } from '../Font';
import { styled } from '../../../stitches.config';
import Write from '../../assets/icon/nav/Write.svg?react';
import Heart from '../../assets/icon/Heart.svg?react';
import Scrap from '../../assets/icon/Scrap.svg?react';
import ArrowDown from '../../assets/icon/ArrowDown.svg?react';

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  disabled?: boolean;
  type?: string;
  active?: boolean;
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

// 글쓰기 버튼
export const ButtonWrite: FC<ButtonProps> = ({ onClick, children }) => {
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

// 빈 버튼
export const ButtonEmpty: FC<ButtonProps> = ({ onClick, children, type, active }) => {
  return (
    <Caption2>
      <ButtonEmptyBody onClick={onClick} active={active}>
        {type == 'like' ? (
          <Heart fill={active ? '#8787F4' : '#D8DBE2'} width={20} height={20} />
        ) : type == 'scrap' ? (
          <Scrap fill={active ? '#8787F4' : '#D8DBE2'} width={20} height={20} />
        ) : (
          <></>
        )}
        {children}
      </ButtonEmptyBody>
    </Caption2>
  );
};

// 컨트롤 버튼
export const ButtonControl: FC<ButtonProps> = ({ onClick, children, type }) => {
  return (
    <Caption2>
      <ButtonControlBody onClick={onClick}>
        {children} {type == 'toggle' && <ArrowDown />}
      </ButtonControlBody>
    </Caption2>
  );
};

export const ButtonBlack: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <>
      <ButtonBlackBody onClick={onClick}>
        <BittonBlackText>{children}</BittonBlackText>
      </ButtonBlackBody>
    </>
  );
};

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

const ButtonEmptyBody = styled('button', {
  width: '154px',
  height: '30px',
  borderRadius: '20px',
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
  variants: {
    active: {
      true: {
        color: '$Brand',
        border: '1px solid $Brand',
      },
      false: {
        color: '$Gray30',
        border: '1px solid $Gray10',
      },
    },
  },
});

const ButtonControlBody = styled('button', {
  borderRadius: '24px',
  padding: '7px 12px',
  border: '1px solid $Gray10',
  backgroundColor: 'transparent',
  color: '$Grey600',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
});

const ButtonBlackBody = styled('button', {
  borderRadius: '10px',
  backgroundColor: '$TitleBlack',
  border: 'none',
  padding: '10px 30px',
});

const BittonBlackText = styled('div', {
  bodyText: 2,
  color: '$White',
});
