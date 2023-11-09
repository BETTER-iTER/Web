import React, { useState, ChangeEvent, useRef } from 'react';
import { styled } from '../../../stitches.config';
import Xbtn from '../../assets/icon/Xbtn.svg?react';
import Plus from '../../assets/icon/Plus.svg?react';
import { Caption1 } from '../Font';

interface ImageUploadProps {
  onImageSelected: (image: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelected }) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      // 이미 선택된 이미지 수 확인
      if (selectedImages.length < 5) {
        setSelectedImages([...selectedImages, file]);
        onImageSelected(file);
      } else {
        console.log("이미지 한도초과")
      }
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
        <PlusLay>
        <Pluscover>
            <Cover>
              <Plus width="24px" height="24px" />
              <ImageNumber>
                <Caption1>({selectedImages.length}/5)</Caption1>
              </ImageNumber>
            </Cover>
          </Pluscover>
          </PlusLay>
          <ImagesContainer>
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
          </ImagesContainer>
        </ImageGallery>
     
      </div>
    </div>
  );
};

export default ImageUpload;

const ImageGallery = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  overflowX: 'auto',
  maxWidth: '100%',
});

const ImagesContainer = styled('div', {
  display: 'flex', 
});

const ImageContainer = styled('div', {
  width: '120px',
  height: '120px',
  backgroundColor: '#EAEEF2',
  margin: '0 10px',
  position: 'relative',
  textAlign: 'center',
  alignItems: 'center',
});

const XbtnContainer = styled('div', {
  position: 'absolute',
  top: '0',
  right: '0',
  cursor: 'pointer',
  marginRight: '4px',
  marginTop: '2px',
});

const Pluscover = styled('div', {
  width: '120px',
  height: '120px',
  backgroundColor: '#EAEEF2',
});

const Cover = styled('div', {
  position: "relative",
  top: "41px",
  left: "50px",
  width: "100%",
  height: "100%",
});

const PlusLay = styled("div", {
  width: "120px",
  height: "120px",
});

const ImageNumber = styled("div", {
  marginTop: " -5px",
  color: "#AFB8C1",
  width: "28px",
  height: "18px",
})