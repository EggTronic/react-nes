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

// here we use class component so that RadioGroup can inject props into Radio
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
  <label className="nes-radio-group">
    <input
      type="radio"
      className={classnames(className, "nes-radio", {
        [`is-${theme}`]: theme
      })}
      value={value}
      checked={isActive}
      onChange={() => {
        onClick(value);
      }}
      {...other}
    />
    <span>{label}</span>
  </label>
);

export default Radio;
