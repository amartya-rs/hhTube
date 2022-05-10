import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const PrivateRoute = () => {
   const { authState } = useAuth();

   return (
      <>
         {authState.isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />}
      </>
   );
};

export { PrivateRoute };
