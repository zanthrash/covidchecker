export const SYMPTOMS = "SYMPTOMS";
export const EXPOSED = "EXPOSED";
export const TESTED_POSITIVE = "TESTED_POSITIVE";
export const SITE_URL = "https://covidclock.com";

export const ANSWERS = [SYMPTOMS, EXPOSED, TESTED_POSITIVE];

export const DateQuestionCopy = {
  [SYMPTOMS]: "Select the date you noticed your systems.",
  [EXPOSED]: "Select the date you knew you were exposed.",
  [TESTED_POSITIVE]: "Select the date of your positive Covid test.",
};

const boilerplate =
  "Since we were in contact recently you might also want to get tested and/or self isolate too.";

export const sampleMessageCopy = {
  [SYMPTOMS]: `I have come down with Covid symptoms will be self isolating. ${boilerplate} `,
  [EXPOSED]: `I have been recently exposed to someone with the Rona and will be self isolating. ${boilerplate} `,
  [TESTED_POSITIVE]: `I have recently tested positive for Covid and will be self isolating. ${boilerplate}`,
};
