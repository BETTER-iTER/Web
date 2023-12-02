import api from './index';

// 카테고리 데이터 조회
export const getCategory = async () => {
  console.log('카테고리 데이터 조회');
  try {
    const response = await api.get('/category');
    return response.data.result;
  } catch (error) {
    console.log('카테고리 데이터 조회 오류', error);
    throw error;
  }
};
