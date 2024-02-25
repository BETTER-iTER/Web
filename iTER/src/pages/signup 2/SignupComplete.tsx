import { Headline2, Headline3 } from '../../component/Font';
import { styled } from '@stitches/react';
import Button from '../../component/common/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserProps } from '../../types/auth';

const SignupComplete = () => {
  const location = useLocation();
  const state = location.state as UserProps;
  const nickname = state.nickName;
  const categories = state.i;
  const navigate = useNavigate();

  const interest = categories.split(', ');

  return (
    <Container>
      <div style={{ margin: '0 auto' }}>
        <Title>
          <Headline2>{nickname}님,</Headline2>
          <Headline2>회원가입을 축하합니다!</Headline2>
        </Title>

        <Headline3>나의 관심분야는</Headline3>
        <Hash>
          <Headline3>
            {interest.map((item, index) => {
              return <span key={index}>#{item} </span>;
            })}
          </Headline3>
        </Hash>

        <Bottom>
          <Button
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인 하기
          </Button>
        </Bottom>
      </div>
    </Container>
  );
};
export default SignupComplete;

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  position: 'relative',
  padding: '0 30px',
  overflow: 'hidden',
});

const Title = styled('div', {
  margin: '142px 0 30px 0',
  textAlign: 'left',
  width: '360px',
});

const Hash = styled('div', {
  margin: '3px 0 0 0',
  color: '$Brand',
});

const Bottom = styled('div', {
  position: 'absolute',
  bottom: '20px',
  left: '25px',
});
