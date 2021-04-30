import React from "react";

import { NavLink as RouterNavLink } from "react-router-dom";

import "./NavLink.scss";

const NavLink: React.FC<{ to: string }> = ({ children, to }) => {
  return (
    <RouterNavLink
      exact
      to={to}
      className="app-nav-link"
      activeClassName="app-nav-link--active"
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
