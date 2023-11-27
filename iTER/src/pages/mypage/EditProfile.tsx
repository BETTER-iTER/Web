import Top from '../../component/layout/Top';
import UserIcon from '../../assets/icon/User.svg?react';
import { styled } from '../../../stitches.config';
import { useState } from 'react';
import InputComponent from '../../component/common/Input';
import InputSelect from '../../component/common/InputSelect';
import Button from '../../component/common/Button';

const EditProfile = () => {
  const [email, setEmail] = useState<string>('example@naver.com');
  const [nickName, setNickName] = useState<string>('블루투스 하트');
  const [job, setJob] = useState<string>('개발자');

  const [emailWarning, setEmailWarning] = useState<string>('');
  const jobs = ['개발자', '학생', '선생님', '디자이너', '프로듀서', '에디터'];
  return (
    <Container>
      <Top title="프로필" />
      <UserIcon width={100} height={100} />
      <InputComponent type="text" labelName="이메일" text={email} />

      <InputComponent
        placeholder={nickName}
        type="text"
        labelName="닉네임 *"
        onChange={setNickName}
        error={emailWarning}
      />

      <InputSelect labelName="직업 *" placeholder={job} list={jobs} onChange={setJob} />

      <Bottom>
        <Button disabled>저장하기</Button>
      </Bottom>
    </Container>
  );
};

export default EditProfile;

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
});

const Bottom = styled('div', {
  position: 'fixed',
  bottom: '20px',
});
