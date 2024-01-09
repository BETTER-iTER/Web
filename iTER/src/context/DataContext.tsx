import { createContext, useContext, useState, ReactNode } from 'react';

interface DataContextProps {
  children: ReactNode;
}

interface FormData {
  category?: string;
  specData?: number[];
  starPoint?: number;
  images?: {
    imgUrl: string;
  }[];
  shortReview?: string;
  goodPoint?: string;
  badPoint?: string;
  manufacturer?: string;
  boughtAt?: string | undefined;
  productName?: string;
  amount?: number;
  comparedProductName?: string;
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
