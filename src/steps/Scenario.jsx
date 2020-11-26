import React from "react";
import { useStateMachine } from "../StateProvider";
import { OptionsButton } from "../components/OptionsButton";
import { Header } from "../components/Header";

export const Scenario = () => {
  const { sendTo } = useStateMachine();

  const handlePreventionClick = () => {
    sendTo("PREVENTION");
  };
  const handlePositiveTest = () => {
    sendTo("POSITIVE_TEST");
  };
  const handleExposed = () => {
    sendTo("EXPOSED");
  };

  return (
    <div className="flex flex-col items-center">
      <Header>
        Please choose the option that best describes your situation:
      </Header>

      <div className="grid gap-2 md:w-1/2">
        <OptionsButton onClick={handlePositiveTest}>
          I have tested positive
        </OptionsButton>
        <OptionsButton onClick={handleExposed}>
          I was exposed to someone who has COVID-19
        </OptionsButton>
        <OptionsButton onClick={handlePreventionClick}>
          I am looking for prevention tips
        </OptionsButton>
      </div>
    </div>
  );
};
