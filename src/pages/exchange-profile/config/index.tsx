import { PATH_PAGE } from "shared/config";
import { AdvancedIcon, ContactIcon, PasswordIcon, UserIcon } from "shared/ui";

export const breadcrumbsList = [
  {
    link: PATH_PAGE.root,
    title: "Home",
  },
  {
    link: PATH_PAGE.userProfile,
    title: "User Profile",
  },
];

export const menuList = [
  { title: "User Profile", icon: <UserIcon /> },
  { title: "Contact Detials", icon: <ContactIcon /> },
  { title: "Advanced Profile", icon: <AdvancedIcon /> },
  { title: "Change password", icon: <PasswordIcon /> },
];
