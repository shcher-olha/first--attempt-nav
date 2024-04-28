import React from "react";
import "./Menu.css";
import sushiImage from "../images/Sushi.jpg";
import rollsImage from "../images/Rolls.jpg";
import negiryImage from "../images/Negiry.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Menu() {
  return (
    <div className="container">
      <div className="title">
        <h1 className="text-center">MENU</h1>
        <h2 className="text-center">Sushi</h2>
      </div>

      <div className="row mt-5">
        <div className="col-sm-4">
          <h3 className="text-center mt-5">Rolls</h3>
          <img
            src={sushiImage}
            className="img-fluid d-block p-2 rounded"
            alt="Sushi"
            title="photo-sushi"
          />
          <Link to="/home" className="button mt-2">
            <button
              type="button"
              className="btn btn-light mt-2 mx-auto"
              style={{ fontSize: "20px" }}
            >
              Order Now
            </button>
          </Link>
        </div>
        <div className="col-sm-4">
          <h3 className="text-center mt-5">Set</h3>
          <img
            src={rollsImage}
            className="img-fluid d-block p-2 rounded"
            alt="Sushi"
            title="photo-sushi"
          />
          <Link to="/home" className="button mt-2">
            <button
              type="button"
              className="btn btn-light mt-2 mx-auto"
              style={{ fontSize: "20px" }}
            >
              Order Now
            </button>
          </Link>
        </div>
        <div className="col-sm-4">
          <h3 className="text-center mt-5">Negiry</h3>
          <img
            src={negiryImage}
            className="img-fluid d-block p-2 rounded"
            alt="Sushi"
            title="photo-sushi"
          />

          <Link to="/home" className="button mt-2">
            <button
              type="button"
              className="btn btn-light mt-2 mx-auto"
              style={{ fontSize: "20px" }}
            >
              Order Now
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Menu;
