import React from "react";
import { useStateMachine } from "../../StateProvider";
import { Button } from "../../components/Button";

export const PreventionFlow = () => {
  const { sendTo } = useStateMachine();

  const handleRestartClick = () => {
    sendTo("RESTART");
  };

  return (
    <div>
      <h2>Here is what you should do to maximize your prevention</h2>

      <p>
        Avoid close contact.  Outside your home, keep 6 feet of distance between
        yourself and people who don’t live in your household. Avoid social
        gatherings with people outside your household. Inside your home, avoid
        close contact with people who are sick.  Cover your mouth and nose with
        a mask when around others Wash your hands or use sanitizer frequently
        Monitor your health. Stay home if you have symptoms of COVID-19. Clean
        and disinfect frequently touched surfaces daily
        <a
          target="_blank"
          href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html"
        >
          CDC Prevention Guidelines
        </a>
      </p>

      <Button onClick={handleRestartClick}>RESTART</Button>
    </div>
  );
};
