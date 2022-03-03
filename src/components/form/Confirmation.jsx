import React from "react";

function Confirmation({ fullData, sendForm }) {
  const propNames = Object.keys(fullData);

  return (
    <ul className="confirmation-list">
      {propNames.map((element, index) => {
        let itemValue = () => {
          if(element === "password" || element === "pwdConfirm"){
            const passLength = fullData[element].length;
            let shadowPass = "";
            for(let i = passLength; i > 0; i--){
              shadowPass += "*";
            }
            return shadowPass;
          } else {
            return fullData[element];
          }
        }
        return (
          <li key={index}>
            <h4>{element}</h4>
            <p>{itemValue()}</p>
          </li>
        );
      })}
      <button
        onClick={() => {
          sendForm();
        }}
      >
        Complete
      </button>
    </ul>
  );
}

export default Confirmation;
