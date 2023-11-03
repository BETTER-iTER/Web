import { useState } from "react";
import { Caption2, LabelText } from "../../component/Font";
import { styled } from "../../../stitches.config";
import ButtonGrid from "../../component/review/ButtonGrid";
import ImageUpload from "../../component/review/ImageUpload";
import StarRating from "../../component/review/StarRating";
import TextInput from "../../component/review/TextInput";
import WriteUser from "../../component/review/WriteUser";
import User from "../../assets/icon/User.svg";
import CheckCircle from '../../assets/icon/CheckCircle.svg?react';

const ReviewStar = ({ onDisabled }: { onDisabled: (value: boolean) => void }) => {
  const items1 = ['가벼워요', '적당해요', '무거워요'];
  const items2 = ['저렴해요', '적당해요', '비싸요'];
  const items3 = ['별로에요', '무난해요', '예뻐요'];


  const [rating, setRating] = useState<number>(0); //이건 별점
  const [check, setCheck] = useState<boolean>(false); //이건 체크 했나 안했나
  const [selectedImage, setSelectedImage] = useState<File | null>(null); //이건 선택한 이미지
  const [selectedItem1, setSelectedItem1] = useState<string | null>(null); //이건 무게
  const [selectedItem2, setSelectedItem2] = useState<string | null>(null); //이건 가격
  const [selectedItem3, setSelectedItem3] = useState<string | null>(null); //이건 디자인

  onDisabled
  const handleImageSelected = (image: File) => {
    console.log('Selected image:', image);
    setSelectedImage(image);
    // 여기에서 선택한 이미지를 업로드하거나 다른 작업을 수행할 수 있습니다.
  };

  const handleStarClick = (star: number) => {
    setRating(star);
  };

  const handle1Click = (item: string) => {
    setSelectedItem1(item);
  };

  const handle2Click = (item: string) => {
    setSelectedItem2(item);
  };

  const handle3Click = (item: string) => {
    setSelectedItem3(item);
  };

  return (
    <>
    <Cover>
      <LabelText>사진 *</LabelText>
      <ImageUpload onImageSelected={handleImageSelected} />

      <br />
      <LabelText>한줄평 *</LabelText>
      <ButtonGrid items={items1} onButtonClick={handle1Click} />
      <ButtonGrid items={items2} onButtonClick={handle2Click} />
      <ButtonGrid items={items3} onButtonClick={handle3Click} />

      <LabelText>별점 *</LabelText>
      <StarRating totalStars={5} selectedStars={rating} onStarClick={handleStarClick} />

      <LabelText>좋은 점 *</LabelText>
      <TextInput limit={500} placeholder="좋았던 점을 입력해주세요"/>

      <LabelText>아쉬운 점 *</LabelText>
      <TextInput limit={500} placeholder="아쉬웠던 점을 입력해주세요"/>

      <LabelText>작성자 정보 *</LabelText>
      <WriteUser img={User} name="미키마우스 제리" job="개발자" />

      <LabelText>직접 사용한 제품에 대한 리뷰인가요? *</LabelText>
      <Terms onClick={() => setCheck(!check)} check={check}>
            <CheckCircle fill={check ? '#8787F4' : '#C1C4CC'} />
            <Caption2>네, 그리고 퐁당 리뷰 정책에도 동의합니다</Caption2>
        </Terms>
    </Cover>
    </>
  );
};

export default ReviewStar;

const Cover = styled("div", {
    height: "1292px",
    backgroundColor: "#FFF",
})

const Terms = styled('div', {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    gap: '4px',
    variants: {
      check: {
        true: {
          color: '$Gray50',
        },
        false: {
          color: '$Gray20',
        },
      },
    },
  });
  