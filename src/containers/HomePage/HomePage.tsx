import React from "react";

import { Button } from "@material-ui/core";

import "./HomePage.scss";

const BlankPage: React.FC<{ history: { push: (s: string) => void } }> = (
  props
) => {
  const changePage = () => {
    props.history.push("/todo-list");
  };

  return (
    <div className="app-home">
      <h1 className="app-home__title">
        Start exploring your to do list right now !
      </h1>
      <Button className="app-home__button" onClick={changePage}>
        Get Started
      </Button>
    </div>
  );
};

export default BlankPage;
