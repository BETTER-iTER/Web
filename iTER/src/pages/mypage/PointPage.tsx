import Top from "../../component/layout/Top";
import { styled } from "../../../stitches.config";
import { Headline3 } from "../../component/Font";
import PointLay from "../../component/user/Point";
import { ButtonBlack, ButtonPoint } from "../../component/common/Button";
import { ModalMyPoint } from "../../component/common/Modal";
import { useState } from "react";

const PointPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
        console.log("탈퇴처리");
      };

      const closeModalNo = () => {
        setIsModalOpen(false);
      };

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
            <Play>
                <PointLay />
            </Play>
            <ButtonLay>
                <ButtonPoint onClick={openModal}>
                    전문가 등급이 되려면?
                </ButtonPoint>
            </ButtonLay>

            {isModalOpen && (
                <ModalMyPoint text="gd" onClosed={closeModalNo} onClick={closeModal} />
            )}
        </>
    )
}

export default PointPage;

const ButtonLay = styled("div", {
    marginLeft: "25px",
    marginTop: "41px",
})
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

const Play = styled("div", {
    marginTop: "31px",
    marginLeft: "30px",
   
})