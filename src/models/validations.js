function validateIdNumber(idNumber) {
  if (idNumber.length !== 11) {
    return { valid: false, text: "Id number must have 11 digits" };
  } else {
    return { valid: true, text: "" };
  }
}

function validatePwd(pwd) {
  if (pwd.length < 4 || pwd.length > 64) {
    return { valid: false, text: "Password must contain at least 4 digits and no more than 64 digits" };
  } else {
    return { valid: true, text: "" };
  }
}

function validateName(name) {
  const forbidenChars = "1234567890!£$%&/()=?^@#ù+è-_^'.\"";
  const arrayForbidenChars = forbidenChars.split("");
  let valid = false;

  arrayForbidenChars.forEach((e) => {
    if (name.indexOf(e) !== -1){
      valid = true;
    }
  });
  if (name.length < 2) {
    return { valid: false, text: "Must have at least 2 chars." };
  } else if (valid) {
    return { valid: false, text: "Can't use numbers or special chars." };
  } else {
    return { valid: true, text: "" };
  }
}
function validateSurname(surname) {
  const forbidenChars = "1234567890!£$%&/()=?^@#ù+è-_^'.\"";
  const arrayForbidenChars = forbidenChars.split("");
  let valid = false;

  arrayForbidenChars.forEach((e) => {
    if (surname.indexOf(e) !== -1){
      valid = true;
    }
  });
  if (surname.length < 2) {
    return { valid: false, text: "Must have at least 2 chars." };
  } else if (valid) {
    return { valid: false, text: "Can't use numbers or special chars." };
  } else {
    return { valid: true, text: "" };
  }
}


export { validateIdNumber, validatePwd, validateName, validateSurname };