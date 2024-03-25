import Top from '../../component/layout/Top';
import { styled } from '../../../stitches.config';

import PointLay from '../../component/user/Point';
import { ButtonPoint } from '../../component/common/Button';
import { ModalMyPoint } from '../../component/common/Modal';
import { useState } from 'react';

const PointPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeModalNo = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Top title="내 포인트" />
      <Play>
        <PointLay />
      </Play>
      <ButtonLay>
        <ButtonPoint onClick={openModal}>전문가 등급이 되려면?</ButtonPoint>
      </ButtonLay>

      {isModalOpen && (
        <ModalMyPoint onClosed={closeModalNo} onClick={closeModal} text={''} btn={''} />
      )}
    </>
  );
};

export default PointPage;

const ButtonLay = styled('div', {
  marginLeft: '25px',
  marginTop: '41px',
});

const Play = styled('div', {
  marginTop: '31px',
  marginLeft: '30px',
});
