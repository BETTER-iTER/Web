import { Headline3 } from '../../component/Font';
import { styled } from '../../../stitches.config';
import { useEffect } from 'react';
import { useData } from '../../context/DataContext';
import axios from 'axios';

const Complete = ({ onDisabled }: { onDisabled: (value: boolean) => void }) => {
  const { formData, imageData } = useData();

  useEffect(() => {
    console.log('formData:', formData);
    console.log('imageData:', imageData);

    const postReview = async () => {
      try {
        const token = localStorage.getItem('accessToken');

        // 1. FormData 객체 생성
        const formDataForUpload = new FormData();

        // 2. 'review' 키에 formData 추가 (JSON 문자열로 변환)
        formDataForUpload.append(
          'review',
          new Blob([JSON.stringify(formData)], { type: 'application/json' })
        );

        // 3. 'files' 키에 이미지 파일들 추가
        for (const file of imageData.files) {
          const imageBlob = await fetch(URL.createObjectURL(file)).then((r) => r.blob());
          formDataForUpload.append('files', imageBlob, file.name);
          console.log('Dsd', formDataForUpload);
        }

        // 4. 서버로 FormData 전송
        const response = await axios.post(
          `https://dev.betteritem.store/review`,
          formDataForUpload,
          {
            headers: {
              Authorization: `${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        console.log(response);
        console.log('Dsd', formDataForUpload);
        localStorage.setItem('addReviewId', response.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    postReview();
  }, [formData, imageData]);

  onDisabled;

  return (
    <>
      <Text>
        <Headline3>리뷰 작성 완료!</Headline3>
      </Text>
    </>
  );
};

export default Complete;

const Text = styled('div', {
  color: '$Brand',
  textAlign: 'center',
  width: '390px',
  top: '360px',
  position: 'absolute',
});
