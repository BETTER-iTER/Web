import { styled } from '../../stitches.config';
import React, { useState, useEffect } from 'react';
import LoginInput from '../component/common/LoginInput';
import Button from '../component/common/Button';
import Kakao from '../assets/icon/Kakao.svg?react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Caption1, Headline3 } from '../component/Font';
import LoginErrorIcon from '../assets/icon/LoginErrorIcon.svg?react';
import { postLogin } from '../apis/login';

const Login = () => {

  const navigate = useNavigate();
 
  const [emailValue, setEmailValue] = useState<string>(''); // 이메일 입력 값
  const [passwordValue, setPasswordValue] = useState<string>(''); // 비밀번호 입력 값
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loginState, setLoginState] = useState<boolean>(false);

  const handleEmailChange = (newValue: string) => {
    setEmailValue(newValue);
  };

  const handlePasswordChange = (newValue: string) => {
    setPasswordValue(newValue);
  };

  const handleLogin = async (email: string, password: string) => { 
    try {
      setLoginState(false);
      const loginData = await postLogin(email, password);

      //로그인 성공시 토큰 값들과 만료기한 저장하기
      const {accessToken, refreshToken, expiredTime} = loginData.result;

      //저장한 값들 로컬스토리지에 넣어주기
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('expiredTime', expiredTime);

      //저장한 토큰 값들 헤더에 저장(백에서 유효성 검사를 통해 엑세스와 리프레시 재발급 해줌)
      //각각의 헤더에 저장
      axios.defaults.headers.common['Authorization'] = `${accessToken}`;
      axios.defaults.headers.common['Authorization-refresh'] = `${refreshToken}`;
      console.log('Headers:', axios.defaults.headers.common);

      navigate('/');
    }
    catch(error) {
      setLoginState(true);
      const errorData = error.response.data.code;
      const errorMessage = error.response.data.message;

      console.log("로그인 에러", errorData);
      if (errorData == "USER_NOT_FOUND_400") {
        console.log(errorData);
        setErrorMessage(errorMessage);
      }
      else if (errorData == "AUTH_PASSWORD_NOT_MATCH_401") {
        console.log(errorData);
        setErrorMessage(errorMessage);
      }
      else if (errorData == "METHOD_ARGUMENT_ERROR") {
        console.log(errorData);
        setErrorMessage("이메일 또는 비밀번호가 올바른 형식이 아닙니다.");
      }
      else if (errorData == "AUTH_SHOULD_BE_KAKAO_401") {
        console.log(errorData);
        setErrorMessage("카카오로 로그인한 이메일입니다");
      }
      else {
        console.log(errorData);
      }
      
    }
  };

  // 입력 필드가 비어있지 않은 경우에만 버튼 활성화
  const isButtonEnabled = emailValue.trim() !== '' && passwordValue.trim() !== '';


  return (
    <>
      <Title>
        <Headline3>로그인</Headline3>
      </Title>
      <Body>
        <LoginInput
          placeholder="아이디(이메일)을 입력해주세요"
          type="text"
          value={emailValue}
          onChange={handleEmailChange}
        />
        <Password>
          <LoginInput
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
          />
        </Password>
        
          <Error>
         
            {loginState && (
              <Icon>
                <LoginErrorIcon />
              </Icon>
            )}
          
            
            <Caption1>{errorMessage}</Caption1>
          </Error>
        
        <BtnBody>
          <Button children="로그인" disabled={!isButtonEnabled} onClick={() => handleLogin(emailValue, passwordValue)} />
        </BtnBody>
        <KakaoButton>
          <In>
            <Kakao />
            <Span>카카오로 로그인하기</Span>
          </In>
        </KakaoButton>

        <Footer>
          <Join onClick={() => console.log('회원가입으로 이동')}>회원가입</Join>
          <Line> | </Line>
          <Find onClick={() => console.log('비밀번호 찾기로 이동')}>비밀번호 찾기</Find>
        </Footer>
      </Body>
    </>
  );
};

export default Login;
const Password = styled('div', {
  marginTop: '12px',
});
const Line = styled('div', {
  color: '$Gray20',
});
const Footer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '50px',
});
const Join = styled('div', {
  bodyText: 2,
  marginRight: '20px',
  color: '$TitleBlack',
});
const Find = styled('div', {
  bodyText: 2,
  marginLeft: '20px',
  color: '$TitleBlack',
});
const BtnBody = styled('div', {
  marginTop: '20px',
});
const Body = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '40px',
});
const KakaoButton = styled('button', {
  backgroundColor: '$kakaoYello',
  width: '340px',
  height: '45px',
  borderRadius: '7px',
  border: 'none',
  marginTop: '12px',
});
const In = styled('div', {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: '5px',
});

const Span = styled('div', {
  marginRight: '100px',
  bodyText: 2,
});

const Title = styled('div', {
  marginTop: '170px',
  marginLeft: '25px',
});
const Error = styled("div", {
  color: "$ErrorRed",
  display: "flex",
  marginTop: "10px",
  float: "left",
  width: "100%",
  marginLeft: "50px",
});

const Icon = styled("div", {
  paddingRight: "4px",
})

