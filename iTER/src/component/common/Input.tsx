import React, { useState } from 'react';
import { styled } from '../../../stitches.config';
import ErrorIcon from '../../assets/icon/error/ErrorIcon.svg?react';
import { Caption1, Caption2, LabelText } from '../Font';

interface InputProps {
  labelName: string;
  btnName?: string;
  placeholder?: string | undefined;
  onClick?: () => void;
  type: 'text' | 'password'; // type prop 추가
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  notice?: string;
  text?: string | number;
}

const InputComponent: React.FC<InputProps> = ({
  labelName,
  btnName,
  placeholder,
  type,
  onClick,
  onChange,
  error,
  disabled,
  notice,
  text,
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
          <Input
            placeholder={placeholder}
            onChange={handleInputValueChange}
            type={type} // 입력 필드 타입 설정
            text={text}
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
          <ErrorIcon width={14} height={13} fill={'#f34f45'} />
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

export const InputComponentReiview: React.FC<InputProps> = ({
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
  const handleInputValueChange = (text: string) => {
    onChange && onChange(text);
  };

  return (
    <div>
      <Label>
        <LabelName>{labelName}</LabelName>
      </Label>
      {notice && (
        <Notice>
          <Caption2>{notice}</Caption2>
        </Notice>
      )}
      <BodyReview
        style={{
          border: !error ? '1px solid #D8DBE2' : '1px solid #F34F45',
        }}
      >
        <InBody>
          <Input
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
      </BodyReview>
      {error && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#F34F45',
          }}
        >
          <ErrorIcon width={14} height={13} fill={'#f34f45'} />
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

export const Input: React.FC<{
  placeholder: string | undefined;
  type: 'text' | 'password';
  onChange: (value: string) => void;
  text?: string | number;
}> = ({ placeholder, onChange, type, text }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <>
      <InnerInput
        type={type}
        placeholder={placeholder}
        value={text || inputValue}
        onChange={handleInputChange}
      />
    </>
  );
};

export const InputRe: React.FC<{
  placeholder: string | undefined;
  type: 'text' | 'password';
  onChange: (value: string) => void;
  text?: string | number;
  labelName: string;
}> = ({ placeholder, onChange, type, text, labelName }) => {
  const [inputValue, setInputValue] = useState<string | number>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <>
      <Label>
        <LabelName>{labelName}</LabelName>
      </Label>
      <BodyReview
        style={{
          border: '1px solid #D8DBE2',
        }}
      >
        <InBody>
          <InnerInput
            type={type}
            placeholder={placeholder}
            value={text || inputValue}
            onChange={handleInputChange}
          />
        </InBody>
      </BodyReview>
    </>
  );
};

export const InputComment: React.FC<{
  placeholder: string | undefined;
  type: 'text' | 'password';
  onChange: (value: string) => void;
  text?: string | number;
}> = ({ placeholder, onChange, type, text }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
    setInputValue('');
  };

  return (
    <>
      <InnerInput
        type={type}
        placeholder={placeholder}
        value={text || inputValue}
        onChange={handleInputChange}
      />
    </>
  );
};

const Body = styled('div', {
  padding: '0 5px',
  borderRadius: '7px',
  width: '328px',
  height: '48px',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$White',
});

const BodyReview = styled('div', {
  padding: '0 5px',
  borderRadius: '10px',
  width: '328px',
  height: '48px',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$White',
});

const InnerInput = styled('input', {
  border: 'none',
  height: '48px',
  marginLeft: '7px',
  outline: 'none',
  bodyText: 2,
  width: '200px',
  backgroundColor: 'transparent',
  color: '$Gray50',
  '&::placeholder': {
    color: '#8C959F',
  },
});

const Button = styled('button', {
  color: '$White',
  bodyText: 2,
  height: '30px',
  borderRadius: '5px',
  border: 'none',
  marginTop: '10px',
  marginRight: '3px',
});

const InBody = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
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

const LabelName = styled('div', {
  bodyText: 1,
});

export default InputComponent;
