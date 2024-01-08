// DataContext.tsx

import { createContext, useContext, useState, ReactNode } from 'react';

interface DataContextProps {
  children: ReactNode;
}

interface FormData {
  // Define your formData structure here
}

interface DataContextValue {
  formData: FormData;
  updateFormData: (newData: FormData) => void;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

export const DataProvider: React.FC<DataContextProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({});

  const updateFormData = (newData: FormData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const value: DataContextValue = { formData, updateFormData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = (): DataContextValue => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('에러남');
  }
  return context;
};
