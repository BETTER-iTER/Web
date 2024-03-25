import api from './index';

// 카테고리 데이터 조회
export const getCategory = async () => {
  try {
    const response = await api.get('/category');
    return response.data.result;
  } catch (error) {
    throw error;
  }
};
