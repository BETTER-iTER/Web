import api from './index';

// 홈 데이터 조회
export const getHome = async () => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('홈 데이터 조회');
  try {
    const response = await api.get('/home', {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    console.log('홈 데이터 조회 오류', error);
    throw error;
  }
};
