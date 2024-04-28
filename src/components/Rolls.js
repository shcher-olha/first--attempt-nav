import React from "react";
import rolls_1Image from "../images/Rolls_1.jpg";


function Rolls() {
  return (
    <div className="container">
      <div className="col-3">
        <img
          src={rolls_1Image}
          className="img-fluid d-block p-2 rounded"
          alt="Sushi"
          title="photo-sushi"
        />
      </div>
    </div>
  );
}

export default Rolls;