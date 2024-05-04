import React from "react";
import "./Navber.css";
import { Link } from "react-router-dom";

function Navber() {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <h3>H_Relax.</h3>
        </div>
        <div className="Button">
          <Link to="/login" className="btn link" >Login</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navber;
