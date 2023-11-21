import { styled } from '../../../stitches.config';
import InputComponent from '../../component/common/Input';
import Button from '../../component/common/Button';
import Top from '../../component/layout/Top';
import { Headline3 } from '../../component/Font';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../../component/signup/FindPasswordTimer';
import axios from 'axios';
import Modal from '../../component/common/Modal';

const FindPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [authNum, setAuthNum] = useState<string>('');
  const [checkAuth, setCheckAuth] = useState<boolean>(false);
  const [emailWarning, setEmailWarning] = useState<string>('');
  const [authWarning, setAuthWarning] = useState<string>('');

  const [timer, setTimer] = useState<boolean>(false); // 안증확인시 타이머 true->시간종료후 false
  const localhost = 'https://dev.betteritem.store';
  
  // 이메일 유효성
  const validateEmail = (value: string) => {
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim());
    return isEmailValid;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const handleModalClose = () => {
    setIsModalOpen(false);
  };


  const handleEmailButton = () => {
    console.log('Email click?');
    if (validateEmail(email)) {
      setEmailWarning('');

      const requestBody = {
        "email": email,
      };
      axios.post(`${localhost}/auth/password/emails`, requestBody)
      .then((response) => {
        console.log(response);
        if(response.data.code == 'SUCCESS_200') {
          setTimer(true);
          setModalMessage('인증번호가 발송되었습니다');
          setIsModalOpen(true);
        }
        
      })
      .catch((error) => {
        console.log(error.response.data.code);
        if (error.response.data.code == 'USER_NOT_FOUND_400') {
          console.log('일치하는 회원정보 없음');
          setModalMessage('가입하지않은 이메일 입니다');
          setIsModalOpen(true);
        }
        else if (error.response.data.code == 'AUTH_CODE_ALREADY_EXIST_401') {
          console.log('이미 인증 코드가 존재');
          setModalMessage('이미 인증 코드가 존재합니다');
          setIsModalOpen(true);
        }
        else if (error.response.data.code == 'AUTH_SHOULD_BE_KAKAO_401') {
          console.log('카카오로 로그인한 회원');
          setModalMessage('카카오로 로그인한 계정입니다');
          setIsModalOpen(true);
        }
      }) 
      
    } 
    else {
      setEmailWarning('올바른 이메일 주소를 입력해주세요');
    }
  };

  const handleAuthButton = () => {
    console.log(authNum, 'Auth click');
    const requestBody = {
      "email": email,
      "code": authNum,
    };
    axios.post(`${localhost}/auth/password/emails/verification`, requestBody)
    .then((response) => {
      console.log(response);
      setCheckAuth(true);
      setModalMessage('인증번호가 확인되었습니다.');
    })
    .catch((error) => {
      console.log(error);
      setModalMessage('인증번호가 일치하지않습니다.');
    })
  };

  const handleNext = () => {
    console.log("다음 버튼");
    navigate('/password/reset');
  }

  return (
    <>
      <Top title="비밀번호 찾기" />

      <Title>
        <Headline3>가입한 이메일을 인증해주세요</Headline3>
      </Title>

      <Body>
        <InputComponent
          placeholder="이메일을 입력해주세요"
          type="text"
          labelName="이메일"
          btnName="인증번호 전송"
          onClick={() => handleEmailButton()}
          onChange={setEmail}
          disabled={email.length == 0}
          error={emailWarning}
        />

        <div style={{ marginTop: 20 }} />
        <Timerlay>
        {timer && (
          <TimerBox>
            <Timer min={3} onChange={() => setTimer(true)} />
          </TimerBox>
        )}
        </Timerlay>
        <InputComponent
          placeholder="인증번호를 6자리를 입력해주세요"
          type="text"
          labelName="인증번호"
          btnName="확인"
          onClick={() => handleAuthButton()}
          onChange={setAuthNum}
          disabled={authNum.length != 6}
          error={authWarning}
        />

        <ButtonBody>
          <Button
            disabled={!checkAuth}
            onClick={handleNext}
            children="다음"
          />
        </ButtonBody>
        {isModalOpen && (
        <Modal
          text={modalMessage}
          btn="확인"
          onClick={handleModalClose}
        />
      )}
      </Body>
    </>
  );
};

export default FindPassword;

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

const TimerBox = styled("div", {
    color: "$Gray50",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "22px", 
    letterSpacing: "-0.5px",
    marginBottom: "-30px",
    
});

const Timerlay = styled("div", {
  display: "flex",
  marginLeft: "300px",
})