import React, { useState } from 'react';
import { LabelText, RadioText } from '../Font';
import { styled } from '../../../stitches.config';

interface RadioInputProps {
  options: string[];
  label: string;
}

const RadioInput: React.FC<RadioInputProps> = ({ options, label }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <LabelText>{label}</LabelText>
      
      {options.map((option, index) => (
        <LabelLay>
            <label key={index}>
            <input
                type="radio"
                name="radioOptions"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
            />
            <RadioLay>
                <RadioText>{option}</RadioText>
            </RadioLay>
            </label>
        </LabelLay>

      ))}
    </div>
  );
      };
  

export default RadioInput;

const RadioLay = styled("div", {
    marginLeft: "30px",
    marginTop: "-22px",
})

const LabelLay = styled("div", {
    marginTop: "10px",
})