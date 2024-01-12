import { useState } from "react";

import { accordionList, breadcrumbsList } from "../config";

import s from "./styles.module.sass";

import { Accordion, Breadcrumbs, GradientBg, Title } from "shared/ui";

export const FaqPage = () => {
  const [selectedAccordion, setSelectedAccordion] = useState<number | null>(
    null
  );

  const toggleAccordion = (index: number) => {
    if (selectedAccordion === index) {
      setSelectedAccordion(null);
      return;
    }
    setSelectedAccordion(index);
  };

  return (
    <div className={s.faq}>
      <GradientBg />
      <div className={`${s.content} container`}>
        <Breadcrumbs breadcrumbs={breadcrumbsList} />
        <div className={s.mainContent}>
          <div className={s.text}>
            <div className={s.top}>
              <Title className={s.title}>
                What Is <br /> ChangeGuru
              </Title>
              <p className={s.description}>Learn how to get started</p>
            </div>
            <div className={s.accordionList}>
              {accordionList.map((accordion, index) => (
                <Accordion
                  key={accordion.id}
                  title={accordion.title}
                  text={accordion.text}
                  onClick={() => toggleAccordion(index)}
                  isShow={selectedAccordion === index}
                />
              ))}
            </div>
          </div>
          <img src="faq.png" alt="faq" />
        </div>
      </div>
    </div>
  );
};
