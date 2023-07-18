import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../environment/api";
import Input from "./Input";
import FormAction from "./FormAction";

export default function ResetPassword() {
  const { token, uid } = useParams(); // Obter o token e o UID da URL usando o hook useParams
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

    try {
      const resetData = {
        ...passwordData,
        uid: uid,
        token: token,
      };

      const response = await resetPassword(resetData);
      console.log(response);
      // Exibir uma mensagem de sucesso ou outra ação apropriada após a redefinição de senha
      navigate("/success");
    } catch (error) {
      console.log(error);
    }
  };

  const resetPasswordState = {
    new_password: passwordData.new_password,
    re_new_password: passwordData.re_new_password,
  };

  return (
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
  );
}
