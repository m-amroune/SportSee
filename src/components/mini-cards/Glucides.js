import React from "react";
import Img from "../../assets/carbs-icon.svg";
import PropTypes from "prop-types";
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

Glucides.propTypes = {
  keyData: PropTypes.number.isRequired,
};
