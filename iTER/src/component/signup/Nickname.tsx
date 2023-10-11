import { styled } from '@stitches/react';
import { useState } from 'react';
import InputComponent from '../common/Input';
import { Caption1 } from '../Font';
import { getNicknameVerify } from '../../apis/auth';
import { useMutation } from '@tanstack/react-query';

interface NicknameProps {
  onDisabled: (value: boolean) => void;
  onChange: (value: string) => void;
}

const Nickname = ({ onDisabled, onChange }: NicknameProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const mutation = useMutation(getNicknameVerify);
  const DuplicationCheck = () => {
    console.log('중복체크');
    mutation.mutate(value);
    console.log(mutation);

    if (mutation.data) {
      console.log(mutation.data);
      setError(false);
      onChange(value);
    }
    if (mutation.error) {
      console.log(mutation.failureReason);
      setError(true);
    }
  };
  onDisabled(value === '');
  return (
    <NicknameBox>
      <InputComponent
        labelName="닉네임"
        placeholder="닉네임을 입력해주세요"
        type="text"
        btnName="중복"
        onClick={() => {
          DuplicationCheck();
        }}
        onChange={setValue}
        error={error ? '이미 사용중인 닉네임입니다.' : undefined}
        disabled={value.length == 0}
        notice="영문/숫자 조합 1~20자"
      />
      {!error && mutation.data && (
        <Notice>
          <Caption1>사용 가능한 닉네임입니다.</Caption1>
        </Notice>
      )}
    </NicknameBox>
  );
};

export default Nickname;

const NicknameBox = styled('div', {
  marginTop: '40px',
});
const Notice = styled('div', {
  color: '$Brand',
  marginTop: '10px',
});
