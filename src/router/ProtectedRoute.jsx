import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ element: Component, allowedRoles }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }
  return <Component />;
};

export default ProtectedRoute;
