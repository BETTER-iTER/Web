import { styled } from '@stitches/react';
import { useState } from 'react';
import ButtonWithInput from '../common/Input';
import { Caption1 } from '../Font';

const Nickname = () => {
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState(false);
  const DuplicationCheck = () => {
    console.log('중복체크');
    setError(false);
  };
  return (
    <NicknameBox>
      <ButtonWithInput
        labelName="닉네임"
        placeholder="닉네임을 입력해주세요"
        type="text"
        btnName="중복"
        onClick={() => {
          DuplicationCheck();
        }}
        onChange={setNickname}
        error={error ? '이미 사용중인 닉네임입니다.' : undefined}
        disabled={nickname.length == 0}
        notice="영문/숫자 조합 1~20자"
      />
      {!error && (
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
