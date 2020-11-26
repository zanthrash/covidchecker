import React from "react";
import { useStateMachine } from "../../StateProvider";
import { OptionsButton } from "../../components/OptionsButton";
import { Header } from "../../components/Header";
import { NavigationButtons } from "../../components/NavigationButtons";

export const CloseContact = () => {
  const { sendTo } = useStateMachine();

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
      <Header>Will you have further close contact with the person?</Header>

      <div className="grid gap-2 mb-20">
        <OptionsButton onClick={handleNoMoreContact}>
          <span className="bg-gray-600 text-gray-100 mr-2 px-1 rounded-sm">
            NO
          </span>
          I had close contact but I will not have further contact or
          interactions with the person while they are sick
        </OptionsButton>

        <OptionsButton onClick={handleLiveWithIsolate}>
          <span className="bg-gray-600 text-gray-100 mr-2 px-1 rounded-sm">
            NO
          </span>
          I live with someone who has COVID-19 but they are isolating by staying
          in a separate bedroom. I have had no close contact since they
          isolated.
        </OptionsButton>
        <OptionsButton onClick={handleYesMoreContact}>
          <span className="bg-red-600 text-red-100 mr-2 px-1 rounded-sm">
            YES
          </span>
          I live with someone who has COVID-19 and I may have close contact with
          them again.
        </OptionsButton>
      </div>

      <div>
        <NavigationButtons hideNext />
      </div>
    </div>
  );
};
