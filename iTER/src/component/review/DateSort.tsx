import { useRef, useEffect } from 'react';
import { styled } from '../../../stitches.config';
import { useState } from 'react';
import CustomDatePicker from './DatePicker';
import Bottom from '../common/Bottom';

const DateSort = ({
  onClose,
  onSortDateSelected,
}: {
  onClose: () => void;
  onSortDateSelected: (selectedDate: Date) => void;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onClose();
    onSortDateSelected(date || new Date());
  };

  return (
    <Bottom
      title="날짜 선택"
      component={
        <div ref={modalRef}>
          <SortBox>
            <CustomDatePicker onDateChange={handleDateChange} />
          </SortBox>
        </div>
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
