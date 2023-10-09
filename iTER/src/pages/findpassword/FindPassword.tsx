import { styled } from "../../../stitches.config";
import ButtonWithInput from "../../component/common/Input";
import Button from "../../component/common/Button";
import Top from "../../component/layout/Top";
import { Headline3 } from "../../component/Font";
import { useState } from "react";

const FindPassword = () => {

    const [email, setEmail] = useState<string>('');
    const [authNum, setAuthNum] = useState<string>('');

    const [emailWarning, setEmailWarning] = useState<string>('');
    const [authWarning, setAuthWarning] = useState<string>('');

    // 이메일 유효성
    const validateEmail = (value: string) => {
        const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim());
        return isEmailValid;
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
        <Top title="비밀번호 찾기" />

        <Title><Headline3>가입한 이메일을 인증해주세요</Headline3></Title>

        <Body>
            <ButtonWithInput
                placeholder="이메일을 입력해주세요"
                type="text"
                labelName="이메일"
                btnName="인증번호 전송"
                onClick={() => handleEmailButton()}
                onChange={setEmail}
                disabled={email.length == 0}
                error={emailWarning} />

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
        

        <ButtonBody>
            <Button disabled={email.length ==0 || authNum.length != 6} onClick={() => console.log("다음 버튼")} children="다음" />
        </ButtonBody>
        </Body>
        </>

    )
}

export default FindPassword;

const Title = styled('div', {
    margin: '114px 0 50px 31px',
    width: '100%',
    textAlign: 'left',
    lineHeight: "28px",

  });

const Body = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginLeft: "10px",
});

const ButtonBody = styled('div', {
    position: 'absolute',
    bottom: '20px',
});