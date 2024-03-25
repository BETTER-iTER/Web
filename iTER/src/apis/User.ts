import api from '.';

export const postFollow = async (targetId: number) => {
  const requestBody = {
    targetId: targetId,
  };
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await api.post(`/follow/following`, requestBody, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    throw error;
  }
};

export const deleteUnfollow = async (targetId: number) => {
  const requestBody = {
    targetId: targetId,
  };
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await api.delete(`/follow/unfollowing`, {
      data: requestBody,
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });

    return response.data.result;
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async (userId: number, page: number) => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await api.get(`/mypage/profile/${userId}/${page}`, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    throw error;
  }
};

export const putEditCategory = async (category: string[]) => {
  const requestBody = {
    category: category,
  };
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await api.put(`/mypage/category`, requestBody, {
      headers: {
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    throw error;
  }
};

export const putEditProfile = async (data: FormData) => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await api.put(`/mypage/profile`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: accessToken ? `${accessToken}` : '',
      },
    });
    return response.data.result;
  } catch (error) {
    throw error;
  }
};
