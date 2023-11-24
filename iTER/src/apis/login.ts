import api from './index';

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

//이메일 인증요청 api 연동(비밀번호 재설정중)
export const postEmail = async (
    email: string,
) => {
    const requestBody = {
        "email": email,
    };

    try {
        const response = await api.post('/auth/password/emails', requestBody);
        return response;
    }
    catch (error) {
        console.log("로그인 에러", error);
        throw error;
    }
};

//인증번호 검수 api 연동
export const postAuthNum = async (
    email: string,
    code: string,
) => {
    const requestBody = {
        "email": email,
        "code": code,
    };

    try {
        const response = await api.post('/auth/password/emails/verification', requestBody);
        return response;
    }
    catch(error) {
        console.log("에러", error);
        throw error;
    }
};

//비밀번호 재설정 api 연동
export const patchChangePassword = async (
    email: string,
    password: string,
) => {
    const requestBody = {
        "email": email,
        "password": password,
    };

    try {
        const response = await api.patch('/auth/password/reset' ,requestBody)
        return response;
    }
    catch(error) {
        console.log("에러", error);
        throw error;
    }
};