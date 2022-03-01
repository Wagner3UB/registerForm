import { TextField } from "@mui/material";
import React, {useState} from "react";

function Login({ sendForm }) {
  const [proprieties, setProprieties] = useState({})

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendForm(proprieties);
      }}
    >
      <TextField
        onChange={(e) => {
          let email = e.target.value;
          setProprieties({...proprieties, email});
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
          setProprieties({...proprieties, password});
        }}
        type="password"
        id="password"
        label="Password"
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
