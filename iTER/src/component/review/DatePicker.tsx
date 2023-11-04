import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CustomDatePickerProps {
  onDateChange: (date: Date | null) => void; 
}

function CustomDatePicker({ onDateChange }: CustomDatePickerProps): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateChange(date); 
  };

  return (
    <div>
      <h2>날짜를 선택하세요:</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy/MM/dd"
        placeholderText="날짜를 선택하세요"
        isClearable={true}
      />
      {selectedDate && (
        <p>선택한 날짜: {selectedDate.toLocaleDateString()}</p>
      )}
    </div>
  );
}

export default CustomDatePicker;
