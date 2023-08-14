import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import ActivatePage from "./pages/Activate";
import DashboardPage from "./pages/Dashboard";
import ResetPasswordPage from "./pages/ResetPassword";
import RequestResetPasswordPage from "./pages/RequestResetPassword";
import ResetPasswordConfirmPage from "./pages/ResetPasswordConfirm";
import TravelPage from "./pages/Travel";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/reset_password/:uid/:token" element={<ResetPasswordPage />} />
        <Route path="/activate/:uid/:token" element={<ActivatePage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/reset_password/" element={<RequestResetPasswordPage />} />
        <Route path="/reset_password_confirm/:uid/:token" element={<ResetPasswordConfirmPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;