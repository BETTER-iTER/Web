import Bottom from "../common/Bottom";
import { styled } from "../../../stitches.config";
import { useState } from "react";
import CustomDatePicker from "./DatePicker";

const DateSort = ({ onClose, onSortDateSelected }: { onClose: () => void; onSortDateSelected: (selectedDate: Date) => void }) => {
   const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onClose();
    // 선택한 날짜를 상위 컴포넌트로 전달
    onSortDateSelected(date || new Date()); // 기본값을 설정할 수 있음
  };

  return (
    <Bottom
      title="날짜 선택"
      component={
        <>
        <SortBox>
          <CustomDatePicker onDateChange={handleDateChange} />
        </SortBox>
        </>
      }
      />
    );
};

export default DateSort;

const SortBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '60px',
});
