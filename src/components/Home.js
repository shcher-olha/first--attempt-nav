import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <p>Welcom to the world of Sushi</p>

      <Link
        to="/menu"
        className="button"
        
      >
        <button type="button" className="btn btn-light" style={{ fontSize: "30px" }}>
          Order Now
        </button>
      </Link>

      
    </div>
  );
}

export default Home;