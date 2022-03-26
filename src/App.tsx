import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { StepMachine, StepContainer, Step } from "react-step-machine";
import {ActionBtn} from './ActionBtn';

function App() {
  const x = "<Step order={4}>step 4</Step>";
  return (
    <div className="App">
      <StepMachine>
        {/* <NavigationTitle />
        <NavigationPreview /> */}

        {/* Steps  */}
        <StepContainer>
          <Step order={1} name="foo">
            <div>Step 1</div>
          </Step>
          <Step order={2}>step 2</Step>
          <Step order={3}>step 3</Step>
        </StepContainer>

        {/* You will have more control with our special hooks inside components */}
        <ActionBtn />
      </StepMachine>
    </div>
  );
}

export default App;
