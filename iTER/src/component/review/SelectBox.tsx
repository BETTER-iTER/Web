import React, { useState } from "react";
import { Caption1, Headline4 } from "../Font";
import ButtonGrid from "./ButtonGrid"
import { styled } from "../../../stitches.config";
import { useEffect } from "react";
import { getSpecData } from "../../apis/review";

// ... (your imports)

interface SelectBoxCPUProps {
    onCPUClick: (item: string, id: string) => void;
    onWINDOWClick: (item: string, id: string) => void;
    onRAMClick: (item: string, id: string) => void;
    onSIZEClick: (item: string, id: string) => void;
}

export const SelectBoxCPU: React.FC<SelectBoxCPUProps> = ({ onCPUClick, onWINDOWClick, onRAMClick, onSIZEClick }) => {
    const [specDataList, setSpecDataList] = useState<string[]>([]);
    const [specNum, setSpecNum] = useState<string[]>([]);

    useEffect(() => {
        const handleCategory = async () => {
            try {
                const selectedCategory = localStorage.getItem("selectCategory");
                const responseData = await getSpecData(String(selectedCategory));
                const specDataList = responseData.data.result.specs;
                console.log(specDataList);
                setSpecDataList(specDataList);
            } catch (error) {
                console.log(error);
            }
        };
        handleCategory();
    }, []);

    const handleSpecClick = (item: string, id: string, index: number) => {
        console.log(`클릭한 버튼: ${item}`);
        console.log(`클릭한 버튼의 id: ${id}`);
        switch (index) {
            case 0:
                onCPUClick(item, id);
                specNum[0] = id;
                console.log(specNum);
                localStorage.setItem("speclist", String(specNum));
                break;
            case 1:
                onWINDOWClick(item, id);
                specNum[1] = id;
                console.log(specNum);
                localStorage.setItem("speclist", String(specNum));
                break;
            case 2:
                onRAMClick(item, id);
                specNum[2] = id;
                console.log(specNum);
                localStorage.setItem("speclist", String(specNum));
                break;
            case 3:
                onSIZEClick(item, id);
                specNum[3] = id;
                console.log(specNum);
                localStorage.setItem("speclist", String(specNum));
                break;

            default:
                break;
        }

        localStorage.setItem("spec", id);
    };

    return (
        <>
            <Cover>
                <Head>
                    <Headline4>제품 스펙</Headline4>
                </Head>
                {specDataList.map((specdata, index) => (
                    <SpecCover key={index}>
                        <Caption1>* {specdata.title}</Caption1>
                        <div style={{ marginTop: 11 }} />
                        <ButtonGrid
                            items={
                                specdata && Array.isArray(specdata.specData)
                                    ? specdata.specData.map((item) => ({ data: item.data, id: item.id }) || '없음')
                                    : []
                            }
                            onButtonClick={(item) => handleSpecClick(item.data, item.id, index)}
                        />
                    </SpecCover>
                ))}
            </Cover>
        </>
    );
};

const Cover = styled("div", {
    marginTop: "23px",
})
const SpecCover = styled("div", {
    marginTop: "22px",
});
const Head = styled("div", {
    marginTop: "-13px"
})
