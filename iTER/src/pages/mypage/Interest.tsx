import { Headline3 } from '../../component/Font';
import Top from '../../component/layout/Top';
import { styled } from '../../../stitches.config';
import Category from '../../component/common/Category';
import Button from '../../component/common/Button';
import { useState } from 'react';
import { CategoryProps } from '../../types/Review';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getCategory } from '../../apis/Common';
import { putEditCategory } from '../../apis/User';
import LoadingPage from '../../component/common/Loading';
import ErrorPage from '../../component/common/Error';
import Toast from '../../component/common/Toast';

const Interest = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [toast, setToast] = useState<boolean>(false);

  const mutation = useMutation(putEditCategory, {
    onSuccess: () => {
      setToast(true);
    },
    onError: () => {
      return <ErrorPage type={2} />;
    },
  });

  const handleSave = () => {
    mutation.mutate(selected);
  };

  const handleSelect = (name: string) => {
    const selectedCount = selected.length;

    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
    } else if (selectedCount < 3) {
      setSelected([...selected, name]);
    }
  };

  const { data, isLoading, isError } = useQuery<CategoryProps[], Error>(['home'], getCategory);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage type={2} />;

  return (
    <div>
      <Top title="관심 카테고리 설정" />
      <Content>
        <Headline3>1~3개의 카테고리를 선택해 주세요</Headline3>
        <CategoryBox>
          {data.length > 0 &&
            data?.map((item, index) => (
              <Category
                key={index}
                onClick={() => handleSelect(item.name)}
                isSelectedBorer={selected.includes(item.name)}
                name={item.name}
                gap={8.98}
                imageUrl={item.imageUrl}
              />
            ))}
        </CategoryBox>
        <Bottom>
          <Button disabled={selected.length <= 0} onClick={() => handleSave()}>
            저장하기
          </Button>
        </Bottom>
      </Content>
      {toast && <Toast message={'카테고리가 저장되었습니다'} onClose={() => setToast(false)} />}
    </div>
  );
};

export default Interest;

const Content = styled('div', {
  margin: '101px 0 0 25px',
  width: '340px',
  display: 'flex',
  flexDirection: 'column',
});

const CategoryBox = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '16px',
  marginTop: '40px',
});

const Bottom = styled('div', {
  position: 'absolute',
  bottom: '20px',
});
