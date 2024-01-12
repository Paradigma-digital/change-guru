import s from "./styles.module.sass";

import { ExchangeTable } from "widgets/ExchangeTable";
import { Hero } from "../Hero/Hero";
import { HowItWork } from "widgets/HowItWork";
import { AboutChangeguru } from "widgets/AboutChangeguru";
import { GradientBg } from "shared/ui";

export const MainPage = () => {
  return (
    <div className={s.main}>
      <GradientBg />
      <Hero />
      <ExchangeTable />
      <HowItWork />
      <AboutChangeguru />
    </div>
  );
};
