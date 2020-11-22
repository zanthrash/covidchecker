import React from "react";
import { addDays, formatDistanceStrict } from "date-fns";
import { Button } from "../../components/Button";
import { useStateMachine } from "../../StateProvider";
import { utcToMidwestDate } from "../../utils/date";
import { Header } from "../../components/Header";
import { NavigationButtons } from "../../components/NavigationButtons";

export const EndDates = () => {
  const { state, sendTo } = useStateMachine();
  const { dateExposed, continuedCloseContact, quarantineDate } = state.context;

  React.useEffect(() => {
    const quarantineDate = addDays(dateExposed, 14);

    sendTo("SET_DATE", { quarantineDate });
  }, []);

  const handleNextClick = () => {
    sendTo("NEXT");
  };

  const handleBackClick = () => {
    sendTo("BACK");
  };

  const handleRestartClick = () => {
    sendTo("RESTART");
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <Header>Here are the facts:</Header>
        <div className="mb-8">
          <p className="text-lg">You exposed on: </p>
          <div className="font-semibold text-xl">
            {utcToMidwestDate(dateExposed)}
          </div>
        </div>

        {quarantineDate && (
          <div className="mb-8">
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
        )}
      </div>

      <NavigationButtons />
    </div>
    // <>
    //   <p>Date Exposed: {utcToMidwestDate(dateExposed)}</p>
    //   <hr />

    //   {quarantineDate && (
    //     <>
    //       <p>Quarantine Date: {utcToMidwestDate(quarantineDate)}</p>
    //       <p>
    //         ...which in{" "}
    //         {formatDistanceStrict(quarantineDate, Date.now(), { unit: "day" })}
    //       </p>
    //     </>
    //   )}

    //   <Button onClick={handleBackClick}>BACK</Button>
    //   <Button onClick={handleNextClick}>NEXT</Button>

    //   <Button onClick={handleRestartClick}>Restart</Button>
    // </>
  );
};
