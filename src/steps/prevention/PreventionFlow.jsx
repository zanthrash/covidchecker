import React from "react";
import { Paragraph } from "../../components/Paragraph";
import { NavigationButtons } from "../../components/NavigationButtons";
import { Header } from "../../components/Header";

export const PreventionFlow = () => {
  return (
    <div className="md:w-1/2 md:m-auto">
      <Header>Here is what you should do to maximize your prevention</Header>

      <Paragraph>
        <ul className="list-disc">
          <li>Avoid close contact.</li>
          <li>
            Outside your home, keep 6 feet of distance between yourself and
            people who don’t live in your household. Avoid social gatherings
            with people outside your household. Inside your home, avoid close
            contact with people who are sick. 
          </li>
          <li>Cover your mouth and nose with a mask when around others.</li>
          <li>Wash your hands or use sanitizer frequently.</li>
          <li>Monitor your health.</li>
          <li>Stay home if you have symptoms of COVID-19.</li>
          <li>Clean and disinfect frequently touched surfaces daily</li>
          <li>
            <a
              className="text-purple-600 cursor-pointer"
              target="_blank"
              rel="noreferrer"
              href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html"
            >
              CDC Prevention Guidelines
            </a>
          </li>
        </ul>
      </Paragraph>

      <div>
        <NavigationButtons hideNext />
      </div>
    </div>
  );
};
