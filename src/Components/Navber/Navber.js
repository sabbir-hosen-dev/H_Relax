import React from "react";
import "./Navber.css";
import { Link } from "react-router-dom";
import useReluxContex from "../../Hooks/useReluxContex";

function Navber() {
  const { login, user } = useReluxContex();
  return (
    <div className="container">
      <nav>
        <Link className="link" to="/">
          <div className="logo">
            <h3 >H_Relax.</h3>
          </div>
        </Link>
        <div className="Button">
          {login ? (
            <div className="user-logo">
              <img
                src={user.photo}
                alt=""
                title={`${user.name} \n${user.email}
                 `}
              />
            </div>
          ) : (
            <Link to="/login" className="btn link">
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navber;
