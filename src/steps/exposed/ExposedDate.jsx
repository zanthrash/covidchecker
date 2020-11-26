import React from "react";
import { useStateMachine } from "../../StateProvider";
import { DatePicker } from "../../components/DatePicker";
import { Header } from "../../components/Header";
import { excludeDatesAfterToday } from "../../utils/date";
import { NavigationButtons } from "../../components/NavigationButtons";

export const ExposedDate = () => {
  const { state, sendTo } = useStateMachine();
  React.useEffect(() => {
    const selectedDate = state.context.dateExposed ?? new Date();
    sendTo("SET_DATE", { date: selectedDate });
  }, [state.context.dateExposed, sendTo]);

  const handleDateChange = (date) => {
    sendTo("SET_DATE", { date });
  };

  return (
    <div className="flex flex-col w-full items-center">
      <Header>
        When was the most recent date you were exposed to this person while they
        had COVID?
      </Header>
      <div className="mb-56">
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
