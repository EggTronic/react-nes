import React from "react";
import classnames from "classnames";
import "./modal.scss";

interface ModalProps {
  children: any;
  className: string;
  title: string;
  visible: boolean;
  onOk: ()=>{};
  onCancel: ()=>{};
  footer: any;
  theme: "primary" | "success" | "warning" | "error" | "disabled" | "dark";
}

const Modal: React.FC<ModalProps> = ({
  children,
  className,
  theme,
  ...other
}) => {
  
  return (

  );
}

export default Modal;
