import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/notFound.css";

const NotFound = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </p>
    </div>
  );
};

export default NotFound;
