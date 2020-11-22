import React from "react";
import { Button } from "../components/Button";
import { Paragraph } from "../components/Paragraph";
import { useStateMachine } from "../StateProvider";

export const Disclaimer = () => {
  const { state, sendTo } = useStateMachine();

  const agreeClicked = () => {
    sendTo("AGREE");
  };

  return (
    <div className="">
      <div className="md:w-1/2 md:m-auto">
        <Paragraph>
          This resource can help you get personalized information about
          quarantine and isolation to assist in interpreting public health
          guidance. 
        </Paragraph>
        <Paragraph>
          Private and secure No personal information is collected by this
          site.XYZ privacy protections
        </Paragraph>

        <Paragraph>
          For informational purposes only Not a medical diagnosis or medical
          advice
        </Paragraph>
        <Button
          className="bg-red-700 text-gray-200 border-none"
          onClick={agreeClicked}
        >
          I Agree
        </Button>
      </div>
    </div>
  );
};
