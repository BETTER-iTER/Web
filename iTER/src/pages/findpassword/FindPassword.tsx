import { styled } from '../../../stitches.config';
import InputComponent from '../../component/common/Input';
import Button from '../../component/common/Button';
import Top from '../../component/layout/Top';
import { Headline3 } from '../../component/Font';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../../component/signup/FindPasswordTimer';
import Modal from '../../component/common/Modal';
import { postJoinEmail, postEmailVerify } from '../../apis/auth';

const FindPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [authNum, setAuthNum] = useState<string>('');
  const [checkAuth, setCheckAuth] = useState<boolean>(false);
  const [emailWarning, setEmailWarning] = useState<string>('');
  const [authWarning, setAuthWarning] = useState<string>('');

  const [timer, setTimer] = useState<boolean>(false); // 안증확인시 타이머 true->시간종료후 false

  // 이메일 유효성 검사하기
  const validateEmail = (value: string) => {
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim());
    return isEmailValid;
  };

  //모달 상태관리 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  //모달 메세지 상태관리
  const [modalMessage, setModalMessage] = useState<string>('');
  //모달 동작 수행 함수
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  //이메일 인증요청 api 연동
  const handleEmailButton = async (email: string) => {
    if (validateEmail(email)) {
      setEmailWarning('');
      try {
        const emailData = await postJoinEmail(email);
        console.log(emailData);
        const Code = emailData.data.code;
        if (Code == 'SUCCESS_200') {
          setTimer(true);
          setModalMessage('인증번호가 발송되었습니다');
          setIsModalOpen(true);
        }
      } catch (error) {
        const emailError = error.response.data.code;
        if (emailError == 'USER_NOT_FOUND_400') {
          console.log('일치하는 회원정보 없음');
          setModalMessage('가입하지않은 이메일 입니다');
          setIsModalOpen(true);
        } else if (emailError == 'AUTH_CODE_ALREADY_EXIST_401') {
          console.log('이미 인증 코드가 존재');
          setModalMessage('이미 인증 코드가 존재합니다');
          setIsModalOpen(true);
        } else if (emailError == 'AUTH_SHOULD_BE_KAKAO_401') {
          console.log('카카오로 로그인한 회원');
          setModalMessage('카카오로 로그인한 계정입니다');
          setIsModalOpen(true);
        }
      }
    } else {
      setEmailWarning('올바른 이메일 주소를 입력해주세요');
    }
  };

  //인증번호 검증 api 연동
  const handleAuthButton = async (email: string, code: string) => {
    try {
      const AuthData = await postEmailVerify(email, code);
      console.log(AuthData);
      setCheckAuth(true);
      localStorage.setItem('email', email);
    } catch (error) {
      const AuthError = error.response.data.code;
      console.log(AuthError);
      setAuthWarning('인증번호가 일치하지 않습니다');
    }
  };

  //다음 버튼 수행 함수
  const handleNext = () => {
    console.log('다음 버튼');
    navigate('/password/reset');
  };

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
          onClick={() => handleEmailButton(email)}
          onChange={setEmail}
          disabled={email.length == 0 || checkAuth}
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
          onClick={() => handleAuthButton(email, authNum)}
          onChange={setAuthNum}
          disabled={authNum.length != 6 || checkAuth}
          error={authWarning}
        />

        <ButtonBody>
          <Button disabled={!checkAuth} onClick={handleNext} children="다음" />
        </ButtonBody>
        {isModalOpen && <Modal text={modalMessage} btn="확인" onClick={handleModalClose} />}
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

const TimerBox = styled('div', {
  color: '$Gray50',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '22px',
  letterSpacing: '-0.5px',
  marginBottom: '-30px',
});

const Timerlay = styled('div', {
  display: 'flex',
  marginLeft: '300px',
});
