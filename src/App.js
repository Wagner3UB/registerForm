import { Container, Typography } from "@mui/material";
import React from "react";
import "./assets/App.css";
import RegistrationForm from "./components/form/RegistrationForm";
import FormValidations from "./contexts/FormValidation";
import {
  validateIdNumber,
  validatePwd,
  validateName,
  validateSurname,
  revalidatePwd,
} from "./models/validations";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography className="title" variant="h4" component="h1">
        Let's get started!
      </Typography>
      <FormValidations.Provider
        value={{
          name: validateName,
          surname: validateSurname,
          pwd: validatePwd,
          idNumber: validateIdNumber,
          pwdConfirm: revalidatePwd
        }}
      >
        <RegistrationForm completeForm={sendToDB} />
      </FormValidations.Provider>
    </Container>
  );
}

function sendToDB(data) {
  console.log(data);
}

export default App;
