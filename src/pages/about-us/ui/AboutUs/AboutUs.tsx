import { breadcrumbsList, sectionList } from "../../config";

import s from "./styles.module.sass";

import { Section } from "../Section/Section";
import { Breadcrumbs, GradientBg, Title } from "shared/ui";

export const AboutUsPage = () => {
  return (
    <div className={s.about}>
      <GradientBg />
      <div className={`${s.content} container`}>
        <Breadcrumbs breadcrumbs={breadcrumbsList} />
        <Title className={s.title}>About us</Title>
        <div className={s.sections}>
          {sectionList.map((section) => (
            <Section
              key={section.id}
              img={section.img}
              title={section.title}
              paragraphs={section.paragraphs}
              isLeftText={section.isLeftText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
