import React from "react";
import "./Menu.css";
import sushiImage from "../images/Sushi.jpg";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container">
      <h1>MENU</h1>
      <h2>Sushi</h2>

      <div className="row mt-5">
        <div className="col-6">
          <img
            src={sushiImage}
            className="img-fluid rounded"
            alt="Sushi"
            title="photo-sushi"
          />
        </div>
        <div className="col-6">
          <h3 className="text-center">Sushi</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
          <Link to="/home" className="button">
            <button
              type="button"
              className="btn btn-light"
              style={{ fontSize: "30px" }}
            >
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
