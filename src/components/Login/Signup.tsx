import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUser } from "../../environment/api";
import { signupFields } from "../../constants/formFields";
import Input from "../Forms/Input";
import FormAction from "../Forms/FormAction";

export default function Signup() {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
    re_password: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    for (const field of signupFields) {
      if (field.isRequired && !userData[field.name]) {
        toast.error(`Preencha o campo "${field.labelText}"`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
        });
        return;
      }
    }

    if (userData.password !== userData.re_password) {
      toast.error("As senhas não coincidem", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
      });
      return;
    }

    try {
      const response = await createUser(userData);
      console.log(response);
      toast.success("Usuário criado com sucesso! Agora você pode fazer o login.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao criar o usuário. Por favor, tente novamente.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };

  const signupState = {
    email: userData.email,
    name: userData.name,
    password: userData.password,
    re_password: userData.re_password,
  };

  const fields = signupFields;

  return (
    <form className="mt-8 space-y-6">
      <ToastContainer />
      <div className="rounded-md shadow-sm -space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.name]}
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

      <FormAction
        handleSubmit={handleSubmit}
        type="button"
        action="submit"
        text="Cadastrar"
      />
    </form>
  );
}
