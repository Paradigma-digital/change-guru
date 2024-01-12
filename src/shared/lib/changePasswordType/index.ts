import { RefObject } from "react";

export const changePasswordType = (ref: RefObject<HTMLInputElement>) => {
  if (ref.current) {
    if (ref.current.type === "password") {
      ref.current.type = "text";
    } else {
      ref.current.type = "password";
    }
  }
};
