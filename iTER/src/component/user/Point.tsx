import Heart from "../../assets/icon/MyPointHeart.svg";
import Scrap from "../../assets/icon/ScrapMyPoint.svg";
import { styled } from "../../../stitches.config";

const PointLay = () => {
    const score = [
        { title: "현재 포인트" , score:"234점" },
        { title: "작성한 리뷰" , score:"8개" },
        { title: "IT 퀴즈" , score:"21개" },
        { title: "리뷰 반응" , score: (<div style={{display: "flex", alignItems:"center"}}><img src={Heart} alt="heart" width={22} height={22} style={{marginRight: "3px"}}/> {"15"} <img src={Scrap} alt="scrap" width={22} height={22} style={{marginLeft: "10px"}} /> {"3"}</div>) },
    ];

    return (
        <>
            {score.map((item, index) => (
                <Item key={index}>
                    <Container>
                        <TitleContainer isCurrentPoint={item.title === "현재 포인트"}>
                            {item.title}
                        </TitleContainer>
                        <ScoreContainer isCurrentScore={item.score === "234점"}>
                            {item.score}
                        </ScoreContainer>
                    </Container>
                </Item>
            ))}
        </>
    )
}

export default PointLay;

const Container = styled("div", {
    width: "300px",
});

const Item = styled("div", {
    bodyText: 1,
    display: "flex",
    marginBottom: "8px"
});

const TitleContainer = styled("div", {
    float: "left",
    variants: {
        isCurrentPoint: {
            true: {
                color: "#24292F", 
            },
            false: {
                color: "#8E9198", 
            },
        },
    },
});

const ScoreContainer = styled("div", {
    float: "right",
    variants: {
        isCurrentScore: {
            true: {
                color: "#24292F", 
            },
            false: {
                color: "#8E9198", 
            },
        },
    },
});

