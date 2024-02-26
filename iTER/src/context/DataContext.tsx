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

interface ImageData {
  files: File[];
}

interface DataContextValue {
  formData: FormData;
  imageData: ImageData;
  updateFormData: (newData: FormData) => void;
  updateImageData: (newImageData: ImageData) => void;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

export const DataProvider: React.FC<DataContextProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({});
  const [imageData, setImageData] = useState<ImageData>({ files: [] });

  const updateFormData = (newData: FormData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const updateImageData = (newImageData: ImageData) => {
    setImageData(newImageData);
  };

  const value: DataContextValue = { formData, imageData, updateFormData, updateImageData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = (): DataContextValue => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('에러남');
  }
  return context;
};
