import api from './index';

// 홈 데이터 조회
export const getHome = async () => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await api.get('/home', {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    throw error;
  }
};
