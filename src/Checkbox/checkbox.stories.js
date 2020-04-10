import React from "react";
import { Checkbox, CheckboxGroup } from "../index";
import { Section } from "../index";
import { State, Store } from "@sambego/storybook-state";

export default {
  title: "Checkbox"
};

const store1 = new Store({
  selectedValues: {
    "primary": true,
    "success": false,
    "warning": false,
    "error": false,
    "dark": false,
    "disabled": true
  }
});

const store2 = new Store({
  selectedValues: {
    "selection1": false,
    "selection2": false,
    "selection3": false,
    "selection4": false,
    "selection5": false
  }
});

const onValueChange = value => {
  console.log(value)
  store1.set({
    selectedValues: {
      ...store1.get("selectedValues"),
      [value]: !store1.get("selectedValues")[value]
    }
  });
};

const onValueChange2 = value => {
  console.log(value)
  store2.set({
    selectedValues: {
      ...store2.get("selectedValues"),
      [value]: !store2.get("selectedValues")[value]
    }
  });
};

export const Theme = () => (
    <Section title="Checkbox - Theme">
      <State store={store1}>
        <CheckboxGroup onChange={onValueChange} selectedValues={store1.get("selectedValues")}>
          <Checkbox theme="primary" value={store1.get("selectedValues")["primary"]} label="primary" />
          <Checkbox theme="success" value={store1.get("selectedValues")["success"]} label="success" />
          <Checkbox theme="warning" value={store1.get("selectedValues")["warning"]} label="warning" />
          <Checkbox theme="error" value={store1.get("selectedValues")["error"]} label="error" />
          <Checkbox theme="disabled" value={store1.get("selectedValues")["disabled"]} label="disabled" />
          <Checkbox theme="dark" value={store1.get("selectedValues")["dark"]} label="dark" />
        </CheckboxGroup>
      </State>
    </Section>
);

export const Limit = () => (
  <Section title="Checkbox - Cannot select more than 3 selections">
    <State store={store2}>
      <CheckboxGroup onChange={onValueChange2} selectedValues={store2.get("selectedValues")} limit = {3}>
        <Checkbox theme="dark" value={store2.get("selectedValues")["selection1"]} label="selection1" />
        <Checkbox theme="dark" value={store2.get("selectedValues")["selection2"]} label="selection2" />
        <Checkbox theme="dark" value={store2.get("selectedValues")["selection3"]} label="selection3" />
        <Checkbox theme="dark" value={store2.get("selectedValues")["selection4"]} label="selection4" />
        <Checkbox theme="dark" value={store2.get("selectedValues")["selection5"]} label="selection5" />
      </CheckboxGroup>
    </State>
  </Section>
);
