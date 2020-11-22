import { useStateMachine } from "../../StateProvider";
import React from "react";
import DatePicker from "react-datepicker";
import { isAfter } from "date-fns";
import { Button } from "../../components/Button";

export const SymptomsDate = () => {
  const { state, sendTo } = useStateMachine();

  React.useEffect(() => {
    const selectedDate =
      state.context.dateOfSymptomsStart ||
      state.context.dateTested ||
      Date.now();
    sendTo("SET_DATE", { date: selectedDate });
  }, []);

  const handleDateChange = (date) => {
    sendTo("SET_DATE", { date });
  };

  const excludeDatesAfterTestDate = (date) => {
    const testDate = state.context.dateTested || Date.now();
    return isAfter(testDate, date);
  };

  const handleBack = () => {
    sendTo("BACK");
  };

  const handleNext = () => {
    sendTo("NEXT");
  };

  return (
    <div>
      <p>What date did your symptoms start?</p>
      <div>
        <DatePicker
          todayButton="Go to today"
          selected={state.context.dateOfSymptomsStart}
          onChange={handleDateChange}
          filterDate={excludeDatesAfterTestDate}
        />
      </div>
      <Button onClick={handleBack}>Back</Button>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};
