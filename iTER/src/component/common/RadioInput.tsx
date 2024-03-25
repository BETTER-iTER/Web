import React, { useState } from 'react';
import { LabelText, RadioText } from '../Font';
import { styled } from '../../../stitches.config';
import { useData } from '../../context/DataContext';

interface RadioInputProps {
  options: string[];
  label?: string;
  onOptionChange?: (selectedValue: number | null) => void;
  initial?: string | undefined;
  onChange?: (value: string) => void;
}

export const RadioInput: React.FC<RadioInputProps> = ({ options, label, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { updateFormData } = useData();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    const selectedOptionIndex = options.indexOf(event.target.value);
    const newData = { storeName: selectedOptionIndex };
    console.log('storeName', selectedOptionIndex, selectedOption, event.target.value);

    updateFormData(newData);
    onChange && onChange(event.target.value);
    console.log(onChange);
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

export const RadioInputRe: React.FC<RadioInputProps> = ({
  options,
  label,
  onOptionChange,
  initial,
}) => {
  let ininum: string = '';

  if (initial === '1') {
    ininum = '공식홈페이지';
  } else if (initial === '2') {
    ininum = '쿠팡';
  } else if (initial === '3') {
    ininum = '학생복지스토어';
  } else {
    ininum = '기타';
  }
  const [selectedOption, setSelectedOption] = useState<string | null>(ininum);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    const selectedOptionIndex = options.indexOf(event.target.value);
    // const newData = { storeName: selectedOptionIndex };
    // updateFormData(newData);
    onOptionChange(selectedOptionIndex);

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
