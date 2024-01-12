import { countryList, genderList } from "shared/config";

import s from "./styles.module.sass";

import { Button, CalendarIcon, Input, Selector } from "shared/ui";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { userApi } from "shared/api";
import { useUserStore } from "entities/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

export const UserInformations = observer(() => {
  const [defaultCountry, setDefaultCountry] = useState({});
  const { userData, handleUpdateUser } = useUserStore();

  const notify = () =>
    toast.success("the information has been changed", {
      position: "bottom-right",
    });
  const {
    handleSubmit,
    register,
    control,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      first_name: "",
      last_name: "",
      country: "",
      email: "",
      phone: "",
      gender: "",
      age: "",
    },
  });

  useEffect(() => {
    if (userData) {
      setValue("first_name", userData.first_name);
      setValue("last_name", userData.last_name);
      setValue("country", {
        value: userData.country,
        label:
          userData.country.charAt(0).toUpperCase() + userData.country.slice(1),
      });
      setValue("email", userData.email);
      setValue("phone", userData.phone);
      setValue("gender", {
        value: userData.gender,
        label:
          userData.gender.charAt(0).toUpperCase() + userData.gender.slice(1),
      });
      setValue("age", userData.age);
      setDefaultCountry({
        value: userData.country,
        label:
          userData.country.charAt(0).toUpperCase() + userData.country.slice(1),
      });
    }
  }, [userData]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { first_name, last_name, country, email, phone, gender, age } = data;

    if (phone.replace(/\D/g, "").length < 11) {
      setError("phone", {
        type: "manual",
        message: "erroe message",
      });
      return;
    }

    const updateUserData = {
      first_name,
      last_name,
      country: country.value,
      email,
      phone: phone.replace(/\D/g, ""),
      gender: gender.value,
      age,
    };

    if (localStorage.getItem("token")) {
      await userApi.updateUser(updateUserData, localStorage.getItem("token"));
      handleUpdateUser(updateUserData);
      notify();
    }
  };

  return (
    <div className={s.info}>
      <span className={s.title}>Information</span>
      <form onSubmit={handleSubmit(onSubmit)} className={s.infoForm}>
        <Input
          id="first_name"
          register={register}
          required
          errors={errors}
          placeholder="First name"
        />
        <Input
          id="last_name"
          register={register}
          required
          errors={errors}
          placeholder="Last name"
        />
        <Input
          id="email"
          register={register}
          pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|ru|ua)$/}
          required
          placeholder="E-mail"
          className={s.input}
          errors={errors}
          type="email"
        />

        <Input
          id="phone"
          isPhone
          register={register}
          required
          placeholder="Phone"
          className={s.input}
          errors={errors}
        />
        <Controller
          control={control}
          name="country"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => {
            return (
              <Selector
                options={countryList}
                onChange={onChange}
                placeholder="Country"
                className={s.selector}
                name="country"
                errors={errors}
                defaultValue={value}
                value={value}
              />
            );
          }}
        />
        <div className={s.doubleInputs}>
          <Controller
            control={control}
            name="gender"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => {
              return (
                <Selector
                  options={genderList}
                  placeholder="Gender"
                  className={s.selector}
                  name="gender"
                  errors={errors}
                  onChange={onChange}
                  defaultValue={value}
                  value={value}
                />
              );
            }}
          />
          <Input
            id="age"
            register={register}
            required
            errors={errors}
            placeholder="DD/MM/YY"
            icon={<CalendarIcon />}
          />
        </div>
        <Button type="submit" onClick={() => {}} className={s.btn}>
          Save changes
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
});
