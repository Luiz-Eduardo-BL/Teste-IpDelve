import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';


function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md px-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
