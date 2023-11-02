import { LabelText } from "../../component/Font";
import ImageUpload from "../../component/review/ImageUpload";

const ReviewStar = ({onDisabled}: {onDisabled: (value: boolean) => void}) => {
    onDisabled
    const handleImageSelected = (image: File) => {
        console.log('Selected image:', image);
        // 여기에서 선택한 이미지를 업로드하거나 다른 작업을 수행할 수 있습니다.
      };
    return (
        <>
            <LabelText>사진 *</LabelText>
            <ImageUpload onImageSelected={handleImageSelected} />
        </>
    );
};

export default ReviewStar;