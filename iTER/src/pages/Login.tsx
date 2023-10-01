import { styled } from "../../stitches.config"
import ButtonWithInput from "../component/common/Input";

const Login = () => {
    return (
        <>
        <Title>로그인</Title>
       <ButtonWithInput
            labelName=""
            btnName=""
            type="text"
            placeholder="이메일을 입력하세요" 
          />
        </>
    )
}
export default Login;
const Title = styled('div', {
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "28px",
    letter: "-5%",
    color: "white", //나중에 titleblack으로 바꿔야댐
})
