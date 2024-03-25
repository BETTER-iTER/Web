import React from 'react';

interface LoginInputProps {
  placeholder: string;
  type: 'text' | 'password';
  value: string;
  onChange: (value: string) => void;
}

const LoginInput: React.FC<LoginInputProps> = ({ placeholder, type, value, onChange }) => {
  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          padding: '2px 5px',
          border: '1px solid #CCCCCC',
          borderRadius: '7px',
          width: '340px',
          height: '50px',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: '10px',
            height: '100%',
          }}
        >
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleInputValueChange}
            style={{
              border: 'none',
              height: '22px',
              marginLeft: '10px',
              outline: 'none',
              color: '#888888',
              width: '100%',
              fontSize: '14px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginInput;
