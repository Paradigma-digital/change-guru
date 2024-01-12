import { Dispatch, FC, ReactNode, SetStateAction, useEffect } from "react";

import s from "./styles.module.sass";

import { UploadPhoto } from "features/UploadPhoto";
import { DeleteIcon } from "shared/ui";
import { useUserStore } from "entities/User";
import { FieldValues, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { upload } from "@testing-library/user-event/dist/upload";
import { useUpload } from "shared/lib";
import { useExchangeStore } from "entities/Exchange";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type MenuList = {
  title: string;
  icon: ReactNode;
};

interface IProfileProps {
  currentTab: number;
  changeTab: Dispatch<SetStateAction<number>>;
  menuList: MenuList[];
}

export const Profile: FC<IProfileProps> = observer(
  ({ currentTab, changeTab, menuList }) => {
    const { userData, handleSetUserAvatar } = useUserStore();
    const { exchangeData, handleSetExchangeAvatar } = useExchangeStore();

    const authType = localStorage.getItem("authType") as "user" | "exchange";

    const notifyError = () =>
      toast.error("something went wrong", {
        position: "bottom-right",
      });

    const {
      register,
      watch,
      formState: { errors },
    } = useForm<FieldValues>({
      defaultValues: {
        avatarUrl: "",
      },
    });

    const watchImage = watch("avatarUrl");

    const { image, upload, error } = useUpload(watchImage[0], authType);

    useEffect(() => {
      upload();
    }, [watchImage]);

    useEffect(() => {
      if (image) {
        if (authType === "user") {
          handleSetUserAvatar(image);
        } else {
          handleSetExchangeAvatar(image);
        }
      }
    }, [image]);

    useEffect(() => {
      if (error) {
        notifyError();
      }
    }, [error]);

    return (
      <div className={s.profile}>
        <div className={s.user}>
          <div className={s.imageWrapper}>
            {authType === "user" ? (
              <>
                {
                  //@ts-ignore
                  userData?.avatar ? (
                    <img
                      src={`https://api.changeguru.io/static/img/${userData.avatar}`}
                      alt="user"
                    />
                  ) : (
                    <div className={s.imageSkeleton}></div>
                  )
                }
              </>
            ) : (
              <>
                {
                  //@ts-ignore
                  exchangeData?.avatar ? (
                    <img
                      src={`https://api.changeguru.io/static/img/${exchangeData.avatar}`}
                      alt="user"
                    />
                  ) : (
                    <div className={s.imageSkeleton}></div>
                  )
                }
              </>
            )}

            <div className={s.backdrop} />
            <UploadPhoto
              id="avatarUrl"
              register={register}
              label="Upload Photo"
              className={s.upload}
            />
          </div>
          <div className={s.userInfo}>
            {authType === "user" ? (
              <>
                <span className={s.name}>{userData?.first_name}</span>
                <span className={s.email}>{userData?.email}</span>
              </>
            ) : (
              <>
                <span className={s.name}>{exchangeData?.e_name}</span>
                <span className={s.email}>{exchangeData?.e_email}</span>
              </>
            )}
          </div>
        </div>
        <div className={s.menu}>
          {menuList.map((menu, index) => {
            const menuItemClass = `${s.menuItem} ${
              currentTab === index ? s.active : ""
            }`;
            return (
              <div
                key={index}
                className={menuItemClass}
                onClick={() => changeTab(index)}
              >
                {menu.icon}
                <span>{menu.title}</span>
              </div>
            );
          })}
          <div className={s.deleteProfile}>
            <DeleteIcon />
            <span>Delete profile</span>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
);
