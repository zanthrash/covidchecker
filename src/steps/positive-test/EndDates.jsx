import React from "react";
import { useStateMachine } from "../../StateProvider";
import { addDays, subDays, formatDistanceStrict, format } from "date-fns";
import { utcToZonedTime } from "date-fns-timezone";
import { listTimeZones } from "timezone-support";
import { Button } from "../../components/Button";
import { utcToMidwestDate } from "../../utils/date";

const dateFormat = "cccc, MMMM d y";

export const EndDates = () => {
  const { state, sendTo } = useStateMachine();
  const {
    dateOfSymptomsStart,
    dateTested,
    isolationDate,
    infectiousDate,
  } = state.context;

  React.useEffect(() => {
    console.log(listTimeZones());
    const isolationDate = dateOfSymptomsStart
      ? addDays(dateOfSymptomsStart, 10)
      : addDays(dateTested, 10);

    const infectiousDate = dateOfSymptomsStart
      ? subDays(dateOfSymptomsStart, 2)
      : subDays(dateTested, 2);

    sendTo("SET_DATES", { isolationDate, infectiousDate });
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
      <p> This are the days you can crawl out of your hole.</p>
      <p>Date Tested: {utcToMidwestDate(dateTested)}</p>
      {dateOfSymptomsStart && (
        <p>Date of Symptoms: {utcToMidwestDate(dateOfSymptomsStart)}</p>
      )}
      <hr />

      {isolationDate && (
        <>
          <p>Isolation Date: {utcToMidwestDate(isolationDate)}</p>
          <p>
            ...which in{" "}
            {formatDistanceStrict(isolationDate, Date.now(), { unit: "day" })}
          </p>
        </>
      )}

      {infectiousDate && (
        <>
          <p>Infectious Date: {utcToMidwestDate(infectiousDate)}</p>
          <p>
            ...which was{" "}
            {formatDistanceStrict(infectiousDate, Date.now(), {
              unit: "day",
              addSuffix: true,
            })}
          </p>
        </>
      )}

      <Button onClick={handleBackClick}>BACK</Button>
      <Button onClick={handleNextClick}>NEXT</Button>

      <Button onClick={handleRestartClick}>Restart</Button>
    </>
  );
};
