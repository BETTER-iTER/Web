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
import ErrorPage from '../../component/common/Error';
import LoadingPage from '../../component/common/Loading';

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

  // 버튼 활성화
  const [emailDisabled, setEmailDisabled] = useState<boolean>(false);
  const [codeDisabled, setCodeDisabled] = useState<boolean>(false);

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
      if (data?.code === 'SUCCESS_200') {
        setTimer(true);
        setEmailDisabled(false);
      } else if (data?.response?.data?.code === 'AUTH_EMAIL_DUPLICATION_401') {
        // 가입된 이메일
        setDuplicateModal(true);
      } else if (data?.response?.data?.code === 'AUTH_CODE_ALREADY_EXIST_401') {
        // 인증번호 만료 전
        setAuthWarning('인증번호가 이미 발송되었습니다');
      } else {
        return <ErrorPage type={2} />;
      }
    },
  });

  const handleEmailButton = () => {
    setEmailDisabled(true);
    mutation.mutate(email);
  };

  // 인증번호 확인
  const coedMutation = useMutation(postEmailVerify, {
    onSuccess: (data) => {
      if (data?.code === 'SUCCESS_200') {
        setCodeCheck(true);
        setAuthWarning('');
      } else if (data?.response?.data?.code === 'AUTH_CODE_NOT_MATCH_401') {
        // 잘못된 인증번호
        setAuthWarning('인증번호를 확인해주세요');
        setCodeCheck(true);
      } else if (data?.response?.data?.code === 'AUTH_CODE_NOT_EXIST_401') {
        // 인증번호 존재하지 않음
        setAuthWarning('인증 코드가 존재하지 않습니다');
        setCodeCheck(false);
      } else {
        return <ErrorPage type={2} />;
      }
    },
    onError: () => {
      return <ErrorPage type={2} />;
    },
  });

  const handleAuthButton = () => {
    setCodeDisabled(true);
    const data = {
      email: email,
      code: authNum,
    };
    coedMutation.mutate(data);
  };

  // 다음버튼
  const loginInfo: LoginProps = {
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
          disabled={email.length == 0 || !validateEmail(email) || emailDisabled}
          error={
            validateEmail(email) || email.length == 0
              ? undefined
              : '올바른 이메일 주소를 입력해주세요'
          }
        />
        <div style={{ marginTop: 20 }} />
        {timer && (
          <TimerBox>
            <Timer
              min={3}
              onChange={() => setTimer(true)}
              onFailed={() => setEmailDisabled(false)}
            />
          </TimerBox>
        )}
        <InputComponent
          placeholder="인증번호를 6자리를 입력해주세요"
          type="text"
          labelName="인증번호"
          btnName="확인"
          onClick={() => handleAuthButton()}
          onChange={setAuthNum}
          disabled={authNum.length != 6 || codeDisabled}
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
      {mutation.isError && <ErrorPage type={2} />}
      {mutation.isLoading && <LoadingPage />}
      {coedMutation.isError && <ErrorPage type={2} />}
      {coedMutation.isLoading && <LoadingPage />}
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
  borderBottom: 'solid 1px $Bar',
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
