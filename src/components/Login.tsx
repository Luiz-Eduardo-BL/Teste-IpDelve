import { useState } from "react";
import { loginFields } from "../constants/formFields";
import Input from "./Input";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";

const fields = loginFields;
const fieldsState = {} as { [key: string]: string };
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setLoginState({...loginState,[e.target.id]:e.target.value})
  }

  const handleSubmit = () => {
    authenticateUser();
  }

  const authenticateUser = () => {
    console.log(loginState);
  }

  return (
    <form className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        {fields.map(field => (
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
  )
}
  