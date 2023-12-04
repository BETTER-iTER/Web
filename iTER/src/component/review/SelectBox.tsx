import React, { useState } from "react";
import { Caption1, Headline4 } from "../Font";
import ButtonGrid from "./ButtonGrid"
import { styled } from "../../../stitches.config";
import { useEffect } from "react";
import { getSpecData } from "../../apis/review";

interface SelectBoxCPUProps {
    onCPUClick: (item: string) => void;
    onWINDOWClick: (item: string) => void;
    onRAMClick: (item: string) => void;
    onSIZEClick: (item: string) => void;
  }

  
export const SelectBoxCPU: React.FC <SelectBoxCPUProps> = ({ onCPUClick, onWINDOWClick, onRAMClick, onSIZEClick }) => {
    const [specdata0, setSpecdata0] = useState<string>('');
    const [specdata1, setSpecdata1] = useState<string>('');
    const [specdata2, setSpecdata2] = useState<string>('');
    const [specdata3, setSpecdata3] = useState<string>('');

    const itemsCPU = ['코어 i 5-13세대', '코어 i 7-12세대', '코어 i 5-12세대', '라이젠 7-5세대', '라이젠 5-4세대', '기타'];
    const itemsWINDOW = ['17인치', '16인치', '15인치', '14인치', '13인치', '기타'];
    const itemsRAM = ['64GB', '32GB', '16GB', '8GB', '4GB', '기타'];
    const itemsSIZE = ['1TB 초과', '1TB-513GB', '512-257GB', '256-129GB', '128-120GB', '기타'];
    useEffect(() => {
        const handleCategory = async () => {
            try {
                const selectedCategory = localStorage.getItem("selectCategory");
                const responseData = await getSpecData(String(selectedCategory));
                const specData = responseData.data.result.specs;
                console.log(specData);
                setSpecdata0(specData[0]);
                setSpecdata1(specData[1]);
                setSpecdata2(specData[2]);
                setSpecdata3(specData[3]);
            }
            catch(error) {
                console.log(error);
            }
        };
        handleCategory();
    }, [])
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
                <Caption1>* {specdata0.title}</Caption1>
                <div style={{ marginTop: 11 }} />
                <ButtonGrid items={specdata0.specData.map(item => item.data)} onButtonClick={handleCPUClick} />
            </CPUcover>

            <WINDOWcover>
                <Caption1>* {specdata1.title}</Caption1>
                <div style={{ marginTop: 11 }} />
                <ButtonGrid items={specdata1.specData.map(item => item.data)} onButtonClick={handleWINDOWClick} />
            </WINDOWcover>
            <RAMcover>
                <Caption1>* {specdata2.title}</Caption1>
                <div style={{ marginTop: 11 }} />
                <ButtonGrid items={specdata2.specData.map(item => item.data)} onButtonClick={handleRAMClick} />
            </RAMcover>
            <SIZEcover>
                <Caption1>* {specdata3.title}</Caption1>
                <div style={{ marginTop: 11 }} />
                <ButtonGrid items={specdata3.specData.map(item => item.data)} onButtonClick={handleSIZEClick} />
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