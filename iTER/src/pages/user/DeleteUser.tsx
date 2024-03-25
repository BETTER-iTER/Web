import { useState } from 'react';
import { B2, Headline3, Caption2 } from '../../component/Font';
import Top from '../../component/layout/Top';
import { styled } from '../../../stitches.config';
import CheckCircle from '../../assets/icon/CheckCircle.svg?react';
import Button from '../../component/common/Button';
import { ModalSelect } from '../../component/common/Modal';
import { deleteUser } from '../../apis/login';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

type SelectedOptions = {
  [key: string]: boolean;
};

const DeleteUser = () => {
  const navigate = useNavigate();
  // const [check, setCheck] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
  const [reason, setReason] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mutation = useMutation(deleteUser, {
    onSuccess: () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      navigate('/onboarding');
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  const handleOptionClick = (optionKey: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedSelectedOptions = { ...prevSelectedOptions };
      updatedSelectedOptions[optionKey] = !updatedSelectedOptions[optionKey];

      // 선택된 값들을 문자열로 나타내기
      const selectedNumbers = Object.keys(updatedSelectedOptions)
        .filter((key) => updatedSelectedOptions[key])
        .map(Number);
      const selectedNumbersString = selectedNumbers.join(',');

      // 여기서 선택된 값 출력 또는 다른 작업 수행
      console.log(selectedNumbersString);
      setReason(selectedNumbersString);
      return updatedSelectedOptions;
    });
  };

  const isButtonEnabled = Object.values(selectedOptions).filter((value) => value).length >= 1;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDeleteUser = (reason: string) => {
    mutation.mutateAsync(reason);
  };

  const closeModalNo = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Cover>
        <Top title="회원탈퇴" />
        <Text>
          <Headline3>ITer를 떠나신다니 너무 아쉬워요</Headline3>
          <Mini>
            <B2>
              ITer에서 작성한 모든 글과 활동 내역이 사라져요. <br />
              삭제된 정보는 다시 복구할 수 없어요.
            </B2>
          </Mini>
          <Mini2>
            <B2>
              탈퇴하려는 이유를 모두 선택해주세요. <br />
              제품 개선에 활용하겠습니다.
            </B2>
          </Mini2>

          <Options>
            <Terms onClick={() => handleOptionClick('1')} check={selectedOptions['1']}>
              <CheckCircle fill={selectedOptions['1'] ? '#4C4E554' : '#C1C4CC'} />
              <Tlay>
                <Caption2>탈퇴하고 다시 가입할래요</Caption2>
              </Tlay>
            </Terms>
            <div style={{ marginTop: '10px' }} />
            <Terms onClick={() => handleOptionClick('2')} check={selectedOptions['2']}>
              <CheckCircle fill={selectedOptions['2'] ? '#4C4E554' : '#C1C4CC'} />
              <Tlay>
                <Caption2>제가 찾는 제품이 없어요</Caption2>
              </Tlay>
            </Terms>
            <div style={{ marginTop: '10px' }} />
            <Terms onClick={() => handleOptionClick('3')} check={selectedOptions['3']}>
              <CheckCircle fill={selectedOptions['3'] ? '#4C4E554' : '#C1C4CC'} />
              <Tlay>
                <Caption2>ITer를 자주 사용하지 않아요</Caption2>
              </Tlay>
            </Terms>
            <div style={{ marginTop: '10px' }} />
            <Terms onClick={() => handleOptionClick('4')} check={selectedOptions['4']}>
              <CheckCircle fill={selectedOptions['4'] ? '#4C4E554' : '#C1C4CC'} />
              <Tlay>
                <Caption2>제공받는 혜택이 부족해요</Caption2>
              </Tlay>
            </Terms>
            <div style={{ marginTop: '10px' }} />
            <Terms onClick={() => handleOptionClick('5')} check={selectedOptions['5']}>
              <CheckCircle fill={selectedOptions['5'] ? '#4C4E554' : '#C1C4CC'} />
              <Tlay>
                <Caption2>전문가 등업이 너무 어려워요</Caption2>
              </Tlay>
            </Terms>
            <div style={{ marginTop: '10px' }} />
            <Terms onClick={() => handleOptionClick('6')} check={selectedOptions['6']}>
              <CheckCircle fill={selectedOptions['6'] ? '#4C4E554' : '#C1C4CC'} />
              <Tlay>
                <Caption2>다른 서비스를 이용하고 싶어요</Caption2>
              </Tlay>
            </Terms>
          </Options>

          <ButtonLay>
            <Button children="다음" disabled={!isButtonEnabled} onClick={openModal} />
          </ButtonLay>
        </Text>
      </Cover>
      {isModalOpen && (
        <ModalSelect
          text="탈퇴하시겠습니까?"
          btn="탈퇴하기"
          onClosed={closeModalNo}
          onClick={() => handleDeleteUser(reason)}
        />
      )}
    </>
  );
};

export default DeleteUser;

const Cover = styled('div', {
  width: '390px',
  height: '844px',
});

const Text = styled('div', {
  position: 'relative',
  top: '64px',
  left: '30px',
});

const Mini = styled('div', {
  marginTop: '20px',
});

const Mini2 = styled('div', {
  position: 'relative',
  marginTop: '253px',
});

const Terms = styled('div', {
  alignItems: 'center',
  color: '$Gray50',
  display: 'flex',
  marginBottom: '12px',
  gap: '4px',
  variants: {
    check: {
      true: {
        color: '$Gray50',
      },
      false: {
        color: '$Gray50',
      },
    },
  },
});

const Options = styled('div', {
  marginTop: '19px',
});

const Tlay = styled('div', {
  marginLeft: 'px',
});

const ButtonLay = styled('div', {
  marginTop: '49px',
  marginLeft: '-5px',
});
