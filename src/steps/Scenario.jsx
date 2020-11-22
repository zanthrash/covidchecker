import React from "react";
import { useStateMachine } from "../StateProvider";
import { Button } from "../components/Button";
import { OptionsButton } from "../components/OptionsButton";
import { Header } from "../components/Header";

export const Scenario = () => {
  const { state, sendTo } = useStateMachine();

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
    <div>
      <Header>
        Please choose the option that best describes your situation:
      </Header>

      <div className="grid gap-2">
        <OptionsButton onClick={handlePositiveTest}>
          I have tested positive
        </OptionsButton>
        <OptionsButton onClick={handleExposed}>
          I have been exposed to someone with Covid-19
        </OptionsButton>
        <OptionsButton onClick={handlePreventionClick}>
          I am looking for prevention tips
        </OptionsButton>
      </div>
    </div>
  );
};
