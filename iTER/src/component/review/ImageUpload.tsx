import React, { useState, ChangeEvent, useRef } from 'react';
import { styled } from '../../../stitches.config';
import Xbtn from '../../assets/icon/Xbtn.svg?react';
import Plus from '../../assets/icon/Plus.svg?react';

interface ImageUploadProps {
  onImageSelected: (image: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelected }) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImages([...selectedImages, file]);
      onImageSelected(file);
    }
  };

  const handleImagePreviewClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageDelete = (index: number) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
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
        <ImageGallery>
          {selectedImages.map((image, index) => (
            <ImageContainer key={index}>
              <XbtnContainer onClick={() => handleImageDelete(index)}>
                <Xbtn />
              </XbtnContainer>
              <img
                src={URL.createObjectURL(image)}
                alt="Selected"
                width={100}
              />
            </ImageContainer>
          ))}
          <Pluscover>
            <Cover>
                <Plus width="24px" height="24px" />
            </Cover>
          </Pluscover>
        </ImageGallery>
      </div>
    </div>
  );
};

export default ImageUpload;

const ImageGallery = styled("div", {
  display: "flex",
  flexDirection: "row",
});

const ImageContainer = styled("div", {
  width: "120px",
  height: "120px",
  backgroundColor: "$Gray10",
  margin: "0 10px", 
  position: 'relative',
  textAlign: "center",
  alignItems: "center",
});

const XbtnContainer = styled("div", {
  position: "absolute",
  top: "0",
  right: "0",
  cursor: "pointer",
});

const Pluscover = styled("div", {
  marginBottom: "-20px",
  width: "120px",
  height: "120px",
  backgroundColor: "$Gray10",
});

const Cover = styled("div", {
    textAlign: "center",
    marginTop: "45px",
})