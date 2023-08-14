import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestNewPassword } from "../../environment/api";
import Input from "../Forms/Input";
import FormAction from "../Forms/FormAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const navigate = useNavigate();

  const handleRequestNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const emailData = {
        email: email,
      };

      const response = await requestNewPassword(emailData);
      
      toast.success('Email enviado', {
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

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleRequestNewPassword}>
        <div className="rounded-md shadow-sm -space-y-px">
          <Input
            handleChange={handleChange}
            value={email}
            labelText="E-mail"
            labelFor="email"
            id="email"
            name="email"
            type="email"
            isRequired={true}
            placeholder="Digite seu e-mail"
            customClass={undefined}
          />
        </div>

        <FormAction
          handleSubmit={handleRequestNewPassword}
          type="submit"
          text="Reset Password"
        />
      </form>

      <ToastContainer />
    </>
  );
}
