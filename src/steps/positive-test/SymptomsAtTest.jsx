import React from "react";
import { useStateMachine } from "../../StateProvider";
import { OptionsButton } from "../../components/OptionsButton";
import { Header } from "../../components/Header";
import { NavigationButtons } from "../../components/NavigationButtons";

export const SymptomsAtTest = () => {
  const { state, sendTo } = useStateMachine();

  const handleNoClick = () => {
    sendTo("NO");
  };

  const handleYesClick = () => {
    sendTo("YES");
  };

  const handleBack = () => {
    sendTo("BACK");
  };

  return (
    <div>
      <Header>Did you have any symptoms at the time of your Covid test?</Header>

      <div className="grid gap-4 mb-40 w-1/3">
        <OptionsButton onClick={handleNoClick}>NO</OptionsButton>
        <OptionsButton onClick={handleYesClick}>YES</OptionsButton>
      </div>

      <NavigationButtons hideNext={true} />
    </div>
  );
};
