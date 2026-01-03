import {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { SingletonPattern } from "../pattern/SingletonPattern";
import { authenStorage } from "../types/constant";

// Define api data
export type ApiResponse<T> = {
  message: string;
  success: boolean;
  data: T;
};

export class ApiService extends SingletonPattern<ApiService>() {
  protected axiosInstance: AxiosInstance;
  private accessToken?: string | null = null;
  private refreshToken: string | null = null;

  setAccessToken(token?: string | undefined | null) {
    this.accessToken = token;
    localStorage.setItem(authenStorage.accessToken, token ?? "");
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) =>
        this.configInterceptorsRequest(config, token ?? "")
    );
  }

  setRefreshToken(token: string) {
    localStorage.setItem(authenStorage.refreshToken, token);
    this.refreshToken = token;
  }

  clearToken(): void {
    this.setAccessToken("");
    this.setRefreshToken("");
  }

  protected configInterceptorsRequest(
    config: InternalAxiosRequestConfig,
    token: string
  ) {
    // set token for headers
    if (config.headers && token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Access-Control-Allow-Origin"] = "*";
    }
    return config;
  }

  public async get<T, P extends object>(
    endpoint: string,
    params?: P
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.requestWithRetry<T>(() =>
        this.axiosInstance.get(endpoint, params)
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async post<T, C>(endpoint: string, data: C): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await this.requestWithRetry<T>(() =>
          this.axiosInstance.post(endpoint, data)
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await this.requestWithRetry<T>(() =>
          this.axiosInstance.put(endpoint, data)
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> =
        await this.requestWithRetry<T>(() =>
          this.axiosInstance.delete(endpoint)
        );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  private async requestWithRetry<T>(
    requestFunction: () => Promise<AxiosResponse<ApiResponse<T>>>
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    try {
      const response = await requestFunction();
      return response;
    } catch (error: any) {
      // handle token expire
      if (
        error.response &&
        error.response.status === 401 &&
        error.response.data.message === "Token expired"
      ) {
        // call refresh token
        await this.refreshAccessToken();
        // call again function
        return await requestFunction();
      } else {
        throw error;
      }
    }
  }

  private async refreshAccessToken() {
    // Retry refreshtoken
    try {
      const response = await this.axiosInstance.post("/refreshToken", {
        refreshToken: this.refreshToken,
      });
      const { newAccessToken, refreshAccessToken } = response.data;
      this.setAccessToken(newAccessToken);
      this.setRefreshToken(refreshAccessToken);
    } catch (error) {
      throw error;
    }
  }
}
