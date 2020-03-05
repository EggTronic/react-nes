import React from "react";
import classnames from "classnames";
import "./button.scss";

interface ButtonProps {
  children: any;
  className: string;
  theme: "primary" | "success" | "warning" | "error" | "disabled" | "dark";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  theme,
  ...other
}) => (
  <button
    className={classnames(className, "nes-btn", {
      [`is-${theme}`]: theme
    })}
    {...other}
  >
    {children}
  </button>
);

export default Button;
