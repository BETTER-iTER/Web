import { Headline3 } from '../../component/Font';
import { styled } from '../../../stitches.config';
import { useEffect } from 'react';
import { useData } from '../../context/DataContext';
import axios from 'axios';

const Compelete = ({ onDisabled }: { onDisabled: (value: boolean) => void }) => {
  const { formData } = useData();
  const { imageData } = useData();

  //   const imageUrls = [
  //     'https://www.backmarket.co.kr/_next/image?url=%2Fnode_upload%2Fresized_images%2Fsave_image%2F466x466_1116061309_637400e58ef9f.jpeg&w=1080&q=75',
  //     'https://www.backmarket.co.kr/_next/image?url=https%3A%2F%2Fwww.backmarket.co.kr%2Fhtml%2Fupload%2Fsave_image%2F36827_1.jpg&w=1080&q=75',
  //     'https://www.backmarket.co.kr/_next/image?url=%2Fnode_upload%2Fresized_images%2Fsave_image%2F466x466_36827_2.jpg&w=1080&q=75',
  //   ];

  useEffect(() => {
    // const newData = { images: imageUrls };
    // updateFormData(newData);

    console.log('formdata:', formData);

    const postReview = async () => {
      try {
        const token = localStorage.getItem('accessToken');

        const response = await axios.post(
          `https://dev.betteritem.store/review`,
          { review: formData, imageData },
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        console.log(response);
        localStorage.setItem('addReviewId', response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    postReview();
  }, []);
  onDisabled;
  return (
    <>
      <Text>
        <Headline3>리뷰 작성 완료!</Headline3>
      </Text>
    </>
  );
};

export default Compelete;

const Text = styled('div', {
  color: '$Brand',
  textAlign: 'center',
  width: '390px',
  top: '360px',
  position: 'absolute',
});
