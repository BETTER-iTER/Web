import React from "react";
import { Caption1, Headline4 } from "../Font";
import ButtonGrid from "./ButtonGrid"
import { styled } from "../../../stitches.config";

interface SelectBoxCPUProps {
    onCPUClick: (item: string) => void;
    onWINDOWClick: (item: string) => void;
    onRAMClick: (item: string) => void;
    onSIZEClick: (item: string) => void;
  }

  
export const SelectBoxCPU: React.FC <SelectBoxCPUProps> = ({ onCPUClick, onWINDOWClick, onRAMClick, onSIZEClick }) => {
    const itemsCPU = ['코어 i 5-13세대', '코어 i 7-12세대', '코어 i 5-12세대', '라이젠 7-5세대', '라이젠 5-4세대', '기타'];
    const itemsWINDOW = ['17인치', '16인치', '15인치', '14인치', '13인치', '기타'];
    const itemsRAM = ['64GB', '32GB', '16GB', '8GB', '4GB', '기타'];
    const itemsSIZE = ['1TB 초과', '1TB-513GB', '512-257GB', '256-129GB', '128-120GB', '기타'];

    const handleCPUClick = (item: string) => {
        console.log(`클릭한 버튼: ${item}`);
        onCPUClick(item);
      };
    const handleWINDOWClick = (item: string) => {
        console.log(`클릭한 버튼: ${item}`);
        onWINDOWClick(item);
      };
    const handleRAMClick = (item: string) => {
        console.log(`클릭한 버튼: ${item}`);
        onRAMClick(item);
      };
    const handleSIZEClick = (item: string) => {
        console.log(`클릭한 버튼: ${item}`);
        onSIZEClick(item);
      };

    return (
        <>
        <Cover>
            <Head>
                <Headline4>제품 스펙</Headline4>
            </Head>

            <CPUcover>
                <Caption1>* CPU 종류</Caption1>
                <div style={{ marginTop: 11 }} />
                <ButtonGrid items={itemsCPU} onButtonClick={handleCPUClick} />
            </CPUcover>

            <WINDOWcover>
                <Caption1>* 화면 크기</Caption1>
                <div style={{ marginTop: 11 }} />
                <ButtonGrid items={itemsWINDOW} onButtonClick={handleWINDOWClick} />
            </WINDOWcover>
            <RAMcover>
                <Caption1>* 램</Caption1>
                <div style={{ marginTop: 11 }} />
                <ButtonGrid items={itemsRAM} onButtonClick={handleRAMClick} />
            </RAMcover>
            <SIZEcover>
                <Caption1>* 저장 용량</Caption1>
                <div style={{ marginTop: 11 }} />
                <ButtonGrid items={itemsSIZE} onButtonClick={handleSIZEClick} />
            </SIZEcover>
        </Cover>
        </>
    );
};

const Cover = styled("div", {
    marginTop: "23px",
})

const Head = styled("div", {
    marginTop: "-13px"
})

const CPUcover = styled("div", {
    marginTop: "20px",
})

const WINDOWcover = styled("div", {
    marginTop: "22px",
})

const RAMcover = styled("div", {
    marginTop: "22px",
})

const SIZEcover = styled("div", {
    marginTop: "22px",
})