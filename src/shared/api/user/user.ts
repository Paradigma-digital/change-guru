import axios from "axios";
import { apiInstance } from "../base";

const BASE_URL = "/new/user";

type Auth = {
  auth_id: string;
  auth_hash: string;
};
type Result = {
  user_id: string;
  auth: Auth;
};
type User = {
  age: number;
  country: string;
  created_at: Date;
  email: string;
  first_name: string;
  gender: string;
  last_name: string;
  phone: string;
  updated_at: Date;
  user_pic?: string;
};
type UserResult = {
  user: User;
};
type UserData = {
  cgapi: string;
  code: number;
  status: boolean;
  result: UserResult;
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
export type NewUser = {
  cgapi: string;
  code: number;
  status: boolean;
  result: Result;
};
export type UpdateUser = {
  cgapi: string;
  code: number;
  status: boolean;
  result: {};
};
export type GetUser = {
  data: UserData;
};
export type UploadImage = {
  data: ImageData;
};

type UserAuth = {
  cgapi: string;
  code: number;
  status: boolean;
  result: Result;
};

export const registerNewUser = (data: any): Promise<NewUser> => {
  return apiInstance.post(`/new/user`, data);
};
export const authUser = (auth: any): Promise<UserAuth> => {
  return apiInstance.post(`user/auth`, auth);
};

export const updateUser = (data: any, auth: any): Promise<UpdateUser> => {
  return axios({
    method: "post",
    url: "https://api.changeguru.io/user/update",
    data,
    headers: {
      "x-auth-token": auth,
    },
  });
};
export const updateUserPassword = (
  data: any,
  auth: any
): Promise<UpdateUser> => {
  return axios({
    method: "post",
    url: "https://api.changeguru.io/user/update/password",
    data,
    headers: {
      "x-auth-token": auth,
    },
  });
};
export const uploadUserAvatar = (
  data: any,
  auth: any
): Promise<UploadImage> => {
  return axios({
    method: "post",
    url: "https://api.changeguru.io/user/pic",
    data,
    headers: {
      "x-auth-token": auth,
    },
  });
};
export const getUser = (auth: any): Promise<GetUser> => {
  return axios({
    method: "get",
    url: "https://api.changeguru.io/user",
    headers: {
      "x-auth-token": auth,
    },
  });
};
