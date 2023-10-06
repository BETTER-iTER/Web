import Top from '../../component/layout/Top';
import { styled } from '@stitches/react';
import { useState } from 'react';
import Button from '../../component/common/Button';
import { Headline3, Headline4 } from '../../component/Font';
import Nickname from '../../component/signup/Nickname';
import Job from '../../component/signup/Job';
import Category from '../../component/signup/Category';

const SignupAdditional = () => {
  const title = ['iTER에서 사용할\n닉네임을 정해주세요', '직업을 알려주세요', '직업을 알려주세요'];
  const [count, setCount] = useState<number>(1);

  const handleNext = () => {
    if (count < 3) {
      setCount(count + 1);
    } else {
      console.log('회원가입 완료');
    }
  };

  return (
    <>
      <Top
        title="회원가입"
        back={
          count > 1
            ? () => {
                setCount(count - 1);
              }
            : undefined
        }
      />
      <Content>
        <Count>
          <Headline4>{count}/3</Headline4>
        </Count>
        <Title>
          <Headline3>{title[count - 1]}</Headline3>
        </Title>
        {count == 1 ? <Nickname /> : count == 2 ? <Job /> : <Category />}
        <Bottom>
          <Button
            onClick={() => {
              handleNext();
            }}
          >
            다음
          </Button>
        </Bottom>
      </Content>
    </>
  );
};
export default SignupAdditional;

const Content = styled('div', {
  height: '100vh',
  overflow: 'hidden',
  paddingLeft: '25px',
  border: '1px solid red',
});

const Count = styled('div', {
  marginTop: '100px',
  color: '$Gray50',
});

const Title = styled('div', {
  marginTop: '17px',
  marginBottom: '40px',
  height: '56px',
});

const Bottom = styled('div', {
  position: 'absolute',
  bottom: '10px',
});
