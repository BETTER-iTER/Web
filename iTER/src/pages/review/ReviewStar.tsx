import { useState } from "react";
import { LabelText } from "../../component/Font";
import ButtonGrid from "../../component/review/ButtonGrid";
import ImageUpload from "../../component/review/ImageUpload";
import StarRating from "../../component/review/StarRating";

const ReviewStar = ({ onDisabled }: { onDisabled: (value: boolean) => void }) => {
  const items1 = ['가벼워요', '적당해요', '무거워요'];
  const items2 = ['저렴해요', '적당해요', '비싸요'];
  const items3 = ['별로에요', '무난해요', '예뻐요'];

  const [rating, setRating] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<File | null>(null); // 초기값은 null로 설정
  const [selectedItem1, setSelectedItem1] = useState<string | null>(null);
  const [selectedItem2, setSelectedItem2] = useState<string | null>(null);
  const [selectedItem3, setSelectedItem3] = useState<string | null>(null);

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
      <LabelText>사진 *</LabelText>
      <ImageUpload onImageSelected={handleImageSelected} />

      <br />
      <LabelText>한줄평 *</LabelText>
      <ButtonGrid items={items1} onButtonClick={handle1Click} />
      <ButtonGrid items={items2} onButtonClick={handle2Click} />
      <ButtonGrid items={items3} onButtonClick={handle3Click} />

      <LabelText>별점 *</LabelText>
      <StarRating totalStars={5} selectedStars={rating} onStarClick={handleStarClick} />
      <p>선택 별점:{rating}</p>
    </>
  );
};

export default ReviewStar;
