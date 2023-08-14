import { useParams } from "react-router-dom";
import Header from "../components/Headers/Header";
import ResetPassword from "../components/Password/ResetPassword";

export default function ResetPasswordPage() {
  const { token, uid } = useParams(); 

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-md">
        <Header
          heading="Redefinir Senha"
          paragraph="Por favor, digite a nova senha e confirme."
          linkName="Voltar para o Login"
          linkUrl="/login"
        />
        <div className="mt-4">
          <ResetPassword token={token} uid={uid} />
        </div>
      </div>
    </div>
  );
}
