import api from './index';

// 프로필 조회
export const getMyPageProfile = async () => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('프로필 조회');
  try {
    const response = await api.get('/mypage/profile', {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    console.log('프로필 조회 오류', error);
    throw error;
  }
};
