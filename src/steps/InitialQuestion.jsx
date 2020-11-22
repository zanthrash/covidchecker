import React from "react";
import { Button } from "../components/Button";
import { useStateMachine } from "../StateProvider";
import { EXPOSED, SYMPTOMS, TESTED_POSITIVE } from "../constants";
// import ScrollReveal from "scrollreveal"
import { useSpring, useSprings, animated, config } from "react-spring";

export const InitialQuestion = () => {
  const props = useSpring({
    config: config.molasses,
    delay: 200,
    opacity: 1,
    from: { opacity: 0 },
  });
  const { sendTo } = useStateMachine();

  const handleClick = (value) => {
    console.log("clicked", value);
    sendTo("NEXT", { initialAnswer: value });
  };

  return (
    <div className="flex flex-col font-hairline">
      <animated.h2 style={props} className="text-4xl leading-1 mb-2">
        Welcome,
      </animated.h2>
      <animated.h3 style={props} className="text-3xl leading-1 mb-2">
        Why are you here?
      </animated.h3>

      {/* <div className="flex flex-col ml-4">
        <Button onClick={() => handleClick(SYMPTOMS) } block type="default" size="large" shape="round" className="my-2">Covid Symptoms</Button>
        <Button onClick={() => handleClick(TESTED_POSITIVE) } block type="default" size="large" shape="round" className="my-2">tested positive</Button>
        <Button onClick={() => handleClick(EXPOSED) } block type="default" size="large" shape="round" className="my-2">been exposed</Button>
      </div> */}
    </div>
  );
};
