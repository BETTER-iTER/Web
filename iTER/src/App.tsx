import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/signup/SignUp';
import SignupComplete from './pages/signup/SignupComplete';
import SignupAdditional from './pages/signup/SignupAdditional';
import FindPassword from './pages/findpassword/FindPassword';
import ResetPassword from './pages/findpassword/ResetPassword';
import Notification from './pages/Notification';
import Notice from './pages/Notice';
import Search from './pages/Search';
import ReviewDetail from './pages/review/ReviewDetail';
import Profile from './pages/user/Profile';
import Onboading from './pages/Onboading';
import DeleteUser from './pages/user/DeleteUser';
import Interest from './pages/mypage/Interest';
import Like from './pages/mypage/Like';
import Index from './pages/mypage/Index';
import Follow from './pages/mypage/Follow';
import EditProfile from './pages/mypage/EditProfile';
import Setting from './pages/mypage/Setting';
import PointPage from './pages/mypage/PointPage';
import ReviewWrite from './pages/review/ReviewWrite';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/notice/:id" element={<Notice />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup/additional" element={<SignupAdditional />} />
      <Route path="/signup/complete" element={<SignupComplete />} />
      <Route path="/password" element={<FindPassword />} />
      <Route path="/password/reset" element={<ResetPassword />} />
      <Route path="/search" element={<Search />} />
      <Route path="/search/review/:id" element={<ReviewDetail />} />
      <Route path="/review/write" element={<ReviewWrite />} />
      <Route path="/onboading" element={<Onboading />} />
      <Route path="/user/delete" element={<DeleteUser />} />
      <Route path="/mypage" element={<Index />} />
      <Route path="/mypage/interest" element={<Interest />} />
      <Route path="/mypage/like" element={<Like />} />
      <Route path="/mypage/follow" element={<Follow />} />
      <Route path="/mypage/profile" element={<EditProfile />} />
      <Route path="/user/profile/:id" element={<Profile />} />
      <Route path="/user/interest" element={<Interest />} />
      <Route path="/user/like" element={<Like />} />
      <Route path="/user/setting" element={<Setting />} />
      <Route path="/user/point" element={<PointPage />} />
    </Routes>
  );
}

export default App;
