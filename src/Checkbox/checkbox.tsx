import React from "react";
import classnames from "classnames";
import "./checkbox.scss";

interface CheckboxProps {
  className: string;
  theme: "primary" | "success" | "warning" | "error" | "disabled" | "dark";
  value: string;
  label: object;
  disabled: boolean;
  isActive: boolean;
  onClick: (value: any) => any;
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  theme,
  isActive,
  value,
  label,
  disabled,
  onClick,
  ...other
}) => (
  <label
    className={classnames(className, {
      [`is-${theme}`]: theme
    })}
  >
    <input
      type="checkbox"
      disabled={theme === "disabled"}
      className={classnames(className, "nes-checkbox")}
      value={value}
      checked={isActive && !(theme === "disabled")}
      onChange={() => {
        onClick(value);
      }}
      {...other}
    />
    <span>{label}</span>
  </label>
);

export default Checkbox;
