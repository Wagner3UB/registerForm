import { FormControlLabel, Switch, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import FormValidations from "../../contexts/FormValidation";
import useValidations from "../../hooks/useValidations";

function PersonalData({ sendForm }) {
  const [proprieties, setProprieties] = useState({});
  const [idNumber, setIdNumber] = useState("");
  const [checkedPromo, setCheckedPromo] = useState(true);
  const [checkedNews, setCheckedNews] = useState(true);

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
          let name = e.target.value;
          setProprieties({ ...proprieties, name });
        }}
        onBlur={validateField}
        error={!errors.name.valid}
        helperText={errors.name.text}
        type="text"
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        margin="dense"
        required
        fullWidth
      />
      <TextField
        onChange={(e) => {
          let surname = e.target.value;
          setProprieties({ ...proprieties, surname });
        }}
        onBlur={validateField}
        error={!errors.surname.valid}
        helperText={errors.surname.text}
        type="text"
        id="surname"
        name="surname"
        label="Surname"
        variant="outlined"
        margin="dense"
        required
        fullWidth
      />
      <TextField
        value={idNumber}
        onChange={(e) => {
          let idNumber = e.target.value;
          if (idNumber.length >= 11) {
            idNumber = idNumber.substr(0, 11);
          }
          setIdNumber(idNumber);
          setProprieties({ ...proprieties, idNumber });
        }}
        onBlur={validateField}
        error={!errors.idNumber.valid}
        helperText={errors.idNumber.text}
        type="number"
        id="idNumber"
        name="idNumber"
        label="ID Number"
        variant="outlined"
        margin="dense"
        required
        fullWidth
      />

      <div className="checkButtons">
        <FormControlLabel
          label="News"
          value={checkedNews}
          control={
            <Switch
              checked={checkedNews}
              onChange={(event) => {
                setCheckedNews(event.target.checked);
              }}
              name="news"
            />
          }
        />
        <FormControlLabel
          label="Promo"
          value={checkedPromo}
          control={
            <Switch
              checked={checkedPromo}
              onChange={(event) => {
                setCheckedPromo(event.target.checked);
              }}
              name="promo"
            />
          }
        />
        <button
          className="button-next"
          onClick={() => {
            console.log(checkedNews.toString())
            setProprieties({ ...proprieties, checkedNews, checkedPromo });
          }}
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default PersonalData;
