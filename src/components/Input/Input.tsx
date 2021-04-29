import React, { ChangeEventHandler } from "react";
import PropTypes from "prop-types";

import "./Input.scss";

interface Props {
  value?:string,
  type?:string,
  onChange:()=>void,
  className?:string,
  placeholder?:string,
  onBlur:()=>void,
  focus:()=>void
}

const Input: React.FC<Props> = ({
  value,
  type = "text",
  children,
  onChange,
  placeholder = "Enter text",
  onBlur,
  focus
}) => {
  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      className={( "app-input")}
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
