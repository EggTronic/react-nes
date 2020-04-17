import React from "react";
import { Input, Section } from "../index";

export default {
  title: "Input"
};

const onChange = (value) => {
  console.log(value);
}

export const Theme = () => (
  <Section title="Input - Theme">
    <Input label="default" onChange={onChange}></Input>
    <Input label="success" theme="success" onChange={onChange}></Input>
    <Input label="warning" theme="warning" onChange={onChange}></Input>
    <Input label="error" theme="error" onChange={onChange}></Input>
    <Input label="dark" theme="dark" isInline={true} onChange={onChange}></Input>
  </Section>
);
