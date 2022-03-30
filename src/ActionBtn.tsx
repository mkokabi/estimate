import { DefaultButton, Stack } from "@fluentui/react";
import { useContext, useState } from "react";
import { useStepActions, useStepStore } from "react-step-machine";
import { AppContext } from "./AppContext";
import { template } from "./store/template";
import { IStep } from "./types";

export const ActionBtn = () => {
  const context = useContext(AppContext);

  const { goToStep, firstStep, lastStep } =
    useStepActions({
      onStepChangeCb: (prevStep, activeStep) => {
        console.log(prevStep, activeStep);
      },
    });

  const { totalSteps, activeStep } = useStepStore();

  const [currStep, setCurrStep] = useState(activeStep);

  const findNextStep = (currStep: number): number => {
    const steps = template.steps;
    const nextStep: IStep = steps[currStep];
    const stepDependentOn = nextStep?.stepDependentOn;
    if (stepDependentOn) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const contextValues = context.values;
      // eslint-disable-next-line no-eval
      if (eval(`!(contextValues.${[stepDependentOn]})`))
      {
        return currStep + 2; 
      }
    }

    return currStep + 1;
  };

  const findPrevStep = (currStep: number): number => {
    const steps = template.steps;
    const prevStep: IStep = steps[currStep - 2]
    const stepDependentOn = prevStep?.stepDependentOn;
    if (stepDependentOn) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const contextValues = context.values;
      // eslint-disable-next-line no-eval
      if (eval(`!(contextValues.${[stepDependentOn]})`))
      {
        return currStep - 2; 
      }
    }

    return currStep - 1;
  };

  const handleNextClicked = () => {
    if (currStep < totalSteps) {
      const nextStep = findNextStep(currStep);
      setCurrStep(nextStep);
      goToStep(nextStep);
    }
  };

  const handlePrevClicked = () => {
    if (currStep > 1) {
      const prevStep = findPrevStep(currStep);
      setCurrStep(prevStep);
      goToStep(prevStep);
    }
  };

  return (
    <div>
      {/* <h2>Step {activeStep}</h2>
      <h2>Step {activeNamedStep}</h2>
      <p>Total Steps: {totalSteps}</p> */}
      <Stack>
        <Stack horizontal>
          <DefaultButton
            onClick={() => firstStep()}
            disabled={activeStep === 1}
          >
            First step
          </DefaultButton>
          <DefaultButton
            onClick={() => handlePrevClicked()}
            disabled={activeStep === 1}
          >
            Prev
          </DefaultButton>
          <DefaultButton
            onClick={() => handleNextClicked()}
            disabled={activeStep === totalSteps}
          >
            Next
          </DefaultButton>
          <DefaultButton
            onClick={() => lastStep()}
            disabled={activeStep === totalSteps}
          >
            Last step
          </DefaultButton>
        </Stack>
      </Stack>
    </div>
  );
};
