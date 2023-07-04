import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage() {
  return (
    <>
      <Header
        heading="Crie sua conta"
        paragraph="Já possui uma conta? "
        linkName="Login"
        linkUrl="/"
      />
      <Signup />
    </>
  )
}