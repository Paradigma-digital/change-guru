import { Checkbox } from "shared/ui";
import s from "./styles.module.sass";
import { Control, Controller } from "react-hook-form";

export const TradingFeatures = ({ control }: { control: Control<any> }) => {
  return (
    <div className={s.section}>
      <span className={s.title}>Trading features</span>
      <div className={s.checkboxList}>
        <Controller
          control={control}
          name="tf_advancedtradingtool"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox
                onChange={onChange}
                value={value}
                id="advancedtradingtool"
              />
              <span>Advanced Trading Tools</span>
            </label>
          )}
        />
        <Controller
          control={control}
          name="tf_stoplossorders"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox onChange={onChange} value={value} id="stoplossorders" />
              <span>Stop-Loss Orders</span>
            </label>
          )}
        />
        <Controller
          control={control}
          name="tf_limitorders"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox onChange={onChange} value={value} id="limitOrders" />
              <span>Limit Orders</span>
            </label>
          )}
        />
        <Controller
          control={control}
          name="tf_margintrading"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox onChange={onChange} value={value} id="margintrading" />
              <span>Margin Trading</span>
            </label>
          )}
        />
        <Controller
          control={control}
          name="tf_marketorders"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox onChange={onChange} value={value} id="marketorders" />
              <span>Market Orders</span>
            </label>
          )}
        />
        <Controller
          control={control}
          name="tf_chartingtools"
          render={({ field: { onChange, value } }) => (
            <label className={s.label}>
              <Checkbox onChange={onChange} value={value} id="chartingtools" />
              <span>Charting Tools</span>
            </label>
          )}
        />
      </div>
    </div>
  );
};
