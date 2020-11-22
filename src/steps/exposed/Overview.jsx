import React from "react";
import { Button } from "../../components/Button";
import { useStateMachine } from "../../StateProvider";

export const Overview = () => {
  const { sendTo } = useStateMachine();

  const handleNextClick = () => sendTo("NEXT");
  const handleRestartClick = () => sendTo("RESTART");

  return (
    <div>
      <h2>How to know if you've been exposed</h2>
      <p>
        If you were a close contact of someone with COVID-19 while they were
        infectious, you are at risk of developing the disease.  People with
        COVID-19 are considered infectious starting two days before they had
        symptoms, or two days before they tested positive if they did not have
        symptoms. You are considered a close contact if:  You were within 6 feet
        of someone with COVID-19 for more than 15 minutes while they were
        infectious. You live in the same household as someone with COVID-19. You
        provide care at home for someone who was sick with COVID-19. You had
        direct physical contact with the person with COVID (e.g. hugged or
        kissed them). You shared eating or drinking utensils with the person
        with COVID? The person with COVID coughed, sneezed or somehow got
        respiratory droplets on you. 
      </p>

      <Button onClick={handleNextClick}>Next</Button>
      <Button onClick={handleRestartClick}>Restart</Button>
    </div>
  );
};
