import React from "react";
import Navber from "../Components/Navber/Navber";
import HomeText from "../Components/HomeText/HomeText";
import Data from "../Data/Data.json";
import RoomCard from "../Components/RoomCard/RoomCard";

function Home() {
  return (
    <section className="home-wrap">
      <div className="top">
        <Navber />
        <HomeText />
      </div>
      <div className="container">
        <div className="bottom">
          {Data.map((data) => (
            <RoomCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
