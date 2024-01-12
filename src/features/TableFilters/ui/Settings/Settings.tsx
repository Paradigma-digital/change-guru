import { Dispatch, FC, SetStateAction } from "react";

import s from "./styles.module.sass";

import { Selector, Button, CancelIcon } from "shared/ui";
import { Control, Controller } from "react-hook-form";
import { kycList, liquidityList, resptimeList } from "shared/config";

interface ISettingsProps {
  handleOpen: Dispatch<SetStateAction<boolean>>;
  reset: () => void;
  control: Control<any>;
}

export const Settings: FC<ISettingsProps> = ({
  handleOpen,
  reset,
  control,
}) => {
  return (
    <div className={s.settingsSection}>
      <div className={s.top}>
        <span className={s.title}>Settings</span>
        <div className={s.selectors}>
          <Controller
            control={control}
            name="support_resptime"
            render={({ field: { onChange, value } }) => {
              return (
                <Selector
                  name="support_resptime"
                  placeholder="Response Time"
                  options={resptimeList}
                  className={s.selector}
                  onChange={onChange}
                  value={value}
                />
              );
            }}
          />
          <Controller
            control={control}
            name="kyc_level"
            render={({ field: { onChange, value } }) => {
              return (
                <Selector
                  name="kyc_level"
                  placeholder="KYC Level"
                  options={kycList}
                  className={s.selector}
                  onChange={onChange}
                  value={value}
                />
              );
            }}
          />
          <Controller
            control={control}
            name="liquidity_volume"
            render={({ field: { onChange, value } }) => {
              return (
                <Selector
                  name="liquidity_volume"
                  placeholder="Liquidity Volume"
                  options={liquidityList}
                  className={s.selector}
                  onChange={onChange}
                  value={value}
                />
              );
            }}
          />
        </div>
      </div>

      <div className={s.bottom}>
        <div className={s.mainBtns}>
          <Button
            onClick={() => {
              handleOpen(false);
            }}
            type="submit"
          >
            apply
          </Button>
          <Button onClick={reset} variant="additional">
            reset
          </Button>
        </div>
        <Button
          onClick={() => handleOpen(false)}
          variant="clear"
          className={s.cancelBtn}
        >
          <CancelIcon />
          Cancel
        </Button>
      </div>
    </div>
  );
};
