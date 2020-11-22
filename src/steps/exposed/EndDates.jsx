import React from "react";
import { addDays, formatDistanceStrict } from "date-fns";
import { Button } from "../../components/Button";
import { useStateMachine } from "../../StateProvider";
import { utcToMidwestDate } from "../../utils/date";

export const EndDates = () => {
  const { state, sendTo } = useStateMachine();
  const { dateExposed, continuedCloseContact, quarantineDate } = state.context;

  React.useEffect(() => {
    const quarantineDate = addDays(dateExposed, 14);

    sendTo("SET_DATE", { quarantineDate });
  }, []);

  const handleNextClick = () => {
    sendTo("NEXT");
  };

  const handleBackClick = () => {
    sendTo("BACK");
  };

  const handleRestartClick = () => {
    sendTo("RESTART");
  };

  return (
    <>
      <p>Date Exposed: {utcToMidwestDate(dateExposed)}</p>
      <hr />

      {quarantineDate && (
        <>
          <p>Quarantine Date: {utcToMidwestDate(quarantineDate)}</p>
          <p>
            ...which in{" "}
            {formatDistanceStrict(quarantineDate, Date.now(), { unit: "day" })}
          </p>
        </>
      )}

      <Button onClick={handleBackClick}>BACK</Button>
      <Button onClick={handleNextClick}>NEXT</Button>

      <Button onClick={handleRestartClick}>Restart</Button>
    </>
  );
};
