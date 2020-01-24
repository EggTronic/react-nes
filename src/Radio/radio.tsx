import React from "react";
import classnames from 'classnames';
import './radio.scss';

interface RadioProps {
  children: any;
  className: string;
  theme: "primary" | "success" | "warning" | "error" | "disabled" | "dark";
  onValueChange: (value: string) => void;
  options: Array<{ value: string; label: string; selected: boolean }>;
}

const Radio: React.FC<RadioProps> = ({ children, className, theme, options, onValueChange, ...other }) => (
  <div>
    {options.map((option, index) => (
      <label
        key={index}
        className="nes-radio-group"
        onClick={() => onValueChange(option.value)}
      >
        <input
          type="radio"
          className={classnames(
            className, 
            "nes-radio",
            {
              [`is-${theme}`]: theme,
            },
          )}
          value={option.value}
          checked={option.selected}
          onChange={() => {}}
          {...other}
        />
        <span>{option.label}</span>
    </label>
    ))}
  </div>
);  

export default Radio;
