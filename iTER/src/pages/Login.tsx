import { styled } from '../../stitches.config';
import React, { useState } from 'react';
import LoginInput from '../component/common/LoginInput';
import Button from '../component/common/Button';
import Kakao from '../assets/icon/Kakao.svg?react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Headline3 } from '../component/Font';


const Login = () => {

  const navigate = useNavigate();
  const localhost = 'http://13.124.170.30:8080';
  const [emailValue, setEmailValue] = useState<string>(''); // 이메일 입력 값
  const [passwordValue, setPasswordValue] = useState<string>(''); // 비밀번호 입력 값

  const handleEmailChange = (newValue: string) => {
    setEmailValue(newValue);
  };

  const handlePasswordChange = (newValue: string) => {
    setPasswordValue(newValue);
  };

  const handleLogin = (email: string, password: string): void => {

      const requestBody={
        "email": email,
        "password" : password,
      };

      axios.post(`${localhost}/auth/login`,requestBody)
      .then((response) => {
        if (response.status == 200) {
            console.log("로그인 성공");
            console.log(response);
            const {accessToken, refreshToken, expiredTime} = response.data;

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('expiredTime', expiredTime);
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            navigate('/home');

        }
        else {
          console.log("로그인 실패")
          const { messege } = response.data;
          console.log(messege);
        }

      })
      .catch((error) => {
        console.log("로그인이 불가능합니다.");
        console.log(error);
      });

      // function getAccessToken() {
      //   return localStorage.getItem('accessToken');
      // }
      
      // function getRefreshToken() {
      //   return localStorage.getItem('refreshToken');
      // }
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
