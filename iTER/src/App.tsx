import ButtonWithInput from './component/common/Input';
import Error from './assets/icon/Error.svg?react';


function App() {

  //이건 그냥 버튼 활성화되는지 안되는지 확인하려고 쓴 함수
  const handleButtonClick = () => {
    console.log('버튼이 클릭되었습니다.');
  };

  //이메일 유효성 검사
  const validateEmail = (value: string) => {
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      value.trim()
    );
    return isEmailValid ? undefined : (
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
         justifyContent: 'space-between',
          float: "left",
           color: "#F34F45"
          }}>
      <Error /> 
      <span style={{marginLeft: "5px"}}>유효한 이메일을 입력하세요.</span> 
    </div>
    );
  };




  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/test" element={<Test />} />
      
    // </Routes>
    

    <ButtonWithInput
        labelName="이메일"
        btnName="확인"
        type="text"
        placeholder="이메일을 입력하세요"
        onClick={handleButtonClick}
        onValidate={validateEmail} 
      />
  );
}


export default App;
