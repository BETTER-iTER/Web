import Top from "../../component/layout/Top";
import { styled } from "../../../stitches.config";
import Button from "../../component/common/Button";
import { useState } from "react";
import { ButtonText } from "../../component/Font";
import CheckCategory from "./CheckCategory";
import WriteDetail from "./WriteDetail";
import ReviewStar from "./ReviewStar";

const ReviewWrite = () => {
    const [count, setCount] = useState<number>(1);
    const [disabled, setDisabled] = useState<boolean>(true);

    const handleNext = () => {
        if (count < 3) {
          setCount(count + 1);
        } else {
          console.log('회원가입 완료');
        }
      };
      const onDisabled = (value: boolean) => {
        setDisabled(value);
      };


    const title =`리뷰 작성 (${count}/3)`
    return (
        <>
        <Top
        title={title}
        back={count > 1 ? () => { setCount(count - 1); } : undefined}
        />
        {count === 1 ? (
            <CheckCategory onDisabled={onDisabled} />
        ) : count === 2 ? (
            <WriteDetail onDisabled={onDisabled} />
        ): count === 3? (
            <ReviewStar onDisabled={onDisabled} />
        ): null}
        
        {/* <InfoMessage>
            <ButtonText>카테고리를 선택해주세요</ButtonText>
        </InfoMessage>
        <CategoryBox>
            {CategoryList.map((category) => (
                <Category
                    key={category.id}
                    name={category.name}
                    onClick={() => console.log('click')}
                    isSelected={false}
                    gap={4}
                    id={category.id}
                />
            ))}
        </CategoryBox> */}
        
        <BtnLay>
            <Button
                disabled={false}
                onClick={() => { handleNext(); }}
            >
                다음
            </Button>
        </BtnLay>
        </>
    );
};
export default ReviewWrite;


const BtnLay = styled("div", {
    position: 'fixed',
    bottom: '20px',
    paddingLeft: "25px",
})

