import { styled } from '../../../stitches.config';
import Button from '../../component/common/Button';
import InputComponent from '../../component/common/Input';
import { Caption2, Headline3 } from '../../component/Font';
import Top from '../../component/layout/Top';
import CheckCircle from '../../assets/icon/CheckCircle.svg?react';
import { useState } from 'react';
import { postJoinEmail, postEmailVerify } from '../../apis/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { LoginProps } from '../../types/auth';
import Timer from '../../component/signup/Timer';
import Modal from '../../component/common/Modal';

const SignUp = () => {
  const [codeCheck, setCodeCheck] = useState<boolean>(false);
  const [termsCheck, setTermsCheck] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [authNum, setAuthNum] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [authWarning, setAuthWarning] = useState<string>('');
  const [timer, setTimer] = useState<boolean>(false); // 안증확인시 타이머 true->시간종료후 false

  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [duplicateModal, setDuplicateModal] = useState<boolean>(false);

  const navigate = useNavigate();

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

  //다음 버튼 활성화
  const onDisabled = () => {
    if (codeCheck && termsCheck && validatePassword(password)) {
      return false;
    }
    return true;
  };

  // 인증번호 전송
  const mutation = useMutation(postJoinEmail, {
    onSuccess: (data) => {
      console.log('data', data);
      setSuccessModal(true);
      setTimer(true);
    },
    onError: (error) => {
      console.log('error', error);
      setDuplicateModal(true);
    },
  });

  const handleEmailButton = () => {
    console.log('Email click?');
    mutation.mutate(email);
  };

  // 인증번호 확인
  const coedMutation = useMutation(postEmailVerify, {
    onSuccess: (data) => {
      console.log('codedata', data);
      setCodeCheck(true);
    },
    onError: (error) => {
      console.log('codeerror', error);
      setAuthWarning('인증번호를 확인해주세요');
    },
  });

  const handleAuthButton = () => {
    console.log(authNum, 'Auth click');
    const data = {
      email: email,
      code: authNum,
    };
    coedMutation.mutate(data);
  };

  // 다음버튼
  const loginInfo: LoginProps = {
    // email: 'already.nyeong@gmail.com',
    // password: 'qwer1234!',
    email: email,
    password: password,
  };

  const handleNext = () => {
    navigate('/signup/additional', { state: loginInfo });
  };

  return (
    <>
      <Top title="회원가입" />
      <Content>
        <Title>
          <Headline3>ITer에 오신걸 환영합니다</Headline3>
        </Title>

        <InputComponent
          placeholder="이메일을 입력해주세요"
          type="text"
          labelName="이메일"
          btnName="인증번호 전송"
          onClick={() => handleEmailButton()}
          onChange={setEmail}
          disabled={email.length == 0 || !validateEmail(email)}
          error={
            validateEmail(email) || email.length == 0
              ? undefined
              : '올바른 이메일 주소를 입력해주세요'
          }
        />
        <div style={{ marginTop: 20 }} />
        {timer && (
          <TimerBox>
            <Timer min={3} onChange={() => setTimer(true)} />
          </TimerBox>
        )}
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
        <div style={{ marginTop: 20 }} />
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

        <Bottom>
          <Terms onClick={() => setTermsCheck(!termsCheck)} check={termsCheck}>
            <CheckCircle fill={termsCheck ? '#8787F4' : '#C1C4CC'} />
            <Caption2>ITer 서비스이용약관에 동의합니다.</Caption2>
          </Terms>
          <Button disabled={onDisabled()} onClick={() => handleNext()}>
            다음
          </Button>
        </Bottom>
      </Content>

      {successModal && (
        <Modal text="인증번호가 전송되었습니다" onClick={() => setSuccessModal(false)} btn="확인" />
      )}
      {duplicateModal && (
        <Modal text="이미 가입된 이메일입니다" onClick={() => navigate('/login')} btn="확인" />
      )}
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
  bottom: '20px',
});

const TimerBox = styled('div', {
  width: '330px',
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'absolute',
  top: '352px',
});
