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
  // const [specNum, setSpecNum] = useState<string[]>([]);
  const specNum: number[] = [];
  const { updateFormData } = useData();
  const { formData } = useData();
  useEffect(() => {
    const handleCategory = async () => {
      try {
        const selectedCategory = formData.category;
        const responseData = await getSpecData(String(selectedCategory));
        const specDataList = responseData.data.result.specs;
        console.log(specDataList);
        setSpecDataList(specDataList);
        //이부분 주석처리 why..?
        const newData = { specData: specDataList };
        updateFormData(newData);
      } catch (error) {
        console.log(error);
      }
    };
    handleCategory();
  }, []);

  const handleSpecClick = (item: string, id: number, index: number) => {
    console.log(`클릭한 버튼: ${item}`);
    console.log(`클릭한 버튼의 id: ${id}`);
    switch (index) {
      case 0:
        onCPUClick(item, id);
        specNum[0] = id;
        console.log(specNum);
        // localStorage.setItem('speclist', String(specNum));
        break;
      case 1:
        onWINDOWClick(item, id);
        specNum[1] = id;
        console.log(specNum);
        // localStorage.setItem('speclist', String(specNum));
        break;
      case 2:
        onRAMClick(item, id);
        specNum[2] = id;
        console.log(specNum);
        // localStorage.setItem('speclist', String(specNum));
        break;
      case 3:
        onSIZEClick(item, id);
        specNum[3] = id;
        console.log(specNum);
        // localStorage.setItem('speclist', String(specNum));
        break;

      default:
        break;
    }
    // console.log(specNum);
    const newData = { specData: specNum };
    updateFormData(newData);
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
