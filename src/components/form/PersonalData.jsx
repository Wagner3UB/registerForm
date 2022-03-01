import { TextField } from "@mui/material";
import React, { useState } from "react";

function PersonalData({sendForm}) {
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
          let name = e.target.value;
          setProprieties({...proprieties, name});
        }}
        type="text"
        id="name"
        label="Name"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        onChange={(e) => {
          let surname = e.target.value;
          setProprieties({...proprieties, surname});
        }}
        type="text"
        id="surname"
        label="Surname"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        onChange={(e) => {
          let idNumber = e.target.value;
          setProprieties({...proprieties, idNumber});
        }}
        type="number"
        id="idNumber"
        label="ID Number"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        onChange={(e) => {
          let date = e.target.value;
          setProprieties({...proprieties, date});
        }}
        type="date"
        id="date"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <button className="button-next">Next</button>
    </form>
  );
}

export default PersonalData;
