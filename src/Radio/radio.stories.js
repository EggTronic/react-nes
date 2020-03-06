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
        <Radio theme="primary" value="1" label="primary" />
        <Radio theme="success" value="2" label="success" />
        <Radio theme="warning" value="3" label="warning" />
        <Radio value="4" label="normal" />
        <Radio theme="error" value="5" label="error" />
        <Radio theme="disabled" value="5" label="disabled" />
      </RadioGroup>
    </State>
  </Section>
);
