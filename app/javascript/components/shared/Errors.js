import React from "react";

function Errors({ errors }) {
  return (
    <div>
      {errors.map((error, index) => (
        <li className="error-msg" key={index}>
          {error}
        </li>
      ))}
    </div>
  );
}

export default Errors;
