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
    </Routes>
  );
}

export default App;
