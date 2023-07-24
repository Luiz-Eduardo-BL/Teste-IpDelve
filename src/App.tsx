import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import ActivatePage from "./pages/Activate";
import Success from "./pages/Success";
import DashboardPage from "./pages/Dashboard";
import ResetPasswordPage from "./pages/ResetPassword";
import RequestResetPasswordPage from "./pages/RequestResetPassword";
import ResetPasswordConfirmPage from "./pages/ResetPasswordConfirm";


function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md px-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/success" element={<Success />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/reset_password/:uid/:token" element={<ResetPasswordPage />} />
            <Route path="/activate/:uid/:token" element={<ActivatePage />} />
            <Route path="/reset_password/" element={<RequestResetPasswordPage />} />
            <Route path="/reset_password_confirm/:uid/:token" element={<ResetPasswordConfirmPage />} />

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;