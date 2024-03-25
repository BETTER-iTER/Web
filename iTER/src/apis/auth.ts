import api from './index';
import { UserProps } from '../types/auth';

// 가입 인증메일 전송
export const postJoinEmail = async (email: string) => {
  try {
    const response = await api.post('/auth/join/emails', { email });
    return response.data;
  } catch (error) {
    console.log('가입인증메일 오류', error);
    return error;
  }
};

// 이메일 코드 검증
export const postEmailVerify = async (body: { email: string; code: string }) => {
  try {
    const response = await api.post('/auth/join/emails/verification', body);
    return response.data;
  } catch (error) {
    console.log('이메일 코드 검증 오류', error);
    return error;
  }
};

// 닉네임 체크
export const getNicknameVerify = async (nickname: string) => {
  try {
    const response = await api.get(`/auth/nickname/check?nickname=${nickname}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

// 일반 회원가입
export const postJoin = async (body: UserProps) => {
  try {
    const response = await api.post('/auth/join', body);
    return response;
  } catch (error) {
    return error;
  }
};

//비밀번호 재설정 api 연동
export const patchChangePassword = async (email: string, password: string) => {
  const requestBody = {
    email: email,
    password: password,
  };

  try {
    const response = await api.patch('/auth/password/reset', requestBody);
    return response;
  } catch (error) {
    throw error;
  }
};
