import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../component/common/Modal';
import { getHome } from '../apis/home';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../component/common/Loading';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const navigate = useNavigate();
  const [isAuthentificated, setIsAuthentificated] = useState(false);

  const {
    data: homeData,
    isLoading: homeLoading,
    isError: homeError,
  } = useQuery<JSON, Error>(['home'], getHome);

  useEffect(() => {
    // 홈 데이터를 기반으로 인증 상태를 결정
    if (homeError) {
      setIsAuthentificated(false);
    } else if (homeData) {
      setIsAuthentificated(true);
    }
  }, [homeData, homeError, homeLoading]);

  if (homeLoading) {
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
