import s from "./styles.module.sass";

import { AdvancedSetting } from "features/AdvancedSetting";

export const AdvancedProfile = () => {
  return (
    <div className={s.advancedProfile}>
      <span className={s.title}>Advanced Profile</span>
      <AdvancedSetting type="update" onComplite={() => {}} />
    </div>
  );
};
