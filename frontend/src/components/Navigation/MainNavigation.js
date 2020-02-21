import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation/MainNavigation.css";

const mainNavigation = props => (
  <header className="main-navigation">
    <div className="main-navigation__logo">
      <h1>Bieda Front Event App</h1>
    </div>
    <nav className="main-navigation__items">
      <ul>
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
        <li>
          <NavLink to="/events">Event</NavLink>
        </li>
        <li>
          <NavLink to="/bookings">Bookings</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default mainNavigation;
