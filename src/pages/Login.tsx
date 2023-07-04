import Header from "../components/Header";
import Login from "../components/Login";

export default function LoginPage() {
  return (
    <>
      <Header 
        heading="Fazer login na sua conta"
        paragraph="Não possui uma conta? "
        linkName="Inscrever-se aqui"
        linkUrl="/signup"
      />
      <Login />
    </>
  )
}