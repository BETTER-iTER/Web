import { styled } from '../../stitches.config';
import React, { useState } from 'react';
import LoginInput from '../component/common/LoginInput';
import Button from '../component/common/Button';
import Kakao from '../assets/icon/Kakao.svg?react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Caption1, Headline3 } from '../component/Font';
import LoginErrorIcon from '../assets/icon/LoginErrorIcon.svg?react';


const Login = () => {

  const navigate = useNavigate();
  const localhost = 'https://dev.betteritem.store';
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

  const handleLogin = (email: string, password: string): void => {

      const requestBody={
        "email": email,
        "password" : password,
      };

      //로그인 api로 아이디 비밀번호 보내기
      axios.post(`${localhost}/auth/login`,requestBody)
      .then((response) => {
        if (response.status == 200) {
          setLoginState(false);
            console.log("로그인 성공");
            console.log(response);
            //로그인 성공시 토큰 값들과 만료기한 저장하기
            const {accessToken, refreshToken, expiredTime} = response.data;
            //저장한 값들 로컬스토리지에 넣어주기
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('expiredTime', expiredTime);

            //저장한 토큰 값들 헤더에 저장(백에서 유효성 검사를 통해 엑세스와 리프레시 재발급 해줌)
            //헤더에 두개 저장 이렇게 하는게 맞나..
            axios.defaults.headers.common['Authorization'] = `${accessToken},${refreshToken}`;
            navigate('/');

        }
        else {
          //로그인이 성공시 추가 에러 처리(혹시몰라서)
          setLoginState(true);
          console.log(response);
          console.log("로그인 실패")
          const { messege } = response.data;
          console.log(messege);
        }

      })
      .catch((error) => {
        //에러 발생시 로그인상태 불린값 변경해주기(에러 아이콘때매)
        setLoginState(true);

        //각각의 에러 케이스 처리
        if (error.response.data.code = "USER_NOT_FOUND_400") {
          console.log(error.response.data.code);
          setErrorMessage(error.response.data.message);
        }
        else if (error.response.data.code == "AUTH_PASSWORD_NOT_MATCH_401") {
          console.log(error.response.data.code);
          setErrorMessage(error.response.data.message);
        }
        else if (error.response.data.code == "METHOD_ARGUMENT_ERROR") {
          console.log(error.response.data.code);
          setErrorMessage(error.response.data.message);
        }
        else if (error.response.data.code == "AUTH_SHOULD_BE_KAKAO_401") {
          console.log(error.response.data.code);
          setErrorMessage(error.response.data.message);
        }
        else {
          console.log(error.response);
        }
      });
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
  marginLeft: "-135px",
  marginTop: "10px",
  
});

const Icon = styled("div", {
  paddingRight: "4px",
})