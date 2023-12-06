import api from './index';

// 카테고리 별 리뷰 조회
export const getCategoryReview = async (keyword: string) => {
  const category = [
    '휴대폰',
    '노트북',
    'PC',
    '스마트워치',
    '태블릿',
    '마우스',
    '키보드',
    '헤드폰',
    '스피커',
    '보조배터리',
    '악세서리',
    '기타',
  ];
  const type = category.includes(keyword) ? 'category?category' : 'search?name';
  const accessToken = localStorage.getItem('accessToken');
  console.log('리뷰 리스트 조회', keyword, type);
  try {
    const response = await api.get(`/review/${type}=${keyword}`, {
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

// 검색어로 리뷰 조회
export const getSearchReview = async (name: string) => {
  console.log('검색어로 리뷰 조회', name);
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await api.get(`/review/search?name=${name}`, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    console.log('검색어로 리뷰 조회 오류', error);
    throw error;
  }
};
