import React from "react";
import { Button } from "../../components/Button";
import { useStateMachine } from "../../StateProvider";
import { format } from "date-fns";
import { utcToMidwestDate } from "../../utils/date";
import { NavigationButtons } from "../../components/NavigationButtons";
import { Paragraph } from "../../components/Paragraph";

export const ActionPlan = () => {
  const { state, sendTo } = useStateMachine();
  const { isolationDate, infectiousDate } = state.context;

  const handleBackClick = () => {
    sendTo("BACK");
  };

  const handleRestartClick = () => {
    sendTo("RESTART");
  };

  return (
    <div className="md:w-1/2 md:m-auto">
      <Paragraph>
        <span className="font-bold">Isolate at home</span> for{" "}
        <span className="bg-red-700 text-gray-200 px-1 rounded-sm">
          10 days AND 24 hours
        </span>{" "}
        AFTER fever is below <span className="font-bold">100.4</span>. This
        means you must stay home, except to get medical care and stay in a room
        that is not used by other people in your household. You should use a
        separate bathroom if possible. If you don’t have a separate bathroom,
        you should clean and disinfect the bathroom each time you use it.
        Monitor your health, and if you develop emergency warning signs, seek
        care immediately.
      </Paragraph>
      <Paragraph>
        The <span className="font-bold uppercase">first</span> day you could
        return to normal activities would be{" "}
        <span className="font-bold underline">
          {utcToMidwestDate(isolationDate)}
        </span>{" "}
        if you have recovered and{" "}
        <span className="font-bold">have not had a fever for 24 hours</span>. 
      </Paragraph>
      <Paragraph>
        If you have a weakened immune system, you may need to isolate for
        longer. Contact your healthcare provider for guidance.
      </Paragraph>

      <Paragraph>
        You were infectious with COVID beginning{" "}
        <span className="font-bold underline">
          {utcToMidwestDate(infectiousDate)}
        </span>
        . Any household contacts and anyone you had close contact with after
        that time should quarantine for 14 days after the last time they had
        close contact with you. If you can not isolate yourself at home in your
        own room,{" "}
        <span className="font-bold">
          your close contacts will need to quarantine while you are sick AND for
          14 days after you recover.
        </span>
      </Paragraph>

      <Paragraph>
        You can generate a message to send to your contacts by email or text
        message (CREATE MESSAGE BUTTON)
      </Paragraph>

      <NavigationButtons hideNext />
    </div>
  );
};
