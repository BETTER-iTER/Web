import InputComponent from "../../component/common/Input"
import { styled } from "../../../stitches.config";
const WriteDetail = ({ onDisabled }: {onDisabled: (value: boolean) => void }) => {
    onDisabled
    return (
        <>
        <MainLay>
            <InputComponent
                placeholder="제품명을 입력해 주세요"
                type="text"
                labelName="제품명 *"
                btnName=""
            />

            <InputComponent
                placeholder="제조사를 선택해 주세요"
                type="text"
                labelName="제조사 *"
                btnName=""
            />

            <InputComponent
                placeholder="구매일을 입력해 주세요"
                type="text"
                labelName="구매일"
                btnName=""
            />

            <InputComponent
                placeholder="₩ 금액을 입력해 주세요"
                type="text"
                labelName="금액"
                btnName=""
            />

            <InputComponent
                placeholder="코어 i 5-13세대 / 14인치 / 32GB / 256-129GB"
                type="text"
                labelName="제품 스펙"
                btnName=""
            />
        </MainLay>
        </>
    );
};

export default WriteDetail;

const MainLay = styled("div", {
    marginLeft: "25px",
    marginTop: "44px",
})