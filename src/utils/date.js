import { formatToTimeZone } from "date-fns-timezone";
import { isAfter } from "date-fns";

export const utcToMidwestDate = (date) => {
  const format = "dddd, MMMM D YYYY";
  const output = formatToTimeZone(date, format, {
    timeZone: "America/Chicago",
  });
  return output;
};

export const excludeDatesAfterToday = (date) => {
  return isAfter(Date.now(), date);
};
