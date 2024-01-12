import { apiInstance } from "../base";

const BASE_URL = "api/coins";

export type TopCoins = {
  success: boolean;
  data: string[];
};

export const getTopCoins = (): Promise<TopCoins> => {
  return apiInstance.get(`${BASE_URL}/top`);
};

export const getAllCoins = (): Promise<TopCoins> => {
  return apiInstance.get(`${BASE_URL}/all`);
};
