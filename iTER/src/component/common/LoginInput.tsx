import React from 'react';
import { styled } from '../../../stitches.config';

interface LoginInputProps {
  placeholder: string;
  type: 'text' | 'password';
  value: string;
  onChange: (value: string) => void;
}

const LoginInput: React.FC<LoginInputProps> = ({ placeholder, type, value, onChange }) => {
  const handleInputValueChange = (value: string) => {
    onChange(value);
  };

  return (
    <div>
      <Body>
        <InBody>
          <InputComponent
            placeholder={placeholder}
            onChange={handleInputValueChange}
            type={type}
            value={value}
          />
        </InBody>
      </Body>
    </div>
  );
};

const InputComponent: React.FC<{
  placeholder: string;
  type: 'text' | 'password';
  value: string;
  onChange: (value: string) => void;
}> = ({ placeholder, onChange, type, value }) => {
  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </>
  );
};

const Body = styled('div', {
  padding: '2px 5px',
  border: '1px solid $Gray10',
  borderRadius: '7px',
  width: '340px',
  height: '50px',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const Input = styled('input', {
  border: 'none',
  height: '22px',
  marginLeft: '10px',
  outline: 'none',
  color: '$Gray50',
  width: '100%',
  bodyText: 2,
});

const InBody = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: '10px',
  height: '100%',
});

export default LoginInput;
