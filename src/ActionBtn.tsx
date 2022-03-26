import { useStepActions, useStepStore } from "react-step-machine";

export const ActionBtn = () => {
  const { goToStep, firstStep, lastStep, nextStep, previousStep } =
    useStepActions({
      onStepChangeCb: (prevStep, activeStep) => {
        console.log(prevStep, activeStep);
      },
    });

  const { activeNamedStep, totalSteps, activeStep } = useStepStore();

  return (
    <div>
      <h2>Step {activeStep}</h2>
      <h2>Step {activeNamedStep}</h2>
      <p>Total Steps: {totalSteps}</p>
      <div style={{ display: "flex", gap: 10, marginTop: "auto" }}>
        <button onClick={() => firstStep()}>First step</button>
        <button onClick={() => previousStep()}>Prev</button>
        <button onClick={() => nextStep()}>Next</button>
        <button onClick={() => lastStep()}>Last step</button>
      </div>
    </div>
  );
};
