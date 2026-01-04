import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  component: React.FC;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...other
}) => {
  const isAuthenticated = useAppSelector(
    (state) => state.authenticationReducer.isAuthenticated
  );

  return isAuthenticated ? (
    <Component {...other} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
