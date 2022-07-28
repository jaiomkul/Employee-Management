import { useContext } from "react";
import { AuthContext } from "../ContextApi/AuthContext";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          handleAuth(false);
          navigate("/", { replace: true });
        }}
      >
        Logout
      </button>
    </div>
  );
};
