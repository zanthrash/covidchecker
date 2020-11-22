import { useStateMachine } from "../../StateProvider";
import React from "react";
import DatePicker from "react-datepicker";
import { isAfter } from "date-fns";
import { Button } from "../../components/Button";

export const TestedDate = () => {
  const { state, sendTo } = useStateMachine();

  React.useEffect(() => {
    const selectedDate = state.context.dateTested ?? new Date();
    sendTo("SET_DATE", { date: selectedDate });
  }, []);

  const handleDateChange = (date) => {
    sendTo("SET_DATE", { date });
  };

  const excludeDatesAfterToday = (date) => {
    return isAfter(Date.now(), date);
  };

  const handleBack = () => {
    sendTo("RESTART");
  };

  const handleNext = () => {
    sendTo("NEXT");
  };

  return (
    <div>
      <p>What date where you tested on</p>
      <div>
        <DatePicker
          todayButton="Go to today"
          selected={state.context.dateTested}
          onChange={handleDateChange}
          filterDate={excludeDatesAfterToday}
        />
      </div>
      <Button onClick={handleBack}>Back</Button>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};
