import React from "react";
import { useStateMachine } from "../../StateProvider";
import { OptionsButton } from "../../components/OptionsButton";
import { Header } from "../../components/Header";
import { NavigationButtons } from "../../components/NavigationButtons";

export const SymptomsAtTest = () => {
  const { sendTo } = useStateMachine();

  const handleNoClick = () => {
    sendTo("NO");
  };

  const handleYesClick = () => {
    sendTo("YES");
  };

  return (
    <div className="flex flex-col items-center">
      <Header>
        Did you have any symptoms at the time of your COVID-19 test?
      </Header>

      <div className="grid gap-4 mb-40 w-30">
        <OptionsButton onClick={handleYesClick}>YES</OptionsButton>
        <OptionsButton onClick={handleNoClick}>NO</OptionsButton>
      </div>

      <NavigationButtons hideNext={true} />
    </div>
  );
};
