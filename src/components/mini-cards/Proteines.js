import React from "react";
import Img from "../../assets/protein-icon.svg";
import PropTypes from "prop-types";

/**
 *
 * @param {number} keyData
 * @returns
 */

const Proteines = ({ keyData }) => {
  return (
    <div className="mini-card">
      <img src={Img} alt=" icon Proteines" />
      <div className="valor-nutriment">
        <p>
          <span>{`${keyData}`}g</span>
        </p>
        <p className="nutriments">Proteines</p>
      </div>
    </div>
  );
};

export default Proteines;

Proteines.propTypes = {
  keyData: PropTypes.number.isRequired,
};
