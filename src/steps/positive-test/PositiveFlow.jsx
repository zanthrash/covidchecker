import React from "react";
import { TestedDate } from "./TestedDate";
import { SymptomsDate } from "./SymptomsDate";
import { SymptomsAtTest } from "./SymptomsAtTest";
import { EndDates } from "./EndDates";
import { useStateMachine } from "../../StateProvider";
import { ActionPlan } from "./ActionPlan";

export const PositiveFlow = () => {
  const { state, sentTo } = useStateMachine();

  return (
    <>
      {state.matches("positive.testedDate") ? <TestedDate /> : null}
      {state.matches("positive.symptomsAtTest") ? <SymptomsAtTest /> : null}
      {state.matches("positive.symptomsStartDate") ? <SymptomsDate /> : null}
      {state.matches("positive.displayEndDates") ? <EndDates /> : null}
      {state.matches("positive.actionPlan") ? <ActionPlan /> : null}
    </>
  );
};
