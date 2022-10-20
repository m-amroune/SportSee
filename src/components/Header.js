import React from "react";
import "../styles/header.css";

const Header = ({ userFirstName }) => {
  return (
    <header className="header">
      <h2>Bonjour {userFirstName} </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
};

export default Header;
