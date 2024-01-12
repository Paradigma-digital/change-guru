import s from "./styles.module.sass";

import { Converter } from "features/Converter";
import { Title } from "shared/ui";

export const Hero = () => {
  return (
    <div className={`${s.hero} container`}>
      <div className={s.top}>
        <div className={s.text}>
          <Title className={s.title}>
            Find Your <br /> Perfect Match
          </Title>
          <p>Discover the Best Exchange for Your Needs</p>
        </div>
        <img src="hero.png" alt="hero" className={s.heroImg} />
      </div>

      <Converter />
    </div>
  );
};
