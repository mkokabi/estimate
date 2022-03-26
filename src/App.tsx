import "./App.css";
import { StepMachine, StepContainer, Step } from "react-step-machine";
import { ActionBtn } from "./ActionBtn";
import { Stack } from "@fluentui/react";
import { ProjectStageStep } from "./components/steps/01_ProjectStageStep";
import { ProjectTypeStep } from "./components/steps/02_ProjectTypeStep";
import { ITemplate } from "./types";

function App() {
  const template: ITemplate = {
    projectStateStepOptions: {
      projectStages: [
        { key: "brandNew", text: "Brand New" },
        { key: "update", text: "Update" },
        { key: "migration", text: "Migration" },
        { key: "extension", text: "Extension" },
      ],
    },
    projectTypeStepOptions: {
      projectTypes: [
        { key: "integration", text: "Integration" },
        { key: "web site", text: "Web site" },
        { key: "tools", text: "Tools" },
      ],
    },
  };

  return (
    <div className="App">
      <Stack horizontalAlign="center">
        <StepMachine>
          {/* Steps  */}
          <StepContainer styles={{ minHeight: "350px" }}>
            <Step order={1}>
              <ProjectStageStep options={template.projectStateStepOptions} />
            </Step>
            <Step order={2}>
              <ProjectTypeStep options={template.projectTypeStepOptions} />
            </Step>
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
