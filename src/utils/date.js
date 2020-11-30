import { formatToTimeZone } from "date-fns-timezone";
import { isAfter, startOfDay, endOfDay } from "date-fns";
import AddToCalendar from "@culturehq/add-to-calendar";
import { BiCalendarPlus } from "react-icons/bi";
import { stripIndents } from "common-tags";

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
        details: stripIndents`This is the first day you could return to normal activities,  
        if you have recovered and have not had a fever for 24 hours, 
        and your other symptoms are improving. 
        
        If you continue to have a fever at this time,
        continue to isolate until 24 hours have passed since your fever stays below 100.4 F.`,
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
