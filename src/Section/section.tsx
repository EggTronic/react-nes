import React from "react";
import "./section.scss";
import classnames from "classnames";

interface SectionProps {
  children: any;
  className: string;
  theme: "primary" | "success" | "warning" | "error" | "disabled" | "dark";
  fill: boolean;
  title: string;
  titleCenter: boolean;
  titleStyle: string;
  titleScroll: boolean;
  isRounded: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  fill,
  theme,
  title,
  titleCenter,
  titleStyle,
  titleScroll,
  isRounded,
  ...other
}) => (
  <section
    className={classnames(className, "nes-container", {
      [`nes-container_${theme}`]: theme !== "dark" ? theme : false,
      "is-dark": theme === "dark",
      "with-title": title,
      [`nes-container-filled_${theme}-shadow`]: fill,
      "with-title_flow": titleScroll,
      "is-centered": titleCenter,
      "is-rounded": isRounded
    })}
    {...other}
  >
    <h3
      className={titleStyle ? titleStyle : "title"}
      style={{ display: title ? "" : "none" }}
    >
      <p>{title}</p>
    </h3>
    {children}
  </section>
);

export default Section;
