import React from "react";
import { useStateMachine } from "../../StateProvider";
import { Button } from "../../components/Button";
import DatePicker from "react-datepicker";
import {} from "date-fns";
import { excludeDatesAfterToday } from "../../utils/date";

export const ExposedDate = () => {
  const { state, sendTo } = useStateMachine();
  React.useEffect(() => {
    const selectedDate = state.context.dateExposed ?? new Date();
    sendTo("SET_DATE", { date: selectedDate });
  }, []);

  const handleDateChange = (date) => {
    sendTo("SET_DATE", { date });
  };

  const handleNext = () => {
    sendTo("NEXT");
  };

  const handleBack = () => {
    sendTo("BACK");
  };

  return (
    <div>
      <p>What date where you exposed on?</p>
      <DatePicker
        todayButton="Go to today"
        selected={state.context.dateExposed}
        onChange={handleDateChange}
        filterDate={excludeDatesAfterToday}
      />
      <Button onClick={handleBack}>Back</Button>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};
