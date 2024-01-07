import { InputComponentReiview } from '../../component/common/Input';
import { styled } from '../../../stitches.config';
import { useState } from 'react';
import RadioInput from '../../component/common/RadioInput';
import { ButtonSelect } from '../../component/common/Button';
import ReviewSort from '../../component/review/ReviewSort';
import { B1 } from '../../component/Font';
import DateSort from '../../component/review/DateSort';
// import SpecPopup from '../../component/review/SpecPopup';
import DateComponent from '../../component/review/Date';

const WriteDetail = ({ onDisabled }: { onDisabled: (value: boolean) => void }) => {
  const [selectedSortItem, setSelectedSortItem] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCPU, setSelectedCPU] = useState<string | null>(null);
  const [selectedWINDOW, setSelectedWINDOW] = useState<string | null>(null);
  const [selectedRAM, setSelectedRAM] = useState<string | null>(null);
  const [selectedSIZE, setSelectedSIZE] = useState<string | null>(null);

  console.log(isPopupOpen);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const handleSortItemSelected = (selectedItem: string) => {
    setSelectedSortItem(selectedItem);
  };

  const handleSortDateSelected = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSelectionComplete = (cpu: string, window: string, ram: string, size: string) => {
    setSelectedCPU(cpu);
    setSelectedWINDOW(window);
    setSelectedRAM(ram);
    setSelectedSIZE(size);
  };

  handleSelectionComplete;

  const [sortBottom, setSortBottom] = useState<boolean>(false);
  const [sortDate, setSortDate] = useState<boolean>(false);

  const options = ['공식홈페이지', '쿠팡', '학생복지스토어', '기타'];

  onDisabled;
  return (
    <>
      <MainLay>
        <InputComponentReiview
          placeholder="제품명을 입력해 주세요"
          type="text"
          labelName="제품명 *"
          btnName=""
        />
        <div style={{ marginTop: 20 }} />

        <B1>제조사 *</B1>
        <div style={{ marginTop: 10 }} />
        <ButtonSelect
          children={selectedSortItem == null ? '제조사를 선택해주세요' : selectedSortItem}
          onClick={() => setSortBottom(!sortBottom)}
        />

        <div style={{ marginTop: 20 }} />

        <B1>구매일</B1>
        <div style={{ marginTop: 10 }} />
        <DateComponent selectedDate={selectedDate} onDateChange={handleSortDateSelected} />

        <div style={{ marginTop: 20 }} />

        <InputComponentReiview
          placeholder="₩ 금액을 입력해 주세요"
          type="text"
          labelName="금액"
          btnName=""
        />
        <div style={{ marginTop: 20 }} />

        <B1>제품 스펙</B1>
        <div style={{ marginTop: 10 }} />
        <ButtonSelect
          children={
            selectedCPU == null
              ? '코어 i 5-13세대 / 14인치 / 32GB / 256-129GB'
              : selectedCPU + '/' + selectedWINDOW + '/' + selectedRAM + '/' + selectedSIZE
          }
          onClick={openPopup}
        />
        {/* {isPopupOpen && (
          <SpecPopup
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            onSelectionComplete={handleSelectionComplete}
          />
        )} */}

        <div style={{ marginTop: 20 }} />

        <RadioInput label="구매처 *" options={options} />

        <div style={{ marginTop: 20 }} />

        <InputComponentReiview
          placeholder="제품명을 입력해 주세요"
          type="text"
          labelName="비교 제품"
          btnName=""
        />
      </MainLay>
      {sortBottom && (
        <ReviewSort
          onClose={() => {
            setSortBottom(false);
          }}
          onSortItemSelected={handleSortItemSelected}
        />
      )}

      {sortDate && (
        <DateSort
          onClose={() => {
            setSortDate(false);
          }}
          onSortDateSelected={handleSortDateSelected}
        />
      )}
    </>
  );
};

export default WriteDetail;

const MainLay = styled('div', {
  marginLeft: '25px',
  marginTop: '44px',
  height: '930px',
});
