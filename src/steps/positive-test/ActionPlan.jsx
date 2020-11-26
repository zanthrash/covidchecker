import React from "react";
import { Link } from "../../components/Link";
import { useStateMachine } from "../../StateProvider";
import { utcToMidwestDate } from "../../utils/date";
import { NavigationButtons } from "../../components/NavigationButtons";
import { Paragraph } from "../../components/Paragraph";
import { CopyMessageButton } from "./CopyMessageButton";
import { isolationDateLength } from "../../constants";

export const ActionPlan = () => {
  const { state } = useStateMachine();
  const { isolationDate, infectiousDate } = state.context;

  return (
    <div className="md:w-1/2 md:m-auto">
      <h2 className="text-2xl mb-4">ADVICE FOR YOU</h2>
      <Paragraph>
        <span className="font-bold">
          <Link href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/isolation.html">
            Isolate
          </Link>{" "}
          at home
        </span>{" "}
        for{" "}
        <span className="bg-red-700 text-gray-200 px-1 rounded-sm">
          10 days AND 24 hours
        </span>{" "}
        AFTER fever is below <span className="font-bold">100.4</span>. This
        means you must stay home, except to get medical care.
      </Paragraph>
      <Paragraph>
        The <span className="font-bold uppercase">first</span> day you could
        return to normal activities would be{" "}
        <span className="font-bold underline">
          {utcToMidwestDate(isolationDate)}
        </span>{" "}
        if you have recovered and{" "}
        <span className="font-bold">
          have not had a fever for 24 hours, and your other symptoms are
          improving. 
        </span>
        . 
      </Paragraph>
      <Paragraph>
        If you have a{" "}
        <Link href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html">
          weakened immune system
        </Link>
        , you may need to isolate for longer. Contact your healthcare provider
        for guidance.
      </Paragraph>

      <h2 className="text-2xl mb-4">ADVICE TO SHARE WITH CLOSE CONTACTS</h2>

      <Paragraph>
        You were infectious with COVID beginning{" "}
        <span className="font-bold underline">
          {utcToMidwestDate(infectiousDate)}
        </span>
        . Any household contacts and anyone you had close contact with after
        that time should quarantine for 14 days after the last time they had
        close contact with you.
      </Paragraph>
      <Paragraph>
        If you can not isolate yourself at home in your own room,{" "}
        <span className="font-bold">
          your close contacts will need to quarantine while you are sick AND for
          <span>{` ${isolationDateLength} `}</span>
          days after you recover.
        </span>
      </Paragraph>

      {typeof navigator.clipboard !== undefined && (
        <Paragraph>
          You can generate a message to send to your contacts by email or text
          message.
          <div>
            <CopyMessageButton infectiousDate={infectiousDate} />
          </div>
        </Paragraph>
      )}

      <NavigationButtons hideNext />
    </div>
  );
};
