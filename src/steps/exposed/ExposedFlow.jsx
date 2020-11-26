import React from "react";
import { useStateMachine } from "../../StateProvider";
import { Overview } from "./Overview";
import { ExposedDate } from "./ExposedDate";
import { CloseContact } from "./CloseContact";
import { EndDates } from "./EndDates";
import { ActionPlan } from "./ActionPlan";

export const ExposedFlow = () => {
  const { state } = useStateMachine();

  return (
    <div>
      {state.matches("exposed.overview") ? <Overview /> : null}
      {state.matches("exposed.exposedDate") ? <ExposedDate /> : null}
      {state.matches("exposed.closeContact") ? <CloseContact /> : null}
      {state.matches("exposed.displayEndDate") ? <EndDates /> : null}
      {state.matches("exposed.actionPlan") ? <ActionPlan /> : null}
    </div>
  );
};
