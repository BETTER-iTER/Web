import ButtonWithInput from './component/common/Input';
import Error from './assets/icon/Error.svg?react';
import Login from './pages/Login';

function App() {

  // //이건 그냥 버튼 활성화되는지 안되는지 확인하려고 쓴 함수
  // const handleButtonClick = () => {
  //   console.log('버튼이 클릭되었습니다.');
  // };

  // //이메일 유효성 검사
  // const validateEmail = (value: string) => {
  //   const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
  //     value.trim()
  //   );
  //   return isEmailValid ? undefined : "유효한 이메일이 아닙니다";
  // };




  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/test" element={<Test />} />
      
    // </Routes>
    

    // <ButtonWithInput
    //     labelName="이메일"
    //     btnName="확인"
    //     type="text"
    //     placeholder="이메일을 입력하세요"
    //     onClick={handleButtonClick}
    //     onValidate={validateEmail} 
    //   />
    <Login />
  );
}


export default App;
