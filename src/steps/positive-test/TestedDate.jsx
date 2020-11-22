import { useStateMachine } from "../../StateProvider";
import React from "react";
// import DatePicker from "react-datepicker";
import { isAfter } from "date-fns";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { NavigationButtons } from "../../components/NavigationButtons";
import { DatePicker } from "../../components/DatePicker";

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

  return (
    <div className="flex flex-col w-full items-center">
      <Header>What date where you tested on?</Header>
      <div className="mb-56">
        <DatePicker
          className="rounded-md
          border-gray-500
          border-2
          text-xl
          p-2
          "
          todayButton="Go to today"
          selected={state.context.dateTested}
          onChange={handleDateChange}
          filterDate={excludeDatesAfterToday}
        />
      </div>
      <NavigationButtons />
    </div>
  );
};
