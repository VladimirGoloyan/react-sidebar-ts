import React from "react";

import NavLink from "components/NavLink/NavLink";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar__container">
        <div className="app-sidebar__item">
          <NavLink to="/">
            <HomeIcon fontSize="large" className="app-sidebar__icon" />
          </NavLink>
        </div>
        <div className="app-sidebar__item">
          <NavLink to="/todo-list">
            <ListIcon fontSize="large" className="app-sidebar__icon" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
