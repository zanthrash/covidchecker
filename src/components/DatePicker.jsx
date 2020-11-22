import React from "react";
import ReactDatePicker from "react-datepicker";

export const DatePicker = ({ selected, filterDate, onChange }) => {
  return (
    <ReactDatePicker
      className="rounded-md
          border-gray-500
          border-2
          text-xl
          p-2
          "
      todayButton="Go to today"
      selected={selected}
      onChange={onChange}
      filterDate={filterDate}
    />
  );
};
