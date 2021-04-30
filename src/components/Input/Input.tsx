import React from "react";

import "./Input.scss";

interface Props {
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  onBlur?: () => void;
  focus?: React.MutableRefObject<undefined> | any;
}

const Input: React.FC<Props> = ({
  value,
  type = "text",
  children,
  onChange,
  placeholder = "Enter text",
  onBlur = () => {},
  focus = () => {},
}) => {
  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      className=""
      placeholder={placeholder}
      onBlur={onBlur}
      ref={focus}
    >
      {children}
    </input>
  );
};

export default Input;
