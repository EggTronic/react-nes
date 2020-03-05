import React from "react";
import classnames from "classnames";

interface TextProps {
  children: any;
  className: string;
  theme: "primary" | "success" | "warning" | "error" | "disabled";
}

const Text: React.FC<TextProps> = ({
  children,
  className,
  theme,
  ...other
}) => (
  <span
    className={classnames(className, "nes-text", {
      [`is-${theme}`]: theme
    })}
    {...other}
  >
    {children}
  </span>
);

export default Text;
