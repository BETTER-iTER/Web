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

export const deleteUser = async (
    reason: string,
) => {
    const requestBody = {
        "reason": reason,
    };

    try {
        const response = await api.delete('/user/withdraw/:reasons', requestBody);
        return response;
    }
    catch(error) {
        console.log("에러:", error);
        throw error;
    }
}