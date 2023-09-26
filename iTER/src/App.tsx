import Modal from './component/common/Modal';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div onClick={() => setModal(true)}>MODAL</div>
      {modal && (
        <Modal
          text="모달 테스트입니다."
          onClick={() => {
            setModal(false);
          }}
        />
      )}
    </>
  );
}

export default App;
