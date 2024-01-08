import React, { useState, ChangeEvent } from 'react';
import { styled } from '../../../stitches.config';
import { Caption4, B2 } from '../Font';
import { useData } from '../../context/DataContext';

interface TextInput {
  limit: number;
  placeholder: string;
  type: string;
}

const TextInput: React.FC<TextInput> = ({ limit, placeholder, type }) => {
  const [text, setText] = useState<string>('');
  const { updateFormData } = useData();
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    if (inputValue.length <= limit && type == 'good') {
      setText(inputValue);
      // localStorage.setItem('goodValue', inputValue);
      const newData = { goodPoint: inputValue };
      updateFormData(newData);
    } else if (inputValue.length <= limit && type == 'bad') {
      setText(inputValue);
      // localStorage.setItem('badValue', inputValue);
      const newData = { badPoint: inputValue };
      updateFormData(newData);
    }
  };

  return (
    <>
      <textarea
        rows={5}
        cols={30}
        value={text}
        onChange={handleTextChange}
        placeholder={placeholder}
        style={{
          width: '340px',
          height: '150px',
          padding: '10px',
          gap: '10px',
          border: '1px solid #EAEEF2',
          borderRadius: '10px',
          resize: 'none',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '140%',
          letterSpacing: '-0.28px',
        }}
      />
      <Length>
        <Caption4>
          ({text.length}/{limit})
        </Caption4>
      </Length>
    </>
  );
};

export default TextInput;

const Length = styled('div', {
  marginTop: '-30px',
  marginLeft: '310px',
});
