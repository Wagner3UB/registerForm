import { TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import FormValidations from "../../contexts/FormValidation";
import useValidations from "../../hooks/useValidations";

function Login({ sendForm }) {
  const [proprieties, setProprieties] = useState({});

  const validations = useContext(FormValidations);
  const [errors, validateField, canSend] = useValidations(validations);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (canSend()) {
          sendForm(proprieties);
        }
      }}
    >
      <TextField
        onChange={(e) => {
          let email = e.target.value;
          setProprieties({ ...proprieties, email });
        }}
        type="email"
        id="email"
        label="Email"
        variant="outlined"
        margin="dense"
        fullWidth
        required
      />
      <TextField
        onChange={(e) => {
          let password = e.target.value;
          setProprieties({ ...proprieties, password });
        }}
        onBlur={validateField}
        error={!errors.pwd.valid}
        helperText={errors.pwd.text}
        type="password"
        id="pwd"
        name="pwd"
        label="Password"
        variant="outlined"
        margin="dense"
        fullWidth
        required
      />
      <TextField
        onChange={(e) => {
          let pwdConfirm = e.target.value;
          setProprieties({ ...proprieties, pwdConfirm });
        }}
        onBlur={validateField}
        error={!errors.pwdConfirm.valid}
        helperText={errors.pwdConfirm.text}
        type="password"
        id="pwdConfirm"
        name="pwdConfirm"
        label="Confirm Password"
        variant="outlined"
        margin="dense"
        fullWidth
        required
      />
      <button className="button-next">Next</button>
    </form>
  );
}

export default Login;
