import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/signup/SignUp';
import SignupComplete from './pages/signup/SignupComplete';
import SignupAdditional from './pages/signup/SignupAdditional';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup/additional" element={<SignupAdditional />} />
      <Route path="/signup/complete" element={<SignupComplete />} />
    </Routes>
  );
}

export default App;
