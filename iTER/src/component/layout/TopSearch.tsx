import { styled } from '../../../stitches.config';
import Back from '../../assets/icon/Back.svg?react';
import XbtnCircle from '../../assets/icon/XbtnCircle.svg?react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TopSearch = ({
  back,
  onHandle,
  onChange,
  searchText,
}: {
  back?: () => void;
  onHandle?: (text: string) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchText?: string;
}) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>(searchText || '');

  useEffect(() => {
    setSearchValue(searchText || '');
  }, [searchText]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onHandle && onHandle(searchValue);
      setSearchValue('');
    }
  };

  return (
    <>
      <Container>
        <BackBox onClick={back ? back : () => navigate(-1)}>
          <Back />
        </BackBox>
        <InputBox>
          <Input
            placeholder="검색어를 입력해 주세요"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
              onChange && onChange(event);
            }}
            onKeyPress={handleKeyPress}
          />
          {searchValue && (
            <Xbox onClick={() => setSearchValue('')}>
              <XbtnCircle />
            </Xbox>
          )}
        </InputBox>
      </Container>
    </>
  );
};

export default TopSearch;

const Container = styled('div', {
  width: '350px',
  height: '60px',
  backgroundColor: '$White',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: 'solid 1px #EAEEF2',
  color: '$TitleBlack',
  padding: '0 20px',
  zIndex: 2,
});

const BackBox = styled('div', {
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 'auto',
  cursor: 'pointer',
});

const InputBox = styled('div', {
  border: '1px solid $Gray10',
  borderRadius: '5px',
  width: '298px',
  height: '18px',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Input = styled('input', {
  border: 'none',
  width: '85%',
  height: '100%',
  bodyText: 2,
  '&:focus': {
    outline: 'none',
  },
  '&::placeholder': {
    color: '$Gray10',
  },
});

const Xbox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});
