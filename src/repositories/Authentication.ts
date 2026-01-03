import { SingletonPattern } from "../pattern/SingletonPattern";
import AuthenServer from "../services/AuthenServer";
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
      const response = await AuthenServer.get<Authen, {}>("/auhenticate");
      return response;
    } catch (error) {
      throw error;
    }
  }
  // Login user
  async loginUser(data: FormDataLogin): Promise<ApiResponse<Authen>> {
    try {
      const response = await AuthenServer.post<Authen, FormDataLogin>(
        "/signin",
        data
      );
      if (response.success) {
        AuthenServer.setAccessToken(response.data.accessToken);
        AuthenServer.setRefreshToken(response.data.refreshToken);
      }
      return response;
    } catch (error) {
      AuthenServer.setAccessToken("131313");
      AuthenServer.setRefreshToken("4555");
      throw error;
    }
  }
}
export default AuthenticateRepository.getInstance();
