import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../Assets/Logo";
import { logoutUser } from "../../Utils/authActions"

import "./TopNav.scss";

const TopNavigation = ({
  loggedIn,
  smallScreen,
  navToggled,
  setNavToggled
}) => (
  <nav className={smallScreen ? `topNav smallScreen` : `topNav`}>
    {smallScreen ? (
      <div className="navContainer">
        <div onClick={() => setNavToggled(!navToggled)} className="hamburguesa">
          <div className="hamb">
            <span className="hambLine"></span>
            <span className="hambLine"></span>
            <span className="hambLine"></span>
          </div>
        </div>
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        {loggedIn ? (
          <NavLink className="loginLink" to="/login">
            Log Out
          </NavLink>
        ) : (
          <NavLink className="loginLink" to="/login">
            Log In
          </NavLink>
        )}
      </div>
    ) : (
      <div className="navContainer">
        {loggedIn ? (
          <div className="loginLink" onClick={() => logoutUser()}>
            Log Out
          </div>
        ) : (
          <NavLink className="loginLink" to="/login">
            Log In
          </NavLink>
        )}
      </div>
    )}
  </nav>
);

export default TopNavigation;
