import { useState } from 'react';
import InputSelect from '../common/InputSelect';

interface JobProps {
  onDisabled: (value: boolean) => void;
  onChange: (value: string) => void;
}
const Job = ({ onDisabled, onChange }: JobProps) => {
  const [value, setValue] = useState('');
  const jobs = [
    'SW개발자',
    '게임 개발자',
    '학생',
    '선생님',
    '영상 디자이너',
    '시각 디자이너',
    '데이터 분석가',
    '기획자',
    '에디터',
    'CEO',
  ];
  onDisabled(value === '');
  onChange(value);
  return (
    <>
      <InputSelect
        labelName="직업"
        placeholder="직업을 입력해주세요"
        list={jobs}
        onChange={setValue}
      />
    </>
  );
};

export default Job;
