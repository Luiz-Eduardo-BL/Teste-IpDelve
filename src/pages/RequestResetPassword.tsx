import Header from "../components/Header";
import ResetPassword from "../components/RequestResetPassword";

export default function RequestResetPasswordPage() {
  return (
    <>
      <Header
        heading="Redefinir senha"
        paragraph="Voltar para a página de login? "
        linkName="Login"
        linkUrl="/login"
      />
      <ResetPassword token={""} uid={""} />
    </>
  );
}

