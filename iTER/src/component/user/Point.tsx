import Heart from "../../assets/icon/Heart.svg";
import Scrap from "../../assets/icon/Scrap.svg";
import { styled } from "../../../stitches.config";

const PointLay = () => {
    const score = [
        { title: "현재 포인트" , score:"234점" },
        { title: "작성한 리뷰" , score:"8개" },
        { title: "IT 퀴즈" , score:"21개" },
        { title: "현재 포인트" , score:"234점" },
        { title: "리뷰 반응" , score: <img src={Heart} alt="heart" width={22} height={22} /> + "15" + <img src={Scrap} alt="scrap" width={22} height={22} /> + "3" },
    ];

    return (
        <>
            {score.map((item, index) => (
                <Item key={index}>
                    {item.title}
                    {item.score}
                </Item>
            ))}
        </>
    )
}

export default PointLay;

const Item = styled("div", {
    bodyText: 1,
})