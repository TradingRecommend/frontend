import { SingletonPattern } from "../pattern/singletonPattern";
import AppServer from "../services/appServer";
import { ApiResponse } from "../services/serviceApi";

export interface Industry {
  id: number;
  name: string;
}

export interface GetIndustriesResponse {
  items: Industry[];
  total: number;
}

class IndustryRepository extends SingletonPattern<IndustryRepository>() {
  // Fetch all industries
  async getIndustries(): Promise<ApiResponse<GetIndustriesResponse>> {
    try {
      const response = await AppServer.get<GetIndustriesResponse, {}>("/api/v1/industry");
      return response;
    } catch (error) {
      throw error;
    }
  }

  // Fetch single industry by ID
  async getIndustryById(id: number): Promise<ApiResponse<Industry>> {
    try {
      const response = await AppServer.get<Industry, {}>(`/api/v1/industry/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  // Create new industry
  async createIndustry(data: Omit<Industry, "id">): Promise<ApiResponse<Industry>> {
    try {
      const response = await AppServer.post<Industry, Omit<Industry, "id">>(
        "/api/v1/industry",
        data
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  // Update industry
  async updateIndustry(
    id: number,
    data: Partial<Industry>
  ): Promise<ApiResponse<Industry>> {
    try {
      const response = await AppServer.put<Industry>(
        `/api/v1/industry/${id}`,
        data
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  // Delete industry
  async deleteIndustry(id: number): Promise<ApiResponse<{ success: boolean }>> {
    try {
      const response = await AppServer.delete<{ success: boolean }>(
        `/api/v1/industry/${id}`
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default IndustryRepository.getInstance();
