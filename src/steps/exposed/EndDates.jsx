import React from "react";
import { addDays, formatDistanceStrict } from "date-fns";
import { useStateMachine } from "../../StateProvider";
import { utcToMidwestDate } from "../../utils/date";
import { Header } from "../../components/Header";
import { NavigationButtons } from "../../components/NavigationButtons";
import { RiVirusLine } from "react-icons/ri";
import { BsHouseDoor } from "react-icons/bs";

export const EndDates = () => {
  const { state, sendTo } = useStateMachine();
  const { dateExposed, quarantineDate } = state.context;

  React.useEffect(() => {
    const quarantineDate = addDays(dateExposed, 14);

    sendTo("SET_DATE", { quarantineDate });
  }, [dateExposed, sendTo]);

  return (
    <div className="flex flex-col items-center">
      <div>
        <Header>Here are the facts:</Header>
        <div className="flex mb-8 space-x-3">
          <RiVirusLine className="text-5xl" />
          <div>
            <p className="text-lg">You exposed on: </p>
            <div className="font-semibold text-xl">
              {utcToMidwestDate(dateExposed)}
            </div>
          </div>
        </div>

        {quarantineDate && (
          <div className="mb-8 flex space-x-3">
            <BsHouseDoor className="text-5xl" />
            <div>
              <p className="text-lg">This means you MUST self isolate until:</p>
              <div className="font-semibold text-xl">
                {utcToMidwestDate(quarantineDate)}
              </div>
              <div className="font-semibold text-xl">
                <span className="text-lg">which is</span>
                <span className="bg-red-700 text-gray-100 px-1 rounded-sm m-1">
                  {formatDistanceStrict(quarantineDate, Date.now(), {
                    unit: "day",
                  })}
                </span>
                from <span className="text-red-700">today</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <NavigationButtons />
    </div>
  );
};
