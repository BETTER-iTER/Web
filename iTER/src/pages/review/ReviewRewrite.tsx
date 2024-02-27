import axios from 'axios';
import { useEffect } from 'react';

const ReviewRewrite = () => {
  const reviewData = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get('https://dev.betteritem.store/review/1/detail', {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    reviewData();
  }, []);
  return <></>;
};

export default ReviewRewrite;
