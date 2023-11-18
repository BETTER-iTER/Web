import Top from "../../component/layout/Top";
import { styled } from "../../../stitches.config";
import { Headline3 } from "../../component/Font";
import PointLay from "../../component/user/Point";

const PointPage = () => {
    return (
        <>
            <Top title="내 포인트" />
            <RankLay>
                <Headline3>
                    블루투스 하트
                </Headline3>
                <MText>님은</MText>
                <Headline3>
                     일반 유저
                </Headline3>
                입니다.
            </RankLay>
            <PointLay />
        </>
    )
}

export default PointPage;

const RankLay = styled("div", {
    marginLeft: "30px",
    marginTop: "64px",
    display: "flex",
    color: "#24292F",
    fontSize: "20px",
    fontWeight: "400",
    letterSpacing: "-0.4px",
})

const MText = styled("div", {
    marginRight: "5px",
})