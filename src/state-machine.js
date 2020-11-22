import { createMachine, assign } from "xstate";

export const stateMachine = createMachine({
  id: "covid",
  initial: "disclaimer",
  states: {
    disclaimer: {
      on: {
        AGREE: "scenario",
        DISAGREE: "exit",
      },
    },
    scenario: {
      on: {
        POSITIVE_TEST: "positive",
        EXPOSED: "exposed",
        PREVENTION: "prevention",
      },
    },
    positive: {
      id: "positive",
      initial: "testedDate",
      context: {
        dateTested: undefined,
        dateOfSymptomsStart: undefined,
        isolationDate: undefined,
        infectiousDate: undefined,
      },
      states: {
        testedDate: {
          entry: assign({
            dateTested: undefined,
            dateOfSymptomsStart: undefined,
            isolationDate: undefined,
            infectiousDate: undefined,
          }),
          on: {
            NEXT: "symptomsAtTest",
            SET_DATE: {
              actions: assign({ dateTested: (ctx, event) => event.date }),
            },
          },
        },
        symptomsAtTest: {
          on: {
            YES: "symptomsStartDate",
            NO: "displayEndDates",
            BACK: "testedDate",
          },
        },
        symptomsStartDate: {
          on: {
            NEXT: "displayEndDates",
            BACK: "symptomsAtTest",
            SET_DATE: {
              actions: assign({
                dateOfSymptomsStart: (ctx, event) => event.date,
              }),
            },
          },
        },
        displayEndDates: {
          on: {
            NEXT: "actionPlan",
            BACK: "symptomsStartDate",
            SET_DATES: {
              actions: assign({
                infectiousDate: (ctx, event) => event.infectiousDate,
                isolationDate: (ctx, event) => event.isolationDate,
              }),
            },
          },
        },
        actionPlan: {
          on: {
            BACK: "displayEndDates",
          },
        },
      },
      on: {
        RESTART: "#covid.scenario",
      },
    },
    exposed: {
      id: "exposed",
      initial: "overview",
      states: {
        overview: {
          on: {
            NEXT: "exposedDate",
          },
        },
        exposedDate: {
          on: {
            BACK: "overview",
            NEXT: "closeContact",
          },
        },
        closeContact: {
          on: {
            NO_FURTHER_CONTACT: "displayEndDate",
            NO_LIVE_WITH_ISOLATE: "displayEndDate",
            YES_LIVE_WITH_POSITIVE: "displayEndDate",
          },
        },
        displayEndDate: {
          on: {
            NEXT: "actionPlan",
            BACK: "closeContact",
          },
        },
        actionPlan: {},
      },
      on: {
        RESTART: "#covid.scenario",
      },
    },
    prevention: {
      id: "prevention",
      initial: "overview",
      states: {
        overview: {
          on: {
            RESTART: "#covid.scenario",
          },
        },
      },
    },
    exit: {
      type: "final",
    },
  },
});
