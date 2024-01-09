import api from './index';
import axios from 'axios';

// export const deleteUser = async (reason: string) => {
//     try {
//       const accessToken = localStorage.getItem('accessToken');
//       console.log(accessToken);
//       // axios 헤더에 토큰 추가
//       axios.defaults.headers.common['Authorization'] = `${accessToken}`;

//       const response = await api.delete('/user/withdraw', {
//         params: {
//           reasons: reason,
//         },
//         headers: {
//           Authorization: `${accessToken}`,
//         },
//       });

//       console.log(response.data);
//       return response;
//     } catch (error) {
//       console.error('에러:', error);
//       console.log('Headers:', axios.defaults.headers.common);
//       throw error;
//     }
//   };

export const getSpecData = async (category: string) => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    // axios 헤더에 토큰 추가
    axios.defaults.headers.common['Authorization'] = `${accessToken}`;
    const response = await api.get(`/review/spec/data?category=${category}`);
    return response;
  } catch (error) {
    console.log('에러', error);
    throw error;
  }
};

export const getUserInfo = async () => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    const userData = await api.get('/user/info', {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    console.log(userData);
    return userData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

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

// 리뷰 삭제
export const deleteReview = async (id: string) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log(accessToken);
  console.log('리뷰 삭제', id);
  try {
    const response = await api.delete(`/review/${id}`, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    console.log('리뷰 삭제 오류', error);
    throw error;
  }
};

// 카테고리별 리뷰 조회
export const getCategoryReviewList = async ({
  keywordCategory,
  sort,
  page,
  expert,
}: {
  keywordCategory: string;
  sort: string;
  page: number;
  expert: boolean;
}) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('카테고리별 리뷰 조회', keywordCategory);

  try {
    const response = await api.get(
      `/review/category?category=${keywordCategory}&sort=${sort}&page=${page}&expert=${expert}`,
      {
        headers: {
          Authorization: accessToken ? `${accessToken}` : '',
        },
      }
    );
    return response.data.result;
  } catch (error) {
    console.log('카테고리별 리뷰 조회 오류', error);
    throw error;
  }
};

// 리뷰 키워드 검색 조회
export const getReviewList = async ({
  keywordLast,
  sort,
  page,
  expert,
}: {
  keywordLast: string;
  sort: string;
  page: number;
  expert: boolean;
}) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('키워드 검색 리뷰 리스트 조회', keywordLast);
  try {
    const response = await api.get(
      `/review/search?name=${keywordLast}&sort=${sort}&page=${page}&expert=${expert}`,
      {
        headers: {
          Authorization: accessToken ? `${accessToken}` : '',
        },
      }
    );
    return response.data.result;
  } catch (error) {
    console.log('키워드 검색 리뷰 조회 오류', error);
    throw error;
  }
};
