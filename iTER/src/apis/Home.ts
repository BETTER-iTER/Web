import axios from 'axios';
import api from './index';

// 홈 데이터 조회
export const getHome = async () => {
  console.log('홈 데이터 조회');
  try {
    const response = await api.get('/home');
    return response.data;
  } catch (error) {
    console.log('홈 데이터 조회 오류', error);
    throw error;
  }
};

// 뉴스 리스트 조회

export const getNews = async () => {
  console.log('뉴스 리스트 조회');
  try {
    const accessToken = localStorage.getItem('accessToken');
    axios.defaults.headers.common['Authorization'] = `${accessToken}`;
    const response = await api.get('/news', {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    const responseData = response.data;
    const newsData = responseData.result || [];
    return newsData;
  } catch (error) {
    console.log('뉴스 리스트 조회 오류', error);
    throw error;
  }
};
