import { DefaultButton, Stack } from "@fluentui/react";
import { useContext, useState } from "react";
import { useStepActions, useStepStore } from "react-step-machine";
import { AppContext } from "./AppContext";
import { template } from "./store/template";
import { IStep } from "./types";

export const ActionBtn = () => {
  const context = useContext(AppContext);

  const { goToStep, firstStep, lastStep, nextStep, previousStep } =
    useStepActions({
      onStepChangeCb: (prevStep, activeStep) => {
        console.log(prevStep, activeStep);
      },
    });

  const { activeNamedStep, totalSteps, activeStep } = useStepStore();

  const [currStep, setCurrStep] = useState(activeStep);

  const findNextStep = (currStep: number): number => {
    const steps = Object.keys(template);
    const nextStepName = steps.find((step) => {
      const st: IStep = (template as any)[step];
      return st.order === currStep + 1;
    }) || '';
    const nextStepObj: IStep = (template as any)[nextStepName];
    const stepDependentOn = nextStepObj?.stepDependentOn;
    if (stepDependentOn) {
      const contextValues = context.values;
      if (eval(`!(contextValues.${[stepDependentOn]})`))
      {
        return currStep + 2; 
      }
    }

    return currStep + 1;
  };

  const findPrevStep = (currStep: number): number => {
    const steps = Object.keys(template);
    const prevStepName = steps.find((step) => {
      const st: IStep = (template as any)[step];
      return st.order === currStep - 1;
    }) || '';
    const prevStepObj: IStep = (template as any)[prevStepName];
    const stepDependentOn = prevStepObj?.stepDependentOn;
    if (stepDependentOn) {
      const contextValues = context.values;
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
