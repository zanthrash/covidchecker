import React from "react";
import { useStateMachine } from "../../StateProvider";
import { Button } from "../../components/Button";
import { DatePicker } from "../../components/DatePicker";
import { Header } from "../../components/Header";
import { excludeDatesAfterToday } from "../../utils/date";
import { NavigationButtons } from "../../components/NavigationButtons";

export const ExposedDate = () => {
  const { state, sendTo } = useStateMachine();
  React.useEffect(() => {
    const selectedDate = state.context.dateExposed ?? new Date();
    sendTo("SET_DATE", { date: selectedDate });
  }, []);

  const handleDateChange = (date) => {
    sendTo("SET_DATE", { date });
  };

  return (
    <div className="flex flex-col w-full items-center">
      <Header>What date where you exposed on?</Header>
      <div className="mb-64">
        <DatePicker
          todayButton="Go to today"
          selected={state.context.dateExposed}
          onChange={handleDateChange}
          filterDate={excludeDatesAfterToday}
        />
      </div>
      <NavigationButtons />
    </div>
  );
};
