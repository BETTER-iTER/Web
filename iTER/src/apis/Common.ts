import api from './index';

// 카테고리 데이터 조회
export const getCategory = async () => {
  console.log('카테고리 데이터 조회');
  try {
    const accessToken = localStorage.getItem('accessToken');
    const response = await api.get('/category', {
      headers: {
        Authorization: `${accessToken}`,
        // 다른 헤더도 필요한 경우 여기에 추가할 수 있습니다
      },
    });
    return response.data.result;
  } catch (error) {
    console.log('카테고리 데이터 조회 오류', error);
    throw error;
  }
};
