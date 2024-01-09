import { useState } from 'react';
import InputSelect from '../common/InputSelect';
import { jobs } from '../../constants/Jobs';
interface JobProps {
  onDisabled: (value: boolean) => void;
  onChange: (value: string) => void;
}

const Job = ({ onDisabled, onChange }: JobProps) => {
  const [value, setValue] = useState('');

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
