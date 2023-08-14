import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../environment/api";
import Input from "../Forms/Input";
import FormAction from "../Forms/FormAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function ResetPassword() {
  const { token, uid } = useParams();
  const [passwordData, setPasswordData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar se a senha e a confirmação de senha são iguais
    if (passwordData.new_password !== passwordData.re_new_password) {
      toast.error('A senha e a confirmação de senha devem ser iguais.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    try {
      const resetData = {
        ...passwordData,
        uid: uid,
        token: token,
      };

      const response = await resetPassword(resetData);
      console.log(response);

      toast.success('Senha redefinida com sucesso!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const resetPasswordState = {
    new_password: passwordData.new_password,
    re_new_password: passwordData.re_new_password,
  };

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
        <div className="rounded-md shadow-sm -space-y-px">
          <Input
            handleChange={handleChange}
            value={resetPasswordState.new_password}
            labelText="Nova Senha"
            labelFor="new_password"
            id="new_password"
            name="new_password"
            type="password"
            isRequired
            placeholder="Digite sua nova senha"
          />
          <Input
            handleChange={handleChange}
            value={resetPasswordState.re_new_password}
            labelText="Confirmar Nova Senha"
            labelFor="re_new_password"
            id="re_new_password"
            name="re_new_password"
            type="password"
            isRequired
            placeholder="Confirme sua nova senha"
          />
        </div>

        <FormAction handleSubmit={handleResetPassword} type="submit" text="Reset Password" />
      </form>

      <ToastContainer /> 
    </>
  );
}
