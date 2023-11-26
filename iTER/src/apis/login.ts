import api from './index';
import axios from "axios";
//로그인 api 연결
export const postLogin = async (
    //이메일과 비번을 받아서 api연결 시도
    email: string,
    password: string,
) => {
    const requestBody = {
        "email": email,
        "password": password,
    };

    console.log("로그인 api 연결");
    try {
        const response = await api.post('/auth/login', requestBody);
        return response.data;
    }
    catch (error) {
        console.log("로그인 에러", error);
        throw error;
    }
};

export const deleteUser = async (reason: string) => {
    const requestBody = {
        "reason": reason,
    }
    try {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
  
      // 헤더에 토큰 추가
      axios.defaults.headers.common['Authorization'] = accessToken;
      axios.defaults.headers.common['Authorization-refresh'] = refreshToken;
  
      // DELETE 요청
      const response = await api.delete(`/user/withdraw/${reason}`, {data: requestBody});
      
      // 서버로부터의 응답 처리
      console.log(response.data);
      return response;
    } catch (error) {
      console.error('에러:', error);
      throw error;
    }
  };
  
