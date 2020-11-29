import React from "react";
import { Link } from "../../components/Link";
import { useStateMachine } from "../../StateProvider";
import { utcToMidwestDate, addDateToCalendar } from "../../utils/date";
import { Paragraph } from "../../components/Paragraph";
import { NavigationButtons } from "../../components/NavigationButtons";
import { BsExclamationCircle } from "react-icons/bs";

export const ActionPlan = () => {
  const { state } = useStateMachine();

  const { dateExposed, quarantineDate, continuedCloseContact } = state.context;

  return (
    <div className="md:w-1/2 md:m-auto">
      <Paragraph>
        You were exposed on{" "}
        <span className="font-bold">{utcToMidwestDate(dateExposed)}</span>
      </Paragraph>
      <Paragraph>
        To prevent the spread of COVID-19 you should quarantine until
        <span className="font-bold">
          {" "}
          {addDateToCalendar(
            utcToMidwestDate(quarantineDate),
            "Last Day Of COVID-19 Self Isolation"
          )}{" "}
        </span>
        or{" "}
        <span className="font-bold text-red-700">
          14 days after your last close contact with the person who had
          COVID-19.
        </span>
      </Paragraph>
      <h2 className="text-2xl mb-4">ADVICE FOR YOU</h2>
      <ul>
        <li>
          <span>
            Stay away from others, especially people at{" "}
            <Link href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/index.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fneed-extra-precautions%2Fpeople-at-increased-risk.html">
              higher risk
            </Link>{" "}
            from COVID. 
          </span>
        </li>
        <li>
          <span>
            Watch for fever, shortness of breath, or other{" "}
            <Link href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">
              symptoms of COVID-19
            </Link>
            .
          </span>
        </li>
        <li>
          If you develop symptoms, stay home except to seek testing. If you
          don’t have symptoms, wait five days after being exposed to be tested.
        </li>
        <li>
          Even if you test negative, you should continue to stay home since
          symptoms can appear 2 to 14 days after exposure. (You cannot test out
          of quarantine.)
        </li>
      </ul>

      <Paragraph>
        If you work in healthcare or in a critical infrastructure sector, there
        may be different quarantine guidance you need to follow. Contact your
        local health department.
      </Paragraph>
      {continuedCloseContact && (
        <div className="flex mb-10 space-x-3">
          <BsExclamationCircle className="text-6xl text-red-700" />
          <div>
            <span className="font-bold text-red-700">
              You need to quarantine for 14-days after being exposed to the
              person during while they are in isolation. Any time a new
              household member gets sick with COVID-19 and you had Close
              contact, you will need to restart your quarantine
            </span>
          </div>
        </div>
      )}

      <NavigationButtons hideNext />
    </div>
  );
};
