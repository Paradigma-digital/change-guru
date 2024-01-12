import s from "./styles.module.sass";

import { Button, GradientBg, Title } from "shared/ui";

export const RegisterComplited = () => {
  return (
    <div className={s.registerCompited}>
      <GradientBg />
      <div className={s.content}>
        <div className={s.text}>
          <Title>
            Thanks For Joining <br /> changeGuru
          </Title>
          <p className={s.description}>
            Your email is verified. Enjoy ChangeGuru.io
          </p>
          <Button onClick={() => {}} className={s.startBtn}>
            Start Trading
          </Button>
        </div>
        <div className={s.imageWrapper}>
          <img src="register-complited.png" alt="complited" />
        </div>
      </div>
    </div>
  );
};
