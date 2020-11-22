import React from "react";
import { useStateMachine } from "../StateProvider";
import moment from "moment";
import { NavigationButtons } from "../components/NavigationButtons";

export const ResultsStep = () => {
  const { state, sendTo } = useStateMachine();
  const [targetDate, setTargetDate] = React.useState();

  const handleBackClick = () => {
    sendTo("BACK");
  };

  const handleDoneClick = () => {
    sendTo("NEXT");
  };

  React.useEffect(() => {
    const twoWeeksFromDate = moment(state.context.date).add(14, "days");
    setTargetDate(twoWeeksFromDate);
    sendTo("SET_TARGET_DATE", { targetDate: twoWeeksFromDate });
  }, [state.context.date, sendTo]);

  return (
    <div>
      <p>
        Ok...You didn't say inside and away from other people like all the
        health professionals have been telling you for months.
      </p>
      <p>
        But now you have to suck it up, be an adult, and say inside for the
        next:
      </p>
      <h2 className="text-3xl">{moment().to(targetDate, true)}</h2>
      You can cautiously (mask, social distancing, hand washing ) be around
      another human on:
      <h2 className="text-3xl">{targetDate?.format("dddd, MMMM Do YYYY")}</h2>
      <NavigationButtons onBack={handleBackClick} onNext={handleDoneClick} />
    </div>
  );
};
