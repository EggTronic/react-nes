import React from "react";
import { Checkbox, CheckboxGroup } from "../index";
import { Section } from "../index";
import { State, Store } from "@sambego/storybook-state";

export default {
  title: "Checkbox"
};

const store = new Store({
  selectedValues: {
    "1": true,
    "2": false
  }
});

const onValueChange = value => {
  store.set({
    selectedValues: {
      ...store.get("selectedValues"),
      value: !store.get("selectedValues")[value]
    }
  });
};

export const Theme = () => (
  <Section title="Checkbox" titleScroll={true}>
    <State store={store}>
      <CheckboxGroup>
        <Checkbox />
      </CheckboxGroup>
    </State>
  </Section>
);
