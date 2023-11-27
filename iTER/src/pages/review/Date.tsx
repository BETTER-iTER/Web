import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { styled } from '../../../stitches.config';

interface DateProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}

const DateComponent: React.FC<DateProps> = ({ selectedDate, onDateChange }) => {
  const [selected, setSelected] = useState<Date | null>(selectedDate);

  const handleDateChange = (date: Date | null) => {
    setSelected(date);
    onDateChange(date);
  };

  return (
    <div>
      <StyledDatePicker
        selected={selected}
        onChange={handleDateChange}
        dateFormat="yyyy/MM/dd"
        placeholderText="날짜를 선택하세요"
        isClearable={false}
        calendarContainer={StyledCalendarContainer}
        popperPlacement="bottom-end"
      />
    </div>
  );
};

export default DateComponent;

const StyledDatePicker = styled(DatePicker, {
  width: '324px',
  height: '46px',
  borderRadius: '10px',
  border: '1px solid $Gray10',
  paddingLeft: '16px',
  color: '$Gray40',
  '&:focus': {
    outline: 'none',
  },
  '&::placeholder': {
    color: '$Gray40',
    fontSize: '14px',
  },
  '& .react-datepicker__close-icon': {
    display: 'none', // 숨김 처리
  },
});

const StyledCalendarContainer = styled('div', {
  width: '340px',
  height: '390px',
  border: '1px solid $Gray10',
  backgroundColor: '$White',
  '& .react-datepicker__header': {
    paddingTop: '25px',
    width: '330px',
    backgroundColor: '$White',
    borderBottom: 'none',
    //가장 윗부분 (달력 제목)
    '& .react-datepicker__current-month': {
      fontSize: '17px',
      fontWeight: '600',
      color: '$Gray50',
      marginBottom: '10px',
      marginLeft: '-160px',
    },
    //요일
    '& .react-datepicker__day-names': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      '& .react-datepicker__day-name': {
        width: 'calc(100% / 7)',
        fontSize: '13px',
        fontWeight: '600',
        color: '$Gray20',
      },
    },
  },
  //이전, 다음 버튼
  '& .react-datepicker__navigation': {
    top: '20px',
    '&.react-datepicker__navigation--next': {
      right: '10px',
      '&:before': {
        content: '"❯"',
        fontSize: '20px',
      },
    },
  },
  '& .react-datepicker__navigation--previous': {
    left: '260px',
    '&:before': {
      content: '"❮"',
      fontSize: '20px',
    },
  },
  '& .react-datepicker__month': {
    width: '98%',
    //날짜
    '& .react-datepicker__day': {
      width: 'calc(100% / 7)',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '20px',
      fontWeight: '400',
      color: '$Gray40',
      '&:hover': {
        backgroundColor: '$Gray10',
        borderRadius: '50%',
      },
      //선택된 날짜
      '&.react-datepicker__day--selected': {
        backgroundColor: '$Gray10',
        borderRadius: '50%',
        fontSize: '24px',
        color: '$Gray50',
      },
      '&.react-datepicker__day--keyboard-selected': {
        backgroundColor: '$Gray10',
        borderRadius: '50%',
        color: '$White',
        '&:hover': {
          backgroundColor: '$Gray10',
        },
      },
      //오늘 날짜
      '&.react-datepicker__day--today': {
        backgroundColor: '$Gray10',
        borderRadius: '50%',
        color: '$Gray40',
        '&:hover': {
          backgroundColor: '$Gray10',
        },
      },
      //이전, 다음 달 날짜
      '&.react-datepicker__day--outside-month': {
        color: '$White',
      },
    },
  },

  '& .react-datepicker__week': {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
