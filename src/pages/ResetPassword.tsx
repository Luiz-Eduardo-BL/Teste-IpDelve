import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ResetPassword from "../components/ResetPassword";

export default function ResetPasswordPage() {
  const { token, uid } = useParams(); 

  return (
    <>
      <Header
        heading="Redefinir Senha"
        paragraph="Por favor, digite a nova senha e confirme."
        linkName="Voltar para o Login"
        linkUrl="/login"
      />
      <ResetPassword token={token} uid={uid} />
    </>
  );
}
