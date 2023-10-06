import { useState } from 'react';
import InputSelect from '../common/InputSelect';

const Job = ({ onDisabled }: { onDisabled: (value: boolean) => void }) => {
  const [value, setValue] = useState('');
  const jobs = ['개발자', '학생', '선생님', '디자이너', '프로듀서', '에디터'];

  onDisabled(value === '');
  console.log(value);
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
