import api from './index';

// 홈 데이터 조회
export const getHome = async () => {
  console.log('홈 데이터 조회');
  try {
    const response = await api.get('/home');
    return response.data.result;
  } catch (error) {
    console.log('홈 데이터 조회 오류', error);
    throw error;
  }
};
