
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Redirect() {
    const localhost = 'https://dev.betteritem.store';
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    
    console.log(code);
    console.log(window.location.href);
    axios.get(`${localhost}/login/callback/kakao?code=${code}`)
    .then(function (response) {
            const {accessToken, refreshToken} = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            axios.defaults.headers.common['Authorization'] = `${accessToken}`;
            alert("카카오로그인이 되셨습니다.");
            console.log(response);
            console.log(response.data.status);
            navigate('/');
        })
    .catch(function (error) {
            console.log(error);
            console.log("에러남");
            console.log("tlqkf");
        });

    return <>로그인중</>;
}

export default Redirect;

