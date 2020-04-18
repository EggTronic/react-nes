import React from "react";
import "./textarea.scss";
import classnames from "classnames";

interface InputProps {
  children: any;
  className: string;
  label: string;
  theme: "primary" | "success" | "warning" | "error" | "disabled" | "dark";
  onChange: (value: any) => any;
}

const Input: React.FC<InputProps> = ({
  children,
  className,
  label,
  theme,
  onChange,
  ...other
}) => {
  return( 
    <div 
      className="item"
      style={theme === "dark"? {backgroundColor: "#212529", padding: "1em"} : {padding: "1em"}}
    >
      <label
        style={theme === "dark"? {color: "#fff"} : null}
      >
        {label}
      </label>
      <textarea
       className={classnames(
        "nes-textarea",
        {
          [`is-${theme}`]: theme
        }
      )}
       onChange={e => onChange(e.target.value)}
       {...other}
      >
        {children}
      </textarea>
    </div>
  );
};

export default Input;
