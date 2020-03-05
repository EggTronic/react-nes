import React from "react";
import { Radio, RadioGroup } from "../index";
import { Section } from "../index";
import { State, Store } from "@sambego/storybook-state";

export default {
  title: "Radio"
};

const store = new Store({
  selectedValue: "1"
});

const onValueChange = value => {
  store.set({ selectedValue: value });
};

export const Theme = () => (
  <Section title="Radios" titleScroll={true}>
    <State store={store}>
      <RadioGroup
        selectedValue={store.get("selectedValue")}
        onChange={onValueChange}
      >
        <Radio theme="primary" value="1" label="o1" />
        <Radio theme="success" value="2" label="o2" />
      </RadioGroup>
    </State>
  </Section>
);
