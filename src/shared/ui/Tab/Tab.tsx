import {
  Tab as LibTab,
  ReactTabsFunctionComponent,
  TabProps,
} from "react-tabs";

import s from "./styles.module.sass";

export const Tab: ReactTabsFunctionComponent<TabProps> = ({
  children,
  ...otherProps
}) => {
  const { selected } = otherProps;

  const tabClass = `${s.tab} ${selected ? s.selected : ""}`;

  return (
    <LibTab {...otherProps} className={tabClass}>
      <div>{children}</div>
    </LibTab>
  );
};

Tab.tabsRole = "Tab";
