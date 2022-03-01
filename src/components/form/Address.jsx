import { TextField } from "@mui/material";
import React, {useState} from "react";

function Address({sendForm}) {
  const [proprieties, setProprieties] = useState({})

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      sendForm(proprieties);
    }}>
      <TextField
        onChange={(e) => {
          let street = e.target.value;
          setProprieties({...proprieties, street});
        }}
        type="text"
        id="street"
        label="Street"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        onChange={(e) => {
          let houseNumber = e.target.value;
          setProprieties({...proprieties, houseNumber});
        }}
        type="number"
        id="houseNumber"
        label="Number"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        onChange={(e) => {
          let additionalInfo = e.target.value;
          setProprieties({...proprieties, additionalInfo});
        }}
        type="text"
        id="additionalInfo"
        label="Additional Info"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        onChange={(e) => {
          let zipcode = e.target.value;
          setProprieties({...proprieties, zipcode});
        }}
        type="number"
        id="zipcode"
        label="Zipcode"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <button className="button-next">Finish</button>
    </form>
  );
}

export default Address;
