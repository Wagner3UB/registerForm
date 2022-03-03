import { useState } from 'react';

function useValidations (validations) {
  const initialState = setInitialState(validations)

  const [errors, setErrors] = useState(initialState)

  function validateFields(e){
    const {name, value} = e.target;
    const newState = { ...errors }
    newState[name] = validations[name](value);
    setErrors(newState);
  }
  function canSend(){
    for(let item in errors){
      if(!errors[item].valid){
        return false;
      }
    }
    return true;
  }

  return [errors, validateFields, canSend]

}
function setInitialState(validations){
  const inicialState = {};
  for(let item in validations){
    inicialState[item] = { valid: true, text: "" }
  }
  return inicialState;
}

export default useValidations;