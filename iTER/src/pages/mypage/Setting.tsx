import Top from '../../component/layout/Top';
import { styled } from '../../../stitches.config';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ModalSelect } from '../../component/common/Modal';
import { useMutation } from '@tanstack/react-query';
import ErrorPage from '../../component/common/Error';
import axios from 'axios';
import LoadingPage from '../../component/common/Loading';
import { postLogout } from '../../apis/login';

const Setting = () => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState<boolean>(false);
  const id = '1';
  const Link = [
    { title: '내 포인트', link: '/user/point' },
    { title: '프로필', link: `/user/profile/${id}` },
    { title: '관심 카테고리 설정', link: '/user/interest' },
    { title: '좋아요한 리뷰', link: '/user/like' },
  ];

  const mutation = useMutation(postLogout, {
    onSuccess: () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      axios.defaults.headers.common['Authorization'] = '';
      navigate('/onboarding');
    },
    onError: (error) => {
      console.log('error', error);
      return <ErrorPage type={2} />;
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };
  return (
    <>
      <Top title="설정" />
      <Content>
        <Title>회원정보</Title>
        <Items>
          {Link.map((item, index) => (
            <Item onClick={() => navigate(item.link)} key={index}>
              {item.title}
            </Item>
          ))}
        </Items>

        <Title>계정관리</Title>
        <Items>
          <Item onClick={() => setLogout(true)}>로그아웃</Item>
          <Item onClick={() => navigate(`/user/delete`)}>회원탈퇴</Item>
        </Items>
        <Item onClick={() => navigate(`/user/inquiry`)}>1:1 문의하기</Item>
      </Content>

      {logout && (
        <ModalSelect
          text={'로그아웃 하시겠습니까?'}
          btn={'로그아웃'}
          onClick={() => {
            handleLogout();
          }}
          onClosed={() => {
            setLogout(false);
          }}
        />
      )}
      {mutation.isLoading && <LoadingPage />}
    </>
  );
};

export default Setting;

const Content = styled('div', {
  marginTop: '60px',
});

const Title = styled('div', {
  padding: '0 25px',
  fontSize: '12px',
  fontWeight: '600',
  color: '$TitleBlack',
  lineHeight: '22px',
  letterSpacing: '-0.6px',
  marginBottom: '16px',
});

const Items = styled('div', {
  marginBottom: '24px',
  borderBottom: '1px solid $Bar',
  paddingBottom: '12px',
});

const Item = styled('div', {
  padding: '0 25px',
  bodyText: 2,
  color: '#000000',
  lineHeight: '22px',
  letterSpacing: '-0.7px',
  marginBottom: '12px',
  cursor: 'pointer',
});
