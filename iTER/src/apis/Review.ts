import api from './index';

// 카테고리 별 리뷰 조회
export const getCategoryReview = async (category: string) => {
  console.log('카테고리 별 리뷰 조회', category);
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await api.get(`/review/category?category=${category}`, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    console.log('카테고리 별 리뷰 조회 오류', error);
    throw error;
  }
};
