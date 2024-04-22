import React from "react";
import "./Menu.css";
import sushiImage from "../images/Sushi.jpg";


function Menu() {
  return (
    <div className="container">
      <h1>MENU</h1>
      <h2>Sushi</h2>
      
      <div className="row">
        <div className="col-md-6">
          <img
            src={sushiImage}
            className="image"
            alt="Sushi"
            title="photo-sushi"
          />
        </div>
        
      </div>
    </div>
  );
}

export default Menu;
