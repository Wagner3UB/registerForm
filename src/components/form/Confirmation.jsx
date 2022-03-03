import React from "react";

function Confirmation({ fullData, sendForm }) {
  const propNames = Object.keys(fullData);

  return (
    <ul className="confirmation-list">
      {propNames.map((element, index) => {
        console.log(element);
        return (
          <li key={index}>
            <h4>{element}</h4>
            <p>{fullData[element]}</p>
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
