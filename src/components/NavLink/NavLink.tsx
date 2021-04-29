import React from "react";

import { NavLink as RouterNavLink } from "react-router-dom";

import "./NavLink.scss";

interface Props{
  to:string
}

const NavLink:React.FC<Props> = ({ children, to }) => {
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
