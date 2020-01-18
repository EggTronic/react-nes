import React from "react";
import {Section} from "../index";

export default {
  title: "Section"
};

export const Theme = () => <div>
    <Section title={'Normal'}> Normal </Section>
    <Section title={'Primary'} theme='primary'> Primary </Section>
    <Section title={'Success'} theme='success'> Success </Section>
    <Section title={'Warning'} theme='warning'> Warning </Section>
    <Section title={'Error'} theme='error'> Error </Section>
    <Section title={'Disabled'} theme='disabled'> Disabled </Section>
</div>;

