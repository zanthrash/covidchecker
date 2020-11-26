import React from "react";
import { Button } from "../components/Button";
import { Link } from "../components/Link";
import { Paragraph } from "../components/Paragraph";
import { useStateMachine } from "../StateProvider";

export const Disclaimer = () => {
  const { sendTo } = useStateMachine();

  const agreeClicked = () => {
    sendTo("AGREE");
  };

  return (
    <div className="md:w-1/2 md:m-auto">
      <Paragraph>
        Calculating the length of time to isolate and quarantine from COVID-19
        can be confusing.
      </Paragraph>
      <Paragraph>
        COVID Clock was built to help people aged 18+ who have tested positive
        for COVID-19, or who were exposed to someone with the virus, understand
        when their recommended isolation or quarantine period is over.
      </Paragraph>

      <Paragraph>
        The personalized response that COVID Clock generates is based on{" "}
        <Link href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html">
          CDC Guidance
        </Link>
      </Paragraph>
      <Paragraph>
        No personal or medical information is collected by or stored on this
        site. Your responses will not be saved for future use.
      </Paragraph>
      <Paragraph>
        This site is free and intended for informational purposes only. It is
        not a substitute for medical advice or diagnosis.
      </Paragraph>
      <Paragraph>
        <span className="font-semibold">
          By continuing, you agree with these terms and understand this resource
          is for adults 18+ in the United States.
        </span>
      </Paragraph>
      <Button
        className="bg-red-700 text-gray-200 border-none"
        onClick={agreeClicked}
      >
        Agree and Continue
      </Button>
    </div>
  );
};
