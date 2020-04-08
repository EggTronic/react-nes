import React from "react";
import { Checkbox, CheckboxGroup } from "../index";
import { Section } from "../index";
import { State, Store } from "@sambego/storybook-state";

export default {
  title: "Checkbox"
};

const store = new Store({
  selectedValues: {
    "1": false,
    "2": false,
    "3": false,
    "4": false
  }
});

const onValueChange = value => {
  store.set({
    selectedValues: {
      ...store.get("selectedValues"),
      [value]: !store.get("selectedValues")[value]
    }
  });
};

export const Theme = () => (
  <Section title="Checkbox" titleScroll={true}>
    <State store={store}>
      <CheckboxGroup>
        <Checkbox theme="primary" value={store.get("selectedValues")[1]} label="primary" />
        <Checkbox theme="success" value={store.get("selectedValues")[2]} label="success" />
        <Checkbox theme="warning" value={store.get("selectedValues")[3]} label="warning" />
        <Checkbox theme="dark" value={store.get("selectedValues")[4]} label="dark" />
      </CheckboxGroup>
    </State>
  </Section>
);
