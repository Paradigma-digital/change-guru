import { FC } from "react";

import s from "./styles.module.sass";

import { Title } from "shared/ui";

interface ISectionProps {
  img: string;
  title: string;
  paragraphs: string[];
  isLeftText: boolean;
}

export const Section: FC<ISectionProps> = ({
  img,
  title,
  paragraphs,
  isLeftText,
}) => {
  const sectionClass = `${s.section} ${isLeftText ? s.left : ""}`;

  return (
    <div className={sectionClass}>
      <div className={s.imageWrapper}>
        <img src={img} alt={title} />
      </div>
      <div className={s.text}>
        <Title variant="h2">{title}</Title>
        <div className={s.paragraphsList}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
