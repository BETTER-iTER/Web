import api from "./index";
import axios from "axios";

// export const deleteUser = async (reason: string) => {
//     try {
//       const accessToken = localStorage.getItem('accessToken');
//       console.log(accessToken);
//       // axios 헤더에 토큰 추가
//       axios.defaults.headers.common['Authorization'] = `${accessToken}`;
  
//       const response = await api.delete('/user/withdraw', {
//         params: {
//           reasons: reason,
//         },
//         headers: {
//           Authorization: `${accessToken}`,
//         },
//       });
  
//       console.log(response.data);
//       return response;
//     } catch (error) {
//       console.error('에러:', error);
//       console.log('Headers:', axios.defaults.headers.common);
//       throw error;
//     }
//   };

export const getSpecData = async (category : string) => {
    try {
        const accessToken = localStorage.getItem('accessToken');
        console.log(accessToken);
        // axios 헤더에 토큰 추가
        axios.defaults.headers.common['Authorization'] = `${accessToken}`;
        const response = await api.get(`/review/spec/data?category=${category}`);
        return response;
    }
    catch(error) {
        console.log("에러", error);
        throw error;
    }
}

