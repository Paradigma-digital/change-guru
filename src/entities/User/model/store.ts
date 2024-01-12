import { makeAutoObservable } from "mobx";

interface IUserUpdateData {
  email: string;
  first_name: string;
  last_name: string;
  country: string;
  phone: string;
  gender: string;
  age: number;
}

interface IUserData {
  email: string;
  first_name: string;
  last_name: string;
  password?: string;
  password_repeat?: string;
  country: string;
  phone: string;
  gender: string;
  age: number;
  avatar?: string;
}

class UserStore {
  userData: IUserData | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  handleSetUserData = (user: IUserData | null) => {
    this.userData = user;
  };
  handleSetUserAvatar = (avatar: string) => {
    if (this.userData) {
      this.userData!.avatar = avatar;
    }
  };
  handleUpdateUser = (user: IUserUpdateData) => {
    const { email, first_name, last_name, country, phone, gender, age } = user;
    if (this.userData) {
      this.userData!.email = email;
      this.userData!.first_name = first_name;
      this.userData!.last_name = last_name;
      this.userData!.country = country;
      this.userData!.phone = phone;
      this.userData!.gender = gender;
      this.userData!.age = age;
    }
  };
}

export default UserStore;
