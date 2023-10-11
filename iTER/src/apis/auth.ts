import api from './index';
import { UserProps } from '../types/auth';
// 가입 인증메일 전송
export const postJoinEmail = async (email: string) => {
  console.log('가입인증메일 전송');
  try {
    const response = await api.post('/auth/join/emails', { email });
    return response;
  } catch (error) {
    console.log('가입인증메일 오류', error);
    console.log(error);
  }
};

// 이메일 코드 검증
export const postEmailVerify = async (email: string, code: string) => {
  console.log('이메일 코드 검증');
  try {
    const response = await api.post('/auth/emails/verification', { email, code });
    return response;
  } catch (error) {
    console.log('이메일 코드 검증 오류', error);
    console.log(error);
  }
};

// 닉네임 체크
export const getNicknameVerify = async (nickname: string) => {
  console.log('닉네임 체크');
  try {
    const response = await api.get(`/auth/nickname/check?nickname=${nickname}`);
    return response;
  } catch (error) {
    console.log('닉네임 체크 오류', error);
    console.log(error);
  }
};

// 일반 회원가입
export const postJoin = async (data: UserProps) => {
  console.log('일반 회원가입');
  try {
    const response = await api.post('/auth/join', { data });
    return response;
  } catch (error) {
    console.log('일반 회원가입 오류', error);
    console.log(error);
  }
};
