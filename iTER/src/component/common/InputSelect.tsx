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
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
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
                setSelected(item);
              }}
              last={index === list.length - 1}
              first={index === 0}
              selected={selected === item}
            >
              {item}
            </ListItem>
          ))}
        </List>
      )}
    </div>
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

  color: '$Gray50',
  bodyText: 2,
});

const Label = styled('div', {
  color: 'black',
  marginBottom: '10px',
  width: '340px',
});

const List = styled('div', {
  width: '338px',
  maxHeight: '185px',
  overflow: 'scroll',
  // border: '1px solid $Gray10',
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
  variants: {
    selected: {
      true: {
        border: '1px solid $Brand',
        color: '$Brand',
      },
      false: {
        border: '1px solid $Gray10',
        color: '8C959F',
        borderBottom: 'none',
      },
    },
    first: {
      true: {
        borderRadius: '6px 6px 0 0',
      },
    },
    last: {
      true: {
        border: '1px solid $Gray10',
        borderRadius: '0 0 6px 6px',
      },
      false: {},
    },
  },
});

export default InputSelect;
