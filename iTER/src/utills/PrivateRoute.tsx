import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../component/common/Modal';
import { getMyPageProfile } from '../apis/Mypage';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../component/common/Loading';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const navigate = useNavigate();
  const [isAuthentificated, setIsAuthentificated] = useState(false);

  const { data, isLoading, isError } = useQuery<JSON, Error>(['user'], getMyPageProfile);

  useEffect(() => {
    // 유저 데이터를 기반으로 인증 상태를 결정
    if (isError) {
      setIsAuthentificated(false);
    } else if (data) {
      setIsAuthentificated(true);
    }
  }, [data, isError]);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (!isAuthentificated) {
    return (
      <Modal
        text="로그인이 필요한 서비스입니다."
        btn="로그인"
        onClick={() => {
          navigate('/onboarding');
        }}
      />
    );
  }

  return <>{element}</>;
};

export default PrivateRoute;
