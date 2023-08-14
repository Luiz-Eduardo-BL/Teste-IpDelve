import Header from "../components/Headers/Header";
import ResetPassword from "../components/Password/ResetPassword";

export default function RequestResetPasswordPage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-md">
        <Header
          heading="Redefinir senha"
          paragraph="Voltar para a página de login? "
          linkName="Login"
          linkUrl="/login"
        />
        <div className="mt-4">
          <ResetPassword token={""} uid={""} />
        </div>
      </div>
    </div>
  );
}
