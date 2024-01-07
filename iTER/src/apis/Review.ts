import api from './index';

// 리뷰 상세 조회
export const getReviewDetail = async (id: string) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('리뷰 상세 조회', id);
  try {
    const response = await api.get(`/review/${id}/detail`, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    console.log('리뷰 상세 조회 오류', error);
    throw error;
  }
};

// 리뷰 검색 조회
export const getReviewList = async ({
  keywordLast,
  sort,
  page,
}: {
  keywordLast: string;
  sort: string;
  page: number;
}) => {
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
  const type = category.includes(keywordLast)
    ? `category?category=${keywordLast}` //검색어가 카테고리일 경우 포함
    : `search?name=${keywordLast}`; //카테고리 외 검색어
  const accessToken = localStorage.getItem('accessToken');
  console.log('리뷰 리스트 조회', keywordLast, type);
  try {
    const response = await api.get(`/review/${type}&sort=${sort}&page=${page}`, {
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
