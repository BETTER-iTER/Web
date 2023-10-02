import React from 'react';
import { styled } from '../../../stitches.config';

interface LoginInputProps {
  labelName: string;
  placeholder: string;
  type: 'text' | 'password';
  value: string; 
  onChange: (value: string) => void;
  onValidate: (value: string) => string | undefined;
}

const LoginInput: React.FC<LoginInputProps> = ({
  labelName,
  placeholder,
  type,
  value,
  onChange,
}) => {


  const handleInputValueChange = (value: string) => {
    onChange(value); 
  };


  return (
    <div>
      <Label>{labelName}</Label>
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
      <input
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)} 
        style={{
          border: 'none',
          height: '22px',
          marginLeft: '10px',
          backgroundColor: 'White',
          outline: 'none',
          color: 'black',
          fontWeight: '400',
          fontSize: '14px',
          width: '100%',
        }}
      />
    </>
  );
};



const Body = styled('div', {
  border: "1px solid $Gray10",
  borderRadius: '7px',
  width: '340px',
  height: '50px',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '$White',
  color: 'black',
  
});



const InBody = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: '10px',
  height: '100%',  
});

const Label = styled('div', {
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '22px',
  color: 'black',
  marginBottom: '10px',
});


export default LoginInput;
