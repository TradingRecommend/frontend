import React, { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import AuthenticateRepository, { Authen } from "../repositories/Authentication";
import { ApiResponse } from "../services/serviceApi";
import AuthenServer from "../services/AuthenServer";

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
          AuthenServer.setAccessToken(response.data.accessToken);
          AuthenServer.setRefreshToken(response.data.refreshToken);
        })
        .catch((error) => {
          throw error;
        });
    }
  }, [isAuthenticated]);

  return isProcessingRequest ? <div></div> : <>{children}</>;
};
