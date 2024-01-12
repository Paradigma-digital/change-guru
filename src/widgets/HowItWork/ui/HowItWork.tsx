import { workList } from "../config";

import s from "./styles.module.sass";

import { Title } from "shared/ui";
import { HowItWorkCard } from "entities/HowItWorkCard";

export const HowItWork = () => {
  return (
    <div className={s.work}>
      <div className={`${s.content} container`}>
        <Title variant="h2">How It Work</Title>
        <p className={s.description}>
          Stacks is a production-ready library of stackable content blocks built
          in React Native
        </p>
        <div className={s.workList}>
          {workList.map((work) => (
            <HowItWorkCard
              key={work.id}
              img={work.img}
              title={work.title}
              description={work.description}
              step={work.step}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
