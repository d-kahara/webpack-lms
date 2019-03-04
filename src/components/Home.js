import React from "react";
import Posts from "./containers/Posts";
import buggati from "../assets/img/buggati.jpg"

const Home = () => (
  <div>
    <div className="home-component">
      <img src={buggati} alt="buggati" className="buggati-image" />
    </div>
    <Posts />
  </div>
);

export default Home;
