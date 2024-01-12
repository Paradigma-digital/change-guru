import { FC, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";

import { useModalStore } from "entities/Modal";

import s from "./styles.module.sass";

import { changePasswordType } from "shared/lib/changePasswordType";
import { Backdrop, Button, EyeIcon, Input, ModalWrapper } from "shared/ui";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { exchangeApi, userApi } from "shared/api";
import { getExchange, getUser } from "shared/lib";
import { useUserStore } from "entities/User";
import { useExchangeStore } from "entities/Exchange";
import { useLocation, useNavigate } from "react-router-dom";

interface IFooterProps {
  onClick: () => void;
}

export const LoginModal = observer(() => {
  const [showModal, setShowModal] = useState(false);

  const {
    loginModalIsOpen,
    handleOpenLoginModal,
    handleOpenRecoveryModal: openRecover,
  } = useModalStore();

  useEffect(() => {
    setShowModal(loginModalIsOpen);
  }, [loginModalIsOpen]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      handleOpenLoginModal();
    }, 300);
  };

  const handleOpenRecoverModal = () => {
    handleClose();
    openRecover();
  };

  if (!loginModalIsOpen) {
    return null;
  }

  return (
    <Backdrop handleClose={handleClose} show={showModal}>
      <ModalWrapper
        title="login"
        body={<BodyModal />}
        footer={<FooterModal onClick={handleOpenRecoverModal} />}
        onClose={handleClose}
      />
    </Backdrop>
  );
});

const BodyModal = () => {
  const [passwordType, setPasswordType] = useState("password");

  const { handleSetUserData } = useUserStore();
  const { handleSetExchangeData } = useExchangeStore();
  const { handleOpenLoginModal } = useModalStore();
  const location = useLocation();
  const navigate = useNavigate();
  const notify = () =>
    toast.error("something went wrong", {
      position: "bottom-right",
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;

    const authData = {
      email,
      password,
    };
    try {
      try {
        const resData = await userApi.authUser(authData);

        if (resData.code === 200 && resData.status) {
          getUser(resData.result.auth.auth_hash, handleSetUserData);
          localStorage.setItem("token", resData.result.auth.auth_hash);
          localStorage.setItem("authType", "user");
          handleOpenLoginModal();
          document.body.classList.remove("noScroll");
        }
      } catch (e) {
        const resData = await exchangeApi.authExchange(authData);

        if (resData.code === 200 && resData.status) {
          getExchange(resData.result.auth.auth_hash, handleSetExchangeData);
          localStorage.setItem("token", resData.result.auth.auth_hash);
          localStorage.setItem("authType", "exchange");
          handleOpenLoginModal();
          document.body.classList.remove("noScroll");
          if (location.pathname === "/register") {
            navigate("/");
          }
        }
      }
    } catch (e) {
      notify();
      console.log("auth error", e);
    }
  };

  const changePasswordType = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.body}>
      <Input
        errors={errors}
        required
        id="email"
        register={register}
        placeholder="Email/ID"
      />
      <Input
        errors={errors}
        required
        id="password"
        register={register}
        placeholder="Password"
        type={passwordType}
        // ref={passwordRef}
        icon={
          <Button onClick={() => changePasswordType()} variant="clear">
            <EyeIcon />
          </Button>
        }
      />
      <Button type="submit" onClick={() => {}} className={s.loginBtn}>
        Login
      </Button>
      <ToastContainer />
    </form>
  );
};

const FooterModal: FC<IFooterProps> = ({ onClick }) => {
  return (
    <div className={s.footer}>
      <Button onClick={onClick} variant="clear" className={s.recoveryBtn}>
        Forgot password ?
      </Button>
    </div>
  );
};
