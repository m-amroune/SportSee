import React from "react";
import Img from "../assets/carbs-icon.svg";
const Glucides = ({ keyData }) => {
  return (
    <div className="mini-card">
      <img src={Img} alt=" icon Glucides" />
      <div className="valor-nutriment">
        <p>
          {" "}
          <span>{`${keyData}`}g</span>{" "}
        </p>
        <p className="nutriments">Glucides</p>
      </div>
    </div>
  );
};

export default Glucides;
