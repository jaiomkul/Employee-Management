import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthContext";

export const Login = () => {
  const navigate = useNavigate();
  const { handleAuth } = useContext(AuthContext);
  return (
    <form
      onSubmit={() => {
        handleAuth(true);
        navigate("/", { replace: true });
      }}
    >
      <input type="email" placeholder="Enter Your Email" />
      <input type="password" placeholder="Enter Your Password" />
      <input type="submit" value="SIGN IN" />
    </form>
  );
};
