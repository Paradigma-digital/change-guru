import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { changePasswordType } from "shared/lib";

import s from "./styles.module.sass";

import { Button, EyeIcon, Input } from "shared/ui";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { exchangeApi, userApi } from "shared/api";

export const ChangePassword = () => {
  const authType = localStorage.getItem("authType");

  const [oldPasswordType, setOldPasswordType] = useState("password");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordRepeatType, setPasswordRepeatType] = useState("password");

  const changeOldPasswordType = () => {
    setOldPasswordType(oldPasswordType === "password" ? "text" : "password");
  };
  const changePasswordType = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
  const changePasswordRepeatType = () => {
    setPasswordRepeatType(
      passwordRepeatType === "password" ? "text" : "password"
    );
  };

  const notify = () =>
    toast.success("the information has been changed", {
      position: "bottom-right",
    });

  const {
    handleSubmit,
    register,
    setError,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      old_password: "",
      new_password: "",
      new_password_repeat: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { old_password, new_password, new_password_repeat } = data;

    try {
      const newPaswordData = {
        old_password,
        new_password,
        new_password_repeat,
      };

      if (new_password !== new_password_repeat) {
        setError("new_password", {
          type: "manual",
          message: "erroe message",
        });
        setError("new_password_repeat", {
          type: "manual",
          message: "erroe message",
        });
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }
      if (localStorage.getItem("token")) {
        if (localStorage.getItem("authType") === "user") {
          await userApi.updateUserPassword(
            newPaswordData,
            localStorage.getItem("token")
          );
          notify();
          setValue("old_password", "");
          setValue("new_password", "");
          setValue("new_password_repeat", "");
        } else {
          await exchangeApi.updateExchangePassword(
            newPaswordData,
            localStorage.getItem("token")
          );
          notify();
          setValue("old_password", "");
          setValue("new_password", "");
          setValue("new_password_repeat", "");
        }
      }
    } catch (e) {
      console.error("change password error", e);
    }
  };

  return (
    <div className={s.changePassword}>
      <span className={s.title}>Change Password</span>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <Input
          id="old_password"
          register={register}
          required
          minLength={8}
          errors={errors}
          placeholder="Old Passworld"
          type={oldPasswordType}
          icon={
            <Button onClick={() => changeOldPasswordType()} variant="clear">
              <EyeIcon />
            </Button>
          }
        />
        <Input
          id="new_password"
          register={register}
          required
          minLength={8}
          errors={errors}
          placeholder="New Passworld"
          type={passwordType}
          icon={
            <Button onClick={() => changePasswordType()} variant="clear">
              <EyeIcon />
            </Button>
          }
        />
        <Input
          id="new_password_repeat"
          register={register}
          required
          minLength={8}
          errors={errors}
          placeholder="Confirm Passworld"
          type={passwordRepeatType}
          icon={
            <Button onClick={() => changePasswordRepeatType()} variant="clear">
              <EyeIcon />
            </Button>
          }
        />
        <Button onClick={() => {}} type="submit" className={s.btn}>
          Change Passworld
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};
