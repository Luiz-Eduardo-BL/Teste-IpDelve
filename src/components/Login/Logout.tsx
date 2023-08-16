import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography, Button } from "@material-tailwind/react";

const Logout = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth-token-access");
    setShowConfirmation(false);
    toast.success("Logout realizado com sucesso!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/login");
  };

  return (
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <Button
        className="bg-red-500 text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
        onClick={() => setShowConfirmation(true)}
      >
        Sair
      </Button>

      {showConfirmation && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 text-black rounded-lg">
            <p>Deseja realmente sair?</p>
            <div className="flex justify-end mt-4">
            <Button
                className="bg-blue-500 text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                onClick={() => setShowConfirmation(false)}
              >
                Cancelar
              </Button>
              <Button
                className="bg-red-500 text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                onClick={handleLogout}
              >
                Sair
              </Button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Logout;
