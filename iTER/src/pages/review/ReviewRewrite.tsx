import axios from 'axios';
import { useEffect } from 'react';
import { styled } from '../../../stitches.config';
import { Input, InputComponentReiview, InputRe } from '../../component/common/Input';
import { useState } from 'react';
import { B1 } from '../../component/Font';
import { ButtonSelect } from '../../component/common/Button';
import ReviewSort from '../../component/review/ReviewSort';
import DateComponent from '../../component/review/Date';
import SpecPopup from '../../component/review/SpecPopup';
import RadioInput, { RadioInputRe } from '../../component/common/RadioInput';
import { Caption2, LabelText } from '../../component/Font';
import Xbtn from '../../assets/icon/Xbtn.svg?react';
import Plus from '../../assets/icon/Plus.svg?react';
import { useRef, ChangeEvent } from 'react';
import { Caption1 } from '../../component/Font';
import ButtonGrid from '../../component/review/ButtonGrid';
import StarRating from '../../component/review/StarRating';
import TextInput, { TextInputRe } from '../../component/review/TextInput';
import Top from '../../component/layout/Top';
import Button from '../../component/common/Button';

const ReviewRewrite = () => {
  const items1 = [
    { data: '가벼워요', id: 0 },
    { data: '적당해요', id: 1 },
    { data: '무거워요', id: 2 },
  ];

  const items2 = [
    { data: '저렴해요', id: 3 },
    { data: '적당해요', id: 4 },
    { data: '비싸요', id: 5 },
  ];

  const items3 = [
    { data: '별로에요', id: 6 },
    { data: '무난해요', id: 7 },
    { data: '예뻐요', id: 8 },
  ];
  const [productName_re, setProductName] = useState<string>('');
  const [reviewDetails, setReviewDetails] = useState<string>('');
  const [imageSrcs, setImageSrcs] = useState<string[]>([]);
  const [selectedSortItem, setSelectedSortItem] = useState<string | null>(null);
  const [sortBottom, setSortBottom] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [price_re, setPrice] = useState<number | string>('');
  const [selectedCPU, setSelectedCPU] = useState<string | null>(null);
  const [selectedWINDOW, setSelectedWINDOW] = useState<string | null>(null);
  const [selectedRAM, setSelectedRAM] = useState<string | null>(null);
  const [selectedSIZE, setSelectedSIZE] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const options = ['공식홈페이지', '쿠팡', '학생복지스토어', '기타'];
  const [compareProduct, setCompareProduct] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null); //이건 선택한 이미지
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [shortReview, setShortReview] = useState<string[]>([]);
  const [rating, setRating] = useState<number>(0); //이건 별점
  const [selectedRadioOption, setSelectedRadioOption] = useState<number | null>(null);
  const [Data, setData] = useState(null);

  interface Data {
    badPoint?: string;
    goodPoint?: string;
    boughtAt?: string;
    comparedProductName?: string;
    manufacturer?: string;
    price?: number;
    productName?: string;
    starPoint?: number;
    storeName?: string;
  }

  const {
    badPoint,
    goodPoint,
    boughtAt,
    comparedProductName,
    manufacturer,
    price,
    productName,
    starPoint,
    storeName,
  }: Data = Data ?? {};

  const handleProductNameChange = (event: string) => {
    setProductName(event);
    console.log(productName_re);
  };

  const handleSortItemSelected = (selectedItem: string) => {
    setSelectedSortItem(selectedItem);
  };

  const handleSortDateSelected = (date: Date | null) => {
    setSelectedDate(date);
    const formattedDate = date?.toISOString().split('T')[0];
    console.log(formattedDate);
  };

  const handleChangePrice = (event: string) => {
    const priceAsInt: number = parseInt(event, 10); // 10진수로 변환
    setPrice(priceAsInt);
    // localStorage.setItem('price', event);
    // const newData = { price: priceAsInt };
    // updateFormData(newData);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const handleSelectionComplete = (
    cpu: string | null,
    window: string | null,
    ram: string | null,
    size: string | null
  ) => {
    setSelectedCPU(cpu);
    setSelectedWINDOW(window);
    setSelectedRAM(ram);
    setSelectedSIZE(size);
  };

  handleSelectionComplete;

  const handleCompareProductValue = (event: string) => {
    setCompareProduct(event);
    // localStorage.setItem('compareProduct', event);
    //비교제품 입력받기
    // const newData = { comparedProductName: event };
    // updateFormData(newData);
  };

  const handleImageSelected = (image: File) => {
    console.log('Selected image:', image);
    setSelectedImage(image);
  };

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImages((prevImages) => [...prevImages, file]);

      //   const newData = { files: [...selectedImages, file] };
      //   updateImageData(newData);
    }
    // console.log(imageData);
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

  const handle1Click = (item: { data: string; id: number }) => {
    shortReview[0] = item.data;
    // updateFormData(newData2);
    // console.log(newData2);
  };

  const handle2Click = (item: { data: string; id: number }) => {
    shortReview[1] = item.data;
    // updateFormData(newData3);
    // console.log(newData3);
  };

  const handle3Click = (item: { data: string; id: number }) => {
    shortReview[2] = item.data;
    // updateFormData(newData4);
    // console.log(newData4);
    console.log(shortReview);
  };

  const handleStarClick = (star: number) => {
    const starPointAsDouble: number = parseFloat((star - 0.5).toFixed(1));
    setRating(star);
    console.log(starPointAsDouble);
    // const newData = { starPoint: starPointAsDouble };
    // updateFormData(newData);
  };

  const handleRadioChange = (selectedValue: number | null) => {
    setSelectedRadioOption(selectedValue);
    // 여기에서 다른 작업 수행 가능
    console.log(selectedRadioOption);
  };

  const reviewData = async () => {
    try {
      const currentURL = window.location.href;

      const match = currentURL.match(/\d+$/);
      const extractedNumber = match ? parseInt(match[0]) : null;
      const token = localStorage.getItem('accessToken');
      const response = await axios.get(
        `https://dev.betteritem.store/review/${extractedNumber}/detail`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      //   setData(response.data.result.reviewDetail);
      //   console.log(data);
      setData(response.data.result.reviewDetail);
      console.log(response.data.result.reviewDetail);
      console.log(Data);
      //localStorage.setItem('reviewReCate', response.data.result.reviewDetail.category);
    } catch (error) {
      console.log(error);
    }
  };
  const handleReviewWrite = async () => {
    try {
      const currentURL = window.location.href;

      const match = currentURL.match(/\d+$/);
      const extractedNumber = match ? parseInt(match[0]) : null;
      const token = localStorage.getItem('accessToken');
      const response = await axios.put(`https://dev.betteritem.store/review/${extractedNumber}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    reviewData();
  }, []);
  return (
    <>
      <Top title={'리뷰수정'} />
      <MainLay>
        <InputRe
          placeholder="제품명을 입력해 주세요"
          type="text"
          labelName="제품명 *"
          text={productName_re == '' ? productName : productName_re}
          onChange={handleProductNameChange}
        />

        <div style={{ marginTop: 20 }} />

        <B1>제조사 *</B1>
        <div style={{ marginTop: 10 }} />
        <ButtonSelect
          children={selectedSortItem == null ? manufacturer : selectedSortItem}
          onClick={() => setSortBottom(!sortBottom)}
        />
        <div style={{ marginTop: 20 }} />

        <B1>구매일</B1>
        <div style={{ marginTop: 10 }} />
        <DateComponent
          selectedDate={selectedDate === null ? Number(boughtAt) : selectedDate}
          onDateChange={handleSortDateSelected}
        />
        <div style={{ marginTop: 20 }} />

        <InputRe
          placeholder="₩ 금액을 입력해 주세요"
          type="text"
          labelName="금액"
          text={price_re == '' ? String(price) : price_re}
          onChange={handleChangePrice}
        />

        <div style={{ marginTop: 20 }} />

        <B1>제품 스펙</B1>
        <div style={{ marginTop: 10 }} />
        <ButtonSelect
          children={
            selectedCPU == null
              ? '제품 스펙을 선택하세요'
              : selectedCPU + '/' + selectedWINDOW + '/' + selectedRAM + '/' + selectedSIZE
          }
          onClick={openPopup}
        />
        {isPopupOpen && (
          <SpecPopup
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            onSelectionComplete={handleSelectionComplete}
          />
        )}

        <div style={{ marginTop: 20 }} />

        <RadioInputRe label="구매처 *" options={options} onOptionChange={handleRadioChange} />

        <div style={{ marginTop: 20 }} />

        <InputRe
          placeholder="제품명을 입력해 주세요"
          type="text"
          labelName="비교 제품"
          text={compareProduct == '' ? comparedProductName : compareProduct}
          onChange={handleCompareProductValue}
        />

        <Picture>
          <LabelText>사진 *</LabelText>
          <div style={{ marginTop: '10px' }} />
          <Container>
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
                <Pluscover>
                  <Cover>
                    <Plus width="24px" height="24px" />
                  </Cover>
                  <Caption1>
                    <Count>({selectedImages.length}/5)</Count>
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
        </Picture>

        <OneLine>
          <LabelText>한줄평 *</LabelText>
          <div style={{ marginTop: '11px' }} />

          <ButtonCover>
            <div style={{ height: '30px' }}>
              <ButtonGrid items={items1} onButtonClick={handle1Click} />
            </div>
            <div style={{ height: '30px', marginTop: '10px' }}>
              <ButtonGrid items={items2} onButtonClick={handle2Click} />
            </div>
            <div style={{ height: '30px', marginTop: '10px' }}>
              <ButtonGrid items={items3} onButtonClick={handle3Click} />
            </div>
          </ButtonCover>
        </OneLine>

        <Rating>
          <LabelText>별점 *</LabelText>
          <Star>
            <div style={{ marginTop: '11px' }} />
            <StarRating
              totalStars={5}
              selectedStars={rating == 0 ? starPoint + 0.5 : rating}
              onStarClick={handleStarClick}
            />
          </Star>
        </Rating>

        <Like>
          <LabelText>좋은 점 *</LabelText>
          <div style={{ marginTop: '11px' }} />
          <TextInputRe
            limit={500}
            placeholder="좋았던 점을 입력해주세요"
            type="good"
            textS={goodPoint}
          />
        </Like>

        <NotGood>
          <LabelText>아쉬운 점 *</LabelText>
          <div style={{ marginTop: '11px' }} />
          <TextInputRe
            limit={500}
            placeholder="아쉬웠던 점을 입력해주세요"
            type="bad"
            textS={badPoint}
          />
        </NotGood>
        <div style={{ paddingBottom: '110px' }} />
        <BtnLay>
          <Button
            disabled={false}
            onClick={() => {
              handleReviewWrite();
            }}
          >
            리뷰 수정
          </Button>
        </BtnLay>
      </MainLay>
      {sortBottom && (
        <ReviewSort
          onClose={() => {
            setSortBottom(false);
          }}
          onSortItemSelected={handleSortItemSelected}
        />
      )}
    </>
  );
};

export default ReviewRewrite;

const MainLay = styled('div', {
  marginLeft: '25px',
  marginTop: '44px',
  height: '1000px',
});

const Picture = styled('div', {
  marginTop: '20px',
});

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

const OneLine = styled('div', {
  marginTop: '31px',
});

const ButtonCover = styled('div', {
  width: '330px',
});

const Rating = styled('div', {
  marginTop: '30px',
});

const Star = styled('div', {
  width: '340px',
  marginLeft: '40px',
});

const Like = styled('div', {
  marginTop: '30px',
});

const NotGood = styled('div', {
  marginTop: '35px',
});

const BtnLay = styled('div', {
  position: 'fixed',
  bottom: '20px',
  marginLeft: '10px',
});
