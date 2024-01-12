import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import s from "./styles.module.sass";

import { Button, Input } from "shared/ui";
import { useEffect } from "react";
import { useExchangeStore } from "entities/Exchange";
import { exchangeApi } from "shared/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { observer } from "mobx-react-lite";

export const ContactDetials = observer(() => {
  const { exchangeData, handleSetUpdateContacts } = useExchangeStore();
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
      e_phone: "",
      e_whatsapp: "",
      e_telegram: "",
      e_twitter: "",
      e_discord: "",
      e_instagram: "",
      e_facebook: "",
      e_reddit: "",
    },
  });

  useEffect(() => {
    if (exchangeData) {
      setValue("e_phone", exchangeData.e_socials.e_phone);
      setValue("e_whatsapp", exchangeData.e_socials.e_whatsapp);
      setValue("e_telegram", exchangeData.e_socials.e_telegram);
      setValue("e_twitter", exchangeData.e_socials.e_twitter);
      setValue("e_discord", exchangeData.e_socials.e_discord);
      setValue("e_instagram", exchangeData.e_socials.e_instagram);
      setValue("e_facebook", exchangeData.e_socials.e_facebook);
      setValue("e_reddit", exchangeData.e_socials.e_reddit);
    }
  }, [exchangeData]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const {
      e_phone,
      e_whatsapp,
      e_telegram,
      e_twitter,
      e_discord,
      e_instagram,
      e_facebook,
      e_reddit,
    } = data;

    if (e_phone.replace(/\D/g, "").length < 11) {
      setError("e_phone", {
        type: "manual",
        message: "erroe message",
      });
      return;
    }

    const updateData = {
      e_phone: e_phone.replace(/\D/g, ""),
      e_whatsapp: e_whatsapp.replace(/\D/g, ""),
      e_telegram,
      e_twitter,
      e_discord,
      e_instagram,
      e_facebook,
      e_reddit,
    };

    if (localStorage.getItem("token")) {
      await exchangeApi.updateContactsExchange(
        updateData,
        localStorage.getItem("token")
      );
      handleSetUpdateContacts(updateData);
      notify();
    }
  };

  return (
    <div className={s.details}>
      <span className={s.title}>Contact Detials</span>
      <form onSubmit={handleSubmit(onSubmit)} className={s.detailsForm}>
        <Input
          id="e_phone"
          isPhone
          required
          register={register}
          placeholder="Phone"
          className={s.input}
          errors={errors}
        />

        <div className={s.detailsList}>
          <Input
            id="e_whatsapp"
            isPhone
            required
            register={register}
            placeholder="Whatsapp"
            className={s.input}
            errors={errors}
          />
          <Input
            id="e_telegram"
            required
            register={register}
            placeholder="Telegram"
            errors={errors}
          />
          <Input
            id="e_twitter"
            required
            register={register}
            placeholder="Twitter"
            errors={errors}
          />
          <Input
            id="e_discord"
            required
            register={register}
            placeholder="Discord"
            errors={errors}
          />
          <Input
            id="e_instagram"
            required
            register={register}
            placeholder="Instagram"
            errors={errors}
          />
          <Input
            id="e_facebook"
            required
            register={register}
            placeholder="Facebook"
            errors={errors}
          />
          <Input
            id="e_reddit"
            required
            register={register}
            placeholder="Reddit"
            errors={errors}
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
