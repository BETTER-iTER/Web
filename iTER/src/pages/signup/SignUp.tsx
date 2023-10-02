import { styled } from '../../../stitches.config';
import { ButtonSquare } from '../../component/common/Button';
import ButtonWithInput from '../../component/common/Input';
import { Headline3 } from '../../component/Font';
import Top from '../../component/layout/Top';
import CheckCircle from '../../assets/icon/CheckCircle.svg?react';
import { useState } from 'react';

const SignUp = () => {
  const [check, setCheck] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [authNum, setAuthNum] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [emailWarning, setEmailWarning] = useState<string>('');
  const [authWarning, setAuthWarning] = useState<string>('');
  //이메일 유효성 검사
  const validateEmail = (value: string) => {
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim());
    return isEmailValid;
  };
  //비밀번호 유효성 검사
  const validatePassword = (value: string) => {
    const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/i.test(
      value.trim()
    );
    return isPasswordValid;
  };

  const handleEmailButton = () => {
    console.log('Email click?');
    validateEmail(email) ? setEmailWarning('') : setEmailWarning('이메일 형식이 올바르지 않습니다');
  };
  const handleAuthButton = () => {
    console.log(authNum, 'Auth click');
    authNum === '123456' ? setAuthWarning('') : setAuthWarning('인증번호가 올바르지 않습니다');
  };

  return (
    <>
      <Top title="회원가입" />
      <Content>
        <Title>
          <Headline3>ITer에 오신걸 환영합니다</Headline3>
        </Title>

        <ButtonWithInput
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
        <ButtonWithInput
          placeholder="인증번호를 6자리를 입력해주세요"
          type="text"
          labelName="인증번호"
          btnName="확인"
          onClick={() => handleAuthButton()}
          onChange={setAuthNum}
          disabled={authNum.length != 6}
          error={authWarning}
        />
        <div style={{ marginTop: 20 }} />
        <ButtonWithInput
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

        <Bottom>
          <Terms onClick={() => setCheck(!check)} check={check}>
            <CheckCircle fill={check ? '#8787F4' : '#C1C4CC'} />
            ITer 서비스이용약관에 동의합니다.
          </Terms>
          <ButtonSquare disabled>다음</ButtonSquare>
        </Bottom>
      </Content>
    </>
  );
};
export default SignUp;
const Content = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Title = styled('div', {
  margin: '114px 0 45px 40px',
  width: '100%',
  textAlign: 'left',
});
const Terms = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '12px',
  fontWeight: '400',
  marginBottom: '12px',
  gap: '4px',
  variants: {
    check: {
      true: {
        color: '$Gray50',
      },
      false: {
        color: '$Gray20',
      },
    },
  },
});

const Bottom = styled('div', {
  borderBottom: 'solid 1px #EAEEF2',
  position: 'absolute',
  bottom: '10px',
});
