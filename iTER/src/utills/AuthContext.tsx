import { useQuery } from '@tanstack/react-query';
import { createContext, useContext, useEffect, useState } from 'react';
import { getHome } from '../apis/home';
import LoadingPage from '../component/common/Loading';

interface AuthContextProps {
  isAuthentificated: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [isAuthentificated, setIsAuthentificated] = useState(false);
  const [hasFetchedHomeData, setHasFetchedHomeData] = useState(false);

  const {
    data: homeData,
    isLoading: homeLoading,
    isError: homeError,
    refetch: refetchHomeData,
  } = useQuery<JSON, Error>(['home'], getHome, {
    enabled: false,
  });

  useEffect(() => {
    // 홈 데이터를 기반으로 인증 상태를 결정
    if (homeError) {
      setIsAuthentificated(false);
    } else if (homeLoading) {
      setIsAuthentificated(false);
    } else if (homeData) {
      setIsAuthentificated(true);
    }
  }, [homeData, homeError, homeLoading]);

  useEffect(() => {
    if (isAuthentificated && !hasFetchedHomeData) {
      refetchHomeData();
      setHasFetchedHomeData(true);
    }
  }, [isAuthentificated, hasFetchedHomeData, refetchHomeData]);

  return <AuthContext.Provider value={{ isAuthentificated }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('AuthContext is not found');
  return context;
};
