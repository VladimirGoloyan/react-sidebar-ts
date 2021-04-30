import React from "react";

const Counter: React.FC<{ count: number }> = ({ count }) => {
  return <div className="app-counter">{count}</div>;
};

export default Counter;
