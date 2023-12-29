import Top from '../../component/layout/Top';
import { styled } from '@stitches/react';
import { useState } from 'react';
import Button from '../../component/common/Button';
import { Headline3, Headline4 } from '../../component/Font';
import Nickname from '../../component/signup/Nickname';
import Job from '../../component/signup/Job';
import Interest from '../../component/signup/Interest';
import { postJoin } from '../../apis/auth';
import { useMutation } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginProps, UserProps } from '../../types/auth';
import LoadingPage from '../../component/common/Loading';
import ErrorPage from '../../component/common/Error';

const SignupAdditional = () => {
  const title = [
    'iTER에서 사용할\n닉네임을 정해주세요',
    '직업을 알려주세요',
    '관심있는 IT제품을 알려주세요',
  ];
  const [count, setCount] = useState<number>(1);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [nickname, setNickname] = useState<string>('');
  const [job, setJob] = useState<number>(-1);
  const [interest, setInterest] = useState<string>('');
  const location = useLocation();
  const navigation = useNavigate();
  const state = location.state as LoginProps;
  const { email, password } = state || { email: '', password: '' };

  const handleNickname = (value: string) => {
    setNickname(value);
  };
  const handleJob = (value: number) => {
    setJob(value);
  };
  const handleInterest = (value: string) => {
    setInterest(value);
  };

  const onDisabled = (value: boolean) => {
    setDisabled(value);
  };

  const userInfo: UserProps = {
    nickName: nickname,
    job: job,
    i: interest,
    email: email,
    password: password,
  };

  const mutation = useMutation(postJoin, {
    onSuccess: (data) => {
      console.log('data', data);
      navigation('/signup/complete', { state: userInfo });
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  const handleJoin = () => {
    navigation('/signup/complete', { state: userInfo });
    const body = {
      email: email || '',
      password: password || '',
      nickName: nickname,
      job: job,
      i: interest,
    };
    mutation.mutate(body);
  };

  const handleNext = () => {
    if (count < 3) {
      setCount(count + 1);
    } else {
      handleJoin();
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
          {count == 3 && (
            <>
              <div style={{ height: 4 }} />
              <Three>
                <Headline4>(최대 3개까지)</Headline4>
              </Three>
            </>
          )}
        </Title>
        {count == 1 ? (
          <Nickname onDisabled={onDisabled} onChange={handleNickname} />
        ) : count == 2 ? (
          <Job onDisabled={onDisabled} onChange={handleJob} />
        ) : (
          <Interest onDisabled={onDisabled} onChange={handleInterest} />
        )}
        <Bottom>
          <Button
            disabled={disabled}
            onClick={() => {
              handleNext();
            }}
          >
            다음
          </Button>
        </Bottom>
      </Content>
      {mutation.isLoading && <LoadingPage />}
      {mutation.isError && <ErrorPage type={2} />}
    </>
  );
};
export default SignupAdditional;

const Content = styled('div', {
  height: '100vh',
  overflow: 'hidden',
  paddingLeft: '25px',
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

const Three = styled('span', {
  color: '$Brand',
});

const Bottom = styled('div', {
  position: 'absolute',
  bottom: '20px',
});
