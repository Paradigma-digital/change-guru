import { FC } from "react";

import s from "./styles.module.sass";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface ITextAreaProps {
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  id: string;
  required?: boolean;
  errors?: FieldErrors;
  className?: string;
}

export const TextArea: FC<ITextAreaProps> = ({
  placeholder,
  register,
  id,
  required,
  errors,
  className,
}) => {
  const textareaClassWrapper = `${s.textarea} ${className ? className : ""} ${
    errors && errors[id] ? s.error : ""
  }`;
  return (
    <textarea
      {...register(id, { required })}
      className={textareaClassWrapper}
      placeholder={placeholder}
    ></textarea>
  );
};
