import React from "react";
import "./input.scss";
import classnames from "classnames";

interface InputProps {
  children: any;
  className: string;
  label: string;
  theme: "primary" | "success" | "warning" | "error" | "disabled" | "dark";
  onChange: (value: any) => any;
  isInline: boolean;
}

const Input: React.FC<InputProps> = ({
  children,
  className,
  label,
  theme,
  onChange,
  isInline,
  ...other
}) => {
  return( 
    <div 
      className={classnames(className, "nes-field", {["is-inline"]: isInline})}
      style={theme === "dark"? {backgroundColor: "#212529", padding: "1em"} : {padding: "1em"}}
    > 
      <label
        style={theme === "dark"? {color: "#fff"} : null}
      >{label}</label>
      <input 
        type="text" 
        className={classnames(
          "nes-input",
          {
            [`is-${theme}`]: theme
          }
        )}
        onChange={e => onChange(e.target.value)}
        {...other}
      >
      </input>
    </div>
  );
};

export default Input;
