import React from "react";
import "./Navbar.css";
import Isha from "../img/Isha.jpeg"

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        
        <div className="n-name">Isha</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="list">
          <ul style={{listStyleType: "none "}}>
            <li>Home</li>
            <li>Projects</li>
          </ul>
        </div>
        <button className="button">Contact Me</button>
      </div>
    </div>
  );
};

export default Navbar;
