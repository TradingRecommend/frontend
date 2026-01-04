import React, { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import AuthenticateRepository, { Authen } from "../repositories/authentication";
import { ApiResponse } from "../services/serviceApi";
import AppServer from "../services/appServer";

export const AuthenticateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, isProcessingRequest } = useAppSelector(
    (state) => state.authenticationReducer
  );

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    if (storedAccessToken && isAuthenticated) {
      AuthenticateRepository.verifyToken()
        .then((response: ApiResponse<Authen>) => {
          // Xử lý dữ liệu khi API thành công
          AppServer.setAccessToken(response.data.accessToken);
          AppServer.setRefreshToken(response.data.refreshToken);
        })
        .catch((error) => {
          throw error;
        });
    }
  }, [isAuthenticated]);

  return isProcessingRequest ? <div></div> : <>{children}</>;
};
