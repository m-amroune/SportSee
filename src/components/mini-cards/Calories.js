import React from "react";
import Img from "../../assets/calories-icon.svg";
import PropTypes from "prop-types";

/**
 *
 * @param {number} keyData
 * @returns
 */

const Calories = ({ keyData }) => {
  return (
    <div className="mini-card">
      <img src={Img} alt=" icon Calories" />
      <div className="valor-nutriment">
        <p>
          <span>{`${keyData}`}kCal</span>
        </p>
        <p className="nutriments">Calories</p>
      </div>
    </div>
  );
};

export default Calories;
Calories.propTypes = {
  keyData: PropTypes.number.isRequired,
};
