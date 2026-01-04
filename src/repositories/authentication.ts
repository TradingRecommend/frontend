import { SingletonPattern } from "../pattern/singletonPattern";
import AppServer from "../services/appServer";
import { ApiResponse } from "../services/serviceApi";

export interface Authen {
  accessToken: string;
  refreshToken: string;
  token: string;
}
export type FormDataLogin = {
  email: string;
  password: string;
};

class AuthenticateRepository extends SingletonPattern<AuthenticateRepository>() {
  // Verify user
  async verifyToken(): Promise<ApiResponse<Authen>> {
    try {
      const response = await AppServer.get<Authen, {}>("/auhenticate");
      return response;
    } catch (error) {
      throw error;
    }
  }
  // Login user
  async loginUser(data: FormDataLogin): Promise<ApiResponse<Authen>> {
    try {
      const response = await AppServer.post<Authen, FormDataLogin>(
        "/signin",
        data
      );
      if (response.success) {
        AppServer.setAccessToken(response.data.accessToken);
        AppServer.setRefreshToken(response.data.refreshToken);
      }
      return response;
    } catch (error) {
      AppServer.setAccessToken("131313");
      AppServer.setRefreshToken("4555");
      throw error;
    }
  }
}
export default AuthenticateRepository.getInstance();
