import React from "react";
import GoDaddyLogo from "../Logos/GoDaddyLogo";
import menuBar from "../../Constants/menuData.js";

function NavigationBar(props) {
  return (
    <nav
      className="navbar navbar-default navbar-expand-lg navbar-dark"
      id="header"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <GoDaddyLogo />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-auto">
            <ul className="navbar-nav">
              {menuBar.map((menuBar) => (
                <li className="nav-item">
                  <a className="nav-link menuItem text-white" href="#">
                    {menuBar}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
