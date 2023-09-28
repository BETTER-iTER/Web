import React, { useState } from 'react';
import { styled } from '../../../stitches.config';

// 인풋 컴포넌트
interface InputProps {
    placeholder: string;
    onChange: (value: string) => void;
  }

const InputComponent: React.FC<InputProps> = ({ placeholder, onChange }) => {
    const [inputValue, setInputValue] = useState<string>('');
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      onChange(newValue);
    };
    

    return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        style={{
          border: "none",
          height: "22px",
          marginLeft: "10px",
          backgroundColor: "White",
          outline: "none", 
          color: "black", 
          fontWeight: "400",
          fontSize: "14px"
        }}
      />

      </>
    );
  };
  

  interface ButtonWithInputProps {
    btnName: string; // 버튼 텍스트를 받을 prop 추가
    placeholder: string;
    onClick: () => void; // 클릭 이벤트 핸들러를 받을 prop 추가
  }
  
  
  const ButtonWithInput: React.FC<ButtonWithInputProps> = ({ btnName, placeholder, onClick }) => {
    const [inputValue, setInputValue] = useState<string>('');
  
    const handleInputValueChange = (value: string) => {
      setInputValue(value);
    };
    const isInputNotEmpty = inputValue.trim() !== ''; // 입력값이 비어 있지 않으면 true
  
    return (
      <Body>
        <InBody>
          <InputComponent
            placeholder={placeholder}
            onChange={handleInputValueChange}
          />
          <Button style={{backgroundColor: isInputNotEmpty ? "#4C4E55" : "#c1c4cc",}} onClick={onClick}>{btnName}</Button> 
        </InBody>
      </Body>
    );
  };


const Body = styled("div", {
    border: "1px solid $Gray10",
    borderRadius: "7px",
    width: "340px",
    height: "50px",
    alignItems: "center",
    display: "flex",
    backgroundColor: "$White",
    color: "black",
  });

const Button = styled("button", {
    
    color: "$White",
    bodyText: 2,
    height: "30px",
    borderRadius: "5px",
    float: "right",
    marginRight: "10px",
    border: "none",
    fontSize: "14px",
    fontWeight: "400",
    
})
const InBody = styled("div", {
    width: "100%",
    
})



export default ButtonWithInput;
