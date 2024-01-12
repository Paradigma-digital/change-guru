import { useEffect, useState } from "react";
import { TabList, TabPanel, Tabs } from "react-tabs";

import { breadcrumbsList } from "../../config";

import s from "./styles.module.sass";

import { Breadcrumbs, Title, Tab } from "shared/ui";
import { UserRegister } from "../UserRegister";
import { ExchangeRegister } from "../ExchangeRegister";
import { RegisterComplited } from "../RegisterComplited/RegisterComplited";
import { AdvancedSetting } from "features/AdvancedSetting";

export const RegisterPage = () => {
  const [registerStep, setRegisterStep] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const [isComplited, setCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  }, [registerStep, tabIndex, isComplited]);

  const titleCondition = () => {
    if (tabIndex === 0) {
      return "register";
    } else if (tabIndex === 1 && registerStep === 1) {
      return "Advanced Registration";
    } else {
      return "Register Your Exchange ";
    }
  };

  return (
    <div className={`${s.register} container`}>
      <Breadcrumbs breadcrumbs={breadcrumbsList} />
      {isComplited ? (
        <RegisterComplited />
      ) : (
        <>
          <div className={s.top}>
            <Title className="gradTitle">{titleCondition()}</Title>
            <p className={s.description}>
              {tabIndex === 0
                ? "Register in advance and enjoy the event benefits"
                : "Start The Process Today"}
            </p>
          </div>
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            className={s.tabs}
          >
            {registerStep === 0 ? (
              <>
                <TabList className={s.tabTitles}>
                  <Tab>User</Tab>
                  <Tab>Exchange</Tab>
                </TabList>
              </>
            ) : null}

            <TabPanel>
              <UserRegister onComplite={() => setCompleted(true)} />
            </TabPanel>
            <TabPanel>
              {registerStep === 0 ? (
                <ExchangeRegister onChangeStep={() => setRegisterStep(1)} />
              ) : (
                <AdvancedSetting onComplite={() => setCompleted(true)} />
              )}
            </TabPanel>
          </Tabs>
        </>
      )}
    </div>
  );
};
