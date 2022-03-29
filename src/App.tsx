import "./App.css";
import { StepMachine, StepContainer, Step } from "react-step-machine";
import { ActionBtn } from "./ActionBtn";
import { PrimaryButton, Stack } from "@fluentui/react";
import { template } from "./store/template";
import { useForm } from "react-hook-form";
import { ProjectStageStep } from "./components/steps/01_ProjectStageStep";
import { ProjectTypeStep } from "./components/steps/02_ProjectTypeStep";
import { ProjectComponentStep } from "./components/steps/03_ProjectComponentStep";
import { IntegrationStep } from "./components/steps/04_IntegrationStep";
import { DatabaseStep } from "./components/steps/05_DatabaseStep";
import { AppContext } from "./AppContext";
import { useState } from "react";

function App() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  const [values, setValues] = useState({});
  const context = {
    values: values,
    setValues: (newValue: any) => {
      const combinedValue = {...values, ...newValue};
      setValues(combinedValue);
    }
  }

  return (
    <AppContext.Provider value={context}>
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack horizontalAlign="center">
            <StepMachine>
              {/* Steps  */}
              <StepContainer styles={{ minHeight: "350px" }}>
                <Step order={1}>
                  <ProjectStageStep
                    options={template.projectStateStepOptions}
                    control={control}
                    errors={errors}
                  />
                </Step>
                <Step order={2}>
                  <ProjectTypeStep
                    options={template.projectTypeStepOptions}
                    control={control}
                    errors={errors}
                  />
                </Step>
                <Step order={3}>
                  <ProjectComponentStep
                    options={template.projectComponentsStepOptions}
                    control={control}
                    errors={errors}
                  />
                </Step>
                <Step order={4}>
                  <IntegrationStep
                    options={template.integrationStepOptions}
                    control={control}
                    errors={errors}
                  />
                </Step>
                <Step order={5}>
                  <DatabaseStep
                    options={template.databaseStepOptions}
                    control={control}
                    errors={errors}
                  />
                </Step>
              </StepContainer>

              {/* You will have more control with our special hooks inside components */}
              <ActionBtn />
            </StepMachine>
            <PrimaryButton type="submit">Save</PrimaryButton>
          </Stack>
        </form>
      </div>
    </AppContext.Provider>
  );
}

export default App;
