import { TextField } from "@mui/material";
import React, { useState } from "react";

function PersonalData({sendForm}) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [idNumber, setIDNumber] = useState("");
  const [date, setDate] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendForm({ name, surname, idNumber, date });
      }}
    >
      <TextField
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        id="name"
        label="Name"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        value={surname}
        onChange={(e) => {
          setSurname(e.target.value);
        }}
        type="text"
        id="surname"
        label="Surname"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        value={idNumber}
        onChange={(e) => {
          setIDNumber(e.target.value);
        }}
        type="number"
        id="idNumber"
        label="ID Number"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
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
