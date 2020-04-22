import React from "react";
import "./select.scss";
import classnames from "classnames";

interface SelectProps {
  children: any;
  className: string;
  theme: "primary" | "success" | "warning" | "error" | "disabled" | "dark";
  label: string;
  selections: { [key: string]: string };
  onChange: (value: any) => any;
  required: boolean;
}

const Select: React.FC<SelectProps> = ({
  className,
  theme,
  selections,
  label,
  onChange,
  required,
  ...other
}) => {
  return (
    <div
      className={classnames(
        className,
        "nes-select",
        {
          [`is-${theme}`]: theme
        })}
      style={theme === "dark" ? { backgroundColor: "#212529" } : null}
    >
      <select
        required={required}
        defaultValue={'DEFAULT'}
        onChange={e => onChange(e.target.value)}
        disabled={theme === "disabled"}
        {...other}>
        <option
          value="DEFAULT"
          disabled
          hidden
        >
          {label}
        </option>
        {Object.keys(selections).map(k => {
          return <option key={k} value={k}>{selections[k]}</option>
        })
        }
      </select>
    </div>
  );
};

export default Select;
