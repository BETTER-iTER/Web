import { useState } from "react";
import { LabelText } from "../../component/Font";
import ButtonGrid from "../../component/review/ButtonGrid";
import ImageUpload from "../../component/review/ImageUpload";

const ReviewStar = ({onDisabled}: {onDisabled: (value: boolean) => void}) => {
    const items1 = ['가벼워요', '적당해요', '무거워요'];
    const items2 = ['저렴해요', '적당해요', '비싸요'];
    const items3 = ['별로에요', '무난해요', '예뻐요'];

    
    onDisabled
    const handleImageSelected = (image: File) => {
        console.log('Selected image:', image);
        // 여기에서 선택한 이미지를 업로드하거나 다른 작업을 수행할 수 있습니다.
      };
    return (
        <>
            <LabelText>사진 *</LabelText>
            <ImageUpload onImageSelected={handleImageSelected} />

            <LabelText>한줄평 *</LabelText>
            <ButtonGrid items={items1} onButtonClick={handle1Click} />
            <ButtonGrid items={items2} onButtonClick={handle2Click} />
            <ButtonGrid items={items3} onButtonClick={handle3Click} />


        </>

    );
};

export default ReviewStar;