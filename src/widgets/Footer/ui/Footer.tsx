import s from "./styles.module.sass";

import { FooterIcon, Title } from "shared/ui";

export const Footer = () => {
  return (
    <footer className={`${s.footer} container`}>
      <FooterIcon />
      <div className={s.text}>
        <Title variant="h2">Earn up to $25 worth of crypto</Title>
        <p className={s.description}>
          Discover how specific cryptocurrencies work — and get a bit of each
          crypto to try out for yourself.
        </p>
      </div>
    </footer>
  );
};
