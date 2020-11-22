import React from "react";
import { Button } from "../../components/Button";
import { useStateMachine } from "../../StateProvider";
import { utcToMidwestDate } from "../../utils/date";

export const ActionPlan = () => {
  const { state, sendTo } = useStateMachine();

  const { dateExposed, quarantineDate, continuedCloseContact } = state.context;

  const handleBackClick = () => {
    sendTo("BACK");
  };

  const handleRestartClick = () => {
    sendTo("RESTART");
  };

  return (
    <div>
      <p>You were exposed on {utcToMidwestDate(dateExposed)} </p>
      <p>
        To prevent the spread of COVID-19 you should quarantine until{" "}
        {utcToMidwestDate(quarantineDate)}
        or 14 days after your last close contact with the person who had
        COVID-19. You should stay away from others, especially people at higher
        risk for getting sick from COVID.  You should watch for fever, shortness
        of breath, or other symptoms of COVID-19. If you develop symptoms, stay
        home except to seek testing. If you don’t have symptoms, wait five days
        after being exposed to be tested (CDC citation?). Even if you test
        negative, you should continue to stay home since symptoms can appear 2
        to 14 days after exposure. 
      </p>
      <p>
        If you work in healthcare or in a critical infrastructure sector, there
        may be different quarantine guidance you need to follow. Contact your
        local health department.
      </p>
      {continuedCloseContact && (
        <p>
          You need to quarantine for 14-days after being exposed to the person
          during while they are in isolation. Any time a new household member
          gets sick with COVID-19 and you had Close contact, you will need to
          restart your quarantine
        </p>
      )}
      <p>
        You should stay away from others, especially people at higher risk for
        getting sick from COVID
      </p>

      <p>
        You should watch for fever, shortness of breath, or other symptoms of
        COVID-19.
      </p>

      <p>
        If you develop symptoms, stay home except to seek testing. If you don’t
        have symptoms, wait five days after being exposed to be tested (CDC
        citation?). Even if you test negative, you should continue to stay home
        since symptoms can appear 2 to 14 days after exposure
      </p>

      <p>
        If you work in healthcare or in a critical infrastructure sector, there
        may be different quarantine guidance you need to follow. Contact your
        local health department.
      </p>

      <Button onClick={handleBackClick}>Back</Button>
      <Button onClick={handleRestartClick}>Restart</Button>
    </div>
  );
};
