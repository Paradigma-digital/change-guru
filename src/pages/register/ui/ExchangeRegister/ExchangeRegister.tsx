import { FC, useRef, useState } from "react";

import { countryList } from "shared/config";
import { changePasswordType } from "shared/lib";

import s from "./styles.module.sass";

import { Button, EyeIcon, Input, Selector } from "shared/ui";
import { UploadPhoto } from "features/UploadPhoto";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useRegisterExchangeStore } from "features/RegisterExchange";

interface IExchangeRegisterProps {
  onChangeStep: () => void;
}

export const ExchangeRegister: FC<IExchangeRegisterProps> = ({
  onChangeStep,
}) => {
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

  const store = useRegisterExchangeStore();
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      website: "",
      password: "",
      repeatPassword: "",
      email: "",
      enterEmail: "",
      country: "",
      code: "",
      city: "",
      state: "",
      address: "",
      inviteCode: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const {
        name,
        website,
        password,
        repeatPassword,
        email,
        enterEmail,
        country,
        code,
        city,
        state,
        address,
        inviteCode,
      } = data;

      const exhangeData = {
        e_name: name,
        e_website: website,
        e_email: email,
        password: password,
        password_repeat: repeatPassword,
        e_contact_mail: enterEmail,
        country: country,
        a_code: code,
        a_city: city,
        a_province: state,
        a_street: address,
        UID: inviteCode,
      };

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
      store.handleSetData(exhangeData);
      onChangeStep();
    } catch (e) {
      console.error("register error", e);
    }
  };

  return (
    <div className={s.exchangeRegister}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.section}>
          <span className={s.sectionTitle}>Basic Information</span>
          <Input
            id="name"
            register={register}
            placeholder="Name of Exchange"
            required
            errors={errors}
            className={s.input}
          />
          <Input
            id="website"
            register={register}
            placeholder="Web Site"
            required
            errors={errors}
            className={s.input}
          />
          {/* <UploadPhoto label="Upload Logo" /> */}
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Personal data</span>
          <div className={s.withHint}>
            <Input
              id="password"
              register={register}
              placeholder="Password"
              type={passwordType}
              required
              minLength={8}
              errors={errors}
              className={s.input}
              icon={
                <Button onClick={() => changePasswordType()} variant="clear">
                  <EyeIcon />
                </Button>
              }
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
            className={s.input}
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
          />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Contact Person</span>
          <div className={s.withHint}>
            <Input
              id="email"
              register={register}
              placeholder="Email"
              required
              errors={errors}
              pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|ru|ua)$/}
              type="email"
              className={s.input}
            />
            <p className={s.hint}>Excluding special characters</p>
          </div>
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Business E-Mail</span>
          <div className={s.withHint}>
            <Input
              id="enterEmail"
              register={register}
              placeholder="Enter Email"
              required
              errors={errors}
              pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|ru|ua)$/}
              type="email"
              className={s.input}
            />
            <p className={s.hint}>Excluding special characters</p>
          </div>
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Country</span>
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
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Address</span>
          <div className={s.address}>
            <Input
              id="code"
              register={register}
              required
              errors={errors}
              placeholder="Area Code"
            />
            <Input
              id="city"
              register={register}
              required
              errors={errors}
              placeholder="City"
            />
          </div>
          <Input
            id="state"
            register={register}
            errors={errors}
            placeholder="Province / State"
            className={s.input}
            required
          />
          <Input
            id="address"
            register={register}
            errors={errors}
            placeholder="Street / Address Details"
            className={s.input}
            required
          />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>UID Code</span>
          <Input
            id="inviteCode"
            register={register}
            placeholder="Please enter your invitation code"
            className={s.input}
          />
        </div>
        <Button onClick={() => {}} type="submit" className={s.nextBtn}>
          next
        </Button>
      </form>
    </div>
  );
};
