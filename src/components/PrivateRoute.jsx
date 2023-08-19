import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function PrivateRoute({ children }) {
  const { isUser } = useContext(UserContext);
  if (!isUser) return <Navigate to="/locked" replace />
  return children;
}

export default PrivateRoute;