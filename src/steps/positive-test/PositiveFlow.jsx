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
      <div>{state.matches("positive.testedDate") ? <TestedDate /> : null}</div>
      <div>
        {state.matches("positive.symptomsAtTest") ? <SymptomsAtTest /> : null}
      </div>
      <div>
        {state.matches("positive.symptomsStartDate") ? <SymptomsDate /> : null}
      </div>
      <div>
        {state.matches("positive.displayEndDates") ? <EndDates /> : null}
      </div>
      <div>{state.matches("positive.actionPlan") ? <ActionPlan /> : null}</div>
    </>
  );
};
