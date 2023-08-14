import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { isVerify } from "../environment/api";

const ActivatePage = () => {
  const { uid, token } = useParams();
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const verificarConta = async () => {
      try {
        const response = await isVerify(uid, token);
        setVerified(true);
        console.log(response);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };

    verificarConta();
  }, [uid, token]);

  if (verified) {
    return <Navigate to="/login" />;
  }

  if (error) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Ocorreu um erro ao ativar a conta.</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>Verificando sua Conta...</h1>
          <p>Por favor, aguarde enquanto sua conta está sendo ativada.</p>
        </div>
      </div>
    </div>
  );
};

export default ActivatePage;
