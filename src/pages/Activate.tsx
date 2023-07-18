import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { isVerify } from "../environment/api";

const ActivatePage = () => {
  const { uid, token } = useParams();
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const response = await isVerify(uid, token);
        setVerified(true);
        console.log(response);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };

    verifyAccount();
  }, [uid, token]);

  if (verified) {
    return <Navigate to="/login" />;
  }

  if (error) {
    return <div>Error occurred while activating account.</div>;
  }

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginTop: '200px' }}>
        <h1>Verify your Account:</h1>
      </div>
    </div>
  );
};

export default ActivatePage;