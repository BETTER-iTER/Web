import { styled } from '../../../stitches.config';
import InputComponent from '../../component/common/Input';
import Button from '../../component/common/Button';
import Top from '../../component/layout/Top';
import { Headline3 } from '../../component/Font';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../../component/signup/FindPasswordTimer';
import axios from 'axios';

const FindPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [authNum, setAuthNum] = useState<string>('');

  const [emailWarning, setEmailWarning] = useState<string>('');
  const [authWarning, setAuthWarning] = useState<string>('');

  const [timer, setTimer] = useState<boolean>(false); // 안증확인시 타이머 true->시간종료후 false
  const localhost = 'https://dev.betteritem.store';

  // 이메일 유효성
  const validateEmail = (value: string) => {
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim());
    return isEmailValid;
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
        setTimer(true); 
      })
      .catch((error) => {
        console.log(error);
        console.log("에러남");
      }) // 이메일이 유효한 경우 타이머 시작
      // 여기에서 인증 이메일을 보내는 로직 추가 가능
    } 
    else {
      setEmailWarning('올바른 이메일 주소를 입력해주세요');
    }
  };

  const handleAuthButton = () => {
    console.log(authNum, 'Auth click');
    authNum === '123456' ? setAuthWarning('') : setAuthWarning('인증번호가 올바르지 않습니다');
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
            disabled={!validateEmail(email) || authNum.length != 6}
            onClick={handleNext}
            children="다음"
          />
        </ButtonBody>
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