import React from "react";
import { Select, Section } from "../index";

export default {
  title: "Select"
};

const selections = {
  "selection_1": "Selection 1",
  "selection_2": "Selection 2",
  "selection_3": "Selection 3",
}

const onValueChange = value => {
  console.log(value)
};

export const Theme = () => (
  <Section title="Select - Theme">
    <Select onChange={onValueChange} selections={selections} label={"Select..."} />
    <br></br>
    <Select theme="success" onChange={onValueChange} selections={selections} label={"Select..."} />
    <br></br>
    <Select theme="error" onChange={onValueChange} selections={selections} label={"Select..."} />
    <br></br>
    <Select theme="warning" onChange={onValueChange} selections={selections} label={"Select..."} />
    <br></br>
    <Select theme="disabled" onChange={onValueChange} selections={selections} label={"Disabled..."} />
    <br></br>
    <Select theme="dark" onChange={onValueChange} selections={selections} label={"Select..."} />
  </Section>
);