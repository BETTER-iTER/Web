import { useState, useEffect } from "react";
import { Caption2, LabelText } from "../../component/Font";
import { styled } from "../../../stitches.config";
import ButtonGrid from "../../component/review/ButtonGrid";
import ImageUpload from "../../component/review/ImageUpload";
import StarRating from "../../component/review/StarRating";
import TextInput from "../../component/review/TextInput";
import WriteUser from "../../component/review/WriteUser";
import User from "../../assets/icon/User.svg";
import CheckCircle from '../../assets/icon/CheckCircle.svg?react';
import { getUserInfo } from "../../apis/review";

const ReviewStar = ({ onDisabled }: { onDisabled: (value: boolean) => void }) => {

  useEffect(() => {
    const handleUserInfo = async () => {
        try {
            const responseData = await getUserInfo();
            const userData = responseData.data.result;
            setUserName(userData.nickName);
            setUserJob(userData.job);
            setUserImageUrl(userData.profileImage);
            setExpert(userData.expert);

        }
        catch(error) {
            console.log(error);
        }
    };
    handleUserInfo();
}, [])

  const [userName, setUserName] = useState<string>('');
  const [userJob, setUserJob] = useState<string>('');
  const [userImageUrl, setUserImageUrl] = useState<string>('');
  const [expert, setExpert] = useState<boolean>(false);
  const [shortReview, setShortReview] = useState<string[]>([]);
  
  const items1 = [
    { data: '가벼워요', id: 'light' },
    { data: '적당해요', id: 'moderate' },
    { data: '무거워요', id: 'heavy' },
  ];

  const items2 = [
    { data: '저렴해요', id: 'cheap' },
    { data: '적당해요', id: 'moderate' },
    { data: '비싸요', id: 'expensive' },
  ];

  const items3 = [
    { data: '별로에요', id: 'not_good' },
    { data: '무난해요', id: 'average' },
    { data: '예뻐요', id: 'good' },
  ];

  const [rating, setRating] = useState<number>(0); //이건 별점
  const [check, setCheck] = useState<boolean>(false); //이건 체크 했나 안했나
  const [selectedImage, setSelectedImage] = useState<File | null>(null); //이건 선택한 이미지
  

  onDisabled
  const handleImageSelected = (image: File) => {
    console.log('Selected image:', image);
    setSelectedImage(image);

  };

  const handleStarClick = (star: number) => {
    setRating(star);
    localStorage.setItem("starRating", String(star - 0.5));
  };

  const handle1Click = (item: { data: string; id: string }) => {
    shortReview[0] = item.data;
    localStorage.setItem("reviewShort", String(shortReview));
  };

  const handle2Click = (item: { data: string; id: string }) => {
    shortReview[1] = item.data;
    localStorage.setItem("reviewShort", String(shortReview));
  };

  const handle3Click = (item: { data: string; id: string }) => {
    shortReview[2] = item.data;
    localStorage.setItem("reviewShort", String(shortReview));
  };
  

  return (
    <>
    <Cover>
      <Picture>
        <LabelText>사진 *</LabelText>
        <div style={{ marginTop: "10px" }} />
        <ImageUpload onImageSelected={handleImageSelected} />
      </Picture>

      <br />
      <OneLine>
        <LabelText>한줄평 *</LabelText>
        <div style={{ marginTop: "11px" }} />
        
        <ButtonCover>
            <div style={{ height: "30px" }}>
            <ButtonGrid items={items1} onButtonClick={handle1Click} />
            </div>
            <div style={{ height: "30px", marginTop: "10px" }}>
            <ButtonGrid items={items2} onButtonClick={handle2Click} />
            </div>
            <div style={{ height: "30px", marginTop: "10px" }}>
            <ButtonGrid items={items3} onButtonClick={handle3Click} />
            </div>
        </ButtonCover>
      </OneLine>

      <Rating>
        <LabelText>별점 *</LabelText>
        <Star>
            <div style={{ marginTop: "11px" }} />
            <StarRating totalStars={5} selectedStars={rating} onStarClick={handleStarClick} />
        </Star>
      </Rating>

      <Like>
        <LabelText>좋은 점 *</LabelText>
        <div style={{ marginTop: "11px" }} />
        <TextInput
          limit={500}
          placeholder="좋았던 점을 입력해주세요"
          type = "good"
        />
      </Like>

      <NotGood>
        <LabelText>아쉬운 점 *</LabelText>
        <div style={{ marginTop: "11px" }} />
        <TextInput 
          limit={500} 
          placeholder="아쉬웠던 점을 입력해주세요"
          type = "bad"
          />
      </NotGood>

      <UserInfo>
        <LabelText>작성자 정보 *</LabelText>
        <div style={{ marginTop: "11px" }} />
        <WriteUser img={userImageUrl} name={userName} job={userJob} />
      </UserInfo>

      <Agree>
        <LabelText>직접 사용한 제품에 대한 리뷰인가요? *</LabelText>
        <div style={{ marginTop: "11px" }} />
        <Terms onClick={() => setCheck(!check)} check={check}>
                <CheckCircle fill={check ? '#8787F4' : '#C1C4CC'} />
                <Caption2>네, 그리고 퐁당 리뷰 정책에도 동의합니다</Caption2>
            </Terms>
       </Agree>
    </Cover>
    </>
  );
};

export default ReviewStar;

const Cover = styled("div", {
    height: "1292px",
    backgroundColor: "#FFF",
   marginLeft: "24px"
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
  
  const ButtonCover = styled("div", {
   
  width: "330px",
  })

  const Picture = styled("div", {
    marginTop: "20px"
  })

  const OneLine = styled("div", {
    marginTop: "31px"
  })

  const Rating = styled("div", {
    marginTop: "30px"
  })

  const Like = styled("div", {
    marginTop: "30px",
  })

  const NotGood = styled("div", {
    marginTop: "35px",
  })

  const UserInfo = styled("div", {
    marginTop: "35px",
  })

  const Agree = styled("div", {
    marginTop: "30px",
  })
const Star = styled("div", {
    width: "340px",
    marginLeft: "40px",
})