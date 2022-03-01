import React from "react";

function Confirmation({ fullData, sendForm }) {
  const propNames = Object.keys(fullData);
  console.log(fullData.email);

  return (
    <ul className="confirmation-list">
      {propNames.map((element, index) => {
        const desc = Object.getOwnPropertyDescriptor(fullData, element);
        //fullData.element non funziona (?)

        return (
          <li key={index}>
            <h4>{element}</h4>
            <p>{desc.value}</p>
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
