import { styled } from "../../stitches.config"
import React,{useState} from "react";
import LoginInput from "../component/common/LoginInput";
import Button from "../component/common/Button";
import Kakao from "../assets/icon/Kakao.svg?react";

const Login = () => {
  const [emailValue, setEmailValue] = useState<string>(''); // 이메일 입력 값
  const [passwordValue, setPasswordValue] = useState<string>(''); // 비밀번호 입력 값

  const handleEmailChange = (newValue: string) => {
    setEmailValue(newValue);
  };

  const handlePasswordChange = (newValue: string) => {
    setPasswordValue(newValue);
  };

  // 입력 필드가 비어있지 않은 경우에만 버튼 활성화
  const isButtonEnabled = emailValue.trim() !== '' && passwordValue.trim() !== '';

  return (
    <>
      <Title>로그인</Title>
      <Body>
            <LoginInput
                placeholder="아이디(이메일)을 입력해주세요"
                type="text"
                value={emailValue}
                onChange={handleEmailChange}
            />
            <LoginInput
                placeholder="비밀번호를 입력해주세요"
                type="password"
                value={passwordValue}
                onChange={handlePasswordChange}
            />
        <BtnBody>
            <Button children="로그인" disabled={!isButtonEnabled} />
        </BtnBody>
            <KakaoButton>
                <In>
                    <Kakao />
                    <Span>카카오로 로그인하기</Span>
                </In>
            </KakaoButton>

            <Footer>
                <Join onClick={()=>console.log("회원가입으로 이동")}>회원가입</Join>
                <Line>  |  </Line>
                <Find onClick={()=>console.log("비밀번호 찾기로 이동")}>비밀번호 찾기</Find>
            </Footer>
        </Body>
    </>
  );
};



export default Login;

const Line = styled("div", {
    color:"$Gray20",
})
const Footer = styled("div", {
    display: "flex",
    alignItems: 'center', 
    marginTop: "50px",
})
const Join = styled("div", {
    fontSize: "14px",
    fontWeight: "400",
    marginRight: "20px"
})
const Find = styled("div", {
    fontSize: "14px",
    fontWeight: "400",
    marginLeft: "20px",
})
const BtnBody = styled("div", {
    marginTop: "20px",
})
const Body = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "40px",
})
const KakaoButton = styled('button', {
    backgroundColor: "$kakaoYello",
    width: "340px",
    height: "45px",
    borderRadius: "7px",
    border: "none",
    marginTop: "15px",
})
const In = styled("div", {
    height: '100%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginLeft: "5px"
})

const Span = styled("div", {
    marginRight: "100px",
    color: "$Black",
    fontWeight: "600",
    fontSize: "15px",
})

const Title = styled('div', {
    fontSize: "20px",
    fontWeight: "600",
    color: "white", //나중에 titleblack으로 바꿔야댐
    height: "50px",
    marginTop: "170px",
    marginLeft: "25px"
    
})
