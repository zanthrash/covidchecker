import React from "react";
import { stripIndents } from "common-tags";
import { infectiousDateOffset, isolationDateLength } from "../../constants";
import { utcToMidwestDate } from "../../utils/date";

export const CopyMessageButton = ({ infectiousDate }) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied]);

  const template = stripIndents`
    I was recently diagnosed with COVID-19.
    If you had close contact with me on or since ${utcToMidwestDate(
      infectiousDate
    )}, 
    you are at risk of getting COVID-19.

    Steps you should take:
    * Stay home for 14 days after your last close contact with me.
    * Stay away from others, especially people at higher risk for getting sick from COVID.
    * Watch for fever, shortness of breath, or other symptoms of COVID-19.
    
    If you develop symptoms, stay home except to seek testing.
    If you don’t have symptoms, wait five days after the date noted above to be tested.

    Even if you test negative, you should continue to stay home since symptoms can
    appear ${infectiousDateOffset} to ${isolationDateLength} days after exposure. 
    (You cannot test out of quarantine.)
  `;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(template)
      .then(() => {
        setCopied(true);
      })
      .catch(() => setCopied(false));
  };

  return (
    <button
      className="bg-gray-600 text-gray-100 text-sm rounded-full px-2 focus:outline-none"
      onClick={copyToClipboard}
    >
      {copied ? "Copied" : "Copy To Clipboard"}
    </button>
  );
};
