import { styled } from '../../stitches.config';
import React, { useState } from 'react';
import LoginInput from '../component/common/LoginInput';
import Button from '../component/common/Button';
import Kakao from '../assets/icon/Kakao.svg?react';
import { Headline3 } from '../component/Font';
import KakaoButton from '../component/common/KakaoLoginBtn';

const Login = () => {
  const [emailValue, setEmailValue] = useState<string>(''); // 이메일 입력 값
  const [passwordValue, setPasswordValue] = useState<string>(''); // 비밀번호 입력 값

  const handleEmailChange = (newValue: string) => {
    setEmailValue(newValue);
  };

  const handlePasswordChange = (newValue: string) => {
    setPasswordValue(newValue);
  };
  const handleKakaoSuccess = (data: any) => {
    // 카카오 로그인 성공 시 수행할 동작을 여기에 정의하세요.
    console.log('카카오 로그인 성공', data);
  };
  const handleKakaoError = (error: any) => {
    // 카카오 로그인 실패 시 수행할 동작을 여기에 정의하세요.
    console.error('카카오 로그인 실패', error);
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
          <Button children="로그인" disabled={!isButtonEnabled} />
        </BtnBody>

        <KakaoButton onSuccess={handleKakaoSuccess} onError={handleKakaoError} />

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


const Title = styled('div', {
  marginTop: '170px',
  marginLeft: '25px',
});
