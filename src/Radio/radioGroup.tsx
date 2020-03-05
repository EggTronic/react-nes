import React from "react";
import { Radio } from "../index";

interface RadioGroupProps {
  className: string;
  selectedValue: string;
  onChange: (value: any) => any;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  className,
  children,
  selectedValue,
  onChange,
  ...other
}) => {
  const handleChange = value => {
    onChange(value);
  };

  return (
    <div className="nes-radio-group" {...other}>
      {React.Children.map(children, (child: React.ReactElement<any>) => {
        return React.cloneElement(child, {
          label: child.props.label,
          value: child.props.value,
          isActive: selectedValue === child.props.value,
          onClick: handleChange
        });
      })}
    </div>
  );
};

export default RadioGroup;
