import React, { useEffect, useState } from "react";
import Navber from "../Navber/Navber";
import "./Profile.css";
import useReluxContex from "../../Hooks/useReluxContex";

function Profile() {
  const [userData, setUserData] = useState([]);

  const { user } = useReluxContex();

  useEffect(() => {
    fetch(`http://localhost:5050/bookdin?email=${user.email}`, {
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
        authorization : `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch(err => console.log(err))

  }, [user.email]);

  return (
    <div className="container">
      <Navber />
      <div className="profile-wrap">
        <div className="p-wrap left">
          <div className="user-img">
            <img src={user.photo} alt="" />
          </div>
          <div className="u-d">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="p-wrap right">
          {userData.map((data) => {
            const { checkInDate, checkOutDate, image, type, _id } = data;
            return (
              <div className="detels" key={_id}>
                <div className="d-img">
                  <img src={image} alt="" />{" "}
                </div>
                <div className="d-i">
                  <h3>{type}</h3>

                  <p>Check In : {checkInDate}</p>
                  <p> Check Out{checkOutDate}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
