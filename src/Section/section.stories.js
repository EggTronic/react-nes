import React from "react";
import {Section} from "../index";

export default {
  title: "Section"
};

export const Theme = () => <div>
    <Section> Normal </Section>
    <Section theme='primary'> Primary </Section>
    <Section theme='success'> Success </Section>
    <Section theme='warning'> Warning </Section>
    <Section theme='error'> Error </Section>
    <Section theme='disabled'> Disabled </Section>
</div>;

export const Title = () => <div>
    <Section title={'Normal'}> Normal </Section>
    <Section title={'Primary'} theme='primary'> Primary </Section>
    <Section title={'Success'} theme='success'> Success </Section>
    <Section title={'Warning'} theme='warning'> Warning </Section>
    <Section title={'Error'} theme='error'> Error </Section>
    <Section title={'Disabled'} theme='disabled'> Disabled </Section>
</div>;

export const Fill = () => <div>
    <Section title={'Normal'} fill={true}> Normal </Section>
    <Section title={'Primary'} fill={true} theme='primary'> Primary </Section>
    <Section title={'Success'} fill={true} theme='success'> Success </Section>
    <Section title={'Warning'} fill={true} theme='warning'> Warning </Section>
    <Section title={'Error'} fill={true} theme='error'> Error </Section>
    <Section title={'Disabled'} fill={true} theme='disabled'> Disabled </Section>
</div>;

