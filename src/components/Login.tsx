import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getJWT } from "../environment/api";
import { loginFields } from "../constants/formFields";
import Input from "./Input";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await getJWT(loginData);
      console.log(response);

      // Verificar se a resposta foi bem-sucedida e obter o token de acesso
      if (response.status === 200) {
        const { access } = response.data;
        localStorage.setItem("auth-token-access", access);

        // Redirecionar para a página desejada após o login
        navigate("/success");
      } else {
        // Exibir mensagem de erro caso o login falhe
        console.log("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fields = loginFields;

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginData[field.name]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            customClass={undefined}
          />
        ))}
      </div>

      <FormExtra />

      <FormAction
        handleSubmit={handleSubmit}
        type="submit"
        action="submit"
        text="Login"
      />
    </form>
  );
}
