import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getJWT } from "../environment/api";
import { loginFields } from "../constants/formFields";
import Input from "./Input";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

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

      if (response.status === 200) {
        const { access } = response.data;
        localStorage.setItem("auth-token-access", access);

        navigate("/dashboard");
      } else {

        toast.error('Falha no login', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fields = loginFields;

  return (
    <>
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

      <ToastContainer /> 
    </>
  );
}
