import React from "react";
import Navber from "../Components/Navber/Navber";
import DatePiker from "../Components/DatePiker/DatePiker";
import { useLocation } from "react-router-dom";

function TimeInfo() {
  const location = useLocation();
  const { img, text } = location.state;
  return (
    <section className="home-wrap">
      <div className="top" style={{ background: `url(${img}) #00000061` }}>
        <Navber />
        <div className="container">
          {" "}
          <div className="home-text">
           <h2>{text}</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-date">
          <div className="date">
            <DatePiker data={location.state} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimeInfo;
