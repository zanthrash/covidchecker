import React from "react";
import { Button } from "../../components/Button";
import { useStateMachine } from "../../StateProvider";
import { format } from "date-fns";
import { utcToMidwestDate } from "../../utils/date";

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
    <>
      <p>
        Isolate at home for 10 days AND 24 hours AFTER fever is below 100.4.
        This means you must stay home, except to get medical care and stay in a
        room that is not used by other people in your household. You should use
        a separate bathroom if possible. If you don’t have a separate bathroom,
        you should clean and disinfect the bathroom each time you use it.
        Monitor your health, and if you develop emergency warning signs, seek
        care immediately.
      </p>
      <p>
        The first day you could return to normal activities would be{" "}
        {utcToMidwestDate(isolationDate)} if you have recovered and have not had
        a fever for 24 hours. 
      </p>
      <p>
        If you have a weakened immune system, you may need to isolate for
        longer. Contact your healthcare provider for guidance.
      </p>

      <p>
        You were infectious with COVID beginning{" "}
        {utcToMidwestDate(infectiousDate)}. Any household contacts and anyone
        you had close contact with after that time should quarantine for 14 days
        after the last time they had close contact with you. If you can not
        isolate yourself at home in your own room, your close contacts will need
        to quarantine while you are sick AND for 14 days after you recover.
      </p>
      <p>
        You can generate a message to send to your contacts by email or text
        message (CREATE MESSAGE BUTTON)
      </p>

      <Button onClick={handleBackClick}>BACK</Button>
      <Button onClick={handleRestartClick}>RESTART</Button>
    </>
  );
};
