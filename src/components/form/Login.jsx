import { TextField } from "@mui/material";
import React, {useState} from "react";

function Login({ sendForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendForm({ email, password });
      }}
    >
      <TextField
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
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
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value);
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
