import { TextField } from "@mui/material";
import React, {useState} from "react";

function Address({sendForm}) {
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [zipcode, setZipcode] = useState("");

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      sendForm({street, houseNumber, additionalInfo, zipcode});
    }}>
      <TextField
        value={street}
        onChange={(e) => {
          setStreet(e.target.value);
        }}
        type="text"
        id="street"
        label="Street"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        value={houseNumber}
        onChange={(e) => {
          setHouseNumber(e.target.value);
        }}
        type="number"
        id="houseNumber"
        label="Number"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        value={additionalInfo}
        onChange={(e) => {
          setAdditionalInfo(e.target.value);
        }}
        type="text"
        id="addtionalInfo"
        label="Addicional Info"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        value={zipcode}
        onChange={(e) => {
          setZipcode(e.target.value);
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
