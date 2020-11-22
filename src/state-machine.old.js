import { createMachine, assign, actions } from "xstate";

const { log } = actions;

export const stateMachine = createMachine({
  id: "state-machine",
  initial: "start",
  context: {
    initialAnswer: "not know",
    date: undefined,
    targetDate: undefined,
  },
  states: {
    start: {
      entry: log("starting"),
      on: {
        NEXT: {
          target: "date",
          actions: assign({
            initialAnswer: (ctx, event) => {
              return event.initialAnswer;
            },
          }),
        },
      },
    },
    date: {
      on: {
        NEXT: {
          target: "results",
          actions: assign({ date: (ctx, event) => event.date }),
        },
        BACK: {
          target: "start",
          actions: assign({ date: undefined, targetDate: undefined }),
        },
      },
    },
    results: {
      on: {
        NEXT: "done",
        BACK: "date",
        SET_TARGET_DATE: {
          actions: assign({
            targetDate: (ctx, event) => event.targetDate,
          }),
        },
      },
    },
    done: {
      on: {
        NEXT: "start",
        BACK: "results",
      },
    },
  },
});
