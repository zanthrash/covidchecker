import React from "react";
import { useStateMachine } from "../../StateProvider";
import { addDays, subDays, formatDistanceStrict, format } from "date-fns";
import { Button } from "../../components/Button";
import { utcToMidwestDate } from "../../utils/date";
import { NavigationButtons } from "../../components/NavigationButtons";
import { Header } from "../../components/Header";

const dateFormat = "cccc, MMMM d y";

export const EndDates = () => {
  const { state, sendTo } = useStateMachine();
  const {
    dateOfSymptomsStart,
    dateTested,
    isolationDate,
    infectiousDate,
  } = state.context;

  React.useEffect(() => {
    const isolationDate = dateOfSymptomsStart
      ? addDays(dateOfSymptomsStart, 10)
      : addDays(dateTested, 10);

    const infectiousDate = dateOfSymptomsStart
      ? subDays(dateOfSymptomsStart, 2)
      : subDays(dateTested, 2);

    sendTo("SET_DATES", { isolationDate, infectiousDate });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div>
        <Header>Here are the facts:</Header>
        <div className="mb-8">
          <p className="text-lg">You tested positive on: </p>
          <div className="font-semibold text-xl">
            {utcToMidwestDate(dateTested)}
          </div>
        </div>

        {dateOfSymptomsStart && (
          <div className="mb-8">
            <p className="text-lg">You had Covid symptoms on:</p>
            <div className="font-semibold text-xl">
              {utcToMidwestDate(dateOfSymptomsStart)}
            </div>
          </div>
        )}
        <hr />

        {isolationDate && (
          <div className="mb-8">
            <p className="text-lg">This means you MUST self isolate until:</p>
            <div className="font-semibold text-xl">
              {utcToMidwestDate(isolationDate)}
            </div>
            <div className="font-semibold text-xl">
              <span className="text-lg">which is</span>
              <span className="bg-red-700 text-gray-100 px-1 rounded-sm m-1">
                {formatDistanceStrict(isolationDate, Date.now(), {
                  unit: "day",
                })}
              </span>
              from <span className="text-red-700">today</span>
            </div>
          </div>
        )}

        {infectiousDate && (
          <div className="mb-8">
            <p className="text-lg">You have been infectious since:</p>
            <div className="font-semibold text-xl">
              {utcToMidwestDate(infectiousDate)}
            </div>
            <div className="font-semibold text-xl">
              <span className="text-lg">which was</span>
              <span className="bg-red-700 text-gray-100 px-1 rounded-sm m-1">
                {formatDistanceStrict(infectiousDate, Date.now(), {
                  unit: "day",
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>
        )}
      </div>

      <NavigationButtons />
    </div>
  );
};
