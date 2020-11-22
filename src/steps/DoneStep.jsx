import React from "react";
import { useStateMachine } from "../StateProvider";
import AddToCal from "@culturehq/add-to-calendar";
import { NavigationButtons } from "../components/NavigationButtons";
import { sampleMessageCopy } from "../constants";

export const DoneStep = () => {
  const { state, sendTo } = useStateMachine();

  const handleNext = () => {
    sendTo("NEXT");
  };

  const handleBack = () => {
    sendTo("BACK");
  };

  const { targetDate } = state.context;

  return (
    <div>
      <p className="text-2xl">Remember avoid other humans until after:</p>

      <div className="flex justify-center bg-red-700 py-3 px-6 text-white rounded-lg focus:shadow-outline">
        {targetDate && (
          <AddToCal
            event={{
              name: "Last day of COVID self isolation",
              details: "Last day of COVID self isolation",
              location: "My House",
              startsAt: `${targetDate.clone().startOf("day")}`,
              endsAt: `${targetDate.clone().endOf("day")}`,
            }}
          >
            <div>
              <div className="text-2xl leading-none mb-2">
                {targetDate?.format("dddd, MMMM Do YYYY")}
              </div>
              <div className="text-sm">Click to add to calendar</div>
            </div>
          </AddToCal>
        )}
      </div>

      <h4 className="text-lg">Notify others</h4>
      <p>
        Here is a sample message to let other know that they might want to get
        tested.
      </p>

      <div className="text-lg bg-white p-4">
        <p>Hey dummy,</p>
        <p>This is [YOUR_NAME],</p>
        <p>{sampleMessageCopy[state.context.initialAnswer]}</p>
      </div>
      <ul>
        <li>Copy message to clipboard</li>
        <li>Send email</li>
      </ul>

      <NavigationButtons onBack={handleBack} onNext={handleNext} />
    </div>
  );
};
