import { styled } from '../../../stitches.config';
import InputComponent from '../../component/common/Input';
import Button from '../../component/common/Button';
import Top from '../../component/layout/Top';
import { Headline3 } from '../../component/Font';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Modal from '../../component/common/Modal';

const ResetPassword = () => {

  //도메인 주소
  const localhost = 'https://dev.betteritem.store';
  const navigate = useNavigate();

  const [password, setPassword] = useState<string>('');
  const [checkPassword, setCheckPassword] = useState<string>('');

  //모달 상태관리 state
  const [isModalOpen, setIsModalOpen] = useState(false);

  //모달 버튼 수행 함수
  const handleModalClose = () => {
    navigate('/login');
  };
  //비밀번호 유효성 검사 수행
  const validatePassword = (value: string) => {
    const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/i.test(
      value.trim()
    );
    return isPasswordValid;
  };

  //비밀번호 변경 api 호출
  const handleNext = () => {

    const requestBody = {
      "email": localStorage.getItem("email"),
      "password": password,
    };
    axios.patch(`${localhost}/auth/password/reset`, requestBody)
    .then((response) => {
      console.log(response);
      setIsModalOpen(true);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      <Top title="비밀번호 재설정" />

      <Title>
        <Headline3>비밀번호를 재설정합니다</Headline3>
      </Title>

      <Body>
        <InputComponent
          placeholder="비밀번호를 입력해주세요"
          type="password"
          labelName="비밀번호"
          onChange={setPassword}
          error={
            validatePassword(password) || password.length == 0
              ? undefined
              : '비밀번호 형식에 맞게 입력해주세요'
          }
          notice="영문/숫자/특수문자 3가지 이상 조합 8~20자"
        />

        <div style={{ marginTop: 20 }} />

        <InputComponent
          placeholder="비밀번호를 다시 입력해주세요"
          type="password"
          labelName="비밀번호 확인"
          onChange={setCheckPassword}
          error={
            checkPassword && checkPassword !== password ? '비밀번호가 일치하지 않습니다' : undefined
          }
        />

        <ButtonBody>
          <Button

          //비밀번호와 재입력한 비밀번호가 같으면 버튼 활성화
            disabled={!(checkPassword === password && validatePassword(checkPassword) && password)}

            onClick={handleNext}
            children="비밀번호 재설정"
          />
        </ButtonBody>
        {isModalOpen && (
        <Modal
          text="비밀번호가 재설정되었습니다"
          btn="로그인 화면으로 이동"
          onClick={handleModalClose}
        />
      )}
      </Body>
    </>
  );
};

export default ResetPassword;

const Title = styled('div', {
  margin: '114px 0 50px 31px',
  width: '100%',
  textAlign: 'left',
  lineHeight: '28px',
});

const Body = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginLeft: '10px',
});

const ButtonBody = styled('div', {
  position: 'absolute',
  bottom: '20px',
});
