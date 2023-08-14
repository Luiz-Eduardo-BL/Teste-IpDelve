import Header from "../components/Headers/Header";
import Signup from "../components/Login/Signup";

export default function SignupPage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-md">
        <Header
          heading="Crie sua conta"
          paragraph="Já possui uma conta? "
          linkName="Login"
          linkUrl="/login"
        />
        <div className="mt-4">
          <Signup />
        </div>
      </div>
    </div>
  );
}
