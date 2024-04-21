import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <h2>Main page</h2>
      <Link to="/menu">Go to users Page</Link>
    </div>
    
  );
}

export default Home;