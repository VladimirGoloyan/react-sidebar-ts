import React from "react";
import PropTypes from "prop-types";

import "./Input.scss";

const Input = ({
  value,
  type = "text",
  children,
  onChange,
  className = "",
  placeholder = "Enter text",
  onBlur,
  focus
}) => {
  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      className={(className, "app-input")}
      placeholder={placeholder}
      onBlur={onBlur}
      ref={focus}
    >
      {children}
    </input>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
