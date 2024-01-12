import { Checkbox } from "shared/ui";
import s from "./styles.module.sass";
import { Control, Controller } from "react-hook-form";

export const CustomerService = ({ control }: { control: Control<any> }) => {
  return (
    <div className={s.section}>
      <span className={s.title}>Customer service</span>
      <div className={s.checkboxList}>
        <Controller
          control={control}
          name="cs_24support"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox onChange={onChange} value={value} id="support" />
              <span>24/7 Support</span>
            </label>
          )}
        />
        <Controller
          control={control}
          name="cs_email"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox onChange={onChange} value={value} id="email" />
              <span>E-Mail</span>
            </label>
          )}
        />
        <Controller
          control={control}
          name="cs_callcenter"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox onChange={onChange} value={value} id="center" />
              <span>Call Center</span>
            </label>
          )}
        />
        <Controller
          control={control}
          name="cs_livechat"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox onChange={onChange} value={value} id="chat" />
              <span>Live Chat</span>
            </label>
          )}
        />
        <Controller
          control={control}
          name="cs_whatsapp"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox onChange={onChange} value={value} id="whatsapp" />
              <span>Whatsapp</span>
            </label>
          )}
        />
      </div>
    </div>
  );
};
