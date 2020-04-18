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
    <Input label="default" onChange={onChange} placeholder="default"></Input>
    <Input label="success" theme="success" onChange={onChange} placeholder="success"></Input>
    <Input label="warning" theme="warning" onChange={onChange} placeholder="warning"></Input>
    <Input label="error" theme="error" onChange={onChange} placeholder="error"></Input>
    <Input label="dark" theme="dark" onChange={onChange} placeholder="dark"></Input>
  </Section>
);

export const Inline = () => (
  <Section title="Input - Inline">
    <Input label="default" isInline={true} onChange={onChange} placeholder="default"></Input>
    <Input label="success" isInline={true} theme="success" onChange={onChange} placeholder="success"></Input>
    <Input label="warning" isInline={true} theme="warning" onChange={onChange} placeholder="warning"></Input>
    <Input label="error" isInline={true} theme="error" onChange={onChange} placeholder="error"></Input>
    <Input label="dark" isInline={true} theme="dark" onChange={onChange} placeholder="dark"></Input>
  </Section>
);