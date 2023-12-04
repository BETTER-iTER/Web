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
                <ButtonGrid items={specdata0 && Array.isArray(specdata0.specData)
                    ? specdata0.specData.map(item => (item && item.data) || 'default value')
                    : []}
                    onButtonClick={handleCPUClick} />
            </CPUcover>

            <WINDOWcover>
                <Caption1>* {specdata1.title}</Caption1>
                <div style={{ marginTop: 11 }} />
                <ButtonGrid items={specdata1 && Array.isArray(specdata1.specData)
                    ? specdata1.specData.map(item => (item && item.data) || 'default value')
                    : []} onButtonClick={handleWINDOWClick} />
            </WINDOWcover>
            <RAMcover>
                <Caption1>* {specdata2.title}</Caption1>
                <div style={{ marginTop: 11 }} />
                <ButtonGrid items={specdata2 && Array.isArray(specdata2.specData)
                    ? specdata2.specData.map(item => (item && item.data) || 'default value')
                    : []} onButtonClick={handleRAMClick} />
            </RAMcover>
            <SIZEcover>
                <Caption1>* {specdata3.title}</Caption1>
                <div style={{ marginTop: 11 }} />
                <ButtonGrid items={specdata3 && Array.isArray(specdata3.specData)
                    ? specdata3.specData.map(item => (item && item.data) || 'default value')
                    : []} onButtonClick={handleSIZEClick} />
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