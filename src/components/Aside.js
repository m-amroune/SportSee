import React from "react";
import "../styles/aside.css";
import Yoga from "../assets/yoga.svg";
import Swim from "../assets/swim.svg";
import Bike from "../assets/bike.svg";
import Dumbbell from "../assets/dumbbell.svg";
const Aside = () => {
  return (
    <aside className="aside">
      <nav className="nav-aside">
        <img src={Yoga} alt="yoga icon" />
        <img src={Swim} alt="swim icon" />
        <img src={Bike} alt="bike icon" />
        <img src={Dumbbell} alt="dumbbell icon" />
        <p>Copyright, SportSee 2020</p>
      </nav>
    </aside>
  );
};

export default Aside;
