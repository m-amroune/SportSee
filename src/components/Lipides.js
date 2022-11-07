import React from "react";
import Img from "../assets/fat-icon.svg";
const Lipides = ({ keyData }) => {
  return (
    <div className="mini-card">
      <img src={Img} alt=" icon Lipides" />
      <div className="valor-nutriment">
        <p>
          <span>{`${keyData}`}g</span>{" "}
        </p>
        <p className="nutriments">Lipides</p>
      </div>
    </div>
  );
};

export default Lipides;
