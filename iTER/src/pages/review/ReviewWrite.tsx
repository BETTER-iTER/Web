import Top from "../../component/layout/Top";
import { styled } from "../../../stitches.config";
import Button from "../../component/common/Button";
import Category from "../../component/search/Category";
import { useState } from "react";
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

    return (
        <>
        <Top
        title="리뷰작성"
        back={count > 1 ? () => { setCount(count - 1); } : undefined}
        />

        {/* <Category /> */}

        <Button
            disabled={disabled}
            onClick={() => { handleNext(); }}
        >
            다음
        </Button>
        </>
    );
};
export default ReviewWrite;