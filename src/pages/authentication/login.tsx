import { useEffect } from "react";
import { loginUrl } from "../../types/constant";

const Login: React.FC = () => {
  useEffect(() => {
    window.location.replace(loginUrl);
  }, []);

  return <div />;
};

export default Login;
