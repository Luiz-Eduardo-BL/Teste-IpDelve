import { useState, useEffect, ChangeEvent, FormEvent, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { loginFields } from "../constants/formFields";
import Input from "./Input";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";

const fields = loginFields;
const fieldsState = {} as { [key: string]: string };
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {

  const [loginState, setLoginState] = useState(fieldsState);
  const history = useNavigate();

  useEffect(() => {
    // Verificar se há dados salvos no armazenamento local
    const savedUsername = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("email")

    // Preencher automaticamente os campos de login se houver dados salvos
    if (savedUsername && savedEmail) {
      setLoginState({
        ...loginState,
        username: savedUsername,
        email: savedEmail,
      });
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  function handleSubmit(e: MouseEvent<HTMLButtonElement | HTMLAnchorElement> | FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const access_token = localStorage.getItem("auth-token-acess");
  
    const requestInfo = {
      method: "POST",
      body: JSON.stringify({
        username: loginState.username,
        password: loginState.password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + access_token,
      }),
    };
  
    fetch("http://localhost:8000/auth/token/", requestInfo)
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        console.log(response);
        throw new Error("Login inválido");
      })
      .then((token) => {
        const token_list = JSON.parse(token);
        localStorage.setItem("auth-token-acess", token_list["access"]);
        localStorage.setItem("auth-token-refresh", token_list["refresh"]);
        setLoginState({ ...loginState, errorMessage: "", successMessage: "" });
      })
      .catch((error) => {
        setLoginState({ ...loginState, errorMessage: error.message, successMessage: "" });
      });
  }
  

  return (
    <form className="mt-8 space-y-6 ">
      <div className="rounded-md shadow-sm -space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
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
        type="button"
        action="submit"
        text="Login"    
      />
    </form>
  );
}
