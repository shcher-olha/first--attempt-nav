import React from "react";
import kaliforniaImage from "../images/Kalifornia.jpg";
import filadelfiaImage from "../images/Filadelfia.jpg";
import draconImage from "../images/Dracon.jpg";
import kanadaImage from "../images/Kanada.jpg";
import "./Addmenu.css";
import { Link } from "react-router-dom";

function Addmenu() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3 col-fixed-height">
          <h1 className="text-center"> Kalifornia</h1>
          <div
            className="card mx-auto"
            style={{ width: "18rem", height: "20rem" }}
          >
            <img
              src={kaliforniaImage}
              className="card-img-top"
              alt="Kalifornia"
            />
            <div className="card-body">
              <h5 className="card-title">Consist:</h5>

              <Link to="/addmenu">
                <button
                  type="button"
                  className="btn btn-primary mt-2 mx-auto"
                  style={{ fontSize: "20px" }}
                >
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <h1 className="text-center"> Filadelfia</h1>
          <div
            className="card mx-auto"
            style={{ width: "18rem", height: "20rem" }}
          >
            <img
              src={filadelfiaImage}
              className="card-img-top"
              alt="Kalifornia"
            />
            <div className="card-body">
              <h5 className="card-title">Consist:</h5>

              <Link to="/addmenu">
                <button
                  type="button"
                  className="btn btn-primary mt-2 mx-auto"
                  style={{ fontSize: "20px" }}
                >
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <h1 className="text-center">Dracon</h1>
          <div
            className="card mx-auto"
            style={{ width: "18rem", height: "20rem" }}
          >
            <img src={draconImage} className="card-img-top" alt="Kalifornia" />
            <div className="card-body">
              <h5 className="card-title">Consist:</h5>

              <Link to="/addmenu">
                <button
                  type="button"
                  className="btn btn-primary mt-2 mx-auto"
                  style={{ fontSize: "20px" }}
                >
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <h1 className="text-center">Kanada</h1>
          <div
            className="card mx-auto"
            style={{ width: "18rem", height: "20rem" }}
          >
            <img src={kanadaImage} className="card-img-top" alt="Kanada" />
            <div className="card-body">
              <h5 className="card-title">Consist:</h5>

              <Link to="/addmenu">
                <button
                  type="button"
                  className="btn btn-primary mt-2 mx-auto"
                  style={{ fontSize: "20px" }}
                >
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Addmenu;
