import React from "react";

interface ButtonProps {
  children: any;
  className: string;
  theme: "is-primary" | "is-success" | "is-warning" | "is-error" | "is-disabled";
}

const Button: React.FC<ButtonProps> = ({ children, theme, ...other }) => (
  <button 
    className={`nes-btn ${theme}`}
    {...other}
  >
    {children}
  </button>
);  

export default Button;
