import { FC } from "react";
import { NavLink } from "react-router-dom";

import s from "./styles.module.sass";

type BreadcrumbsType = {
  link: string;
  title: string;
};

interface IBreadcrumbsProps {
  breadcrumbs: BreadcrumbsType[];
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <div className={s.breadcrumbs}>
      {breadcrumbs.map((breadcrumb) => (
        <NavLink to={breadcrumb.link} key={breadcrumb.title} className={s.link}>
          {breadcrumb.title}
        </NavLink>
      ))}
    </div>
  );
};
