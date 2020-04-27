import React from "react";
import classnames from "classnames";
import Dialog from 'rc-dialog';
import { Button } from "../index";
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
  footer,
  visible,
  wrapClassName,
  centered,
  getContainer,
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
    const { okText, okType, cancelText, confirmLoading } = this.props;
    return (
      <div>
        <Button onClick={this.handleCancel} {...this.props.cancelButtonProps}>
          {cancelText || locale.cancelText}
        </Button>
        <Button
          type={okType}
          loading={confirmLoading}
          onClick={this.handleOk}
          {...this.props.okButtonProps}
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
      onClose={this.handleCancel}
    // closeIcon={closeIconToRender}
    />
  );
}

export default Modal;
