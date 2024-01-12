import { FC, useRef, useState } from "react";

import { countryList, genderList } from "shared/config";
import { changePasswordType } from "shared/lib";

import s from "./styles.module.sass";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button, EyeIcon, Input, Selector } from "shared/ui";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { registerNewUser } from "shared/api/user";
import { userApi } from "shared/api";
import { useUserStore } from "entities/User";

interface IUserRegisterProps {
  onComplite: () => void;
}

export const UserRegister: FC<IUserRegisterProps> = ({ onComplite }) => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordRepeatType, setPasswordRepeatType] = useState("password");

  const changePasswordType = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
  const changePasswordRepeatType = () => {
    setPasswordRepeatType(
      passwordRepeatType === "password" ? "text" : "password"
    );
  };

  const notifyReg = () =>
    toast.success("you have successfully registered", {
      position: "bottom-right",
    });

  const { handleSetUserData } = useUserStore();

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
      country: "",
      firstName: "",
      lastName: "",
      phone: "",
      gender: "",
      age: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const {
        email,
        password,
        firstName,
        lastName,
        repeatPassword,
        phone,
        age,
        gender,
        country,
      } = data;

      const userData = {
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
        password_repeat: repeatPassword,
        country: country.value,
        phone: phone.replace(/\D/g, ""),
        gender: gender.value,
        age: +age,
      };
      if (phone.replace(/\D/g, "").length < 11) {
        setError("phone", {
          type: "manual",
          message: "erroe message",
        });
        return;
      }
      if (password !== repeatPassword) {
        setError("password", {
          type: "manual",
          message: "erroe message",
        });
        setError("repeatPassword", {
          type: "manual",
          message: "erroe message",
        });
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const resData = await userApi.registerNewUser(userData);
      if (resData.code === 200 && resData.status) {
        localStorage.setItem("token", resData.result.auth.auth_hash);
        localStorage.setItem("authType", "user");
        handleSetUserData(userData);
        onComplite();
        notifyReg();
      }
    } catch (e) {
      //@ts-ignore
      const messageErr = e.response.data.result.message;
      const notifyErr = () =>
        toast.error(messageErr, {
          position: "bottom-right",
        });
      notifyErr();
      console.error("register error", messageErr);
    }
  };

  return (
    <div className={s.userRegister}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.section}>
          <span className={s.sectionTitle}>Basic Information</span>

          <Input
            id="email"
            register={register}
            pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|ru|ua)$/}
            required
            placeholder="Email/ID"
            className={s.input}
            errors={errors}
          />
          <div className={s.withHint}>
            <Input
              id="password"
              register={register}
              placeholder="Password"
              type={passwordType}
              required
              minLength={8}
              errors={errors}
              icon={
                <Button onClick={() => changePasswordType()} variant="clear">
                  <EyeIcon />
                </Button>
              }
              className={s.input}
            />
            <p className={s.hint}>
              8 or more characters, including numbers and special characters
            </p>
          </div>
          <Input
            id="repeatPassword"
            register={register}
            placeholder="Repeat password"
            type={passwordRepeatType}
            required
            minLength={8}
            errors={errors}
            icon={
              <Button
                onClick={() => changePasswordRepeatType()}
                variant="clear"
              >
                <EyeIcon />
              </Button>
            }
            className={s.input}
          />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Personal data</span>
          <Input
            id="firstName"
            register={register}
            placeholder="First Name"
            required
            className={s.input}
            errors={errors}
          />
          <Input
            id="lastName"
            register={register}
            placeholder="Last Name"
            required
            className={s.input}
            errors={errors}
          />
          <Controller
            control={control}
            name="country"
            rules={{ required: true }}
            render={({ field: { onChange } }) => {
              return (
                <Selector
                  options={countryList}
                  onChange={onChange}
                  placeholder="Country"
                  className={s.selector}
                  name="country"
                  errors={errors}
                />
              );
            }}
          />

          <div className={s.withHint}>
            <Input
              id="phone"
              isPhone
              register={register}
              required
              placeholder="Phone"
              className={s.input}
              errors={errors}
            />
            <p className={s.hint}>Enter numbers only</p>
          </div>
          <Controller
            control={control}
            name="gender"
            rules={{ required: true }}
            render={({ field: { onChange } }) => {
              return (
                <Selector
                  options={genderList}
                  placeholder="Gender"
                  className={s.selector}
                  name="gender"
                  errors={errors}
                  onChange={onChange}
                />
              );
            }}
          />

          <Input
            id="age"
            register={register}
            placeholder="Age"
            className={s.input}
            required
            errors={errors}
          />
        </div>
        <Button onClick={() => {}} type="submit" className={s.regBtn}>
          Pre-Registration
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};
