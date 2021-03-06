import React from "react";

const FormValidations = React.createContext({
  name: withoutValidation,
  surname: withoutValidation,
  pwd: withoutValidation,
  idNumber: withoutValidation,
  pwdConfirm: withoutValidation
});

function withoutValidation(){
  return {valid: true, text:""}
}

export default FormValidations;
