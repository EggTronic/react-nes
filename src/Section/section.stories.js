import React from "react";
import { Section } from "../index";

export default {
  title: "Section"
};

export const Theme = () => (
  <div>
    <Section> Normal </Section>
    <Section theme="primary"> Primary </Section>
    <Section theme="success"> Success </Section>
    <Section theme="warning"> Warning </Section>
    <Section theme="error"> Error </Section>
    <Section theme="disabled"> Disabled </Section>
    <Section theme="dark"> Dark </Section>
  </div>
);

export const Title = () => (
  <div>
    <Section title={"Static"} theme="primary">
      {" "}
      Static Title{" "}
    </Section>
    <Section title={"Rolling"} titleScroll={true} theme="success">
      {" "}
      This title is rolling!{" "}
    </Section>
  </div>
);

export const Fill = () => (
  <div>
    <Section title={"Primary"} fill={true} theme="primary">
      {" "}
      Primary{" "}
    </Section>
    <Section title={"Success"} fill={true} theme="success">
      {" "}
      Success{" "}
    </Section>
    <Section title={"Warning"} fill={true} theme="warning">
      {" "}
      Warning{" "}
    </Section>
    <Section title={"Error"} fill={true} theme="error">
      {" "}
      Error{" "}
    </Section>
    <Section title={"Disabled"} fill={true} titleScroll={true} theme="disabled">
      {" "}
      Disabled{" "}
    </Section>
    <Section title={"Dark"} fill={true} theme="dark">
      {" "}
      Dark{" "}
    </Section>
  </div>
);
