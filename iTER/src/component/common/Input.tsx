import React, { useState } from 'react';
import { styled } from '../../../stitches.config';
import Error from '../../assets/icon/Error.svg?react';

interface ButtonWithInputProps {
  labelName: string;
  btnName?: string;
  placeholder: string;
  onClick?: () => void;
  onValidate: (value: string) => string | undefined;
  type: 'text' | 'password'; // type prop 추가
}

const ButtonWithInput: React.FC<ButtonWithInputProps> = ({
  labelName,
  btnName,
  placeholder,
  type,
  onClick,
  onValidate,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string | undefined>('');

  const handleInputValueChange = (value: string) => {
    setInputValue(value);
    const validationError = onValidate(value);
    setError(validationError);
  };

  const isInputValid = !error;

  return (
    <div>
      <Label>{labelName}</Label>
      <Body
        style={{
          border: isInputValid ? '1px solid #D8DBE2' : '1px solid #F34F45',
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
                backgroundColor: isInputValid ? '#4C4E55' : '#c1c4cc',
                pointerEvents: isInputValid ? 'auto' : 'none',
              }}
              onClick={isInputValid ? onClick : undefined}
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
            height: '100%',
          }}
        >
          <Error />
          <span style={{ marginLeft: '10px', marginBottom: '10px' }}>
            <ErrorMessage>{error}</ErrorMessage>
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
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        style={{
          border: 'none',
          height: '50px',
          marginLeft: '10px',
          backgroundColor: 'White',
          outline: 'none',
          color: 'black',
          fontWeight: '400',
          fontSize: '14px',
          width: '200px',
        }}
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
  color: 'black',
});

const Button = styled('button', {
  color: '$White',
  bodyText: 2,
  height: '30px',
  borderRadius: '5px',
  margin: '10px 0',
  border: 'none',
  fontSize: '14px',
  fontWeight: '400',
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
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '22px',
  color: 'black',
  marginBottom: '10px',
});

const ErrorMessage = styled('div', {
  color: 'red',
  fontSize: '13px',
  lineHeight: '18.2px',
  fontWeight: '400',
  marginTop: '10px',
});

export default ButtonWithInput;
