import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signupFields } from "../constants/formFields";
import Input from "./Input";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";

const fields = signupFields;
const fieldsState = {} as { [key: string]: string };
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const history = useNavigate();

  const handleChange = (e: { target: { id: any; value: any } }) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/signup/", {
        username: signupState.username,
        email: signupState.email,
        password: signupState.password,
      });
      const token = response.data.access;
      const user = response.data;
      console.log("Novo usuário criado:", user);
      // Armazene o token JWT no armazenamento local (localStorage) ou em algum estado global, se necessário
      // Exemplo: localStorage.setItem("token", token);

      // Redirecione o usuário para a página protegida
      history("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="mt-8 space-y-6 ">
      <div className="rounded-md shadow-sm -space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
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
        text="Signup"
      />
    </form>
  );
}
