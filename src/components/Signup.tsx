import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../environment/api";
import { signupFields } from "../constants/formFields";
import Input from "./Input";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";

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

    try {
      const response = await createUser(userData);
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
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
