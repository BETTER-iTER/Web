import React, { useState, ChangeEvent, useRef } from 'react';
import { styled } from '../../../stitches.config';
import Xbtn from '../../assets/icon/Xbtn.svg?react';

interface ImageUploadProps {
  onImageSelected: (image: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelected }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImage(file);
      onImageSelected(file);
    }
  };

  const handleImagePreviewClick = () => {
    // 클릭 시 파일 선택 대화상자 열기
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageDelete = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <div
        onClick={handleImagePreviewClick}
        style={{ cursor: 'pointer', position: 'relative' }}
      >
        <Div>
          {selectedImage && (
            <XbtnContainer onClick={handleImageDelete}>
              <Xbtn />
            </XbtnContainer>
          )}
        </Div>
        {selectedImage && (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            width={100}
          />
        )}
      </div>
    </div>
  );
};

export default ImageUpload;

const Div = styled("div", {
  width: "120px",
  height: "120px",
  backgroundColor: "$Gray10",
  position: 'relative',
});

const XbtnContainer = styled("div", {
  position: "absolute",
  top: "0",
  right: "0",
  cursor: "pointer",
});
