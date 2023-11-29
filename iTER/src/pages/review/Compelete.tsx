import { Headline3 } from "../../component/Font"
import { styled } from "../../../stitches.config"

const Compelete = ({onDisabled} : {onDisabled: (value :boolean ) => void}) => {
    onDisabled
    return (
        <>
            <Text>
                <Headline3>리뷰 작성 완료!</Headline3>
            </Text>
        </>
    );
};

export default Compelete;

const Text = styled("div", {
    color: "$Brand",
    textAlign: "center",
    width: "390px",
    top: "360px",
    position: "absolute",
})
