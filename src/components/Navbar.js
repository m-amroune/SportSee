import React from "react";
import logo from "../assets/logo.svg";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <img className="img-logo" src={logo} alt="logo" />
      </div>
      <ul className="navigation">
        <li>
          <Link to="/">Accueil</Link>
        </li>

        <li>
          <Link to="profil/user/12">Profil</Link>
        </li>

        <li>
          <Link to="*">Réglage</Link>
        </li>

        <li>
          <Link to="*">Communauté</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
