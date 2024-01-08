import Top from '../../component/layout/Top';
import { styled } from '../../../stitches.config';
import Button from '../../component/common/Button';
import { useState } from 'react';
import CheckCategory from './CheckCategory';
import WriteDetail from './WriteDetail';
import ReviewStar from './ReviewStar';
import Compelete from './Compelete';
import Category from '../../component/common/Category';
import { DataProvider } from '../../context/DataContext.tsx';

const ReviewWrite = () => {
  const [count, setCount] = useState<number>(1);
  const [disabled, setDisabled] = useState<boolean>(true);

  // const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState<string | null>(null);

  console.log(selectedCategoryName);

  const handleCategorySelect = (name: string) => {
    setSelectedCategoryName(name);
  };

  const Next = () => {
    const RId = localStorage.getItem('addReviewId');
    window.location.href = `/search/review/${RId}`;
  };

  const handleNext = () => {
    if (count == 1) {
      setCount(count + 1);
    } else if (count == 2) {
      setCount(count + 1);
    } else if (count == 3) {
      setCount(count + 1);
    } else {
      Next();
    }
  };
  const onDisabled = (value: boolean) => {
    setDisabled(!value);
    console.log(value);
  };

  const title = `리뷰 작성 (${count}/3)`;
  return (
    <>
      {count == 4 ? (
        ''
      ) : (
        <Top
          title={count > 3 ? '' : title}
          back={
            count > 1
              ? () => {
                  setCount(count - 1);
                }
              : undefined
          }
        />
      )}
      <DataProvider>
        {count === 1 ? (
          <CheckCategory onDisabled={onDisabled} onCategorySelect={handleCategorySelect} />
        ) : count === 2 ? (
          <WriteDetail onDisabled={onDisabled} />
        ) : count === 3 ? (
          <ReviewStar onDisabled={onDisabled} />
        ) : count === 4 ? (
          <Compelete onDisabled={onDisabled} />
        ) : null}
      </DataProvider>

      <BtnLay>
        <Button
          disabled={disabled}
          onClick={() => {
            handleNext();
          }}
        >
          {count === 3 ? '작성완료' : count === 4 ? '확인' : '다음'}
        </Button>
      </BtnLay>
    </>
  );
};
export default ReviewWrite;

const BtnLay = styled('div', {
  position: 'fixed',
  bottom: '20px',
  paddingLeft: '25px',
});
