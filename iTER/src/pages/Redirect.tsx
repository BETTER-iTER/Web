
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Redirect() {
    const localhost = 'http://13.124.170.30:8080';
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    console.log(code);
    console.log(window.location.href);
    axios(`${localhost}/login/callback/kakao?code=${code}`, {
        method: "GET",
    })
        .then(function (response) {
            const {accessToken, refreshToken} = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            alert("카카오로그인이 되셨습니다.");
            console.log(response);
            console.log(response.data.status);
            navigate('/home');
        })
        .catch(function (error) {
            console.log(error);
            console.log("에러남");
        });

    return <>로그인중</>;
}

export default Redirect;

