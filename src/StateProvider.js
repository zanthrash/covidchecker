import React from "react";
import { useMachine } from "@xstate/react";
import { stateMachine } from "./state-machine";

export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
  const [state, sendTo] = useMachine(stateMachine);

  const value = {
    state,
    sendTo,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateMachine = () => {
  const context = React.useContext(StateContext);

  if (!context) {
    throw new Error("useStateMachine can only be used in the StateProvider");
  }

  return context;
};
