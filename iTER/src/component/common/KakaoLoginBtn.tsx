import React from 'react';
import { styled } from '../../../stitches.config';
import Kakao from "../../assets/icon/Kakao.svg?react";
interface KakaoButtonProps {
  onSuccess: (data: any) => void; // 성공 시 호출할 콜백 함수
  onError: (error: any) => void; // 실패 시 호출할 콜백 함수
}

const KakaoButton: React.FC<KakaoButtonProps> = () => {
    const client_id= '4b6a94d71dbead354958c34278cbdc9b';
    const redirect_uri= 'http://localhost:5173/kakao';
    const handleKakaoLogin = () => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}`;
      };
    
  return (
    <div>
      <KakaoLay onClick={handleKakaoLogin}>
                <In>
                    <Kakao />
                    <Span>카카오로 로그인하기</Span>
                </In>
        </KakaoLay>
    </div>
  );
};

export default KakaoButton;

const KakaoLay = styled('button', {
    backgroundColor: "$kakaoYello",
    width: "340px",
    height: "45px",
    borderRadius: "7px",
    border: "none",
    marginTop: "12px",
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