import { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  isAuthentificated: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [isAuthentificated, setIsAuthentificated] = useState(false);
  return <AuthContext.Provider value={{ isAuthentificated }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('AuthContext is not found');
  return context;
};
