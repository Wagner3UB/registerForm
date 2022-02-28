import React from "react";

function Confirmation({ fullData, sendForm }) {

  return (
    <ul className="confirmation-list">
      <li>
        <h4>Name:</h4>
        <p>{fullData.name}</p>
      </li>
      <li>
        <h4>Surname:</h4>
        <p>{fullData.surname}</p>
      </li>
      <li>
        <h4>E-mail:</h4>
        <p>{fullData.email}</p>
      </li>
      <li>
        <h4>ID:</h4>
        <p>{fullData.idNumber}</p>
      </li>
      <li>
        <h4>Birthday:</h4>
        <p>{fullData.date}</p>
      </li>
      <li>
        <h4>Address:</h4>
        <p>
          {fullData.street}, {fullData.houseNumber}
        </p>
      </li>
      <li>
        <h4>Additional info:</h4>
        <p>{fullData.additionalInfo}</p>
      </li>
      <li>
        <h4>Zipcode:</h4>
        <p>{fullData.zipcode}</p>
      </li>
      <button onClick={()=>{
        sendForm();
      }}>Complete</button>
    </ul>
  );
}

export default Confirmation;
