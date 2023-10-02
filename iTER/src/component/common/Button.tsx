import { FC, ReactNode, MouseEvent } from 'react';
import { ButtonText } from '../Font';
import { styled } from '../../../stitches.config';

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  disabled?: boolean;
}
const ButtonBody = styled("button", {
    width: "340px",
    height: "45px",
    borderRadius: "7px",
    backgroundColor: "$Brand",
    border: "none",
    color: "$White",
    variants: {
        disabled: {
          true: {
            backgroundColor: "$Gray20", // 비활성화에는 그레이20으로
            cursor: "not-allowed", // 비활성화에는 커서 못둠
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

const Button: FC<ButtonProps> = ({ onClick, children, disabled, }) => {
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
