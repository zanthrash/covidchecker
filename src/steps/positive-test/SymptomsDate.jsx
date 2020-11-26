import { useStateMachine } from "../../StateProvider";
import React from "react";
import { isAfter } from "date-fns";
import { NavigationButtons } from "../../components/NavigationButtons";
import { DatePicker } from "../../components/DatePicker";
import { Header } from "../../components/Header";

export const SymptomsDate = () => {
  const { state, sendTo } = useStateMachine();

  React.useEffect(() => {
    const selectedDate =
      state.context.dateOfSymptomsStart ||
      state.context.dateTested ||
      Date.now();
    sendTo("SET_DATE", { date: selectedDate });
  }, [sendTo, state.context.dateOfSymptomsStart, state.context.dateTested]);

  const handleDateChange = (date) => {
    sendTo("SET_DATE", { date });
  };

  const excludeDatesAfterTestDate = (date) => {
    const testDate = state.context.dateTested || Date.now();
    return isAfter(testDate, date);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <Header>What date did your symptoms start?</Header>
      <div className="mb-64">
        <DatePicker
          todayButton="Go to today"
          selected={state.context.dateOfSymptomsStart}
          onChange={handleDateChange}
          filterDate={excludeDatesAfterTestDate}
        />
      </div>
      <NavigationButtons />
    </div>
  );
};
