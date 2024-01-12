import { userApi } from "shared/api";

export const getUser = async (
  token: string | null,
  setFunc: (userData: any) => void
) => {
  try {
    const { data } = await userApi.getUser(token);

    const userData = {
      email: data.result.user.email,
      first_name: data.result.user.first_name,
      last_name: data.result.user.last_name,
      country: data.result.user.country,
      phone: data.result.user.phone,
      gender: data.result.user.gender,
      age: data.result.user.age,
      avatar: data.result.user.user_pic,
    };
    setFunc(userData);
  } catch (e) {
    console.log("user error", e);
  }
};
