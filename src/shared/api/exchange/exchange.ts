import axios from "axios";
import { apiInstance } from "../base";

type Auth = {
  auth_id: string;
  auth_hash: string;
};
type Result = {
  user_id: string;
  auth: Auth;
};
export type NewExchange = {
  cgapi: string;
  code: number;
  status: boolean;
  result: Result;
};
export type UpdateExchange = {
  cgapi: string;
  code: number;
  status: boolean;
  result: {};
};
type AdvancedData = {
  [x: string]: string;
};
type Exchange = {
  e_name: string;
  e_website: string;
  e_email: string;
  password?: string;
  password_repeat?: string;
  e_contact_mail: string;
  country: string;
  a_code: string;
  a_city: string;
  a_province: string;
  a_street: string;
  UID?: string;
  avatar?: string;
  e_data: AdvancedData;
  e_pic?: string;
  e_socials?: AdvancedData;
  e_long_description?: string;
  e_short_description?: string;
};
type ExchangeResult = {
  user: Exchange;
};
type ExchangeData = {
  cgapi: string;
  code: number;
  status: boolean;
  result: ExchangeResult;
};
type GetExchange = {
  data: ExchangeData;
};
type ImageResult = {
  image: string;
};
type ImageData = {
  cgapi: string;
  code: number;
  status: boolean;
  result: ImageResult;
};
type UploadImage = {
  data: ImageData;
};

export const registerNewExchange = (data: any): Promise<NewExchange> => {
  return apiInstance.post(`/new/exchange`, data);
};
export const authExchange = (auth: any): Promise<NewExchange> => {
  return apiInstance.post(`exchange/auth`, auth);
};

export const updateExchange = (
  data: any,
  auth: any
): Promise<UpdateExchange> => {
  return axios({
    method: "post",
    url: "https://api.changeguru.io/exchange/profile-update",
    data,
    headers: {
      "x-auth-token": auth,
    },
  });
};
export const getExchange = (auth: any): Promise<GetExchange> => {
  return axios({
    method: "get",
    url: "https://api.changeguru.io/exchange",
    headers: {
      "x-auth-token": auth,
    },
  });
};
export const updateExchangePassword = (
  data: any,
  auth: any
): Promise<UpdateExchange> => {
  return axios({
    method: "post",
    url: "https://api.changeguru.io/exchange/update/password",
    data,
    headers: {
      "x-auth-token": auth,
    },
  });
};
export const updateAdvancedExchange = (
  data: any,
  auth: any
): Promise<GetExchange> => {
  return axios({
    method: "post",
    url: "https://api.changeguru.io/exchange/advanced-update",
    data,
    headers: {
      "x-auth-token": auth,
    },
  });
};
export const updateContactsExchange = (
  data: any,
  auth: any
): Promise<GetExchange> => {
  return axios({
    method: "post",
    url: "https://api.changeguru.io/exchange/contacts-update",
    data,
    headers: {
      "x-auth-token": auth,
    },
  });
};

export const uploadExchangeAvatar = (
  data: any,
  auth: any
): Promise<UploadImage> => {
  return axios({
    method: "post",
    url: "https://api.changeguru.io/exchange/pic",
    data,
    headers: {
      "x-auth-token": auth,
    },
  });
};
