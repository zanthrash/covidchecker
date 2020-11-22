import React from "react";
import { Button } from "../components/Button";
import { useStateMachine } from "../StateProvider";

export const Disclaimer = () => {
  const { state, sendTo } = useStateMachine();

  const agreeClicked = () => {
    sendTo("AGREE");
  };

  return (
    <div>
      <p>
        This resource can help you get personalized information about quarantine
        and isolation to assist in interpreting public health guidance. 
      </p>
      <p>
        Private and secure No personal information is collected by this site.XYZ
        privacy protections
      </p>

      <p>
        For informational purposes only Not a medical diagnosis or medical
        advice
      </p>

      <Button onClick={agreeClicked}>Agree</Button>
    </div>
  );
};
