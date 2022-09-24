import React from "react";
import logo from "../assets/logo.svg";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <img className="img-logo" src={logo} alt="logo" />
      </div>
      <ul className="navigation">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  );
};

export default Navbar;
