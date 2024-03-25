import api from './index';
import axios from 'axios';

export const getSpecData = async (category: string) => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    axios.defaults.headers.common['Authorization'] = `${accessToken}`;
    const response = await api.get(`/review/spec/data?category=${category}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUserInfo = async () => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const userData = await api.get('/user/info', {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    return userData;
  } catch (error) {
    throw error;
  }
};

// 리뷰 상세 조회
export const getReviewDetail = async (id: string) => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await api.get(`/review/${id}/detail`, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    throw error;
  }
};

// 리뷰 삭제
export const deleteReview = async (id: string) => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await api.delete(`/review/${id}`, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    throw error;
  }
};

// 리뷰 키워드 검색 조회
export const getReviewList = async ({
  keyword,
  category,
  sort,
  page,
  expert,
}: {
  keyword: string;
  category: string;
  sort: string;
  page: number;
  expert: boolean;
}) => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await api.get(
      `/review/search?name=${keyword}&sort=${sort}&page=${page}&category=${category}&expert=${expert}`,
      {
        headers: {
          Authorization: accessToken ? `${accessToken}` : '',
        },
      }
    );
    return response.data.result;
  } catch (error) {
    throw error;
  }
};

// 카테고리 리뷰 리스트 조회
export const getCategoryReviewList = async ({
  category = '',
  page,
}: {
  category: string;
  page: number;
}) => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await api.get(`/review/category?category=${category}&page=${page}`, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    throw error;
  }
};

export const likeReview = async (id: number) => {
  try {
    const token = localStorage.getItem('accessToken');
    await axios.post(`https://dev.betteritem.store/review/${id}/like`, {
      headers: {
        Authorization: `${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const dislikeReview = async (id: number) => {
  try {
    const token = localStorage.getItem('accessToken');
    await axios.delete(`https://dev.betteritem.store/review/${id}/like`, {
      headers: {
        Authorization: `${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const scrapReview = async (id: number) => {
  try {
    const token = localStorage.getItem('accessToken');
    await axios.post(`https://dev.betteritem.store/review/${id}/scrap`, {
      headers: {
        Authorization: `${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const deleteScrap = async (id: number) => {
  try {
    const token = localStorage.getItem('accessToken');
    await axios.delete(`https://dev.betteritem.store/review/${id}/scrap`, {
      headers: {
        Authorization: `${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};
