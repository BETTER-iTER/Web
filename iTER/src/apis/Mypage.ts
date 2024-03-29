import api from './index';

// 프로필 조회
export const getMyPageProfile = async () => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('프로필 조회');
  try {
    const response = await api.get('/mypage/profile/mine', {
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

// 스크랩 리뷰 조회
export const getMyPageReviewScrap = async (page: number) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('스크랩 리뷰 조회');
  try {
    const response = await api.get(`/mypage/review/mine/scrap/${page}`, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    console.log('스크랩 리뷰 조회 오류', error);
    throw error;
  }
};

// 내가 쓴 리뷰 조회
export const getMyPageReviewMine = async (page: number) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('내가 쓴 리뷰 조회');
  try {
    const response = await api.get(`/mypage/review/mine/${page}`, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    console.log('내가 쓴 리뷰 조회 오류', error);
    throw error;
  }
};

// 팔로워 조회
export const getMypageFollowers = async (page: number) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('팔로워 조회');
  try {
    const response = await api.get(`/mypage/followers/mine/${page}`, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    console.log('팔로워 조회 오류', error);
    throw error;
  }
};

// 팔로잉 조회
export const getMypageFollowings = async (page: number) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('팔로잉 조회');
  try {
    const response = await api.get(`/mypage/followings/mine/${page}`, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    console.log('팔로잉 조회 오류', error);
    throw error;
  }
};

// 좋아요한 리뷰 조회
export const getMypageReviewLike = async (page: number) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('좋아요한 리뷰 조회');
  try {
    const response = await api.get(`/mypage/review/mine/like/${page}`, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    console.log('좋아요한 리뷰 조회 오류', error);
    throw error;
  }
};
