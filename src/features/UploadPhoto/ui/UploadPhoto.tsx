import { FC } from "react";

import s from "./styles.module.sass";

import { UploadIcon } from "shared/ui/UploadIcon";
import { useUpload } from "shared/lib";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IUploadPhotoProps {
  className?: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  id: string;
}

export const UploadPhoto: FC<IUploadPhotoProps> = ({
  className,
  label,
  register,
  id,
}) => {
  const uploadPhotoClass = `${s.uploadPhoto} ${className ? className : ""}`;
  // useUpload()
  return (
    <div className={uploadPhotoClass}>
      <UploadIcon />
      <span>{label}</span>
      <input type="file" {...register(id)} />
    </div>
  );
};
