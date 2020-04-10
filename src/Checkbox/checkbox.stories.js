import React from "react";
import { Checkbox, CheckboxGroup } from "../index";
import { Section } from "../index";
import { State, Store } from "@sambego/storybook-state";

export default {
  title: "Checkbox"
};

const selectedValues = {
  "primary": true,
  "success": false,
  "warning": false,
  "error": false,
  "dark": false,
  "disabled": false
}

const store = new Store({
  selectedValues
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
      <CheckboxGroup onChange={onValueChange} selectedValues={store.get("selectedValues")}>
        <Checkbox theme="primary" value={store.get("selectedValues")["primary"]} label="primary" />
        <Checkbox theme="success" value={store.get("selectedValues")["success"]} label="success" />
        <Checkbox theme="warning" value={store.get("selectedValues")["warning"]} label="warning" />
        <Checkbox theme="error" value={store.get("selectedValues")["error"]} label="error" />
        <Checkbox theme="disabled" value={store.get("selectedValues")["disabled"]} label="disabled" />
        <Checkbox theme="dark" value={store.get("selectedValues")["dark"]} label="dark" />
      </CheckboxGroup>
    </State>
  </Section>
);
