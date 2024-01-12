import { Breadcrumbs, Title, UserIcon } from "shared/ui";
import s from "./styles.module.sass";

import { useState } from "react";
import { UserInformations } from "features/UserInformations";
import { ChangePassword } from "features/ChangePassword";
import { Profile } from "widgets/Profile";
import { breadcrumbsList, menuList } from "../config";

export const UserProfilePage = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className={s.profile}>
      <div className={`${s.top} container`}>
        <Breadcrumbs breadcrumbs={breadcrumbsList} />
        <Title>User Profile</Title>
      </div>
      <div className={s.content}>
        <Profile currentTab={tab} changeTab={setTab} menuList={menuList} />
        <div className={s.mainContent}>
          {tab === 0 ? <UserInformations /> : <ChangePassword />}
        </div>
      </div>
    </div>
  );
};
