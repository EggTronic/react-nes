import React from "react";
import classnames from "classnames";
import "./button.scss";

export interface ButtonProps {
  children?: any;
  className?: string;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  icon?: React.ReactNode;
  loadingIcon?: React.ReactNode;
  theme?: "primary" | "success" | "warning" | "error" | "disabled" | "dark";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  theme,
  loading,
  onClick,
  icon,
  loadingIcon,
  ...other
}) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (loading) {
      return;
    }
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  };

  const iconNode =
    icon && !loading ? (
      icon
    ) : (
        loadingIcon
      );

  return (
    <button
      className={classnames(className, "nes-btn", {
        [`is-${theme}`]: theme
      })}
      onClick={handleClick}
      {...other}
    >
      {iconNode}
      {children}
    </button>
  );

}

export default Button;
