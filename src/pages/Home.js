import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="">
      <ul className="home-users">
        <li className="home-user">
          <Link to="profil/user/12">User 12</Link>
        </li>
        <li className="home-user">
          <Link to="profil/user/18">User 18</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
