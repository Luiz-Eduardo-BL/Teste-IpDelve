import { useState } from "react";
import { signupFields } from "../constants/formFields";
import Input from "./Input";
import FormAction from "./FormAction";

const fields = signupFields;
const fieldsState = {} as { [key: string]: string };

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setSignupState({...signupState,[e.target.id]:e.target.value})
  }

  const handleSubmit = () => {
    registerUser();
  }

  const registerUser = () => {
    console.log(signupState);
  }

  return (
    <form className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        {fields.map(field => (
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

      <FormAction
        handleSubmit={handleSubmit}
        type="button"
        action="submit"
        text="Sign up"
      />
    </form>
  )
}