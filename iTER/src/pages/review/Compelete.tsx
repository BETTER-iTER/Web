import { Headline3 } from '../../component/Font';
import { styled } from '../../../stitches.config';
import { useEffect } from 'react';
import { useData } from '../../context/DataContext';

const Compelete = ({ onDisabled }: { onDisabled: (value: boolean) => void }) => {
  const { formData } = useData();

  useEffect(() => {
    console.log('안녕');
    console.log('formdata:', formData);
  }, []);
  onDisabled;
  return (
    <>
      <Text>
        <Headline3>리뷰 작성 완료!</Headline3>
      </Text>
    </>
  );
};

export default Compelete;

const Text = styled('div', {
  color: '$Brand',
  textAlign: 'center',
  width: '390px',
  top: '360px',
  position: 'absolute',
});
