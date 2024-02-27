import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import { styled } from '../../../stitches.config';
import Xbtn from '../../assets/icon/Xbtn.svg?react';
import Plus from '../../assets/icon/Plus.svg?react';
import { Caption1 } from '../Font';
import { useData } from '../../context/DataContext';

interface ImageUploadProps {
  onImageSelected: (image: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelected }) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { updateImageData } = useData();
  const { imageData } = useData();

  useEffect(() => {
    console.log('선택된 이미지파일들:', selectedImages);
  }, [selectedImages, updateImageData]);

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImages((prevImages) => [...prevImages, file]);
      onImageSelected(file);
      const newData = { files: [...selectedImages, file] };
      updateImageData(newData);
    }
    console.log(imageData);
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
    <Container>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <div onClick={handleImagePreviewClick} style={{ cursor: 'pointer', position: 'relative' }}>
        <ImageGallery>
          <Pluscover>
            <Cover>
              <Plus width="24px" height="24px" />
            </Cover>
            <Caption1>
              <Count>(1/5)</Count>
            </Caption1>
          </Pluscover>
          {selectedImages.map((image, index) => (
            <ImageContainer key={index}>
              <XbtnContainer onClick={() => handleImageDelete(index)}>
                <Xbtn />
              </XbtnContainer>
              <img src={URL.createObjectURL(image)} alt="Selected" width={100} height={100} />
            </ImageContainer>
          ))}
        </ImageGallery>
      </div>
    </Container>
  );
};

export default ImageUpload;

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflow: 'hidden',
});

const ImageGallery = styled('div', {
  display: 'inline-flex',
  height: '100px',
  width: '100%',
  overflowX: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

const ImageContainer = styled('div', {
  width: '100px',
  minWidth: '100px',
  height: '100px',
  backgroundColor: '#EAEEF2',
  margin: '0 10px',
  position: 'relative',
  textAlign: 'center',
  alignItems: 'center',
  overflow: 'hidden',
});

const XbtnContainer = styled('div', {
  position: 'absolute',
  top: '0',
  right: '0',
  cursor: 'pointer',
  width: '14px',
  height: '14px',
  borderRadius: '50%',
  backgroundColor: '#D9D9D9',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '4px',
});

const Pluscover = styled('div', {
  marginBottom: '-20px',
  width: '100px',
  minWidth: '100px',
  height: '100px',
  backgroundColor: '#EAEEF2',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Cover = styled('div', {
  textAlign: 'center',
  marginTop: '29px',
  height: '24px',
});

const Count = styled('span', {
  color: '#AFB8C1',
});
