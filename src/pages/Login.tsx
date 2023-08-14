import Header from "../components/Headers/Header";
import Login from "../components/Login/Login";

export default function LoginPage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-md">
        <Header 
          heading="Fazer login na sua conta"
          paragraph="Não possui uma conta? "
          linkName="Inscrever-se aqui"
          linkUrl="/signup"
        />
          <Login />
      </div>
    </div>
  );
}
