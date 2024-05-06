import React from "react";
import "./RoomCard.css";
import { Link} from "react-router-dom";

function RoomCard({ data }) {
  const { image, type, description, person, price, bad } = data;
  return (
    <div className="room-card">
      <div className="top-title">
        <p>{type}</p>
      </div>
      <div className="card-image">
        <div className="zoom">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="card-bottom">
        <p>{description}</p>
        <div className="botom-wrap">
          <span className="btn-wrap">Bed: {bad}</span>
          <span className="btn-wrap">Parson : {person}</span>
          <span className="btn-wrap">Price : ${price}</span>
        </div>
        <div style={{ display: "block" }}>
          <Link state={{img: image,text : type}} to="/date-select" className="btn link">BookNow</Link>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
