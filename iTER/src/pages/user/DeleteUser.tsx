import { useState } from "react";
import { B2, Headline3, Caption2 } from "../../component/Font";
import Top from "../../component/layout/Top";
import { styled } from "../../../stitches.config";
import CheckCircle from "../../assets/icon/CheckCircle.svg?react";

const DeleteUser = () => {
    const [check, setCheck] = useState<boolean>(false);

    return (
        <>
        <Cover>
            <Top title="회원탈퇴" />
            <Text>
                <Headline3>ITer를 떠나신다니 너무 아쉬워요</Headline3>
                <Mini>
                    <B2>ITer에서 작성한 모든 글과 활동 내역이 사라져요. <br />삭제된 정보는 다시 복구할 수 없어요.</B2>
                </Mini>
                <Mini2>
                    <B2>탈퇴하려는 이유를 모두 선택해주세요. <br />제품 개선에 활용하겠습니다.</B2>
                </Mini2>

                <Terms onClick={() => setCheck(!check)} check={check}>
                    <CheckCircle fill={check ? '#8787F4' : '#C1C4CC'} />
                    <Caption2>탈퇴하고 다시 가입할래요</Caption2>
                </Terms>

                <Terms onClick={() => setCheck(!check)} check={check}>
                    <CheckCircle fill={check ? '#8787F4' : '#C1C4CC'} />
                    <Caption2>제가 찾는 제품이 없어요</Caption2>
                </Terms>

                <Terms onClick={() => setCheck(!check)} check={check}>
                    <CheckCircle fill={check ? '#8787F4' : '#C1C4CC'} />
                    <Caption2>ITer를 자주 사용하지 않아요</Caption2>
                </Terms>

                <Terms onClick={() => setCheck(!check)} check={check}>
                    <CheckCircle fill={check ? '#8787F4' : '#C1C4CC'} />
                    <Caption2>제공받는 혜택이 부족해요</Caption2>
                </Terms>

                <Terms onClick={() => setCheck(!check)} check={check}>
                    <CheckCircle fill={check ? '#8787F4' : '#C1C4CC'} />
                    <Caption2>전문가 등업이 너무 어려워요</Caption2>
                </Terms>

                <Terms onClick={() => setCheck(!check)} check={check}>
                    <CheckCircle fill={check ? '#8787F4' : '#C1C4CC'} />
                    <Caption2>다른 서비스를 이용하고 싶어요</Caption2>
                </Terms>

            

            </Text>
        </Cover>
        </>
    );
};

export default DeleteUser;

const Cover = styled("div", {
    width: "390px",
    height: "844px",
});

const Text = styled("div", {
    position: "relative",
    top: "158px",
    left: "30px",
})

const Mini = styled("div", {
    marginTop: "20px",
})

const Mini2 = styled("div", {
    position: "relative",
    marginTop: "253px",
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
  