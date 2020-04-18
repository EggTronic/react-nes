import React from "react";
import { Textarea, Section } from "../index";

export default {
  title: "Textarea"
};

const onChange = (value) => {
  console.log(value);
}

export const Theme = () => (
  <Section title="Textarea - Theme">
    <Textarea label="default" placeholder="default" onChange={onChange}></Textarea>
    <Textarea theme="success" label="success" placeholder="success" onChange={onChange}></Textarea>
    <Textarea theme="warning" label="warning" placeholder="warning" onChange={onChange}></Textarea>
    <Textarea theme="error" label="error" placeholder="error" onChange={onChange}></Textarea>
    <Textarea theme="dark" label="dark" placeholder="dark" onChange={onChange}></Textarea>
  </Section>
);