import React from "react";

interface CheckboxValues {
  [key: string]: boolean;
}

interface CheckboxGroupProps {
  className: string;
  selectedValues: CheckboxValues;
  onChange: (value: any) => any;
  limit: number;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  className,
  children,
  selectedValues,
  onChange,
  limit,
  ...other
}) => {
  const handleChange = label => {
    let numberOfSelectedValues = 0;
    Object.values(selectedValues).forEach(value=>{
      if (value === true) {
        numberOfSelectedValues += 1;
      }
    });
    // only allow to modify if label has been selected or the number of seletected values is less than limit
    if (limit) {
      if (numberOfSelectedValues < limit || selectedValues[label]) {
        onChange(label);
      }
    } else {
      onChange(label);
    }
    
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
