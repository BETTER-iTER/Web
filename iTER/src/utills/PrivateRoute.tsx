import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Modal from '../component/common/Modal';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
}

const PrivateRoute = ({ path, element }: PrivateRouteProps) => {
  const navigate = useNavigate();
  const { isAuthentificated } = useAuth();

  if (!isAuthentificated) {
    return (
      <>
        <Modal
          text="로그인이 필요한 서비스입니다."
          btn="로그인"
          onClick={() => {
            navigate('/onboarding');
          }}
        ></Modal>
      </>
    );
  }

  return <Route path={path} element={element} />;
};

export default PrivateRoute;
