import React from "react";
import classnames from "classnames";
import Dialog from 'rc-dialog';
import { Button } from "../index";
import {ButtonProps} from "../Button/button";
import "./modal.scss";

type getContainerFunc = () => HTMLElement;

export interface ModalProps {
  children: any;
  className: string;
  title: string;
  visible: boolean;
  onOk: (e: React.MouseEvent<HTMLElement>) => void;
  onCancel: (e: React.MouseEvent<HTMLElement>) => void;
  footer: any;
  prefixCls?: string;
  wrapClassName?: string;
  centered?: boolean;
  okText?: React.ReactNode;
  okType?: "primary" | "success" | "warning" | "error" | "disabled" | "dark";
  okButtonProps?: ButtonProps;
  confirmLoading: boolean;
  cancelText?: React.ReactNode;
  getContainer?: string | HTMLElement | getContainerFunc | false | null;
  theme: "primary" | "success" | "warning" | "error" | "disabled" | "dark";
}

export interface ModalLocale {
  okText: string;
  cancelText: string;
  justOkText: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  className,
  theme,
  onCancel,
  onOk,
  okText,
  cancelText,
  okType,
  footer,
  visible,
  wrapClassName,
  confirmLoading,
  centered,
  getContainer,
  okButtonProps,
  // closeIcon,
  ...other
}) => {
  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onCancel) {
      onCancel(e);
    }
  };

  const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onOk) {
      onOk(e);
    }
  };

  const renderFooter = (locale: ModalLocale) => {
    return (
      <div>
        <Button onClick={handleCancel}>
          {cancelText || locale.cancelText}
        </Button>
        <Button
          theme={okType}
          loading={confirmLoading}
          onClick={handleOk}
          {...okButtonProps}
        >
          {okText || locale.okText}
        </Button>
      </div>
    );
  };

  // const closeIconToRender = (
  //   <span className={`${prefixCls}-close-x`}>
  //     {closeIcon || <CloseOutlined className={`${prefixCls}-close-icon`} />}
  //   </span>
  // );

  const wrapClassNameExtended = classnames(wrapClassName);

  return (
    <Dialog
      {...other}
      getContainer={getContainer === undefined ? null : getContainer}
      wrapClassName={wrapClassNameExtended}
      footer={footer === undefined ? renderFooter : footer}
      visible={visible}
      // mousePosition={mousePosition}
      onClose={handleCancel}
    // closeIcon={closeIconToRender}
    />
  );
}

export default Modal;
