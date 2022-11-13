import React from "react";
import "../styles/header.css";
import PropTypes from "prop-types";
const Header = ({ firstName }) => {
  return (
    <header className="header">
      <h2 className="header-title">
        Bonjour <span>{firstName}</span>
      </h2>
      <p className="header-paragraphe">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </header>
  );
};

export default Header;

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
};
