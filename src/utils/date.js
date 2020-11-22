import { formatToTimeZone } from "date-fns-timezone";
import { listTimeZones } from "timezone-support";

export const utcToMidwestDate = (date) => {
  const format = "dddd, MMMM D YYYY";
  const output = formatToTimeZone(date, format, {
    timeZone: "America/Chicago",
  });
  return output;
};
