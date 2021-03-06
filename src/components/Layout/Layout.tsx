import React from "react";

import "./Layout.scss";

const Layout: React.FC = ({ children }) => {
  return <div className="app-layout">{children}</div>;
};

export default Layout;
