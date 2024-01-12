import {
  DetailedHTMLProps,
  FC,
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";
import InputMask from "react-input-mask";

import s from "./styles.module.sass";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface IInutProps {
  id: string;
  required?: boolean;
  placeholder: string;
  className?: string;
  type?: string;
  icon?: ReactNode;
  ref?: ForwardedRef<HTMLInputElement>;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  onChange?: () => void;
  value?: string;
  isPhone?: boolean;
  pattern?: RegExp;
  minLength?: number;
}

export const Input: FC<IInutProps> = forwardRef((props, ref) => {
  const {
    className,
    type,
    placeholder,
    icon,
    register,
    id,
    required,
    pattern = /.*/,
    errors,
    value,
    isPhone,
    minLength = 0,
  } = props;

  const inputClassWrapper = `${s.inputLabelWrapper} ${
    className ? className : ""
  } ${errors && errors[id] ? s.error : ""}`;

  return (
    <>
      {isPhone ? (
        <label className={inputClassWrapper}>
          <InputMask
            className={s.input}
            mask="+9 (999) 999-9999"
            id={id}
            placeholder={placeholder}
            {...register(id, { required })}
          />
          <div className={s.icon}>{icon ? icon : null}</div>
        </label>
      ) : (
        <label className={inputClassWrapper}>
          <input
            type={type}
            {...register(id, { required, pattern, minLength })}
            className={s.input}
            placeholder={placeholder}
            value={value}
          />
          <div className={s.icon}>{icon ? icon : null}</div>
        </label>
      )}
    </>
  );
});
