
import ButtonWithInput from './component/common/Input';

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/test" element={<Test />} />
      
    // </Routes>
    <ButtonWithInput placeholder='이메일을 입력해주세요' labelName="이메일" btnName='인증번호 전송' onClick={()=> {console.log("버튼 누름")}}/>
  );
}


export default App;
