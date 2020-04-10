import React from "react";

interface CheckboxValues {
  [key: string]: boolean;
}

interface CheckboxGroupProps {
  className: string;
  selectedValues: CheckboxValues;
  onChange: (value: any) => any;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  className,
  children,
  selectedValues,
  onChange,
  ...other
}) => {
  const handleChange = label => {
    onChange(label);
  };

  return (
    <div className="nes-checkbox-group" {...other}>
      {React.Children.map(children, (child: React.ReactElement<any>) => {
        // here should validate the type of child
        return React.cloneElement(child, {
          label: child.props.label,
          value: child.props.value,
          isActive: selectedValues[child.props.label],
          onClick: handleChange
        });
      })}
    </div>
  );
};

export default CheckboxGroup;
