import { Stepper, StepLabel, Step, Typography } from "@mui/material";
import React, {  useEffect, useState } from "react";
import Address from "./Address";
import Confirmation from "./Confirmation";
import Login from "./Login";
import PersonalData from "./PersonalData";

function RegistrationForm({completeForm}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const dataCollection = (newData) => {
    setData({...data, ...newData});
    nextStep();
  };
  useEffect(()=>{
    if(currentStep === formStepsArray.length-1){
      completeForm(data);
    }
  });

  const formStepsArray = [
    <Login sendForm={dataCollection} />,
    <PersonalData sendForm={dataCollection} />,
    <Address sendForm={dataCollection} />,
    <Confirmation fullData={data} sendForm={nextStep}/>,
    <Typography className="form-completed_text" variant="h5" component="h1" align="center">
      Your information was successfully sent!
    </Typography>,
  ];

  return (
    <>
      <Stepper className="stepper" activeStep={currentStep}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Personal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Address</StepLabel>
        </Step>
        <Step>
          <StepLabel>Confirm</StepLabel>
        </Step>
        <Step>
          <StepLabel>Done!</StepLabel>
        </Step>
      </Stepper>
      {formStepsArray[currentStep]}
    </>
  );
}

export default RegistrationForm;
