import { styled } from '../../../stitches.config';
import InputComponent from '../../component/common/Input';
import Button from '../../component/common/Button';
import Top from '../../component/layout/Top';
import { Headline3 } from '../../component/Font';
import { useState } from 'react';

const ResetPassword = () => {
  const [password, setPassword] = useState<string>('');
  const [checkPassword, setCheckPassword] = useState<string>('');

  const validatePassword = (value: string) => {
    const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/i.test(
      value.trim()
    );
    return isPasswordValid;
  };

  return (
    <>
      <Top title="비밀번호 재설정" />

      <Title>
        <Headline3>비밀번호를 재설정합니다</Headline3>
      </Title>

      <Body>
        <InputComponent
          placeholder="비밀번호를 입력해주세요"
          type="password"
          labelName="비밀번호"
          onChange={setPassword}
          error={
            validatePassword(password) || password.length == 0
              ? undefined
              : '비밀번호 형식에 맞게 입력해주세요'
          }
          notice="영문/숫자/특수문자 3가지 이상 조합 8~20자"
        />

        <div style={{ marginTop: 20 }} />

        <InputComponent
          placeholder="비밀번호를 다시 입력해주세요"
          type="password"
          labelName="비밀번호 확인"
          onChange={setCheckPassword}
          error={
            checkPassword && checkPassword !== password ? '비밀번호가 일치하지 않습니다' : undefined
          }
        />

        <ButtonBody>
          <Button
            disabled={!(checkPassword === password && checkPassword && password)}
            onClick={() => console.log('비번 재설정 버튼')}
            children="비밀번호 재설정"
          />
        </ButtonBody>
      </Body>
    </>
  );
};

export default ResetPassword;

const Title = styled('div', {
  margin: '114px 0 50px 31px',
  width: '100%',
  textAlign: 'left',
  lineHeight: '28px',
});

const Body = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginLeft: '10px',
});

const ButtonBody = styled('div', {
  position: 'absolute',
  bottom: '20px',
});
