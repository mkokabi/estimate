import "./App.css";
import { StepMachine, StepContainer, Step } from "react-step-machine";
import { ActionBtn } from "./ActionBtn";
import { PrimaryButton, Stack } from "@fluentui/react";
import { template } from "./store/template";
import { useForm } from "react-hook-form";
import { AppContext } from "./AppContext";
import { useState } from "react";
import { ProjectStep } from "./components/ProjectStep";

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
      const combinedValue = { ...values, ...newValue };
      setValues(combinedValue);
    },
  };

  return (
    <AppContext.Provider value={context}>
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack horizontalAlign="center">
            <StepMachine>
              {/* Steps  */}
              <StepContainer styles={{ minHeight: "350px" }}>
                {template.steps.map(step => (
                  <Step order={step.order}>
                    <ProjectStep
                      options={step}
                      control={control}
                      errors={errors}
                    />
                  </Step>
                ))}
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
