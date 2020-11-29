import { formatToTimeZone } from "date-fns-timezone";
import { isAfter, startOfDay, endOfDay } from "date-fns";
import AddToCalendar from "@culturehq/add-to-calendar";
import { BiCalendarPlus } from "react-icons/bi";

export const utcToMidwestDate = (date) => {
  const format = "dddd MMMM D, YYYY";
  const output = formatToTimeZone(date, format, {
    timeZone: "America/Chicago",
  });
  return output;
};

export const excludeDatesAfterToday = (date, eventLabel) => {
  return isAfter(Date.now(), date);
};

export const addDateToCalendar = (dateString, eventLabel) => {
  const start = startOfDay(new Date(dateString));
  const end = endOfDay(new Date(dateString));
  console.log("start/end", start, end);
  return (
    <AddToCalendar
      event={{
        name: eventLabel,
        location: "My House",
        startsAt: start,
        endsAt: end,
      }}
    >
      <span className="flex items-center">
        {dateString}
        <BiCalendarPlus className="inline-block text-orange-700 " />
      </span>
    </AddToCalendar>
  );
};
