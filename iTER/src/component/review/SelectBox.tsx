import React, { useState } from 'react';
import { Caption1, Headline4 } from '../Font';
import ButtonGrid from './ButtonGrid';
import { styled } from '../../../stitches.config';
import { useEffect } from 'react';
import { getSpecData } from '../../apis/Review';
import { useData } from '../../context/DataContext';

interface SelectBoxCPUProps {
  onCPUClick: (item: string, id: number) => void;
  onWINDOWClick: (item: string, id: number) => void;
  onRAMClick: (item: string, id: number) => void;
  onSIZEClick: (item: string, id: number) => void;
}

interface SpecDataProps {
  id: number;
  specData: {
    id: number;
    data: string;
  }[];
  title: string;
}

export const SelectBoxCPU: React.FC<SelectBoxCPUProps> = ({
  onCPUClick,
  onWINDOWClick,
  onRAMClick,
  onSIZEClick,
}) => {
  const [specDataList, setSpecDataList] = useState<SpecDataProps[]>([]);
  console.log(specDataList, '?');

  const { updateFormData } = useData();
  const { formData } = useData();
  const [specNum, setSpecNum] = useState<number[]>([]);
  useEffect(() => {
    const handleCategory = async () => {
      try {
        const selectedCategory = formData.category;
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

  const handleSpecClick = (item: string, id: number, index: number) => {
    console.log(`클릭한 버튼: ${item}`);
    console.log(`클릭한 버튼의 id: ${id}`);
    const updatedSpecNum = [...specNum];
    updatedSpecNum[index] = id;
    switch (index) {
      case 0:
        onCPUClick(item, id);
        break;
      case 1:
        onWINDOWClick(item, id);
        break;
      case 2:
        onRAMClick(item, id);
        break;
      case 3:
        onSIZEClick(item, id);
        break;

      default:
        break;
    }
    setSpecNum(updatedSpecNum);
    updateFormData({ specData: updatedSpecNum });
    console.log(specNum);
    console.log(formData);
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

const Cover = styled('div', {
  marginTop: '23px',
});
const SpecCover = styled('div', {
  marginTop: '22px',
});
const Head = styled('div', {
  marginTop: '-13px',
});
