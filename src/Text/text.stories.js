import React from "react";
import { Text } from "../index";
import { Section } from "../index";

export default {
  title: "Text"
};

export const Theme = () => (
  <Section title="Texts" titleScroll={true}>
    <Text> Normal </Text>
    <Text theme="primary"> Primary </Text>
    <Text theme="warning"> Warning </Text>
    <Text theme="success"> Success </Text>
    <Text theme="error"> Error </Text>
    <Text theme="disabled"> Disabled </Text>
  </Section>
);
