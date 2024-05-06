import React from "react";
import Navber from "../Navber/Navber";
import "./Profile.css";
import useReluxContex from "../../Hooks/useReluxContex";
import { useLocation } from "react-router-dom";
import { format } from 'date-fns';

function Profile() {
  const { user } = useReluxContex();
  const location = useLocation();

  const { data, date } = location.state;
  const formattedCheckInDate = format(date.checkInDate, "dd-MM-yyyy");
  const formattedCheckOutDate = format(date.checkOutDate, "dd-MM-yyyy");
  return (
    <div className="container">
      <Navber />
      <div className="profile-wrap">
        <div className="p-wrap left">
          <div className="user-img">
            <img src={user.image} alt="" />
          </div>
          <div className="u-d">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="p-wrap right">
          <div className="detels">
            <div className="d-img">
              <img src={data.img} alt="" />
            </div>
            <div className="d-i">
              <h3>{data.text}</h3>
              <div className="shw-date">
                <p>{formattedCheckInDate}</p>
                <p>{formattedCheckOutDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
