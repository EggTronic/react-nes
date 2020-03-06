import React from "react";
import classnames from "classnames";
import "./radio.scss";

interface RadioProps {
  className: string;
  theme: "primary" | "success" | "warning" | "error" | "disabled" | "dark";
  value: string;
  label: string;
  disabled: boolean;
  isActive: boolean;
  onClick: (value: any) => any;
}

const Radio: React.FC<RadioProps> = ({
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
      type="radio"
      disabled={theme === "disabled"}
      className={classnames(className, "nes-radio")}
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

export default Radio;
