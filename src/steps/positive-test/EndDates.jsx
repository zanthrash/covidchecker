import React from "react";
import { BiTestTube } from "react-icons/bi";
import { useStateMachine } from "../../StateProvider";
import { addDays, subDays, formatDistanceStrict } from "date-fns";
import { utcToMidwestDate } from "../../utils/date";
import { NavigationButtons } from "../../components/NavigationButtons";
import { Header } from "../../components/Header";
import { isolationDateOffset, infectiousDateOffset } from "../../constants";
import { RiVirusLine } from "react-icons/ri";
import { BsHouseDoor } from "react-icons/bs";
import { RiSurgicalMaskLine } from "react-icons/ri";

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
      ? addDays(dateOfSymptomsStart, isolationDateOffset)
      : addDays(dateTested, isolationDateOffset);

    const infectiousDate = dateOfSymptomsStart
      ? subDays(dateOfSymptomsStart, infectiousDateOffset)
      : subDays(dateTested, infectiousDateOffset);

    sendTo("SET_DATES", { isolationDate, infectiousDate });
  }, [dateOfSymptomsStart, dateTested, sendTo]);

  return (
    <div className="flex flex-col items-center">
      <div>
        <Header>Here are the facts:</Header>
        <div className="mb-8 flex space-x-3">
          <BiTestTube className="text-5xl" />
          <div>
            <p className="text-lg">You tested positive on: </p>
            <div className="font-semibold text-xl">
              {utcToMidwestDate(dateTested)}
            </div>
          </div>
        </div>

        {dateOfSymptomsStart && (
          <div className="mb-8 flex space-x-3">
            <RiVirusLine className="text-5xl" />
            <div>
              <p className="text-lg">You had COVID-19 symptoms on:</p>
              <div className="font-semibold text-xl">
                {utcToMidwestDate(dateOfSymptomsStart)}
              </div>
            </div>
          </div>
        )}

        {infectiousDate && (
          <div className="mb-8 flex space-x-3">
            <RiSurgicalMaskLine className="text-5xl" />
            <div>
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
          </div>
        )}

        {isolationDate && (
          <div className="mb-8 flex space-x-3">
            <BsHouseDoor className="text-5xl" />
            <div>
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
          </div>
        )}
      </div>

      <NavigationButtons />
    </div>
  );
};
