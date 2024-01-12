import { Checkbox } from "shared/ui";
import s from "./styles.module.sass";
import { Control, Controller } from "react-hook-form";

export const AdvancedFeatures = ({ control }: { control: Control<any> }) => {
  return (
    <div className={s.section}>
      <span className={s.title}>Advanced features</span>
      <div className={s.checkboxList}>
        <Controller
          control={control}
          name="af_2fa"
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox onChange={onChange} value={value} id="2fa" />
              <span>2FA</span>
            </label>
          )}
        />
        <Controller
          control={control}
          name="af_aml"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox onChange={onChange} value={value} id="aml" />
              <span>AML</span>
            </label>
          )}
        />
        <Controller
          control={control}
          name="af_whitelisting"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox onChange={onChange} value={value} id="whitelisting" />
              <span>Whitelisting</span>
            </label>
          )}
        />
        <Controller
          control={control}
          name="af_mobileapp"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox onChange={onChange} value={value} id="mobileApp" />
              <span>Mobile App</span>
            </label>
          )}
        />
        <Controller
          control={control}
          name="af_apiaccess"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox onChange={onChange} value={value} id="apiaccess" />
              <span>API Acces</span>
            </label>
          )}
        />
        <Controller
          control={control}
          name="af_insurancecoverage"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox
                onChange={onChange}
                value={value}
                id="insurancecoverage"
              />
              <span>Insurance Coverage</span>
            </label>
          )}
        />
      </div>
    </div>
  );
};
