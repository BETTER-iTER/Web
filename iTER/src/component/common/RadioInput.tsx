import React, { useState } from 'react';
import { LabelText, RadioText } from '../Font';
import { styled } from '../../../stitches.config';
import { useData } from '../../context/DataContext';

interface RadioInputProps {
  options: string[];
  label: string;
}

export const RadioInput: React.FC<RadioInputProps> = ({ options, label }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { updateFormData } = useData();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    const selectedOptionIndex = options.indexOf(event.target.value);
    const newData = { storeName: selectedOptionIndex };
    updateFormData(newData);
    //localStorage.setItem("radioValue", event.target.value);
  };

  return (
    <div>
      <LabelText>{label}</LabelText>

      {options.map((option, index) => (
        <LabelLay key={index}>
          <label>
            <input
              type="radio"
              name="radioOptions"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              style={{ color: '#AFB8C1', width: '17px', height: '17px', flexShrink: '0' }}
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

export const RadioInputRe: React.FC<RadioInputProps> = ({ options, label }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    const selectedOptionIndex = options.indexOf(event.target.value);
    // const newData = { storeName: selectedOptionIndex };
    // updateFormData(newData);
    localStorage.setItem('radio', selectedOptionIndex);
    //localStorage.setItem("radioValue", event.target.value);
  };

  return (
    <div>
      <LabelText>{label}</LabelText>

      {options.map((option, index) => (
        <LabelLay key={index}>
          <label>
            <input
              type="radio"
              name="radioOptions"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              style={{ color: '#AFB8C1', width: '17px', height: '17px', flexShrink: '0' }}
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

const RadioLay = styled('div', {
  marginLeft: '30px',
  marginTop: '-24px',
});

const LabelLay = styled('div', {
  marginTop: '10px',
});
