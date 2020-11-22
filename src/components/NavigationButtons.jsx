import React from "react";
import { NavigationButton } from "./NavigationButton";
import { useStateMachine } from "../StateProvider";

export const NavigationButtons = ({ hideNext }) => {
  const { state, sendTo } = useStateMachine();

  const handleBack = () => {
    sendTo("BACK");
  };

  const handleNext = () => {
    sendTo("NEXT");
  };

  return (
    <div className="flex justify-between w-2/3">
      <NavigationButton onClick={handleBack}>Back</NavigationButton>
      {hideNext ? (
        <div />
      ) : (
        <NavigationButton onClick={handleNext}>Next</NavigationButton>
      )}
    </div>
  );
};
