import "./main.css";
import "./App.css";

import React from "react";
import { Disclaimer } from "./steps/Disclaimer";
import { useStateMachine } from "./StateProvider";
import { Button } from "./components/Button";
import { Scenario } from "./steps/Scenario";
import { PositiveFlow } from "./steps/positive-test/PositiveFlow";
import { PreventionFlow } from "./steps/prevention/PreventionFlow";
import { ExposedFlow } from "./steps/exposed/ExposedFlow";
import { RiVirusLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";

import "react-datepicker/dist/react-datepicker.css";

export const App = () => {
  const { state, sendTo } = useStateMachine();

  const handleRestart = () => {
    sendTo("RESTART");
  };

  return (
    <div className="">
      <div className="flex justify-between items-center">
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
          <h1 className="text-gray-200 mb-0 flex items-center ">
            <RiVirusLine className="hidden md:block" />
            <span className="mx-2">Covid Clock</span>
            <AiOutlineClockCircle className="hidden md:block" />
          </h1>
        </header>
        {state.matches("positive") ||
        state.matches("exposed") ||
        state.matches("prevention") ? (
          <Button
            onClick={handleRestart}
            className="border-none hover:underline "
          >
            <IoMdArrowRoundBack className="inline-block" />
            Restart
          </Button>
        ) : null}
      </div>
      <main className="p-5 h-full container m-auto">
        {state.matches("disclaimer") ? <Disclaimer /> : null}
        {state.matches("scenario") ? <Scenario /> : null}
        {state.matches("positive") ? <PositiveFlow /> : null}
        {state.matches("exposed") ? <ExposedFlow /> : null}
        {state.matches("prevention") ? <PreventionFlow /> : null}
      </main>
    </div>
  );
};

export default App;
