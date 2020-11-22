import React from "react";
import { Button } from "../../components/Button";
import { useStateMachine } from "../../StateProvider";
import { Paragraph } from "../../components/Paragraph";
import { Header } from "../../components/Header";
import { NavigationButtons } from "../../components/NavigationButtons";

export const Overview = () => {
  const { sendTo } = useStateMachine();

  return (
    <div className="md:w-1/2 md:m-auto flex flex-col">
      <Header>How to know if you've been exposed</Header>
      <Paragraph>
        If you were a close contact of someone with COVID-19 while they were
        infectious, you are at risk of developing the disease. 
      </Paragraph>
      <Paragraph>
        People with COVID-19 are considered infectious starting two days before
        they had symptoms, or two days before they tested positive if they did
        not have symptoms.
      </Paragraph>
      <Paragraph>You are considered a close contact if: </Paragraph>
      <ul className="list-disc mb-20">
        <li>
          You were within 6 feet of someone with COVID-19 for more than 15
          minutes while they were infectious.
        </li>
        <li>You live in the same household as someone with COVID-19.</li>
        <li>
          You provide care at home for someone who was sick with COVID-19.
        </li>
        <li>
          You had direct physical contact with the person with COVID (e.g.
          hugged or kissed them).
        </li>
        <li>
          You shared eating or drinking utensils with the person with COVID? The
          person with COVID coughed, sneezed or somehow got respiratory droplets
          on you. 
        </li>
      </ul>

      {/* <div className="self-center"> */}
      <NavigationButtons />
      {/* </div> */}
    </div>
  );
};
