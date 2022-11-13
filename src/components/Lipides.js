import React from "react";
import Img from "../assets/fat-icon.svg";
import PropTypes from "prop-types";
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

Lipides.propTypes = {
  keyData: PropTypes.number.isRequired,
};
