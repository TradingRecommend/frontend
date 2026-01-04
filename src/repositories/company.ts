import { SingletonPattern } from "../pattern/singletonPattern"
import AppServer from "../services/appServer"
import { ApiResponse } from "../services/serviceApi"

export interface Company {
  id: number
  symbol: string
  name: string
  industry: string
  description: string
}

export interface GetCompaniesResponse {
  items: Company[]
  total: number
}

class CompanyRepository extends SingletonPattern<CompanyRepository>() {
  // Fetch all companies
  async getCompanies(): Promise<ApiResponse<GetCompaniesResponse>> {
    try {
      const response = await AppServer.get<GetCompaniesResponse, {}>("/api/v1/company")
      return response
    } catch (error) {
      throw error
    }
  }

  // Fetch single company by symbol
  async getCompanyBySymbol(symbol: string): Promise<ApiResponse<Company>> {
    try {
      const response = await AppServer.get<Company, {}>(`/api/v1/company/${symbol}`)
      return response
    } catch (error) {
      throw error
    }
  }

  // Create new company
  async createCompany(
    data: Omit<Company, "id">
  ): Promise<ApiResponse<Company>> {
    try {
      const response = await AppServer.post<Company, Omit<Company, "id">>(
        "/api/v1/company",
        data
      )
      return response
    } catch (error) {
      throw error
    }
  }

  // Update company
  async updateCompany(
    symbol: string,
    data: Partial<Company>
  ): Promise<ApiResponse<Company>> {
    try {
      const response = await AppServer.patch<Company>(
        `/api/v1/company/${symbol}`,
        data
      )
      return response
    } catch (error) {
      throw error
    }
  }

  // Delete company
  async deleteCompany(id: number): Promise<ApiResponse<{ success: boolean }>> {
    try {
      const response = await AppServer.delete<{ success: boolean }>(
        `/api/v1/company/${id}`
      )
      return response
    } catch (error) {
      throw error
    }
  }
}

export default CompanyRepository.getInstance()
