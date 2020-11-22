import React from "react";
import { useStateMachine } from "../StateProvider";
import { Button } from "../components/Button";

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
      <p>Please choose the option that best describes your situation:</p>

      <Button onClick={handlePositiveTest}>I have tested positive</Button>
      <Button onClick={handleExposed}>
        I have been exposed to someone with Covid-19
      </Button>
      <Button onClick={handlePreventionClick}>
        Looking for prevention tips
      </Button>
    </div>
  );
};
