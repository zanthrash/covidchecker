import React from "react";
// import { DatePicker} from "antd";
import { useStateMachine } from "../StateProvider";
import moment from "moment";
import { DateQuestionCopy } from "../constants";
import { NavigationButtons } from "../components/NavigationButtons";

export const DateQuestion = () => {
  const { state, sendTo } = useStateMachine();
  const [dateValue, setDateValue] = React.useState();

  const handleNext = () => {
    sendTo("NEXT", { date: dateValue });
  };
  const handleBack = () => {
    sendTo("BACK");
  };

  const updateDate = (date) => {
    console.log("date changed", date);
    setDateValue(date);
  };

  React.useEffect(() => {
    setDateValue(state.context.date || moment());
  }, [state.context.date]);

  const disabledDates = (current) => {
    return current && current > moment().endOf("day");
  };

  return (
    <div className="flex flex-col">
      <p className="text-lg font-semibold">
        {DateQuestionCopy[state.context.initialAnswer]}
      </p>

      {/* <DatePicker
        allowClear
        size="large"
        value={dateValue}
        onChange={updateDate}
        defaultValue={moment()}
        disabledDate={disabledDates}
      /> */}

      <NavigationButtons onNext={handleNext} onBack={handleBack} />
    </div>
  );
};
