import { DefaultButton, Stack } from "@fluentui/react";
import { useStepActions, useStepStore } from "react-step-machine";

export const ActionBtn = () => {
  const { goToStep, firstStep, lastStep, nextStep, previousStep } =
    useStepActions({
      onStepChangeCb: (prevStep, activeStep) => {
        console.log(prevStep, activeStep);
      },
    });

  // const { activeNamedStep, totalSteps, activeStep } = useStepStore();

  return (
    <div>
      {/* <h2>Step {activeStep}</h2>
      <h2>Step {activeNamedStep}</h2>
      <p>Total Steps: {totalSteps}</p> */}
      <Stack>
        <Stack horizontal>
          <DefaultButton onClick={() => firstStep()}>First step</DefaultButton>
          <DefaultButton onClick={() => previousStep()}>Prev</DefaultButton>
          <DefaultButton onClick={() => nextStep()}>Next</DefaultButton>
          <DefaultButton onClick={() => lastStep()}>Last step</DefaultButton>
        </Stack>
      </Stack>
    </div>
  );
};
