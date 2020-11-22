import React from "react";
import { useStateMachine } from "../../StateProvider";
import { Button } from "../../components/Button";

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
      <p>Did you have any symptoms at the time of your Covid test?</p>
      <Button onClick={handleNoClick}>NO</Button>
      <Button onClick={handleYesClick}>YES</Button>
      <Button onClick={handleBack}>Back</Button>
    </div>
  );
};
