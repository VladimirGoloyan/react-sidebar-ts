import React from "react";

interface IButtonProps {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IButtonProps> = ({ children, onClick, className }) => {
  return (
    <button className={`app-button, ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
