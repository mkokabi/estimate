import "./App.css";
import { StepMachine, StepContainer, Step } from "react-step-machine";
import { ActionBtn } from "./ActionBtn";
import { Stack } from "@fluentui/react";
import { ProjectStageStep } from "./components/steps/01_ProjectStageStep";
import { ProjectTypeStep } from "./components/steps/02_ProjectTypeStep";

function App() {
  return (
    <div className="App">
      <Stack horizontalAlign="center">
        <StepMachine>
          {/* Steps  */}
          <StepContainer styles={{ minHeight: "350px" }}>
            <Step order={1}><ProjectStageStep /></Step>
            <Step order={2}><ProjectTypeStep /></Step>
            <Step order={3}>step 3</Step>
          </StepContainer>

          {/* You will have more control with our special hooks inside components */}
          <ActionBtn />
        </StepMachine>
      </Stack>
    </div>
  );
}

export default App;
