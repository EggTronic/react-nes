import React from "react";
import { Checkbox } from "../index";

interface CheckboxGroupProps {
  className: string;
  selectedValues: any;
  onChange: (value: any) => any;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  className,
  children,
  selectedValues,
  onChange,
  ...other
}) => {
  const handleChange = value => {
    onChange(value);
  };

  return (
    <div className="nes-checkbox-group" {...other}>
      {React.Children.map(children, (child: React.ReactElement<any>) => {
        // here should validate the type of child
        return React.cloneElement(child, {
          label: child.props.label,
          value: child.props.value,
          isActive: selectedValues[child.props.value],
          onClick: handleChange
        });
      })}
    </div>
  );
};

export default CheckboxGroup;
