import React from "react";
import { useStateMachine } from "../../StateProvider";
import { Button } from "../../components/Button";

export const CloseContact = () => {
  const { state, sendTo } = useStateMachine();

  const handleBackClick = () => {
    sendTo("BACK");
  };

  const handleNoMoreContact = () => {
    sendTo("NO_FURTHER_CONTACT");
  };

  const handleLiveWithIsolate = () => {
    sendTo("NO_LIVE_WITH_ISOLATE");
  };

  const handleYesMoreContact = () => {
    sendTo("YES_LIVE_WITH_POSITIVE");
  };

  return (
    <div>
      <h3>Will you have further close contact with the person?</h3>

      <Button onClick={handleNoMoreContact}>
        No, I had close contact but I will not have further contact or
        interactions with the person while they are sick
      </Button>

      <Button onClick={handleLiveWithIsolate}>
        No, I live with someone who has COVID-19 but they are isolating by
        staying in a separate bedroom. I have had no close contact since they
        isolated.
      </Button>
      <Button onClick={handleYesMoreContact}>
        I live with someone who has COVID-19 and I may have close contact with
        them again.
      </Button>
      <Button onClick={handleBackClick}>Back</Button>
    </div>
  );
};
