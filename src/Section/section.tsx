import React from "react";
import './section.scss';
import classnames from 'classnames'

interface SectionProps {
  children: any;
  className: string;
  theme: "primary" | "success" | "warning" | "error" | "disabled";
  fill: boolean;
  title: string;
  titleStyle: string;
}

const Section: React.FC<SectionProps> = ({ children, className, fill, theme, title, titleStyle, ...other }) => (
  <section 
    className = {classnames(
        className,
        'nes-container',
        {
            [`nes-container_${theme}`]: theme,
            'with-title': title,
            [`nes-container-filled_${theme}-shadow`]: fill
        }
    )}
    {...other}
  >
    <h3 className={titleStyle ? titleStyle : 'title'}>
        {title}
    </h3>
    {children}
  </section>
);  

export default Section;
