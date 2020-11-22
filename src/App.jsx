import "./main.css";
import "./App.css";

import React from "react";
import { InitialQuestion } from "./steps/InitialQuestion";
import { DateQuestion } from "./steps/DateQuestion";
import { Disclaimer } from "./steps/Disclaimer";
import { ResultsStep } from "./steps/ResultsStep";
import { DoneStep } from "./steps/DoneStep";
import { useStateMachine } from "./StateProvider";
import { StepsWrapper } from "./components/StepsWrapper";
import { NavigationButtons } from "./components/NavigationButtons";
import { Scenario } from "./steps/Scenario";
import { PositiveFlow } from "./steps/positive-test/PositiveFlow";
import { PreventionFlow } from "./steps/prevention/PreventionFlow";
import { ExposedFlow } from "./steps/exposed/ExposedFlow";

import "react-datepicker/dist/react-datepicker.css";

export const App = () => {
  const { state } = useStateMachine();

  return (
    <div>
      <header
        className="p-2 
      flex
      justify-center
      text-sm
      md:text-2xl 
      font-bold
      uppercase
      bg-gray-800
      w-1/3"
      >
        <h1 className="text-gray-200 mb-0 ">Covid Clock</h1>
      </header>
      <main className="p-5 h-full ">
        {/* <StepsWrapper> */}
        {state.matches("disclaimer") ? <Disclaimer /> : null}
        {state.matches("scenario") ? <Scenario /> : null}
        {state.matches("positive") ? <PositiveFlow /> : null}
        {state.matches("exposed") ? <ExposedFlow /> : null}
        {state.matches("prevention") ? <PreventionFlow /> : null}
        {/* </StepsWrapper> */}
        {/* <pre className="text-base">
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre> */}
      </main>
    </div>
  );
};

export default App;
