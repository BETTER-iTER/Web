import api from '.';

export const postFollow = async (targetId: number) => {
  const requestBody = {
    targetId: targetId,
  };
  const accessToken = localStorage.getItem('accessToken');
  console.log('팔로우');
  try {
    const response = await api.post(`/follow/following`, requestBody, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    console.log('팔로우 오류', error);
    throw error;
  }
};

export const deleteUnfollow = async (targetId: number) => {
  const requestBody = {
    targetId: targetId,
  };
  const accessToken = localStorage.getItem('accessToken');
  console.log('언팔로우');
  try {
    const response = await api.delete(`/follow/unfollowing`, {
      data: requestBody,
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });

    return response.data.result;
  } catch (error) {
    console.log('언팔로우 오류', error);
    throw error;
  }
};
