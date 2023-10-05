import React, { useState } from 'react';
import { styled } from '../../../stitches.config';
import Error from '../../assets/icon/Error.svg?react';
import { Caption1, Caption2, LabelText } from '../Font';

interface ButtonWithInputProps {
  labelName: string;
  btnName?: string;
  placeholder: string;
  onClick?: () => void;
  type: 'text' | 'password'; // type prop 추가
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  notice?: string;
}

const ButtonWithInput: React.FC<ButtonWithInputProps> = ({
  labelName,
  btnName,
  placeholder,
  type,
  onClick,
  onChange,
  error,
  disabled,
  notice,
}) => {
  const handleInputValueChange = (value: string) => {
    onChange && onChange(value);
  };

  return (
    <div>
      <Label>
        <LabelText>{labelName}</LabelText>
      </Label>
      {notice && (
        <Notice>
          <Caption2>{notice}</Caption2>
        </Notice>
      )}
      <Body
        style={{
          border: !error ? '1px solid #D8DBE2' : '1px solid #F34F45',
        }}
      >
        <InBody>
          <InputComponent
            placeholder={placeholder}
            onChange={handleInputValueChange}
            type={type} // 입력 필드 타입 설정
          />
          {btnName && ( // btnName이 빈 문자열이 아닐 때만 버튼을 렌더링
            <Button
              style={{
                backgroundColor: !disabled ? '#4C4E55' : '#c1c4cc',
                pointerEvents: !disabled ? 'auto' : 'none',
              }}
              onClick={!disabled ? onClick : undefined}
            >
              {btnName}
            </Button>
          )}
        </InBody>
      </Body>
      {error && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#F34F45',
          }}
        >
          <Error />
          <span style={{ marginLeft: '4px', marginBottom: '8px' }}>
            <ErrorMessage>
              <Caption1>{error}</Caption1>
            </ErrorMessage>
          </span>
        </div>
      )}
    </div>
  );
};

const InputComponent: React.FC<{
  placeholder: string;
  type: 'text' | 'password';
  onChange: (value: string) => void;
}> = ({ placeholder, onChange, type }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
    </>
  );
};

const Body = styled('div', {
  padding: '2px 5px',
  borderRadius: '7px',
  width: '340px',
  height: '50px',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$White',
});

const Input = styled('input', {
  border: 'none',
  height: '50px',
  marginLeft: '10px',
  outline: 'none',
  bodyText: 2,
  width: '200px',
});

const Button = styled('button', {
  color: '$White',
  bodyText: 2,
  height: '30px',
  borderRadius: '5px',
  margin: '10px 0',
  border: 'none',
  padding: '5px 10px',
});

const InBody = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: '10px',
});

const Label = styled('div', {
  lineHeight: '22px',
  color: 'black',
  marginBottom: '10px',
});

const ErrorMessage = styled('div', {
  color: '$ErrorRed',
  marginTop: '10px',
});

const Notice = styled('div', {
  color: '$Gray20',
  marginTop: '-6px',
  marginBottom: '10px',
});

export default ButtonWithInput;
