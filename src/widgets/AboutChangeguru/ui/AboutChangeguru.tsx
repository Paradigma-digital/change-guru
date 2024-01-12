import s from "./styles.module.sass";

import { Button, CheckIcon, Title } from "shared/ui";

export const AboutChangeguru = () => {
  return (
    <div className={`${s.about} container`}>
      <div className={s.content}>
        <div className={s.text}>
          <Title variant="h2">What Is Change Guru</Title>
          <p className={s.description}>
            ChangeGuru — Unleash the potential of top exchanges. Unlock a world
            of opportunities with our platform, providing you with direct access
            to renowed crypto exchanges, enabling you to seize the best trading
            opportunities and harness the potential of market
          </p>
        </div>

        <div className={s.reasons}>
          <div className={s.reason}>
            <div className={s.iconWrapper}>
              <CheckIcon />
            </div>
            <span className={s.reasonTitle}>
              View real-time cryptocurrency prices
            </span>
            <p className={s.reasonDescription}>
              Real-Time market Insights and Best Exchange Rates. Stay Ahead of
              the curve with Our Platform That Offers The Best Exchange Rates
              empowering you to optimize your trades and returns.
            </p>
          </div>
          <div className={s.reason}>
            <div className={s.iconWrapper}>
              <CheckIcon />
            </div>

            <span className={s.reasonTitle}>Enjoy Customer Service</span>
            <p className={s.reasonDescription}>
              We Understand the significance of reliable customer service in the
              trading world through our meticulous evalulation, we connect you
              with exchanges that prioritize your needs.
            </p>
          </div>
        </div>
        <Button onClick={() => {}} className={s.exploreBtn}>
          Explore More
        </Button>
        <img src="laptop.png" alt="laptop" />
      </div>
    </div>
  );
};
