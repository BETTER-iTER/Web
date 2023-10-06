import React, { useState } from 'react';
import { styled } from '../../../stitches.config';
import { LabelText } from '../Font';

interface InputSelectProps {
  labelName: string;
  placeholder: string;
  onChange?: (value: string) => void;
  list: string[];
}

const InputSelect: React.FC<InputSelectProps> = ({ labelName, placeholder, onChange, list }) => {
  const [click, setClick] = useState(false);
  const [value, setValue] = useState('');

  return (
    <>
      <Label>
        <LabelText>{labelName}</LabelText>
      </Label>
      <Body
        onClick={() => {
          setClick(!click);
        }}
      >
        {value || placeholder}
      </Body>
      {click && list && (
        <List>
          {list.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => {
                setValue(item);
                onChange && onChange(item);
              }}
              last={index === list.length - 1}
              first={index === 0}
            >
              {item}
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

const Body = styled('div', {
  padding: '2px 0 2px 12px',
  borderRadius: '7px',
  border: '1px solid $Gray10',
  width: '326px',
  height: '44px',

  alignItems: 'center',
  display: 'flex',
  textAlign: 'left',
  cursor: 'pointer',

  color: '$Gray30',
  bodyText: 2,
});

const Label = styled('div', {
  color: 'black',
  marginBottom: '10px',
});

const List = styled('div', {
  width: '338px',
  border: '1px solid $Gray10',
  borderRadius: '7px',

  bodyText: 2,
  color: '#8C959F',
});

const ListItem = styled('div', {
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$Gray10',
  },
  variants: {
    first: {
      true: {
        borderRadius: '6px 6px 0 0',
      },
    },
    last: {
      true: {
        borderBottom: 'none',
        borderRadius: '0 0 6px 6px',
      },
      false: {
        borderBottom: '1px solid $Gray10',
      },
    },
  },
});

export default InputSelect;
