import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { API_URL } from "shared/config";

class ApiInstance {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axios.get(
        endpoint,
        options
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async post<T>(
    endpoint: string,
    options: AxiosRequestConfig = {}
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axios.post(
        endpoint,
        options
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const apiInstance = new ApiInstance();
